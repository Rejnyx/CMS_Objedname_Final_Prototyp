import { useState } from 'react';
import CategoryList from './CategoryList';
import SearchInput from '../ui/SearchInput';
import { mockCategories } from '../../data/mock';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors, DragOverlay } from '@dnd-kit/core';
import type { DragEndEvent, DragStartEvent } from '@dnd-kit/core';
import { sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import { reorderCategories, findCategoryById } from '../../utils/categoryUtils';
import type { Category } from '../../types';
import CategoryItem from './CategoryItem';

interface CategoryPanelProps {
  selectedCategoryId: string | null;
  onSelectCategory: (id: string) => void;
}

const CategoryPanel: React.FC<CategoryPanelProps> = ({ selectedCategoryId, onSelectCategory }) => {
  const [categories, setCategories] = useState(mockCategories);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleToggle = (categoryId: string) => {
    setExpanded(prev => ({ ...prev, [categoryId]: !prev[categoryId] }));
  };

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    const category = findCategoryById(categories, active.id as string);
    setActiveCategory(category);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const newCategories = reorderCategories(categories, active.id as string, over.id as string);
      setCategories(newCategories);
    }
    setActiveCategory(null);
  };

  return (
    <div className="p-6 h-full flex flex-col">
      <h2 className="text-2xl font-bold mb-4 text-neutral-900">Kategorie</h2>
      <div className="mb-4">
        <SearchInput />
      </div>
      <div className="flex-1 overflow-y-auto">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          <CategoryList 
            categories={categories}
            expanded={expanded}
            onToggle={handleToggle}
            selectedCategoryId={selectedCategoryId}
            onSelectCategory={onSelectCategory}
          />
          <DragOverlay>
            {activeCategory ? (
              <CategoryItem
                category={activeCategory}
                isExpanded={false}
                onToggle={() => {}}
                onSelectCategory={() => {}}
                isActive={false}
              />
            ) : null}
          </DragOverlay>
        </DndContext>
      </div>
    </div>
  );
};

export default CategoryPanel;
