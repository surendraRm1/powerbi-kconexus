"use client"

import { useState } from "react";
import { LucidePlay, LucideX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function DemoVideo() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <div className="max-w-5xl mx-auto">
                <div
                    className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 aspect-video group cursor-pointer"
                    onClick={() => setIsOpen(true)}
                >
                    {/* Placeholder Thumbnail UI */}
                    <div className="absolute inset-0 bg-navy-900 flex items-center justify-center">
                        <img
                            src="/assets/test-image.png"
                            alt="Demo Thumbnail"
                            className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent" />

                        {/* Play Button */}
                        <div className="relative z-10 w-20 h-20 bg-openbi-green rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                            <LucidePlay className="text-navy-900 ml-1" fill="currentColor" size={32} />
                        </div>

                        {/* Text Overlay */}
                        <div className="absolute bottom-10 left-10 right-10 z-10">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                Watch: 20 Hours Recovered in 45 Seconds
                            </h3>
                            <p className="text-white/70">
                                A quick walkthrough of our Power BI Dashboards & Automation Workflows
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Video Modal Placeholder */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-navy-900/95 flex items-center justify-center p-4 md:p-10"
                        onClick={() => setIsOpen(false)}
                    >
                        <button
                            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            <LucideX size={40} />
                        </button>

                        <div className="w-full max-w-6xl aspect-video bg-black rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden border border-white/10">
                            {/* In a real scenario, this would be an iframe or video tag */}
                            <div className="text-center p-12">
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-openbi-green/10 rounded-full mb-6">
                                    <LucidePlay className="text-openbi-green" size={32} />
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-4">Demo Walkthrough</h3>
                                <p className="text-white/60 max-w-md mx-auto mb-8">
                                    In a live production environment, this would play a 45-second high-impact demo of your dashboard or automation process.
                                </p>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="btn-green px-8 py-3"
                                >
                                    Close Video
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
