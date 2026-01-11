"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Footer } from "@/components/sections/footer";

export default function CommunityPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: {x: number, y: number, r: number, a: number}[] = [];
    for(let i=0; i<100; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 2 + 1,
            a: Math.random() * Math.PI * 2
        });
    }

    function animate() {
        if(!ctx || !canvas) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = "rgba(74, 222, 128, 0.5)"; // Green
        particles.forEach(p => {
            p.y -= 0.5;
            p.x += Math.sin(p.a) * 0.5;
            p.a += 0.02;
            
            if(p.y < 0) p.y = canvas.height;
            
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fill();
        });
        
        requestAnimationFrame(animate);
    }
    animate();

  }, []);

  return (
    <div className="min-h-screen bg-black text-white pt-32 relative overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-30" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center mb-40">
            <motion.h1 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-6xl md:text-[10vw] font-bold tracking-tighter leading-none mb-12"
            >
                GLOBAL <br/> <span className="text-transparent stroke-text">CONSENSUS</span>
            </motion.h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
                {[
                    { title: "Discord", count: "450k+", desc: "Developer chat & support" },
                    { title: "Twitter", count: "1.2M", desc: "Latest announcements" },
                    { title: "Telegram", count: "200k", desc: "Community discussion" },
                    { title: "Github", count: "15k", desc: "Code contributions" },
                ].map((social, i) => (
                    <motion.div 
                        key={i}
                        whileHover={{ y: -10, backgroundColor: "rgba(255,255,255,0.1)" }}
                        className="p-8 border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl cursor-pointer transition-all"
                    >
                        <h3 className="text-3xl font-bold mb-2">{social.count}</h3>
                        <div className="text-xl font-bold text-green-400 mb-4">{social.title}</div>
                        <p className="text-sm text-neutral-400">{social.desc}</p>
                    </motion.div>
                ))}
            </div>
            
            <div className="bg-neutral-900/50 border border-white/10 rounded-2xl p-12 lg:p-24 relative overflow-hidden">
                <div className="relative z-10">
                    <h2 className="text-4xl font-bold mb-6">Host a Meetup</h2>
                    <p className="text-neutral-400 max-w-xl mx-auto mb-8">
                        Vyne Ambassadors are organizing events in over 40 countries. Apply for a grant to host a local meetup in your city.
                    </p>
                    <button className="px-12 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-green-400 transition-colors">
                        Apply for Grant
                    </button>
                </div>
                {/* Decor */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/20 blur-[100px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 blur-[100px] rounded-full pointer-events-none" />
            </div>

        </div>

        <style jsx>{`
            .stroke-text {
                -webkit-text-stroke: 2px rgba(255, 255, 255, 0.5);
            }
        `}</style>
        <Footer />
    </div>
  );
}
