"use client"

import { motion } from "framer-motion";
import { LucideShield, LucideAward, LucideZap } from "lucide-react";

export default function KumbhatCredibility() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 rounded-3xl p-12 md:p-16 overflow-hidden shadow-2xl"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[url('/assets/dots-map.png')] bg-repeat bg-center" />
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-openbi-green/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px]" />

            <div className="relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-openbi-green/10 border border-openbi-green/20 rounded-full px-6 py-2 mb-8">
                        <LucideShield className="text-openbi-green" size={20} />
                        <span className="text-sm font-bold text-openbi-green uppercase tracking-wider">
                            50 Years of Excellence
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        Built on 50 years of financial excellence.
                    </h2>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10">
                        KCONexus combines the audit rigor of <span className="text-openbi-green font-semibold">Kumbhat & Co LLP</span> with cutting-edge automation technology to deliver compliant, high-speed business solutions.
                    </p>

                    {/* Three Key Points */}
                    <div className="grid md:grid-cols-3 gap-8 mt-12">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-4">
                                <LucideShield className="text-openbi-green" size={28} />
                            </div>
                            <h4 className="text-white font-bold mb-2">Audit Rigor</h4>
                            <p className="text-white/60 text-sm">
                                Compliance-first approach backed by decades of financial expertise
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-4">
                                <LucideZap className="text-openbi-green" size={28} />
                            </div>
                            <h4 className="text-white font-bold mb-2">Cutting-Edge Tech</h4>
                            <p className="text-white/60 text-sm">
                                Modern automation and analytics powered by latest technologies
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-4">
                                <LucideAward className="text-openbi-green" size={28} />
                            </div>
                            <h4 className="text-white font-bold mb-2">Trusted Legacy</h4>
                            <p className="text-white/60 text-sm">
                                50+ years of building trust with businesses across industries
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
