import Section from "@/components/Section";
import ServiceCards from "@/components/ServiceCards";
import Link from "next/link";

export default function ServicesPage() {
    return (
        <div className="pt-20">
            {/* Hero Area */}
            <header className="hero-gradient py-24 text-white text-center">
                <div className="container-pad">
                    <div className="mb-4 text-xs font-black text-openbi-green uppercase tracking-[0.3em] flex items-center justify-center gap-2">
                        <Link href="/" className="hover:text-white transition-colors">HOME</Link>
                        <span>/</span>
                        <span>SERVICES</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black mb-6 uppercase">Our Expertise</h1>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-medium">
                        Comprehensive data and analytics services to transform your organizational intelligence.
                    </p>
                </div>
            </header>

            <Section>
                <ServiceCards />
            </Section>

            {/* CTA */}
            <Section center className="bg-navy-900 text-white">
                <h2 className="text-3xl font-black text-white mb-6 uppercase">Ready to transform your data?</h2>
                <p className="text-white/60 mb-10 max-w-2xl mx-auto font-medium">
                    Schedule a free consultation with our lead experts to discuss your data integration and automation strategy.
                </p>
                <Link href="/contact" className="btn-green px-10 py-4 text-lg">
                    Book a Consultation
                </Link>
            </Section>
        </div>
    );
}
