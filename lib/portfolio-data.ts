export interface PortfolioImage {
  id: string;
  src: string;
  alt: { en: string; he: string };
  category: "events" | "family" | "gender_reveal" | "marriage_proposal" | "pregnancy";
  width: number;
  height: number;
  blurDataURL?: string;
  featured?: boolean;
  priority?: boolean;
}

// Text metadata only — images are loaded dynamically from the filesystem
export const featuredProjectsMeta = [
  {
    category: "events" as const,
    title: { en: "Magical Events", he: "אירועים קסומים" },
    eventType: { en: "Events", he: "אירועים" },
    location: { en: "Israel", he: "ישראל" },
    description: {
      en: "Capturing the most memorable moments of your special events with stunning photography.",
      he: "מנציחים את הרגעים הבלתי נשכחים של האירועים המיוחדים שלכם בצילום מרהיב.",
    },
    clientQuote: {
      en: "Every photo feels like a movie scene. We relive our event every time we open the album.",
      he: "כל תמונה מרגישה כמו סצנה מסרט. אנחנו חוזרים לחיות את האירוע בכל פעם שנפתח את האלבום.",
    },
    clientName: { en: "Happy Clients", he: "לקוחות מרוצים" },
  },
];
