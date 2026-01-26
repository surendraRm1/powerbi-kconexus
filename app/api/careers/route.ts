import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mailer";

export async function POST(req: Request) {
    const body = await req.json().catch(() => null);
    if (!body) {
        return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const { fullName, email, phone, location, totalExp, powerBIExp, notes } = body;

    if (!fullName || !email || !phone || !location || !totalExp || !powerBIExp) {
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const text = `New Career Application (KCONexus)
Full Name: ${fullName}
Email: ${email}
Phone: ${phone}
Location: ${location}
Total Experience: ${totalExp}
Power BI Experience: ${powerBIExp}

Notes:
${notes || "-"}
`;

    await sendMail({
        subject: "KCONexus — New Career Application",
        text,
        replyTo: email,
    });

    return NextResponse.json({ ok: true });
}
