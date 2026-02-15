"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const followerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        if (!cursor || !follower) return;

        const moveCursor = (e: MouseEvent) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
            });
            gsap.to(follower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.3,
            });
        };

        const handleHover = () => {
            gsap.to(cursor, { scale: 0.5, opacity: 0 });
            gsap.to(follower, { scale: 3, backgroundColor: "rgba(255, 90, 31, 0.2)", borderColor: "transparent" });
        };
        const handleUnhover = () => {
            gsap.to(cursor, { scale: 1, opacity: 1 });
            gsap.to(follower, { scale: 1, backgroundColor: "transparent", borderColor: "#E3DAC9" });
        };

        window.addEventListener("mousemove", moveCursor);

        // Attach hover effects to interactive elements
        const links = document.querySelectorAll("a, button");
        links.forEach((link) => {
            link.addEventListener("mouseenter", handleHover);
            link.addEventListener("mouseleave", handleUnhover);
        });

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            links.forEach((link) => {
                link.removeEventListener("mouseenter", handleHover);
                link.removeEventListener("mouseleave", handleUnhover);
            });
        };
    }, []);

    return (
        <>
            <div
                ref={cursorRef}
                className="hidden md:block fixed top-0 left-0 w-2 h-2 bg-soft-sand rounded-full pointer-events-none z-[100] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
            />
            <div
                ref={followerRef}
                className="hidden md:block fixed top-0 left-0 w-8 h-8 border border-soft-sand rounded-full pointer-events-none z-[99] -translate-x-1/2 -translate-y-1/2 mix-blend-difference transition-colors duration-300"
            />
        </>
    );
}
