"use client"

import Link from "next/link";
import { site } from "@/lib/site";
import { LucideLinkedin, LucideTwitter, LucideFacebook, LucideMail, LucideMapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
    const solutions = [
        { label: "Asset Management", href: "/#solutions" },
        { label: "Construction Cost Database", href: "/#solutions" },
        { label: "Finance Analytics", href: "/#solutions" },
        { label: "HR Analytics", href: "/#solutions" },
        { label: "KPI Analytics", href: "/#solutions" },
        { label: "Portfolio Management", href: "/#solutions" },
        { label: "Raw Material Management", href: "/#solutions" },
        { label: "Resource Management", href: "/#solutions" },
        { label: "Sales & Marketing Analytics", href: "/#solutions" },
        { label: "Spend Analytics", href: "/#solutions" },
        { label: "Supplier Performance", href: "/#solutions" },
        { label: "Sustainability Reporting", href: "/#solutions" },
    ];

    return (
        <footer className="bg-navy-900 text-white pb-10 relative overflow-hidden">
            {/* Curved Top Decoration - Concave arch like openbi.ai */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] h-[60px] md:h-[100px] z-20">
                <svg className="relative block w-[calc(100%+1.3px)] h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0 C300,120 900,120 1200,0 L1200,120 L0,120 Z" className="fill-white" />
                </svg>
            </div>

            {/* World Map Watermark - Dots Map */}
            <div className="absolute inset-0 opacity-[0.1] pointer-events-none flex items-center justify-center pt-24">
                <div className="w-full h-full bg-[url('/assets/dots-map.png')] bg-no-repeat bg-center bg-contain" />
            </div>

            <div className="container-pad relative z-10 pt-32 md:pt-48">
                {/* Logo Area */}
                <div className="flex justify-center mb-16">
                    <Link href="/" className="text-3xl font-bold flex items-center">
                        <span className="text-openbi-green">KCO</span>Nexus
                    </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-20 text-sm">
                    {/* Navigation */}
                    <div className="col-span-1">
                        <ul className="space-y-4 font-semibold text-white/80">
                            <li><Link href="/" className="hover:text-openbi-green transition-colors">Home</Link></li>
                            <li><Link href="/about" className="hover:text-openbi-green transition-colors">About</Link></li>
                            <li><Link href="/careers" className="hover:text-openbi-green transition-colors">Careers</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="col-span-1">
                        <h3 className="text-white font-bold mb-6 text-lg">Services</h3>
                        <ul className="space-y-3 font-semibold text-white/60">
                            <li><Link href="/services/nexus-ai" className="hover:text-openbi-green transition-colors">Nexus AI</Link></li>
                            <li><Link href="/services/data-integration" className="hover:text-openbi-green transition-colors">Data Integration</Link></li>
                            <li><Link href="/services/analytics-dashboards" className="hover:text-openbi-green transition-colors">Analytics & Dashboards</Link></li>
                            <li><Link href="/services/process-automation" className="hover:text-openbi-green transition-colors">Process Automation</Link></li>
                            <li><Link href="/success-stories" className="hover:text-openbi-green transition-colors">Success Stories</Link></li>
                        </ul>
                    </div>

                    {/* Solutions Col 1 */}
                    <div className="col-span-1">
                        <h3 className="text-white font-bold mb-6 text-lg md:opacity-100 opacity-100">Solutions</h3>
                        <ul className="space-y-3 font-semibold text-white/60">
                            {solutions.slice(0, 6).map((s) => (
                                <li key={s.label}>
                                    <Link href={s.href} className="hover:text-openbi-green transition-colors">{s.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Solutions Col 2 */}
                    <div className="col-span-1">
                        <h3 className="text-white font-bold mb-6 text-lg opacity-0 hidden lg:block">.</h3>
                        <ul className="space-y-3 font-semibold text-white/60 pt-0 lg:pt-1">
                            {solutions.slice(6).map((s) => (
                                <li key={s.label}>
                                    <Link href={s.href} className="hover:text-openbi-green transition-colors">{s.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* LinkedIn Button Area */}
                    <div className="col-span-2 lg:col-span-1 flex items-center justify-end">
                        <a
                            href="#"
                            className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-full py-2 pl-2 pr-6 flex items-center gap-3 transition-all backdrop-blur-sm group"
                        >
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-navy-900 shadow-lg">
                                <LucideLinkedin size={20} fill="#0a66c2" className="text-[#0a66c2]" />
                            </div>
                            <span className="font-bold text-sm text-white/90">Follow us on LinkedIn</span>
                        </a>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="pt-8 flex flex-col items-center gap-6 text-xs text-white/40 font-bold tracking-wider">
                    <p>© {new Date().getFullYear()} {site.name.toUpperCase()}. ALL RIGHTS RESERVED.</p>
                </div>
            </div>

            {/* Floating WhatsApp Button */}
            <a
                href="#"
                className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl z-50 hover:scale-110 transition-transform"
                title="Chat on WhatsApp"
            >
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    alt="WhatsApp"
                    className="w-8 h-8 invert brightness-0"
                />
            </a>
        </footer>
    );
}
