import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const {
      name,
      address,
      email,
      purchaseDate,
      mattressModel,
      mattressSize,
      whyBought,
      dealershipName,
      dealershipCity,
      dealershipState,
      withFoundation,
      dealershipFeedback,
    } = await request.json();

    if (
      !name ||
      !address ||
      !email ||
      !purchaseDate ||
      !mattressModel ||
      !mattressSize ||
      !whyBought ||
      !dealershipName ||
      !dealershipCity ||
      !dealershipState ||
      !withFoundation
    ) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await resend.emails.send({
      from: "Dutch Craft Website <onboarding@resend.dev>",
      to: "eli@twlakes.net",
      subject: `Mattress Warranty Registration — ${name}`,
      html: `
        <h2 style="font-family:sans-serif;">Dutch Craft Mattress — Warranty Registration</h2>
        <table style="font-family:sans-serif;border-collapse:collapse;width:100%;max-width:560px;">
          <tr><td style="padding:8px 12px;font-weight:bold;color:#444;">Name</td><td style="padding:8px 12px;">${name}</td></tr>
          <tr style="background:#f9f9f9;"><td style="padding:8px 12px;font-weight:bold;color:#444;">Address</td><td style="padding:8px 12px;">${address}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;color:#444;">Email</td><td style="padding:8px 12px;">${email}</td></tr>
          <tr style="background:#f9f9f9;"><td style="padding:8px 12px;font-weight:bold;color:#444;">Date of Purchase</td><td style="padding:8px 12px;">${purchaseDate}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;color:#444;">Mattress</td><td style="padding:8px 12px;">${mattressModel} — ${mattressSize}</td></tr>
          <tr style="background:#f9f9f9;"><td style="padding:8px 12px;font-weight:bold;color:#444;">Why They Bought It</td><td style="padding:8px 12px;">${whyBought.replace(/\n/g, "<br>")}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;color:#444;">Dealership</td><td style="padding:8px 12px;">${dealershipName}, ${dealershipCity}, ${dealershipState}</td></tr>
          <tr style="background:#f9f9f9;"><td style="padding:8px 12px;font-weight:bold;color:#444;">Purchased with Foundation</td><td style="padding:8px 12px;">${withFoundation}</td></tr>
          ${dealershipFeedback ? `<tr><td style="padding:8px 12px;font-weight:bold;color:#444;">Dealership Feedback</td><td style="padding:8px 12px;">${dealershipFeedback.replace(/\n/g, "<br>")}</td></tr>` : ""}
        </table>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Registration email error:", error);
    return NextResponse.json({ error: "Failed to send registration" }, { status: 500 });
  }
}
