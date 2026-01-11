"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MoveUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { label: "Total Value Locked", value: 4.2, suffix: "B", prefix: "$" },
  { label: "Transactions / Sec", value: 125, suffix: "k", prefix: "" },
  { label: "Active Nodes", value: 89, suffix: "k+", prefix: "" },
  { label: "Avg. Gas Cost", value: 0.001, suffix: "", prefix: "$" },
];

export function Stats() {
  const containerRef = useRef<HTMLSectionElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate numbers
      stats.forEach((_, i) => {
        const target = stats[i];
        const element = document.getElementById(`stat-${i}`);
        
        if (element) {
            ScrollTrigger.create({
                trigger: element,
                start: "top 85%",
                onEnter: () => {
                    gsap.to(element, {
                        innerHTML: target.value,
                        duration: 2,
                        snap: { innerHTML: 0.1 },
                        ease: "power2.out",
                    });
                }
            });
        }
      });

      // Animate Cards opacity
      gsap.from(".stat-card", {
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.1,
          scrollTrigger: {
              trigger: containerRef.current,
              start: "top 70%",
          }
      });
      
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-black text-white py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[128px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

      <div className="flex flex-col md:flex-row justify-between items-end mb-20">
         <div className="max-w-xl">
             <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
                PROTOCOL <span className="text-neutral-600">METRICS</span>
             </h2>
             <p className="text-neutral-400 font-mono text-sm leading-relaxed">
                Real-time performance data from the Vyne Mainnet. Our architecture scales linearly with network demand, ensuring zero-latency execution for high-frequency trading and gaming applications.
             </p>
         </div>
         <button className="hidden md:flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all group">
             <span className="text-xs font-bold uppercase tracking-widest">View Explorer</span>
             <MoveUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
         </button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
        {stats.map((stat, i) => (
            <div key={i} className="stat-card p-6 md:p-8 rounded-sm bg-[#0a0a0a] border border-white/10 hover:border-green-500/50 transition-colors group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <h3 className="text-neutral-500 text-xs font-mono uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    {stat.label}
                </h3>
                <div className="text-4xl md:text-5xl font-bold tracking-tighter font-mono">
                    <span className="text-neutral-600 mr-1">{stat.prefix}</span>
                    <span id={`stat-${i}`}>0</span>
                    <span className="text-green-400">{stat.suffix}</span>
                </div>
            </div>
        ))}
      </div>
    </section>
  );
}
