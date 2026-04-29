import { PORTFOLIO } from '@/data/portfolio';

interface StructuredDataProps {
  data?: Record<string, unknown>;
}

export default function StructuredData({ data }: StructuredDataProps) {
  // Primary Person schema — the most important for name searches
  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://tusharjain.in/#person",
    "name": "Tushar Jain",
    "givenName": "Tushar",
    "familyName": "Jain",
    "alternateName": ["tusharjain", "Tushar Jain BMSCE", "Tushar Jain Bengaluru"],
    "jobTitle": PORTFOLIO.profile.role,
    "url": "https://tusharjain.in",
    "image": "https://tusharjain.in/pic2.jpeg",
    "email": `mailto:${PORTFOLIO.profile.socials.email}`,
    "sameAs": [
      PORTFOLIO.profile.socials.linkedin,
      PORTFOLIO.profile.socials.github,
      "https://www.researchgate.net/profile/Tushar-Jain-135",
    ],
    "description": PORTFOLIO.profile.bio,
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "BMS College of Engineering",
      "alternateName": ["BMSCE", "BMS College", "BMS"],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "addressCountry": "IN"
      }
    },
    "knowsAbout": [
      ...PORTFOLIO.skills,
      "Jaipur Ride", "Namma Ride", "PulsePredict AI", "Split-Payment System",
      "BookMySlot SaaS", "NotesCSBS", "Air Guitar", "Embedded Systems",
      "Full Stack Development", "MVP Development", "ESP32", "Arduino",
      "React.js", "Next.js", "Node.js", "Supabase", "Vercel"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "addressCountry": "IN"
    },
    "nationality": {
      "@type": "Country",
      "name": "India"
    }
  };

  // Website schema — helps with sitelinks in search results
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://tusharjain.in/#website",
    "url": "https://tusharjain.in",
    "name": "Tushar Jain — Engineering Portfolio",
    "alternateName": ["tusharjain.in", "Tushar Jain Portfolio", "Tushar Jain BMSCE Portfolio"],
    "description": "Portfolio of Tushar Jain, Engineering Student at BMS College of Engineering (BMSCE), Bengaluru.",
    "publisher": {
      "@id": "https://tusharjain.in/#person"
    },
    "inLanguage": "en-IN",
  };

  // ProfilePage schema — tells Google this is an authoritative profile
  const profileData = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": "https://tusharjain.in/#profilepage",
    "mainEntity": {
      "@id": "https://tusharjain.in/#person"
    },
    "dateCreated": "2025-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
  };

  // If custom data is passed (for project/research pages), render that alongside defaults
  if (data) {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      </>
    );
  }

  // Default: render Person + Website + ProfilePage schemas
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileData) }}
      />
    </>
  );
}
