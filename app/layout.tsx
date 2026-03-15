import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MC Studio — Professional Photography Across Israel",
  description:
    "MC Studio — Professional photography across Israel. Weddings, portraits, commercial. Zero compromises, stunning results.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
