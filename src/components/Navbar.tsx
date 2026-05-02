import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, User, MapPin } from 'lucide-react';
import { cn } from '../lib/utils';

const NAV_LINKS = [
  { name: 'Models', path: '/models' },
  { name: 'Build & Price', path: '/configurator' },
  { name: 'Innovation', path: '/innovation' },
  { name: 'Electric', path: '/electric' },
  { name: 'Owners', path: '/owners' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-12 h-20 flex items-center justify-between",
        scrolled ? "bg-bmw-dark/95 backdrop-blur-md shadow-lg border-b border-white/10" : "bg-transparent text-white"
      )}
    >
      <div className="flex items-center gap-12">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-11 h-11 rounded-full border-2 border-white flex items-center justify-center transition-all bg-transparent group-hover:bg-white group-hover:text-black font-display font-bold text-xs">
            BMW
          </div>
          <span className="font-display font-medium tracking-[0.2em] text-[10px] uppercase hidden sm:block text-neutral-400 group-hover:text-white transition-colors">
            The Ultimate Driving Machine
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "font-display text-[10px] uppercase tracking-[0.2em] transition-colors py-2",
                location.pathname === link.path ? "text-white border-b border-white" : "text-neutral-400 hover:text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4 sm:gap-8">
        <div className="hidden sm:flex items-center gap-4 text-neutral-500 font-bold uppercase tracking-[0.1em] text-[10px]">
           <button className="hover:text-white transition-colors flex items-center gap-2">
             <MapPin size={14} /> Find a Dealer
           </button>
        </div>

        <Link 
          to="/models"
          className="px-6 py-2.5 bg-white text-black text-[10px] font-bold uppercase tracking-widest hover:bg-neutral-200 transition-all"
        >
          Test Drive
        </Link>

        <button 
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 top-0 left-0 bg-bmw-dark z-50 p-8 flex flex-col lg:hidden">
          <div className="flex justify-between items-center mb-12">
             <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center font-display font-bold text-xs text-white">
                BMW
              </div>
            <button onClick={() => setIsOpen(false)} className="text-white">
              <X size={32} />
            </button>
          </div>
          <div className="flex flex-col gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="font-display text-4xl uppercase tracking-tighter text-white hover:text-blue-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="mt-auto grid grid-cols-1 gap-4 pb-12">
            <Link 
              to="/configurator" 
              className="bg-white text-black text-center py-5 text-xs uppercase tracking-widest font-bold"
              onClick={() => setIsOpen(false)}
            >
              Build Your BMW
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
