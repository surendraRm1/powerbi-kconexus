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
        title: "Asset Management",
        desc: "Maximize asset value with comprehensive tracking and lifecycle management.",
        icon: <LucideBriefcase size={24} />,
        color: "bg-orange-100 text-orange-600",
    },
    {
        title: "Construction Cost Database",
        desc: "Track and manage construction costs with precision and real-time updates.",
        icon: <LucideBuilding2 size={24} />,
        color: "bg-green-100 text-green-600",
    },
    {
        title: "Finance Analytics",
        desc: "Optimize financial performance with data-driven insights and forecasting.",
        icon: <LucideBarChart3 size={24} />,
        color: "bg-blue-100 text-blue-600",
    },
    {
        title: "HR Analytics",
        desc: "Transform workforce data into strategic human resource decisions.",
        icon: <LucideUsers size={24} />,
        color: "bg-purple-100 text-purple-600",
    },
    {
        title: "KPI Analytics",
        desc: "Monitor and achieve your business goals with real-time KPI tracking.",
        icon: <LucideTarget size={24} />,
        color: "bg-red-100 text-red-600",
    },
    {
        title: "Portfolio Management",
        desc: "Gain a bird's-eye view of your entire project and investment portfolio.",
        icon: <LucideFolderKanban size={24} />,
        color: "bg-indigo-100 text-indigo-600",
    },
    {
        title: "Raw Material Management",
        desc: "Optimize supply chains with intelligent raw material tracking.",
        icon: <LucideTruck size={24} />,
        color: "bg-amber-100 text-amber-600",
    },
    {
        title: "Resource Management",
        desc: "Efficiently allocate team members and resources across projects.",
        icon: <LucideUserCheck size={24} />,
        color: "bg-cyan-100 text-cyan-600",
    },
    {
        title: "Sales & Marketing Analytics",
        desc: "Drive growth with specialized analytics for sales pipelines and marketing ROI.",
        icon: <LucideMegaphone size={24} />,
        color: "bg-rose-100 text-rose-600",
    },
    {
        title: "Spend Analytics",
        desc: "Identify cost-saving opportunities through detailed expenditure analysis.",
        icon: <LucideCreditCard size={24} />,
        color: "bg-emerald-100 text-emerald-600",
    },
    {
        title: "Supplier Performance",
        desc: "Evaluate and manage vendor relationships with objective data metrics.",
        icon: <LucideClipboardList size={24} />,
        color: "bg-slate-100 text-slate-600",
    },
    {
        title: "Sustainability Reporting",
        desc: "Automate ESG reporting and track your environmental impact with ease.",
        icon: <LucideLeaf size={24} />,
        color: "bg-lime-100 text-lime-600",
    },
];

export default function SolutionsGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((s) => (
                <Link
                    key={s.title}
                    href={`/solutions/${s.title.toLowerCase().replace(/ /g, "-")}`}
                    className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col items-center text-center"
                >
                    <div className={`w-16 h-16 rounded-full ${s.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                        {s.icon}
                    </div>
                    <h3 className="text-xl font-black text-navy-900 mb-4 group-hover:text-openbi-green transition-colors">
                        {s.title}
                    </h3>
                    <p className="text-sm text-ink-500 leading-relaxed font-medium">
                        {s.desc}
                    </p>
                </Link>
            ))}
        </div>
    );
}
