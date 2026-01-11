"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    user: "alex_dev",
    role: "Senior Solidity Engineer",
    log: "Migrating to Vyne reduced our gas costs by 94%. The developer tooling is unmatched in the ecosystem. > Transaction confirmed."
  },
  {
    user: "sarah_ceo",
    role: "Founder @ DeFi_Labs",
    log: "We scaled to 1M daily active users without a single hiccup. Vyne's mesh network is the real deal. > Scaling protocol initiated."
  },
  {
    user: "crypto_kai",
    role: "Validator Node Operator",
    log: "Running a node has never been this efficient. The consensus mechanism is pure genius. > Node synced successfully."
  }
];

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-black text-white py-32 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <div>
           <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 leading-tight">
               TRUSTED BY<br/>
               <span className="text-neutral-500">BUILDERS.</span>
           </h2>
           <div className="flex gap-4">
               <div className="h-12 w-12 bg-white/10 rounded-full" />
               <div className="h-12 w-12 bg-white/10 rounded-full" />
               <div className="h-12 w-12 bg-white/10 rounded-full" />
               <div className="h-12 w-12 border border-white/10 rounded-full flex items-center justify-center text-xs text-neutral-500">
                   +500
               </div>
           </div>
        </div>

        {/* Terminal Window */}
        <div className="w-full bg-[#0F0F0F] rounded-lg border border-white/10 overflow-hidden font-mono text-sm shadow-2xl shadow-green-900/10">
            {/* Terminal Header */}
            <div className="bg-[#1a1a1a] px-4 py-2 flex gap-2 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                <div className="ml-auto text-xs text-neutral-600">bash — 80x24</div>
            </div>
            
            {/* Terminal Body */}
            <div className="p-6 h-[200px] flex flex-col justify-end relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 p-6"
                    >
                        <div className="text-green-400 mb-2">
                           ➜  ~ <span className="text-white">read_log --user={testimonials[index].user}</span>
                        </div>
                        <div className="text-neutral-300 leading-relaxed mb-4">
                           "{testimonials[index].log}"
                        </div>
                        <div className="text-neutral-500 text-xs uppercase tracking-widest">
                           // {testimonials[index].role}
                        </div>
                    </motion.div>
                </AnimatePresence>
                
                {/* Blinking Cursor */}
                <motion.div 
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="w-2 h-4 bg-green-400 mt-auto"
                />
            </div>
        </div>

      </div>
    </section>
  );
}
