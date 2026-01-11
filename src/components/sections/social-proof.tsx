"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Activity, Globe2 } from "lucide-react";

// Mock Data
const markets = [
    { exchange: "BINANCE", pair: "VYNE/USDT", price: "12.450", change: "+12.4%", vol: "840M" },
    { exchange: "COINBASE", pair: "VYNE/USD", price: "12.475", change: "+11.8%", vol: "620M" },
    { exchange: "KRAKEN", pair: "VYNE/EUR", price: "11.950", change: "+10.2%", vol: "210M" },
    { exchange: "OKX", pair: "VYNE/ETH", price: "0.0034", change: "+13.1%", vol: "450M" },
    { exchange: "BYBIT", pair: "VYNE/USDT", price: "12.460", change: "+12.2%", vol: "330M" },
];

const tweets = [
    {
        name: "Vitalik Buterin",
        handle: "@VitalikButerin",
        avatar: "V",
        content: "The zk-proof implementation on Vyne is remarkably efficient. This could be the scaling unlock we've been waiting for.",
        time: "Just now"
    },
    {
        name: "Bankless",
        handle: "@BanklessHQ",
        avatar: "B",
        content: "🚨 BREAKING: Vyne Network flips Solana in daily active users. The rotation is real.",
        time: "2h ago"
    },
    {
        name: "Cobie",
        handle: "@cobie",
        avatar: "C",
        content: "Finally a chain that doesn't halt every other Tuesday. Vyne feels snappy.",
        time: "5h ago"
    }
];

export function SocialProof() {
  return (
    <section className="bg-black text-white py-32 px-6 md:px-12 relative overflow-hidden">
        
        {/* Ambient Glow */}
        <motion.div 
             animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
             transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/10 blur-[120px] rounded-full pointer-events-none" 
        />

        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
                
                {/* Visualizer / Markets */}
                <div className="w-full md:w-1/2">
                    <div className="flex items-center gap-3 mb-8">
                         <div className="relative">
                             <div className="w-3 h-3 bg-green-500 rounded-full animate-ping absolute inset-0" />
                             <div className="w-3 h-3 bg-green-500 rounded-full relative" />
                         </div>
                         <h3 className="text-sm font-mono uppercase tracking-widest text-green-400">Live Market Data</h3>
                    </div>

                    <div className="relative bg-black/40 border border-white/10 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-xl">
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 border-b border-white/5 bg-white/5 backdrop-blur-md">
                            <span className="text-xs font-mono text-neutral-500">TERMINAL_V.2.0</span>
                            <div className="flex gap-2">
                                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                                <div className="w-2 h-2 rounded-full bg-green-500/50" />
                            </div>
                        </div>

                        {/* List */}
                        <div className="divide-y divide-white/5">
                            {markets.map((m, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-4 flex items-center justify-between hover:bg-white/5 transition-colors group cursor-pointer"
                                >
                                    <div className="flex flex-col">
                                        <span className="font-bold text-sm tracking-tight">{m.pair}</span>
                                        <span className="text-[10px] text-neutral-500 font-mono">{m.exchange}</span>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <span className="font-mono text-sm">${m.price}</span>
                                        <span className="text-[10px] text-green-400 font-mono flex items-center gap-1">
                                            <Activity className="w-3 h-3" /> {m.change}
                                        </span>
                                    </div>
                                    <div className="hidden sm:block text-right">
                                         <span className="text-[10px] text-neutral-600 block mb-0.5">24h Vol</span>
                                         <span className="text-xs font-mono text-neutral-400">{m.vol}</span>
                                    </div>
                                    <ArrowUpRight className="w-4 h-4 text-neutral-600 group-hover:text-white transition-colors" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Social Feed */}
                <div className="w-full md:w-1/2">
                     <div className="mb-8">
                         <h2 className="text-4xl font-bold tracking-tighter mb-2">COMMUNITY <br/> SENTIMENT</h2>
                         <p className="text-neutral-500 max-w-sm">The smartest minds in the space are watching. Validated by the consensus.</p>
                     </div>

                     <div className="space-y-6">
                         {tweets.map((t, i) => (
                             <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + (i * 0.1) }}
                                className="relative group"
                             >
                                 <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                 <div className="relative bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-md hover:bg-white/10 hover:translate-x-2 transition-all duration-300">
                                     <div className="flex items-start justify-between mb-4">
                                         <div className="flex items-center gap-3">
                                             <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neutral-800 to-black border border-white/10 flex items-center justify-center font-bold text-neutral-400">
                                                 {t.avatar}
                                             </div>
                                             <div>
                                                 <div className="font-bold text-sm flex items-center gap-1">
                                                     {t.name} <ShieldCheck className="w-3 h-3 text-blue-400" />
                                                 </div>
                                                 <div className="text-xs text-neutral-600">{t.handle}</div>
                                             </div>
                                         </div>
                                         <span className="text-xs text-neutral-700 font-mono">{t.time}</span>
                                     </div>
                                     <p className="text-sm text-neutral-300 leading-relaxed">
                                         {t.content}
                                     </p>
                                 </div>
                             </motion.div>
                         ))}
                     </div>
                </div>

            </div>
        </div>
    </section>
  );
}
