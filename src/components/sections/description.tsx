"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Description() {
  const sectionRef = useRef<HTMLSectionElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate text color/opacity on scroll
      const words = textRef.current?.querySelectorAll("span");
      if(words) {
          gsap.fromTo(words, 
            { opacity: 0.1 },
            {
                opacity: 1,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 60%",
                    end: "bottom 80%",
                    scrub: true,
                }
            }
          )
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  
  const text = "Vyne is the first specialized Layer 1 blockchain optimized for high-frequency trading and AI inference. We abstract the complexity of blockchain to provide infinite scalability with near-zero gas fees.";
  const words = text.split(" ");

  return (
    <section ref={sectionRef} className="bg-[#f1f1f1] text-black py-32 px-6 md:px-20 lg:px-40 min-h-[80vh] flex items-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xs font-bold uppercase tracking-widest mb-8 text-neutral-500">Protocol Vision</h2>
        <p ref={textRef} className="text-3xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight">
          {words.map((word, i) => (
             <span key={i} className="inline-block mr-[0.25em]">{word}</span>
          ))}
        </p>
        
        <div className="mt-16 h-[1px] w-full bg-neutral-300" />
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm md:text-base text-neutral-600">
             <div>
                <h3 className="font-bold text-black mb-2">Validator Nodes</h3>
                <p>Decentralized consensus secured by 10k+ nodes globally.</p>
             </div>
             <div>
                <h3 className="font-bold text-black mb-2">Smart Contracts</h3>
                <p>Rust-based execution environment for maximum safety.</p>
             </div>
             <div>
                <h3 className="font-bold text-black mb-2">Governance</h3>
                <p>Fully community-owned DAO structure from day one.</p>
             </div>
        </div>
      </div>
    </section>
  );
}
