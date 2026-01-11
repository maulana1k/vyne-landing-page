"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const partners = [
  "Paradigm", "Sequoia", "a16z crypto", "Pantera", "Dragonfly", "Polychain",
  "Coinbase Ventures", "Binance Labs", "Multicoin", "Delphi Digital"
];

const techStack = [
    { name: "Rust", description: "Memory-safe execution layer", color: "#ef4444" },
    { name: "Solidity", description: "EVM compatibility module", color: "#3b82f6" },
    { name: "WASM", description: "High-performance runtime", color: "#a855f7" },
    { name: "ZK-SNARKs", description: "Privacy-preserving proofs", color: "#22c55e" },
    { name: "libp2p", description: "Decentralized networking", color: "#eab308" },
    { name: "IPFS", description: "Distributed storage layer", color: "#06b6d4" }
];

function Marquee({ children, direction = 1 }: { children: React.ReactNode, direction?: number }) {
    return (
        <div className="flex overflow-hidden whitespace-nowrap mask-gradient">
            <motion.div 
                className="flex gap-16 py-8 items-center"
                animate={{ x: direction === 1 ? [0, -1000] : [-1000, 0] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
            >
                {children}
                {children}
            </motion.div>
            <style jsx>{`
                .mask-gradient {
                    mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                }
            `}</style>
        </div>
    )
}

export function Partners() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative bg-black text-white py-32 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Animated Marquee */}
        <div className="mb-32">
            <div className="text-center mb-12">
                <span className="text-green-400 font-mono text-xs uppercase tracking-[0.2em] border border-green-400/20 px-3 py-1 rounded-full">
                    Strategic Backers
                </span>
            </div>
            
            <Marquee direction={1}>
                {partners.map((partner, i) => (
                    <span key={i} className="text-4xl md:text-6xl font-bold text-transparent stroke-text hover:text-white transition-colors duration-300 px-8 cursor-default select-none">
                        {partner}
                    </span>
                ))}
            </Marquee>
        </div>

        {/* Floating Cards Tech Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div style={{ y, opacity }}>
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-[0.9]">
                    PROVEN<br/>
                    <span className="text-neutral-500">TECHNOLOGY.</span>
                </h2>
                <div className="h-1 w-20 bg-green-400 mb-8" />
                <p className="text-lg text-neutral-400 max-w-md leading-relaxed">
                    Built on a foundation of cryptographic excellence. We leverage the most advanced primitives to ensure security at the speed of light.
                </p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 perspective-1000 relative">
                {/* Ambient Moving Blob */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-500/20 blur-[80px] rounded-full mix-blend-screen animate-pulse pointer-events-none" />

                {techStack.map((tech, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
                        whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group relative p-6 bg-white/5 border border-white/10 backdrop-blur-md rounded-xl overflow-hidden hover:bg-white/10 transition-colors shadow-lg"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                            <div className="w-2 h-2 rounded-full box-shadow-glow" style={{ backgroundColor: tech.color, boxShadow: `0 0 10px ${tech.color}` }} />
                        </div>
                        
                        <h4 className="font-bold text-2xl mb-2 group-hover:translate-x-1 transition-transform">{tech.name}</h4>
                        <p className="text-xs text-neutral-400 font-mono uppercase tracking-wider">{tech.description}</p>
                        
                        {/* Hover Gradient */}
                        <div 
                            className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                            style={{ background: `radial-gradient(circle at center, ${tech.color}, transparent 70%)` }} 
                        />
                    </motion.div>
                ))}
            </div>
        </div>

      </div>
      
      <style jsx>{`
        .stroke-text {
            -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
        }
        .perspective-1000 {
            perspective: 1000px;
        }
      `}</style>
    </section>
  );
}
