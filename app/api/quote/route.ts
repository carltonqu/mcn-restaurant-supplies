import { NextRequest, NextResponse } from "next/server";

interface QuoteFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  businessType: string;
  needs: string;
  budget: string;
  minimumOrderAck: boolean;
}

export async function POST(req: NextRequest) {
  try {
    const body: QuoteFormData = await req.json();

    const {
      fullName,
      companyName,
      email,
      phone,
      businessType,
      needs,
      budget,
      minimumOrderAck,
    } = body;

    // Validate required fields
    if (!fullName || !companyName || !email || !phone || !businessType || !needs || !budget || !minimumOrderAck) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "carltonqu@gmail.com";

    if (!RESEND_API_KEY) {
      // Log form data but don't crash
      console.log("=== QUOTE FORM SUBMISSION (no RESEND_API_KEY set) ===");
      console.log(JSON.stringify(body, null, 2));
      console.log("====================================================");
      return NextResponse.json({ success: true, message: "Quote request received (email not configured)" });
    }

    const { Resend } = await import("resend");
    const resend = new Resend(RESEND_API_KEY);

    const adminEmailHtml = `
      <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; color: #0D0D0D; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08);">
        <div style="background: linear-gradient(135deg, #FFE566 0%, #F5C800 60%, #D4A800 100%); padding: 1.5rem 2rem;">
          <h1 style="color: #0D0D0D; margin: 0; font-size: 1.25rem; font-weight: 700;">🆕 New Quote Request</h1>
          <p style="color: #0D0D0D; margin: 0.25rem 0 0 0; font-size: 0.85rem; opacity: 0.7;">MCN Restaurant Supplies Chain Solutions</p>
        </div>
        <div style="padding: 2rem;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #F5F5F5;"><td style="padding: 0.75rem 0; color: #737373; font-size: 0.85rem; width: 40%;">Full Name</td><td style="padding: 0.75rem 0; font-weight: 600;">${fullName}</td></tr>
            <tr style="border-bottom: 1px solid #F5F5F5;"><td style="padding: 0.75rem 0; color: #737373; font-size: 0.85rem;">Company</td><td style="padding: 0.75rem 0; font-weight: 600;">${companyName}</td></tr>
            <tr style="border-bottom: 1px solid #F5F5F5;"><td style="padding: 0.75rem 0; color: #737373; font-size: 0.85rem;">Email</td><td style="padding: 0.75rem 0; font-weight: 600;"><a href="mailto:${email}" style="color: #D4A800;">${email}</a></td></tr>
            <tr style="border-bottom: 1px solid #F5F5F5;"><td style="padding: 0.75rem 0; color: #737373; font-size: 0.85rem;">Phone/Viber</td><td style="padding: 0.75rem 0; font-weight: 600;">${phone}</td></tr>
            <tr style="border-bottom: 1px solid #F5F5F5;"><td style="padding: 0.75rem 0; color: #737373; font-size: 0.85rem;">Business Type</td><td style="padding: 0.75rem 0; font-weight: 600;">${businessType}</td></tr>
            <tr><td style="padding: 0.75rem 0; color: #737373; font-size: 0.85rem;">Budget</td><td style="padding: 0.75rem 0; font-weight: 700; color: #D4A800;">${budget}</td></tr>
          </table>
          <div style="margin-top: 1.5rem; background: #FAFAFA; border-left: 4px solid #F5C800; border-radius: 4px; padding: 1rem;">
            <p style="color: #737373; font-size: 0.85rem; margin: 0 0 0.5rem 0; font-weight: 600;">Requirements:</p>
            <p style="margin: 0; line-height: 1.6; color: #0D0D0D;">${needs.replace(/\n/g, "<br>")}</p>
          </div>
          <p style="margin-top: 1.5rem; color: #A3A3A3; font-size: 0.8rem;">Submitted: ${new Date().toLocaleString("en-PH", { timeZone: "Asia/Manila" })} (PH Time)</p>
        </div>
        <div style="background: #0D0D0D; padding: 1rem 2rem; text-align: center;">
          <p style="color: #737373; font-size: 0.75rem; margin: 0;">MCN Restaurant Supplies Chain Solutions · <span style="color: #F5C800;">Smart sourcing. Real savings.</span></p>
        </div>
      </div>
    `;

    const clientEmailHtml = `
      <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; color: #0D0D0D; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08);">
        <div style="background: linear-gradient(135deg, #FFE566 0%, #F5C800 60%, #D4A800 100%); padding: 1.5rem 2rem;">
          <h1 style="color: #0D0D0D; margin: 0; font-size: 1.25rem; font-weight: 700;">✅ Quote Request Confirmed!</h1>
          <p style="color: #0D0D0D; margin: 0.25rem 0 0 0; font-size: 0.85rem; opacity: 0.7;">MCN Restaurant Supplies Chain Solutions</p>
        </div>
        <div style="padding: 2rem;">
          <p style="margin: 0 0 0.5rem 0;">Hi <strong>${fullName}</strong>,</p>
          <p style="line-height: 1.6; color: #737373; margin: 0 0 1.5rem 0;">Thank you for your interest! We've received your quote request for <strong style="color: #0D0D0D;">${companyName}</strong>.</p>
          <div style="background: #FAFAFA; border-left: 4px solid #F5C800; border-radius: 4px; padding: 1.25rem; margin-bottom: 1.5rem;">
            <p style="margin: 0 0 0.75rem 0; font-weight: 700; color: #0D0D0D;">What happens next?</p>
            <ul style="margin: 0; padding-left: 1.25rem; line-height: 2; color: #737373;">
              <li>Our team will review your requirements</li>
              <li>We'll contact verified factory partners in China</li>
              <li>You'll receive a detailed quotation within <strong style="color: #D4A800;">24–48 hours</strong></li>
            </ul>
          </div>
          <div style="background: #0D0D0D; border-radius: 10px; padding: 1rem 1.25rem; margin-bottom: 1.5rem;">
            <p style="margin: 0; color: #F5C800; font-size: 0.85rem; font-weight: 600;">⚠️ Minimum Order Reminder</p>
            <p style="margin: 0.25rem 0 0 0; color: #A3A3A3; font-size: 0.85rem;">Minimum order is <strong style="color: #ffffff;">₱200,000</strong>. This will be confirmed during your quote.</p>
          </div>
          <p style="line-height: 1.6; color: #737373; font-size: 0.9rem;">For urgent inquiries, reach us on Viber: <a href="viber://chat?number=%2B639669765949" style="color: #D4A800; font-weight: 600;">+63 966 976 5949</a></p>
        </div>
        <div style="background: #0D0D0D; padding: 1rem 2rem; text-align: center;">
          <p style="color: #737373; font-size: 0.75rem; margin: 0;">MCN Restaurant Supplies Chain Solutions · <span style="color: #F5C800;">Smart sourcing. Real savings.</span></p>
        </div>
      </div>
    `;

    const FROM_EMAIL = process.env.FROM_EMAIL || "MCN Supplies <onboarding@resend.dev>";

    // Send admin and client emails separately so one failure doesn't block the other
    const adminSend = await resend.emails.send({
      from: FROM_EMAIL,
      to: [ADMIN_EMAIL],
      subject: `🆕 New Quote Request from ${fullName} - ${companyName}`,
      html: adminEmailHtml,
      text: `New quote request\n\nName: ${fullName}\nCompany: ${companyName}\nEmail: ${email}\nPhone/Viber: ${phone}\nBusiness Type: ${businessType}\nBudget: ${budget}\n\nRequirements:\n${needs}`,
      replyTo: email,
    });

    const clientSend = await resend.emails.send({
      from: FROM_EMAIL,
      to: [email],
      subject: "✅ Your Quote Request Has Been Received — MCN Supplies",
      html: clientEmailHtml,
      text: `Hi ${fullName},\n\nThanks for your quote request to MCN Restaurant Supplies.\n\nWe received your request for ${companyName}. Our team will review your requirements and send your detailed quotation within 24–48 hours.\n\nFor urgent inquiries, contact us on Viber: +63 966 976 5949\n\n— MCN Restaurant Supplies`,
      replyTo: ADMIN_EMAIL,
    });

    if ((adminSend as any)?.error) {
      console.error("Admin email send error:", (adminSend as any).error);
    }

    if ((clientSend as any)?.error) {
      console.error("Client email send error:", (clientSend as any).error);
      return NextResponse.json(
        {
          success: false,
          message: "Quote saved, but client confirmation email failed to send. Please verify sender domain and recipient inbox/spam.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true, message: "Quote request submitted successfully" });
  } catch (error) {
    console.error("Quote API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
