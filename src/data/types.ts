
export interface ProductProject {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  oneLineSummary: string;
  ideaOrigin: string; // Brief context on why this was built
  problemStatement: string | string[];
  solutionOverview: string | string[];
  hardestTechnicalChallenge: string; // The "meat" of the engineering work
  learnings: string[]; // Bullet points
  techStack: string[];
  proofLinks?: {
    github?: string;
    demo?: string;
    linkedin?: string;
  };
}

export interface ResearchProject {
  id: string;
  slug: string;
  title: string;
  researchType: string; // e.g., "Conceptual Systems Design"
  problemContext: string;
  systemArchitectureSummary: string;
  coreTechnicalAreas: string[];
  keyContributions: string[]; // Distinct theoretical contributions
  limitationsAndEthics: string; // Crucial for honesty
  learnings: string[];
  paperLink?: string; // Path to PDF
}

export interface PortfolioData {
  profile: {
    name: string;
    role: string;
    bio: string;
    socials: {
      email: string;
      linkedin: string;
      github: string;
    };
    resumeLink: string;
  };
  education: {
    degree: string;
    college: string;
    year: string;
    graduation: string;
  };
  research: ResearchProject[];
  projects: ProductProject[];
  skills: string[];
}
