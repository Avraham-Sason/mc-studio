export function LocalBusinessJsonLd({ locale }: { locale: string }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Photographer",
    name: "MC Studio",
    description:
      locale === "he"
        ? "סטודיו צילום מקצועי בכל הארץ. חתונות, פורטרטים, צילום מסחרי."
        : "Premium photography studio offering professional services across Israel. Weddings, portraits, commercial.",
    url: "https://mc-studio-eta.vercel.app",
    telephone: "+972-54-795-9311",
    email: "Moshechaim22@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IL",
    },
    areaServed: {
      "@type": "Country",
      name: "Israel",
    },
    priceRange: "₪₪₪",
    image: "https://mc-studio-eta.vercel.app/og/home.jpg",
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
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ServicesJsonLd() {
  const services = [
    {
      "@type": "Service",
      name: "Wedding & Event Photography",
      description:
        "Full-day wedding and event photography coverage across Israel. Engagement sessions, edited albums, online galleries.",
      provider: { "@type": "Photographer", name: "MC Studio" },
      areaServed: { "@type": "Country", name: "Israel" },
    },
    {
      "@type": "Service",
      name: "Portrait Photography",
      description:
        "Professional portrait photography — families, pregnancy, headshots, styled sessions.",
      provider: { "@type": "Photographer", name: "MC Studio" },
      areaServed: { "@type": "Country", name: "Israel" },
    },
    {
      "@type": "Service",
      name: "Commercial Photography",
      description:
        "Product photography, brand visuals, e-commerce images, team headshots.",
      provider: { "@type": "Photographer", name: "MC Studio" },
      areaServed: { "@type": "Country", name: "Israel" },
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
    name: "MC Studio",
    url: "https://mc-studio-eta.vercel.app",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://mc-studio-eta.vercel.app/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
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
