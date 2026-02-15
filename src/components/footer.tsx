"use client";

import { ArrowUp, MessageCircle, Instagram } from "lucide-react";
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
        <footer className="bg-charcoal-forest pb-10 px-6 relative border-t border-soft-sand/10 z-10 w-full overflow-hidden">
            <div className="max-w-7xl mx-auto pt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Contacto & Redes */}
                <div className="flex flex-col gap-8 text-center md:text-left">
                    <div>
                        <h2 className="text-soft-sand text-4xl md:text-5xl font-display mb-4">ALDEA LA ADELINA</h2>
                        <p className="text-soft-sand/60 max-w-md mx-auto md:mx-0 font-body leading-relaxed">
                            Un refugio natural donde la aventura y el descanso se encuentran.
                            Villa Mercedes, San Luis.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <a
                            href="https://wa.me/5492657716981"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-signal-orange text-white px-6 py-4 rounded-full flex items-center justify-center gap-3 font-bold uppercase tracking-widest hover:bg-white hover:text-charcoal-forest transition-all shadow-lg hover:shadow-signal-orange/20"
                        >
                            <MessageCircle size={20} />
                            WhatsApp
                        </a>

                        <a
                            href="https://www.instagram.com/aldea_laadelina/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-soft-sand/10 text-soft-sand px-6 py-4 rounded-full flex items-center justify-center gap-3 font-bold uppercase tracking-widest hover:bg-white hover:text-charcoal-forest transition-all border border-soft-sand/20"
                        >
                            <Instagram size={20} />
                            Instagram
                        </a>
                    </div>

                    <p className="text-soft-sand/30 text-xs mt-4">
                        © 2026 Aldea La Adelina. Todos los derechos reservados.
                    </p>
                </div>

                {/* Mapa */}
                <div className="w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-soft-sand/10 relative group">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d134029.552664799!2d-66.100776!3d-32.599715!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d491266c9e5e57%3A0xa7f8de36ab29fb32!2sALDEA%20LA%20ADELINA!5e1!3m2!1ses!2sus!4v1771116650554!5m2!1ses!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: "grayscale(100%) invert(90%)" }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="group-hover:filter-none transition-all duration-700"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 text-charcoal-forest text-xs font-bold px-3 py-1 rounded shadow pointer-events-none">
                        Villa Mercedes, San Luis
                    </div>
                </div>

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
