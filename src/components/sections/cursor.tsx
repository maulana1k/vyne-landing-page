"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    
    if (!cursor || !follower) return;

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5, // Slower follow
        ease: "power2.out",
      });
    };

    const onHoverStart = () => setHovered(true);
    const onHoverEnd = () => setHovered(false);

    document.addEventListener("mousemove", onMouseMove);
    
    // Add hover listeners to interactive elements
    const links = document.querySelectorAll("a, button, .cursor-hover");
    links.forEach((link) => {
      link.addEventListener("mouseenter", onHoverStart);
      link.addEventListener("mouseleave", onHoverEnd);
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      links.forEach((link) => {
        link.removeEventListener("mouseenter", onHoverStart);
        link.removeEventListener("mouseleave", onHoverEnd);
      });
    };
  }, []);

  useEffect(() => {
    if (hovered) {
      gsap.to(followerRef.current, { scale: 3, opacity: 0.3, duration: 0.3 });
    } else {
      gsap.to(followerRef.current, { scale: 1, opacity: 1, duration: 0.3 });
    }
  }, [hovered]);

  return (
    <div className="pointer-events-none fixed left-0 top-0 z-[9999] hidden lg:block">
      {/* Small dot pointer */}
      <div 
        ref={cursorRef} 
        className="fixed left-0 top-0 h-2 w-2 rounded-full bg-white -translate-x-1/2 -translate-y-1/2"
      />
      {/* Larger follower circle */}
      <div 
        ref={followerRef} 
        className="fixed left-0 top-0 h-10 w-10 rounded-full border border-white/50 -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      />
    </div>
  );
}
