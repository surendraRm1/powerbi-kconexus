"use client"

import Link from "next/link";
import { site } from "@/lib/site";
import { useState, useEffect } from "react";
import { LucideChevronDown } from "lucide-react";

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
        <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "glass-nav shadow-lg" : "bg-navy-900"}`}>
            <div className="container-pad flex h-20 items-center justify-between">
                <Link href="/" className="flex items-center">
                    <span className="text-2xl font-bold text-white">
                        <span className="text-openbi-green">KCO</span>Nexus
                    </span>
                </Link>

                <nav className="hidden md:flex gap-12 items-center text-[15px] font-semibold text-white ml-auto">
                    {site.nav.map((n) => (
                        <div
                            key={n.label}
                            className="relative group py-4"
                            onMouseEnter={() => n.items && setOpenDropdown(n.label)}
                            onMouseLeave={() => setOpenDropdown(null)}
                        >
                            <Link
                                href={n.href}
                                className="hover:text-openbi-green transition-colors flex items-center gap-1"
                            >
                                {n.label}
                                {n.items && <LucideChevronDown size={14} className="group-hover:rotate-180 transition-transform" />}
                            </Link>

                            {n.items && openDropdown === n.label && (
                                <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-xl py-2 mt-0 border border-gray-100 animate-in fade-in slide-in-from-top-2 duration-200">
                                    {n.items.map((item) => (
                                        <Link
                                            key={item.label}
                                            href={item.href}
                                            className="block px-6 py-2 text-navy-900 hover:bg-navy-50 hover:text-openbi-green transition-colors text-sm font-bold"
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    <Link
                        href="/contact"
                        className="bg-openbi-green text-white px-6 py-2.5 rounded-full font-black hover:bg-[#15c35b] transition-all shadow-lg hover:shadow-openbi-green/20"
                    >
                        Contact Us
                    </Link>
                </nav>
            </div>
        </header>
    );
}
