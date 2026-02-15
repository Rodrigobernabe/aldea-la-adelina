"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center mix-blend-difference text-soft-sand">
                <div className="text-xl font-display tracking-wider uppercase relative z-50">
                    Aldea La Adelina
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 font-body text-sm uppercase tracking-widest opacity-80">
                    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-signal-orange transition-colors">
                        Inicio
                    </button>
                    <Link href="#instalaciones" className="hover:text-signal-orange transition-colors">
                        Instalaciones
                    </Link>
                    <Link href="#planes" className="hover:text-signal-orange transition-colors">
                        Packs
                    </Link>
                    <Link href="#galeria" className="hover:text-signal-orange transition-colors">
                        Galería
                    </Link>
                    <Link href="#contacto" className="hover:text-signal-orange transition-colors">
                        Contacto
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden relative z-50" onClick={toggleMenu}>
                    {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
                </button>

                <a
                    href="https://wa.me/5492657716981"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:block border border-soft-sand/30 rounded-full px-5 py-2 text-xs uppercase tracking-widest hover:bg-signal-orange hover:border-signal-orange transition-all duration-300"
                >
                    Reservar
                </a>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-charcoal-forest z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <button onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); handleLinkClick(); }} className="text-2xl font-display text-soft-sand hover:text-signal-orange tracking-widest uppercase">
                    Inicio
                </button>
                <Link href="#instalaciones" onClick={handleLinkClick} className="text-2xl font-display text-soft-sand hover:text-signal-orange tracking-widest uppercase">
                    Instalaciones
                </Link>
                <Link href="#planes" onClick={handleLinkClick} className="text-2xl font-display text-soft-sand hover:text-signal-orange tracking-widest uppercase">
                    Packs
                </Link>
                <Link href="#galeria" onClick={handleLinkClick} className="text-2xl font-display text-soft-sand hover:text-signal-orange tracking-widest uppercase">
                    Galería
                </Link>
                <Link href="#contacto" onClick={handleLinkClick} className="text-2xl font-display text-soft-sand hover:text-signal-orange tracking-widest uppercase">
                    Contacto
                </Link>

                <a
                    href="https://wa.me/5492657716981"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleLinkClick}
                    className="mt-8 border border-soft-sand rounded-full px-8 py-3 text-sm uppercase tracking-widest text-soft-sand hover:bg-signal-orange hover:border-signal-orange hover:text-white transition-all duration-300"
                >
                    Reservar
                </a>
            </div>
        </>
    );
}
