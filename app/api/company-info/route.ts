import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    name: "MC Studio",
    type: "Photography Studio",
    description:
      "Premium photography studio offering professional services across Israel",
    location: {
      country: "Israel",
      coverage: "Nationwide — from Eilat to Metula",
    },
    services: [
      {
        name: "Wedding & Event Photography",
        description:
          "Full-day coverage and events, capturing every meaningful moment from ceremony to celebration.",
        deliverables: [
          "Full-day coverage",
          "Engagement session",
          "500+ edited photos",
          "Online gallery",
          "Premium album design",
        ],
      },
      {
        name: "Portrait Photography",
        description:
          "Family portraits, pregnancy sessions, professional headshots, and styled portrait sessions.",
        deliverables: [
          "1-2 hour session",
          "30+ retouched images",
          "Studio or outdoor",
          "Multiple outfit changes",
          "Print-ready files",
        ],
      },
      {
        name: "Commercial Photography",
        description:
          "Product photography, brand visuals, and commercial imagery for businesses and e-commerce.",
        deliverables: [
          "Product photography",
          "Brand identity visuals",
          "E-commerce optimized images",
          "Team headshots",
          "Social media content",
        ],
      },
    ],
    differentiators: [
      "Zero compromises — we reshoot if needed",
      "Unlimited editing revisions until full client satisfaction",
      "Nationwide coverage across all of Israel",
      "Boutique-level personal service for every project",
      "Versatile expertise across events, portraits, and commercial work",
    ],
    testimonials: [
      {
        quote:
          "We cried when we saw our photos — every single moment was captured beautifully.",
        author: "Sarah & Daniel",
        event: "Wedding, Tel Aviv",
      },
      {
        quote:
          "We finally have a photo that truly reflects who we are as a family.",
        author: "The Cohen Family",
        event: "Family Portrait, Jerusalem",
      },
      {
        quote:
          "Our product photos increased our online sales by 40%. The quality speaks for itself.",
        author: "Maya L.",
        event: "Product Photography, Haifa",
      },
    ],
    contact: {
      phone: "+972-54-795-9311",
      email: "Moshechaim22@gmail.com",
      whatsapp: "+972547959311",
      website: "https://mc-studio-eta.vercel.app",
      instagram: "@mshhkhyymkhn",
    },
    languages: ["Hebrew", "English"],
    stats: {
      sessions: "1200+",
      events: "350+",
      satisfaction: "100%",
    },
  });
}
