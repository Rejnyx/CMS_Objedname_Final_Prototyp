import type { Category } from '../../types';
import { GripVertical, ChevronRight, Flame, Soup, Utensils, Pizza, Salad, Carrot, CookingPot, CupSoda, Cake, Croissant } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';

// A helper to map icon names to components
const iconMap: { [key: string]: React.ElementType } = {
  Flame,
  Soup,
  Utensils,
  Pizza,
  Salad,
  Carrot,
  CookingPot,
  CupSoda,
  Cake,
  Croissant,
  Default: Utensils,
};

interface CategoryItemProps {
  category: Category;
  isActive: boolean;
  isExpanded: boolean;
  onToggle: (categoryId: string) => void;
  onSelectCategory: (id: string) => void;
  handleListeners?: Record<string, unknown>;
  isDragging?: boolean;
}

const CategoryItem = ({ category, isActive, isExpanded, onToggle, onSelectCategory, handleListeners }: CategoryItemProps) => {
  const Icon = iconMap[category.icon] || iconMap.Default;
  const hasSubcategories = category.subcategories && category.subcategories.length > 0;

  return (
    <div className="flex items-center">
      <div {...handleListeners} className="cursor-grab touch-none p-2">
        <GripVertical className="h-5 w-5 text-neutral-400" />
      </div>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          onSelectCategory(category.id);
        }}
        className={`flex-1 flex items-center h-12 px-4 py-3 rounded-lg transition-colors relative ${
          isActive
            ? 'bg-active-bg text-orange-500 font-semibold hover:brightness-95'
            : 'text-neutral-800 font-medium hover:bg-neutral-200'
        }`}
      >
        <div className={`absolute left-0 w-1 h-8 rounded-r-sm ${isActive ? 'bg-orange-500' : 'bg-transparent'}`}></div>
        
        <div className="w-6 flex-shrink-0 -ml-2">
          {hasSubcategories && (
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                onToggle(category.id);
              }}
              animate={{ rotate: isExpanded ? 90 : 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center w-full h-full"
            >
              <ChevronRight className="h-5 w-5" />
            </motion.button>
          )}
        </div>

        <Icon className="w-5 h-5 ml-2 mr-2.5" />
        <span>{category.name}</span>
      </a>
    </div>
  );
};

export default CategoryItem;
