"use client";

import CustomCursor from "@/components/custom-cursor";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import SmoothScroll from "@/components/smooth-scroll";
import BentoGrid from "@/components/bento-grid";
import GalleryScroll from "@/components/gallery-scroll";
import Pricing from "@/components/pricing";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-charcoal-forest text-soft-sand selection:bg-signal-orange selection:text-charcoal-forest">
        <CustomCursor />
        <Navbar />
        <Hero />

        <div id="explora">
          <BentoGrid />
        </div>

        <Pricing />

        <div id="galeria">
          <GalleryScroll />
        </div>

        <section id="contacto" className="py-24 px-6 bg-charcoal-forest border-t border-soft-sand/10">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-[8vw] md:text-[6vw] leading-none font-display text-soft-sand/20 mb-8">
              ¡HABLEMOS DE TU<br />PRÓXIMA AVENTURA!
            </h2>

            <div className="flex justify-center">
              <button
                className="px-10 py-5 bg-signal-orange text-white rounded-full font-body uppercase tracking-widest text-lg hover:bg-white hover:text-charcoal-forest transition-colors shadow-2xl"
                onClick={() => window.open("https://wa.me/1234567890", "_blank")}
              >
                Contactar por WhatsApp
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </SmoothScroll>
  );
}
