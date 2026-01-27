import Section from "@/components/Section";
import Link from "next/link";
import { LucideTarget, LucideBarChart3, LucideZap, LucideSearch, LucideCode2, LucideRotateCcw } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="pt-10">
            <Section
                eyebrow="The KCOnexus Story"
                title="Revolutionizing Business Intelligence."
                subtitle="Founded in December 2021 by Mr. Prashant Dayama and Mr. Surendra, KCOnexus was established to lead a new era of data-driven decision-making. Emerging alongside the Power BI revolution, our founders envisioned a firm that would eliminate the delays of traditional reporting through advanced automation."
            >
                <div className="grid gap-12 md:grid-cols-2 items-center mb-20">
                    <div className="rounded-3xl border bg-gray-50 aspect-video overflow-hidden shadow-xl">
                        <div className="w-full h-full bg-[url('https://openbi.ai/assets/img/hero-img.png')] bg-cover bg-center" />
                    </div>
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-bold mb-3">A Powerhouse of Talent, Built for Speed</h3>
                            <p className="text-ink-500 leading-relaxed">
                                What began as a visionary startup has rapidly expanded into a powerhouse of technical talent. At KCOnexus, we believe that world-class automation requires world-class experts. Today, we are proud to be powered by a dedicated team of 36 Power BI experts, including a core leadership group of 8 senior specialists. This rapid growth reflects our unwavering commitment to excellence and our unique ability to scale complex intelligence solutions for businesses across every industry.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-3">Redefining the Industry Standard</h3>
                            <p className="text-ink-500 leading-relaxed">
                                While the industry standard for complex Business Intelligence implementation typically takes weeks or even months, we have mastered the art of speed and precision. By combining our deep technical expertise with our proprietary automation framework, we have successfully deployed over 150+ Live Projects.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-3">Our Core Mission</h3>
                            <p className="text-ink-500 leading-relaxed mb-4">
                                To empower organizations with Zero-Lag Intelligence. By automating the "Connecting" and "Processing" phases of data, we allow your leadership to spend 0% of their time preparing data and 100% of their time acting on it.
                            </p>
                            <blockquote className="border-l-4 border-openbi-green pl-4 italic text-ink-600 font-medium bg-gray-50 py-2 pr-2 rounded-r-md">
                                "At KCOnexus, we don't just show you your data—we give you back your time."
                            </blockquote>
                        </div>
                        <Link href="/contact" className="btn-primary inline-block mt-4">
                            Work With Us
                        </Link>
                    </div>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {[
                        { t: "The 10-Minute Benchmark", d: "We have perfected our automation framework to the point where we can deliver actionable BI reports within 10 minutes of system integration.", i: <LucideZap className="text-openbi-green" /> },
                        { t: "Live Ecosystem Connectivity", d: "We don't believe in static data. Our core capability lies in Live System Integration, ensuring your dashboards reflect what is happening in your business right now, not yesterday.", i: <LucideRotateCcw className="text-openbi-green" /> },
                        { t: "Automation-First Philosophy", d: "We specialize in the end-to-end automation of data pipelines. From connecting to your ERP to cleaning and visualizing data, we remove the human bottleneck entirely.", i: <LucideCode2 className="text-openbi-green" /> },
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
