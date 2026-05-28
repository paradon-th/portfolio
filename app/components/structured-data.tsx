// JSON-LD structured data so Google can show rich results when someone
// searches for "Paradon Thonthong" — name, photo, job title, and links.
// See: https://schema.org/Person

const SITE_URL = "https://portfolio.paradon.work";

export default function StructuredData() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Paradon Thonthong",
    alternateName: ["พรดล ทอนทอง", "Paradon"],
    url: SITE_URL,
    image: `${SITE_URL}/og.png`,
    jobTitle: "Full Stack Developer",
    description:
      "Full Stack Developer specializing in Angular, Spring Boot, Next.js and MySQL.",
    email: "mailto:paradon.thth@gmail.com",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Rajamangala University of Technology Isan",
    },
    knowsAbout: [
      "Full Stack Development",
      "Frontend Development",
      "Backend Development",
      "Next.js",
      "React",
      "Angular",
      "Spring Boot",
      "MySQL",
      "TypeScript",
    ],
    sameAs: [
      "https://github.com/paradon-th",
      "https://www.linkedin.com/in/paradon-thonthong-256504351/",
      "https://www.instagram.com/tagburn",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: SITE_URL,
    name: "Paradon Thonthong — Full Stack Developer",
    description:
      "Portfolio of Paradon Thonthong, Full Stack Developer based in Thailand.",
    inLanguage: "en",
    author: { "@type": "Person", name: "Paradon Thonthong" },
  };

  const professionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Paradon Thonthong — Web Development Services",
    provider: { "@type": "Person", name: "Paradon Thonthong" },
    areaServed: { "@type": "Country", name: "Thailand" },
    serviceType: [
      "Full Stack Web Development",
      "Frontend Development",
      "Backend Development",
      "Database Management",
    ],
    url: SITE_URL,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalService) }}
      />
    </>
  );
}
