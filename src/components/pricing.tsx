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
        <section id="planes" className="py-24 px-6 bg-soft-sand text-charcoal-forest">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-7xl font-display mb-6">PACKEA TU ESCAPADA</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto font-body">
                        Elige tu nivel de inmersión. Desde lo básico hasta el lujo rústico.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`relative p-8 rounded-2xl border transition-all duration-300 hover:shadow-2xl ${plan.highlight
                                ? "bg-charcoal-forest text-soft-sand border-transparent scale-105 shadow-xl"
                                : "bg-white border-charcoal-forest/10 hover:border-signal-orange"
                                }`}
                        >
                            {plan.highlight && (
                                <div className="absolute top-0 right-0 bg-signal-orange text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg uppercase tracking-wider">
                                    Más Popular
                                </div>
                            )}
                            <h3 className="text-2xl font-display mb-2 uppercase">{plan.name}</h3>
                            <p className={`text-sm mb-6 ${plan.highlight ? "text-gray-400" : "text-gray-500"}`}>
                                {plan.description}
                            </p>
                            <div className="text-4xl font-bold mb-8 font-display">{plan.price}</div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-3 text-sm">
                                        <Check size={16} className={plan.highlight ? "text-signal-orange" : "text-earth-brown"} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-colors ${plan.highlight
                                ? "bg-signal-orange text-white hover:bg-white hover:text-charcoal-forest"
                                : "bg-charcoal-forest text-white hover:bg-signal-orange"
                                }`}>
                                Ver Detalles
                            </button>
                        </div>
                    ))}
                </div>

                <div className="mt-20">
                    <h3 className="text-3xl font-display text-center mb-10 text-charcoal-forest">ALQUILER DISPONIBLE PARA</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm font-body uppercase tracking-wider text-charcoal-forest/80">
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
                            <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-charcoal-forest/5 hover:border-signal-orange transition-colors">
                                <div className="w-2 h-2 bg-signal-orange rounded-full" />
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
