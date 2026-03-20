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
    const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@mcn-supplies.com";

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
      <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #ffffff; padding: 2rem; border-radius: 12px;">
        <div style="border-bottom: 3px solid #f97316; padding-bottom: 1rem; margin-bottom: 1.5rem;">
          <h1 style="color: #f97316; margin: 0; font-size: 1.5rem;">🆕 New Quote Request</h1>
          <p style="color: #888; margin: 0.25rem 0 0 0; font-size: 0.9rem;">MCN Restaurant Supplies Chain Solutions</p>
        </div>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 0.5rem 0; color: #888; font-size: 0.85rem; width: 40%;">Full Name</td><td style="padding: 0.5rem 0; font-weight: 600;">${fullName}</td></tr>
          <tr><td style="padding: 0.5rem 0; color: #888; font-size: 0.85rem;">Company</td><td style="padding: 0.5rem 0; font-weight: 600;">${companyName}</td></tr>
          <tr><td style="padding: 0.5rem 0; color: #888; font-size: 0.85rem;">Email</td><td style="padding: 0.5rem 0; font-weight: 600;"><a href="mailto:${email}" style="color: #f97316;">${email}</a></td></tr>
          <tr><td style="padding: 0.5rem 0; color: #888; font-size: 0.85rem;">Phone/WhatsApp</td><td style="padding: 0.5rem 0; font-weight: 600;">${phone}</td></tr>
          <tr><td style="padding: 0.5rem 0; color: #888; font-size: 0.85rem;">Business Type</td><td style="padding: 0.5rem 0; font-weight: 600;">${businessType}</td></tr>
          <tr><td style="padding: 0.5rem 0; color: #888; font-size: 0.85rem;">Budget</td><td style="padding: 0.5rem 0; font-weight: 600; color: #f97316;">${budget}</td></tr>
        </table>
        <div style="margin-top: 1.5rem; background: #1a1a1a; border-radius: 8px; padding: 1rem;">
          <p style="color: #888; font-size: 0.85rem; margin: 0 0 0.5rem 0;">Requirements:</p>
          <p style="margin: 0; line-height: 1.6;">${needs.replace(/\n/g, "<br>")}</p>
        </div>
        <p style="margin-top: 1.5rem; color: #888; font-size: 0.8rem;">Submitted: ${new Date().toLocaleString("en-PH", { timeZone: "Asia/Manila" })} (PH Time)</p>
      </div>
    `;

    const clientEmailHtml = `
      <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #ffffff; padding: 2rem; border-radius: 12px;">
        <div style="border-bottom: 3px solid #f97316; padding-bottom: 1rem; margin-bottom: 1.5rem;">
          <h1 style="color: #f97316; margin: 0; font-size: 1.5rem;">✅ Quote Request Confirmed!</h1>
          <p style="color: #888; margin: 0.25rem 0 0 0; font-size: 0.9rem;">MCN Restaurant Supplies Chain Solutions</p>
        </div>
        <p>Hi <strong>${fullName}</strong>,</p>
        <p style="line-height: 1.6; opacity: 0.8;">Thank you for your interest! We've received your quote request for <strong>${companyName}</strong>.</p>
        <div style="background: #1a1a1a; border-left: 4px solid #f97316; border-radius: 4px; padding: 1rem; margin: 1.5rem 0;">
          <p style="margin: 0; font-weight: 600;">What happens next?</p>
          <ul style="margin: 0.75rem 0 0 0; padding-left: 1.25rem; line-height: 1.8; opacity: 0.8;">
            <li>Our team will review your requirements</li>
            <li>We'll contact verified factory partners in China</li>
            <li>You'll receive a detailed quotation within <strong style="color: #f97316;">24–48 hours</strong></li>
          </ul>
        </div>
        <p style="line-height: 1.6; opacity: 0.8;">For urgent inquiries, reach us directly on WhatsApp: <a href="https://wa.me/63XXXXXXXXX" style="color: #f97316;">+63 XXXXXXXXX</a></p>
        <div style="margin-top: 2rem; padding-top: 1rem; border-top: 1px solid #333;">
          <p style="color: #888; font-size: 0.85rem; margin: 0;">MCN Restaurant Supplies Chain Solutions</p>
          <p style="color: #888; font-size: 0.8rem; margin: 0.25rem 0 0 0; font-style: italic;">Smart sourcing. Real savings.</p>
        </div>
      </div>
    `;

    // Send both emails concurrently
    await Promise.all([
      resend.emails.send({
        from: "MCN Supplies <noreply@mcn-supplies.com>",
        to: [ADMIN_EMAIL],
        subject: `🆕 New Quote Request from ${fullName} - ${companyName}`,
        html: adminEmailHtml,
      }),
      resend.emails.send({
        from: "MCN Restaurant Supplies <noreply@mcn-supplies.com>",
        to: [email],
        subject: "✅ Your Quote Request Has Been Received — MCN Supplies",
        html: clientEmailHtml,
      }),
    ]);

    return NextResponse.json({ success: true, message: "Quote request submitted successfully" });
  } catch (error) {
    console.error("Quote API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
