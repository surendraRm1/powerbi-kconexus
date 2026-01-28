"use client"

import { motion } from "framer-motion";

const technologies = [
    { name: "Microsoft Power Platform", logo: "⚡" },
    { name: "Power BI", logo: "📊" },
    { name: "UiPath", logo: "🤖" },
    { name: "SQL", logo: "🗄️" },
    { name: "Python", logo: "🐍" },
    { name: "Zapier", logo: "⚙️" },
    { name: "Salesforce", logo: "☁️" },
];

export default function TechStack() {
    return (
        <div className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100">
            <div className="text-center mb-10">
                <h3 className="text-3xl font-bold text-navy-900 mb-4">Our Tech Stack</h3>
                <p className="text-ink-500 max-w-2xl mx-auto">
                    We leverage industry-leading technologies to deliver robust, scalable solutions
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
                {technologies.map((tech, index) => (
                    <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="flex flex-col items-center gap-3 group"
                    >
                        <div className="w-20 h-20 bg-navy-50 rounded-2xl flex items-center justify-center text-4xl group-hover:bg-openbi-green/10 group-hover:scale-110 transition-all duration-300 shadow-sm">
                            {tech.logo}
                        </div>
                        <span className="text-xs font-semibold text-center text-gray-600 group-hover:text-navy-900 transition-colors">
                            {tech.name}
                        </span>
                    </motion.div>
                ))}
            </div>

            <div className="mt-10 text-center">
                <p className="text-sm font-bold text-openbi-green">
                    Experts in Microsoft Power Platform, Power BI, UiPath, SQL, Python, Zapier, Salesforce
                </p>
            </div>
        </div>
    );
}
