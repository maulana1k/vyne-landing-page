"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Terminal, Copy, Check } from "lucide-react";
import gsap from "gsap";
import { Footer } from "@/components/sections/footer";

export default function DevelopersPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* Left Col: Info */}
            <div>
                <motion.h1 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]"
                >
                    BUILD <br/> THE <span className="text-green-400">FUTURE.</span>
                </motion.h1>
                <p className="text-xl text-neutral-400 mb-12 leading-relaxed">
                    Access the most advanced cryptographic primitives with a developer experience designed for speed. Zero boilerplate, infinite scalability.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-12">
                    {["Rust SDK", "JS/TS Client", "Python API", "Go Modules"].map((item, i) => (
                        <div key={i} className="p-4 border border-white/10 rounded hover:border-green-400/50 hover:bg-white/5 transition-all cursor-pointer">
                            <span className="font-mono text-sm font-bold text-white">{item}</span>
                        </div>
                    ))}
                </div>

                <div className="flex gap-4">
                    <button className="px-8 py-4 bg-green-400 text-black font-bold uppercase tracking-widest hover:bg-white transition-colors">
                        Read Docs
                    </button>
                    <button className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                        Get API Keys
                    </button>
                </div>
            </div>

            {/* Right Col: Code Demo */}
            <div className="relative">
                <div className="absolute inset-0 bg-green-500/10 blur-[100px] pointer-events-none" />
                
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="relative bg-[#0d0d0d] border border-white/10 rounded-xl overflow-hidden shadow-2xl"
                >
                    <div className="flex items-center justify-between p-4 border-b border-white/5 bg-white/5">
                        <div className="flex gap-2">
                             <div className="w-3 h-3 rounded-full bg-red-500" />
                             <div className="w-3 h-3 rounded-full bg-yellow-500" />
                             <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <span className="text-xs font-mono text-neutral-500">deploy_contract.rs</span>
                        <Copy className="w-4 h-4 text-neutral-500 hover:text-white cursor-pointer" />
                    </div>
                    
                    <div className="p-8 overflow-x-auto">
                        <pre className="font-mono text-xs md:text-sm leading-relaxed text-neutral-300">
{`use vyne_sdk::contract;
use vyne_sdk::types::*;

#[contract]
pub struct LiquidityPool {
    token_a: Address,
    token_b: Address,
    reserve_a: u128,
    reserve_b: u128,
}

impl LiquidityPool {
    pub fn new(a: Address, b: Address) -> Self {
        Self {
            token_a: a,
            token_b: b,
            reserve_a: 0,
            reserve_b: 0,
        }
    }

    pub fn swap(&mut self, amount: u128) -> u128 {
        // Zero-knowledge verification integrated
        self.verify_proof(); 
        let output = self.calculate_xyk(amount);
        output
    }
}`}
                        </pre>
                    </div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div 
                    animate={{ y: [0, -20, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute -bottom-10 -left-10 p-6 bg-black border border-green-500/30 rounded-lg shadow-xl backdrop-blur-md"
                >
                    <div className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-400" />
                        <div>
                            <div className="text-xs text-neutral-500 font-mono uppercase">Compilation Status</div>
                            <div className="font-bold text-white">Build Successful (40ms)</div>
                        </div>
                    </div>
                </motion.div>
            </div>

        </div>
        <Footer />
    </div>
  );
}
