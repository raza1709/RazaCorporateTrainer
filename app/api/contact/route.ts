import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(1),
  teamSize: z.string().min(1),
  service: z.string().min(1),
  message: z.string().min(10),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    // Resend integration — add RESEND_API_KEY to .env.local
    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(RESEND_API_KEY);

      await resend.emails.send({
        from: "website@razashah.dev",
        to: "er.rzash@gmail.com",
        reply_to: data.email,
        subject: `New Lead: ${data.service} — ${data.company}`,
        html: `
          <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #0B2341; border-bottom: 2px solid #10B981; padding-bottom: 12px;">
              New QA Consulting Inquiry
            </h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #64748B; width: 140px;">Name</td><td style="padding: 8px 0; font-weight: 600;">${data.name}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748B;">Email</td><td style="padding: 8px 0;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #64748B;">Company</td><td style="padding: 8px 0; font-weight: 600;">${data.company}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748B;">Team Size</td><td style="padding: 8px 0;">${data.teamSize}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748B;">Service</td><td style="padding: 8px 0; color: #10B981; font-weight: 600;">${data.service}</td></tr>
            </table>
            <div style="margin-top: 20px; background: #F8FAFC; border-left: 3px solid #10B981; padding: 16px; border-radius: 4px;">
              <p style="margin: 0; color: #0F172A; white-space: pre-wrap;">${data.message}</p>
            </div>
          </div>
        `,
      });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid form data", issues: error.issues }, { status: 400 });
    }
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
