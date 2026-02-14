"use client";

import CustomCursor from "@/components/custom-cursor";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import SmoothScroll from "@/components/smooth-scroll";
import BentoGrid from "@/components/bento-grid";
import GalleryScroll from "@/components/gallery-scroll";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-charcoal-forest text-soft-sand selection:bg-signal-orange selection:text-charcoal-forest">
        <CustomCursor />
        <Navbar />
        <Hero />

        <div id="actividades">
          <BentoGrid />
        </div>

        <div id="galeria">
          <GalleryScroll />
        </div>

        <section id="contacto" className="py-24 px-6 bg-charcoal-forest border-t border-soft-sand/10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end">
            <div>
              <h2 className="text-[10vw] leading-none font-display text-soft-sand/20">ADELINA</h2>
              <p className="text-soft-sand/60 max-w-sm mt-4">
                Donde la naturaleza se encuentra con el diseño.
                <br />
                Villa Mercedes, San Luis.
              </p>
            </div>
            <div className="mt-8 md:mt-0 flex gap-4">
              <button className="px-8 py-3 bg-signal-orange text-charcoal-forest rounded-full font-body uppercase tracking-widest hover:bg-white transition-colors">
                Reservar Ahora
              </button>
            </div>
          </div>
        </section>
      </main>
    </SmoothScroll>
  );
}
