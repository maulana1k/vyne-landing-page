"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { DollarSign, Menu, Moon, Sun, Waves } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const navRef = useRef(null);

  useGSAP(() => {
    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.2,
    });
  });

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-transparent backdrop-blur-sm md:px-12"
    >
      {/* 1. Logo Section */}
      <Link href="/" className="flex items-center gap-2 group">
        <div className="flex items-center justify-center size-10 bg-primary rounded-full text-white">
          <Waves className="size-6" /> {/* Approximation of the logo */}
        </div>
        <span className="text-xl font-bold tracking-tight text-foreground">
          Finestack
        </span>
      </Link>

      {/* 2. Center Pill Navigation (Desktop Only) */}
      <div className="hidden md:flex items-center bg-black/90 text-white rounded-full p-1.5 gap-1 shadow-lg">
        <Link
          href="/"
          className="bg-primary hover:bg-primary/90 transition-colors px-5 py-2 rounded-full text-sm font-medium flex items-center gap-2"
        >
          <div className="size-4 bg-white/20 rounded-full flex items-center justify-center">
            <div className="size-1.5 bg-white rounded-full" />
          </div>
          Home
        </Link>
        {["About", "Reviews", "Procedures", "Blog"].map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase().replace(" ", "-")}`}
            className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            {item}
          </Link>
        ))}
      </div>

      {/* 3. Right Actions */}
      <div className="flex items-center gap-4">
        {/* Toggle (Visual only for now) */}
        {/* <button className="h-8 p-1 bg-gray-100 rounded-full flex items-center border border-gray-200" aria-label="Toggle Theme">
          <div className="size-6 bg-white rounded-full shadow-sm flex items-center justify-center text-primary">
            <Sun className="size-3.5 fill-primary" />
          </div>
          <div className="size-6 flex items-center justify-center text-gray-400">
             <Moon className="size-3.5" />
          </div>
        </button> */}


        {/* Sign In Button */}
        <button className="hidden md:flex px-5 py-2 rounded-full border border-gray-300 font-medium hover:bg-gray-50 transition-colors bg-white">
            Sign In
        </button>

        {/* Mobile Menu Icon */}
        <button className="md:hidden p-2">
             <Menu className="size-6" />
        </button>
      </div>
    </nav>
  );
}
