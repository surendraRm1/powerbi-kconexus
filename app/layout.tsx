import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { site } from "@/lib/site";

const openSans = Open_Sans({
    subsets: ["latin"],
    variable: "--font-open-sans",
    display: "swap",
});

export const metadata: Metadata = {
    title: `${site.name} | Actionable Insights with Power BI & Advanced Analytics`,
    description:
        "KCONexus helps teams build dashboards, automate reporting, and turn data into decisions using Power BI and advanced analytics.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={openSans.variable}>
            <body className="font-sans antialiased">
                <Navbar />
                <main className="min-h-[70vh]">{children}</main>
                <Footer />
                <WhatsAppButton />
            </body>
        </html>
    );
}
