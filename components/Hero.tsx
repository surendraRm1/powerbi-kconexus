"use client"

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative hero-gradient overflow-hidden pt-32 pb-24 md:pt-40 md:pb-48 min-h-[700px] flex items-center">
            <div className="container-pad relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-lg md:text-xl font-medium text-openbi-green mb-4">
                            If Groceries just take 10 mins to deliver, Why not MIS reports?
                        </p>
                        <h1 className="text-4xl md:text-[56px] leading-[1.1] font-extrabold text-white mb-8">
                            Turn Data into Decisions.<br />
                            Turn Decisions into Growth.
                        </h1>
                        <p className="text-lg text-white/80 mb-8 max-w-xl">
                            Don’t just collect data—command it. KCONexus delivers cutting-edge analytics and expert
                            solutions designed to scale your business and sharpen your competitive edge.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <Link
                                    href="/contact"
                                    className="btn-green text-lg px-8 py-3"
                                >
                                    Get Started Today
                                </Link>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <Link
                                    href="/#solutions"
                                    className="bg-white/10 text-white px-8 py-3 rounded font-semibold hover:bg-white/20 transition-all border border-white/20"
                                >
                                    View Our Solutions
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden md:block"
                    >
                        <motion.div
                            animate={{
                                y: [0, -15, 0],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-white/10 group"
                        >
                            {/* VIDEO OPTION: Activated as per user request */}
                            <video
                                src="/assets/hero-video.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                poster="/assets/sample-finance.png"
                                className="w-full h-auto"
                            />

                            {/* <img 
                                src="/assets/hero-ai.png" 
                                alt="AI & Data Illustration" 
                                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                            /> */}

                            {/* Play Button Overlay (Purely visual placeholder) */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                                <div className="w-16 h-16 bg-openbi-green rounded-full flex items-center justify-center shadow-lg">
                                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                                </div>
                            </div>
                        </motion.div>
                        {/* Decorative elements */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-openbi-green/20 rounded-full blur-[80px]" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-navy-400/20 rounded-full blur-[80px]" />
                    </motion.div>
                </div>
            </div>

            {/* Background watermark or grid */}
            <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
                <div
                    className="w-full h-full bg-[url('/assets/dots-map.png')] bg-repeat bg-center mix-blend-overlay"
                />
            </div>

            {/* Curved Bottom Decoration */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]"
            >
                <svg className="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[100px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0 C300,120 900,120 1200,0 L1200,120 L0,120 Z" className="fill-white" />
                </svg>
            </motion.div>
        </section>
    );
}
