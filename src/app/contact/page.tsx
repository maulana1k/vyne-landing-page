"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [formState, setFormState] = useState("idle"); // idle, submitting, success

  useEffect(() => {
    const ctx = gsap.context(() => {
       gsap.from(".reveal-text", {
           y: 50,
           opacity: 0,
           duration: 1,
           stagger: 0.1,
           ease: "power3.out"
       });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    setTimeout(() => {
        setFormState("success");
    }, 2000);
  };

  return (
    <main ref={containerRef} className="pt-32 px-6 md:px-12 min-h-screen bg-black text-white flex flex-col md:flex-row gap-20">
      <div className="w-full md:w-1/2">
        <h1 className="reveal-text text-[8vw] md:text-[5vw] font-bold leading-none mb-12">
            START<br/>
            PROJECT<span className="text-green-400">_</span>
        </h1>
        
        <div className="reveal-text space-y-8 text-neutral-400 font-mono text-sm uppercase tracking-widest">
            <div>
                <h3 className="text-white mb-2">Email</h3>
                <a href="mailto:hello@vyne.agency" className="hover:text-green-400 transition-colors">hello@vyne.agency</a>
            </div>
            <div>
                <h3 className="text-white mb-2">Address</h3>
                <p>12-4 Shibuya Scramble Sq.<br/>Tokyo, Japan</p>
            </div>
            <div>
                <h3 className="text-white mb-2">Socials</h3>
                <div className="flex gap-4">
                    <a href="#" className="hover:text-white transition-colors">Instagram</a>
                    <a href="#" className="hover:text-white transition-colors">Twitter</a>
                    <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                </div>
            </div>
        </div>
      </div>
      
      <div className="w-full md:w-1/2 bg-[#0a0a0a] p-8 md:p-12 rounded-sm border border-white/10 reveal-text">
        {formState === "success" ? (
             <div className="h-full flex flex-col items-center justify-center text-center">
                 <div className="w-16 h-16 bg-green-400/20 text-green-400 rounded-full flex items-center justify-center mb-6">
                     <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                 </div>
                 <h3 className="text-2xl font-bold mb-2">Message Sent</h3>
                 <p className="text-neutral-400">We will initiate protocol shortly.</p>
                 <button onClick={() => setFormState("idle")} className="mt-8 text-sm underline text-green-400">Send another</button>
             </div>
        ) : (
            <form onSubmit={handleSubmit} className="space-y-12">
                <div className="group relative">
                    <input type="text" required className="w-full bg-transparent border-b border-neutral-800 py-4 text-xl outline-none focus:border-green-400 transition-colors placeholder:text-neutral-700" placeholder="NAME"/>
                </div>
                <div className="group relative">
                    <input type="email" required className="w-full bg-transparent border-b border-neutral-800 py-4 text-xl outline-none focus:border-green-400 transition-colors placeholder:text-neutral-700" placeholder="EMAIL"/>
                </div>
                <div className="group relative">
                    <textarea required rows={4} className="w-full bg-transparent border-b border-neutral-800 py-4 text-xl outline-none focus:border-green-400 transition-colors resize-none placeholder:text-neutral-700" placeholder="PROJECT DETAILS"></textarea>
                </div>
                
                <button type="submit" disabled={formState === "submitting"} className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-green-400 transition-colors disabled:opacity-50">
                    {formState === "submitting" ? "Processing..." : "Initialise Transmission"}
                </button>
            </form>
        )}
      </div>
    </main>
  );
}
