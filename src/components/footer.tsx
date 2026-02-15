"use client";

import { ArrowUp, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function Footer() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-charcoal-forest pb-10 px-6 relative">
            <div className="max-w-7xl mx-auto border-t border-soft-sand/10 pt-20 flex flex-col md:flex-row justify-between items-center gap-10">

                <div className="text-center md:text-left">
                    <h2 className="text-soft-sand text-3xl font-display mb-2">ALDEA LA ADELINA</h2>
                    <p className="text-soft-sand/50 text-sm">© 2026 Todos los derechos reservados.</p>
                </div>

                <button
                    className="bg-signal-orange text-white px-8 py-3 rounded-full flex items-center gap-2 font-bold uppercase hover:bg-white hover:text-charcoal-forest transition-all"
                    onClick={() => window.open("https://wa.me/1234567890", "_blank")}
                >
                    <MessageCircle size={20} />
                    <span>Contáctanos por WhatsApp</span>
                </button>
            </div>

            {showButton && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-10 right-10 bg-soft-sand text-charcoal-forest p-4 rounded-full shadow-xl hover:bg-signal-orange hover:text-white transition-all duration-300 z-50 animate-bounce"
                    aria-label="Volver arriba"
                >
                    <ArrowUp size={24} />
                </button>
            )}
        </footer>
    );
}
