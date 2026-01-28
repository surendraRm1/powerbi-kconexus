"use client"

import { LucideSearch, LucideCode2, LucideRotateCcw } from "lucide-react";
import Section from "./Section";

export default function ProcessSection() {
    return (
        <Section
            title="Our Process: How We Work"
            subtitle="A streamlined methodology that ensures project success and measurable impact."
            className="bg-surface-50"
            center
        >
            <div className="grid md:grid-cols-3 gap-12 relative">
                {/* Connection Line */}
                <div className="absolute top-1/4 left-0 w-full h-1 bg-navy-50 hidden md:block" />

                {[
                    { step: "01", title: "Scoping", desc: "We deep-dive into your requirements, identify data sources, and define clear success metrics.", icon: <LucideSearch size={32} /> },
                    { step: "02", title: "Development", desc: "Our engineers build robust ETL pipelines and intuitive dashboards with rigorous testing.", icon: <LucideCode2 size={32} /> },
                    { step: "03", title: "Maintain", desc: "We provide ongoing support, data refreshes, and continuous improvement cycles.", icon: <LucideRotateCcw size={32} /> },
                ].map((s, idx) => (
                    <div key={s.title} className="relative z-10 flex flex-col items-center">
                        <div className="w-16 h-16 bg-navy-900 text-white rounded-full flex items-center justify-center font-black text-xl mb-6 shadow-xl border-4 border-white">
                            {s.step}
                        </div>
                        <div className="text-center p-6 card-openbi w-full">
                            <div className="text-openbi-green mb-4 flex justify-center">{s.icon}</div>
                            <h4 className="text-xl font-bold mb-2">{s.title}</h4>
                            <p className="text-sm text-ink-500 leading-relaxed">{s.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
