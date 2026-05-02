import { motion } from 'motion/react';
import { Leaf, Zap, Battery, Cloud, Shield, Cpu, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Innovation() {
  return (
    <div className="pt-20">
      <section className="h-[80vh] bg-bmw-dark relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bmw-dark/50 to-bmw-dark z-10" />
        <img 
          src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1974&auto=format&fit=crop" 
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-20"
          alt="BMW Performance"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-20 text-center px-6">
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="h-[1px] w-8 bg-bmw-blue"></span>
              <span className="text-bmw-accent font-display uppercase tracking-[0.4em] text-[10px] font-bold">Future Innovation</span>
              <span className="h-[1px] w-8 bg-bmw-blue"></span>
            </div>
            <h1 className="text-white text-6xl md:text-9xl font-display font-light tracking-tighter uppercase italic leading-none">Intelligence <br/><span className="font-bold text-white not-italic">Defined.</span></h1>
          </motion.div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-12 bg-bmw-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
            <div className="p-16 space-y-8 bg-bmw-dark hover:bg-neutral-900 transition-colors group">
               <Cpu className="text-bmw-accent group-hover:scale-110 transition-transform" size={40} />
               <h3 className="text-2xl font-display font-bold uppercase text-white tracking-tighter">Digital Key</h3>
               <p className="text-neutral-500 font-light leading-relaxed text-sm">Unlock and start your BMW using your compatible smartphone. Absolute convenience, absolute security.</p>
            </div>
            <div className="p-16 space-y-8 bg-bmw-dark hover:bg-neutral-900 transition-colors group">
               <Cloud className="text-bmw-accent group-hover:scale-110 transition-transform" size={40} />
               <h3 className="text-2xl font-display font-bold uppercase text-white tracking-tighter">Remote Updates</h3>
               <p className="text-neutral-500 font-light leading-relaxed text-sm">Your BMW stays at the cutting edge with over-the-air upgrades that deliver new intelligence automatically.</p>
            </div>
            <div className="p-16 space-y-8 bg-bmw-dark hover:bg-neutral-900 transition-colors group">
               <Zap className="text-bmw-accent group-hover:scale-110 transition-transform" size={40} />
               <h3 className="text-2xl font-display font-bold uppercase text-white tracking-tighter">iDrive AI</h3>
               <p className="text-neutral-500 font-light leading-relaxed text-sm">The intuitive interaction between driver and vehicle, enhanced by advanced artificial intelligence.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-12 bg-bmw-neutral border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
          <div className="w-full lg:w-1/2 relative group">
             <div className="aspect-video overflow-hidden sleek-border">
               <img 
                 src="https://images.unsplash.com/photo-1634033630626-d62fbc0fa12a?q=80&w=2070&auto=format&fit=crop" 
                 className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                 alt="BMW Tech"
                 referrerPolicy="no-referrer"
               />
             </div>
          </div>
          <div className="w-full lg:w-1/2 space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-[1px] w-8 bg-bmw-blue"></span>
                <span className="text-bmw-accent font-display uppercase tracking-[0.3em] text-[10px] font-bold">Safety & Control</span>
              </div>
              <h2 className="text-4xl md:text-7xl font-display font-bold tracking-tighter text-white uppercase italic">Driving <span className="text-bmw-accent not-italic">Assistant.</span></h2>
            </div>
            
            <p className="text-neutral-400 font-light text-lg leading-relaxed">Experience a higher level of autonomy. Our systems assist with steering, lane control, and emergency braking, ensuring seamless protection.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {['Active Cruise Control', 'Lane Change Assistant', 'Lane Keeping Assistant', 'Emergency Stop Assistant'].map(item => (
                <div key={item} className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-neutral-300">
                  <div className="w-2 h-2 bg-bmw-blue rounded-full" />
                  {item}
                </div>
              ))}
            </div>

            <Link 
              to="/configurator" 
              className="inline-flex items-center gap-3 bg-white text-black px-12 py-6 text-[10px] uppercase tracking-widest font-bold hover:bg-neutral-200 transition-all shadow-2xl shadow-white/5"
            >
              Configure Your Build <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
