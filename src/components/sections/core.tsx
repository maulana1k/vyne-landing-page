"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Float, Html, OrbitControls } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
        // Basic rotation
        meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
        meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
        
        // Mouse interaction influence
        const t = state.clock.getElapsedTime();
        const mouseX = state.mouse.x * 2;
        const mouseY = state.mouse.y * 2;
        
        meshRef.current.rotation.x += mouseY * 0.01;
        meshRef.current.rotation.y += mouseX * 0.01;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <mesh 
            ref={meshRef} 
            scale={2.5}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
        >
          <icosahedronGeometry args={[1, 64]} />
          <MeshDistortMaterial
            color={hovered ? "#ffffff" : "#4ade80"}
            attach="material"
            distort={0.6} // Strength, 0 disables the effect (default=1)
            speed={hovered ? 5 : 2} // Speed (default=1)
            roughness={0.2}
            metalness={0.9}
            bumpScale={0.005}
          />
        </mesh>
    </Float>
  );
}

function Scene() {
    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={2} color="#4ade80" />
            <pointLight position={[-10, -10, -5]} intensity={1.5} color="#3b82f6" />
            <AnimatedSphere />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </>
    )
}

export function CoreReactor() {
  return (
    <section className="h-screen w-full bg-black relative flex items-center justify-center overflow-hidden">
      
      {/* 3D Canvas */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
           <Scene />
        </Canvas>
      </div>

      {/* Overlay UI */}
      <div className="relative z-10 pointer-events-none w-full max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 h-full items-center">
        
        {/* Left Side: Text */}
        <div className="pt-20 md:pt-0">
             <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 1 }}
               viewport={{ once: true }}
             >
                <h2 className="text-sm md:text-base font-mono mb-4 text-green-400 tracking-widest uppercase">
                    // Neural_Architecture
                </h2>
                <h3 className="text-5xl md:text-8xl font-bold tracking-tighter leading-none mb-8 mix-blend-difference">
                    LIQUID<br/>INTELLIGENCE
                </h3>
                <p className="max-w-md text-neutral-400 text-lg leading-relaxed mix-blend-difference">
                    Our proprietary core dynamically rewrites its own neural pathways to optimize for liquidity depth and transaction velocity.
                </p>
                
                <div className="mt-12 flex flex-col gap-4 pointer-events-auto w-fit">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-[1px] bg-white/50" />
                        <span className="text-xs font-mono uppercase text-white/70">Self-Healing Nodes</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-[1px] bg-white/50" />
                        <span className="text-xs font-mono uppercase text-white/70">Adaptive Consensus</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-[1px] bg-white/50" />
                        <span className="text-xs font-mono uppercase text-white/70">Zero-Latency Sync</span>
                    </div>
                </div>
                
                <button className="mt-12 px-8 py-4 border border-green-400/30 text-green-400 font-mono text-sm hover:bg-green-400 hover:text-black transition-all pointer-events-auto">
                    INITIATE_CORE_DUMP()
                </button>
             </motion.div>
        </div>

        {/* Right Side: Interactive Hint */}
        <div className="hidden md:flex flex-col items-end justify-center h-full pb-32 pointer-events-none opacity-50">
             <div className="flex flex-col items-center gap-2">
                 <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-white to-transparent" />
                 <span className="text-[10px] font-mono uppercase tracking-[0.2em] transform rotate-90 origin-center translate-y-8 whitespace-nowrap">
                     Drag to Rotate
                 </span>
             </div>
        </div>

      </div>
      
      {/* Background Decor */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-[1]" />
    </section>
  );
}
