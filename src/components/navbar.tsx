"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center mix-blend-difference text-soft-sand">
            <div className="text-xl font-display tracking-wider uppercase">
                Aldea La Adelina
            </div>

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

            <button className="md:hidden">
                <Menu />
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
    );
}
