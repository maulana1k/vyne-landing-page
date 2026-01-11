"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 500); // Delay fade out
          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 1; // Random increment
      });
    }, 150);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white"
        >
          <div className="absolute bottom-10 right-10 text-[10vw] font-bold leading-none font-mono mix-blend-difference">
            {Math.min(counter, 100)}%
          </div>
          
          <div className="flex gap-2 text-xs uppercase tracking-widest absolute top-10 left-10 opacity-50">
             <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
             <span>System Initializing...</span>
          </div>

           {/* Decorating lines */}
           <div className="absolute w-full h-[1px] bg-white/20 top-1/2 left-0" />
           <div className="absolute h-full w-[1px] bg-white/20 top-0 left-1/2" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
