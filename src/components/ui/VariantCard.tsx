import { motion } from 'framer-motion';
import { Minus, Plus, X } from 'lucide-react';
import { type Variant } from '../../types';
import Button from './Button';

interface VariantCardProps {
  variant: Variant;
  onUpdate: (field: 'name' | 'price', value: string | number) => void;
  onRemove: () => void;
}

const predefinedVariants = ['Standard', 'Malá', 'Velká', '32cm', '45cm', '150g', '250g'];

const VariantCard: React.FC<VariantCardProps> = ({ variant, onUpdate, onRemove }) => {
  const handlePriceChange = (amount: number) => {
    const newPrice = Math.max(0, variant.price + amount);
    onUpdate('price', newPrice);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="p-4 bg-neutral-100 rounded-2xl flex flex-col gap-4"
    >
      <div className="flex justify-between gap-2">
        <div className="flex-1">
          <label className="block text-sm font-medium text-neutral-600 mb-1">Název varianty</label>
          <input
            type="text"
            value={variant.name}
            onChange={(e) => onUpdate('name', e.target.value)}
            placeholder="např. Standard, 32cm, 150g"
            className="w-full h-14 p-4 bg-[#D9D9D9] rounded-lg text-neutral-800 text-base font-semibold border-2 border-transparent focus:border-[#212121] focus:outline-none"
          />
          <div className="flex flex-wrap gap-2 mt-2">
            {predefinedVariants.map(predefined => (
              <button
                key={predefined}
                onClick={() => onUpdate('name', predefined)}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors ${
                  variant.name === predefined
                    ? 'text-white shadow-md'
                    : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300 hover:text-neutral-900'
                }`}
                style={variant.name === predefined ? { backgroundColor: '#FF6C1E' } : {}}
              >
                {predefined}
              </button>
            ))}
          </div>
        </div>
        <div className="pt-7">
          <Button onClick={onRemove} variant="danger" className="w-12 h-12 p-4 flex-shrink-0">
            <X className="w-6 h-6" />
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-neutral-600">Cena</label>
        <div className="flex items-center gap-3">
          <Button onClick={() => handlePriceChange(-5)} variant="secondary" className="w-12 h-12 rounded-full">
            <Minus className="w-6 h-6" />
          </Button>
          <div className="relative">
            <input
              type="number"
              value={variant.price}
              onChange={(e) => onUpdate('price', parseFloat(e.target.value) || 0)}
              className="w-32 h-14 text-center text-2xl font-bold bg-white rounded-lg border-2 border-neutral-200 focus:border-primary-500 focus:outline-none pr-10"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-lg font-semibold text-neutral-600">Kč</span>
          </div>
          <Button onClick={() => handlePriceChange(5)} variant="secondary" className="w-12 h-12 rounded-full">
            <Plus className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default VariantCard;
