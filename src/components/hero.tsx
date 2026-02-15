"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Instagram, Facebook } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const imageRef = useRef<HTMLImageElement>(null); // Changed from videoRef to imageRef

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Cinematic Text Animation - Optimized
            gsap.set(textRef.current, {
                autoAlpha: 0,
                filter: "blur(10px)",
                letterSpacing: "0.5em",
                y: 20
            });

            gsap.to(textRef.current, {
                autoAlpha: 1,
                filter: "blur(0px)",
                letterSpacing: "0.05em", // Slightly less spacing for final
                y: 0,
                duration: 2,
                ease: "power3.out", // More dramatic ease
                delay: 0.2,
                // forceful: true // ensure it renders
            });

            // Simple Parallax for Image
            gsap.to(imageRef.current, {
                y: 100,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-charcoal-forest"
        >
            <div className="absolute inset-0 w-full h-full z-0">
                {/* High Quality Hero Image */}
                <img
                    ref={imageRef}
                    src="https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1920"
                    alt="Atardecer en las sierras"
                    className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-charcoal-forest" />
            </div>

            <div className="relative z-10 flex flex-col items-center">
                <h1
                    ref={textRef}
                    className="text-[8vw] md:text-[6vw] leading-none font-display font-bold text-soft-sand text-center uppercase drop-shadow-2xl mix-blend-overlay"
                    style={{ willChange: "transform, opacity, filter" }}
                >
                    ALDEA LA ADELINA
                </h1>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-soft-sand/80 text-xs font-body tracking-[0.2em] uppercase animate-pulse">
                Descubre lo Inexplorado
            </div>
        </section>
    );
}
