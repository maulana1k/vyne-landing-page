"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

// Mock data (in a real app, fetch from CMS)
const projectsDetail: Record<string, any> = {
  "lumina": {
    title: "Lumina",
    subtitle: "The Future of DeFi Yield",
    category: "DeFi Protocol",
    year: "2024",
    description: "Lumina is a decentralized protocol that automates yield farming strategies across multiple chains. We built a brand identity that reflects liquidity, transparency, and institutional-grade security.",
    images: [
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200",
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200",
      "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=1200"
    ]
  },
  "apex": {
    title: "Apex",
    subtitle: "AI Infrastructure for Everyone",
    category: "AI Infrastructure",
    year: "2025",
    description: "Apex provides the computing power needed to train the next generation of neural networks. Our design language mimics the complexity and beauty of neural pathways.",
    images: [
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200",
      "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1200",
      "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200"
    ]
  },
  "vortex": {
    title: "Vortex",
    subtitle: "Seamless NFT Trading",
    category: "NFT Marketplace",
    year: "2023",
    description: "Vortex redefines the NFT trading experience with zero-gas transactions and deep liquidity. We created a dark, immersive UI that puts the art first.",
    images: [
       "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=1200",
       "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200",
       "https://images.unsplash.com/photo-1548502669-529a9696245f?q=80&w=1200"
    ]
  },
  "echo": {
      title: "Echo",
      subtitle: "Neural Voice Synthesis",
      category: "AI Product",
      year: "2025",
      description: "Echo allows creators to generate lifelike voiceovers in seconds. The brand identity visualizes sound waves as tangible, colorful objects.",
      images: [
          "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1200",
          "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200",
          "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200"
      ]
  }
};

export default function ProjectPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const project = projectsDetail[slug];
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if(!project) return;
    
    // Animate Hero
    const ctx = gsap.context(() => {
        const tl = gsap.timeline();
        
        tl.from(".char-reveal", {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.05,
            ease: "power3.out"
        })
        .from(".meta-reveal", {
            opacity: 0,
            y: 20,
            duration: 0.8,
            stagger: 0.1
        }, "-=0.5")
        .from(".hero-image", {
            scale: 1.1,
            opacity: 0,
            duration: 1.5,
            ease: "expo.out"
        }, "-=1");
        
    }, containerRef);
    return () => ctx.revert();
  }, [project]);

  if (!project) {
      return <div className="min-h-screen bg-black text-white flex items-center justify-center">Project Not Found</div>;
  }

  return (
    <main ref={containerRef} className="bg-black text-white min-h-screen">
      {/* Hero */}
      <section className="pt-32 px-6 md:px-12 pb-20">
         <Link href="/work" className="text-sm font-mono text-neutral-500 hover:text-white transition-colors uppercase tracking-widest mb-12 block">
             &larr; Back to Work
         </Link>
         
         <div className="mb-20">
             <h1 className="text-[12vw] leading-[0.8] font-bold tracking-tighter mb-4">
                 {project.title.split("").map((char: string, i: number) => (
                     <span key={i} className="char-reveal inline-block">{char}</span>
                 ))}
             </h1>
             <h2 className="meta-reveal text-xl md:text-3xl text-neutral-400 font-light">{project.subtitle}</h2>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20 border-t border-white/20 pt-8">
             <div className="meta-reveal">
                 <h3 className="text-xs uppercase tracking-widest text-neutral-500 mb-2">Client</h3>
                 <p className="font-mono">{project.title}</p>
             </div>
             <div className="meta-reveal">
                 <h3 className="text-xs uppercase tracking-widest text-neutral-500 mb-2">Services</h3>
                 <p className="font-mono">{project.category}</p>
             </div>
             <div className="meta-reveal">
                 <h3 className="text-xs uppercase tracking-widest text-neutral-500 mb-2">Year</h3>
                 <p className="font-mono">{project.year}</p>
             </div>
             <div className="meta-reveal md:col-span-1">
                 <h3 className="text-xs uppercase tracking-widest text-neutral-500 mb-2">Brief</h3>
                 <p className="text-sm text-neutral-300 leading-relaxed">{project.description}</p>
             </div>
         </div>
         
         <div className="hero-image relative w-full aspect-video overflow-hidden rounded-sm mb-8">
             <Image 
                src={project.images[0]} 
                alt={project.title}
                fill
                className="object-cover"
                priority
             />
         </div>
      </section>
      
      {/* Gallery */}
      <section className="px-6 md:px-12 pb-32 space-y-8">
           {project.images.slice(1).map((img: string, i: number) => (
               <div key={i} className={`relative w-full ${i % 2 === 0 ? 'aspect-video' : 'aspect-square md:aspect-[21/9]'} overflow-hidden rounded-sm`}>
                   <Image 
                      src={img}
                      alt={`${project.title} shot ${i+1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-1000"
                   />
               </div>
           ))}
           
           <div className="pt-32 text-center">
               <h3 className="text-2xl font-bold mb-8">Next Project</h3>
               <Link href="/work" className="text-[8vw] font-bold uppercase hover:text-green-400 transition-colors">
                   Next Case &rarr;
               </Link>
           </div>
      </section>
    </main>
  );
}
