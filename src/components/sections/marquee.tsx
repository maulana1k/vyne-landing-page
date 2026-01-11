"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Marquee() {
  const firstText = useRef<HTMLParagraphElement>(null);
  const secondText = useRef<HTMLParagraphElement>(null);
  const slider = useRef<HTMLDivElement>(null);

  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    requestAnimationFrame(animation);
  }, []);

  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }
    if (xPercent > 0) {
      xPercent = -100;
    }
    
    // Move text
    if(firstText.current && secondText.current) {
        gsap.set(firstText.current, { xPercent: xPercent });
        gsap.set(secondText.current, { xPercent: xPercent });
    }
    
    xPercent += 0.05 * direction; // Speed
    requestAnimationFrame(animation);
  };

  return (
    <div className="relative flex h-[150px] overflow-hidden bg-black text-white border-y border-white/10 items-center">
      <div ref={slider} className="absolute whitespace-nowrap top-1/2 -translate-y-1/2">
        <p ref={firstText} className="relative m-0 pr-[50px] float-left text-[8vw] font-medium leading-none uppercase text-transparent stroke-text opacity-50">
          Decentralized — Scalable — Secure — Quantum Resistant —
        </p>
        <p ref={secondText} className="absolute left-full top-0 m-0 pr-[50px] float-left text-[8vw] font-medium leading-none uppercase text-transparent stroke-text opacity-50">
          Decentralized — Scalable — Secure — Quantum Resistant —
        </p>
      </div>
      
      <style jsx>{`
        .stroke-text {
            -webkit-text-stroke: 1px rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </div>
  );
}
