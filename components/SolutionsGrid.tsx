"use client"

import Link from "next/link";
import {
    LucideBriefcase,
    LucideBuilding2,
    LucideBarChart3,
    LucideUsers,
    LucideTarget,
    LucideFolderKanban,
    LucideTruck,
    LucideUserCheck,
    LucideMegaphone,
    LucideCreditCard,
    LucideClipboardList,
    LucideLeaf
} from "lucide-react";

const solutions = [
    {
        title: "Internal Audit Automation",
        desc: "Automated exception reporting and real-time risk trackers to ensure 100% compliance rigor.",
        icon: <LucideClipboardList size={24} />,
        color: "bg-slate-100 text-slate-600",
    },
    {
        title: "Fixed Asset Management",
        desc: "End-to-end FAR tracking (IND AS 10 & 116) designed for Indian statutory and audit standards.",
        icon: <LucideBriefcase size={24} />,
        color: "bg-orange-100 text-orange-600",
    },
    {
        title: "TDS & Tax Compliance",
        desc: "Automated TDS reconciliation, GST 2A/2B matching, and precise tax reporting dashboards.",
        icon: <LucideBarChart3 size={24} />,
        color: "bg-blue-100 text-blue-600",
    },
    {
        title: "Inventory & Working Capital",
        desc: "Optimize cash flow with stock aging, slow-moving analysis, and intelligent inventory alerts.",
        icon: <LucideTruck size={24} />,
        color: "bg-amber-100 text-amber-600",
    },
    {
        title: "Secondary Sales & Dealer Tracking",
        desc: "Monitor dealer networks and secondary sales performance across diverse Indian regions.",
        icon: <LucideMegaphone size={24} />,
        color: "bg-rose-100 text-rose-600",
    },
    {
        title: "Financial Planning & Closing",
        desc: "Accelerate month-end closing with automated financial statements and variance analysis.",
        icon: <LucideTarget size={24} />,
        color: "bg-red-100 text-red-600",
    },
    {
        title: "HR & Payroll Control",
        desc: "Deep dive into payroll costs, attendance patterns, and workforce productivity metrics.",
        icon: <LucideUsers size={24} />,
        color: "bg-purple-100 text-purple-600",
    },
    {
        title: "Spend & Procurement ROI",
        desc: "Reduce procurement costs through detailed vendor performance and spend leakage analysis.",
        icon: <LucideCreditCard size={24} />,
        color: "bg-emerald-100 text-emerald-600",
    },
    {
        title: "Construction Budgeting",
        desc: "Track construction project costs against budget with real-time site-to-office reporting.",
        icon: <LucideBuilding2 size={24} />,
        color: "bg-green-100 text-green-600",
    },
    {
        title: "ESG & BRSR Reporting",
        desc: "Automate Business Responsibility and Sustainability Reporting for Indian SEBI compliance.",
        icon: <LucideLeaf size={24} />,
        color: "bg-lime-100 text-lime-600",
    },
];

export default function SolutionsGrid() {
    return (
        <div className="flex flex-wrap justify-center gap-4">
            {solutions.map((s) => (
                <Link
                    key={s.title}
                    href={`/solutions/${s.title.toLowerCase().replace(/ /g, "-")}`}
                    className="flex items-center gap-4 bg-white hover:bg-navy-900 border border-navy-100 hover:border-navy-900 rounded-2xl px-8 py-4 shadow-sm hover:shadow-xl transition-all group"
                >
                    <div className={`w-10 h-10 rounded-xl ${s.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                        {s.icon}
                    </div>
                    <span className="text-lg font-bold text-navy-900 group-hover:text-white transition-colors">
                        {s.title}
                    </span>
                    <svg className="w-5 h-5 text-openbi-green group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
            ))}
        </div>
    );
}
