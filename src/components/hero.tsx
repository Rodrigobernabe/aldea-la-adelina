"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Intro Animation
            gsap.from(textRef.current, {
                y: 100,
                opacity: 0,
                duration: 2,
                ease: "power4.out",
                delay: 0.5,
            });

            gsap.from(videoRef.current, {
                scale: 1.2,
                duration: 3,
                ease: "power2.out",
            });

            // Scroll Parallax
            gsap.to(textRef.current, {
                y: -200,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            });

            gsap.to(videoRef.current, {
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
                {/* Placeholder video from Coverr or Pexels */}
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-60"
                >
                    <source src="https://videos.pexels.com/video-files/2437396/2437396-uhd_2560_1440_24fps.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-charcoal-forest/90" />
            </div>

            <h1
                ref={textRef}
                className="relative z-10 text-[15vw] leading-none font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-soft-sand to-soft-sand/80 tracking-tighter mix-blend-overlay"
                style={{
                    WebkitTextStroke: "1px rgba(227, 218, 201, 0.2)",
                }}
            >
                AVENTURA
            </h1>

            <div className="absolute bottom-10 left-6 text-soft-sand/60 text-sm font-body tracking-widest uppercase animate-bounce">
                Scroll para explorar
            </div>
        </section>
    );
}
