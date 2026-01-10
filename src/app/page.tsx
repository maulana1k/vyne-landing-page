import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Features } from "@/components/sections/features";
import { Hero } from "@/components/sections/hero";
import { ProFeatures } from "@/components/sections/pro-features";
import { Stats } from "@/components/sections/stats";
import { Testimonials } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-foreground antialiased selection:bg-pink-100 selection:text-pink-900">
      <Navbar />
      <Hero />
      <Features />
      <ProFeatures />
      <Stats />
      <Testimonials />
      <Footer />
    </main>
  );
}
