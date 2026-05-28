import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

// Very lightweight in-memory rate limit (per-instance). For real-world abuse
// resistance, swap for an upstash/redis-backed limiter.
const HITS = new Map<string, { count: number; reset: number }>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = HITS.get(ip);
  if (!entry || now > entry.reset) {
    HITS.set(ip, { count: 1, reset: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_PER_WINDOW;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    return NextResponse.json(
      { success: false, message: "Server is not configured" },
      { status: 500 }
    );
  }

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("cf-connecting-ip") ||
    "unknown";

  if (rateLimited(ip)) {
    return NextResponse.json(
      { success: false, message: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  let body: { name?: string; email?: string; message?: string; honeypot?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request" },
      { status: 400 }
    );
  }

  // Honeypot: real users never fill this hidden field.
  if (body.honeypot && body.honeypot.length > 0) {
    return NextResponse.json({ success: true, message: "OK" });
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const message = (body.message || "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { success: false, message: "All fields are required" },
      { status: 400 }
    );
  }
  if (name.length > 100 || email.length > 200 || message.length > 5000) {
    return NextResponse.json(
      { success: false, message: "Input too long" },
      { status: 400 }
    );
  }
  if (!isValidEmail(email)) {
    return NextResponse.json(
      { success: false, message: "Invalid email address" },
      { status: 400 }
    );
  }

  const upstream = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      name,
      email,
      message,
      subject: `New portfolio message from ${name}`,
      from_name: "Portfolio Contact Form",
    }),
  });

  const data = await upstream.json().catch(() => ({}));

  if (!upstream.ok || !data?.success) {
    return NextResponse.json(
      { success: false, message: data?.message || "Failed to send message" },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true, message: "Message sent" });
}
