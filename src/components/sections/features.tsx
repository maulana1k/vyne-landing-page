"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ArrowRight, BarChart3, ChevronRight, Plus, ShoppingCart, Users } from "lucide-react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function Features() {
    const containerRef = useRef(null);
    const leftCardRef = useRef(null);
    const rightCardRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
            }
        });

        tl.from([leftCardRef.current, rightCardRef.current], {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
        });

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-24 bg-white" id="features">
            <div className="container px-4 mx-auto max-w-6xl">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-16">
                    <div className="max-w-2xl">
                        <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
                            Manage <br /> Money Wisely
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Master the Art of Financial Management: Strategies and Tools to Optimize Your Budget, Build Wealth, and Secure a Stable Financial Future
                        </p>
                    </div>
                    <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-black/80 transition flex items-center gap-2 whitespace-nowrap">
                        Get Started Free
                    </button>
                </div>

                {/* Feature Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Card 1: Expense Statistic */}
                    <div ref={leftCardRef} className="bg-gray-50 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden group">

                        {/* Learn More Floating Pill */}
                        <div className="absolute top-10 left-10 z-10">
                            <button className="bg-white/80 backdrop-blur border border-pink-100 text-pink-500 px-6 py-2 rounded-full text-sm font-semibold hover:bg-white transition">
                                Learn More
                            </button>
                        </div>

                        {/* Chart Visualization (CSS based to match image style) */}
                        <div className="mt-12 bg-white rounded-3xl p-6 shadow-sm border border-gray-100 relative mb-12">
                            <div className="flex items-center justify-between mb-6">
                                <span className="font-bold text-lg">Expanse Statistic</span>
                                <div className="flex items-center gap-2 text-xs font-medium border border-gray-200 rounded-full px-3 py-1">
                                    <BarChart3 className="size-3" />
                                    Bar chart
                                </div>
                            </div>

                            {/* The Chart Bars */}
                            <div className="h-48 flex items-end justify-between gap-2 px-2">
                                {/* Mock Data */}
                                {[
                                    { h: "40%", label: "Jan", color: "bg-orange-200" },
                                    { h: "60%", label: "Feb", color: "bg-orange-200" },
                                    { h: "100%", label: "Mar", color: "bg-orange-400" }, // Active
                                    { h: "50%", label: "Apr", color: "bg-orange-300" },
                                    { h: "75%", label: "May", color: "bg-orange-300" },
                                ].map((bar, i) => (
                                    <div key={i} className="flex flex-col items-center gap-2 flex-1 group/bar">
                                        {/* Tooltip for active */}
                                        {bar.label === "Mar" && (
                                            <div className="absolute top-16 left-1/2 -translate-x-1/2 bg-white text-xs p-3 rounded-xl shadow-xl w-32 z-20 pointer-events-none">
                                                <div className="font-bold text-lg mb-1">73,901</div>
                                                <div className="flex items-center gap-1 text-gray-400 mb-1"><div className="size-1.5 bg-orange-200 rounded-full" /> Current Income</div>
                                                <div className="font-bold text-lg mb-1">98,032</div>
                                                <div className="flex items-center gap-1 text-gray-400"><div className="size-1.5 bg-orange-400 rounded-full" /> Current Experience</div>
                                            </div>
                                        )}
                                        <div className={cn("w-full rounded-t-xl rounded-b-md transition-all duration-500 hover:opacity-80", bar.color)} style={{ height: bar.h }} />
                                        <span className="text-xs text-gray-400 font-medium">{bar.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <h3 className="text-3xl font-bold mb-2">Manage Your <br /> Money Wisely</h3>
                        <p className="text-muted-foreground text-sm max-w-xs">Master the Art of Financial Management</p>
                    </div>


                    {/* Card 2: Quick Transfer */}
                    <div ref={rightCardRef} className="bg-gray-50 rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-between">

                        {/* Header */}
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-2xl font-semibold">Quick Transfer</h3>
                            <div className="flex items-center gap-2 rounded-full">
                                <button className="px-4 py-2 text-sm font-medium hover:bg-white  hover:shadow-sm rounded-full transition">All</button>
                                <button className="px-4 py-2 text-sm font-medium bg-red-100  rounded-full">Contacts</button>
                            </div>
                        </div>

                        {/* Contacts Row */}
                        <div className="flex items-center gap-4 mb-2 overflow-x-auto pb-4 hide-scrollbar">
                            <button className="flex flex-col items-center gap-2 min-w-16">
                                <div className="size-20 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center hover:border-gray-400 transition text-gray-400">
                                    <Plus className="size-6" />
                                </div>
                                <span className="text-sm font-semibold">Add New</span>
                            </button>
                            <div className="flex flex-col items-center gap-2 min-w-16">
                                <div className="size-20 rounded-full bg-gray-300 relative overflow-hidden">
                                    <div className={`absolute inset-0 bg-[url('https://i.pravatar.cc/150?img=10')] bg-cover`} />
                                </div>
                                <span className="text-sm font-semibold text-gray-600">Albert Sky</span>
                            </div>

                            <div className="flex flex-col items-center gap-2 min-w-16">
                                <div className="size-20 rounded-full bg-gray-300 relative overflow-hidden">
                                    <div className={`absolute inset-0 bg-[url('https://i.pravatar.cc/150?img=11')] bg-cover`} />
                                </div>
                                <span className="text-sm font-semibold text-gray-600">Andi Su</span>
                            </div>

                            <div className="flex flex-col items-center gap-2 min-w-16">
                                <div className="size-20 rounded-full bg-gray-300 relative overflow-hidden">
                                    <div className={`absolute inset-0 bg-[url('https://i.pravatar.cc/150?img=12')] bg-cover`} />
                                </div>
                                <span className="text-sm font-semibold text-gray-600">James Rin</span>
                            </div>

                            <button className="size-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 shrink-0 ml-auto mr-0">
                                <ChevronRight className="size-5" />
                            </button>
                        </div>

                        {/* Amount and Send */}
                        <div className="flex items-center justify-between mt-auto">
                            <div className="flex items-baseline">
                                <span className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-800">$349.00</span>
                            </div>
                            <button className="bg-[#f25752] text-white px-8 py-4 rounded-full font-semibold hover:bg-red-500 transition shadow-lg shadow-red-200">
                                Send
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
