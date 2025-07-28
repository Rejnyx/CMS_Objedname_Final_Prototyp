import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { Item } from '../../types';
import { Circle, MoreHorizontal } from 'lucide-react';
import Checkbox from '../ui/Checkbox';
import ItemActionOverlay from './ItemActionOverlay';
interface ItemCardProps {
  item: Item;
  onEdit: () => void;
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const ItemCard = React.forwardRef<HTMLDivElement, ItemCardProps>(({ item, onEdit }, ref) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isActionOverlayVisible, setIsActionOverlayVisible] = useState(false);
  const price = item.variants.length > 0 ? item.variants[0].price : 0;
  const isAvailable = item.status === 'AVAILABLE';
  const allergens = item.tags.filter(tag => tag.startsWith('alergen:')).map(tag => tag.replace('alergen:', ''));

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      layout
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="w-full p-4 bg-neutral-100 rounded-2xl shadow-sm flex items-center gap-4 relative"
    >
      <ItemActionOverlay
        isVisible={isActionOverlayVisible}
        onClose={() => setIsActionOverlayVisible(false)}
        onEdit={() => {
          onEdit();
          setIsActionOverlayVisible(false);
        }}
        onDelete={() => {
          console.log('Delete item:', item.id);
          setIsActionOverlayVisible(false);
        }}
        onDuplicate={() => {
          console.log('Duplicate item:', item.id);
          setIsActionOverlayVisible(false);
        }}
      />
      <Checkbox checked={isChecked} onChange={setIsChecked} />
      
      <img className="w-20 h-20 rounded-lg object-cover" src={item.imageUrl || "https://placehold.co/80x80"} alt={item.name} />
      
      <div className="flex-1 grid grid-cols-3 gap-4 items-center">
        {/* Name and Description */}
        <div className="col-span-1 flex flex-col justify-center gap-1">
          <div className="text-neutral-800 text-base font-bold leading-normal">{item.name}</div>
          <div className="text-neutral-600 text-sm font-normal leading-tight line-clamp-2">
            {item.description}
          </div>
        </div>
        
        {/* Ingredients */}
        <div className="col-span-1">
          <div className="text-neutral-800 text-sm font-normal leading-tight">
            <span className="font-medium text-neutral-600">Složení: </span>
            {item.baseIngredients.join(', ')}
          </div>
        </div>

        {/* Price, Status, and Actions */}
        <div className="col-span-1 flex justify-end items-center gap-6">
          <div className="flex flex-col items-end gap-1">
            <div className="text-neutral-800 text-lg font-bold leading-normal">{price} Kč</div>
            {allergens.length > 0 && (
              <div className="text-neutral-600 text-xs font-normal leading-tight">
                Alergeny: {allergens.join(', ')}
              </div>
            )}
            <div className={`inline-flex items-center gap-1.5 ${isAvailable ? 'text-green-500' : 'text-red-500'}`}>
              <Circle className="w-2 h-2" fill="currentColor" />
              <div className="text-xs font-medium leading-none">{isAvailable ? 'Dostupné' : 'Nedostupné'}</div>
            </div>
          </div>
          
          <div className="relative">
            <button onClick={() => setIsActionOverlayVisible(true)} className="p-2 rounded-full hover:bg-neutral-100">
              <MoreHorizontal className="w-5 h-5 text-neutral-600" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

export default ItemCard;
