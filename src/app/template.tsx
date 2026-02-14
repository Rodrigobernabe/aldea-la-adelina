"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

export default function Template({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        gsap.set("#banner-1", { yPercent: 0 });
        gsap.set("#banner-2", { yPercent: 0 });
        gsap.set("#banner-3", { yPercent: 0 });

        const tl = gsap.timeline();

        tl.to("#banner-1", {
            yPercent: -100,
            duration: 0.8,
            ease: "power2.inOut",
        })
            .to("#banner-2", {
                yPercent: -100,
                duration: 0.8,
                ease: "power2.inOut",
            }, "<0.1")
            .to("#banner-3", {
                yPercent: -100,
                duration: 0.8,
                ease: "power2.inOut",
            }, "<0.1");
    }, []);

    return (
        <div>
            <div
                id="banner-1"
                className="min-h-screen bg-charcoal-forest z-[100] fixed top-0 left-0 w-1/3"
            />
            <div
                id="banner-2"
                className="min-h-screen bg-charcoal-forest z-[100] fixed top-0 left-1/3 w-1/3"
            />
            <div
                id="banner-3"
                className="min-h-screen bg-charcoal-forest z-[100] fixed top-0 left-2/3 w-1/3"
            />
            {children}
        </div>
    );
}
