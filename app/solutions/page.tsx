import Section from "@/components/Section";
import SolutionsGrid from "@/components/SolutionsGrid";
import Link from "next/link";

export default function SolutionsPage() {
    return (
        <div className="pt-20">
            {/* Hero Area */}
            <header className="hero-gradient py-24 text-white text-center">
                <div className="container-pad">
                    <div className="mb-4 text-xs font-black text-openbi-green uppercase tracking-[0.3em] flex items-center justify-center gap-2">
                        <Link href="/" className="hover:text-white transition-colors">HOME</Link>
                        <span>/</span>
                        <span>SOLUTIONS</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black mb-6 uppercase">Solution Accelerators</h1>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-medium">
                        High-revenue, industry-proven frameworks tailored for the Indian market—from statutory compliance to operational excellence.
                    </p>
                </div>
            </header>

            <Section>
                <SolutionsGrid />
            </Section>

            {/* CTA */}
            <Section center className="bg-navy-900 text-white">
                <h2 className="text-3xl font-black text-white mb-6 uppercase">Need a custom solution?</h2>
                <p className="text-white/60 mb-10 max-w-2xl mx-auto font-medium">
                    Our team specializes in building bespoke analytics environments tailored to unique organization needs.
                </p>
                <Link href="/contact" className="btn-green px-10 py-4 text-lg">
                    Speak with an Expert
                </Link>
            </Section>
        </div>
    );
}
