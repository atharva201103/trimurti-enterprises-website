import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { INQUIRY_EMAIL_TARGET, INQUIRY_EMAIL_SUBJECT } from "@/lib/constants";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, organization, phone, email, serviceRequired, message } = body;

    // Validate required fields
    if (!name || !organization || !phone || !email || !serviceRequired || !message) {
      return NextResponse.json(
        { error: "All inquiry fields are required." },
        { status: 400 }
      );
    }

    const timestamp = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });

    const emailText = `New Service Inquiry – Trimurti Enterprises

Name: ${name}
Organization: ${organization}
Phone: ${phone}
Email: ${email}
Service Required: ${serviceRequired}

Requirement Details:
${message}

Submitted at: ${timestamp}
Source: Trimurti Enterprises Corporate Website (Contact Form)
`;

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #17202A; max-width: 600px; margin: 0 auto; border: 1px solid #D4A84F; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #0B1F33; color: #FFFFFF; padding: 20px; text-align: center;">
          <h2 style="margin: 0; color: #D4A84F; font-size: 20px;">Trimurti Enterprises</h2>
          <p style="margin: 5px 0 0 0; font-size: 13px; color: #E5E7EB;">New Service Inquiry Received</p>
        </div>
        <div style="padding: 24px; background-color: #FFFFFF;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 140px; color: #0B1F33;">Client Name:</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #0B1F33;">Organization:</td>
              <td style="padding: 8px 0;">${organization}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #0B1F33;">Phone Number:</td>
              <td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #0B1F33; font-weight: bold;">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #0B1F33;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #0B1F33;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #0B1F33;">Service Required:</td>
              <td style="padding: 8px 0; font-weight: bold; color: #D4A84F;">${serviceRequired}</td>
            </tr>
          </table>
          <hr style="border: 0; border-top: 1px solid #E5E7EB; margin: 20px 0;" />
          <h4 style="margin: 0 0 10px 0; color: #0B1F33;">Requirement Details:</h4>
          <p style="background-color: #F5F7FA; padding: 14px; border-radius: 6px; margin: 0; white-space: pre-wrap; font-size: 14px;">${message}</p>
        </div>
        <div style="background-color: #F5F7FA; padding: 14px 20px; font-size: 11px; color: #6B7280; text-align: center; border-top: 1px solid #E5E7EB;">
          Sent via Trimurti Enterprises Website Contact System • ${timestamp}
        </div>
      </div>
    `;

    // Check for SMTP credentials in environment
    const smtpUser = process.env.SMTP_USER || process.env.GMAIL_USER;
    const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD;

    let emailSent = false;

    if (smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          service: process.env.SMTP_SERVICE || "gmail",
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        await transporter.sendMail({
          from: `"Trimurti Website" <${smtpUser}>`,
          to: INQUIRY_EMAIL_TARGET,
          replyTo: email,
          subject: `${INQUIRY_EMAIL_SUBJECT} - ${name} (${organization})`,
          text: emailText,
          html: emailHtml,
        });

        emailSent = true;
      } catch (mailErr) {
        console.error("Nodemailer dispatch error:", mailErr);
      }
    } else {
      // In development or when SMTP env variables are pending, log the complete dispatch payload
      console.info("--- [NEW INQUIRY RECEIVED] ---");
      console.info("To:", INQUIRY_EMAIL_TARGET);
      console.info("Subject:", INQUIRY_EMAIL_SUBJECT);
      console.info(emailText);
      console.info("------------------------------");
    }

    return NextResponse.json({
      success: true,
      emailSent,
      targetEmail: INQUIRY_EMAIL_TARGET,
      message: "Inquiry received and queued for dispatch.",
      inquiry: {
        name,
        organization,
        phone,
        email,
        serviceRequired,
        message,
      },
    });
  } catch (error) {
    console.error("Inquiry API Error:", error);
    return NextResponse.json(
      { error: "An error occurred while processing the inquiry." },
      { status: 500 }
    );
  }
}
