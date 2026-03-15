export interface PortfolioImage {
  id: string;
  src: string;
  alt: { en: string; he: string };
  category: "weddings" | "portraits" | "commercial";
  subcategory?: string;
  width: number;
  height: number;
  blurDataURL?: string;
  featured?: boolean;
  priority?: boolean;
  location?: string;
}

// Unsplash placeholder images for each category
export const portfolioImages: PortfolioImage[] = [
  // Weddings
  {
    id: "w1",
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=85",
    alt: { en: "Romantic wedding ceremony at sunset", he: "טקס חתונה רומנטי בשקיעה" },
    category: "weddings",
    subcategory: "ceremony",
    width: 1200,
    height: 800,
    featured: true,
    priority: true,
    location: "Tel Aviv",
  },
  {
    id: "w2",
    src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1200&q=85",
    alt: { en: "Bride and groom first dance", he: "ריקוד ראשון של חתן וכלה" },
    category: "weddings",
    subcategory: "reception",
    width: 1200,
    height: 1600,
    featured: true,
    location: "Jerusalem",
  },
  {
    id: "w3",
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1200&q=85",
    alt: { en: "Wedding bouquet close-up details", he: "פרטי זר כלה מקרוב" },
    category: "weddings",
    subcategory: "details",
    width: 1200,
    height: 900,
    featured: true,
    location: "Haifa",
  },
  {
    id: "w4",
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&q=85",
    alt: { en: "Joyful wedding celebration with guests", he: "חגיגת חתונה שמחה עם אורחים" },
    category: "weddings",
    width: 1200,
    height: 800,
    location: "Tel Aviv",
  },
  {
    id: "w5",
    src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&q=85",
    alt: { en: "Elegant outdoor wedding venue", he: "מקום חתונה חיצוני אלגנטי" },
    category: "weddings",
    subcategory: "venue",
    width: 1200,
    height: 800,
    location: "Galilee",
  },
  {
    id: "w6",
    src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=1200&q=85",
    alt: { en: "Couple portrait in golden hour light", he: "פורטרט זוגי באור שעת הזהב" },
    category: "weddings",
    subcategory: "couple",
    width: 1200,
    height: 1600,
    location: "Caesarea",
  },
  {
    id: "w7",
    src: "https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=1200&q=85",
    alt: { en: "Wedding rings on floral arrangement", he: "טבעות חתונה על סידור פרחים" },
    category: "weddings",
    subcategory: "details",
    width: 1200,
    height: 800,
  },
  {
    id: "w8",
    src: "https://images.unsplash.com/photo-1549417229-7686ac5595fd?w=1200&q=85",
    alt: { en: "Beach wedding at sunset in Israel", he: "חתונת חוף בשקיעה בישראל" },
    category: "weddings",
    subcategory: "beach",
    width: 1200,
    height: 800,
    featured: true,
    location: "Herzliya",
  },
  // Portraits
  {
    id: "p1",
    src: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=1200&q=85",
    alt: { en: "Happy family portrait in natural light", he: "פורטרט משפחתי שמח באור טבעי" },
    category: "portraits",
    subcategory: "family",
    width: 1200,
    height: 800,
    featured: true,
    priority: true,
    location: "Jerusalem",
  },
  {
    id: "p2",
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200&q=85",
    alt: { en: "Professional headshot portrait", he: "פורטרט תדמית מקצועי" },
    category: "portraits",
    subcategory: "headshot",
    width: 1200,
    height: 1600,
    featured: true,
    location: "Tel Aviv",
  },
  {
    id: "p3",
    src: "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?w=1200&q=85",
    alt: { en: "Beautiful pregnancy portrait session", he: "סשן צילומי הריון יפהפה" },
    category: "portraits",
    subcategory: "pregnancy",
    width: 1200,
    height: 1600,
    featured: true,
    location: "Herzliya",
  },
  {
    id: "p4",
    src: "https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?w=1200&q=85",
    alt: { en: "Corporate headshot with clean background", he: "תדמית קורפורייט עם רקע נקי" },
    category: "portraits",
    subcategory: "headshot",
    width: 1200,
    height: 1200,
    location: "Tel Aviv",
  },
  {
    id: "p5",
    src: "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=1200&q=85",
    alt: { en: "Outdoor family session in autumn", he: "סשן משפחתי בחיק הטבע בסתיו" },
    category: "portraits",
    subcategory: "family",
    width: 1200,
    height: 800,
    location: "Carmel",
  },
  {
    id: "p6",
    src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1200&q=85",
    alt: { en: "Artistic portrait with dramatic lighting", he: "פורטרט אמנותי עם תאורה דרמטית" },
    category: "portraits",
    subcategory: "artistic",
    width: 1200,
    height: 1600,
    location: "Tel Aviv",
  },
  // Commercial
  {
    id: "c1",
    src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=85",
    alt: { en: "Premium product photography headphones", he: "צילום מוצר פרימיום אוזניות" },
    category: "commercial",
    subcategory: "product",
    width: 1200,
    height: 1200,
    featured: true,
    priority: true,
    location: "Studio",
  },
  {
    id: "c2",
    src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=85",
    alt: { en: "Watch product photography on clean background", he: "צילום מוצר שעון על רקע נקי" },
    category: "commercial",
    subcategory: "product",
    width: 1200,
    height: 1200,
    featured: true,
    location: "Studio",
  },
  {
    id: "c3",
    src: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=1200&q=85",
    alt: { en: "Food photography for restaurant", he: "צילום אוכל למסעדה" },
    category: "commercial",
    subcategory: "food",
    width: 1200,
    height: 800,
    featured: true,
    location: "Tel Aviv",
  },
  {
    id: "c4",
    src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=85",
    alt: { en: "Fashion brand lifestyle photography", he: "צילום לייפסטייל מותג אופנה" },
    category: "commercial",
    subcategory: "lifestyle",
    width: 1200,
    height: 800,
    location: "Tel Aviv",
  },
  {
    id: "c5",
    src: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=1200&q=85",
    alt: { en: "Jewelry product photography close-up", he: "צילום מוצר תכשיטים מקרוב" },
    category: "commercial",
    subcategory: "product",
    width: 1200,
    height: 1200,
    location: "Studio",
  },
  {
    id: "c6",
    src: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=1200&q=85",
    alt: { en: "Sneaker product photography", he: "צילום מוצר נעלי ספורט" },
    category: "commercial",
    subcategory: "product",
    width: 1200,
    height: 900,
    location: "Studio",
  },
];

export const heroSlides = [
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=90",
    alt: { en: "Elegant wedding ceremony at sunset on Tel Aviv beach", he: "טקס חתונה אלגנטי בשקיעה על חוף תל אביב" },
  },
  {
    src: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=1920&q=90",
    alt: { en: "Joyful family portrait session in a sunlit garden", he: "סשן צילומי משפחה שמח בגן מוטבע באור שמש" },
  },
  {
    src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1920&q=90",
    alt: { en: "Stunning product photography for luxury brand", he: "צילום מוצר מרהיב למותג יוקרה" },
  },
  {
    src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1920&q=90",
    alt: { en: "Emotional first dance at a vineyard wedding", he: "ריקוד ראשון מרגש בחתונת כרם" },
  },
  {
    src: "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?w=1920&q=90",
    alt: { en: "Beautiful pregnancy portrait in golden hour light", he: "פורטרט הריון יפהפה באור שעת הזהב" },
  },
];

export const featuredProjects = [
  {
    title: { en: "Sarah & Daniel's Beach Wedding", he: "חתונת החוף של שרה ודניאל" },
    eventType: { en: "Wedding", he: "חתונה" },
    location: { en: "Tel Aviv", he: "תל אביב" },
    description: {
      en: "A golden sunset ceremony on the Tel Aviv coastline, followed by an unforgettable celebration under the stars.",
      he: "טקס שקיעה מוזהב על קו החוף של תל אביב, ואחריו חגיגה בלתי נשכחת מתחת לכוכבים.",
    },
    clientQuote: {
      en: "Every photo feels like a movie scene. We relive our wedding day every time we open the album.",
      he: "כל תמונה מרגישה כמו סצנה מסרט. אנחנו חוזרים לחיות את יום החתונה שלנו בכל פעם שנפתח את האלבום.",
    },
    clientName: { en: "Sarah & Daniel", he: "שרה ודניאל" },
    images: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=85",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=85",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=85",
      "https://images.unsplash.com/photo-1549417229-7686ac5595fd?w=800&q=85",
    ],
  },
];

export function getImagesByCategory(category: PortfolioImage["category"]) {
  return portfolioImages.filter((img) => img.category === category);
}

export function getFeaturedImages() {
  return portfolioImages.filter((img) => img.featured);
}
