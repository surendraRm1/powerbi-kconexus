export const servicesData: Record<string, any> = {
    "data-integration": {
        title: "Systems Integration",
        desc: "Connect your heterogeneous data sources (ERP, CRM, Excel, SQL, Snowflake) into a unified, clean, and reliable data warehouse or lake.",
        img: "/assets/service-integration.png",
        benefits: ["Unified Data Source", "Real-time Syncing", "Clean Data Pipelines", "Scalable Infrastructure"]
    },
    "power-bi-mis": {
        title: "Power BI",
        desc: "Transform raw data into beautiful, interactive Power BI dashboards that provide actionable insights for your leadership and operations teams.",
        img: "/assets/sample-finance.png",
        benefits: ["Executive Dashboards", "Interactive Reports", "Operational Insights", "Automated Distribution"]
    },
    "automation": {
        title: "Process Automation",
        desc: "Eliminate manual reporting tasks through scheduled data refreshes, automated alerts, and streamlined ETL workflows for peak efficiency.",
        img: "/assets/sample-supply.png",
        backgroundImg: "/assets/automation-bg.jpg",
        benefits: ["Scheduled Refreshes", "Custom ETL Logic", "Automated Alerts", "Reduced Manual Error"]
    },
    "process-automation": {
        title: "Process Automation",
        desc: "Eliminate manual reporting tasks through scheduled data refreshes, automated alerts, and streamlined ETL workflows for peak efficiency.",
        img: "/assets/sample-supply.png",
        backgroundImg: "/assets/automation-bg.jpg",
        benefits: ["Scheduled Refreshes", "Custom ETL Logic", "Automated Alerts", "Reduced Manual Error"]
    },
    "nexus-ai": {
        title: "Nexus AI",
        desc: "Next-generation AI accounting that automates bookkeeping, OCR bill extraction, and real-time financial reporting.",
        img: "/assets/nexus-hero.png",
        benefits: ["99% OCR Accuracy", "Automated Ledger Mapping", "Real-time GST Reconciliation", "Bank-Grade Security"]
    }
};

export const solutionsData: Record<string, any> = {
    "fixed-asset-management": {
        title: "Fixed Asset Management",
        heroSubtitle: "End-to-end FAR tracking (IND AS 10 & 116) designed for Indian statutory and audit rigor.",
        intro: "Our Fixed Asset Management solution ensures your business maintains a perfectly compliant Fixed Asset Register (FAR) while optimizing depreciation and tax benefits.",
        features: [
            { title: "Statutory Compliance", desc: "Built-in support for IND AS 10 & 116 and Companies Act, 2013 audit requirements." },
            { title: "Lifecycle Tracking", desc: "Manage assets from procurement to disposal with a clear digital audit trail." },
            { title: "Depreciation Modeling", desc: "Automate complex component-level depreciation and tax calculations." },
            { title: "Physical Verification", desc: "Streamline audit-ready physical verification processes with mobile-ready tracking." },
        ],
        backgroundImg: "/assets/asset-management-bg.png"
    },
    "internal-audit-automation": {
        title: "Internal Audit Automation",
        heroSubtitle: "Shift from periodic sampling to continuous auditing with automated exception reporting.",
        intro: "Transform your internal audit function into a proactive risk-management engine using automated data validation and exception dashboards.",
        features: [
            { title: "Continuous Auditing", desc: "Automated 100% population testing instead of limited manual sampling." },
            { title: "Exception Reporting", desc: "Real-time alerts for control breaches, duplicate payments, and policy violations." },
            { title: "Risk Heatmaps", desc: "Visualize risk levels across departments and locations for focused management." },
            { title: "Root Cause Analysis", desc: "Drill down into transaction-level data to identify and fix systemic issues." },
        ],
        backgroundImg: "/assets/meeting-charts.png"
    },
    "tds-tax-compliance": {
        title: "TDS & Tax Compliance",
        heroSubtitle: "Automated TDS reconciliation, GST 2A/2B matching, and precise tax reporting.",
        intro: "Eliminate manual tax reconciliation errors and ensure timely, accurate filing with our integrated Tax Compliance dashboards.",
        features: [
            { title: "GST Reconciliation", desc: "Automated 2A/2B matching to ensure maximum Input Tax Credit (ITC) recovery." },
            { title: "TDS Dashboard", desc: "Track tax deductions across vendors and projects with automated mismatch alerts." },
            { title: "Income Tax Bridge", desc: "Seamlessly map accounts to income tax forms for easier audit preparation." },
            { title: "Audit Support", desc: "Generate tax-ready schedules and reports with a single click." },
        ],
        backgroundImg: "/assets/finance-bull-bear.png"
    },
    "inventory-working-capital": {
        title: "Inventory & Working Capital",
        heroSubtitle: "Optimize supply chains with stock aging, slow-moving analysis, and turnover insights.",
        intro: "Improve your cash flow by identifying slow-moving stock and optimizing reorder points with intelligent supply chain analytics.",
        features: [
            { title: "Stock Aging Analysis", desc: "Identify and liquidate non-moving assets before they drain your capital." },
            { title: "Turnover Optimization", desc: "Track conversion cycles and optimize stock levels to free up working capital." },
            { title: "Supply Chain Risk", desc: "Monitor supplier lead times and quality metrics to prevent production delays." },
            { title: "AI Reorder Points", desc: "Data-driven demand forecasting to maintain the perfect balance of inventory." },
        ],
        backgroundImg: "/assets/sample-supply.png"
    },
    "secondary-sales-dealer-tracking": {
        title: "Secondary Sales & Dealer Tracking",
        heroSubtitle: "Monitor dealer networks and secondary sales performance across diverse Indian regions.",
        intro: "Gain complete visibility into your distribution channel by tracking dealer performance and real-world consumer demand.",
        features: [
            { title: "Dealer Performance", desc: "Score distribution partners based on sales, growth, and payment history." },
            { title: "Secondary Visibility", desc: "Track sales from dealers to final customers for true market demand data." },
            { title: "Regional Heatmaps", desc: "Identify high-growth regions and underserved markets across India." },
            { title: "Scheme Effectiveness", desc: "Measure the ROI of dealer incentive schemes and consumer promotions." },
        ],
        backgroundImg: "/assets/presentation-meeting.png"
    },
    "financial-planning-closing": {
        title: "Financial Planning & Closing",
        heroSubtitle: "Accelerate month-end closing with automated financial statements and P&L variance analysis.",
        intro: "Reduce your month-end closing time by 50% through automated data consolidation and standardized financial reporting.",
        features: [
            { title: "Automated Closing", desc: "Workflow-driven closing checklists and automated financial statement prep." },
            { title: "P&L Variance", desc: "Real-time comparison of actuals vs. budgets with deeper drill-down capability." },
            { title: "Entity Consolidation", desc: "Merge data from multiple GSTINs and subsidiaries into unified reports." },
            { title: "Board-Ready Reporting", desc: "Generate professional, visually compelling reports for senior leadership." },
        ],
        backgroundImg: "/assets/test-image.png"
    },
    "esg-brsr-reporting": {
        title: "ESG & BRSR Reporting",
        heroSubtitle: "Automate Business Responsibility and Sustainability Reporting for Indian SEBI compliance.",
        intro: "Stay ahead of ESG mandates and build trust with investors through automated, granular sustainability reporting.",
        features: [
            { title: "BRSR Framework", desc: "Aligned with Indian SEBI requirements for Business Responsibility and Sustainability Reporting." },
            { title: "Carbon Footprint", desc: "Track emissions and energy consumption across your operations." },
            { title: "Social Impact", desc: "Quantify workforce diversity, health & safety, and CSR initiatives." },
            { title: "Compliance Audit", desc: "Generate audit-ready evidence for every sustainability metric reported." },
        ],
        backgroundImg: "/assets/office-culture.png"
    }
};

export const allSolutions = [
    "Internal Audit Automation",
    "Fixed Asset Management",
    "TDS & Tax Compliance",
    "Inventory & Working Capital",
    "Secondary Sales & Dealer Tracking",
    "Financial Planning & Closing",
    "HR & Payroll Control",
    "Spend & Procurement ROI",
    "Construction Budgeting",
    "ESG & BRSR Reporting",
];

export const allServices = [
    "Data Integration",
    "Analytics & Dashboards",
    "Process Automation",
    "Nexus AI"
];
