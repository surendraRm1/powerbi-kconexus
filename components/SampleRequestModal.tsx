"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LucideX, LucideLoader2, LucideCheckCircle } from "lucide-react";

interface SampleRequestModalProps {
    isOpen: boolean;
    onClose: () => void;
    sampleTitle: string;
}

export default function SampleRequestModal({ isOpen, onClose, sampleTitle }: SampleRequestModalProps) {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        phone: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...formData,
                    designation: "Sample Requester",
                    message: `Requested access to sample: ${sampleTitle}`,
                }),
            });

            if (res.ok) {
                setStatus("success");
                // Reset form after success delay or just stay on success screen
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-navy-900/80 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="relative w-full max-w-lg bg-white rounded-[32px] shadow-2xl overflow-hidden"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 text-gray-400 hover:text-navy-900 transition-colors z-10"
                        >
                            <LucideX size={24} />
                        </button>

                        <div className="p-8 md:p-12">
                            {status === "success" ? (
                                <div className="text-center py-10 space-y-4">
                                    <div className="flex justify-center">
                                        <LucideCheckCircle className="text-openbi-green" size={64} />
                                    </div>
                                    <h3 className="text-2xl font-black text-navy-900 uppercase">Access Granted!</h3>
                                    <p className="text-gray-500 font-medium">Thank you for your interest. A link to the **{sampleTitle}** has been sent to your email.</p>
                                    <button
                                        onClick={onClose}
                                        className="btn-green px-8 py-3 mt-4"
                                    >
                                        Close
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <h2 className="text-2xl font-black text-navy-900 mb-2 uppercase leading-tight">Fill the Form</h2>
                                    <p className="text-sm text-gray-500 font-medium mb-8">
                                        Please provide your details to access the <span className="text-openbi-green font-bold">{sampleTitle}</span>.
                                    </p>

                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div className="space-y-1">
                                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Name *</label>
                                            <input
                                                required
                                                className="w-full border border-gray-100 rounded-2xl p-4 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-openbi-green/20 focus:border-openbi-green transition-all outline-none font-medium"
                                                placeholder="Enter your name"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Email *</label>
                                            <input
                                                required
                                                type="email"
                                                className="w-full border border-gray-100 rounded-2xl p-4 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-openbi-green/20 focus:border-openbi-green transition-all outline-none font-medium"
                                                placeholder="Enter your email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Company Name *</label>
                                            <input
                                                required
                                                className="w-full border border-gray-100 rounded-2xl p-4 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-openbi-green/20 focus:border-openbi-green transition-all outline-none font-medium"
                                                placeholder="Enter your company"
                                                value={formData.company}
                                                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Phone (Optional)</label>
                                            <input
                                                type="tel"
                                                className="w-full border border-gray-100 rounded-2xl p-4 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-openbi-green/20 focus:border-openbi-green transition-all outline-none font-medium"
                                                placeholder="Enter your phone"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={status === "loading"}
                                            className="w-full bg-navy-900 text-white px-6 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-navy-800 transition-all flex items-center justify-center gap-3 shadow-xl disabled:opacity-70 mt-4"
                                        >
                                            {status === "loading" ? (
                                                <>
                                                    <LucideLoader2 className="animate-spin" size={20} />
                                                    Processing...
                                                </>
                                            ) : (
                                                "Submit"
                                            )}
                                        </button>

                                        {status === "error" && (
                                            <p className="text-red-500 text-[10px] text-center font-black uppercase tracking-widest">
                                                Submission failed. Please try again.
                                            </p>
                                        )}
                                    </form>
                                </>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
