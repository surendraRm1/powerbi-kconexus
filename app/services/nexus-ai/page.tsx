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

export default function NexusAIPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative hero-gradient overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
                <div className="container-pad relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 bg-openbi-green/10 border border-openbi-green/20 rounded-full px-6 py-2 mb-8">
                                <LucideBot className="text-openbi-green" size={20} />
                                <span className="text-sm font-bold text-openbi-green uppercase tracking-wider">
                                    Next-Gen AI Accounting
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                                Meet <span className="text-openbi-green">Nexus AI:</span><br />
                                Your 24/7 AI Accountant.
                            </h1>

                            <p className="text-xl text-white/80 mb-6 leading-relaxed">
                                From a pile of documents to sync-ready books in minutes. No manual data entry, no human bottleneck.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link href="/contact" className="btn-green text-lg px-8 py-3">
                                    Schedule a Demo
                                </Link>
                                <Link href="#features" className="bg-white/10 text-white px-8 py-3 rounded font-semibold hover:bg-white/20 transition-all border border-white/20">
                                    Explore Features
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                                <img
                                    src="/assets/nexus-hero.png"
                                    alt="Nexus AI Hero"
                                    className="w-full h-auto"
                                />
                            </div>
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-openbi-green/20 rounded-full blur-[80px]" />
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-navy-400/20 rounded-full blur-[80px]" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Features */}
            <Section
                id="features"
                eyebrow="Capabilities"
                title="Accounting Reinvented"
                subtitle="Nexus AI handles the heavy lifting of bookkeeping so you can focus on strategic growth."
                center
            >
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            title: "Bookkeeping Automation",
                            desc: "AI reads every line, categorizes transactions, and maps them to your chart of accounts.",
                            icon: <LucideDatabase className="text-white" size={28} />,
                            color: "from-blue-500 to-blue-600"
                        },
                        {
                            title: "Intelligent OCR",
                            desc: "Understands handwritten bills and complex document layouts with over 99% accuracy.",
                            icon: <LucideScanLine className="text-white" size={28} />,
                            color: "from-openbi-green to-green-600"
                        },
                        {
                            title: "GST Reconciliation",
                            desc: "Auto-match purchase registers with GSTR-2B to maximize your Input Tax Credit.",
                            icon: <LucideShieldCheck className="text-white" size={28} />,
                            color: "from-purple-500 to-purple-600"
                        },
                        {
                            title: "Live Reporting",
                            desc: "Real-time financial dashboards built directly from your Tally or Zoho data.",
                            icon: <LucideLayoutDashboard className="text-white" size={28} />,
                            color: "from-orange-500 to-orange-600"
                        }
                    ].map((feature, idx) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="card-openbi group hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-sm text-ink-500 leading-relaxed">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Smart OCR Section */}
            <Section className="bg-surface-50">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1">
                        <div className="rounded-3xl border border-gray-100 overflow-hidden shadow-2xl relative bg-white">
                            <img
                                src="/assets/ocr-demo.png"
                                alt="Intelligent OCR Demo"
                                className="w-full h-auto"
                            />
                            <div className="absolute top-4 right-4 bg-openbi-green text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                live scan
                            </div>
                        </div>
                    </div>
                    <div className="order-1 md:order-2 space-y-6">
                        <span className="text-openbi-green font-bold text-sm uppercase tracking-wider">OCR Excellence</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-navy-900 leading-tight">
                            Every Bill, Matched and Mapped Automatically.
                        </h2>
                        <p className="text-lg text-ink-500">
                            Say goodbye to manual data entry. Upload hundreds of statements and bills in one go. Our AI reads the details, categorizes vendors, and syncs them to your accounting tool.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Processes handwritten and scanned bills",
                                "99%+ data extraction accuracy",
                                "Automatic vendor & GL mapping",
                                "Instant duplicate detection"
                            ].map((item) => (
                                <li key={item} className="flex items-center gap-3 text-navy-900 font-semibold">
                                    <LucideCheckCircle2 className="text-openbi-green" size={20} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Section>

            {/* How it Works */}
            <Section
                eyebrow="The Workflow"
                title="How Nexus AI Works"
                subtitle="Four simple steps to transform your accounting process."
                center
            >
                <div className="grid md:grid-cols-4 gap-8 relative">
                    {/* Connection Line */}
                    <div className="absolute top-1/4 left-0 w-full h-0.5 bg-navy-50 hidden md:block z-0" />

                    {[
                        { step: "01", title: "Connect", desc: "Link Nexus AI to your Tally, Zoho, or ERP systems in minutes.", icon: <LucideRefreshCw /> },
                        { step: "02", title: "Upload", desc: "Drop your invoices, bank statements, or receipts into the platform.", icon: <LucideZap /> },
                        { step: "03", title: "AI Process", desc: "AI extracts data, maps ledgers, and identifies discrepancies.", icon: <LucideBot /> },
                        { step: "04", title: "One-Click Sync", desc: "Verified data is synced back to your core accounting software.", icon: <LucideCheckCircle2 /> }
                    ].map((s, idx) => (
                        <div key={s.title} className="relative z-10 flex flex-col items-center">
                            <div className="w-12 h-12 bg-navy-900 text-white rounded-full flex items-center justify-center font-black text-lg mb-6 shadow-lg border-4 border-white">
                                {s.step}
                            </div>
                            <div className="text-center p-6 card-openbi w-full bg-white">
                                <div className="text-openbi-green mb-4 flex justify-center">{s.icon}</div>
                                <h4 className="text-lg font-bold mb-2">{s.title}</h4>
                                <p className="text-xs text-ink-500 leading-relaxed">{s.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Comparison Table */}
            <Section className="bg-navy-900 text-white py-24">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Nexus AI vs. Traditional Accounting</h2>
                        <p className="text-white/70 text-lg text-ink-500">Experience the 10x improvement in efficiency.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white/5 rounded-3xl p-8 border border-white/10">
                            <h3 className="text-xl font-bold text-red-400 mb-8 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-red-400/20 flex items-center justify-center">✕</span>
                                Traditional Manual Process
                            </h3>
                            <ul className="space-y-6">
                                {[
                                    "Manual entry of physical bills (Hours of work)",
                                    "Periodic, delayed financial reports",
                                    "Prone to human error and duplicates",
                                    "Manual GST matching & reconciliation",
                                    "High operational cost per transaction"
                                ].map((item) => (
                                    <li key={item} className="flex gap-4 text-white/70 text-sm">
                                        <div className="shrink-0 w-1.5 h-1.5 rounded-full bg-red-400 mt-2" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-openbi-green/10 rounded-3xl p-8 border border-openbi-green/30 relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-openbi-green text-navy-900 font-black px-6 py-2 rounded-bl-2xl text-xs uppercase tracking-tighter">
                                Recommended
                            </div>
                            <h3 className="text-xl font-bold text-openbi-green mb-8 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-openbi-green/20 flex items-center justify-center">✓</span>
                                Powered by Nexus AI
                            </h3>
                            <ul className="space-y-6">
                                {[
                                    "Instant OCR data extraction (Seconds)",
                                    "Real-time live financial dashboards",
                                    "AI-powered error & anomaly detection",
                                    "Automated 2A/2B matching & filings",
                                    "90% reduction in processing costs"
                                ].map((item) => (
                                    <li key={item} className="flex gap-4 text-white font-semibold text-sm">
                                        <LucideCheckCircle2 className="text-openbi-green shrink-0" size={18} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Dashboard Visualization */}
            <Section center>
                <div className="max-w-5xl mx-auto">
                    <span className="text-openbi-green font-bold text-sm uppercase tracking-wider mb-4 block">Total Visibility</span>
                    <h2 className="section-title mb-8">Data-Driven Decisions, In Real-Time.</h2>
                    <div className="rounded-3xl border border-gray-100 overflow-hidden shadow-2xl group relative bg-white">
                        <img
                            src="/assets/live-sync.png"
                            alt="Nexus AI Dashboard"
                            className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-navy-900/5 group-hover:opacity-0 transition-opacity" />
                    </div>
                    <div className="mt-12 grid md:grid-cols-3 gap-8">
                        <div className="p-6">
                            <div className="text-3xl font-bold text-navy-900 mb-2">10 mins</div>
                            <p className="text-sm text-ink-500">Average time to process 100+ invoices</p>
                        </div>
                        <div className="p-6">
                            <div className="text-3xl font-bold text-navy-900 mb-2">0 Manual Job</div>
                            <p className="text-sm text-ink-500">From document to sync-ready record</p>
                        </div>
                        <div className="p-6">
                            <div className="text-3xl font-bold text-navy-900 mb-2">100% Secure</div>
                            <p className="text-sm text-ink-500">SOC 2 compliant & bank-grade encryption</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Final CTA */}
            <Section className="bg-surface-50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">
                        Ready to meet your new AI Accountant?
                    </h2>
                    <p className="text-xl text-ink-500 mb-12 max-w-2xl mx-auto">
                        Stop doing "Robot Work" and start making strategic decisions. Join the future of autonomous accounting with KCONexus.
                    </p>
                    <div className="flex flex-wrap gap-6 justify-center">
                        <Link href="/contact" className="btn-green text-lg px-10 py-4 inline-flex items-center gap-2">
                            Book a Free Demo
                            <LucideArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </Section>
        </>
    );
}
