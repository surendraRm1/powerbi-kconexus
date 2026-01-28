"use client"

import { useState } from "react";
import { LucideArrowRight, LucideCheckCircle2, LucideTrendingUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function PowerBICalculator() {
    const [step, setStep] = useState(1);
    const [hoursPerWeek, setHoursPerWeek] = useState(12);
    const [avgSalary, setAvgSalary] = useState(45000);

    // Calculate savings (50-60% reduction, using 58% as average)
    const reductionPercentage = 58;
    const hoursAfter = Math.round(hoursPerWeek * (1 - reductionPercentage / 100));
    const hoursSaved = hoursPerWeek - hoursAfter;
    const hoursPerMonth = hoursSaved * 4;

    // Financial ROI calculation
    const hourlyRate = avgSalary / (52 * 40);
    const annualMoneySaved = Math.round(hoursSaved * 52 * hourlyRate);

    const handleNext = () => {
        if (step < 3) setStep(step + 1);
    };

    const handleReset = () => {
        setStep(1);
        setHoursPerWeek(12);
        setAvgSalary(45000);
    };

    return (
        <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
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
                {/* Step 1: Current Reporting Effort */}
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
                                How much time do you spend on reporting today?
                            </h3>
                        </div>

                        <div className="space-y-10">
                            <div>
                                <div className="flex justify-between items-end mb-4">
                                    <div className="text-white font-bold">Hours Per Week</div>
                                    <div className="text-4xl font-black text-openbi-green">{hoursPerWeek}h</div>
                                </div>
                                <div className="space-y-3">
                                    <input
                                        type="range"
                                        min="2"
                                        max="40"
                                        value={hoursPerWeek}
                                        onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                                        className="w-full h-3 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                                        style={{
                                            background: `linear-gradient(to right, #1DD75B 0%, #1DD75B ${((hoursPerWeek - 2) / 38) * 100}%, rgba(255,255,255,0.2) ${((hoursPerWeek - 2) / 38) * 100}%, rgba(255,255,255,0.2) 100%)`
                                        }}
                                    />
                                    <div className="flex justify-between text-xs text-white/50 px-1">
                                        <span>2h</span>
                                        <span>40h</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between items-end mb-4">
                                    <div className="text-white font-bold">Avg. Annual Salary</div>
                                    <div className="text-4xl font-black text-openbi-green">${avgSalary.toLocaleString()}</div>
                                </div>
                                <div className="space-y-3">
                                    <input
                                        type="range"
                                        min="10000"
                                        max="150000"
                                        step="5000"
                                        value={avgSalary}
                                        onChange={(e) => setAvgSalary(Number(e.target.value))}
                                        className="w-full h-3 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                                        style={{
                                            background: `linear-gradient(to right, #1DD75B 0%, #1DD75B ${((avgSalary - 10000) / 140000) * 100}%, rgba(255,255,255,0.2) ${((avgSalary - 10000) / 140000) * 100}%, rgba(255,255,255,0.2) 100%)`
                                        }}
                                    />
                                    <div className="flex justify-between text-xs text-white/50 px-1">
                                        <span>$10k</span>
                                        <span>$150k</span>
                                    </div>
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

                {/* Step 2: After Power BI */}
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
                                After Power BI
                            </h3>
                            <p className="text-white/70 text-sm">
                                Typical reduction: 50–60% with automated dashboards
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
                                <LucideTrendingUp size={24} />
                                <span className="text-2xl">{reductionPercentage}% Time Reduction</span>
                            </div>
                        </div>

                        <button
                            onClick={handleNext}
                            className="w-full bg-openbi-green text-navy-900 font-black py-5 rounded-xl hover:bg-openbi-green/90 transition-all flex items-center justify-center gap-2 text-lg"
                        >
                            Calculate Savings
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
                                    Projected Annual ROI
                                </span>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8 mb-8">
                                <div className="bg-white/5 rounded-2xl p-8 border border-white/10 text-center">
                                    <div className="text-5xl font-black text-openbi-green mb-2">${annualMoneySaved.toLocaleString()}</div>
                                    <div className="text-white/40 text-xs uppercase tracking-widest font-black">Money Saved / Year</div>
                                </div>
                                <div className="bg-white/5 rounded-2xl p-8 border border-white/10 text-center">
                                    <div className="text-5xl font-black text-openbi-green mb-2">{hoursSaved}h</div>
                                    <div className="text-white/40 text-xs uppercase tracking-widest font-black">Time Saved / Week</div>
                                </div>
                            </div>

                            <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
                                You save <strong className="text-openbi-green">{hoursPerMonth} hours per month</strong>. That's over <strong className="text-openbi-green">${annualMoneySaved.toLocaleString()}</strong> in recovered productive capacity every year.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <a
                                href="/contact"
                                className="block w-full bg-openbi-green text-navy-900 font-black py-5 rounded-xl hover:bg-openbi-green/90 transition-all text-center text-lg shadow-xl shadow-openbi-green/20"
                            >
                                Book MIS Preparation
                            </a>
                        </div>

                        <button
                            onClick={handleReset}
                            className="w-full text-white/60 hover:text-white transition-colors text-sm underline font-bold"
                        >
                            Start New Calculation
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
