import { LucideDatabase, LucideBarChart4, LucideZap } from "lucide-react";
import Link from "next/link";

const services = [
    {
        title: "Process Automation",
        slug: "automation",
        desc: "Give your team 20 hours back every week by automating repetitive tasks. From data entry to report generation, we eliminate the robot work.",
        icon: <LucideZap className="text-openbi-green" size={40} />,
    },
    {
        title: "Power BI & MIS",
        slug: "power-bi-mis",
        desc: "Replace spreadsheet chaos with executive dashboards that drive decisions. Get real-time visibility into what matters most to your business.",
        icon: <LucideBarChart4 className="text-openbi-green" size={40} />,
    },
    {
        title: "Systems Integration",
        slug: "data-integration",
        desc: "Stop losing hours to manual data transfers. We connect your systems automatically—ERP, CRM, Excel, SQL—into one unified source of truth.",
        icon: <LucideDatabase className="text-openbi-green" size={40} />,
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
