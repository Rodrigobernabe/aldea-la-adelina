"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

const activities = [
    {
        id: 1,
        title: "Camp Hall",
        desc: "Salón de Usos Múltiples",
        img: "https://images.pexels.com/photos/206648/pexels-photo-206648.jpeg?auto=compress&cs=tinysrgb&w=800", // Rustic cabin interior
        cols: "md:col-span-2",
    },
    {
        id: 2,
        title: "Sanitarios",
        desc: "Confort Rústico",
        img: "https://images.pexels.com/photos/7061662/pexels-photo-7061662.jpeg?auto=compress&cs=tinysrgb&w=800", // Bathroom detail
        cols: "md:col-span-1",
    },
    {
        id: 3,
        title: "Sector de Juegos",
        desc: "Diversión en la Naturaleza",
        img: "https://images.pexels.com/photos/1684187/pexels-photo-1684187.jpeg?auto=compress&cs=tinysrgb&w=800", // Playground/Activity
        cols: "md:col-span-1",
    },
    {
        id: 4,
        title: "Senderos",
        desc: "Caminos de Montaña",
        img: "https://images.pexels.com/photos/1576939/pexels-photo-1576939.jpeg?auto=compress&cs=tinysrgb&w=800", // Hiking path
        cols: "md:col-span-1",
    },
    {
        id: 5,
        title: "Energía Solar",
        desc: "Sostenibilidad",
        img: "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800", // Solar/Nature
        cols: "md:col-span-1",
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
        <section id="instalaciones" ref={containerRef} className="py-24 px-6 md:px-12 bg-charcoal-forest">
            <div className="max-w-7xl mx-auto mb-16">
                <h2 className="text-6xl md:text-8xl font-display text-soft-sand mb-4">INSTALACIONES</h2>
                <p className="text-soft-sand/60 text-lg md:text-xl max-w-xl font-body">
                    Espacios diseñados para tu comodidad en medio de la naturaleza.
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
