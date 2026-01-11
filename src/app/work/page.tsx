"use client";

import { Work } from "@/components/sections/work";


export default function WorkIndexPage() {
  return (
    <main className="pt-32">
        <div className="px-6 md:px-12 mb-20 text-center">
            <h1 className="text-[10vw] font-bold tracking-tighter leading-none mb-4">OUR WORK</h1>
            <p className="max-w-2xl mx-auto text-neutral-400">A selection of projects that define the future of digital interaction.</p>
        </div>
        <Work />
    </main>
  );
}
