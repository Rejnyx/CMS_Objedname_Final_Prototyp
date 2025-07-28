import { useState, useMemo } from 'react';
import toast from 'react-hot-toast';
import CategoryPanel from '../components/categories/CategoryPanel';
import ItemPanel from '../components/items/ItemPanel';
import ItemEditorPanel from '../components/items/ItemEditorPanel';
import { type Item } from '../types';
import { mockCategories } from '../data/mock';
import { findCategoryById, getAllItemsFromCategory, getCategoryPathById } from '../utils/categoryUtils';

const CategoryManagementPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Item | null>(null);
  const [items, setItems] = useState<Item[]>(mockCategories.flatMap(c => getAllItemsFromCategory(c)));
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);

  const handleSelectCategory = (categoryId: string) => {
    setSelectedCategoryId(categoryId);
  };

  const displayedItems = useMemo(() => {
    if (!selectedCategoryId) {
      return items; // Show all items if no category is selected
    }
    const selectedCategory = findCategoryById(mockCategories, selectedCategoryId);
    return selectedCategory ? getAllItemsFromCategory(selectedCategory) : [];
  }, [selectedCategoryId, items]);

  const breadcrumbPath = useMemo(() => {
    if (!selectedCategoryId) {
      return [{ id: 'all', name: 'Všechny kategorie', icon: '', items: [] }];
    }
    return getCategoryPathById(mockCategories, selectedCategoryId);
  }, [selectedCategoryId]);

  const handleEditItem = (item: Item) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  const handleAddNewItem = () => {
    // This will be expanded to create a truly new item
    const newItemTemplate: Item = {
      id: `new-${Date.now()}`,
      name: 'Nová položka',
      description: '',
      baseIngredients: [],
      tags: [],
      status: 'AVAILABLE',
      variants: [{ id: 'v1', name: 'Standard', price: 0 }],
    };
    setEditingItem(newItemTemplate);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingItem(null);
  };

  const handleSaveItem = (savedItem: Item) => {
    const itemIndex = items.findIndex(i => i.id === savedItem.id);
    let isNew = false;
    if (itemIndex > -1) {
      const updatedItems = [...items];
      updatedItems[itemIndex] = savedItem;
      setItems(updatedItems);
    } else {
      setItems([...items, savedItem]);
      isNew = true;
    }
    toast.success(isNew ? 'Položka úspěšně vytvořena!' : 'Změny byly uloženy!');
    console.log('Saved item:', savedItem);
  };


  return (
    <>
      <div className="bg-white rounded-2xl w-full h-full flex">
        <div className="w-80 border-r border-neutral-200">
          <CategoryPanel 
            selectedCategoryId={selectedCategoryId}
            onSelectCategory={handleSelectCategory}
          />
        </div>
        <div className="flex-1 min-h-0 flex flex-col">
          <ItemPanel
            onAddItem={handleAddNewItem}
            onEditItem={handleEditItem}
            items={displayedItems}
            breadcrumbPath={breadcrumbPath}
            categoryName={breadcrumbPath.length > 0 ? breadcrumbPath[breadcrumbPath.length - 1].name : 'Všechny položky'}
          />
        </div>
      </div>
      <ItemEditorPanel
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        item={editingItem}
        onSave={handleSaveItem}
      />
    </>
  );
};

export default CategoryManagementPage;
