import { NextResponse } from "next/server";
import { getAllImages } from "@/lib/get-portfolio-images";

export const dynamic = "force-dynamic";

export async function GET() {
  const images = getAllImages();
  return NextResponse.json(images);
}
