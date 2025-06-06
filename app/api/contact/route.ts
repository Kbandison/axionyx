// app/api/contact/route.ts

import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.formData();
    const name = data.get("name");
    const email = data.get("email");
    const phone = data.get("phone") || "";
    const project = data.get("project") || "";
    const message = data.get("message");
    const honeypot = data.get("company");

    // Anti-spam: if honeypot is filled, silently ignore
    if (honeypot) return NextResponse.json({ success: true });

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // Send the email
    const result = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", // or your verified sender
      to: "kbandison@gmail.com", // <<-- CHANGE THIS!
      subject: `Axionyx Contact: ${name}`,
      replyTo: String(email),
      text: `
New Axionyx contact form submission:

Name: ${name}
Email: ${email}
Phone: ${phone}
Project Type: ${project}

Message:
${message}
      `,
      html: `
  <div style="font-family: Sora, Inter, Orbitron, Arial, sans-serif; background: #18181B; color: #fff; padding: 0; margin: 0; border-radius: 14px; overflow: hidden;">
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 520px; margin: 40px auto; background: #232326; border-radius: 14px; box-shadow: 0 2px 24px 0 #1113  ">
      <tr>
        <td style="padding: 32px 36px 16px 36px; text-align: center;">
          <span style="font-family: Orbitron, Arial Black, Arial, sans-serif; font-size: 30px; color: #E34234; font-weight: bold; letter-spacing: 2px;">
            Axionyx
          </span>
          <div style="margin-top: 12px; font-size: 16px; color: #FFD7CF;">
            Digital Leverage Agency
          </div>
        </td>
      </tr>
      <tr>
        <td style="padding: 0 36px 28px 36px;">
          <h2 style="margin: 16px 0 16px 0; color: #fff; font-family: Orbitron, Arial Black, Arial, sans-serif; font-size: 22px; font-weight: bold;">
            New Contact Form Submission
          </h2>
          <table width="100%" style="margin-top: 18px; margin-bottom: 18px;">
            <tr>
              <td style="font-weight:600; color:#E34234; padding: 8px 0; width: 40%;">Name:</td>
              <td style="color:#fff;">${name}</td>
            </tr>
            <tr>
              <td style="font-weight:600; color:#E34234; padding: 8px 0;">Email:</td>
              <td><a href="mailto:${email}" style="color:#FFD7CF; text-decoration:underline;">${email}</a></td>
            </tr>
            ${
              phone
                ? `<tr>
              <td style="font-weight:600; color:#E34234; padding: 8px 0;">Phone:</td>
              <td style="color:#fff;">${phone}</td>
            </tr>`
                : ""
            }
            ${
              project
                ? `<tr>
              <td style="font-weight:600; color:#E34234; padding: 8px 0;">Project Type:</td>
              <td style="color:#fff;">${project}</td>
            </tr>`
                : ""
            }
          </table>
          <div style="margin: 14px 0 6px 0; color: #FFD7CF; font-family: Orbitron, Arial Black, Arial, sans-serif; font-size: 15px; font-weight: 500;">
            Message:
          </div>
          <div style="background: #161618; border-radius: 8px; padding: 16px 18px; color: #fff; font-size: 16px; font-family: Sora, Inter, Arial, sans-serif; border: 1px solid #312724;">
            ${message?.toString().replace(/\n/g, "<br />")}
          </div>
          <hr style="margin: 32px 0 14px 0; border: none; border-top: 1px solid #E34234;" />
          <div style="color: #666; font-size: 13px; margin-bottom: 0;">
            Sent from <a href="https://axionyx.vercel.app" style="color:#FFD7CF;">axionyx.vercel.app</a>
          </div>
        </td>
      </tr>
      <tr>
        <td style="padding: 0 36px 32px 36px;">
          <div style="margin-top: 18px; text-align: center; font-size: 14px; color: #FFD7CF;">
            Axionyx • Future-forward digital solutions
          </div>
        </td>
      </tr>
    </table>
  </div>
      `,
    });

    // Handle Resend quota or send error gracefully
    if (result?.error) {
      // Defensive: check if error is object and has 'code'
      if (
        typeof result.error === "object" &&
        result.error !== null &&
        "code" in result.error &&
        result.error.code === "quota_exceeded"
      ) {
        return NextResponse.json(
          { error: "Email quota exceeded. Please contact us another way." },
          { status: 429 }
        );
      }
      // Fallback: show message or error as string
      return NextResponse.json(
        { error: result.error.message || String(result.error) },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to send email. Please try again later.", err },
      { status: 500 }
    );
  }
}
