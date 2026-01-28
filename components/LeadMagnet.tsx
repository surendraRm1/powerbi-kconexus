"use client"

import { useState } from "react";
import { LucideDownload, LucideCheckCircle2, LucideMail } from "lucide-react";
import Image from "next/image";

export default function LeadMagnet() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

    const handleDownload = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            // Send email to backend for tracking
            await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: "Lead Magnet Download",
                    email: email,
                    mobile: "",
                    company: "",
                    designation: "",
                    message: "Downloaded: 2026 MIS Checklist PDF",
                }),
            });

            // Trigger download
            const link = document.createElement('a');
            link.href = '/assets/2026-mis-checklist.png';
            link.download = '2026-MIS-Checklist-KCONexus.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            setStatus("success");
        } catch (error) {
            // Still allow download even if tracking fails
            const link = document.createElement('a');
            link.href = '/assets/2026-mis-checklist.png';
            link.download = '2026-MIS-Checklist-KCONexus.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            setStatus("success");
        }
    };

    if (status === "success") {
        return (
            <div className="bg-gradient-to-br from-openbi-green/10 to-blue-50 rounded-3xl p-10 text-center">
                <div className="flex justify-center mb-6">
                    <LucideCheckCircle2 className="text-openbi-green" size={64} />
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4">
                    Download Started!
                </h3>
                <p className="text-ink-500 mb-6">
                    Your 2026 MIS Checklist is downloading now. Check your downloads folder.
                </p>
                <p className="text-sm text-ink-500">
                    We'll also send you additional automation insights to <strong>{email}</strong>
                </p>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
            <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* Preview Image */}
                <div className="order-2 md:order-1">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-navy-900">
                        <Image
                            src="/assets/2026-mis-checklist.png"
                            alt="2026 MIS Checklist Preview"
                            width={600}
                            height={800}
                            className="w-full h-auto"
                        />
                    </div>
                </div>

                {/* Form */}
                <div className="order-1 md:order-2">
                    <div className="inline-flex items-center gap-2 bg-openbi-green/10 border border-openbi-green/20 rounded-full px-4 py-2 mb-6">
                        <LucideDownload className="text-openbi-green" size={18} />
                        <span className="text-sm font-bold text-openbi-green uppercase tracking-wider">
                            Checklist Download
                        </span>
                    </div>

                    <h3 className="text-3xl font-bold text-navy-900 mb-4">
                        2026 MIS Checklist
                    </h3>
                    <p className="text-lg text-ink-500 mb-6">
                        5 Signs Your Business Is Ready for Automation
                    </p>

                    <ul className="space-y-3 mb-8">
                        <li className="flex items-start gap-3">
                            <LucideCheckCircle2 className="text-openbi-green shrink-0 mt-0.5" size={20} />
                            <span className="text-ink-500">Identify automation opportunities in your business</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <LucideCheckCircle2 className="text-openbi-green shrink-0 mt-0.5" size={20} />
                            <span className="text-ink-500">Assess your current MIS maturity level</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <LucideCheckCircle2 className="text-openbi-green shrink-0 mt-0.5" size={20} />
                            <span className="text-ink-500">Get actionable next steps for automation</span>
                        </li>
                    </ul>

                    <form onSubmit={handleDownload} className="space-y-4">
                        <div>
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1 mb-2 block">
                                Work Email *
                            </label>
                            <div className="relative">
                                <LucideMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    required
                                    type="email"
                                    className="w-full border border-gray-200 rounded-xl p-4 pl-12 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-openbi-green/20 focus:border-openbi-green transition-all outline-none"
                                    placeholder="you@company.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={status === "loading"}
                            className="btn-green w-full text-lg py-4 flex items-center justify-center gap-3"
                        >
                            <LucideDownload size={20} />
                            {status === "loading" ? "Processing..." : "Download MIS Checklist"}
                        </button>

                        <p className="text-xs text-center text-gray-500">
                            No spam. Just helpful automation insights.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
