export const site = {
    name: "KCONexus",
    domain: "kconexus.com",
    email: "contact@kconexus.com",
    phone: "+91 9110822188",
    company: "KCONexus",
    designation: "Lead Consultant",
    address: "22, 2nd Main Rd, Yediyur, Jayanagar, Bengaluru, Karnataka 560070",
    nav: [
        { label: "Home", href: "/" },
        {
            label: "Services",
            href: "/services",
            items: [
                { label: "Data Integration", href: "/services/data-integration" },
                { label: "Analytics & Dashboards", href: "/services/analytics-dashboards" },
                { label: "Process Automation", href: "/services/process-automation" },
            ]
        },
        {
            label: "Solutions",
            href: "/solutions",
            items: [
                { label: "Finance Analytics", href: "/solutions/finance-analytics" },
                { label: "HR Analytics", href: "/solutions/hr-analytics" },
                { label: "Asset Management", href: "/solutions/asset-management" },
                { label: "KPI Analytics", href: "/solutions/kpi-analytics" },
                { label: "Spend Analytics", href: "/solutions/spend-analytics" },
                { label: "Sustainability Reporting", href: "/solutions/sustainability-reporting" },
            ]
        },
        { label: "Careers", href: "/careers" },
        { label: "About", href: "/about" },
    ],
};
