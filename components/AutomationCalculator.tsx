"use client"

import { useState } from "react";
import { LucideArrowRight, LucideCheckCircle2, LucideTrendingUp, LucideZap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function AutomationCalculator() {
    const [step, setStep] = useState(1);
    const [hoursPerWeek, setHoursPerWeek] = useState(40);
    const [avgSalary, setAvgSalary] = useState(30000);
    const [teamSize, setTeamSize] = useState(5);

    // Calculate savings (60-70% reduction, using 65% as average)
    const reductionPercentage = 65;
    const hoursAfter = Math.round(hoursPerWeek * (1 - reductionPercentage / 100));
    const hoursSaved = hoursPerWeek - hoursAfter;
    const hoursPerMonth = hoursSaved * 4;

    // Financial ROI calculation
    const hourlyRate = avgSalary / (52 * 40);
    const annualMoneySaved = Math.round(teamSize * hoursSaved * 52 * hourlyRate);

    const handleNext = () => {
        if (step < 3) setStep(step + 1);
    };

    const handleReset = () => {
        setStep(1);
        setHoursPerWeek(40);
        setAvgSalary(30000);
        setTeamSize(5);
    };

    return (
        <div className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            {/* Progress Indicator */}
            <div className="flex items-center justify-center gap-2 mb-8">
                {[1, 2, 3].map((s) => (
                    <div
                        key={s}
                        className={`h-2 rounded-full transition-all ${s === step ? "w-12 bg-openbi-green" : s < step ? "w-8 bg-openbi-green/50" : "w-8 bg-white/20"
                            }`}
                    />
                ))}
            </div>

            <AnimatePresence mode="wait">
                {/* Step 1: Manual Operational Work */}
                {step === 1 && (
                    <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-8"
                    >
                        <div className="text-center">
                            <h3 className="text-3xl md:text-4xl font-bold mb-4">
                                How much manual work happens every week?
                            </h3>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <div className="flex justify-between items-end mb-4">
                                    <div className="text-white font-bold">Team Hours Per Week</div>
                                    <div className="text-4xl font-black text-openbi-green">{hoursPerWeek}h</div>
                                </div>
                                <div className="space-y-2">
                                    <input
                                        type="range" min="10" max="300" step="5" value={hoursPerWeek}
                                        onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                                        className="w-full h-3 bg-white/20 rounded-lg appearance-none cursor-pointer slider accent-openbi-green"
                                    />
                                    <div className="flex justify-between text-xs text-white/50 px-1">
                                        <span>10h</span>
                                        <span>300h</span>
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <div className="flex justify-between items-end mb-4">
                                        <div className="text-white font-bold">Team Size</div>
                                        <div className="text-2xl font-black text-openbi-green">{teamSize}</div>
                                    </div>
                                    <input
                                        type="range" min="1" max="50" value={teamSize}
                                        onChange={(e) => setTeamSize(Number(e.target.value))}
                                        className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-openbi-green"
                                    />
                                </div>
                                <div>
                                    <div className="flex justify-between items-end mb-4">
                                        <div className="text-white font-bold">Avg. Salary</div>
                                        <div className="text-2xl font-black text-openbi-green">${(avgSalary / 1000).toFixed(0)}k</div>
                                    </div>
                                    <input
                                        type="range" min="10000" max="150000" step="5000" value={avgSalary}
                                        onChange={(e) => setAvgSalary(Number(e.target.value))}
                                        className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-openbi-green"
                                    />
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={handleNext}
                            className="w-full bg-openbi-green text-navy-900 font-black py-5 rounded-xl hover:bg-openbi-green/90 transition-all flex items-center justify-center gap-2 text-lg shadow-xl shadow-openbi-green/10"
                        >
                            Next Step
                            <LucideArrowRight size={20} />
                        </button>
                    </motion.div>
                )}

                {/* Step 2: After Automation */}
                {step === 2 && (
                    <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-8"
                    >
                        <div className="text-center">
                            <h3 className="text-3xl md:text-4xl font-bold mb-4">
                                After Automation
                            </h3>
                            <p className="text-white/70 text-sm">
                                Typical reduction: 60–70% using RPA & workflow automation
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Before */}
                            <div className="bg-white/10 rounded-2xl p-6 border-2 border-red-400/30">
                                <div className="text-sm text-white/60 mb-2 uppercase tracking-wider font-bold">Before</div>
                                <div className="text-5xl font-black text-red-400 mb-1">{hoursPerWeek}</div>
                                <div className="text-white/80">hrs/week</div>
                            </div>

                            {/* After */}
                            <div className="bg-openbi-green/20 rounded-2xl p-6 border-2 border-openbi-green">
                                <div className="text-sm text-white/60 mb-2 uppercase tracking-wider font-bold">After</div>
                                <div className="text-5xl font-black text-openbi-green mb-1">{hoursAfter}</div>
                                <div className="text-white/80">hrs/week</div>
                            </div>
                        </div>

                        <div className="text-center bg-white/10 rounded-xl p-4">
                            <div className="flex items-center justify-center gap-2 text-openbi-green font-bold">
                                <LucideZap size={24} />
                                <span className="text-2xl">{reductionPercentage}% Effort Reduction</span>
                            </div>
                        </div>

                        <button
                            onClick={handleNext}
                            className="w-full bg-openbi-green text-navy-900 font-black py-5 rounded-xl hover:bg-openbi-green/90 transition-all flex items-center justify-center gap-2 text-lg"
                        >
                            See Your ROI
                            <LucideArrowRight size={20} />
                        </button>
                    </motion.div>
                )}

                {/* Step 3: Results */}
                {step === 3 && (
                    <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-8"
                    >
                        <div className="text-center">
                            <div className="inline-flex items-center gap-2 bg-openbi-green/20 border border-openbi-green rounded-full px-6 py-2 mb-6">
                                <LucideCheckCircle2 className="text-openbi-green" size={20} />
                                <span className="text-sm font-bold text-openbi-green uppercase tracking-wider">
                                    Annual Cost Recovery
                                </span>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8 mb-8">
                                <div className="bg-white/5 rounded-2xl p-8 border border-white/10 text-center">
                                    <div className="text-5xl font-black text-openbi-green mb-2">${annualMoneySaved.toLocaleString()}</div>
                                    <div className="text-white/40 text-xs uppercase tracking-widest font-black">Annual Savings</div>
                                </div>
                                <div className="bg-white/5 rounded-2xl p-8 border border-white/10 text-center">
                                    <div className="text-5xl font-black text-openbi-green mb-2">{hoursSaved}h</div>
                                    <div className="text-white/40 text-xs uppercase tracking-widest font-black">Weekly Recovery</div>
                                </div>
                            </div>

                            <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
                                You recover <strong className="text-openbi-green">{hoursPerMonth} hours/month</strong>. That's a financial gain of <strong className="text-openbi-green">${annualMoneySaved.toLocaleString()}</strong> every single year.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <Link
                                href="/contact"
                                className="block w-full bg-openbi-green text-navy-900 font-black py-5 rounded-xl hover:bg-openbi-green/90 transition-all text-center text-lg shadow-xl shadow-openbi-green/20"
                            >
                                Book Automation Preparation
                            </Link>
                        </div>

                        <button
                            onClick={handleReset}
                            className="w-full text-white/60 hover:text-white transition-colors text-sm underline font-bold"
                        >
                            Calculate Again
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
