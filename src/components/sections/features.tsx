"use client";

import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Box, Layers, Zap, Globe, Shield, Cpu } from "lucide-react";

// Feature Data
const features = [
  {
    title: "Global Mesh Network",
    description: "Distributed node architecture ensuring 100% uptime and censorship resistance.",
    icon: Globe,
    colSpan: "col-span-1 md:col-span-2",
  },
  {
    title: "Zero-Knowledge Proofs",
    description: "Verify transactions without revealing sensitive data.",
    icon: Shield,
    colSpan: "col-span-1",
  },
  {
    title: "Quantum Resistance",
    description: "Post-quantum cryptographic algorithms protecting your assets for decades.",
    icon: Layers,
    colSpan: "col-span-1",
  },
  {
    title: "Hyper-Execution Layer",
    description: "Parallel transaction processing reaching up to 100,000 TPS.",
    icon: Zap,
    colSpan: "col-span-1 md:col-span-2",
  },
  {
    title: "AI-Driven Optimization",
    description: "Neural networks optimize gas fees in real-time.",
    icon: Cpu,
    colSpan: "col-span-1 md:col-span-3",
  },
];

function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`group relative border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden rounded-xl ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(74, 222, 128, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div>{children}</div>
    </div>
  );
}

export function Features() {
  return (
    <section className="bg-black text-white py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            CORE <span className="text-green-400">INFRASTRUCTURE</span>
          </h2>
          <p className="max-w-2xl text-neutral-400">
            Built for the machine economy. Our stack provides the primitives necessary for the next generation of decentralized applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <Card key={i} className={`p-8 min-h-[300px] flex flex-col justify-between hover:bg-neutral-900/80 transition-colors ${feature.colSpan}`}>
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:bg-green-400/20 group-hover:text-green-400 transition-colors">
                <feature.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 font-mono uppercase tracking-wider">{feature.title}</h3>
                <p className="text-sm text-neutral-400 group-hover:text-neutral-200 transition-colors">
                  {feature.description}
                </p>
              </div>
              
              {/* Decor elements */}
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-100 transition-opacity">
                 <div className="w-2 h-2 bg-green-400 rounded-full" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
