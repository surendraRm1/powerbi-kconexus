import { LucideDatabase, LucideBarChart4, LucideZap } from "lucide-react";
import Link from "next/link";

const services = [
    {
        title: "Data Integration",
        slug: "data-integration",
        desc: "Connect your heterogeneous data sources (ERP, CRM, Excel, SQL, Snowflake) into a unified, clean, and reliable data warehouse or lake.",
        icon: <LucideDatabase className="text-openbi-green" size={40} />,
    },
    {
        title: "Analytics & Dashboards",
        slug: "analytics-dashboards",
        desc: "Transform raw data into beautiful, interactive Power BI dashboards that provide actionable insights for your leadership and operations teams.",
        icon: <LucideBarChart4 className="text-openbi-green" size={40} />,
    },
    {
        title: "Process Automation",
        slug: "process-automation",
        desc: "Eliminate manual reporting tasks through scheduled data refreshes, automated alerts, and streamlined ETL workflows for peak efficiency.",
        icon: <LucideZap className="text-openbi-green" size={40} />,
    },
];

export default function ServiceCards() {
    return (
        <div className="grid md:grid-cols-3 gap-8">
            {services.map((s) => (
                <Link
                    key={s.title}
                    href={`/services/${s.slug}`}
                    className="card-openbi group cursor-pointer block"
                >
                    <div className="mb-6 p-4 bg-gray-50 rounded-lg inline-block group-hover:bg-openbi-green/10 transition-colors">
                        {s.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4">{s.title}</h3>
                    <p className="text-ink-500 text-sm leading-relaxed mb-6">
                        {s.desc}
                    </p>
                    <div className="text-xs font-bold text-gray-400 group-hover:text-openbi-green transition-colors uppercase tracking-widest">
                        Learn More →
                    </div>
                </Link>
            ))}
        </div>
    );
}
