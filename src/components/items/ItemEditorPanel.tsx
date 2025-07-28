import React, { useState, useEffect } from 'react';
import SidePanel from '../ui/SidePanel';
import Tabs from '../ui/Tabs';
import { type Item } from '../../types';
import Button from '../ui/Button';
import { Plus, X } from 'lucide-react';
import { mockAddons } from '../../data/addons';
import { allergens } from '../../data/allergens';
import AddonCard from '../ui/AddonCard';
import AllergenCard from '../ui/AllergenCard';
import VariantCard from '../ui/VariantCard';
import { AnimatePresence } from 'framer-motion';

interface ItemEditorPanelProps {
  isOpen: boolean;
  onClose: () => void;
  item: Item | null;
  onSave: (item: Item) => void;
}

const ItemEditorPanel: React.FC<ItemEditorPanelProps> = ({ isOpen, onClose, item, onSave }) => {
  const [editedItem, setEditedItem] = useState<Item | null>(item);

  useEffect(() => {
    setEditedItem(item);
  }, [item]);

  if (!isOpen || !editedItem) {
    return null;
  }

  const handleSave = () => {
    onSave(editedItem);
    onClose();
  };

  const handleIngredientChange = (index: number, value: string) => {
    const newIngredients = [...editedItem.baseIngredients];
    newIngredients[index] = value;
    setEditedItem({ ...editedItem, baseIngredients: newIngredients });
  };

  const addIngredient = () => {
    setEditedItem({ ...editedItem, baseIngredients: [...editedItem.baseIngredients, ''] });
  };

  const removeIngredient = (index: number) => {
    const newIngredients = editedItem.baseIngredients.filter((_, i) => i !== index);
    setEditedItem({ ...editedItem, baseIngredients: newIngredients });
  };

  const handleVariantChange = (index: number, field: 'name' | 'price', value: string | number) => {
    const newVariants = [...editedItem.variants];
    newVariants[index] = { ...newVariants[index], [field]: value };
    setEditedItem({ ...editedItem, variants: newVariants });
  };

  const addVariant = () => {
    const newVariant = { id: `v${Date.now()}`, name: '', price: 0 };
    setEditedItem({ ...editedItem, variants: [...editedItem.variants, newVariant] });
  };

  const removeVariant = (index: number) => {
    const newVariants = editedItem.variants.filter((_, i) => i !== index);
    setEditedItem({ ...editedItem, variants: newVariants });
  };

  const handleToggleAddon = (addonId: string) => {
    const currentAddonIds = editedItem.addonIds || [];
    const newAddonIds = currentAddonIds.includes(addonId)
      ? currentAddonIds.filter(id => id !== addonId)
      : [...currentAddonIds, addonId];
    setEditedItem({ ...editedItem, addonIds: newAddonIds });
  };

  const handleToggleAllergen = (allergenId: string) => {
    const tag = `alergen:${allergenId}`;
    const currentTags = editedItem.tags || [];
    const newTags = currentTags.includes(tag)
      ? currentTags.filter(t => t !== tag)
      : [...currentTags, tag];
    setEditedItem({ ...editedItem, tags: newTags });
  };

  const renderBasicInfoTab = () => (
    <div className="flex flex-col gap-6">
      <div className="flex items-start gap-4">
        <img className="w-24 h-24 rounded-2xl object-cover" src={editedItem.imageUrl || "https://placehold.co/96x96"} alt={editedItem.name} />
        <div className="flex-1">
          <label className="block text-lg font-semibold text-neutral-800 mb-2">Název položky</label>
          <input
            type="text"
            value={editedItem.name}
            onChange={(e) => setEditedItem({ ...editedItem, name: e.target.value })}
            className="w-full h-12 p-4 bg-neutral-100 rounded-lg text-neutral-800 text-base font-medium"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-neutral-800 text-lg font-semibold">Popis položky</label>
        <textarea
          value={editedItem.description}
          onChange={(e) => setEditedItem({ ...editedItem, description: e.target.value })}
          className="w-full p-4 bg-neutral-100 rounded-lg text-neutral-800 text-base font-medium h-32"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-neutral-800 text-lg font-semibold">Stav</label>
        <div className="inline-flex items-center gap-4">
          <Button
            onClick={() => setEditedItem({ ...editedItem, status: 'AVAILABLE' })}
            variant={editedItem.status === 'AVAILABLE' ? 'success' : 'secondary'}
          >
            Dostupné
          </Button>
          <Button
            onClick={() => setEditedItem({ ...editedItem, status: 'SOLD_OUT' })}
            variant={editedItem.status === 'SOLD_OUT' ? 'danger' : 'secondary'}
          >
            Vyprodáno
          </Button>
          <Button
            onClick={() => setEditedItem({ ...editedItem, status: 'HIDDEN' })}
            variant={editedItem.status === 'HIDDEN' ? 'primary' : 'secondary'}
          >
            Skryté
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-neutral-800 text-lg font-semibold">Základní ingredience</label>
        <div className="flex flex-col gap-2">
          {editedItem.baseIngredients.map((ingredient, index) => (
            <div key={index} className="flex items-center gap-2">
              <input
                type="text"
                value={ingredient}
                onChange={(e) => handleIngredientChange(index, e.target.value)}
                className="w-80 h-14 p-4 bg-neutral-100 rounded-lg text-neutral-800 text-base font-medium flex-1"
              />
              <Button onClick={() => removeIngredient(index)} variant="danger" className="w-12 h-12 p-4">
                <X className="w-6 h-6" />
              </Button>
            </div>
          ))}
        </div>
        <Button onClick={addIngredient} variant="success" className="mt-2">
          <Plus className="w-6 h-6 text-white" />
          <span className="text-white font-semibold">Přidat ingredienci</span>
        </Button>
      </div>
    </div>
  );

  const renderPriceTab = () => (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-neutral-900 text-xl font-bold leading-7 mb-2">Cenové varianty</h3>
        <div className="flex flex-col gap-4">
          <AnimatePresence>
            {editedItem.variants.map((variant, index) => (
              <VariantCard
                key={variant.id}
                variant={variant}
                onUpdate={(field, value) => handleVariantChange(index, field, value)}
                onRemove={() => removeVariant(index)}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
      <Button onClick={addVariant} variant="success" className="mt-2 self-start">
        <Plus className="w-6 h-6 text-white mr-2" />
        <span>Přidat další variantu</span>
      </Button>
    </div>
  );

  const renderAddonsTab = () => {
    const groupedAddons = mockAddons.reduce((acc, addon) => {
      (acc[addon.category] = acc[addon.category] || []).push(addon);
      return acc;
    }, {} as Record<string, typeof mockAddons>);

    return (
      <div className="flex flex-col gap-6">
        <h3 className="text-neutral-900 text-xl font-bold leading-7">Vylepšete si jídlo</h3>
        {Object.entries(groupedAddons).map(([category, addons]) => (
          <div key={category} className="flex flex-col gap-3">
            <h4 className="text-neutral-800 text-lg font-semibold">{category === 'Ingredience' ? 'Ingredience navíc' : category}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {addons.map((addon) => (
                <AddonCard
                  key={addon.id}
                  addon={addon}
                  isSelected={editedItem.addonIds?.includes(addon.id) || false}
                  onToggle={() => handleToggleAddon(addon.id)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderAssignmentsTab = () => (
    <div className="flex flex-col gap-6">
      <h3 className="text-neutral-900 text-xl font-bold leading-7">Přiřazení alergenů</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {allergens.map((allergen) => (
          <AllergenCard
            key={allergen.id}
            allergen={allergen}
            isSelected={editedItem.tags?.includes(`alergen:${allergen.id}`) || false}
            onToggle={() => handleToggleAllergen(allergen.id)}
          />
        ))}
      </div>
    </div>
  );

  const tabs = [
    { label: 'Základní info', content: renderBasicInfoTab() },
    { label: 'Cena', content: renderPriceTab() },
    { label: 'Vylepšení', content: renderAddonsTab() },
    { label: 'Přiřazení', content: renderAssignmentsTab() },
  ];

  const editorActions = (
    <>
      <Button onClick={onClose} variant="secondary">Zrušit</Button>
      <Button onClick={handleSave} variant="success">Uložit změny</Button>
    </>
  );

  return (
    <SidePanel isOpen={isOpen} onClose={onClose} title={editedItem.name} actions={editorActions}>
      <div className="flex flex-col h-full px-4 pb-6">
        <Tabs tabs={tabs} />
      </div>
    </SidePanel>
  );
};

export default ItemEditorPanel;
