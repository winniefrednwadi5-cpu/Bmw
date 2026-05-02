import { motion } from 'motion/react';
import { ArrowRight, Zap, Shield, Cpu, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { VEHICLES } from '../constants';
import { cn } from '../lib/utils';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-10" />
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://player.vimeo.com/external/494252666.hd.mp4?s=23ca20531818f97e3a9c9439a067edc1e194843b&profile_id=175" type="video/mp4" />
        </video>
        
        <div className="relative z-20 px-6 lg:px-12 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[1px] w-12 bg-bmw-blue"></span>
              <span className="text-white font-display uppercase tracking-[0.3em] text-[10px] font-bold">The Next Generation of Driving</span>
            </div>
            
            <h1 className="text-white text-6xl md:text-8xl font-display font-light leading-[0.95] mb-8 tracking-tighter">
              PRECISION <br />
              <span className="font-bold italic text-neutral-400">REDEFINED.</span>
            </h1>
            
            <p className="text-neutral-400 text-lg md:text-xl max-w-md mb-12 font-light leading-relaxed">
              Experience the pinnacle of electric luxury. Performance without compromise, designed for those who lead.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/configurator" 
                className="bg-bmw-blue text-white px-10 py-5 text-xs uppercase tracking-widest font-bold hover:bg-bmw-accent transition-all duration-300 flex items-center justify-center group shadow-xl shadow-bmw-blue/20"
              >
                Build Your BMW
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/models" 
                className="border border-white/20 text-white px-10 py-5 text-xs uppercase tracking-widest font-bold hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
              >
                Explore Models
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3">
           <span className="text-white/40 text-[9px] uppercase tracking-[0.2em] font-bold">Discover More</span>
           <div className="w-[1px] h-12 bg-gradient-to-b from-bmw-blue to-transparent" />
        </div>
      </section>

      {/* Featured Models Grid */}
      <section className="py-32 px-6 lg:px-12 bg-bmw-neutral">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-6 uppercase">The Model Hub.</h2>
              <p className="text-neutral-500 text-lg font-light leading-relaxed">From the legendary M Series to the pioneering i Electric range, find the machine built for you.</p>
            </div>
            <Link to="/models" className="flex items-center gap-2 text-white font-display text-[10px] uppercase tracking-widest font-bold pb-2 border-b border-white/20 hover:border-white transition-all">
              View All Models <ChevronRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5">
            {VEHICLES.slice(0, 4).map((vehicle, idx) => (
              <motion.div 
                key={vehicle.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="group cursor-pointer bg-bmw-neutral p-10 hover:bg-neutral-800 transition-colors"
              >
                <div className="relative aspect-[16/9] overflow-hidden mb-12">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.model}
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-bmw-accent text-[9px] font-bold uppercase tracking-[0.2em] mb-2 block">{vehicle.type}</span>
                    <h3 className="text-3xl font-display font-bold mb-4 text-white uppercase tracking-tighter">{vehicle.model}</h3>
                    <p className="text-neutral-500 text-xs font-medium uppercase tracking-widest">From ${vehicle.price.toLocaleString()}</p>
                  </div>
                  <Link to={`/models/${vehicle.id}`} className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-32 px-6 lg:px-12 bg-bmw-dark text-white relative overflow-hidden border-t border-white/5">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
          <Cpu className="w-full h-full stroke-[0.2]" />
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[1px] w-8 bg-bmw-blue"></span>
              <span className="text-bmw-accent font-display uppercase tracking-[0.3em] text-[10px] font-bold">BMW Innovation</span>
            </div>
            
            <h2 className="text-4xl md:text-7xl font-display font-light tracking-tighter mb-12 uppercase italic">Connected <span className="font-bold text-white not-italic">Intelligence.</span></h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
              <div className="p-8 bg-bmw-dark hover:bg-neutral-900 transition-colors">
                <Zap className="text-bmw-accent mb-6" size={28} />
                <h4 className="font-display font-bold text-sm mb-3 uppercase tracking-widest text-white">Electric Power</h4>
                <p className="text-neutral-500 text-xs font-light leading-loose">Fifth-generation eDrive technology providing efficiency and dynamic delivery.</p>
              </div>
              
              <div className="p-8 bg-bmw-dark hover:bg-neutral-900 transition-colors">
                <Cpu className="text-bmw-accent mb-6" size={28} />
                <h4 className="font-display font-bold text-sm mb-3 uppercase tracking-widest text-white">Smart Updates</h4>
                <p className="text-neutral-500 text-xs font-light leading-loose">Over-the-air Software Upgrades ensure your BMW constant evolution.</p>
              </div>

              <div className="p-8 bg-bmw-dark hover:bg-neutral-900 transition-colors">
                <Shield className="text-bmw-accent mb-6" size={28} />
                <h4 className="font-display font-bold text-sm mb-3 uppercase tracking-widest text-white">Safe Driving</h4>
                <p className="text-neutral-500 text-xs font-light leading-loose">Level 3 semi-autonomous systems designed to protect what matters most.</p>
              </div>

              <div className="p-8 bg-blue-950/20 group cursor-pointer hover:bg-blue-900/30 transition-all">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] uppercase tracking-widest text-blue-400 font-bold">Innovation Hub</span>
                  <ChevronRight size={16} className="text-blue-400 group-hover:translate-x-1 transition-transform" />
                </div>
                <h4 className="font-display font-bold text-sm mb-3 uppercase tracking-widest text-white">Future Tech</h4>
                <p className="text-blue-300/60 text-xs font-light leading-loose">Explore the technologies of tomorrow.</p>
              </div>
            </div>

            <Link 
              to="/innovation" 
              className="mt-16 inline-flex items-center gap-3 bg-white text-black px-10 py-5 text-xs uppercase tracking-widest font-bold hover:bg-neutral-200 transition-all duration-300"
            >
              Discover More
            </Link>
          </div>

          <div className="relative group">
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="aspect-[4/5] overflow-hidden sleek-border"
            >
              <img 
                src="https://images.unsplash.com/photo-1695642315938-1a5a04acc82e?q=80&w=2070&auto=format&fit=crop" 
                alt="Innovation" 
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="absolute -bottom-6 -left-6 bg-bmw-blue p-8 shadow-2xl shadow-blue-900/40">
               <p className="text-white font-display text-4xl font-bold italic tracking-tighter">100%</p>
               <p className="text-white/60 text-[9px] uppercase tracking-widest font-bold">Digital Focus</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 bg-bmw-dark relative overflow-hidden border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
           <h2 className="text-5xl md:text-8xl font-display font-bold tracking-tighter mb-10 italic uppercase text-white/90">Sheer Driving <span className="text-bmw-accent">Pleasure.</span></h2>
           <p className="text-neutral-500 text-lg mb-16 font-light leading-relaxed max-w-2xl mx-auto">Your journey begins at the intersection of luxury and technology. Book your private showroom experience or build your custom BMW online today.</p>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/configurator" 
                className="bg-bmw-blue text-white px-12 py-6 text-[10px] uppercase tracking-widest font-bold hover:bg-bmw-accent transition-all duration-300 shadow-2xl shadow-bmw-blue/20"
              >
                Build Your BMW
              </Link>
              <Link 
                to="/models" 
                className="bg-transparent border border-white/20 text-white px-12 py-6 text-[10px] uppercase tracking-widest font-bold hover:bg-white/10 transition-all duration-300 underline-offset-8 hover:underline italic"
              >
                Schedule Test Drive
              </Link>
           </div>
        </div>
      </section>
    </div>
  );
}
