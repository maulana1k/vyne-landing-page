"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowRight, Play, Star, Send, MousePointer2, Bell, Home, ChevronRight, LayoutDashboard, CreditCard, TrendingUp } from "lucide-react";
import { useRef } from "react";
import Image from "next/image"; // In case we use images later, but for now we build with code
import { cn } from "@/lib/utils";

export function Hero() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const badge1Ref = useRef(null); // Finance
  const badge2Ref = useRef(null); // Business
  const dashboardRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // 1. Title Word Reveal (simple fade up for now)
    tl.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
    });
    
    // 2. Badges Pop In
    tl.from([badge1Ref.current, badge2Ref.current], {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
    }, "-=0.5");

    // 3. Floating Animation for Badges (Continuous)
    gsap.to(badge1Ref.current, {
        y: -10,
        rotation: -5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
    });
    
    gsap.to(badge2Ref.current, {
        y: 10,
        rotation: 5,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.2, // Offset
    });

    // 4. Dashboard Reveal
    gsap.from(dashboardRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        delay: 0.5
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative pt-32 pb-20 overflow-hidden min-h-screen flex flex-col items-center bg-hero-gradient">
      
      {/* Background Grid Pattern (Subtle) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Main Content */}
      <div className="container relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto">
        
        {/* Headline with Floating Badges */}
        <div className="relative mb-6">
            <h1 ref={titleRef} className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-[1.1]">
              Make Your Money <br />
              Work Harder
            </h1>

            {/* Floating Badge 1: Finance */}
            <div ref={badge1Ref} className="absolute -left-12 top-12 md:-left-15 md:top-40 bg-[#FFFACD] text-yellow-900 px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transform -rotate-12">
                <span className="font-semibold text-sm">Finance</span>
                 <MousePointer2 className="absolute -right-7 -top-5 size-8 fill-current rotate-90" />
            </div>

            {/* Floating Badge 2: Business */}
            <div ref={badge2Ref} className="absolute -right-8 bottom-8 md:-right-10 md:bottom-0 bg-[#FFD1DC] text-red-900 px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transform rotate-12">
                 <MousePointer2 className="absolute -top-7 -left-6 size-8 fill-current" />
                 <span className="font-semibold text-sm">Business</span>
            </div>
        </div>

        {/* Subtext */}
        <p className="max-w-xl text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
          Initiating a business venture may appear overwhelming, yet our forte lies in simplifying the entire process for you.
        </p>

        {/* CTAs */}
        <div className="flex flex-col md:flex-row items-center gap-4 mb-12">
            <button className="bg-black text-white hover:bg-black/80 transition px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2">
                Get Started Free
            </button>
            <button className="bg-transparent border border-black/20 hover:bg-black/5 transition px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2">
                <span className="size-6 rounded-full border border-black flex items-center justify-center">
                    <Play className="size-3 fill-black ml-0.5" />
                </span>
                Watch A Demo
            </button>
        </div>

        {/* Trustpilot */}
        <div className="flex items-center gap-4 mb-20 animate-fade-in opacity-80">
            <div className="flex items-center gap-1">
                <div className="p-1 bg-green-500/10 rounded">
                    <Star className="size-6 text-[#00b67a] fill-[#00b67a]" /> 
                </div> 
                <span className="font-bold text-lg ml-1">Trustpilot</span>
            </div>
            <div className="flex gap-0.5">
                 {[1,2,3,4,5].map(i => <div key={i} className="bg-[#f25752] p-1 rounded-sm"><Star className="size-3 text-white fill-white"/></div>)}
            </div>
            <span className="text-sm font-medium text-muted-foreground">3800+ 5 Stars</span>
        </div>

        {/* Dashboard Preview (Placeholder) */}
        <div ref={dashboardRef} className="w-full max-w-4xl relative">
            <div className="relative rounded-[56px] p-8 overflow-hidden bg-white/70 flex aspect-[16/10] items-center justify-center group">
            <div className="relative rounded-[32px] overflow-hidden bg-gray-100 border border-gray-200 w-full h-full flex items-center justify-center group">
                 <Image 
                    src="/mockup.png" 
                    alt="App Dashboard" 
                    width={1200} 
                    height={800} 
                    className="w-full h-full object-cover"
                    priority
                 />

                 {/* Hover Effect Helper */}
                 <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            </div>
            
        </div>

      </div>
    </section>
  );
}
