"use client";

import { useState } from "react";
import { LucideSend, LucideCheckCircle, LucideLoader2, LucideFileText } from "lucide-react";

export default function JobApplicationForm() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        resumeUrl: "",
        message: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const res = await fetch("/api/contact", { // Reusing the contact API or we can create a specific one
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...formData,
                    company: "CAREER APPLICATION", // Marker for backend
                    designation: "Applicant",
                }),
            });

            if (res.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", phone: "", resumeUrl: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <div className="text-center py-10 space-y-4">
                <div className="flex justify-center">
                    <LucideCheckCircle className="text-openbi-green" size={64} />
                </div>
                <h3 className="text-2xl font-bold text-navy-900">Application Submitted!</h3>
                <p className="text-gray-500 text-sm">Thank you for your interest in KCONexus. Our recruitment team will review your profile and reach out shortly.</p>
                <button
                    onClick={() => setStatus("idle")}
                    className="text-openbi-green font-bold hover:underline"
                >
                    Submit another application
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Full Name *</label>
                <input
                    required
                    className="w-full border border-gray-200 rounded-xl p-3 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-openbi-green/20 focus:border-openbi-green transition-all outline-none"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
            </div>
            <div className="space-y-1">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Email Address *</label>
                <input
                    required
                    type="email"
                    className="w-full border border-gray-200 rounded-xl p-3 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-openbi-green/20 focus:border-openbi-green transition-all outline-none"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
            </div>
            <div className="space-y-1">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Phone Number *</label>
                <input
                    required
                    type="tel"
                    className="w-full border border-gray-200 rounded-xl p-3 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-openbi-green/20 focus:border-openbi-green transition-all outline-none"
                    placeholder="+91 00000 00000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
            </div>
            <div className="space-y-1">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Resume Link (e.g. Google Drive/LinkedIn)</label>
                <input
                    className="w-full border border-gray-200 rounded-xl p-3 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-openbi-green/20 focus:border-openbi-green transition-all outline-none"
                    placeholder="https://drive.google.com/..."
                    value={formData.resumeUrl}
                    onChange={(e) => setFormData({ ...formData, resumeUrl: e.target.value })}
                />
            </div>
            <div className="space-y-1">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Cover Note</label>
                <textarea
                    rows={3}
                    className="w-full border border-gray-200 rounded-xl p-3 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-openbi-green/20 focus:border-openbi-green transition-all outline-none"
                    placeholder="Why do you want to join KCONexus?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
            </div>

            <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-navy-900 text-white px-6 py-4 rounded-xl font-bold hover:bg-navy-800 transition-all flex items-center justify-center gap-3 shadow-lg disabled:opacity-70"
            >
                {status === "loading" ? (
                    <>
                        <LucideLoader2 className="animate-spin" size={20} />
                        Submitting...
                    </>
                ) : (
                    <>
                        <LucideFileText size={20} />
                        Submit Application
                    </>
                )}
            </button>

            {status === "error" && (
                <p className="text-red-500 text-xs text-center font-bold">
                    Something went wrong. Please try again later.
                </p>
            )}
        </form>
    );
}
