"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const [displayText, setDisplayText] = useState("VYNE");
  const finalWrapper = "VYNE";
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

  // Scramble Effect
  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) => 
        prev
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return finalWrapper[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= finalWrapper.length) {
        clearInterval(interval);
      }
      
      iteration += 1 / 3;
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro Animation
      const tl = gsap.timeline();

      tl.from(containerRef.current, { opacity: 0, duration: 1 })
        .from(".hero-sub", {
           opacity: 0,
           y: 20,
           duration: 1,
           stagger: 0.2
        }, "-=0.5");
        
    }, containerRef);

    return () => ctx.revert();
  }, []);


  return (
    <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Video Background with overlay */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-60 scale-105"
        >
          <source src="https://videos.pexels.com/video-files/3163534/3163534-hd_1920_1080_30fps.mp4" type="video/mp4" />
        </video>
        {/* Grain Overlay */}
        <div className="absolute inset-0 opacity-20 pointer-events-none z-[1]" 
             style={{ 
                 backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
             }} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-[2]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center w-full px-4 mix-blend-difference">
        <h1 ref={textRef} className="text-[18vw] leading-[0.8] font-bold tracking-tighter text-white select-none">
          {displayText}
        </h1>
        
        <div className="hero-sub mt-12 flex flex-col md:flex-row justify-center items-center gap-6 text-sm md:text-base font-mono tracking-widest uppercase text-white/50">
          <div className="flex items-center gap-2">
             <div className="w-2 h-2 bg-green-400 rounded-full animate-ping" />
             <span>Mainnet Live</span>
          </div>
          <span className="hidden md:inline text-white/20">//</span>
          <span>Universal Liquidity Layer</span>
          <span className="hidden md:inline text-white/20">//</span>
          <span>Block Height: 12,402,912</span>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-6 md:left-12 flex flex-col gap-2 text-[10px] text-white/40 font-mono">
         <p>SCROLL_Y: [000]</p>
         <p>TARGET: [NULL]</p>
      </div>
    </section>
  );
}
