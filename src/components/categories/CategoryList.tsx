import type { Category } from '../../types';
import CategoryItem from './CategoryItem';
import { motion, AnimatePresence } from 'framer-motion';
import { SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import React from 'react';

// Internal Sortable Item Component
const SortableItem: React.FC<{
  category: Category;
  isExpanded: boolean;
  onToggle: (id: string) => void;
  level: number;
  expanded: Record<string, boolean>;
  selectedCategoryId: string | null;
  onSelectCategory: (id: string) => void;
}> = ({ category, isExpanded, onToggle, level, expanded, selectedCategoryId, onSelectCategory }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: category.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  
  const hasSubcategories = category.subcategories && category.subcategories.length > 0;

  return (
    <li ref={setNodeRef} style={style} className={isDragging ? 'opacity-50' : ''}>
      <CategoryItem
        category={category}
        isExpanded={isExpanded}
        onToggle={onToggle}
        handleListeners={{...attributes, ...listeners}}
        isActive={selectedCategoryId === category.id}
        onSelectCategory={onSelectCategory}
        isDragging={isDragging}
      />
      <AnimatePresence>
        {isExpanded && hasSubcategories && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <CategoryList
              categories={category.subcategories!}
              expanded={expanded}
              onToggle={onToggle}
              level={level + 1}
              selectedCategoryId={selectedCategoryId}
              onSelectCategory={onSelectCategory}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};


interface CategoryListProps {
  categories: Category[];
  expanded: Record<string, boolean>;
  onToggle: (categoryId: string) => void;
  selectedCategoryId: string | null;
  onSelectCategory: (id: string) => void;
  level?: number;
}

const CategoryList: React.FC<CategoryListProps> = ({ categories, expanded, onToggle, selectedCategoryId, onSelectCategory, level = 0 }) => {
  const categoryIds = categories.map(c => c.id);

  return (
    <SortableContext items={categoryIds} strategy={verticalListSortingStrategy}>
      <ul className="space-y-1" style={{ paddingLeft: level > 0 ? `1rem` : '0' }}>
        {categories.map((category) => (
          <SortableItem
            key={category.id}
            category={category}
            isExpanded={!!expanded[category.id]}
            onToggle={onToggle}
            level={level}
            expanded={expanded}
            selectedCategoryId={selectedCategoryId}
            onSelectCategory={onSelectCategory}
          />
        ))}
      </ul>
    </SortableContext>
  );
};

export default CategoryList;
