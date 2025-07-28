import { AnimatePresence } from 'framer-motion';
import { type Item } from '../../types';
import ItemCard from './ItemCard';

interface ItemListProps {
  items: Item[];
  onEditItem: (item: Item) => void;
}

const ItemList: React.FC<ItemListProps> = ({ items, onEditItem }) => {
  return (
    <div className="space-y-4">
      <AnimatePresence>
        {items.map((item) => (
          <ItemCard key={item.id} item={item} onEdit={() => onEditItem(item)} />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ItemList;
