import Section from "@/components/Section";
import { solutionsData, allSolutions } from "@/lib/content";
import { notFound } from "next/navigation";
import { LucideCheckCircle2 } from "lucide-react";
import Link from "next/link";

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const data = solutionsData[slug] || {
        title: slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
        heroSubtitle: `Maximize your ${slug.replace("-", " ")} efficiency with specialized Power BI implementation.`,
        intro: `Our ${slug.replace("-", " ")} solution is designed to tackle industry-specific data challenges and drive measurable results.`,
        features: [
            { title: "Real-time Monitoring", desc: "Track key metrics as they happen with automated data refreshes." },
            { title: "Strategic Insights", desc: "Uncover hidden patterns in your data to inform long-term planning." },
            { title: "Operational Excellence", desc: "Streamline workflows and reduce manual reporting overhead." },
            { title: "Collaborative Analytics", desc: "Share insights across teams with governed and secure dashboards." },
        ]
    };

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <header
                className={`py-24 text-white text-center relative overflow-hidden ${!data.backgroundImg ? 'hero-gradient' : 'bg-navy-950'}`}
            >
                {data.backgroundImg && (
                    <>
                        <img
                            src={data.backgroundImg}
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover z-0"
                        />
                        <div className="absolute inset-0 bg-navy-900/80 z-0" />
                    </>
                )}

                <div className="container-pad relative z-10">
                    <div className="mb-4 text-xs font-bold text-openbi-green uppercase tracking-widest flex items-center justify-center gap-2">
                        <Link href="/" className="hover:text-white transition-colors">HOME</Link>
                        <span>/</span>
                        <span>SOLUTIONS</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 uppercase">{data.title}</h1>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
                        {data.heroSubtitle}
                    </p>
                </div>
            </header>

            {/* Intro Section */}
            <Section>
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-lg md:text-xl text-ink-500 leading-relaxed italic border-l-4 border-openbi-green pl-6 py-2 text-left">
                        {data.intro}
                    </p>
                </div>
            </Section>

            {/* Features (Icon Cards) */}
            <Section className="bg-surface-50">
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {data.features.map((f: any, i: number) => (
                        <div key={i} className="card-openbi flex gap-6 items-start">
                            <div className="shrink-0 w-12 h-12 bg-navy-50 rounded-full flex items-center justify-center text-openbi-green">
                                <LucideCheckCircle2 size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                                <p className="text-sm text-ink-500 leading-relaxed">{f.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* CTA Section */}
            <Section center className="bg-navy-900 text-white">
                <h2 className="text-3xl font-bold text-white mb-6">Experience the power of {data.title}</h2>
                <p className="text-white/60 mb-10 max-w-2xl mx-auto">
                    Get in touch with our experts to see a live demo of how we can transform your data into a competitive advantage.
                </p>
                <Link href="/contact" className="btn-green px-10 py-3 text-lg">
                    Speak with an Expert
                </Link>
            </Section>
        </div>
    );
}
