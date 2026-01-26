"use client"

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SampleRequestModal from "./SampleRequestModal";

export default function ResourcesTabs() {
    const tabs = ["All", "Power BI Samples", "Case Studies", "Whitepapers"];
    const [activeTab, setActiveTab] = useState("All");
    const [selectedSample, setSelectedSample] = useState<string | null>(null);

    const samples = [
        {
            title: "Financial Performance Dashboard",
            type: "Power BI Samples",
            img: "/assets/sample-finance.png"
        },
        {
            title: "Human Resources Analytics",
            type: "Power BI Samples",
            img: "/assets/sample-hr.png"
        },
        {
            title: "Supply Chain Optimization",
            type: "Case Studies",
            img: "/assets/sample-supply.png"
        },
        {
            title: "Azure Fabric Migration Guide",
            type: "Whitepapers",
            img: "/assets/sample-fabric.png"
        },
    ];

    const filtered = activeTab === "All" ? samples : samples.filter(s => s.type === activeTab);

    return (
        <div className="space-y-12">
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`text-sm font-black transition-all px-6 py-2.5 rounded-full border-2 ${activeTab === tab
                            ? "bg-navy-900 text-white border-navy-900 shadow-xl"
                            : "text-gray-400 border-gray-100 hover:border-gray-200 hover:text-navy-900"
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                <AnimatePresence mode="popLayout">
                    {filtered.map((s, i) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4 }}
                            key={s.title}
                            className="group"
                        >
                            <div className="aspect-[4/5] rounded-3xl mb-6 overflow-hidden relative border border-gray-100 shadow-sm group-hover:shadow-2xl transition-all duration-500">
                                <img
                                    src={s.img}
                                    alt={s.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-x-0 bottom-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-navy-900/90 to-transparent flex flex-col items-center">
                                    <button
                                        onClick={() => setSelectedSample(s.title)}
                                        className="bg-openbi-green text-white px-8 py-3 rounded-xl font-black text-sm uppercase tracking-widest shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500"
                                    >
                                        Access Now
                                    </button>
                                </div>
                            </div>
                            <span className="text-[10px] font-black text-openbi-green uppercase tracking-[0.2em] block mb-3">{s.type}</span>
                            <h3 className="text-lg font-black text-navy-900 leading-tight">
                                {s.title}
                            </h3>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            <div className="flex justify-center gap-3 mt-16">
                {[1, 2, 3].map(p => (
                    <button key={p} className={`w-12 h-12 rounded-2xl border-2 flex items-center justify-center font-black text-sm transition-all ${p === 1 ? "bg-navy-900 text-white border-navy-900 shadow-lg" : "text-gray-400 border-gray-100 hover:border-gray-300 hover:text-navy-900"}`}>
                        {p}
                    </button>
                ))}
            </div>

            <SampleRequestModal
                isOpen={!!selectedSample}
                onClose={() => setSelectedSample(null)}
                sampleTitle={selectedSample || ""}
            />
        </div>
    );
}
