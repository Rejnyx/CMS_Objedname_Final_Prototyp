import { Search, Bell, Settings } from 'lucide-react';

const Header = () => {
  return (
    <header className="h-24 px-12 py-6 flex justify-between items-center" style={{ backgroundColor: '#FAF4F0' }}>
      {/* Left Side */}
      <div>
        <h1 className="text-neutral-900 text-2xl font-bold font-['Inter'] leading-9">
          Správa kategorií
        </h1>
        <p className="text-zinc-600 text-sm font-normal font-['Inter'] leading-snug">
          Ahoj, vítej zpět Davide!
        </p>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        {/* Search Bar */}
        <div className="relative w-72">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-neutral-800" />
          <input
            type="text"
            placeholder="Hledej cokoliv"
            className="w-full h-12 pl-12 pr-4 py-3 bg-white rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary-500 text-zinc-600 text-sm font-medium"
          />
        </div>

        {/* Notification Button */}
        <button className="w-12 h-12 p-3 bg-white rounded-lg border border-neutral-200 hover:bg-neutral-200 flex justify-center items-center">
          <div className="relative w-6 h-6">
            <Bell className="w-6 h-6 text-neutral-800" />
            <div className="w-1.5 h-1.5 left-[15px] top-[2px] absolute bg-orange-500 rounded-full border border-white" />
          </div>
        </button>

        {/* Settings Button */}
        <button className="w-12 h-12 p-3 bg-white rounded-lg border border-neutral-200 hover:bg-neutral-200 flex justify-center items-center">
          <Settings className="w-6 h-6 text-neutral-800" />
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-neutral-900 text-base font-bold leading-snug">David Rajnoha</p>
            <p className="text-zinc-600 text-xs font-normal leading-none">Admin</p>
          </div>
          <img className="w-12 h-12 rounded-lg object-cover" src="/man.jpg" alt="David Rajnoha" />
        </div>
      </div>
    </header>
  );
};

export default Header;
