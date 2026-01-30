"use client"

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Typewriter = ({ words }: { words: string[] }) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [blink, setBlink] = useState(true);

    // Blinking cursor
    useEffect(() => {
        const timeout2 = setTimeout(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearTimeout(timeout2);
    }, [blink]);

    // Typing logic
    useEffect(() => {
        if (subIndex === words[index].length + 1 && !reverse) {
            const timeout = setTimeout(() => {
                setReverse(true);
            }, 1500); // Wait before deleting
            return () => clearTimeout(timeout);
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, reverse ? 75 : 150);

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, words]);

    return (
        <span className="text-openbi-green inline-block">
            {words[index].substring(0, subIndex)}
            <span className={`${blink ? "opacity-100" : "opacity-0"} ml-1`}>|</span>
        </span>
    );
};

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
                        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                            If Groceries just take <span className="text-openbi-green">10 mins</span> to deliver, <br className="hidden md:block" />
                            Why not <Typewriter words={["MIS reports?", "Cash Flow?", "GST Reconciliation?", "Vendor Payments?"]} />
                        </h1>
                        <p className="text-xl md:text-2xl leading-tight font-bold text-white/90 mb-4">
                            Automate Your Workflow. Scale Your Growth.
                        </p>
                        <p className="text-lg text-white/80 mb-2 max-w-xl font-semibold">
                            We build MIS and Automation systems that give you back 20 hours a week.
                        </p>
                        <p className="text-base text-white/70 mb-8 max-w-xl">
                            From dashboards that drive decisions to automation that eliminates manual work.
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
                                    Book Automation Preparation
                                </Link>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <Link
                                    href="/#resources"
                                    className="bg-white/10 text-white px-8 py-3 rounded font-semibold hover:bg-white/20 transition-all border border-white/20"
                                >
                                    View Sample Dashboard
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
