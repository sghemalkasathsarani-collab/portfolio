export interface ResearchProject {
  id: string;
  title: string;
  /** Where the work was done, e.g. 'CESL, Jawatta' */
  place: string;
  date: string;
  /** Short badge, e.g. 'Published', 'Ongoing', 'Undergraduate' */
  status: 'published' | 'ongoing' | 'academic';
  /** Publication venue, if any */
  venue?: string;
  summary: string[];
  /** Tools and responsibilities, shown as chips */
  tools: string[];
  /** Optional cover image in public/, e.g. `${import.meta.env.BASE_URL}projects/bridge.jpg` */
  image?: string;
  link?: string;
}

export interface Role {
  title: string;
  org: string;
  place: string;
  period: string;
  points: string[];
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  result: string;
  details: string;
}

export interface Achievement {
  title: string;
  org: string;
  year: string;
  distinction: string;
}

export interface Activity {
  role: string;
  org: string;
  period: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}
