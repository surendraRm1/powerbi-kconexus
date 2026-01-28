"use client"

import { motion } from "framer-motion";
import { LucideTruck, LucideHeart, LucideShoppingCart, LucideFactory, LucideBriefcase } from "lucide-react";

const industries = [
    { name: "Manufacturing", icon: LucideFactory, color: "text-orange-600" },
    { name: "Healthcare", icon: LucideHeart, color: "text-red-600" },
    { name: "Retail", icon: LucideShoppingCart, color: "text-purple-600" },
    { name: "Professional Services", icon: LucideBriefcase, color: "text-green-600" },
    { name: "Logistics", icon: LucideTruck, color: "text-blue-600" },
];

export default function IndustryLogos() {
    return (
        <div className="text-center">
            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">
                Trusted Across Industries
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                {industries.map((industry, index) => {
                    const Icon = industry.icon;
                    return (
                        <motion.div
                            key={industry.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="flex flex-col items-center gap-3 group cursor-default"
                        >
                            <div className={`w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center group-hover:bg-white group-hover:shadow-lg transition-all duration-300 ${industry.color}`}>
                                <Icon size={32} />
                            </div>
                            <span className="text-xs font-semibold text-gray-600 group-hover:text-navy-900 transition-colors">
                                {industry.name}
                            </span>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
