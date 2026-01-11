"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function Flux() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    // Configuration
    const particleCount = 400; // Crowd
    const colors = ["#4ade80", "#3b82f6", "#f472b6", "#e879f9", "#ffffff"]; // Neon palette
    
    class Particle {
      x: number;
      y: number;
      speed: number;
      width: number;
      height: number;
      color: string;
      
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.speed = Math.random() * 15 + 5; // Fast speed
        this.width = Math.random() * 100 + 20; // Long streaks
        this.height = Math.random() * 2 + 1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speed;
        
        // Reset when off screen
        if (this.x > width) {
            this.x = -this.width;
            this.y = Math.random() * height;
            // Randomize speed again for chaos
            this.speed = Math.random() * 25 + 10;
        }
      }

      draw() {
          if(!ctx) return;
          ctx.fillStyle = this.color;
          ctx.beginPath();
          ctx.rect(this.x, this.y, this.width, this.height);
          ctx.fill();
          
          // Glow effect
          ctx.shadowBlur = 10;
          ctx.shadowColor = this.color;
      }
    }

    const particles: Particle[] = [];
    for(let i=0; i<particleCount; i++) {
        particles.push(new Particle());
    }

    function animate() {
        if(!ctx || !canvas) return;
        
        // Trail effect
        ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
        ctx.fillRect(0, 0, width, height);
        
        particles.forEach(p => {
            p.update();
            p.draw();
        });

        requestAnimationFrame(animate);
    }

    animate();

    // GSAP Text Animation
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    
    // Glitch Text
    if(textRef.current) {
        gsap.to(textRef.current, {
            textShadow: "2px 0 red, -2px 0 blue",
            skewX: -10,
            duration: 0.1,
            repeat: -1,
            repeatDelay: 5,
            yoyo: true,
            ease: "none"
        });
    }

    const handleResize = () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);

  }, []);

  return (
    <section className="relative h-[80vh] w-full bg-black flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      
      <div ref={textRef} className="relative z-10 text-center mix-blend-difference px-4">
        <h2 className="text-[15vw] leading-[0.7] font-black italic tracking-tighter text-white uppercase transform -rotate-2">
          HYPER<br/>VELOCITY
        </h2>
        <div className="mt-8 bg-white/10 backdrop-blur-md inline-block px-6 py-2 border border-white/20 transform skew-x-12">
            <span className="text-xl md:text-3xl font-mono font-bold text-green-400">
                1,000,000 TPS // NO LIMITS
            </span>
        </div>
      </div>
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-black pointer-events-none z-[1]" />
    </section>
  );
}
