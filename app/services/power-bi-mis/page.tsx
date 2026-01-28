import Section from "@/components/Section";
import Link from "next/link";
import { LucideBarChart3, LucideDatabase, LucideTarget, LucideCheckCircle2, LucideArrowRight } from "lucide-react";
import PowerBICalculator from "@/components/PowerBICalculator";

export default function PowerBIMISPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative hero-gradient overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
                <div className="container-pad relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-6 py-2 mb-8">
                            <LucideBarChart3 className="text-blue-400" size={20} />
                            <span className="text-sm font-bold text-blue-400 uppercase tracking-wider">
                                For CFOs & Finance Leaders
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                            Power BI & MIS<br />
                            <span className="text-openbi-green">Analytics & Dashboards.</span>
                        </h1>

                        <p className="text-xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
                            Replace spreadsheet chaos with decision-ready dashboards. Get executive-level visibility into your business in real-time.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link href="/contact" className="btn-green text-lg px-8 py-3">
                                Book MIS Preparation
                            </Link>
                            <Link href="/#resources" className="bg-white/10 text-white px-8 py-3 rounded font-semibold hover:bg-white/20 transition-all border border-white/20">
                                View Sample Dashboards
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Services */}
            <Section
                eyebrow="Our Services"
                title="What We Deliver"
                subtitle="Comprehensive Analytics, Dashboards, and MIS solutions tailored for financial decision-makers"
                center
            >
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="card-openbi">
                        <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                            <LucideBarChart3 className="text-blue-600" size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-4">Power BI Dashboards</h3>
                        <p className="text-ink-500 mb-4">
                            Finance, Operations, and Sales dashboards that give you a single source of truth
                        </p>
                        <ul className="space-y-2 text-sm text-ink-500">
                            <li className="flex items-start gap-2">
                                <LucideCheckCircle2 className="text-openbi-green shrink-0 mt-0.5" size={16} />
                                <span>Real-time P&L and cash flow visibility</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <LucideCheckCircle2 className="text-openbi-green shrink-0 mt-0.5" size={16} />
                                <span>Executive KPI tracking</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <LucideCheckCircle2 className="text-openbi-green shrink-0 mt-0.5" size={16} />
                                <span>Custom drill-down capabilities</span>
                            </li>
                        </ul>
                    </div>

                    <div className="card-openbi">
                        <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                            <LucideDatabase className="text-purple-600" size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-4">Automated MIS Reporting</h3>
                        <p className="text-ink-500 mb-4">
                            Eliminate manual report generation and get insights delivered automatically
                        </p>
                        <ul className="space-y-2 text-sm text-ink-500">
                            <li className="flex items-start gap-2">
                                <LucideCheckCircle2 className="text-openbi-green shrink-0 mt-0.5" size={16} />
                                <span>Scheduled report distribution</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <LucideCheckCircle2 className="text-openbi-green shrink-0 mt-0.5" size={16} />
                                <span>Alert-based notifications</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <LucideCheckCircle2 className="text-openbi-green shrink-0 mt-0.5" size={16} />
                                <span>Multi-format exports (PDF, Excel, PowerPoint)</span>
                            </li>
                        </ul>
                    </div>

                    <div className="card-openbi">
                        <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                            <LucideTarget className="text-green-600" size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-4">Data Modeling & KPI Design</h3>
                        <p className="text-ink-500 mb-4">
                            Build the foundation for accurate, scalable analytics
                        </p>
                        <ul className="space-y-2 text-sm text-ink-500">
                            <li className="flex items-start gap-2">
                                <LucideCheckCircle2 className="text-openbi-green shrink-0 mt-0.5" size={16} />
                                <span>Star schema and data warehouse design</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <LucideCheckCircle2 className="text-openbi-green shrink-0 mt-0.5" size={16} />
                                <span>Custom KPI and metric definitions</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <LucideCheckCircle2 className="text-openbi-green shrink-0 mt-0.5" size={16} />
                                <span>Data governance frameworks</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </Section>

            {/* Power BI Time-Saved Calculator */}
            <Section
                eyebrow="Interactive Calculator"
                title="How Much Time Can You Save?"
                subtitle="See your potential time savings in under 20 seconds"
                center
                className="bg-surface-50"
            >
                <PowerBICalculator />
            </Section>

            {/* Outcome Messaging */}
            <Section className="bg-navy-900 text-white py-24">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">
                        From 40 Hours to 4 Hours
                    </h2>
                    <p className="text-xl text-white/80 mb-12 leading-relaxed">
                        Our clients typically save <span className="text-openbi-green font-bold">90% of their reporting time</span> and eliminate spreadsheet errors completely. That's 36 hours per month your finance team can spend on strategic analysis instead of data wrangling.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                            <div className="text-4xl font-bold text-openbi-green mb-2">90%</div>
                            <div className="text-white/80">Time Saved on Reporting</div>
                        </div>
                        <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                            <div className="text-4xl font-bold text-openbi-green mb-2">100%</div>
                            <div className="text-white/80">Data Accuracy</div>
                        </div>
                        <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                            <div className="text-4xl font-bold text-openbi-green mb-2">24/7</div>
                            <div className="text-white/80">Real-Time Visibility</div>
                        </div>
                    </div>

                    <Link href="/contact" className="btn-green text-lg px-10 py-4 inline-flex items-center gap-2">
                        Start Your MIS Transformation
                        <LucideArrowRight size={20} />
                    </Link>
                </div>
            </Section>

            {/* Use Cases */}
            <Section
                eyebrow="Use Cases"
                title="Built for Your Challenges"
                subtitle="Real problems we solve for CFOs and finance teams"
                center
            >
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                        <h4 className="text-xl font-bold mb-4 text-navy-900">
                            "I need real-time P&L visibility"
                        </h4>
                        <p className="text-ink-500 mb-4">
                            Stop waiting for month-end closes. Get live P&L dashboards that update automatically from your ERP, showing exactly where you stand today.
                        </p>
                        <div className="text-sm font-bold text-openbi-green">
                            → Live financial dashboards
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                        <h4 className="text-xl font-bold mb-4 text-navy-900">
                            "My team wastes hours on manual reports"
                        </h4>
                        <p className="text-ink-500 mb-4">
                            Automate your weekly, monthly, and quarterly reports. Schedule them once, and they'll generate and distribute themselves—forever.
                        </p>
                        <div className="text-sm font-bold text-openbi-green">
                            → Automated MIS reporting
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                        <h4 className="text-xl font-bold mb-4 text-navy-900">
                            "We have data in 5 different systems"
                        </h4>
                        <p className="text-ink-500 mb-4">
                            Consolidate data from ERP, CRM, HR, and finance systems into one unified dashboard. One source of truth for all stakeholders.
                        </p>
                        <div className="text-sm font-bold text-openbi-green">
                            → Unified data integration
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                        <h4 className="text-xl font-bold mb-4 text-navy-900">
                            "I can't trust the numbers in our spreadsheets"
                        </h4>
                        <p className="text-ink-500 mb-4">
                            Eliminate version control chaos and formula errors. Get governed, validated data that everyone can trust.
                        </p>
                        <div className="text-sm font-bold text-openbi-green">
                            → Data governance & validation
                        </div>
                    </div>
                </div>
            </Section>

            {/* CTA Section */}
            <Section className="bg-surface-50">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Transform Your MIS?
                    </h2>
                    <p className="text-lg text-ink-500 mb-8">
                        Book a free 30-minute consultation. We'll analyze your current reporting process and show you exactly how much time you can save.
                    </p>
                    <Link href="/contact" className="btn-green text-lg px-10 py-4">
                        Book Your MIS Preparation
                    </Link>
                </div>
            </Section>
        </>
    );
}
