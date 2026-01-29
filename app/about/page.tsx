import Section from "@/components/Section";
import Link from "next/link";
import { LucideTarget, LucideBarChart3, LucideZap, LucideSearch, LucideCode2, LucideRotateCcw } from "lucide-react";
import KumbhatCredibility from "@/components/KumbhatCredibility";

export default function AboutPage() {
    return (
        <div className="pt-24 pb-12 container-pad">
            {/* 50 Years of Excellence Hero */}
            <div className="mb-20">
                <KumbhatCredibility />
            </div>

            <Section
                eyebrow="Our Story"
                title="Revolutionizing Business Intelligence"
                subtitle="KCOnexus was founded in December 2021 by Mr. Prashant Dayama and our leadership team to lead a new era of data-driven decision-making. Emerging alongside the Power BI revolution, our founders envisioned a firm that would eliminate the delays of traditional reporting through advanced automation."
            >

                <div className="max-w-4xl mx-auto mb-20">
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
                                While the industry standard for complex Business Intelligence implementation typically takes weeks or even months, we have mastered the art of speed and precision. Through our **Solution Accelerators**—pre-built frameworks for Indian statutory audit, manufacturing efficiency, and complex TDS/GST reconciliation—we successfully deploy complex projects in record time.
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


                {/* Leadership Section */}
                <div className="max-w-6xl mx-auto mb-20">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-navy-900 mb-4">About the Team</h2>
                        <p className="text-ink-500">The visionaries behind Zero-Lag Intelligence</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-12">
                        {/* Priya Bhansali */}
                        <div className="text-center group">
                            <div className="w-48 h-48 bg-gray-200 rounded-2xl mx-auto mb-6 overflow-hidden border-4 border-white shadow-xl group-hover:border-openbi-green transition-all">
                                <img src="/assets/test-image.png" alt="Priya Bhansali" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                            </div>
                            <h3 className="text-xl font-bold text-navy-900 group-hover:text-openbi-green transition-colors uppercase tracking-tight">Priya Bhansali</h3>
                            <p className="text-openbi-green font-bold text-xs uppercase tracking-widest mb-4">Managing Partner</p>
                            <p className="text-ink-500 text-sm leading-relaxed px-4">
                                Managing Partner with 30+ years of expertise in Taxation, FEMA, and Audit. A pioneer at ICAI and Independent Woman Director on the Boards of Listed Companies.
                            </p>
                        </div>

                        {/* Sheilendra Bhansali */}
                        <div className="text-center group">
                            <div className="w-48 h-48 bg-gray-200 rounded-2xl mx-auto mb-6 overflow-hidden border-4 border-white shadow-xl group-hover:border-openbi-green transition-all">
                                <img src="/assets/test-image.png" alt="Sheilendra Bhansali" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                            </div>
                            <h3 className="text-xl font-bold text-navy-900 group-hover:text-openbi-green transition-colors uppercase tracking-tight">Sheilendra Bhansali</h3>
                            <p className="text-openbi-green font-bold text-xs uppercase tracking-widest mb-4">Seasoned Professional</p>
                            <p className="text-ink-500 text-sm leading-relaxed px-4">
                                30+ years of experience in Audit, Business Valuation, and Investment Planning. Serves as an Independent Director on the Board of a Listed Company.
                            </p>
                        </div>

                        {/* Prashant Dayama */}
                        <div className="text-center group">
                            <div className="w-48 h-48 bg-gray-200 rounded-2xl mx-auto mb-6 overflow-hidden border-4 border-white shadow-xl group-hover:border-openbi-green transition-all">
                                <img src="/assets/test-image.png" alt="Prashant Dayama" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                            </div>
                            <h3 className="text-xl font-bold text-navy-900 group-hover:text-openbi-green transition-colors uppercase tracking-tight">Prashant Dayama</h3>
                            <p className="text-openbi-green font-bold text-xs uppercase tracking-widest mb-4">Chartered Accountant</p>
                            <p className="text-ink-500 text-sm leading-relaxed px-4">
                                Chartered Accountant with 9+ years of experience in internal/management audits, risk advisory, and MIS reporting. Leads audit and risk assessment projects across various sectors.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Team & Certifications */}
                <div className="bg-navy-900 rounded-3xl p-10 text-white flex flex-wrap items-center justify-between gap-8 shadow-2xl">
                    <div className="flex-1 min-w-[300px]">
                        <h3 className="text-2xl font-bold mb-4">A Team of 36 Dedicated Experts</h3>
                        <p className="text-white/70 text-sm">
                            Powered by 8 senior specialists and 28 Power BI engineers delivering complex intelligence solutions across 15+ industries.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-8 items-center">
                        <div className="text-center">
                            <div className="text-3xl font-black text-openbi-green mb-1">150+</div>
                            <div className="text-[10px] uppercase font-bold text-white/40 tracking-widest">Projects Live</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-black text-openbi-green mb-1">50Y</div>
                            <div className="text-[10px] uppercase font-bold text-white/40 tracking-widest">Financial Legacy</div>
                        </div>
                        <div className="flex gap-4 border-l border-white/10 pl-8">
                            <div className="w-12 h-12 bg-white/5 rounded flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
                                <span className="text-[10px] font-bold">DA-100</span>
                            </div>
                            <div className="w-12 h-12 bg-white/5 rounded flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
                                <span className="text-[10px] font-bold">AZ-900</span>
                            </div>
                        </div>
                    </div>
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
