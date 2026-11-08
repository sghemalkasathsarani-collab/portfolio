export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  /** Images, local videos or YouTube links; the first still image doubles as the card cover */
  gallery?: string[];
  details: string[];
  link?: string;
}

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
