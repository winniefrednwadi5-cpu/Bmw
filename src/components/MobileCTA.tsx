import { Link } from 'react-router-dom';
import { Car, Calendar, MapPin } from 'lucide-react';

export default function MobileCTA() {
  return (
    <div className="lg:hidden fixed bottom-6 left-6 right-6 z-[60]">
      <div className="bg-bmw-dark text-white rounded-full p-2 flex items-center justify-between shadow-2xl border border-white/10 backdrop-blur-lg bg-bmw-dark/95">
        <Link 
          to="/configurator" 
          className="flex-1 flex flex-col items-center justify-center py-2 border-r border-white/10"
        >
          <Car size={18} className="mb-1" />
          <span className="text-[8px] uppercase tracking-widest font-bold">Build</span>
        </Link>
        <Link 
          to="/models" 
          className="flex-1 flex flex-col items-center justify-center py-2 border-r border-white/10"
        >
          <Calendar size={18} className="mb-1" />
          <span className="text-[8px] uppercase tracking-widest font-bold">Drive</span>
        </Link>
        <button className="flex-1 flex flex-col items-center justify-center py-2 px-1">
          <MapPin size={18} className="mb-1" />
          <span className="text-[8px] uppercase tracking-widest font-bold">Dealers</span>
        </button>
      </div>
    </div>
  );
}
