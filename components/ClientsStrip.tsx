"use client"

import { motion } from "framer-motion";

export default function ClientsStrip() {
    const clients = [
        "Fresh Basket",
        "DECIEM",
        "UKB",
        "TEXEL AIR",
        "MMR Consulting",
        "BeiGene",
        "Cornerstone",
        "Texel",
        "MMR"
    ];

    return (
        <div className="bg-white border-b border-gray-100 overflow-hidden relative z-20">
            <div className="container-pad py-12">
                <p className="text-center text-[10px] font-black text-navy-900/30 uppercase tracking-[0.3em] mb-10">
                    Trusted by Global Industry Leaders
                </p>

                <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10 opacity-40 grayscale hover:opacity-100 transition-all duration-700">
                    {clients.map((client) => (
                        <div
                            key={client}
                            className="text-xl md:text-2xl font-black text-navy-900 tracking-tighter italic border-b-2 border-transparent hover:border-openbi-green transition-all cursor-default"
                        >
                            {client.toUpperCase()}
                        </div>
                    ))}
                </div>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        </div>
    );
}
