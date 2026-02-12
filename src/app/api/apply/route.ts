import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { type, html } = await request.json();

    if (!type || !html) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const subject =
      type === "driver" ? "Driver Application" : "Factory Application";

    await resend.emails.send({
      from: "Dutch Craft Applications <onboarding@resend.dev>",
      to: "claypowersports.tiffanyh@gmail.com",
      subject,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send application" },
      { status: 500 }
    );
  }
}
