"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Banknote, DollarSign } from "lucide-react"; // Approximations for the floating 3d icons
import { useRef } from "react";

const TESTIMONIALS = [
  {
    name: "Megan",
    role: "Student at New York University",
    quote: "This cup is fantastic! It is so well insulated. I live in the desert, and it keeps my cold drinks cold in the heat",
    img: 10
  },
  {
    name: "Jerry Tang",
    role: "Recent graduate, Marketing at Sweatpals",
    quote: "Joining Mate community is the best thing I have ever done. The projects I worked on gave me the experience I needed in content Marketing",
    img: 11
  },
  {
    name: "Jerry Tang",
    role: "Recent graduate, Marketing at Sweatpals",
    quote: "I love the color. It's even better in person. I love that iron flask gives you multiple lids as well. It's sturdy.",
    img: 12
  },
  {
    name: "David K.",
    role: "Recent graduate, Marketing at Sweatpals",
    quote: "I love the color. It's even better in person. I love that iron flask gives you multiple lids as well. It's sturdy. It is kept my cold beverages clothes for way longer than I had expected it to.",
    img: 13
  },
  {
    name: "Megan",
    role: "Student at New York University",
    quote: "I absolutely love this cup. I've bought several different brands and there's always something I end up not liking about them. This one checks all of the boxes.",
    img: 14
  },
  {
    name: "David K.",
    role: "Recent graduate",
    quote: "I absolutely love this cup. I've bought several different brands and there's always something",
    img: 15
  }
];

export function Testimonials() {
  const containerRef = useRef(null);
  const headerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        toggleActions: "play none none reverse",
      }
    });

    tl.from(headerRef.current, { y: 30, opacity: 0, duration: 0.8 });
    
    tl.from(".testimonial-card", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out",
    }, "-=0.4");

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-32 bg-white relative overflow-hidden" id="reviews">
      <div className="container px-4 mx-auto max-w-6xl">
        
        {/* Header */}
        <div ref={headerRef} className="text-center mb-20 relative z-10">
            {/* Top Labels */}
            <div className="flex justify-center gap-8 mb-6 text-sm font-semibold text-gray-500">
                <span className="text-black">Our Customers</span>
                <span>Talk About IT</span>
                <span>Better Than Us</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                Hear What Customer <br /> Have To Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                See Your Whole Financial Picture In One Place, Alongside A Smarter Approach To Investing And Real Human.
            </p>

            {/* Floating Icons (Decorative) */}
            <div className="absolute top-10 left-[10%] -z-10 animate-music-float">
                <div className="bg-yellow-100 p-3 rounded-full">
                    <DollarSign className="size-8 text-yellow-600" />
                </div>
            </div>
            <div className="absolute top-10 right-[10%] -z-10 animate-music-float-delayed">
                <div className="bg-green-100 p-3 rounded-full">
                    <Banknote className="size-8 text-green-600" />
                </div>
            </div>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {TESTIMONIALS.map((t, i) => (
                <div key={i} className="testimonial-card break-inside-avoid bg-[#F5F1EE] p-8 rounded-3xl hover:shadow-lg transition-shadow duration-300">
                     <div className="flex items-center gap-4 mb-6">
                        <div className="size-14 rounded-full bg-gray-300 overflow-hidden relative">
                             {/* Placeholder Avatar */}
                             <div className={`absolute inset-0 bg-[url('https://i.pravatar.cc/150?img=${t.img}')] bg-cover`} />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg">{t.name}</h4>
                            <p className="text-xs text-muted-foreground">{t.role}</p>
                        </div>
                     </div>
                     <p className="text-gray-700 leading-relaxed font-medium">
                        “{t.quote}”
                     </p>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
}
