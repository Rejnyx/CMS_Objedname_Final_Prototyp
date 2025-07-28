export interface Variant {
  id: string;
  name: string;
  price: number;
}

export interface Item {
  id: string;
  name: string;
  description?: string;
  imageUrl?: string;
  baseIngredients: string[];
  variants: Variant[];
  status: 'AVAILABLE' | 'SOLD_OUT' | 'HIDDEN';
  tags: string[];
  addonIds?: string[];
}

export interface Addon {
  id: string;
  name: string;
  price: number;
  category: 'Ingredience' | 'Přílohy' | 'Omáčky';
  imageUrl: string;
}

export interface Allergen {
  id: string;
  name: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string; // Or a component
  items: Item[];
  subcategories?: Category[];
}
