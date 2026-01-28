"use client"

import Link from "next/link";
import { motion } from "framer-motion";
import { LucideBarChart3, LucideZap, LucideNetwork } from "lucide-react";

const pillars = [
    {
        title: "Power BI & MIS",
        description: "Turning raw data into executive-level decisions with real-time visibility and clarity.",
        icon: LucideBarChart3,
        href: "/services/power-bi-mis",
        color: "from-blue-500 to-blue-600",
        hoverColor: "hover:shadow-blue-500/20",
    },
    {
        title: "Process Automation",
        description: "Removing manual data entry or 'Robot Work' using AI, RPA, and smart integrations.",
        icon: LucideZap,
        href: "/services/automation",
        color: "from-openbi-green to-green-600",
        hoverColor: "hover:shadow-openbi-green/20",
    },
    {
        title: "Solution Accelerators",
        description: "Ready-to-deploy frameworks for GST, Internal Audit, and statutory compliance.",
        icon: LucideNetwork,
        href: "/solutions",
        color: "from-purple-500 to-purple-600",
        hoverColor: "hover:shadow-purple-500/20",
    },
];

export default function ThreePillars() {
    return (
        <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                    <motion.div
                        key={pillar.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Link
                            href={pillar.href}
                            className={`block group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl ${pillar.hoverColor} transition-all duration-300 border border-gray-100 h-full`}
                        >
                            {/* Gradient overlay on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`} />

                            <div className="relative z-10">
                                {/* Icon */}
                                <div className={`w-16 h-16 bg-gradient-to-br ${pillar.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                    <Icon className="text-white" size={32} />
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold text-navy-900 mb-4 group-hover:text-openbi-green transition-colors">
                                    {pillar.title}
                                </h3>

                                {/* Description */}
                                <p className="text-ink-500 leading-relaxed mb-6">
                                    {pillar.description}
                                </p>

                                {/* CTA */}
                                <div className="flex items-center gap-2 text-sm font-bold text-gray-400 group-hover:text-openbi-green transition-colors uppercase tracking-wider">
                                    Learn More
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                );
            })}
        </div>
    );
}
