export default function Testimonials() {
    const items = [
        { quote: "The dashboards are not just beautiful, they are fast and reliable. A complete transformation of our data culture.", author: "CFO, Manufacturing Enterprise" },
        { quote: "KCONexus helped us simplify reporting and focus on decisions. Their expertise in DAX and Azure is unmatched.", author: "Head of Analytics, Global Logistics" }
    ];

    return (
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {items.map((item, i) => (
                <div key={i} className="card-openbi relative pt-12">
                    <div className="absolute top-6 left-6 text-openbi-green text-6xl opacity-20 font-serif leading-none">“</div>
                    <p className="italic text-ink-500 mb-6 relative z-10 leading-relaxed text-[15px]">
                        {item.quote}
                    </p>
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-navy-50 flex items-center justify-center font-bold text-navy-900 text-xs">
                            {item.author.charAt(0)}
                        </div>
                        <div>
                            <p className="text-sm font-bold text-navy-900">Business Stakeholder</p>
                            <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">{item.author}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
