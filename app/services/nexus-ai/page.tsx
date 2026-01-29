"use client"

import Section from "@/components/Section";
import Link from "next/link";
import {
    LucideZap,
    LucideBot,
    LucideScanLine,
    LucideDatabase,
    LucideLayoutDashboard,
    LucideCheckCircle2,
    LucideArrowRight,
    LucideRefreshCw,
    LucideShieldCheck
} from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function NexusAIPage() {
    return (
        <div className="overflow-x-hidden">
            {/* Hero Section - Multi-layered Parallax */}
            <section className="relative hero-gradient overflow-hidden pt-32 pb-24 md:pt-40 md:pb-48">
                {/* Background Glows */}
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-openbi-green/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-navy-400/10 rounded-full blur-[120px] pointer-events-none" />

                <div className="container-pad relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="inline-flex items-center gap-2 bg-openbi-green/10 border border-openbi-green/20 rounded-full px-6 py-2 mb-8">
                            <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 4 }}
                            >
                                <LucideBot className="text-openbi-green" size={20} />
                            </motion.div>
                            <span className="text-sm font-bold text-openbi-green uppercase tracking-widest">
                                The Future of Autonomous Accounting
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tight">
                            Meet your new <br />
                            <span className="text-openbi-green">AI Accountant</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
                            The AI co-worker every Indian CA trusts to take care of 75% of their accounting tasks.
                            From documents to sync-ready books in minutes.
                        </p>

                        <div className="flex flex-wrap gap-6 justify-center mb-12">
                            <Link href="#how-it-works" className="bg-white/5 text-white px-10 py-5 rounded font-bold hover:bg-white/10 transition-all border border-white/10 backdrop-blur-md">
                                How it Works
                            </Link>
                        </div>
                    </motion.div>

                    {/* High-Fidelity Hero Asset */}
                    <div className="relative mt-12 max-w-5xl mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="relative z-10 w-full overflow-hidden rounded-2xl shadow-[0_0_50px_rgba(56,189,248,0.15)] border border-white/10"
                        >
                            <img
                                src="/assets/nexus-ai-phone.jpg"
                                alt="Nexus AI Mobile Interface"
                                className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
                            />
                            {/* Overlay Gradient for depth */}
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent pointer-events-none" />
                        </motion.div>

                        {/* Abstract Glow Background */}
                        <div className="absolute -inset-4 bg-openbi-green/5 blur-3xl -z-10 rounded-full" />
                    </div>
                </div>
            </section>

            {/* Value Props Section */}
            <Section className="bg-white py-32" id="solutions">
                <div className="grid md:grid-cols-3 gap-12">
                    {[
                        {
                            title: "Human-Speed Accuracy",
                            desc: "Upload any bank or card statement. AI reads every transaction and maps them to the right ledgers automatically.",
                            icon: <LucideZap className="text-openbi-green" size={32} />,
                            img: "/assets/nexus-connect-demo.avif"
                        },
                        {
                            title: "Smart Document Matching",
                            desc: "AI pulls your bills directly, reads the details, and matches each bill to the right transaction. No digging, no errors.",
                            icon: <LucideScanLine className="text-openbi-green" size={32} />,
                            img: "/assets/nexus-ocr-demo.avif"
                        },
                        {
                            title: "Works with Your Tools",
                            desc: "Keep using Tally, Zoho, or SAP. Nexus AI works on your specific accounting setup, just like an in-house expert.",
                            icon: <LucideRefreshCw className="text-openbi-green" size={32} />,
                            img: "/assets/nexus-sync-demo.avif"
                        }
                    ].map((item, idx) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="flex flex-col h-full group"
                        >
                            <div className="aspect-[4/3] rounded-3xl overflow-hidden mb-8 shadow-xl border border-gray-100 bg-gray-50">
                                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            </div>
                            <div className="px-2">
                                <div className="mb-4">{item.icon}</div>
                                <h3 className="text-2xl font-bold text-navy-900 mb-4">{item.title}</h3>
                                <p className="text-ink-500 leading-relaxed">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* How it Works Section */}
            <Section id="how-it-works" title="How Nexus AI Works" eyebrow="The Process" center className="bg-white">
                <div className="relative grid md:grid-cols-5 gap-4">
                    {[
                        { step: "01", title: "Connect", icon: <LucideRefreshCw /> },
                        { step: "02", title: "Upload", icon: <LucideZap /> },
                        { step: "03", title: "Analyze", icon: <LucideScanLine /> },
                        { step: "04", title: "Auto-Map", icon: <LucideBot /> },
                        { step: "05", title: "Sync", icon: <LucideCheckCircle2 /> }
                    ].map((s, idx) => (
                        <motion.div
                            key={s.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15 }}
                            className="relative flex flex-col items-center p-8 bg-surface-50 rounded-3xl"
                        >
                            <span className="absolute top-4 left-6 text-3xl font-black text-navy-900/5">{s.step}</span>
                            <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center text-openbi-green mb-6">
                                {s.icon}
                            </div>
                            <h4 className="font-bold text-navy-900">{s.title}</h4>
                            {idx < 4 && (
                                <div className="hidden md:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 text-gray-200">
                                    <LucideArrowRight size={24} />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Core Capabilities - Staggered Grid */}
            <section className="bg-surface-50 py-32">
                <div className="container-pad">
                    <div className="text-center mb-20 max-w-3xl mx-auto">
                        <span className="text-openbi-green font-black uppercase tracking-[0.2em] text-xs mb-4 block">Product Suite</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">Accounting Done for You in Minutes</h2>
                        <p className="text-lg text-ink-500">Simplify accounting, amplify growth with our intelligent automation engine.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                title: "Bookkeeping Automation",
                                desc: "AI reads every line, categorizes transactions, and syncs them to Tally, Zoho, or SAP instantly.",
                                icon: <LucideDatabase size={24} />,
                                color: "bg-blue-600"
                            },
                            {
                                title: "Vendor Bill Matching",
                                desc: "From a pile of documents to verified, sync-ready bills without any manual data entry.",
                                icon: <LucideScanLine size={24} />,
                                color: "bg-openbi-green"
                            },
                            {
                                title: "GST Reconciliation",
                                desc: "Match your Purchase Register with GSTR-2B automatically and claim the right ITC every month.",
                                icon: <LucideShieldCheck size={24} />,
                                color: "bg-purple-600"
                            },
                            {
                                title: "MIS Reporting",
                                desc: "Real-time financial dashboards built from your accounting data with zero manual prep.",
                                icon: <LucideLayoutDashboard size={24} />,
                                color: "bg-orange-600"
                            }
                        ].map((cap, i) => (
                            <motion.div
                                key={cap.title}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group p-8 bg-white rounded-[2rem] border border-gray-100 hover:border-openbi-green/30 transition-all duration-300 shadow-sm hover:shadow-xl flex items-start gap-8"
                            >
                                <div className={`shrink-0 w-16 h-16 ${cap.color} text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform`}>
                                    {cap.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-3 text-navy-900">{cap.title}</h3>
                                    <p className="text-ink-500 text-sm leading-relaxed">{cap.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Section - High Impact */}
            <section className="bg-navy-900 py-32 rounded-[4rem] mx-4 my-8 overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('/assets/dots-map.png')] opacity-10 bg-center bg-cover pointer-events-none" />
                <div className="container-pad relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Manual vs. <span className="text-openbi-green">Nexus AI</span></h2>
                        <p className="text-white/60 text-lg max-w-2xl mx-auto">Experience a 10x shift in your accounting efficiency.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/5 border border-white/10 p-10 rounded-[3rem] backdrop-blur-sm"
                        >
                            <h3 className="text-2xl font-bold text-red-400 mb-8 flex items-center gap-4">
                                <span className="w-10 h-10 rounded-full bg-red-400/20 flex items-center justify-center">✕</span>
                                Traditional Manual Process
                            </h3>
                            <ul className="space-y-6">
                                {[
                                    "Manual entry of physical bills (Hours of work)",
                                    "Delayed financial visibility",
                                    "Prone to human error and duplicates",
                                    "Manual GST matching & reconciliation"
                                ].map((item) => (
                                    <li key={item} className="flex gap-4 text-white/50 text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-openbi-green/10 border border-openbi-green/30 p-10 rounded-[3rem] shadow-[0_0_50px_rgba(34,197,94,0.1)]"
                        >
                            <h3 className="text-2xl font-bold text-openbi-green mb-8 flex items-center gap-4">
                                <span className="w-10 h-10 rounded-full bg-openbi-green/20 flex items-center justify-center">✓</span>
                                Powered by Nexus AI
                            </h3>
                            <ul className="space-y-6">
                                {[
                                    "Instant OCR data extraction (Seconds)",
                                    "Real-time live financial dashboards",
                                    "AI-powered error & anomaly detection",
                                    "Automated 2A/2B matching & filings"
                                ].map((item) => (
                                    <li key={item} className="flex gap-4 text-white font-semibold">
                                        <LucideCheckCircle2 className="text-openbi-green shrink-0" size={20} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Live Dashboard Section with CSS Scan effect */}
            <Section center className="py-40">
                <div className="max-w-5xl mx-auto relative group">
                    <span className="text-openbi-green font-black uppercase tracking-[0.3em] text-xs mb-4 block">Real-time Visualization</span>
                    <h2 className="text-4xl md:text-6xl font-black text-navy-900 mb-12">One Dashboard to Rule Them All</h2>

                    <div className="relative rounded-[3rem] overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.15)] border border-gray-100">
                        <img src="/assets/live-sync.png" alt="AIA Dashboard" className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-1000" />

                        {/* Animated Scan Line */}
                        <motion.div
                            className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-openbi-green to-transparent z-20 shadow-[0_0_15px_rgba(34,197,94,0.8)]"
                            animate={{ top: ["0%", "100%", "0%"] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                        />

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/20 to-transparent pointer-events-none" />
                    </div>

                    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: "Sync Speed", val: "100ms" },
                            { label: "Accuracy", val: "99.9%" },
                            { label: "Efficiency", val: "10x" },
                            { label: "Security", val: "Bank-Grade" }
                        ].map(stat => (
                            <div key={stat.label} className="text-center">
                                <div className="text-3xl font-black text-navy-900 mb-2">{stat.val}</div>
                                <div className="text-xs uppercase font-bold text-ink-400 tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Final CTA */}
            <section className="bg-openbi-green py-32">
                <div className="container-pad text-center">
                    <h2 className="text-4xl md:text-6xl font-black text-navy-900 mb-8 max-w-4xl mx-auto">
                        Ready to let AI handle your accounting?
                    </h2>
                    <p className="text-xl text-navy-900/70 mb-12 max-w-2xl mx-auto font-medium">
                        Join 500+ businesses automating their financial workflows.
                        Start your journey to zero-lag intelligence today.
                    </p>
                    <Link href="/contact" className="bg-navy-900 text-white text-xl font-bold px-12 py-6 rounded-2xl hover:bg-navy-800 transition-all shadow-2xl inline-flex items-center gap-3">
                        Book a Free Demo <LucideArrowRight />
                    </Link>
                </div>
            </section>
        </div>
    );
}
