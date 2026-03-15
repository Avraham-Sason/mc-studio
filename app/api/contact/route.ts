import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const LEADS_FILE = path.join(process.cwd(), "leads.json");

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Read existing leads
    let leads: unknown[] = [];
    try {
      const existing = await fs.readFile(LEADS_FILE, "utf-8");
      leads = JSON.parse(existing);
    } catch {
      // File doesn't exist yet — start fresh
    }

    // Append new lead
    leads.push({
      id: Date.now(),
      ...data,
      receivedAt: new Date().toISOString(),
    });

    // Save
    await fs.writeFile(LEADS_FILE, JSON.stringify(leads, null, 2), "utf-8");

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to save lead" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const data = await fs.readFile(LEADS_FILE, "utf-8");
    return NextResponse.json(JSON.parse(data));
  } catch {
    return NextResponse.json([]);
  }
}
