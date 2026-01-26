export const servicesData: Record<string, any> = {
    "data-integration": {
        title: "Data Integration",
        desc: "Connect your heterogeneous data sources (ERP, CRM, Excel, SQL, Snowflake) into a unified, clean, and reliable data warehouse or lake.",
        img: "/assets/service-integration.png",
        benefits: ["Unified Data Source", "Real-time Syncing", "Clean Data Pipelines", "Scalable Infrastructure"]
    },
    "analytics-dashboards": {
        title: "Analytics & Dashboards",
        desc: "Transform raw data into beautiful, interactive Power BI dashboards that provide actionable insights for your leadership and operations teams.",
        img: "/assets/sample-finance.png", // Reusing high-quality asset
        benefits: ["Executive Dashboards", "Interactive Reports", "Operational Insights", "Automated Distribution"]
    },
    "process-automation": {
        title: "Process Automation",
        desc: "Eliminate manual reporting tasks through scheduled data refreshes, automated alerts, and streamlined ETL workflows for peak efficiency.",
        img: "/assets/sample-supply.png", // Reusing high-quality asset
        benefits: ["Scheduled Refreshes", "Custom ETL Logic", "Automated Alerts", "Reduced Manual Error"]
    }
};

export const solutionsData: Record<string, any> = {
    "finance-analytics": {
        title: "Finance Analytics",
        heroSubtitle: "Transform financial data into strategic value with powerful budgeting, forecasting, and expense modeling.",
        intro: "Our Finance Analytics solution helps CFOs and finance teams move beyond manual spreadsheets to real-time, governed financial reporting.",
        features: [
            { title: "Budgeting & Forecasting", desc: "Automate your planning cycles with variance analysis and predictive trends." },
            { title: "Cash Flow Management", desc: "Monitor liquidity positions and optimize working capital with live dashboards." },
            { title: "Expense Analytics", desc: "Identify cost-saving opportunities and track department-wise spending patterns." },
            { title: "Financial Consolidation", desc: "Merge data from multiple entities and currencies into a single source of truth." },
        ]
    },
    "hr-analytics": {
        title: "HR Analytics",
        heroSubtitle: "Optimize your workforce strategy with data-driven insights into talent, performance, and retention.",
        intro: "KCONexus HR Analytics empowers people leaders to make informed decisions that improve employee engagement and operational efficiency.",
        features: [
            { title: "Talent Acquisition", desc: "Track recruitment funnels, cost-per-hire, and time-to-fill metrics." },
            { title: "Performance Tracking", desc: "Align individual goals with organizational KPIs through transparent reporting." },
            { title: "Retention Analysis", desc: "Identify churn risks and build proactive employee engagement programs." },
            { title: "Payroll & Billing", desc: "Automate workforce cost allocation and billing cycles with precision." },
        ]
    },
    "asset-management": {
        title: "Asset Management",
        heroSubtitle: "Complete visibility and control over your organization's physical and digital assets.",
        intro: "Our Asset Management framework helps you track lifecycles, maintenance schedules, and depreciation with automated accuracy.",
        features: [
            { title: "Lifecycle Tracking", desc: "Manage assets from procurement to disposal with a clear audit trail." },
            { title: "Preventive Maintenance", desc: "Reduce downtime by scheduling and tracking regular maintenance tasks." },
            { title: "Depreciation Modeling", desc: "Automate financial calculations for asset value over time." },
            { title: "Inventory Optimization", desc: "Maintain ideal stock levels and reduce holding costs using predictive data." },
        ]
    },
    "construction-cost-database": {
        title: "Construction Cost Database",
        heroSubtitle: "Real-time cost tracking and project estimation for large-scale construction enterprises.",
        intro: "Take control of project margins with a centralized cost database that integrates labor, material, and logistical expenses.",
        features: [
            { title: "Project Costing", desc: "Detailed breakdown of costs across multiple project phases and sites." },
            { title: "Vendor Management", desc: "Compare supplier prices and track performance against historical data." },
            { title: "Margin Analysis", desc: "Real-time identification of cost overruns and profit leakages." },
            { title: "Resource Allocation", desc: "Optimize deployments based on project priority and labor availability." },
        ]
    }
};

export const allSolutions = [
    "Asset Management",
    "Construction Cost Database",
    "Finance Analytics",
    "HR Analytics",
    "KPI Analytics",
    "Portfolio Management",
    "Raw Material Management",
    "Resource Management",
    "Sales & Marketing Analytics",
    "Spend Analytics",
    "Supplier Performance",
    "Sustainability Reporting",
];

export const allServices = [
    "Data Integration",
    "Analytics & Dashboards",
    "Process Automation"
];
