import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Check, Info, Box, Palette, Layout, Sparkles } from 'lucide-react';
import { VEHICLES } from '../constants';
import { cn } from '../lib/utils';
import { ConfigStep } from '../types';

const STEPS: ConfigStep[] = [
  {
    title: 'Exterior Color',
    options: [
      { id: 'c1', name: 'Alpine White', price: 0, color: '#f7f7f7' },
      { id: 'c2', name: 'Black Sapphire Metallic', price: 1200, color: '#0c0c0c' },
      { id: 'c3', name: 'Portimao Blue Metallic', price: 1200, color: '#003399' },
      { id: 'c4', name: 'Frozen Deep Grey', price: 3600, color: '#333333' },
    ]
  },
  {
    title: 'Wheels',
    options: [
      { id: 'w1', name: "19' M Light Alloy Wheels", price: 0 },
      { id: 'w2', name: "20' Aero Wheels Bi-color", price: 1800 },
      { id: 'w3', name: "21' Individual Multi-spoke", price: 3200 },
    ]
  },
  {
    title: 'Interior',
    options: [
      { id: 'i1', name: 'Veganza Smoke Grey', price: 0 },
      { id: 'i2', name: 'Merino Leather Black', price: 2500 },
      { id: 'i3', name: 'Merino Leather Caramel', price: 2500 },
    ]
  },
];

export default function Configurator() {
  const [searchParams] = useSearchParams();
  const initialModelId = searchParams.get('model') || 'i7';
  const vehicle = useMemo(() => VEHICLES.find(v => v.id === initialModelId) || VEHICLES[0], [initialModelId]);
  
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const [selections, setSelections] = useState<Record<string, string>>({
    'Exterior Color': 'c1',
    'Wheels': 'w1',
    'Interior': 'i1',
  });

  const totalOptionsPrice = useMemo(() => {
    return STEPS.reduce((total, step) => {
      const selectedId = selections[step.title];
      const option = step.options.find(o => o.id === selectedId);
      return total + (option?.price || 0);
    }, 0);
  }, [selections]);

  const currentStep = STEPS[currentStepIdx];
  const totalPrice = vehicle.price + totalOptionsPrice;

  const handleSelect = (stepTitle: string, optionId: string) => {
    setSelections(prev => ({ ...prev, [stepTitle]: optionId }));
  };

  const nextStep = () => {
    if (currentStepIdx < STEPS.length - 1) setCurrentStepIdx(prev => prev + 1);
  };

  const prevStep = () => {
     if (currentStepIdx > 0) setCurrentStepIdx(prev => prev - 1);
  };

  return (
    <div className="pt-20 lg:pt-20 h-screen flex flex-col lg:flex-row bg-bmw-dark overflow-hidden">
      {/* Visualizer - Left Side */}
      <div className="flex-1 bg-neutral-950 relative flex flex-col items-center justify-center p-8 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${vehicle.id}-${selections['Exterior Color']}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            className="relative w-full max-w-5xl"
          >
            <img 
              src={vehicle.image} 
              alt={vehicle.model}
              className="w-full h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end z-10">
           <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="h-[1px] w-8 bg-bmw-blue"></span>
                <span className="text-bmw-accent font-display uppercase tracking-[0.3em] text-[9px] font-bold">Personalized Configuration</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-light tracking-tighter uppercase text-white leading-none italic">{vehicle.model}</h1>
           </div>
           <div className="hidden md:flex gap-12 text-right">
              <div>
                <p className="text-[10px] text-neutral-500 uppercase tracking-widest italic mb-1">Monthly Estimate</p>
                <p className="font-display font-medium text-2xl text-white">${Math.round(totalPrice / 60).toLocaleString()}</p>
              </div>
               <div>
                  <p className="text-[10px] text-neutral-500 uppercase tracking-widest italic mb-1">Total Price</p>
                  <p className="font-display font-bold text-2xl text-white">${totalPrice.toLocaleString()}</p>
              </div>
           </div>
        </div>

        <div className="absolute top-12 left-12 flex gap-2">
           {[...Array(STEPS.length)].map((_, i) => (
             <div 
               key={i}
               className={cn(
                 "w-12 h-[2px] transition-all",
                 i <= currentStepIdx ? "bg-bmw-blue" : "bg-white/10"
               )}
             />
           ))}
        </div>
      </div>

      {/* Controls - Right Side */}
      <div className="w-full lg:w-[450px] bg-bmw-neutral border-l border-white/5 flex flex-col h-full shadow-2xl relative z-20">
        <div className="p-10 border-b border-white/5 flex justify-between items-center bg-bmw-neutral/80 backdrop-blur-sm sticky top-0">
          <h2 className="font-display font-bold uppercase tracking-widest text-xs flex items-center gap-3 text-white">
            <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[10px]">{currentStepIdx + 1}</span>
            {currentStep.title}
          </h2>
          <span className="text-[10px] uppercase font-bold text-neutral-600">Step {currentStepIdx + 1} / {STEPS.length}</span>
        </div>

        <div className="flex-1 overflow-y-auto p-10 space-y-6">
          {currentStep.options.map((option) => (
             <button
               key={option.id}
               onClick={() => handleSelect(currentStep.title, option.id)}
               className={cn(
                 "w-full p-8 text-left border transition-all relative flex justify-between items-center group",
                 selections[currentStep.title] === option.id 
                  ? "border-bmw-blue bg-bmw-blue/5" 
                  : "border-white/5 hover:border-white/20 hover:bg-white/5"
               )}
             >
               <div className="flex items-center gap-5">
                 {option.color ? (
                    <div 
                      className="w-12 h-12 rounded-full border border-white/10 shadow-xl"
                      style={{ backgroundColor: option.color }}
                    />
                 ) : (
                    <div className="w-12 h-12 bg-neutral-900 border border-white/5 flex items-center justify-center text-neutral-600 group-hover:text-bmw-blue transition-colors">
                       <Box size={24} />
                    </div>
                 )}
                 <div>
                    <h4 className="font-display font-bold text-xs uppercase tracking-widest text-white">{option.name}</h4>
                    <p className="text-[10px] text-neutral-500 font-medium mt-1 uppercase tracking-wider">
                      {option.price === 0 ? 'Included' : `+$${option.price.toLocaleString()}`}
                    </p>
                 </div>
               </div>
               
               {selections[currentStep.title] === option.id && (
                 <div className="text-bmw-blue">
                    <Check size={20} />
                 </div>
               )}
             </button>
          ))}
        </div>

        <div className="p-10 bg-neutral-950 border-t border-white/5 space-y-8">
           <div className="flex justify-between items-center lg:hidden">
              <p className="text-xs uppercase tracking-widest font-bold text-neutral-500">Net Value</p>
              <p className="font-display font-bold text-xl text-white">${totalPrice.toLocaleString()}</p>
           </div>
           
           <div className="flex gap-4">
             <button 
               onClick={prevStep}
               disabled={currentStepIdx === 0}
               className="flex-1 border border-white/10 py-5 text-[10px] uppercase font-bold tracking-widest flex items-center justify-center gap-2 hover:bg-white/5 text-white transition-all disabled:opacity-20 translate-y-0 active:translate-y-1"
             >
                Back
             </button>
             
             {currentStepIdx === STEPS.length - 1 ? (
                <button className="flex-[2] bg-white text-black py-5 text-[10px] uppercase font-bold tracking-widest flex items-center justify-center gap-2 hover:bg-neutral-200 transition-all shadow-2xl shadow-white/5 translate-y-0 active:translate-y-1">
                  Complete Build
                </button>
             ) : (
                <button 
                  onClick={nextStep}
                  className="flex-[2] bg-bmw-blue text-white py-5 text-[10px] uppercase font-bold tracking-widest flex items-center justify-center gap-2 hover:bg-bmw-accent transition-all shadow-2xl shadow-blue-900/20 translate-y-0 active:translate-y-1"
                >
                  Continue <ChevronRight size={14} />
                </button>
             )}
           </div>
        </div>
      </div>
    </div>
  );
}
