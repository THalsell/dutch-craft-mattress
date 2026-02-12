import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { html } = await request.json();

    if (!html) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    await resend.emails.send({
      from: "Dutch Craft <onboarding@resend.dev>",
      to: "claypowersports.tiffanyh@gmail.com",
      subject: "Partner With Us Inquiry",
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send inquiry" },
      { status: 500 }
    );
  }
}
