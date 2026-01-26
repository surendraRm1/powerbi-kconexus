"use client";

import { useState } from "react";
import { LucideSend, LucideCheckCircle, LucideLoader2 } from "lucide-react";

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        company: "",
        designation: "",
        message: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", mobile: "", company: "", designation: "", message: "" });
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
                <h3 className="text-2xl font-bold text-navy-900">Message Sent!</h3>
                <p className="text-gray-500">Thank you for reaching out. Our lead consultant will contact you shortly.</p>
                <button
                    onClick={() => setStatus("idle")}
                    className="text-openbi-green font-bold hover:underline"
                >
                    Send another message
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Full Name *</label>
                    <input
                        required
                        className="w-full border border-gray-200 rounded-xl p-4 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-openbi-green/20 focus:border-openbi-green transition-all outline-none"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                </div>
                <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Work Email *</label>
                    <input
                        required
                        type="email"
                        className="w-full border border-gray-200 rounded-xl p-4 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-openbi-green/20 focus:border-openbi-green transition-all outline-none"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Mobile Number *</label>
                    <input
                        required
                        type="tel"
                        className="w-full border border-gray-200 rounded-xl p-4 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-openbi-green/20 focus:border-openbi-green transition-all outline-none"
                        placeholder="+91 00000 00000"
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    />
                </div>
                <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Company Name *</label>
                    <input
                        required
                        className="w-full border border-gray-200 rounded-xl p-4 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-openbi-green/20 focus:border-openbi-green transition-all outline-none"
                        placeholder="Acme Inc."
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                </div>
            </div>

            <div className="space-y-1">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Designation</label>
                <input
                    className="w-full border border-gray-200 rounded-xl p-4 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-openbi-green/20 focus:border-openbi-green transition-all outline-none"
                    placeholder="E.g. Director of Analytics"
                    value={formData.designation}
                    onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                />
            </div>

            <div className="space-y-1">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">How can we help? *</label>
                <textarea
                    required
                    rows={4}
                    className="w-full border border-gray-200 rounded-xl p-4 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-openbi-green/20 focus:border-openbi-green transition-all outline-none"
                    placeholder="Tell us about your data challenges..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
            </div>

            <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-navy-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-navy-800 transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-xl disabled:opacity-70"
            >
                {status === "loading" ? (
                    <>
                        <LucideLoader2 className="animate-spin" size={20} />
                        Processing...
                    </>
                ) : (
                    <>
                        <LucideSend size={20} />
                        Get Started Today
                    </>
                )}
            </button>

            {status === "error" && (
                <p className="text-red-500 text-sm text-center font-bold">
                    Something went wrong. Please try again later.
                </p>
            )}
        </form>
    );
}
