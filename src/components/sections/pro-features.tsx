"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ArrowRight, ChevronRight, CreditCard, Gift, LayoutGrid, MoreHorizontal, Wallet } from "lucide-react";
import { useRef } from "react";

export function ProFeatures() {
  const containerRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
        }
    });

    tl.from(leftColRef.current, { x: -50, opacity: 0, duration: 1 })
      .from(rightColRef.current, { x: 50, opacity: 0, duration: 1 }, "-=0.8");

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-white overflow-hidden" id="procedures">
      <div className="container px-4 mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Cards */}
        <div ref={leftColRef} className="relative">
            {/* Gray Background Blob */}
            <div className="absolute inset-0 bg-gray-100 rounded-[3rem] -z-10 transform -rotate-3 scale-[1.1] opacity-50" />
            
            <div className="bg-gray-100/50 backdrop-blur-3xl p-8 rounded-[2.5rem] border border-white/50 space-y-6">
                
                {/* Connected Account Card */}
                <div className="bg-white p-6 rounded-3xl shadow-sm">
                    <div className="flex justify-between items-center mb-6">
                        <span className="font-bold">Connected Account</span>
                        <div className="flex items-center gap-1 text-xs text-gray-500 cursor-pointer hover:text-gray-800">
                             View All <ChevronRight className="size-3" />
                        </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-2xl flex items-center justify-between mb-2">
                        <div className="flex items-center gap-4">
                             {/* Visa Card Icon/Mockup */}
                             <div className="w-12 h-8 bg-indigo-700 rounded flex items-center justify-center text-white text-[0.5rem] font-bold">VISA</div>
                             <div>
                                 <div className="font-bold text-sm">Visa</div>
                                 <div className="text-xs text-gray-400 font-mono">**** **** **** 1990</div>
                             </div>
                        </div>
                        <span className="font-bold text-gray-800">$28,390.20</span>
                    </div>
                </div>

                {/* Expense Breakdown Card */}
                <div className="bg-white p-6 rounded-3xl shadow-sm">
                     <div className="flex justify-between items-center mb-6">
                        <span className="font-bold">Expense Breakdown</span>
                        <MoreHorizontal className="size-5 text-gray-400 cursor-pointer" />
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                        {[
                            { label: "Subscriptions", val: "65.8%", color: "bg-orange-200", stripe: "from-orange-100 to-orange-200" },
                            { label: "Software", val: "32%", color: "bg-purple-200", stripe: "from-purple-100 to-purple-200" },
                            { label: "Software", val: "24.8%", color: "bg-cyan-200", stripe: "from-cyan-100 to-cyan-200" }
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col gap-2">
                                <div className="text-[0.65rem] text-gray-400">{item.label}</div>
                                <div className="text-sm font-bold mb-1">{item.val}</div>
                                {/* Striped Bar */}
                                <div className="h-10 w-full rounded-xl overflow-hidden relative">
                                    <div className={`absolute inset-0 bg-gradient-to-r ${item.stripe} opacity-60`} />
                                    {/* Stripes Pattern (CSS) */}
                                    <div className="absolute inset-0 opacity-30" style={{
                                        backgroundImage: "linear-gradient(45deg, #ffffff 25%, transparent 25%, transparent 50%, #ffffff 50%, #ffffff 75%, transparent 75%, transparent)",
                                        backgroundSize: "10px 10px"
                                    }} />
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </div>

        {/* Right Column: Text Content */}
        <div ref={rightColRef} className="space-y-8">
            <span className="bg-[#fff5f5] text-red-500 font-semibold px-4 py-2 rounded-full text-sm">
                Account Transfer
            </span>
            
            <h2 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight">
                Maximizing <br /> Efficiency In Daily <br /> Finance
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                See your whole financial picture in one place, alongside a smarter approach to investing and real human.
            </p>

            <div className="flex items-center gap-6 pt-4">
                 <div className="flex gap-4">
                    <button className="size-12 rounded-full bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition border border-gray-100">
                        <LayoutGrid className="size-5 text-gray-600" />
                    </button>
                    <button className="size-12 rounded-full bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition border border-gray-100">
                        <Gift className="size-5 text-gray-600" />
                    </button>
                 </div>
                 
                 <button className="bg-[#f25752] text-white px-8 py-4 rounded-full font-semibold hover:bg-red-500 transition shadow-lg shadow-red-200">
                    Learn More
                 </button>
            </div>

        </div>

      </div>
    </section>
  );
}
