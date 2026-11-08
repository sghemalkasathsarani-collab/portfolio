export interface Project {
  id: string;
  /** Used in the page link: #projects/<slug> */
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  /** Images, local videos or YouTube links; the first still image doubles as the card cover */
  gallery?: string[];
  details: string[];
  /** What I did on a team project, shown above the overview */
  role?: string;
  /** Long-form write-up below the key features */
  sections?: ContentBlock[];
  link?: string;
}

export type ContentBlock =
  | { type: 'text'; content: string }
  | { type: 'heading'; content: string; level?: 2 | 3 }
  | { type: 'image'; src: string; caption?: string; alt?: string; narrow?: boolean }
  | { type: 'gallery'; images: { src: string; caption?: string }[]; caption?: string; contain?: boolean }
  | { type: 'list'; items: string[]; ordered?: boolean }
  | { type: 'callout'; content: string; variant?: 'info' | 'warning' | 'tip' }
  | { type: 'equation'; content: string }
  | { type: 'table'; headers: string[]; rows: string[][]; caption?: string }
  | { type: 'stats'; items: { value: string; label: string }[] };

export interface SkillCategory {
  title: string;
  skills: string[];
  /** Projects on this site where these tools were used */
  usedIn?: string[];
}

export interface ProcessStep {
  title: string;
  description: string;
  year: string;
}

export interface ResearchPaper {
  id: string;
  title: string;
  abstract: string;
  /** First-page preview; without one a typeset placeholder page is drawn */
  image?: string;
  link: string;
  publisher: string;
  /** Short venue name shown on the badge, e.g. 'SSESL' */
  venue: string;
  /** Author list in citation order; the entry equal to OWN_NAME is bolded */
  authors: string[];
  /** Publication year, 'Accepted', or 'Under Review' */
  date: string;
  /** Skimmable summary; result and limitation are left out where the paper gives none */
  summary: {
    problem: string;
    built: string;
    result?: string;
    limitation?: string;
  };
  tags: string[];
}

export interface Achievement {
  id: string;
  title: string;
  /** Photo of the award or event; without one a placeholder tile with the year is shown */
  image?: string;
  year: string;
}
