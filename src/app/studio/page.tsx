"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function StudioPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
        gsap.from("h1 span", {
            y: 100,
            opacity: 0,
            duration: 1.2,
            stagger: 0.1,
            ease: "power4.out"
        });
        
        gsap.from(".fade-in", {
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            delay: 0.5
        });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="pt-32 px-6 md:px-12 min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-[12vw] leading-[0.85] font-bold tracking-tighter mb-24 mix-blend-difference">
          <span className="inline-block">WE</span> <span className="inline-block">ENGINEER</span><br/>
          <span className="inline-block text-green-400">FUTURE</span> <span className="inline-block">CULTURE.</span>
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
             <div className="fade-in text-xl md:text-3xl leading-snug font-medium">
                 <p className="mb-8">Vyne is a next-generation digital studio sitting at the intersection of design, technology, and artificial intelligence.</p>
                 <p className="text-neutral-400">We don't just build websites; we construct digital ecosystems that live, breathe, and evolve.</p>
             </div>
             
             <div className="fade-in grid gap-8 text-sm font-mono uppercase tracking-widest text-neutral-500">
                 <div className="border-t border-white/20 pt-4">
                     <h3 className="text-white mb-2">Capabilities</h3>
                     <ul className="space-y-1">
                         <li>Creative Direction</li>
                         <li>Web3 Development</li>
                         <li>Smart Contracts</li>
                         <li>AI Integration</li>
                         <li>Brand Identity</li>
                     </ul>
                 </div>
                 <div className="border-t border-white/20 pt-4">
                     <h3 className="text-white mb-2">Awards</h3>
                     <ul className="space-y-1">
                         <li>Awwwards SOTD x4</li>
                         <li>FWA of the Month</li>
                         <li>CSS Design Awards</li>
                     </ul>
                 </div>
             </div>
        </div>
        
        <div className="fade-in w-full h-[60vh] relative overflow-hidden bg-neutral-900 mb-32 group">
             <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
             >
                 <source src="https://videos.pexels.com/video-files/5527845/5527845-hd_1920_1080_25fps.mp4" type="video/mp4"/>
             </video>
             <div className="absolute inset-0 flex items-center justify-center">
                 <div className="h-20 w-20 rounded-full border border-white/50 flex items-center justify-center backdrop-blur-sm">
                     <span className="text-xs uppercase tracking-widest">Play</span>
                 </div>
             </div>
        </div>
      </div>
    </main>
  );
}
