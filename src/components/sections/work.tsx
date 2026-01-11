"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    slug: "lumina",
    title: "Lumina",
    category: "DeFi Protocol",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200", 
  },
  {
    id: 2,
    slug: "apex",
    title: "Apex",
    category: "AI Infrastructure",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200", 
  },
  {
    id: 3,
    slug: "vortex",
    title: "Vortex",
    category: "NFT Marketplace",
    image: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=1200",
  },
  {
    id: 4,
    slug: "echo",
    title: "Echo",
    category: "Neural Network",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1200", 
  },
];

export function Work() {
  const containerRef = useRef<HTMLOptionElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
        const items = gsap.utils.toArray(".work-item");
        
        items.forEach((item: any) => {
            const img = item.querySelector("img");
            
            // Parallax effect for image inside container
            gsap.fromTo(img, 
                { scale: 1.2, yPercent: -20 },
                { 
                    yPercent: 20,
                    ease: "none",
                    scrollTrigger: {
                        trigger: item,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                    }
                }
            );
        });
        
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-black text-white py-32 px-4 md:px-12 border-t border-white/10">
      <div className="flex justify-between items-end mb-24 px-2">
        <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mix-blend-exclusion">Ecosystem_Dapps</h2>
        <span className="hidden md:block text-xs font-mono text-green-400">[ LIVE_MAINNET ]</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-20 md:gap-y-32">
        {projects.map((project, i) => (
          <Link href={`/work/${project.slug}`} key={project.id} className={`work-item group relative block cursor-pointer ${i % 2 === 1 ? 'md:mt-20' : ''}`}>
            <div className="overflow-hidden aspect-[4/5] w-full relative border border-white/10 rounded-sm">
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-end p-8">
                     <span className="text-xl font-mono text-white">View Case -&gt;</span>
                 </div>
              <Image 
                src={project.image} 
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="mt-6 flex justify-between items-end border-b border-white/20 pb-4">
               <div>
                  <h3 className="text-3xl font-bold mb-2 font-sans tracking-tight">{project.title}</h3>
                  <p className="text-xs font-mono text-neutral-400 bg-neutral-900 inline-block px-2 py-1 rounded">{project.category}</p>
               </div>
               <div className="text-4xl opacity-20 font-bold group-hover:opacity-100 transition-opacity duration-300">
                  0{project.id}
               </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
