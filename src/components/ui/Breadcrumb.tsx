import { ChevronRight } from 'lucide-react';
import type { Category } from '../../types';

interface BreadcrumbProps {
  path: Category[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ path }) => {
  return (
    <nav className="flex items-center text-sm text-neutral-600">
      <div className="flex items-center">
        <a href="#" className="hover:underline">Kategorie</a>
        {path.length > 0 && <ChevronRight className="h-4 w-4 mx-1" />}
      </div>
      {path.map((item, index) => (
        <div key={item.id} className="flex items-center">
          <a href="#" className="hover:underline">{item.name}</a>
          {index < path.length - 1 && (
            <ChevronRight className="h-4 w-4 mx-1" />
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;
