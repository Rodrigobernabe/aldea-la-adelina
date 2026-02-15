"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const galleryImages = [
    "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/62600/pexels-photo-62600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2422265/pexels-photo-2422265.jpeg?auto=compress&cs=tinysrgb&w=1260", // New
    "https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg?auto=compress&cs=tinysrgb&w=1260", // New
    "https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&w=1260", // New
];

export default function GalleryScroll() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!containerRef.current) return;

            const totalWidth = containerRef.current.scrollWidth;
            const viewportWidth = window.innerWidth;
            const scrollLength = totalWidth - viewportWidth;

            const scrollTween = gsap.to(containerRef.current, {
                x: -scrollLength,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    pin: true,
                    scrub: 1,
                    end: `+=${scrollLength}`,
                }
            });

            // Animate images inside the container
            gsap.utils.toArray(".gallery-item").forEach((item: any) => {
                gsap.to(item, {
                    filter: "grayscale(0%)",
                    duration: 0.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: item,
                        containerAnimation: scrollTween,
                        start: "center 80%", // When the image center hits 80% viewport
                        end: "center 20%",   // When the image center hits 20% viewport
                        toggleActions: "play reverse play reverse",
                        // scrub: true, // Optional: makes it follow scroll exactly
                    }
                });
            });

        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="h-screen bg-soft-sand text-charcoal-forest overflow-hidden relative flex flex-col justify-center">
            <div className="absolute top-10 left-10 md:left-24 z-10 mix-blend-difference text-soft-sand">
                <h2 className="text-4xl md:text-6xl font-display">GALERÍA</h2>
                <p className="text-sm font-body uppercase tracking-widest mt-2">Momentos capturados</p>
            </div>

            <div ref={containerRef} className="flex gap-10 pl-10 md:pl-24 w-max items-center h-[70vh]">
                {galleryImages.map((src, i) => (
                    <div
                        key={i}
                        className="gallery-item relative w-[80vw] md:w-[60vw] h-full overflow-hidden rounded-lg grayscale transition-all duration-700 md:hover:grayscale-0"
                    >
                        <Image
                            src={src}
                            alt={`Gallery Image ${i + 1}`}
                            fill
                            className="object-cover"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
