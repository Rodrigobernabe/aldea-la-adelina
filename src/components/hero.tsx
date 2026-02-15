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
            // Cinematic Text Animation
            gsap.fromTo(textRef.current,
                {
                    opacity: 0,
                    filter: "blur(20px)",
                    letterSpacing: "1em",
                },
                {
                    opacity: 1,
                    filter: "blur(0px)",
                    letterSpacing: "0.1em",
                    duration: 2.5,
                    ease: "power2.out", // Smooth cinematic ease
                    delay: 0.5,
                }
            );

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
                    src="https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&w=1920"
                    alt="Lavender field cinematic view"
                    className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-charcoal-forest" />
            </div>

            <h1
                ref={textRef}
                className="relative z-10 text-[10vw] md:text-[8vw] leading-none font-body font-bold text-soft-sand tracking-widest text-center uppercase drop-shadow-2xl mix-blend-overlay"
            >
                AVENTURA
            </h1>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-soft-sand/80 text-xs font-body tracking-[0.2em] uppercase animate-pulse">
                Descubre lo Inexplorado
            </div>
        </section>
    );
}
