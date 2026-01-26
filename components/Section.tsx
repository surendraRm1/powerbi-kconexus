"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface SectionProps {
    children: React.ReactNode
    className?: string
    id?: string
    title?: string
    subtitle?: string
    eyebrow?: string
    center?: boolean
}

export default function Section({
    children,
    className,
    id,
    title,
    subtitle,
    eyebrow,
    center = false,
}: SectionProps) {
    return (
        <section id={id} className={cn("py-20", className)}>
            <div className="container-pad">
                {(title || subtitle || eyebrow) && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className={cn("mb-12", center ? "text-center" : "text-left")}
                    >
                        {eyebrow && (
                            <span className="text-openbi-green font-bold text-sm uppercase tracking-wider mb-2 block">
                                {eyebrow}
                            </span>
                        )}
                        {title && (
                            <h2 className="section-title">
                                {title}
                            </h2>
                        )}
                        {subtitle && (
                            <p className="section-subtitle max-w-3xl">
                                {subtitle}
                            </p>
                        )}
                    </motion.div>
                )}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {children}
                </motion.div>
            </div>
        </section>
    )
}
