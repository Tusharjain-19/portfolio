import { PORTFOLIO } from '@/data/portfolio';

interface StructuredDataProps {
  data?: Record<string, unknown>;
}

export default function StructuredData({ data }: StructuredDataProps) {
  const defaultPersonData = {
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

  const finalData = data || defaultPersonData;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(finalData) }}
    />
  );
}
