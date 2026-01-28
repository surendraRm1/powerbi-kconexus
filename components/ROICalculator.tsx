"use client"

import { useState, useMemo } from "react";
import { LucideTrendingUp, LucideUsers, LucideClock, LucideDollarSign, LucideArrowRight, LucideCheckCircle2, LucideCalculator } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ROICalculator() {
    const [step, setStep] = useState(1);
    const [teamSize, setTeamSize] = useState(5);
    const [manualHoursPerWeek, setManualHoursPerWeek] = useState(40);
    const [avgSalary, setAvgSalary] = useState(30000); // Annual salary in USD/Credits

    // Calculated values
    const results = useMemo(() => {
        const hourlyRate = avgSalary / (52 * 40); // Standard 40hr week
        const currentCostPerWeek = teamSize * manualHoursPerWeek * hourlyRate;
        const currentCostPerYear = currentCostPerWeek * 52;

        // Automation impact (conservative 60% reduction)
        const reductionFactor = 0.6;
        const annualSavings = currentCostPerYear * reductionFactor;
        const monthlySavings = annualSavings / 12;
        const hoursSavedPerYear = (teamSize * manualHoursPerWeek * 52) * reductionFactor;
        const fteRecovered = (hoursSavedPerYear / (52 * 40)).toFixed(1);

        return {
            annualSavings: Math.round(annualSavings),
            monthlySavings: Math.round(monthlySavings),
            fteRecovered,
            hoursSavedPerYear: Math.round(hoursSavedPerYear)
        };
    }, [teamSize, manualHoursPerWeek, avgSalary]);

    const handleNext = () => setStep((s) => Math.min(s + 1, 3));
    const handleReset = () => {
        setStep(1);
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="bg-navy-900 rounded-[2rem] p-8 md:p-12 shadow-2xl border border-white/5 relative overflow-hidden">
                {/* Decorative background blur */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-openbi-green/10 rounded-full blur-3xl" />

                <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-10 pb-6 border-b border-white/10">
                        <div className="w-12 h-12 bg-openbi-green/10 rounded-xl flex items-center justify-center">
                            <LucideCalculator className="text-openbi-green" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white">Financial ROI Estimator</h3>
                            <p className="text-white/40 text-xs uppercase tracking-widest font-bold">Calculate your potential savings</p>
                        </div>
                    </div>

                    <AnimatePresence mode="wait">
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-10"
                            >
                                <div className="grid md:grid-cols-2 gap-10">
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <label className="text-white font-bold flex items-center gap-2">
                                                <LucideUsers size={18} className="text-openbi-green" />
                                                Team Size
                                            </label>
                                            <span className="text-openbi-green text-xl font-black">{teamSize}</span>
                                        </div>
                                        <input
                                            type="range" min="1" max="50" value={teamSize}
                                            onChange={(e) => setTeamSize(Number(e.target.value))}
                                            className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-openbi-green"
                                        />
                                        <p className="text-white/40 text-xs italic">Number of employees involved in reporting/data work</p>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <label className="text-white font-bold flex items-center gap-2">
                                                <LucideClock size={18} className="text-openbi-green" />
                                                Manual Hours / Week
                                            </label>
                                            <span className="text-openbi-green text-xl font-black">{manualHoursPerWeek}h</span>
                                        </div>
                                        <input
                                            type="range" min="5" max="200" step="5" value={manualHoursPerWeek}
                                            onChange={(e) => setManualHoursPerWeek(Number(e.target.value))}
                                            className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-openbi-green"
                                        />
                                        <p className="text-white/40 text-xs italic">Total hours spent by the entire team on manual data tasks</p>
                                    </div>
                                </div>

                                <div className="space-y-4 pt-4">
                                    <div className="flex items-center justify-between">
                                        <label className="text-white font-bold flex items-center gap-2">
                                            <LucideDollarSign size={18} className="text-openbi-green" />
                                            Avg. Annual Salary
                                        </label>
                                        <span className="text-openbi-green text-xl font-black">${avgSalary.toLocaleString()}</span>
                                    </div>
                                    <input
                                        type="range" min="10000" max="150000" step="5000" value={avgSalary}
                                        onChange={(e) => setAvgSalary(Number(e.target.value))}
                                        className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-openbi-green"
                                    />
                                    <p className="text-white/40 text-xs italic">Estimated average salary for employees performing these tasks</p>
                                </div>

                                <button
                                    onClick={handleNext}
                                    className="w-full btn-green py-5 text-lg font-black"
                                >
                                    Calculate Projected ROI
                                </button>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="space-y-8"
                            >
                                <div className="text-center mb-10">
                                    <div className="inline-flex items-center gap-2 bg-openbi-green/20 border border-openbi-green/50 rounded-full px-4 py-1.5 mb-4">
                                        <LucideTrendingUp size={16} className="text-openbi-green" />
                                        <span className="text-xs font-black text-openbi-green uppercase tracking-widest">Projected Annual Savings</span>
                                    </div>
                                    <div className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-2">
                                        ${results.annualSavings.toLocaleString()}
                                    </div>
                                    <p className="text-white/60 text-lg">Potential recovery through Process Automation</p>
                                </div>

                                <div className="grid md:grid-cols-3 gap-4">
                                    <div className="bg-white/5 rounded-2xl p-6 border border-white/5 text-center">
                                        <div className="text-openbi-green text-2xl font-black mb-1">${results.monthlySavings.toLocaleString()}</div>
                                        <div className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Monthly Impact</div>
                                    </div>
                                    <div className="bg-white/5 rounded-2xl p-6 border border-white/5 text-center">
                                        <div className="text-openbi-green text-2xl font-black mb-1">{results.fteRecovered}</div>
                                        <div className="text-white/40 text-[10px] uppercase font-bold tracking-widest">FTE Freed Up</div>
                                    </div>
                                    <div className="bg-white/5 rounded-2xl p-6 border border-white/5 text-center">
                                        <div className="text-openbi-green text-2xl font-black mb-1">{results.hoursSavedPerYear.toLocaleString()}</div>
                                        <div className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Annual Hours Saved</div>
                                    </div>
                                </div>

                                <div className="bg-openbi-green/10 rounded-2xl p-6 border border-openbi-green/20">
                                    <div className="flex items-start gap-4">
                                        <LucideCheckCircle2 className="text-openbi-green shrink-0 mt-1" size={24} />
                                        <div>
                                            <h4 className="text-white font-bold mb-1">Scale your business without hiring.</h4>
                                            <p className="text-white/60 text-sm leading-relaxed">
                                                Automation doesn't just save money; it unlocks capacity. These {results.fteRecovered} staff members can now focus on strategic growth instead of manual data preparation.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row gap-4">
                                    <button
                                        onClick={handleReset}
                                        className="flex-1 text-white/40 hover:text-white text-sm font-bold transition-colors"
                                    >
                                        ← Adjust Parameters
                                    </button>
                                    <a
                                        href="/contact"
                                        className="flex-[2] btn-green py-5 text-lg font-black flex items-center justify-center gap-2"
                                    >
                                        Book Your ROI Strategy Call
                                        <LucideArrowRight size={20} />
                                    </a>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
