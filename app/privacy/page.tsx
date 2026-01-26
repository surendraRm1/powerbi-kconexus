import Section from "@/components/Section";
import { site } from "@/lib/site";

export default function PrivacyPolicyPage() {
    return (
        <Section
            eyebrow="Privacy"
            title="Privacy Policy"
            subtitle="How KCONexus uses information submitted through this website."
        >
            <div className="rounded-3xl border bg-white p-8 text-sm text-ink-700 space-y-4">
                <p>
                    This Privacy Policy explains how {site.name} collects and uses
                    information submitted through our website forms.
                </p>

                <h3 className="text-base font-semibold">Information we collect</h3>
                <p>
                    When you submit forms, we may collect your name, email, phone number,
                    company name, and any message you provide.
                </p>

                <h3 className="text-base font-semibold">How we use information</h3>
                <p>
                    We use your information to respond to inquiries, provide requested
                    information, and process job applications.
                </p>

                <h3 className="text-base font-semibold">Sharing</h3>
                <p>
                    We do not sell your personal information. We may use third-party email
                    providers (SMTP) to deliver emails from our website.
                </p>

                <h3 className="text-base font-semibold">Contact</h3>
                <p>
                    Email:{" "}
                    <a
                        className="font-semibold text-openbi-green hover:opacity-80"
                        href={`mailto:${site.email}`}
                    >
                        {site.email}
                    </a>
                    <br />
                    Address: {site.address}
                </p>
            </div>
        </Section>
    );
}
