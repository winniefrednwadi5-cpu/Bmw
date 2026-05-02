import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, SlidersHorizontal, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { VEHICLES } from '../constants';
import { cn } from '../lib/utils';

const CATEGORIES = ['All', 'Sedan', 'SUV', 'Electric', 'Performance'];

export default function Models() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredVehicles = VEHICLES.filter((vehicle) => {
    const matchesCategory = activeCategory === 'All' || 
                           (activeCategory === 'Electric' && vehicle.type === 'Electric') ||
                           (activeCategory === 'Performance' && vehicle.type === 'Performance') ||
                           vehicle.type === activeCategory;
    
    const matchesSearch = vehicle.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          vehicle.series.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-32 pb-20 px-6 lg:px-12 bg-bmw-dark min-h-screen">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <h1 className="text-6xl md:text-9xl font-display font-light tracking-tighter mb-12 uppercase">
            <span className="font-bold block italic text-neutral-400">The</span>
            MODELS.
          </h1>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 border-b border-white/5 pb-12">
            <div className="flex flex-wrap gap-3">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-8 py-3 text-[10px] uppercase font-bold tracking-[0.2em] transition-all border",
                    activeCategory === cat 
                      ? "bg-white text-black border-white" 
                      : "bg-transparent text-neutral-500 border-white/10 hover:border-white/30 hover:text-white"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
            
            <div className="relative max-w-md w-full">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-neutral-500" size={16} />
              <input 
                type="text" 
                placeholder="Search series or model..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-bmw-neutral/50 border border-white/5 py-5 pl-14 pr-6 text-xs text-white placeholder:text-neutral-600 focus:border-white/20 outline-none transition-all"
              />
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
          <AnimatePresence mode="popLayout">
            {filteredVehicles.map((vehicle) => (
              <motion.div
                layout
                key={vehicle.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="group flex flex-col bg-bmw-dark p-8 hover:bg-neutral-900 transition-colors"
              >
                <div className="relative aspect-[16/10] overflow-hidden mb-8">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.model}
                    className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <div className="flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className="text-bmw-accent text-[9px] font-bold uppercase tracking-[0.2em] mb-2 block">{vehicle.type}</span>
                      <h3 className="text-2xl font-display font-medium text-white-900 tracking-tighter uppercase">{vehicle.model}</h3>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between py-6 border-y border-white/5 mb-8">
                    <div className="flex flex-col">
                       <p className="text-[9px] text-neutral-600 uppercase tracking-widest mb-1 italic">Price from</p>
                       <p className="font-display font-bold text-lg text-white">${vehicle.price.toLocaleString()}</p>
                    </div>
                    <div className="flex gap-6">
                      <div className="text-center">
                        <p className="text-[9px] text-neutral-600 uppercase tracking-widest mb-1 italic">0-100</p>
                        <p className="font-display font-bold text-xs text-neutral-300">{vehicle.specs.acceleration}</p>
                      </div>
                      <div className="text-center">
                         <p className="text-[9px] text-neutral-600 uppercase tracking-widest mb-1 italic">Power</p>
                         <p className="font-display font-bold text-xs text-neutral-300">{vehicle.specs.power}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-auto flex flex-col gap-3">
                    <Link 
                      to={`/configurator?model=${vehicle.id}`}
                      className="bg-white text-black py-4 text-[10px] uppercase font-bold tracking-widest text-center hover:bg-neutral-200 transition-all shadow-xl shadow-white/5"
                    >
                      Build Your BMW
                    </Link>
                    <Link 
                      to={`/models/${vehicle.id}`}
                      className="bg-transparent border border-white/10 text-white py-4 text-[10px] uppercase font-bold tracking-widest text-center hover:bg-white/5 transition-all"
                    >
                      Explore Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredVehicles.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-gray-400 font-display text-xl">No models found matching your selection.</p>
            <button 
              onClick={() => {setActiveCategory('All'); setSearchQuery('');}}
              className="mt-4 text-bmw-blue font-bold uppercase tracking-widest text-xs border-b border-bmw-blue"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
