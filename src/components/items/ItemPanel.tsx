import Breadcrumb from '../ui/Breadcrumb';
import Button from '../ui/Button';
import ItemList from './ItemList';
import { Plus } from 'lucide-react';
import { type Item, type Category } from '../../types';

interface ItemPanelProps {
  items: Item[];
  onAddItem: () => void;
  onEditItem: (item: Item) => void;
  breadcrumbPath: Category[];
  categoryName: string;
}

const ItemPanel: React.FC<ItemPanelProps> = ({ items, onAddItem, onEditItem, breadcrumbPath, categoryName }) => {
  return (
    <div className="h-full grid grid-rows-[auto_1fr_auto]">
      <div className="px-6 py-6 flex justify-between items-end">
        <div className="flex flex-col gap-2">
          <Breadcrumb path={breadcrumbPath} />
          <h2 className="text-neutral-900 text-2xl font-bold leading-9">Položky v {categoryName}</h2>
        </div>
        <Button onClick={onAddItem} variant="success">
          <Plus className="w-6 h-6 text-white" />
          <span className="text-white font-semibold leading-snug">Přidat položku</span>
        </Button>
      </div>
      <div className="overflow-y-auto px-6">
        <ItemList items={items} onEditItem={onEditItem} />
      </div>
      {items.length > 5 && (
        <div className="px-6 pb-6 pt-4 flex justify-end">
          <Button onClick={onAddItem} variant="success">
            <Plus className="w-6 h-6 text-white" />
            <span className="text-white font-semibold leading-snug">Přidat položku</span>
          </Button>
        </div>
      )}
    </div>
  );
};

export default ItemPanel;
