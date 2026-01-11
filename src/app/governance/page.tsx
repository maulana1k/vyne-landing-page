"use client";

import { motion } from "framer-motion";
import { Vote, FileText, CheckCircle2, Clock, AlertCircle } from "lucide-react";
import { Footer } from "@/components/sections/footer";

// Mock Proposals
const proposals = [
    { id: "VGP-12", title: "Increase Validator Set Size to 100", status: "Active", votes: "45M", end: "2 days" },
    { id: "VGP-11", title: "Reduce Gas Fees by 20% for L2", status: "Passed", votes: "120M", end: "Ended" },
    { id: "VGP-10", title: "Treasury Allocation for Q3 Grants", status: "Passed", votes: "98M", end: "Ended" },
    { id: "VGP-9", title: "Integrate Pyth Oracle on Mainnet", status: "Rejected", votes: "32M", end: "Ended" },
];

export default function GovernancePage() {
  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6 mb-40">
            
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="mb-16"
            >
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-green-500 font-mono text-sm tracking-widest uppercase">On-Chain Governance</span>
                </div>
                <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8">
                    DAO <span className="text-neutral-600">DASHBOARD</span>
                </h1>
                
                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { label: "Total Votes Cast", value: "245,901,220" },
                        { label: "Treasury Balance", value: "$42,500,000" },
                        { label: "Active Proposals", value: "1" }
                    ].map((stat, i) => (
                        <div key={i} className="p-6 border border-white/10 bg-white/5 rounded-xl backdrop-blur-sm">
                            <h4 className="text-neutral-500 text-xs uppercase tracking-widest mb-2">{stat.label}</h4>
                            <p className="text-3xl font-mono font-bold">{stat.value}</p>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Voting Power */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                
                {/* Proposal List */}
                <div className="lg:col-span-2 space-y-4">
                    <h3 className="text-2xl font-bold mb-6">Recent Proposals</h3>
                    {proposals.map((p, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="p-6 border border-white/10 rounded-xl hover:border-green-500/50 hover:bg-white/5 transition-all cursor-pointer group"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <span className={`px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest ${
                                    p.status === "Active" ? "bg-green-500 text-black" :
                                    p.status === "Passed" ? "bg-white/20 text-white" : "bg-red-500/20 text-red-500"
                                }`}>
                                    {p.status}
                                </span>
                                <span className="text-neutral-500 text-xs font-mono">{p.end}</span>
                            </div>
                            <h4 className="text-xl font-bold mb-2 group-hover:text-green-400 transition-colors">{p.title}</h4>
                            <div className="flex items-center gap-4 text-xs text-neutral-400 font-mono">
                                <span>ID: {p.id}</span>
                                <span>•</span>
                                <span>Votes: {p.votes}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Delegate Actions */}
                <div className="lg:col-span-1">
                    <div className="sticky top-32 p-8 border border-white/10 bg-[#0a0a0a] rounded-xl">
                        <Vote className="w-12 h-12 text-white mb-6" />
                        <h3 className="text-2xl font-bold mb-4">Your Voice Matters</h3>
                        <p className="text-neutral-400 text-sm mb-8 leading-relaxed">
                            Connect your wallet to participate in the governance of the Vyne Protocol. You can vote directly or delegate your voting power to a trusted representative.
                        </p>
                        <button className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors mb-4">
                            Connect Wallet
                        </button>
                        <button className="w-full py-4 border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                            View Delegates
                        </button>
                    </div>
                </div>

            </div>
        </div>
        <Footer />
    </div>
  );
}
