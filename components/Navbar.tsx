"use client"

import Link from "next/link";
import { site } from "@/lib/site";
import { useState, useEffect } from "react";
import { LucideChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "glass-nav shadow-lg py-0" : "bg-transparent py-4"}`}>
            <div className="container-pad flex h-20 items-center justify-between">
                <Link href="/" className="flex items-center">
                    <span className="text-2xl font-bold text-white">
                        <span className="text-openbi-green">KCO</span>Nexus
                    </span>
                </Link>

                <nav className="hidden lg:flex gap-2 xl:gap-6 items-center text-[11px] xl:text-[13px] font-bold text-white ml-auto pl-12">
                    {site.nav.map((n) => (
                        <Link
                            key={n.label}
                            href={n.href}
                            className={`hover:text-openbi-green transition-colors py-4 whitespace-nowrap uppercase tracking-tighter xl:tracking-widest border-b-2 border-transparent hover:border-openbi-green ${n.label === "Solution Accelerators" ? "text-openbi-green/90" : ""}`}
                        >
                            {n.label}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setOpenDropdown(openDropdown === "mobile" ? null : "mobile")}
                >
                    <div className="w-6 h-0.5 bg-white mb-1.5" />
                    <div className="w-6 h-0.5 bg-white mb-1.5" />
                    <div className="w-4 h-0.5 bg-white ml-auto" />
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {openDropdown === "mobile" && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="absolute top-20 left-0 w-full bg-navy-900 border-t border-white/5 md:hidden overflow-hidden"
                        >
                            <div className="container-pad py-8 flex flex-col gap-6">
                                {site.nav.map((n) => (
                                    <Link
                                        key={n.label}
                                        href={n.href}
                                        onClick={() => setOpenDropdown(null)}
                                        className="text-xl font-bold text-white hover:text-openbi-green transition-colors"
                                    >
                                        {n.label}
                                    </Link>
                                ))}
                                <Link
                                    href="/contact"
                                    onClick={() => setOpenDropdown(null)}
                                    className="btn-green text-center py-4"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
