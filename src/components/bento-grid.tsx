"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

const activities = [
    {
        id: 1,
        title: "Hiking",
        desc: "Senderos Ocultos",
        img: "https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=800",
        cols: "md:col-span-2",
    },
    {
        id: 2,
        title: "Camping",
        desc: "Bajo las Estrellas",
        img: "https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=800",
        cols: "md:col-span-1",
    },
    {
        id: 3,
        title: "Kayaking",
        desc: "Aguas Bravas",
        img: "https://images.pexels.com/photos/241044/pexels-photo-241044.jpeg?auto=compress&cs=tinysrgb&w=800",
        cols: "md:col-span-1",
    },
    {
        id: 4,
        title: "Wildlife",
        desc: "Fauna Autóctona",
        img: "https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=800",
        cols: "md:col-span-2",
    },
];

export default function BentoGrid() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".bento-item", {
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-24 px-6 md:px-12 bg-charcoal-forest">
            <div className="max-w-7xl mx-auto mb-16">
                <h2 className="text-6xl md:text-8xl font-display text-soft-sand mb-4">EXPLORA</h2>
                <p className="text-soft-sand/60 text-lg md:text-xl max-w-xl font-body">
                    Descubre actividades diseñadas para reconectar con lo esencial.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
                {activities.map((item) => (
                    <div
                        key={item.id}
                        className={`bento-item group relative overflow-hidden rounded-3xl border border-soft-sand/10 ${item.cols}`}
                    >
                        <Image
                            src={item.img}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-forest/90 via-transparent to-transparent opacity-80" />

                        <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <div>
                                <h3 className="text-3xl font-display text-soft-sand mb-1">{item.title}</h3>
                                <p className="text-soft-sand/70 font-body text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    {item.desc}
                                </p>
                            </div>
                            <div className="bg-signal-orange text-charcoal-forest p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                                <ArrowUpRight size={20} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
