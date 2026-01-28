import Section from "@/components/Section";
import { LucideCheckCircle2, LucideTrendingUp, LucideTarget, LucideAward } from "lucide-react";
import IndustryLogos from "@/components/IndustryLogos";
import Testimonials from "@/components/Testimonials";

const successStories = [
    {
        id: 1,
        company: "Global Manufacturing Company",
        industry: "Manufacturing",
        situation: "Finance team was spending 20 days per month manually consolidating data from SAP, Oracle, and legacy systems into Excel for monthly board reports. The process involved multiple team members, version control issues, and frequent last-minute corrections before board meetings.",
        task: "Automate the monthly MIS reporting process and create a real-time executive dashboard that pulls data directly from all three ERP systems, eliminating manual data compilation.",
        action: "Implemented Power BI with automated data refresh schedules, built custom ETL pipelines using Python to extract and transform data from heterogeneous sources, and designed executive dashboards with drill-down capabilities. Established data validation rules and governance frameworks to ensure accuracy.",
        result: [
            "Reduced monthly reporting time from 20 days to 3 days (85% reduction)",
            "Automated 80% of standard reports, saving 125 hours per BI user annually",
            "Achieved 366% ROI over three years with payback in 8 months",
            "Board members gained 24/7 access to real-time financial metrics",
            "Reallocated 8 FTE employees to strategic analysis work",
        ],
        label: "Based on industry case study - to be replaced with KCONexus client story",
    },
    {
        id: 2,
        company: "Healthcare Services Provider",
        industry: "Healthcare",
        situation: "Invoice processing was entirely manual with staff extracting data from PDF invoices, entering into the accounting system, and routing for approvals. The process took 15+ hours per week with a 15% error rate, causing payment delays and vendor relationship issues.",
        task: "Implement end-to-end invoice automation from receipt to payment approval, eliminating manual data entry and reducing error rates.",
        action: "Deployed UiPath RPA bots with OCR technology to extract invoice data, validate against purchase orders, and automatically route for approval based on business rules. Integrated with existing accounting system for seamless posting. Built exception handling workflows for non-standard invoices.",
        result: [
            "Automated 80% of invoice processing, saving 2,500 manual hours monthly",
            "Reduced invoice backlog from 5 days to under 3 hours",
            "Error rate decreased from 15% to 0.5% (95% improvement)",
            "Invoice approval cycle reduced from 7 days to 2 days",
            "Achieved over 99% accuracy in automated processing",
            "ROI achieved within 12 months with $133,000 in annual savings",
        ],
        label: "Based on industry case study - to be replaced with KCONexus client story",
    },
    {
        id: 3,
        company: "Professional Services Consulting Firm",
        industry: "Professional Services",
        situation: "Creating client proposals was a time-intensive manual process taking 4-6 hours per proposal. Staff had to pull client information from CRM, manually populate templates, adjust pricing, apply branding, and send via email. This limited the number of proposals the team could generate and slowed response times to client requests.",
        task: "Automate proposal generation to enable same-day delivery and increase proposal volume without adding headcount.",
        action: "Built an automated proposal system that pulls client data from CRM, generates proposals from templates with dynamic content, applies consistent branding, calculates pricing based on service type and scope, and automatically sends proposals via email with tracking.",
        result: [
            "Reduced proposal generation time from 4-6 hours to 30 minutes (90% reduction)",
            "Enabled same-day proposal delivery to clients",
            "Increased proposals sent by 50% without additional staff",
            "Improved proposal consistency and branding compliance",
            "Freed up consultants to focus on client strategy instead of document creation",
        ],
        label: "Based on industry case study - to be replaced with KCONexus client story",
    },
];

export default function SuccessStoriesPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative hero-gradient overflow-hidden pt-32 pb-24 md:pt-40 md:pb-20">
                <div className="container-pad relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-openbi-green/10 border border-openbi-green/20 rounded-full px-6 py-2 mb-8">
                            <LucideAward className="text-openbi-green" size={20} />
                            <span className="text-sm font-bold text-openbi-green uppercase tracking-wider">
                                Client Success Stories
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                            Real Results.<br />
                            <span className="text-openbi-green">Real Impact.</span>
                        </h1>

                        <p className="text-xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
                            See how we've helped businesses save time, reduce errors, and accelerate growth through automation and analytics.
                        </p>
                    </div>
                </div>
            </section>

            {/* Success Stories */}
            <Section
                eyebrow="Case Studies"
                title="Transformation Stories"
                subtitle="How we've helped companies achieve measurable outcomes"
                center
            >
                <div className="space-y-12 max-w-5xl mx-auto">
                    {successStories.map((story, index) => (
                        <div key={story.id} className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
                            {/* Placeholder Label */}
                            {story.label && (
                                <div className="inline-block bg-yellow-100 border border-yellow-300 rounded-lg px-4 py-2 mb-6">
                                    <p className="text-xs font-bold text-yellow-800 uppercase tracking-wider">
                                        ⚠️ {story.label}
                                    </p>
                                </div>
                            )}

                            {/* Header */}
                            <div className="flex items-start justify-between mb-8">
                                <div>
                                    <h3 className="text-2xl font-bold text-navy-900 mb-2">
                                        {story.company}
                                    </h3>
                                    <div className="inline-block bg-navy-50 rounded-full px-4 py-1">
                                        <span className="text-sm font-semibold text-navy-900">
                                            {story.industry}
                                        </span>
                                    </div>
                                </div>
                                <div className="text-4xl font-bold text-gray-200">
                                    {String(index + 1).padStart(2, '0')}
                                </div>
                            </div>

                            {/* S-T-A-R Format */}
                            <div className="space-y-6">
                                {/* Situation */}
                                <div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                                            <span className="text-red-600 font-bold text-sm">S</span>
                                        </div>
                                        <h4 className="font-bold text-navy-900">Situation</h4>
                                    </div>
                                    <p className="text-ink-500 pl-10 leading-relaxed">
                                        {story.situation}
                                    </p>
                                </div>

                                {/* Task */}
                                <div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                                            <span className="text-blue-600 font-bold text-sm">T</span>
                                        </div>
                                        <h4 className="font-bold text-navy-900">Task</h4>
                                    </div>
                                    <p className="text-ink-500 pl-10 leading-relaxed">
                                        {story.task}
                                    </p>
                                </div>

                                {/* Action */}
                                <div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                                            <span className="text-purple-600 font-bold text-sm">A</span>
                                        </div>
                                        <h4 className="font-bold text-navy-900">Action</h4>
                                    </div>
                                    <p className="text-ink-500 pl-10 leading-relaxed">
                                        {story.action}
                                    </p>
                                </div>

                                {/* Result */}
                                <div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                                            <span className="text-green-600 font-bold text-sm">R</span>
                                        </div>
                                        <h4 className="font-bold text-navy-900">Result</h4>
                                    </div>
                                    <ul className="space-y-2 pl-10">
                                        {story.result.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <LucideCheckCircle2 className="text-openbi-green shrink-0 mt-0.5" size={20} />
                                                <span className="text-ink-500 leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Industry Logos */}
            <Section className="py-24 bg-surface-50" eyebrow="Trusted By" title="Trusted Across Industries" center>
                <IndustryLogos />
            </Section>

            {/* Testimonials */}
            <Section
                eyebrow="Testimonials"
                title="Trusted by Leaders"
                subtitle="Success stories from companies that transformed their data culture with KCONexus."
                center
                className="bg-white"
            >
                <Testimonials />
            </Section>

            {/* CTA Section */}
            <Section className="bg-navy-900 text-white py-24">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Write Your Success Story?
                    </h2>
                    <p className="text-lg text-white/80 mb-8">
                        Let's discuss how we can help you achieve similar results. Book a free consultation to get started.
                    </p>
                    <a href="/contact" className="btn-green text-lg px-10 py-4">
                        Book Your Free Consultation
                    </a>
                </div>
            </Section>
        </>
    );
}
