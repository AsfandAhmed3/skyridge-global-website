import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  focus: string;
  timeline: string;
  budget: string;
  firstName: string;
  lastName: string;
  email: string;
  message?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getRoutingEmail(advisoryFocus: string): string {
  switch (advisoryFocus) {
    case "Migration Advisory":
      return "migration@skyridgeglobal.com";
    case "Business & Deal Advisory":
      return "deals@skyridgeglobal.com";
    case "Private Office Coordination":
    case "Corporate Structuring":
    default:
      return "info@skyridgeglobal.com";
  }
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const osmansEmail = "osman@skyridgeglobal.com"; // CC for all submissions
  const fromAddress =
    process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

  if (!apiKey) {
    return NextResponse.json(
      { error: "Missing RESEND_API_KEY" },
      { status: 500 }
    );
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const required = [
    payload.focus,
    payload.timeline,
    payload.budget,
    payload.firstName,
    payload.lastName,
    payload.email,
  ];

  if (required.some((value) => !value)) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  if (!emailPattern.test(payload.email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const toAddress = getRoutingEmail(payload.focus);
  const resend = new Resend(apiKey);
  const subject = `Skyridge Global Inquiry: ${payload.focus}`;
  const text = [
    `Name: ${payload.firstName} ${payload.lastName}`,
    `Email: ${payload.email}`,
    `Focus: ${payload.focus}`,
    `Timeline: ${payload.timeline}`,
    `Budget: ${payload.budget}`,
    `Notes: ${payload.message || "N/A"}`,
  ].join("\n");

  try {
    await resend.emails.send({
      from: fromAddress,
      to: toAddress,
      cc: osmansEmail,
      subject,
      text,
      replyTo: payload.email,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Email send failed" },
      { status: 500 }
    );
  }
}
