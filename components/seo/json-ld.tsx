const baseUrl = "https://mc-studio-eta.vercel.app";

export function LocalBusinessJsonLd({ locale }: { locale: string }) {
  const data = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Photographer"],
    "@id": `${baseUrl}/#business`,
    name: "MC Studio",
    alternateName:
      locale === "he"
        ? ["משה חיים כהן צילום", "משה כהן צילום", "MC Studio צילום"]
        : ["Moshe Chaim Cohen Photography", "MC Studio Photography"],
    description:
      locale === "he"
        ? "MC Studio — משה חיים כהן, צלם מקצועי מפתח תקווה. צילום אירועים, צילום ברית מילה, צילום משפחות, צילום פורטרט וצילום תדמית מקצועי. צלם מומלץ באלעד, ראש העין, בני ברק, רמת גן, גבעת שמואל וכל המרכז."
        : "MC Studio — Moshe Chaim Cohen, professional photographer based in Petah Tikva, Israel. Event photography, Brit Milah photography, family portraits, and portrait photography. Serving Elad, Rosh HaAyin, Bnei Brak, Ramat Gan, Givat Shmuel, and all of central Israel.",
    url: baseUrl,
    telephone: "+972-54-795-9311",
    email: "Moshechaim22@gmail.com",
    founder: {
      "@type": "Person",
      name: locale === "he" ? "משה חיים כהן" : "Moshe Chaim Cohen",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: locale === "he" ? "פתח תקווה" : "Petah Tikva",
      addressRegion: locale === "he" ? "מרכז" : "Central District",
      addressCountry: "IL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 32.0841,
      longitude: 34.8878,
    },
    areaServed: [
      {
        "@type": "City",
        name: locale === "he" ? "פתח תקווה" : "Petah Tikva",
      },
      { "@type": "City", name: locale === "he" ? "אלעד" : "Elad" },
      {
        "@type": "City",
        name: locale === "he" ? "ראש העין" : "Rosh HaAyin",
      },
      { "@type": "City", name: locale === "he" ? "בני ברק" : "Bnei Brak" },
      { "@type": "City", name: locale === "he" ? "רמת גן" : "Ramat Gan" },
      {
        "@type": "City",
        name: locale === "he" ? "גבעת שמואל" : "Givat Shmuel",
      },
      { "@type": "Country", name: locale === "he" ? "ישראל" : "Israel" },
    ],
    priceRange: "₪₪₪",
    image: `${baseUrl}/images/og-image.png`,
    logo: `${baseUrl}/images/icon-512.png`,
    sameAs: [
      "https://www.instagram.com/mshhkhyymkhn",
      "https://www.facebook.com/share/1766JtmniW/?mibextid=wwXIfr",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "350",
      bestRating: "5",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: locale === "he" ? "שירותי צילום" : "Photography Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name:
              locale === "he" ? "צילום אירועים" : "Event Photography",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name:
              locale === "he"
                ? "צילום ברית מילה"
                : "Brit Milah Photography",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name:
              locale === "he" ? "צילום משפחות" : "Family Photography",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name:
              locale === "he"
                ? "צילום פורטרט ותדמית"
                : "Portrait & Headshot Photography",
          },
        },
      ],
    },
    knowsLanguage: ["he", "en"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ServicesJsonLd({ locale }: { locale: string }) {
  const services = [
    {
      "@type": "Service",
      "@id": `${baseUrl}/#service-events`,
      name:
        locale === "he"
          ? "צילום אירועים מקצועי"
          : "Professional Event Photography",
      description:
        locale === "he"
          ? "צלם אירועים מקצועי — צילום אירועים קטנים, אירועים פרטיים ומשפחתיים, בר מצווה, בת מצווה, ימי הולדת ומסיבות. כיסוי יום מלא, 500+ תמונות ערוכות, גלריה אונליין."
          : "Professional event photography — small events, private and family celebrations, Bar/Bat Mitzvah, birthdays, and parties. Full-day coverage, 500+ edited photos, online gallery.",
      provider: { "@type": "LocalBusiness", "@id": `${baseUrl}/#business` },
      areaServed: { "@type": "Country", name: "Israel" },
      serviceType:
        locale === "he" ? "צילום אירועים" : "Event Photography",
    },
    {
      "@type": "Service",
      "@id": `${baseUrl}/#service-brit`,
      name:
        locale === "he"
          ? "צילום ברית מילה מקצועי"
          : "Professional Brit Milah Photography",
      description:
        locale === "he"
          ? "צלם ברית מומלץ — צילום ברית מילה מקצועי באולם ובבית. צילום ברית מקצועי בפתח תקווה, אלעד, ראש העין, בני ברק וכל המרכז."
          : "Recommended Brit Milah photographer — professional photography at venues and homes. Serving Petah Tikva, Elad, Rosh HaAyin, Bnei Brak, and all of central Israel.",
      provider: { "@type": "LocalBusiness", "@id": `${baseUrl}/#business` },
      areaServed: { "@type": "Country", name: "Israel" },
      serviceType:
        locale === "he" ? "צילום ברית" : "Brit Milah Photography",
    },
    {
      "@type": "Service",
      "@id": `${baseUrl}/#service-family`,
      name:
        locale === "he"
          ? "צילום משפחות מקצועי"
          : "Professional Family Photography",
      description:
        locale === "he"
          ? "צלם משפחות מומלץ — צילום משפחות בטבע ובסטודיו, צילום משפחתי מקצועי. 30+ תמונות מרוטשות, קבצים מוכנים להדפסה."
          : "Family photographer — professional family photography outdoors and in studio. 30+ retouched images, print-ready files.",
      provider: { "@type": "LocalBusiness", "@id": `${baseUrl}/#business` },
      areaServed: { "@type": "Country", name: "Israel" },
      serviceType:
        locale === "he" ? "צילום משפחות" : "Family Photography",
    },
    {
      "@type": "Service",
      "@id": `${baseUrl}/#service-portrait`,
      name:
        locale === "he"
          ? "צילום פורטרט ותדמית מקצועי"
          : "Professional Portrait & Headshot Photography",
      description:
        locale === "he"
          ? "צילום פורטרט מקצועי, צילום תדמית לעסקים, צילום פרופיל מקצועי, צילום פורטרטים בסטודיו. צלם פורטרטים מקצועי במרכז."
          : "Professional portrait photography, business headshots, profile photos, studio portraits. Professional portrait photographer in central Israel.",
      provider: { "@type": "LocalBusiness", "@id": `${baseUrl}/#business` },
      areaServed: { "@type": "Country", name: "Israel" },
      serviceType:
        locale === "he" ? "צילום פורטרט" : "Portrait Photography",
    },
  ];

  const data = {
    "@context": "https://schema.org",
    "@graph": services,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ReviewsJsonLd({ locale }: { locale: string }) {
  const reviews = [
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: locale === "he" ? "שרה ודניאל" : "Sarah & Daniel",
      },
      reviewBody:
        locale === "he"
          ? "אחרי שראינו את התמונות בכינו מרוב ריגוש — כל רגע היה שם."
          : "We cried when we saw our photos — every single moment was captured beautifully.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      itemReviewed: {
        "@type": "LocalBusiness",
        "@id": `${baseUrl}/#business`,
      },
    },
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: locale === "he" ? "משפחת כהן" : "The Cohen Family",
      },
      reviewBody:
        locale === "he"
          ? "סוף סוף יש לנו תמונה שבאמת משקפת מי שאנחנו כמשפחה."
          : "We finally have a photo that truly reflects who we are as a family.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      itemReviewed: {
        "@type": "LocalBusiness",
        "@id": `${baseUrl}/#business`,
      },
    },
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: locale === "he" ? "נועה ואיתי" : "Noa & Itai",
      },
      reviewBody:
        locale === "he"
          ? "הצלם הפך כל רגע קטן לזיכרון ענק — ממליצים בלי סוף."
          : "The photographer turned every small moment into a huge memory — can't recommend enough.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      itemReviewed: {
        "@type": "LocalBusiness",
        "@id": `${baseUrl}/#business`,
      },
    },
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: locale === "he" ? "יעל ש." : "Yael S.",
      },
      reviewBody:
        locale === "he"
          ? "מעולם לא הרגשתי כל כך יפה. תמונות ההריון הן משהו שאשמור לנצח."
          : "I've never felt so beautiful. The pregnancy photos are something I'll treasure forever.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      itemReviewed: {
        "@type": "LocalBusiness",
        "@id": `${baseUrl}/#business`,
      },
    },
  ];

  const data = {
    "@context": "https://schema.org",
    "@graph": reviews,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FAQJsonLd({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    name: "MC Studio",
    alternateName: ["MC Studio Photography", "משה חיים כהן צילום"],
    url: baseUrl,
    publisher: { "@type": "LocalBusiness", "@id": `${baseUrl}/#business` },
    inLanguage: ["he-IL", "en-US"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ImageGalleryJsonLd({
  images,
  name,
  description,
}: {
  images: { src: string; alt?: string }[];
  name: string;
  description: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name,
    description,
    image: images.slice(0, 20).map((img) => ({
      "@type": "ImageObject",
      contentUrl: img.src.startsWith("http")
        ? img.src
        : `${baseUrl}${img.src}`,
      description: img.alt || name,
    })),
    provider: { "@type": "LocalBusiness", "@id": `${baseUrl}/#business` },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
