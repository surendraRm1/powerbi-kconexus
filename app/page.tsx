import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ServiceCards from "@/components/ServiceCards";
import SolutionsGrid from "@/components/SolutionsGrid";
import ClientsStrip from "@/components/ClientsStrip";
import ResourcesTabs from "@/components/ResourcesTabs";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { LucideCpu, LucideLayers, LucideMapPin, LucideMail } from "lucide-react";
import { site } from "@/lib/site";

export default function HomePage() {
    return (
        <>
            <Hero />


            {/* Digital Transformation Section */}
            <Section
                eyebrow="Digital Transformation"
                title="Accelerating Your Path to Digital Maturity"
                subtitle="At KCONexus, we bridge the gap between complex data and clear action. Specializing in Power BI, Data Science, and BI strategy, we build the frameworks that allow your business to move faster and smarter. We don’t just deliver dashboards; we deliver the clarity you need to thrive in a data-driven market."
            >
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="shrink-0 w-12 h-12 bg-navy-50 rounded flex items-center justify-center">
                                <LucideCpu className="text-navy-900" size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-2">Modern Data Stack</h3>
                                <p className="text-sm text-ink-500">
                                    Leveraging SQL, Python, and Azure Fabric to build future-proof data
                                    architectures that scale with your growth.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="shrink-0 w-12 h-12 bg-navy-50 rounded flex items-center justify-center">
                                <LucideLayers className="text-navy-900" size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-2">Governed Analytics</h3>
                                <p className="text-sm text-ink-500">
                                    Ensuring "one version of the truth" with robust data governance,
                                    security tagging, and documented metrics.
                                </p>
                            </div>
                        </div>
                        <Link href="/about" className="btn-primary inline-block mt-4">
                            Learn More About Us
                        </Link>
                    </div>

                    <div className="rounded-3xl border border-gray-100 overflow-hidden shadow-2xl group relative bg-white">
                        <img
                            src="/assets/test-image.png"
                            alt="Digital Maturity Transformation"
                            className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-navy-900/5 transition-opacity group-hover:opacity-0" />
                    </div>
                </div>
            </Section>

            {/* Services */}
            <Section
                id="services"
                eyebrow="Expertise"
                title="What we do"
                subtitle="End-to-end business intelligence services designed for clarity and speed."
                className="bg-surface-50"
                center
            >
                <ServiceCards />
            </Section>

            {/* Solutions */}
            <Section
                id="solutions"
                eyebrow="Solutions"
                title="Solution Accelerators"
                subtitle="Pre-built frameworks we customize to your specific industry and data requirements."
            >
                <SolutionsGrid />
            </Section>

            {/* Resources / Sample Gallery */}
            <Section
                id="resources"
                eyebrow="Portfolio"
                title="Samples & Insights"
                subtitle="Explore our library of Power BI samples and real-world case studies."
            >
                <ResourcesTabs />
            </Section>

            {/* Power BI Specialized Section */}
            <Section className="bg-navy-900 text-white py-24">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Power BI Specialized Implementation
                    </h2>
                    <p className="text-white/70 text-lg mb-10 leading-relaxed">
                        Our team focuses exclusively on high-performance Power BI implementations.
                        From DAX optimization to premium capacity management, we ensure your
                        dashboards are fast, accurate, and visually compelling.
                    </p>
                    <Link href="/contact" className="btn-green text-lg px-10 py-4">
                        Get started with the experts
                    </Link>
                </div>
            </Section>

            {/* Testimonials */}
            <Section
                eyebrow="Testimonials"
                title="Trusted by Leaders"
                subtitle="Success stories from companies that transformed their data culture with KCONexus."
                center
            >
                <Testimonials />
            </Section>

            {/* Final CTA / Contact */}
            <Section
                id="contact"
                eyebrow="Inquiry"
                title="Ready to transform your data?"
                subtitle="Fill out the form below and our lead consultant will reach out within 24 hours."
                className="bg-surface-50"
            >
                <div className="grid gap-12 md:grid-cols-2">
                    <div className="rounded-3xl border bg-white p-10 shadow-sm self-start">
                        <h3 className="text-2xl font-bold mb-6">Partner with us</h3>
                        <p className="text-ink-500 mb-8 leading-relaxed">
                            Whether you're starting your data journey or looking to optimize an
                            existing implementation, we're here to help you achieve your goals.
                        </p>
                        <ul className="space-y-4 mb-10">
                            <li className="flex items-center gap-3 text-sm font-semibold text-navy-900">
                                <span className="w-1.5 h-1.5 rounded-full bg-openbi-green" />
                                Certified Power BI Experts
                            </li>
                            <li className="flex items-center gap-3 text-sm font-semibold text-navy-900">
                                <span className="w-1.5 h-1.5 rounded-full bg-openbi-green" />
                                Cloud-Native Architectures
                            </li>
                            <li className="flex items-center gap-3 text-sm font-semibold text-navy-900">
                                <span className="w-1.5 h-1.5 rounded-full bg-openbi-green" />
                                Agile Delivery Methodology
                            </li>
                        </ul>

                        <div className="pt-8 border-t border-gray-100 space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-navy-50 flex items-center justify-center shrink-0">
                                    <LucideMapPin className="text-navy-900" size={18} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase mb-1">Office Address</p>
                                    <p className="text-sm font-medium text-navy-900 leading-relaxed">
                                        {site.address}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-navy-50 flex items-center justify-center shrink-0">
                                    <LucideMail className="text-navy-900" size={18} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase mb-1">Email Us</p>
                                    <a href={`mailto:${site.email}`} className="text-sm font-medium text-navy-900 hover:text-openbi-green transition-colors">
                                        {site.email}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-3xl border bg-white p-10 shadow-lg">
                        <ContactForm />
                    </div>
                </div>
            </Section>
        </>
    );
}
