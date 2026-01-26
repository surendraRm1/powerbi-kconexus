import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";
import { LucideMail, LucideMapPin, LucideClock } from "lucide-react";

export default function ContactPage() {
    return (
        <Section
            eyebrow="Get in touch"
            title="Contact KCONexus"
            subtitle="Let’s discuss your data challenges. Send us your requirement and our lead consultant will respond shortly."
        >
            <div className="grid gap-12 md:grid-cols-3">
                <div className="md:col-span-1 space-y-6">
                    <div className="card-openbi">
                        <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                            <span className="w-1.5 h-6 bg-openbi-green rounded-full" />
                            Contact Details
                        </h3>
                        <ul className="space-y-6">
                            <li className="flex gap-4">
                                <div className="shrink-0 w-10 h-10 bg-gray-50 rounded flex items-center justify-center text-openbi-green">
                                    <LucideMapPin size={20} />
                                </div>
                                <div className="text-sm">
                                    <p className="font-bold text-navy-900 mb-1">Our Office</p>
                                    <p className="text-ink-500 leading-relaxed">{site.address}</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="shrink-0 w-10 h-10 bg-gray-50 rounded flex items-center justify-center text-openbi-green">
                                    <LucideMail size={20} />
                                </div>
                                <div className="text-sm">
                                    <p className="font-bold text-navy-900 mb-1">Email Us</p>
                                    <a href={`mailto:${site.email}`} className="text-ink-500 hover:text-openbi-green transition-colors">{site.email}</a>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="shrink-0 w-10 h-10 bg-gray-50 rounded flex items-center justify-center text-openbi-green">
                                    <LucideClock size={20} />
                                </div>
                                <div className="text-sm">
                                    <p className="font-bold text-navy-900 mb-1">Business Hours</p>
                                    <p className="text-ink-500">Mon - Fri: 9:00 AM - 6:00 PM</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="p-6 rounded-2xl bg-navy-50 border border-navy-100 flex items-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-openbi-green animate-pulse" />
                        <p className="text-xs font-bold text-navy-900 uppercase tracking-widest">
                            We Typically Respond in 24 Hours
                        </p>
                    </div>
                </div>

                <div className="md:col-span-2 rounded-3xl border bg-white p-10 shadow-lg">
                    <h3 className="text-2xl font-bold mb-2">Send an Inquiry</h3>
                    <p className="text-sm text-ink-500 mb-8">
                        Provide a brief overview of your project or specific need.
                    </p>
                    <ContactForm />
                </div>
            </div>
        </Section>
    );
}
