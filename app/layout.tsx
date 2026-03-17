import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MC Studio — Professional Photography Across Israel",
  description:
    "MC Studio — Professional photography across Israel. Events, portraits, family. Zero compromises, stunning results.",
  metadataBase: new URL("https://mc-studio-eta.vercel.app"),
  manifest: "/manifest.json",
  icons: {
    icon: "/images/icon-192.png",
    apple: "/images/apple-touch-icon.png",
  },
  openGraph: {
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "MC Studio — Professional Photography",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
