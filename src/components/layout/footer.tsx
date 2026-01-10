"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export function Footer() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".footer-content", {
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });
  }, { scope: containerRef });

  return (
    <footer ref={containerRef} className="relative bg-gradient-to-br from-[#E0EAFC] to-[#CFDEF3] pt-24 pb-8 overflow-hidden">
        {/* Custom Gradient Background matching the image (Light Purple/Peach mix) */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50" />
        
        {/* Giant Background Text */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden select-none pointer-events-none opacity-[0.03]">
             <h1 className="text-[20vw] font-bold text-center leading-none tracking-tighter text-black">FINESTACK</h1>
        </div>

        <div className="container relative z-10 px-6 mx-auto max-w-7xl footer-content">
            
            {/* Top Section: CTA & Input */}
            <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-24">
                <h2 className="text-6xl md:text-7xl font-bold tracking-tight text-black">
                    Let's Sit &Talk
                </h2>

                <div className="w-full max-w-md">
                    <div className="relative border-b border-gray-400 pb-2 flex items-center">
                        <input 
                            type="text" 
                            placeholder="Enter Your Email" 
                            className="w-full bg-transparent text-xl md:text-2xl placeholder:text-gray-400 outline-none pb-2" 
                        />
                        <button className="p-2 hover:bg-black/5 rounded-full transition">
                            <ArrowUpRight className="size-8 text-black" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Links Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 text-gray-600">
                <div className="lg:col-span-1">
                    <h3 className="text-xl font-bold text-black mb-6">Address</h3>
                    <p className="leading-relaxed">
                        475 Cherry Dr, Troy, Michigan 48083 <br/>
                        United States ( (248) 823-3200 )
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-bold text-black mb-6">Company</h3>
                    <ul className="space-y-4">
                        <li><Link href="#" className="hover:text-black transition">About</Link></li>
                        <li><Link href="#" className="hover:text-black transition">Pricing</Link></li>
                        <li><Link href="#" className="hover:text-black transition">Jobs</Link></li>
                        <li><Link href="#" className="hover:text-black transition">Blog</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-bold text-black mb-6">Product</h3>
                    <ul className="space-y-4">
                        <li><Link href="#" className="hover:text-black transition">Sales Software</Link></li>
                        <li><Link href="#" className="hover:text-black transition">Marketplace</Link></li>
                        <li><Link href="#" className="hover:text-black transition">Terms & Conditions</Link></li>
                        <li><Link href="#" className="hover:text-black transition">Privacy Policy</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-bold text-black mb-6">Help Center</h3>
                    <ul className="space-y-4">
                        <li><Link href="#" className="hover:text-black transition">Community</Link></li>
                        <li><Link href="#" className="hover:text-black transition">Knowledge Base</Link></li>
                        <li><Link href="#" className="hover:text-black transition">Academy</Link></li>
                        <li><Link href="#" className="hover:text-black transition">Support</Link></li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-black/5 text-sm text-gray-500">
                <div>
                     © 2024 Copyright By Guljar - Finestack
                </div>
                
                {/* Logo in center bottom (Small) */}
                <div className="hidden md:flex bg-red-500 text-white p-2 rounded-full mx-auto -mt-16 relative z-10 size-12 items-center justify-center shadow-lg">
                    {/* Simple Wave Logo */}
                     <svg viewBox="0 0 24 24" fill="none" className="size-6" stroke="currentColor" strokeWidth="3">
                        <path d="M2 12c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2" />
                     </svg>
                </div>

                <div className="flex gap-6 mt-4 md:mt-0">
                    <Link href="#" className="hover:text-black">Terms</Link>
                    <Link href="#" className="hover:text-black">Privacy</Link>
                    <Link href="#" className="hover:text-black">Cookies</Link>
                    <Link href="#" className="hover:text-black">Legal</Link>
                    <Link href="#" className="hover:text-black">Recalls</Link>
                </div>
            </div>

        </div>
    </footer>
  );
}
