"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { BarChart, Globe2, Heart, Users2 } from "lucide-react";
import { useRef } from "react";

export function Stats() {
  const containerRef = useRef(null);
  const cardsRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
        }
    });
    
    // Cards Stagger
    tl.from(".stat-card", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-[#FAFAFA]" id="about-us">
      <div className="container px-4 mx-auto max-w-6xl">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight max-w-lg">
                Key Reasons To <br /> Choose Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-sm leading-relaxed mb-2">
                Whatever your customers' payment preferences, we'll help you find the right solution for your business.
            </p>
        </div>

        {/* Stats Cards Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="stat-card bg-white p-10 rounded-xl ">
                <div className="bg-red-50 text-red-500 w-max px-4 py-2 rounded-lg font-semibold text-sm flex items-center gap-2 mb-6">
                    <Users2 className="size-4" /> Customers
                </div>
                <h3 className="text-6xl font-bold mb-4">20K<sup className="text-4xl text-gray-400">+</sup></h3>
                <p className="text-muted-foreground leading-relaxed">
                    In 38 Countries, We Work As One Global Team To Help Clients
                </p>
            </div>

            {/* Card 2 */}
            <div className="stat-card bg-white p-10 rounded-xl ">
                <div className="bg-red-50 text-red-500 w-max px-4 py-2 rounded-lg font-semibold text-sm flex items-center gap-2 mb-6">
                    <Heart className="size-4" /> Impact
                </div>
                <h3 className="text-6xl font-bold mb-4">98<sup className="text-4xl text-gray-400">%</sup></h3>
                <p className="text-muted-foreground leading-relaxed">
                     We Have Worked With 89% Of The Global 500 Companies.
                </p>
            </div>

            {/* Card 3 */}
            <div className="stat-card bg-white p-10 rounded-xl ">
                <div className="bg-red-50 text-red-500 w-max px-4 py-2 rounded-lg font-semibold text-sm flex items-center gap-2 mb-6">
                    <BarChart className="size-4" /> Experience
                </div>
                <h3 className="text-6xl font-bold mb-4">89<sup className="text-4xl text-gray-400">%</sup></h3>
                <p className="text-muted-foreground leading-relaxed">
                    We Started With A Rebellious Mindset And Set Ourselves The Challenge
                </p>
            </div>

        </div>

      </div>
    </section>
  );
}
