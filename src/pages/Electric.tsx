import { motion } from 'motion/react';
import { Leaf, Zap, Battery, Shield, HelpCircle, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Electric() {
  return (
    <div className="pt-20">
      <section className="bg-bmw-dark py-32 px-6 lg:px-12 overflow-hidden min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[1px] w-8 bg-bmw-blue"></span>
              <span className="text-bmw-accent font-display uppercase tracking-[0.4em] text-[10px] font-bold">BMW i Electric</span>
            </div>
            <h1 className="text-6xl md:text-9xl font-display font-light tracking-tighter mb-10 leading-[0.9] text-white uppercase italic">Silence <br/><span className="font-bold text-white not-italic">Amplified.</span></h1>
            <p className="text-neutral-500 text-lg mb-12 font-light max-w-md leading-relaxed">BMW i is the symbol of holistic and sustainable mobility. Experience a new era of sheer driving pleasure.</p>
            <div className="flex gap-4">
               <Link to="/models" className="bg-white text-black px-12 py-5 text-[10px] uppercase tracking-widest font-bold hover:bg-neutral-200 transition-all flex items-center gap-3">
                 Explore i Range <ArrowRight size={14} />
               </Link>
            </div>
          </motion.div>
          <div className="relative group">
             <div className="aspect-square overflow-hidden sleek-border">
               <img 
                 src="https://images.unsplash.com/photo-1695642315938-1a5a04acc82e?q=80&w=2070&auto=format&fit=crop" 
                 className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                 alt="BMW iX"
                 referrerPolicy="no-referrer"
               />
             </div>
             <div className="absolute -bottom-8 -right-8 bg-bmw-blue text-white p-12 w-48 h-48 flex flex-col items-center justify-center text-center shadow-2xl shadow-blue-900/40">
                  <p className="text-4xl font-display font-bold italic">630</p>
                  <p className="text-[9px] uppercase font-bold text-white/60 tracking-widest leading-tight mt-1">KM RANGE</p>
             </div>
          </div>
        </div>
      </section>

      <section className="bg-bmw-neutral py-32 px-6 lg:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
            <div className="max-w-2xl">
               <h2 className="text-4xl md:text-7xl font-display font-bold tracking-tighter mb-8 uppercase text-white leading-none">Simplified <span className="text-bmw-accent">Energy.</span></h2>
               <p className="text-neutral-500 text-lg font-light leading-relaxed">Whether at home or on the road, BMW Charging provides you with tailor-made solutions for your electric lifestyle.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
            <div className="bg-bmw-dark p-16 space-y-8 flex flex-col group hover:bg-neutral-900 transition-colors">
               <Battery className="text-bmw-accent" size={32} />
               <h3 className="text-3xl font-display font-bold uppercase text-white tracking-tighter">BMW Wallbox</h3>
               <p className="text-neutral-500 font-light leading-loose text-sm">Charge your BMW at home in just a few hours. Constant charging power of up to 22 kW with smart home integration.</p>
               <div className="mt-12 pt-8 border-t border-white/5 flex justify-between items-center group-hover:border-white transition-colors">
                 <span className="text-[10px] uppercase font-bold tracking-widest text-white/40">Request Installation</span>
                 <ArrowRight className="text-white transform group-hover:translate-x-2 transition-transform" size={20} />
               </div>
            </div>
            
            <div className="bg-bmw-dark p-16 space-y-8 flex flex-col group hover:bg-neutral-900 transition-colors">
               <Zap className="text-bmw-accent" size={32} />
               <h3 className="text-3xl font-display font-bold uppercase text-white tracking-tighter">Public Charging</h3>
               <p className="text-neutral-500 font-light leading-loose text-sm">Access one of the largest public charging networks in the world. Simple, transparent, and always nearby.</p>
               <div className="mt-12 pt-8 border-t border-white/5 flex justify-between items-center group-hover:border-white transition-colors">
                 <span className="text-[10px] uppercase font-bold tracking-widest text-white/40">Find a Station</span>
                 <ArrowRight className="text-white transform group-hover:translate-x-2 transition-transform" size={20} />
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
