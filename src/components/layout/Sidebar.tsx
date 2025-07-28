import {
  LayoutDashboard,
  ShoppingCart,
  MessageSquare,
  Calendar,
  FolderKanban,
  Users,
  Warehouse,
} from 'lucide-react';
import logo from '../../assets/objlogo.svg';

const sidebarItems = [
  { name: 'Dashboard', icon: LayoutDashboard, href: '#' },
  { name: 'Objednávky', icon: ShoppingCart, href: '#' },
  { name: 'Zprávy', icon: MessageSquare, href: '#' },
  { name: 'Kalendář', icon: Calendar, href: '#' },
  { name: 'Správa kategorií', icon: FolderKanban, href: '#', active: true },
  { name: 'Správa personál', icon: Users, href: '#' },
  { name: 'Sklad', icon: Warehouse, href: '#' },
];

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white rounded-tr-2xl rounded-br-2xl flex flex-col">
      {/* Logo */}
      <div className="h-24 p-6 flex justify-center items-center">
        <img src={logo} alt="Objedname.cz Logo" className="h-10" />
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-2">
        <ul className="space-y-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.active || false;
            
            return (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`flex items-center h-12 px-4 py-3 rounded-lg transition-colors relative ${
                    isActive
                      ? 'bg-active-bg text-orange-500 font-semibold hover:brightness-95'
                      : 'text-neutral-800 font-medium hover:bg-neutral-200'
                  }`}
                >
                  <div className={`absolute left-0 w-1 h-8 rounded-r-sm ${isActive ? 'bg-orange-500' : 'bg-transparent'}`}></div>
                  <Icon className="w-5 h-5 ml-4 mr-2.5" />
                  <span>{item.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
