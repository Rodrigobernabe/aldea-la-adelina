"use client";

import { Check } from "lucide-react";

const plans = [
    {
        name: "Base Camp",
        description: "La opción ideal para conectar con la naturaleza sin complicaciones.",
        price: "Consultar",
        features: [
            "Tranquera cerrada",
            "Estadía por día por persona",
            "Acceso a todas las instalaciones",
            "Salidas y Trekking (sin guía)"
        ],
        highlight: false,
    },
    {
        name: "Campfire",
        description: "Disfruta de la experiencia completa con comidas incluidas.",
        price: "Consultar",
        features: [
            "Tranquera cerrada",
            "Estadía por día por persona",
            "Acceso a todas las instalaciones",
            "Servicio de comedor incluido",
            "Salidas y Trekking (sin guía)"
        ],
        highlight: true,
    },
    {
        name: "Full Wilderness",
        description: "Todo incluido: aventura, guía y recreación.",
        price: "Consultar",
        features: [
            "Tranquera cerrada",
            "Estadía por día por persona",
            "Acceso a todas las instalaciones",
            "Servicio de comedor incluido",
            "Salidas y Trekking",
            "Animación, conducción y recreación"
        ],
        highlight: false,
    },
];

export default function Pricing() {
    return (
        <section id="planes" className="py-24 px-6 bg-charcoal-forest text-soft-sand border-t border-soft-sand/10">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-7xl font-display mb-6">PACKEA TU ESCAPADA</h2>
                    <p className="text-soft-sand/60 max-w-2xl mx-auto font-body">
                        Elige tu nivel de inmersión. Desde lo básico hasta el lujo rústico.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`relative p-8 rounded-2xl border transition-all duration-300 hover:shadow-2xl ${plan.highlight
                                ? "bg-signal-orange text-white border-transparent scale-105 shadow-xl"
                                : "bg-white/5 border-soft-sand/10 hover:border-signal-orange/50 text-soft-sand"
                                }`}
                        >
                            {plan.highlight && (
                                <div className="absolute top-0 right-0 bg-white text-signal-orange text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg uppercase tracking-wider">
                                    Más Popular
                                </div>
                            )}
                            <h3 className="text-2xl font-display mb-2 uppercase">{plan.name}</h3>
                            <p className={`text-sm mb-6 ${plan.highlight ? "text-white/80" : "text-soft-sand/60"}`}>
                                {plan.description}
                            </p>
                            <div className="text-4xl font-bold mb-8 font-display">{plan.price}</div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-3 text-sm">
                                        <Check size={16} className={plan.highlight ? "text-white" : "text-signal-orange"} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-colors ${plan.highlight
                                ? "bg-white text-signal-orange hover:bg-charcoal-forest hover:text-white"
                                : "bg-signal-orange text-white hover:bg-white hover:text-charcoal-forest"
                                }`}>
                                Ver Detalles
                            </button>
                        </div>
                    ))}
                </div>

                <div className="mt-20">
                    <h3 className="text-3xl font-display text-center mb-10 text-soft-sand">ALQUILER DISPONIBLE PARA</h3>
                    <div className="flex flex-wrap justify-center gap-6 text-sm font-body uppercase tracking-wider text-soft-sand/80">
                        {[
                            "Personas individuales",
                            "Grupos deportivos",
                            "Grupos Scouts",
                            "Grupos escolares",
                            "Grupos empresariales",
                            "Actividades recreativas y formativas",
                            "Alquiler del Camp Hall",
                            "Celebraciones privadas",
                            "Bautismos | Comunión",
                            "Confirmación | Casamientos",
                            "Trekking y salidas ambulantes"
                        ].map((item, index) => (
                            <div key={index} className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-soft-sand/10 hover:border-signal-orange/50 transition-colors w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
                                <div className="w-2 h-2 bg-signal-orange rounded-full shrink-0" />
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
