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

export const portfolioImages: PortfolioImage[] = [
  // Events
  { id: "ev1", src: "/images/Events/0Y0A3014.jpeg", alt: { en: "Event photography", he: "צילום אירועים" }, category: "events", width: 1200, height: 800, featured: true, priority: true },
  { id: "ev2", src: "/images/Events/0Y0A3268.jpeg", alt: { en: "Event photography", he: "צילום אירועים" }, category: "events", width: 1200, height: 800 },
  { id: "ev3", src: "/images/Events/0Y0A3345.jpeg", alt: { en: "Event photography", he: "צילום אירועים" }, category: "events", width: 1200, height: 800, featured: true },
  { id: "ev4", src: "/images/Events/0Y0A3393.jpeg", alt: { en: "Event photography", he: "צילום אירועים" }, category: "events", width: 1200, height: 800 },
  { id: "ev5", src: "/images/Events/0Y0A6155.jpeg", alt: { en: "Event photography", he: "צילום אירועים" }, category: "events", width: 1200, height: 800 },
  { id: "ev6", src: "/images/Events/0Y0A6229.jpeg", alt: { en: "Event photography", he: "צילום אירועים" }, category: "events", width: 1200, height: 800 },
  { id: "ev7", src: "/images/Events/0Y0A6252.jpeg", alt: { en: "Event photography", he: "צילום אירועים" }, category: "events", width: 1200, height: 800 },
  { id: "ev8", src: "/images/Events/0Y0A7772.jpeg", alt: { en: "Event photography", he: "צילום אירועים" }, category: "events", width: 1200, height: 800 },
  { id: "ev9", src: "/images/Events/0Y0A7779.jpeg", alt: { en: "Event photography", he: "צילום אירועים" }, category: "events", width: 1200, height: 800 },
  { id: "ev10", src: "/images/Events/0Y0A7870.jpeg", alt: { en: "Event photography", he: "צילום אירועים" }, category: "events", width: 1200, height: 800 },
  { id: "ev11", src: "/images/Events/0Y0A7928.jpeg", alt: { en: "Event photography", he: "צילום אירועים" }, category: "events", width: 1200, height: 800 },
  { id: "ev12", src: "/images/Events/0Y0A8028.jpeg", alt: { en: "Event photography", he: "צילום אירועים" }, category: "events", width: 1200, height: 800 },
  { id: "ev13", src: "/images/Events/Y0A6003.jpeg", alt: { en: "Event photography", he: "צילום אירועים" }, category: "events", width: 1200, height: 800 },

  // Family
  { id: "fm1", src: "/images/family/0Y0A0364.jpeg", alt: { en: "Family photography", he: "צילום משפחה" }, category: "family", width: 1200, height: 800, featured: true, priority: true },
  { id: "fm2", src: "/images/family/0Y0A0374.jpeg", alt: { en: "Family photography", he: "צילום משפחה" }, category: "family", width: 1200, height: 800 },
  { id: "fm3", src: "/images/family/0Y0A0482.jpeg", alt: { en: "Family photography", he: "צילום משפחה" }, category: "family", width: 1200, height: 800, featured: true },
  { id: "fm4", src: "/images/family/0Y0A0610.jpeg", alt: { en: "Family photography", he: "צילום משפחה" }, category: "family", width: 1200, height: 800 },
  { id: "fm5", src: "/images/family/0Y0A0655.jpeg", alt: { en: "Family photography", he: "צילום משפחה" }, category: "family", width: 1200, height: 800 },
  { id: "fm6", src: "/images/family/0Y0A0661.jpeg", alt: { en: "Family photography", he: "צילום משפחה" }, category: "family", width: 1200, height: 800 },
  { id: "fm7", src: "/images/family/0Y0A0909.jpeg", alt: { en: "Family photography", he: "צילום משפחה" }, category: "family", width: 1200, height: 800 },
  { id: "fm8", src: "/images/family/0Y0A9307.jpeg", alt: { en: "Family photography", he: "צילום משפחה" }, category: "family", width: 1200, height: 800 },
  { id: "fm9", src: "/images/family/0Y0A9355.jpeg", alt: { en: "Family photography", he: "צילום משפחה" }, category: "family", width: 1200, height: 800 },
  { id: "fm10", src: "/images/family/0Y0A9447.jpeg", alt: { en: "Family photography", he: "צילום משפחה" }, category: "family", width: 1200, height: 800 },
  { id: "fm11", src: "/images/family/0Y0A9618.jpeg", alt: { en: "Family photography", he: "צילום משפחה" }, category: "family", width: 1200, height: 800 },
  { id: "fm12", src: "/images/family/0Y0A9636.jpeg", alt: { en: "Family photography", he: "צילום משפחה" }, category: "family", width: 1200, height: 800 },
  { id: "fm13", src: "/images/family/0Y0A9748.jpeg", alt: { en: "Family photography", he: "צילום משפחה" }, category: "family", width: 1200, height: 800 },
  { id: "fm14", src: "/images/family/0Y0A9844.jpeg", alt: { en: "Family photography", he: "צילום משפחה" }, category: "family", width: 1200, height: 800 },
  { id: "fm15", src: "/images/family/0Y0A9849.jpeg", alt: { en: "Family photography", he: "צילום משפחה" }, category: "family", width: 1200, height: 800 },
  { id: "fm16", src: "/images/family/0Y0A9890.jpeg", alt: { en: "Family photography", he: "צילום משפחה" }, category: "family", width: 1200, height: 800 },
  { id: "fm17", src: "/images/family/0Y0A9966.jpeg", alt: { en: "Family photography", he: "צילום משפחה" }, category: "family", width: 1200, height: 800 },
  { id: "fm18", src: "/images/family/70CFE7C-8A5B-4393-B9A7-C7A1C7E074AB~photo.jpeg", alt: { en: "Family photography", he: "צילום משפחה" }, category: "family", width: 1200, height: 800 },
  { id: "fm19", src: "/images/family/9631A094-4962-4EB3-8BE1-198CF9666734.jpeg", alt: { en: "Family photography", he: "צילום משפחה" }, category: "family", width: 1200, height: 800 },
  { id: "fm20", src: "/images/family/C6EDD7E1-99D5-49C6-BF72-247A375993C0.jpeg", alt: { en: "Family photography", he: "צילום משפחה" }, category: "family", width: 1200, height: 800 },
  { id: "fm21", src: "/images/family/D28B91F-78F1-49C1-87F7-90F1A5905B2A~photo.jpeg", alt: { en: "Family photography", he: "צילום משפחה" }, category: "family", width: 1200, height: 800 },

  // Gender Reveal
  { id: "gr1", src: "/images/gender_reveal/0Y0A0069.jpeg", alt: { en: "Gender reveal photography", he: "צילום גילוי מין עובר" }, category: "gender_reveal", width: 1200, height: 800, featured: true, priority: true },
  { id: "gr2", src: "/images/gender_reveal/0Y0A0074.jpeg", alt: { en: "Gender reveal photography", he: "צילום גילוי מין עובר" }, category: "gender_reveal", width: 1200, height: 800 },
  { id: "gr3", src: "/images/gender_reveal/0Y0A0127.jpeg", alt: { en: "Gender reveal photography", he: "צילום גילוי מין עובר" }, category: "gender_reveal", width: 1200, height: 800, featured: true },
  { id: "gr4", src: "/images/gender_reveal/0Y0A0189.jpeg", alt: { en: "Gender reveal photography", he: "צילום גילוי מין עובר" }, category: "gender_reveal", width: 1200, height: 800 },
  { id: "gr5", src: "/images/gender_reveal/0Y0A0303.jpeg", alt: { en: "Gender reveal photography", he: "צילום גילוי מין עובר" }, category: "gender_reveal", width: 1200, height: 800 },
  { id: "gr6", src: "/images/gender_reveal/0Y0A0418.jpeg", alt: { en: "Gender reveal photography", he: "צילום גילוי מין עובר" }, category: "gender_reveal", width: 1200, height: 800 },
  { id: "gr7", src: "/images/gender_reveal/0Y0A0467.jpeg", alt: { en: "Gender reveal photography", he: "צילום גילוי מין עובר" }, category: "gender_reveal", width: 1200, height: 800 },
  { id: "gr8", src: "/images/gender_reveal/0Y0A0544.jpeg", alt: { en: "Gender reveal photography", he: "צילום גילוי מין עובר" }, category: "gender_reveal", width: 1200, height: 800 },

  // Marriage Proposal
  { id: "mp1", src: "/images/marriage_proposal/0Y0A1685.jpeg", alt: { en: "Marriage proposal photography", he: "צילום הצעת נישואים" }, category: "marriage_proposal", width: 1200, height: 800, featured: true, priority: true },
  { id: "mp2", src: "/images/marriage_proposal/0Y0A1691.jpeg", alt: { en: "Marriage proposal photography", he: "צילום הצעת נישואים" }, category: "marriage_proposal", width: 1200, height: 800 },
  { id: "mp3", src: "/images/marriage_proposal/0Y0A1823.jpeg", alt: { en: "Marriage proposal photography", he: "צילום הצעת נישואים" }, category: "marriage_proposal", width: 1200, height: 800, featured: true },
  { id: "mp4", src: "/images/marriage_proposal/0Y0A2041.jpeg", alt: { en: "Marriage proposal photography", he: "צילום הצעת נישואים" }, category: "marriage_proposal", width: 1200, height: 800 },
  { id: "mp5", src: "/images/marriage_proposal/0Y0A2247.jpeg", alt: { en: "Marriage proposal photography", he: "צילום הצעת נישואים" }, category: "marriage_proposal", width: 1200, height: 800 },
  { id: "mp6", src: "/images/marriage_proposal/0Y0A2325.jpeg", alt: { en: "Marriage proposal photography", he: "צילום הצעת נישואים" }, category: "marriage_proposal", width: 1200, height: 800 },
  { id: "mp7", src: "/images/marriage_proposal/0Y0A2331.jpeg", alt: { en: "Marriage proposal photography", he: "צילום הצעת נישואים" }, category: "marriage_proposal", width: 1200, height: 800 },
  { id: "mp8", src: "/images/marriage_proposal/0Y0A7438.jpeg", alt: { en: "Marriage proposal photography", he: "צילום הצעת נישואים" }, category: "marriage_proposal", width: 1200, height: 800 },
  { id: "mp9", src: "/images/marriage_proposal/0Y0A7492.jpeg", alt: { en: "Marriage proposal photography", he: "צילום הצעת נישואים" }, category: "marriage_proposal", width: 1200, height: 800 },
  { id: "mp10", src: "/images/marriage_proposal/0Y0A8284.jpeg", alt: { en: "Marriage proposal photography", he: "צילום הצעת נישואים" }, category: "marriage_proposal", width: 1200, height: 800 },
  { id: "mp11", src: "/images/marriage_proposal/0Y0A8512.jpeg", alt: { en: "Marriage proposal photography", he: "צילום הצעת נישואים" }, category: "marriage_proposal", width: 1200, height: 800 },
  { id: "mp12", src: "/images/marriage_proposal/Y0A7374.jpeg", alt: { en: "Marriage proposal photography", he: "צילום הצעת נישואים" }, category: "marriage_proposal", width: 1200, height: 800 },

  // Pregnancy
  { id: "pg1", src: "/images/pregnancy/0Y0A3368.jpeg", alt: { en: "Pregnancy photography", he: "צילום הריון" }, category: "pregnancy", width: 1200, height: 800, featured: true, priority: true },
  { id: "pg2", src: "/images/pregnancy/0Y0A3384.jpeg", alt: { en: "Pregnancy photography", he: "צילום הריון" }, category: "pregnancy", width: 1200, height: 800 },
  { id: "pg3", src: "/images/pregnancy/0Y0A3434.jpeg", alt: { en: "Pregnancy photography", he: "צילום הריון" }, category: "pregnancy", width: 1200, height: 800, featured: true },
  { id: "pg4", src: "/images/pregnancy/0Y0A3455.jpeg", alt: { en: "Pregnancy photography", he: "צילום הריון" }, category: "pregnancy", width: 1200, height: 800 },
  { id: "pg5", src: "/images/pregnancy/0Y0A3518.jpeg", alt: { en: "Pregnancy photography", he: "צילום הריון" }, category: "pregnancy", width: 1200, height: 800 },
  { id: "pg6", src: "/images/pregnancy/0Y0A3671.jpeg", alt: { en: "Pregnancy photography", he: "צילום הריון" }, category: "pregnancy", width: 1200, height: 800 },
  { id: "pg7", src: "/images/pregnancy/0Y0A3681.jpeg", alt: { en: "Pregnancy photography", he: "צילום הריון" }, category: "pregnancy", width: 1200, height: 800 },
  { id: "pg8", src: "/images/pregnancy/0Y0A3745.jpeg", alt: { en: "Pregnancy photography", he: "צילום הריון" }, category: "pregnancy", width: 1200, height: 800 },
  { id: "pg9", src: "/images/pregnancy/207F02FA-E9E3-4948-906E-E5FEE06963D1.jpeg", alt: { en: "Pregnancy photography", he: "צילום הריון" }, category: "pregnancy", width: 1200, height: 800 },
  { id: "pg10", src: "/images/pregnancy/41418BF8-C476-4141-BFFB-9547D63A9945.jpeg", alt: { en: "Pregnancy photography", he: "צילום הריון" }, category: "pregnancy", width: 1200, height: 800 },
  { id: "pg11", src: "/images/pregnancy/5C7EE8C7-0DF9-4ACF-81F9-B69CFBB553E6.jpeg", alt: { en: "Pregnancy photography", he: "צילום הריון" }, category: "pregnancy", width: 1200, height: 800 },
  { id: "pg12", src: "/images/pregnancy/623C0193-AD4E-4974-875A-271FE70F9367.jpeg", alt: { en: "Pregnancy photography", he: "צילום הריון" }, category: "pregnancy", width: 1200, height: 800 },
  { id: "pg13", src: "/images/pregnancy/80EF8609-8E7B-4D04-A01C-F18630013024.jpeg", alt: { en: "Pregnancy photography", he: "צילום הריון" }, category: "pregnancy", width: 1200, height: 800 },
  { id: "pg14", src: "/images/pregnancy/E9C7CB7-9AF7-4BAC-BD68-0005D8550B66~photo.jpeg", alt: { en: "Pregnancy photography", he: "צילום הריון" }, category: "pregnancy", width: 1200, height: 800 },
];

export const heroSlides = [
  {
    src: "/images/Events/0Y0A3014.jpeg",
    alt: { en: "Event photography by MC Studio", he: "צילום אירועים MC Studio" },
  },
  {
    src: "/images/family/0Y0A0364.jpeg",
    alt: { en: "Family photography by MC Studio", he: "צילום משפחה MC Studio" },
  },
  {
    src: "/images/marriage_proposal/0Y0A1685.jpeg",
    alt: { en: "Marriage proposal photography by MC Studio", he: "צילום הצעת נישואים MC Studio" },
  },
  {
    src: "/images/pregnancy/0Y0A3368.jpeg",
    alt: { en: "Pregnancy photography by MC Studio", he: "צילום הריון MC Studio" },
  },
  {
    src: "/images/gender_reveal/0Y0A0069.jpeg",
    alt: { en: "Gender reveal photography by MC Studio", he: "צילום גילוי מין עובר MC Studio" },
  },
];

export const featuredProjects = [
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
    images: [
      "/images/Events/0Y0A3014.jpeg",
      "/images/Events/0Y0A3268.jpeg",
      "/images/Events/0Y0A7772.jpeg",
      "/images/Events/0Y0A7928.jpeg",
    ],
  },
];

export function getImagesByCategory(category: PortfolioImage["category"]) {
  return portfolioImages.filter((img) => img.category === category);
}

export function getFeaturedImages() {
  return portfolioImages.filter((img) => img.featured);
}
