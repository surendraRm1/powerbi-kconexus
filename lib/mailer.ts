import nodemailer from "nodemailer";

type MailInput = {
    subject: string;
    text: string;
    replyTo?: string;
};

export async function sendMail(input: MailInput) {
    const {
        SMTP_HOST,
        SMTP_PORT,
        SMTP_USER,
        SMTP_PASS,
        MAIL_TO,
    } = process.env;

    // Allow site to run even if SMTP not configured yet
    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
        console.log("📧 Mail log only:", input);
        return;
    }

    const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT || 587),
        secure: false,
        auth: {
            user: SMTP_USER,
            pass: SMTP_PASS,
        },
    });

    await transporter.sendMail({
        from: SMTP_USER,
        to: MAIL_TO || SMTP_USER,
        subject: input.subject,
        text: input.text,
        replyTo: input.replyTo,
    });
}
