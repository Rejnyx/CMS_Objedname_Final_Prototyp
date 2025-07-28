import { arrayMove } from '@dnd-kit/sortable';
import type { Category, Item } from '../types';

type FindResult = {
  array: Category[];
  index: number;
} | null;

// Helper to find a category and its parent array recursively
function findCategoryAndParent(categories: Category[], id: string): FindResult {
  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];
    if (category.id === id) {
      return { array: categories, index: i };
    }
    if (category.subcategories) {
      const found = findCategoryAndParent(category.subcategories, id);
      if (found) {
        return found;
      }
    }
  }
  return null;
}

export function reorderCategories(categories: Category[], activeId: string, overId: string): Category[] {
  const newCategories = JSON.parse(JSON.stringify(categories)); // Deep copy

  const activeLocation = findCategoryAndParent(newCategories, activeId);
  const overLocation = findCategoryAndParent(newCategories, overId);

  // Reordering only within the same list
  if (activeLocation && overLocation && activeLocation.array === overLocation.array) {
    const activeIndex = activeLocation.index;
    const overIndex = overLocation.index;
    
    const movedArray = arrayMove(activeLocation.array, activeIndex, overIndex);
    
    const parentOfMoved = findParentArray(newCategories, activeLocation.array);
    if (parentOfMoved) {
        parentOfMoved.subcategories = movedArray;
    } else {
        return movedArray;
    }

    return newCategories;
  }
  
  return categories;
}

function findParentArray(categories: Category[], childArray: Category[]): Category | null {
    for(const category of categories) {
        if(category.subcategories === childArray) {
            return category;
        }
        if(category.subcategories) {
            const found = findParentArray(category.subcategories, childArray);
            if(found) return found;
        }
    }
    return null;
}

export function findCategoryById(categories: Category[], id: string): Category | null {
  for (const category of categories) {
    if (category.id === id) {
      return category;
    }
    if (category.subcategories) {
      const found = findCategoryById(category.subcategories, id);
      if (found) {
        return found;
      }
    }
  }
  return null;
}

export function getAllItemsFromCategory(category: Category): Item[] {
    let items = [...category.items];
    if (category.subcategories) {
        for (const sub of category.subcategories) {
            items = [...items, ...getAllItemsFromCategory(sub)];
        }
    }
    return items;
}

export function getCategoryPathById(categories: Category[], id: string): Category[] {
  const path: Category[] = [];

  function findPath(cats: Category[]): boolean {
    for (const category of cats) {
      path.push(category);
      if (category.id === id) {
        return true;
      }
      if (category.subcategories && findPath(category.subcategories)) {
        return true;
      }
      path.pop();
    }
    return false;
  }

  findPath(categories);
  return path;
}
