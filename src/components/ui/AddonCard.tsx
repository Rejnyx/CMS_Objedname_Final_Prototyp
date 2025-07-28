import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { type Addon } from '../../types';

interface AddonCardProps {
  addon: Addon;
  isSelected: boolean;
  onToggle: () => void;
}

const cardVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.03 },
  tap: { scale: 0.97 }
};

const AddonCard: React.FC<AddonCardProps> = ({ addon, isSelected, onToggle }) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      onClick={onToggle}
      className={`relative p-4 rounded-2xl border-2 cursor-pointer transition-colors duration-200 flex items-center gap-4 ${
        isSelected ? 'bg-primary-100 border-[#FF6C1E]' : 'bg-[#F5F5F5] border-transparent'
      }`}
    >
      <img src={addon.imageUrl} alt={addon.name} className="w-12 h-12 rounded-lg object-cover" />
      <div className="flex-1">
        <p className="font-semibold text-neutral-800">{addon.name}</p>
        <p className="text-neutral-600 text-sm">+{addon.price} Kč</p>
      </div>
      {isSelected && (
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="absolute top-2 right-2 text-[#FF6C1E]"
        >
          <CheckCircle2 size={24} />
        </motion.div>
      )}
    </motion.div>
  );
};

export default AddonCard;
