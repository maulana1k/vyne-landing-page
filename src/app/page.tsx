"use client";

import { Description } from "@/components/sections/description";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { Preloader } from "@/components/sections/preloader";
import { Work } from "@/components/sections/work";
import { Stats } from "@/components/sections/stats";
import { Ecosystem } from "@/components/sections/ecosystem";
import { Features } from "@/components/sections/features";
import { Testimonials } from "@/components/sections/testimonials";
import { CoreReactor } from "@/components/sections/core";
import { Partners } from "@/components/sections/partners";
import { SocialProof } from "@/components/sections/social-proof";


export default function VynePage() {
  return (
    <main>
      <Preloader />
      <Hero />
      <Marquee />
      <Description />
      <Work />
      <Features />
      <Stats />
      <Ecosystem />
      <Testimonials />
      <CoreReactor />
      <Partners />
      <SocialProof />
      <Footer />
    </main>
  );
}
