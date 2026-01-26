import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mailer";
import { site } from "@/lib/site";

export async function POST(req: Request) {
    const body = await req.json().catch(() => null);
    if (!body) {
        return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const { name, email, mobile, company, designation, message } = body;

    if (!name || !email || !mobile || !company) {
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const text = `New Contact Form Submission (KCONexus)

Name: ${name}
Email: ${email}
Mobile: ${mobile}
Company: ${company}
Designation: ${designation || "Not specified"}

Message:
${message || "-"}

---
Sent via KCONexus Web Contact System
`;

    try {
        await sendMail({
            subject: `KCONexus Inquiry: ${company} — ${name}`,
            text,
            replyTo: email,
        });

        return NextResponse.json({ ok: true });
    } catch (error) {
        console.error("Mail Error:", error);
        return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
    }
}
