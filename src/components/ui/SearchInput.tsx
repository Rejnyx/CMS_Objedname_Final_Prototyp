import { Search } from 'lucide-react';

const SearchInput = () => {
  return (
    <div className="relative w-full h-12">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-neutral-800" />
      <input
        type="text"
        placeholder="Hledej kategorii"
        className="w-full h-full pl-12 pr-4 py-3 bg-neutral-100 rounded-lg text-zinc-600 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 border border-neutral-200"
      />
    </div>
  );
};

export default SearchInput;
