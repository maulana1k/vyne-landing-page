"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Search } from "lucide-react";
import { Footer } from "@/components/sections/footer";

const categories = ["All", "DeFi", "Liquidity", "NFT", "Gaming", "Infrastructure", "Social"];

const apps = [
    { name: "VyneSwap", cat: "DeFi", desc: "Automated market maker with 0% slippage.", color: "#4ade80" },
    { name: "LiquidStake", cat: "Liquidity", desc: "Liquid staking solution for VYN tokens.", color: "#3b82f6" },
    { name: "PixelRealms", cat: "Gaming", desc: "MMORPG built fully on-chain.", color: "#f472b6" },
    { name: "VyneID", cat: "Infrastructure", desc: "Decentralized identity protocol.", color: "#a855f7" },
    { name: "SocialGraph", cat: "Social", desc: "Censorship-resistant social network.", color: "#e879f9" },
    { name: "StableVyne", cat: "DeFi", desc: "Algorithmic stablecoin backed by crypto.", color: "#22c55e" },
    { name: "MarketX", cat: "NFT", desc: "Next-gen NFT marketplace aggregator.", color: "#facc15" },
    { name: "BridgeCore", cat: "Infrastructure", desc: "Trustless bridge to Ethereum & Solana.", color: "#60a5fa" },
];

export default function EcosystemPage() {
  const [filter, setFilter] = useState("All");

  const filteredApps = apps.filter(app => filter === "All" || app.cat === filter);

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 mb-40">
            
            {/* Header */}
            <div className="mb-20 text-center">
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-6xl md:text-9xl font-bold tracking-tighter mb-6 mix-blend-exclusion"
                >
                    ECOSYSTEM
                </motion.h1>
                <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                    Explore hundreds of decentralized applications running on Vyne. 
                    From high-frequency trading to immersive gaming worlds.
                </p>
            </div>

            {/* Filter Bar */}
            <div className="flex flex-wrap justify-center gap-4 mb-20">
                {categories.map((cat, i) => (
                    <button 
                        key={i}
                        onClick={() => setFilter(cat)}
                        className={`px-6 py-2 rounded-full border text-sm uppercase tracking-widest transition-all ${
                            filter === cat 
                            ? "bg-white text-black border-white" 
                            : "bg-black text-neutral-500 border-white/20 hover:border-white hover:text-white"
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence>
                    {filteredApps.map((app, i) => (
                        <motion.div
                            layout
                            key={app.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="group relative p-8 border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden cursor-pointer"
                        >
                            {/* Hover Gradient */}
                            <div 
                                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                                style={{ background: `radial-gradient(circle at center, ${app.color}, transparent 70%)` }} 
                            />

                            <div className="flex justify-between items-start mb-8">
                                <div className="w-12 h-12 rounded-lg flex items-center justify-center font-bold text-xl text-black" style={{ backgroundColor: app.color }}>
                                    {app.name[0]}
                                </div>
                                <div className="p-2 border border-white/10 rounded-full group-hover:bg-white group-hover:text-black transition-colors">
                                    <ArrowUpRight className="w-4 h-4" />
                                </div>
                            </div>
                            
                            <h3 className="text-2xl font-bold mb-2">{app.name}</h3>
                            <p className="text-neutral-400 text-sm mb-6 min-h-[40px]">{app.desc}</p>
                            
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] uppercase tracking-widest border border-white/20 px-2 py-1 rounded text-neutral-300">
                                    {app.cat}
                                </span>
                                {["DeFi", "Liquidity"].includes(app.cat) && (
                                    <span className="text-[10px] uppercase tracking-widest bg-green-500/20 text-green-400 px-2 py-1 rounded">
                                        Audited
                                    </span>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

        </div>
        <Footer />
    </div>
  );
}
