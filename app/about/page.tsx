import Section from "@/components/Section";
import Link from "next/link";
import { LucideTarget, LucideBarChart3, LucideZap, LucideSearch, LucideCode2, LucideRotateCcw } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="pt-10">
            <Section
                eyebrow="Who we are"
                title="We build BI that people actually use."
                subtitle="KCONexus is a specialized consultancy focused on modernizing business intelligence through Power BI, advanced data engineering, and governed analytics."
            >
                <div className="grid gap-12 md:grid-cols-2 items-center mb-20">
                    <div className="rounded-3xl border bg-gray-50 aspect-video overflow-hidden shadow-xl">
                        <div className="w-full h-full bg-[url('https://openbi.ai/assets/img/hero-img.png')] bg-cover bg-center" />
                    </div>
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold">Our Philosophy</h3>
                        <p className="text-ink-500 leading-relaxed">
                            Most organizations suffer from "report bloat" — too many dashboards that nobody trusts.
                            We believe in the power of simplicity. We work with teams to define lean,
                            standardized KPIs and build the high-performance pipelines needed to serve them.
                        </p>
                        <p className="text-ink-500 leading-relaxed">
                            Our team consists of certified Power BI experts, data engineers, and strategic
                            analysts who understand both the technology and the business logic behind the numbers.
                        </p>
                        <Link href="/contact" className="btn-primary inline-block">
                            Work With Us
                        </Link>
                    </div>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {[
                        { t: "Clarity", d: "Dashboards designed for action, not decoration. We prioritize usability and storytelling over complex features.", i: <LucideBarChart3 className="text-openbi-green" /> },
                        { t: "Reliability", d: "Clean pipelines with automated checks and governance. We ensure your data is always accurate and up-to-date.", i: <LucideTarget className="text-openbi-green" /> },
                        { t: "Speed", d: "Faster reporting cycles and fewer manual steps. We automate the 'boring stuff' so your team can focus on insights.", i: <LucideZap className="text-openbi-green" /> },
                    ].map((item) => (
                        <div key={item.t} className="card-openbi group">
                            <div className="mb-4 p-3 bg-gray-50 rounded-lg inline-block group-hover:bg-openbi-green/10 transition-colors">
                                {item.i}
                            </div>
                            <div className="text-lg font-bold mb-3">{item.t}</div>
                            <div className="text-sm text-ink-500 leading-relaxed">{item.d}</div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* How We Work Section */}
            <Section
                eyebrow="Our Process"
                title="How We Work"
                subtitle="A streamlined methodology that ensures project success and measurable impact."
                className="bg-surface-50"
                center
            >
                <div className="grid md:grid-cols-3 gap-12 relative">
                    {/* Connection Line */}
                    <div className="absolute top-1/4 left-0 w-full h-1 bg-navy-50 hidden md:block" />

                    {[
                        { step: "01", title: "Scoping", desc: "We deep-dive into your requirements, identify data sources, and define clear success metrics.", icon: <LucideSearch size={32} /> },
                        { step: "02", title: "Development", desc: "Our engineers build robust ETL pipelines and intuitive dashboards with rigorous testing.", icon: <LucideCode2 size={32} /> },
                        { step: "03", title: "Maintain", desc: "We provide ongoing support, data refreshes, and continuous improvement cycles.", icon: <LucideRotateCcw size={32} /> },
                    ].map((s, idx) => (
                        <div key={s.title} className="relative z-10 flex flex-col items-center">
                            <div className="w-16 h-16 bg-navy-900 text-white rounded-full flex items-center justify-center font-black text-xl mb-6 shadow-xl border-4 border-white">
                                {s.step}
                            </div>
                            <div className="text-center p-6 card-openbi w-full">
                                <div className="text-openbi-green mb-4 flex justify-center">{s.icon}</div>
                                <h4 className="text-xl font-bold mb-2">{s.title}</h4>
                                <p className="text-sm text-ink-500 leading-relaxed">{s.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Vision / Mission Section */}
            <Section className="bg-navy-900 text-white">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-wider text-sm opacity-60">Our Vision</h2>
                        <p className="text-2xl md:text-3xl font-bold leading-tight mb-8">
                            To become the standard-bearer for high-trust, high-impact business intelligence globally.
                        </p>
                        <div className="h-1 w-20 bg-openbi-green" />
                    </div>
                    <div>
                        <p className="text-lg text-white/70 leading-relaxed">
                            We are committed to helping organizations bridge the gap between their raw data
                            and strategic execution. Every dashboard we build is a step toward a more
                            informed, efficient, and successful enterprise.
                        </p>
                    </div>
                </div>
            </Section>
        </div>
    );
}
