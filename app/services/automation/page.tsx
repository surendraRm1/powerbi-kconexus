import Section from "@/components/Section";
import Link from "next/link";
import { LucideZap, LucideBot, LucideNetwork, LucideCheckCircle2, LucideArrowRight, LucideFileText, LucideCreditCard, LucideRefreshCw } from "lucide-react";
import AutomationCalculator from "@/components/AutomationCalculator";

export default function AutomationPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative hero-gradient overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
                <div className="container-pad relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-openbi-green/10 border border-openbi-green/20 rounded-full px-6 py-2 mb-8">
                            <LucideZap className="text-openbi-green" size={20} />
                            <span className="text-sm font-bold text-openbi-green uppercase tracking-wider">
                                For COOs & Operations Leaders
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                            Process Automation<br />
                            <span className="text-openbi-green">& Workflow Excellence.</span>
                        </h1>

                        <p className="text-xl text-white/80 mb-4 max-w-3xl mx-auto leading-relaxed">
                            Eliminate Robot Work so humans can do Human Work.
                        </p>

                        <p className="text-lg text-white/70 mb-10 max-w-3xl mx-auto">
                            Give your team 20+ hours back every week by automating repetitive tasks. From invoice processing to data syncing, we eliminate the manual work that slows you down.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link href="/contact" className="btn-green text-lg px-8 py-3">
                                Book Automation Preparation
                            </Link>
                            <Link href="/#resources" className="bg-white/10 text-white px-8 py-3 rounded font-semibold hover:bg-white/20 transition-all border border-white/20">
                                See Automation Examples
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Services */}
            <Section
                eyebrow="Our Services"
                title="How We Automate Your Operations"
                subtitle="End-to-end automation solutions that eliminate manual work and reduce errors"
                center
            >
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="card-openbi">
                        <div className="w-14 h-14 bg-gradient-to-br from-openbi-green to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                            <LucideFileText className="text-white" size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-4">Data Integration</h3>
                        <p className="text-ink-500 mb-4">
                            Connecting CRM, ERP, HR, and finance tools so data flows automatically.
                        </p>
                        <ul className="space-y-2 text-sm text-ink-500">
                            <li className="flex items-start gap-2">
                                <LucideCheckCircle2 className="text-openbi-green shrink-0 mt-0.5" size={16} />
                                <span>Mobile audit apps with offline capability</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <LucideCheckCircle2 className="text-openbi-green shrink-0 mt-0.5" size={16} />
                                <span>Automated compliance reporting</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <LucideCheckCircle2 className="text-openbi-green shrink-0 mt-0.5" size={16} />
                                <span>Photo documentation and GPS tracking</span>
                            </li>
                        </ul>
                    </div>

                    <div className="card-openbi">
                        <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                            <LucideNetwork className="text-white" size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-4">Workflow Integration</h3>
                        <p className="text-ink-500 mb-4">
                            Connecting CRM, ERP, HR, and finance tools so data flows automatically
                        </p>
                        <ul className="space-y-2 text-sm text-ink-500">
                            <li className="flex items-start gap-2">
                                <LucideCheckCircle2 className="text-openbi-green shrink-0 mt-0.5" size={16} />
                                <span>Salesforce ↔ ERP synchronization</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <LucideCheckCircle2 className="text-openbi-green shrink-0 mt-0.5" size={16} />
                                <span>HR system ↔ Finance integration</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <LucideCheckCircle2 className="text-openbi-green shrink-0 mt-0.5" size={16} />
                                <span>Custom API development</span>
                            </li>
                        </ul>
                    </div>

                    <div className="card-openbi">
                        <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                            <LucideBot className="text-white" size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-4">RPA (Robotic Process Automation)</h3>
                        <p className="text-ink-500 mb-4">
                            Software robots that handle repetitive tasks 24/7 with zero errors
                        </p>
                        <ul className="space-y-2 text-sm text-ink-500">
                            <li className="flex items-start gap-2">
                                <LucideCheckCircle2 className="text-openbi-green shrink-0 mt-0.5" size={16} />
                                <span>Invoice processing and approval routing</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <LucideCheckCircle2 className="text-openbi-green shrink-0 mt-0.5" size={16} />
                                <span>Bank reconciliation automation</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <LucideCheckCircle2 className="text-openbi-green shrink-0 mt-0.5" size={16} />
                                <span>Data entry and system updates</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </Section>

            {/* Automation Time-Saved Calculator */}
            <Section
                eyebrow="Interactive Calculator"
                title="Calculate Your Time Savings"
                subtitle="Discover how much operational time you can recover in under 20 seconds"
                center
                className="bg-surface-50"
            >
                <AutomationCalculator />
            </Section>

            {/* Outcome Messaging */}
            <Section className="bg-navy-900 text-white py-24">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">
                        Save 20+ Hours Per Week
                    </h2>
                    <p className="text-xl text-white/80 mb-12 leading-relaxed">
                        Our automation solutions deliver <span className="text-openbi-green font-bold">90% error reduction</span> and turn 2-week processes into 2-day processes. Your team focuses on strategy while robots handle the repetitive work.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                            <div className="text-4xl font-bold text-openbi-green mb-2">20+</div>
                            <div className="text-white/80">Hours Saved Per Week</div>
                        </div>
                        <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                            <div className="text-4xl font-bold text-openbi-green mb-2">90%</div>
                            <div className="text-white/80">Error Reduction</div>
                        </div>
                        <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                            <div className="text-4xl font-bold text-openbi-green mb-2">10x</div>
                            <div className="text-white/80">Faster Processing</div>
                        </div>
                    </div>

                    <Link href="/contact" className="btn-green text-lg px-10 py-4 inline-flex items-center gap-2">
                        Start Your Automation Journey
                        <LucideArrowRight size={20} />
                    </Link>
                </div>
            </Section>

            {/* Common Automation Use Cases */}
            <Section
                eyebrow="Use Cases"
                title="What We Automate"
                subtitle="Real processes we've automated for operations teams"
                center
            >
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                            <LucideFileText className="text-blue-600" size={24} />
                        </div>
                        <h4 className="font-bold mb-2 text-navy-900">Invoice Processing</h4>
                        <p className="text-sm text-ink-500">
                            Automatic extraction, validation, and routing of invoices for approval
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                            <LucideCreditCard className="text-green-600" size={24} />
                        </div>
                        <h4 className="font-bold mb-2 text-navy-900">Bank Reconciliation</h4>
                        <p className="text-sm text-ink-500">
                            Daily automated matching of bank statements with accounting records
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                            <LucideRefreshCw className="text-purple-600" size={24} />
                        </div>
                        <h4 className="font-bold mb-2 text-navy-900">Data Syncing</h4>
                        <p className="text-sm text-ink-500">
                            Real-time synchronization between CRM, ERP, and other business systems
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                        <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                            <LucideFileText className="text-orange-600" size={24} />
                        </div>
                        <h4 className="font-bold mb-2 text-navy-900">Report Generation</h4>
                        <p className="text-sm text-ink-500">
                            Scheduled creation and distribution of operational reports
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                        <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                            <LucideBot className="text-red-600" size={24} />
                        </div>
                        <h4 className="font-bold mb-2 text-navy-900">Data Entry</h4>
                        <p className="text-sm text-ink-500">
                            Automated data extraction from emails, PDFs, and forms into systems
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                        <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-4">
                            <LucideCheckCircle2 className="text-cyan-600" size={24} />
                        </div>
                        <h4 className="font-bold mb-2 text-navy-900">Compliance Audits</h4>
                        <p className="text-sm text-ink-500">
                            Mobile apps for field audits with automatic report generation
                        </p>
                    </div>
                </div>
            </Section>

            {/* Before/After Comparison */}
            <Section className="bg-surface-50">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Before vs. After Automation</h2>
                        <p className="text-lg text-ink-500">See the transformation in action</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-200">
                            <h3 className="text-xl font-bold text-red-900 mb-6">❌ Before (Manual Process)</h3>
                            <ul className="space-y-3 text-ink-500">
                                <li className="flex items-start gap-3">
                                    <span className="text-red-600 font-bold">•</span>
                                    <span>40 hours/month on manual data entry</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-600 font-bold">•</span>
                                    <span>15% error rate in invoices</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-600 font-bold">•</span>
                                    <span>2-week turnaround for reports</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-600 font-bold">•</span>
                                    <span>Data scattered across 5 systems</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-600 font-bold">•</span>
                                    <span>Team frustrated with repetitive work</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-green-50 rounded-2xl p-8 border-2 border-openbi-green">
                            <h3 className="text-xl font-bold text-green-900 mb-6">✅ After (Automated)</h3>
                            <ul className="space-y-3 text-ink-500">
                                <li className="flex items-start gap-3">
                                    <LucideCheckCircle2 className="text-openbi-green shrink-0 mt-0.5" size={20} />
                                    <span><strong>4 hours/month</strong> on data oversight</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <LucideCheckCircle2 className="text-openbi-green shrink-0 mt-0.5" size={20} />
                                    <span><strong>0.5% error rate</strong> (90% reduction)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <LucideCheckCircle2 className="text-openbi-green shrink-0 mt-0.5" size={20} />
                                    <span><strong>2-day turnaround</strong> for reports</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <LucideCheckCircle2 className="text-openbi-green shrink-0 mt-0.5" size={20} />
                                    <span><strong>Unified data</strong> in one dashboard</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <LucideCheckCircle2 className="text-openbi-green shrink-0 mt-0.5" size={20} />
                                    <span><strong>Team focused</strong> on strategic work</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>

            {/* CTA Section */}
            <Section>
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Automate Your Operations?
                    </h2>
                    <p className="text-lg text-ink-500 mb-8">
                        Book a free 30-minute consultation. We'll identify your top 3 automation opportunities and estimate your time savings.
                    </p>
                    <Link href="/contact" className="btn-green text-lg px-10 py-4">
                        Book Your Automation Preparation
                    </Link>
                </div>
            </Section>
        </>
    );
}
