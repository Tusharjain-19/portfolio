import { PORTFOLIO } from '@/data/portfolio';

export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": PORTFOLIO.profile.name,
    "jobTitle": PORTFOLIO.profile.role,
    "url": "https://tusharjain.in",
    "sameAs": [
      PORTFOLIO.profile.socials.linkedin,
      PORTFOLIO.profile.socials.github,
    ],
    "description": PORTFOLIO.profile.bio,
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": PORTFOLIO.education.college
    },
    "knowsAbout": PORTFOLIO.skills
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
