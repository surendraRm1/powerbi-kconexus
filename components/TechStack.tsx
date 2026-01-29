"use client"

import { motion } from "framer-motion";


export default function TechStack() {
    return (
        <div className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100">
            <div className="text-center mb-10">
                <h3 className="text-3xl font-bold text-navy-900 mb-4">Our Tech Stack</h3>
                <p className="text-ink-500 max-w-2xl mx-auto">
                    We leverage industry-leading technologies to deliver robust, scalable solutions
                </p>
            </div>

            <div className="flex justify-center items-center py-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="w-full max-w-5xl"
                >
                    <img
                        src="/assets/tech-stack-composite.png"
                        alt="Microsoft Power Platform, Power BI, UiPath, SQL, Python, Zapier, Salesforce"
                        className="w-full h-auto object-contain"
                    />
                </motion.div>
            </div>

            <div className="mt-10 text-center">
                <p className="text-sm font-bold text-openbi-green">
                    Experts in Microsoft Power Platform, Power BI, UiPath, SQL, Python, Zapier, Salesforce
                </p>
            </div>
        </div>
    );
}
