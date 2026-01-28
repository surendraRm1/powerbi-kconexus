import Section from "@/components/Section";
import { servicesData } from "@/lib/content";
import { LucideShieldCheck } from "lucide-react";
import Link from "next/link";

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const data = servicesData[slug] || {
        title: slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
        desc: `Industry-leading ${slug.replace("-", " ")} services to empower your data journey.`,
        img: "/assets/hero-ai.png",
        benefits: ["Custom data architectures", "Continuous monitoring", "Advanced security", "Performance optimization"]
    };

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <header
                className={`text-white text-center relative overflow-hidden ${!data.backgroundImg ? 'hero-gradient py-24' : 'py-40 md:py-56 bg-navy-950'}`}
            >
                {data.backgroundImg && (
                    <>
                        <img
                            src={data.backgroundImg}
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover object-[center_20%] z-0"
                        />
                        <div className="absolute inset-0 bg-navy-900/70 z-0" />
                    </>
                )}
                <div className="container-pad relative z-10">
                    <div className="mb-4 text-xs font-black text-openbi-green uppercase tracking-[0.3em] flex items-center justify-center gap-2">
                        <Link href="/" className="hover:text-white transition-colors">HOME</Link>
                        <span>/</span>
                        <span>SERVICES</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight">{data.title}</h1>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-medium">
                        {data.desc}
                    </p>
                </div>
            </header>

            <Section>
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-black mb-6 uppercase text-navy-900">{data.title} Methodology</h2>
                        <p className="text-ink-500 mb-8 leading-relaxed font-medium">
                            Our {data.title.toLowerCase()} approach follows global best practices to ensure your
                            organization has the most reliable and efficient analytics foundation. We focus on scalability, security, and actionable insights.
                        </p>
                        <ul className="space-y-4">
                            {data.benefits.map((item: string) => (
                                <li key={item} className="flex items-center gap-4 text-sm font-black text-navy-900">
                                    <div className="w-6 h-6 rounded-full bg-openbi-green/10 flex items-center justify-center">
                                        <LucideShieldCheck className="text-openbi-green" size={16} />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group">
                        <img
                            src={data.img}
                            alt={`${data.title} Preview`}
                            className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                </div>
            </Section>

            <Section center className="bg-navy-900 text-white">
                <h2 className="text-3xl font-black text-white mb-6 uppercase">Ready to optimize your {data.title.toLowerCase()}?</h2>
                <p className="text-white/60 mb-10 max-w-2xl mx-auto font-medium">
                    Our lead consultants are ready to help you architect a data strategy that drives measurable growth and operational efficiency.
                </p>
                <Link href="/contact" className="btn-green px-10 py-4 text-lg">
                    Contact Our Team
                </Link>
            </Section>
        </div>
    );
}
