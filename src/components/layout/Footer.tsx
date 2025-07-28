import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="h-24 px-12 py-6 flex justify-between items-center" style={{ backgroundColor: '#FAF4F0' }}>
      {/* Left Side */}
      <div className="flex items-center gap-6 text-zinc-600 text-xs">
        <div className="font-semibold">Copyright © 2025 David Rajnoha</div>
        <a href="#" className="hover:text-primary-500 hover:underline">Podmínky používání</a>
        <a href="#" className="hover:text-primary-500 hover:underline">Zásady ochrany osobních údajů</a>
        <a href="#" className="hover:text-primary-500 hover:underline">Kontakt</a>
        <a href="#" className="hover:text-primary-500 hover:underline">Nápověda</a>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        <a href="#" className="text-zinc-600 hover:text-primary-500">
          <Facebook className="w-6 h-6" />
        </a>
        <a href="#" className="text-zinc-600 hover:text-primary-500">
          <Instagram className="w-6 h-6" />
        </a>
        <a href="#" className="text-zinc-600 hover:text-primary-500">
          <Twitter className="w-6 h-6" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
