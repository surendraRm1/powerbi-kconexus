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
    LucideLeaf,
    LucideArrowRight
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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {solutions.map((item, idx) => (
                <Link
                    key={item.title}
                    href={`/solutions/${item.title.toLowerCase().replace(/ /g, "-")}`}
                    className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-openbi-green/30 hover:shadow-2xl hover:shadow-openbi-green/5 transition-all group flex flex-col justify-between"
                >
                    <div>
                        <div className={`w-12 h-12 bg-navy-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-openbi-green/10 transition-colors`}>
                            <div className="text-navy-900 group-hover:text-openbi-green transition-colors">
                                {item.icon}
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-openbi-green transition-colors">
                            {item.title}
                        </h3>
                        <p className="text-sm text-ink-500 leading-relaxed mb-6">
                            {item.desc}
                        </p>
                    </div>
                    <div className="flex items-center gap-2 text-navy-900 font-bold text-sm tracking-wide">
                        Explore Solution
                        <LucideArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                </Link>
            ))}
        </div>
    );
}
