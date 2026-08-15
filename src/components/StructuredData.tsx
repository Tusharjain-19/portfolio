import { PORTFOLIO } from '@/data/portfolio';

interface StructuredDataProps {
  data?: Record<string, unknown>;
}

export default function StructuredData({ data }: StructuredDataProps) {
  // Primary Person schema  -  the most important for name searches
  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://tusharjain.in/#person",
    "name": "Tushar Jain",
    "givenName": "Tushar",
    "familyName": "Jain",
    "alternateName": [
      "tusharjain", "Tushar Jain BMSCE", "Tushar Jain Bengaluru", "Tushar Jain Jaipur", 
      "Tushar Jain India", "Tushar Jain Rajasthan", 
      "Tushar J", "Jain Tushar", "tushar-jain"
    ],
    "birthPlace": {
      "@type": "Place",
      "name": "Jaipur",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Jaipur",
        "addressRegion": "Rajasthan",
        "addressCountry": "IN"
      }
    },
    "homeLocation": {
      "@type": "Place",
      "name": "Bengaluru",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "addressCountry": "IN"
      }
    },
    "jobTitle": PORTFOLIO.profile.role,
    "url": "https://tusharjain.in",
    "image": "https://tusharjain.in/pic2.jpeg",
    "email": `mailto:${PORTFOLIO.profile.socials.email}`,
    "sameAs": [
      PORTFOLIO.profile.socials.linkedin,
      PORTFOLIO.profile.socials.github,
      PORTFOLIO.profile.socials.twitter,
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
      "RestaurantOS", "FlightDeck", "Jaipur Ride", "Namma Ride", "PulsePredict AI",
      "BookMySlot SaaS", "NotesCSBS", "Embedded Systems",
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

  // Website schema  -  helps with sitelinks in search results
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://tusharjain.in/#website",
    "url": "https://tusharjain.in",
    "name": "Tushar Jain  -  Engineering Portfolio",
    "alternateName": ["tusharjain.in", "Tushar Jain Portfolio", "Tushar Jain BMSCE Portfolio"],
    "description": "Portfolio of Tushar Jain, Engineering Student at BMS College of Engineering (BMSCE), Bengaluru.",
    "publisher": {
      "@id": "https://tusharjain.in/#person"
    },
    "inLanguage": "en-IN",
  };

  // ProfilePage schema  -  tells Google this is an authoritative profile
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

  // Breadcrumb schema  -  helps Google show the path in search results
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://tusharjain.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Projects",
        "item": "https://tusharjain.in/projects"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "About",
        "item": "https://tusharjain.in/about"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Contact",
        "item": "https://tusharjain.in/contact"
      }
    ]
  };

  // Project schema
  const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Tushar Jain's Projects",
    "itemListElement": PORTFOLIO.projects.map((project, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "CreativeWork",
        "name": project.title,
        "description": project.oneLineSummary,
        "url": `https://tusharjain.in/work/${project.slug}`,
        "techStack": project.techStack
      }
    }))
  };

  // Certification schema
  const certificationsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Tushar Jain's Certifications",
    "itemListElement": PORTFOLIO.certifications.map((cert, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "EducationalOccupationalCredential",
        "name": cert.title,
        "credentialCategory": "Professional Certification",
        "recognizedBy": {
          "@type": "Organization",
          "name": cert.issuer
        }
      }
    }))
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

  // Default: render Person + Website + ProfilePage + Breadcrumb + Projects + Certifications schemas
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(certificationsSchema) }}
      />
    </>
  );
}
