import Section from "@/components/Section";
import JobApplicationForm from "@/components/JobApplicationForm";

export default function CareersPage() {
    return (
        <Section
            eyebrow="Join the team"
            title="We’re looking for data-obsessed talent."
            subtitle="At KCONexus, we value ownership, clarity, and delivery. We’re building a world-class team of Power BI and data engineering experts."
        >
            <div className="grid gap-12 md:grid-cols-2">
                <div className="space-y-6">

                    <div className="p-8 rounded-3xl bg-surface-50 border mt-12">
                        <h4 className="font-bold text-navy-900 mb-2">Don't see a fit?</h4>
                        <p className="text-sm text-ink-500 mb-4">
                            We're always looking for talented individuals to join our network.
                            Send your resume and we'll keep you in mind for future roles.
                        </p>
                        <p className="text-xs font-bold text-navy-900/40 italic">
                            * LinkedIn field is intentionally excluded as requested.
                        </p>
                    </div>
                </div>

                <div className="rounded-3xl border bg-white p-10 shadow-lg self-start">
                    <h3 className="text-2xl font-bold mb-2">Apply Online</h3>
                    <p className="text-sm text-ink-500 mb-8">
                        Submit your professional details and our HR team will reach out by email.
                    </p>
                    <JobApplicationForm />
                </div>
            </div>
        </Section>
    );
}
