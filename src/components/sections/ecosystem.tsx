"use client";

import { useEffect, useRef } from "react";

export function Ecosystem() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const particles: Particle[] = [];
    const particleCount = 100; // Adjust for density
    
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw() {
         if(!ctx) return;
         ctx.beginPath();
         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
         ctx.fillStyle = "rgba(74, 222, 128, 0.5)"; // Green-400 with opacity
         ctx.fill();
      }
    }

    // Initialize
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    function animate() {
        if(!ctx || !canvas) return;
        ctx.clearRect(0, 0, width, height);
        
        // Draw connections
        ctx.strokeStyle = "rgba(74, 222, 128, 0.05)";
        ctx.lineWidth = 1;
        
        for(let i=0; i<particles.length; i++) {
            const p1 = particles[i];
            p1.update();
            p1.draw();
            
            for(let j=i; j<particles.length; j++) {
                const p2 = particles[j];
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const dist = Math.sqrt(dx*dx + dy*dy);
                
                if(dist < 150) {
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            }
        }
        
        requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative h-screen w-full bg-black flex items-center justify-center overflow-hidden border-t border-white/10">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mix-blend-difference text-white">
          <h2 className="text-[10vw] leading-[0.85] font-bold tracking-tighter mb-8">
             JOIN THE <br/><span className="text-green-400">NETWORK.</span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 mb-12 max-w-2xl mx-auto">
              Connect with thousands of builders, creators, and innovators shaping the decentralized future on Vyne.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <button className="px-8 py-4 bg-green-400 text-black font-bold uppercase tracking-widest hover:bg-white transition-colors w-full md:w-auto">
                 Read Whitepaper
              </button>
              <button className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors w-full md:w-auto">
                 Join Discord
              </button>
          </div>
      </div>
    </section>
  );
}
