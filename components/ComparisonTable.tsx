"use client"

import { motion } from "framer-motion";

const comparisonData = [
    {
        feature: "Messaging",
        industryNorm: "Generic services",
        kconexus: "Outcome-driven (time & money saved)",
    },
    {
        feature: "CTA",
        industryNorm: "Contact Us",
        kconexus: "Book Preparation / Consultation",
    },
    {
        feature: "Social Proof",
        industryNorm: "Minimal",
        kconexus: "Case studies, testimonials",
    },
    {
        feature: "Visuals",
        industryNorm: "Static images",
        kconexus: "Dashboard & workflow demos",
    },
    {
        feature: "Technical Depth",
        industryNorm: "High-level",
        kconexus: "Explicit tech stack & tools",
    },
];

export default function ComparisonTable() {
    return (
        <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 overflow-hidden">
            <div className="text-center mb-10">
                <h3 className="text-3xl font-bold text-navy-900 mb-4">
                    Why KCONexus is Different
                </h3>
                <p className="text-ink-500 max-w-2xl mx-auto">
                    We don't just deliver services—we deliver measurable outcomes
                </p>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b-2 border-gray-200">
                            <th className="text-left py-4 px-6 font-bold text-navy-900">Feature</th>
                            <th className="text-left py-4 px-6 font-bold text-gray-500">Industry Norm</th>
                            <th className="text-left py-4 px-6 font-bold text-openbi-green">KCONexus</th>
                        </tr>
                    </thead>
                    <tbody>
                        {comparisonData.map((row, index) => (
                            <motion.tr
                                key={row.feature}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                            >
                                <td className="py-4 px-6 font-semibold text-navy-900">
                                    {row.feature}
                                </td>
                                <td className="py-4 px-6 text-ink-500">
                                    {row.industryNorm}
                                </td>
                                <td className="py-4 px-6">
                                    <div className="flex items-center gap-2">
                                        <span className="text-openbi-green font-semibold">✓</span>
                                        <span className="text-navy-900 font-semibold">{row.kconexus}</span>
                                    </div>
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="mt-8 text-center">
                <p className="text-sm text-ink-500">
                    <strong className="text-navy-900">Bottom line:</strong> We focus on your ROI, not just deliverables.
                </p>
            </div>
        </div>
    );
}
