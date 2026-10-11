import type { Achievement, Activity, Education, ResearchProject, Role, SkillCategory } from './types';

// =========================================
// All site copy lives here; components only lay it out.
// =========================================

export const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const HERO_DATA = {
  name: 'Hemalka Senarath Gamage',
  role: 'Civil Engineer',
  affiliation: 'Central Engineering Services (Pvt) Ltd',
  tagline: 'Merging civil engineering with modern technology: BIM, digital twins and reality capture for better infrastructure.',
  interests: [
    'BIM-driven workflows',
    'Digital twins',
    'Scan-to-BIM',
    'Bridge design',
    'Numerical modelling',
    'Construction QA/QC',
  ],
};

// Monogram in the header and photo fallback; matches public/favicon.svg
export const INITIALS = 'HS';

export const ABOUT_DATA = {
  // Drop a portrait into public/ and set e.g. asset('photo.jpg'); until then the initials are shown
  photo: asset('photo.jpg') as string,
  bio: `I am a Civil Engineer passionate about bringing modern technology into how we design, build and maintain infrastructure. My work spans end-to-end BIM workflows, bridge design, software and numerical modelling, and hands-on site experience.

I thrive in complex situations and enjoy finding practical, innovative solutions. I communicate clearly, build strong working relationships, and like to lead teams towards shared goals, bringing adaptability, strategic thinking and a results-oriented approach to every project.`,
};

export const SOCIAL_LINKS = {
  email: 'sghemalkasathsarani@gmail.com',
  linkedin: 'https://www.linkedin.com/in/hemalka-senarath-gamage',
  // Put her CV in public/ as resume.pdf and set this to asset('resume.pdf') to show the CV buttons
  resume: '' as string,
};

export const STATS = [
  { value: '3.41', label: 'GPA, Second Upper' },
  { value: '3', label: 'BIM research frameworks' },
];

export const RESEARCH: ResearchProject[] = [
  {
    id: 'digital-twin',
    title: 'Development of a BIM-Driven Digital Twin Framework for Lifecycle Monitoring of Structural Deterioration in Concrete Infrastructure',
    place: 'CESL, Jawatta',
    date: 'June 2026',
    status: 'published',
    venue: 'Society of Structural Engineers, Sri Lanka · Annual Sessions 2026',
    summary: [
      'Developed a framework for integrating structural condition data to support continuous performance monitoring, maintenance planning and lifecycle asset management.',
      'Focuses on improving data-driven decision-making for infrastructure management and maintenance.',
    ],
    tools: ['Revit', 'BIM', 'Digital twin', 'Asset management'],
  },
  {
    id: 'bim-ar',
    title: 'Development of a BIM and AR Framework for Real-Time Construction QA/QC',
    place: 'CESL, Jawatta',
    date: 'Sept 2026',
    status: 'ongoing',
    summary: [
      'Developed a framework for visualising BIM-based information on site and comparing planned design information with actual construction conditions.',
      'Aims to improve inspection efficiency, issue identification, documentation and construction quality management.',
    ],
    tools: ['BIM', 'Augmented reality', 'QA/QC'],
  },
  {
    id: 'kalupalama',
    title: "BIM-Enabled Post-Disaster Damage Assessment of the Kalupalama (Devil's Bridge) Railway Bridge Using Point Cloud Data: A Sri Lankan Case Study",
    place: 'CESL, Jawatta',
    date: 'Sept 2026',
    status: 'ongoing',
    summary: [
      'Developed a digital representation of the bridge to support damage identification, condition assessment and visualisation of affected structural components.',
      'Demonstrates how reality capture and BIM support efficient post-disaster structural assessment and decision-making.',
    ],
    tools: ['ReCap', 'Point clouds', 'Revit', 'Scan-to-BIM'],
  },
  {
    id: 'corrosion',
    title: 'Modelling the Corrosion Behaviour of Pre-Stressed Concrete Structures',
    place: 'KDU, Ratmalana',
    date: '2024',
    status: 'academic',
    summary: [
      'Developed computational models that simulate the initiation and progression of corrosion under various environmental conditions.',
    ],
    tools: ['ANSYS pre-stressed concrete modelling', 'COMSOL corrosion modelling'],
  },
  {
    id: 'paravi-duwa',
    title: 'Re-Designing of the Paravi Duwa Bridge and Car Park, Matara',
    place: 'KDU, Ratmalana',
    date: '2024',
    status: 'academic',
    summary: [
      'Designed a four-span beam bridge with decorative cables to give pilgrims and visitors safe, efficient access to Paravi Duwa island.',
      'Designed a car park for pilgrims to improve accessibility and reduce traffic congestion.',
    ],
    tools: ['Beam design', 'Abutment design', 'Cable & pylon design', 'SAP2000'],
  },
  {
    id: 'survey-camp',
    title: 'Survey Camp: Channel Design and Setting Out',
    place: 'KDU Southern Campus, Sooriyawewa',
    date: 'Dec 2023',
    status: 'academic',
    summary: [
      "Designed and set out a channel to carry water through the land plot proposed for a new canteen, working around the existing landscape and the client's requirements.",
    ],
    tools: ['Land survey', 'Setting out', 'Channel capacity design', 'AutoCAD'],
  },
];

// Newest first
export const EXPERIENCE: Role[] = [
  {
    title: 'Civil Engineer',
    org: 'Central Engineering Services (Pvt) Ltd',
    place: 'Jawatta',
    period: 'Mar 2025 – Sept 2026',
    points: [
      'Delivered end-to-end BIM workflows: structural modelling, rebar detailing, quantity extraction, sheet creation and documentation, and solved common BIM issues such as schedule filtering, view templates, shared parameters and rebar partitioning.',
      'Modelled architectural and structural building elements in Revit with accurate discipline coordination, in line with BIM standards and Level of Development (LOD) requirements.',
      'Built conceptual massing models in Revit for early-stage design studies and spatial planning, using solid and void forms for volumetric analysis.',
      'Processed point cloud data in ReCap for Scan-to-BIM, aligning existing site conditions with Revit models for validation and coordination.',
    ],
  },
  {
    title: 'Engineering Intern',
    org: 'Access Engineering PLC',
    place: 'Access Towers, Colombo 02',
    period: 'Oct 2023 – Mar 2024',
    points: [
      'Design unit: assisted in designing the Pre-school and Cultural Centre, Narahenpita, and a mini tennis court steel structure in Colombo 05.',
      'Planning unit: developed procurement schedules, prepared BOQs and daily progress reports.',
      'Site work: supervised reinforcement, formwork, concreting and finishing works at the Pre-school and Cultural Centre, Narahenpita.',
    ],
  },
];

export const EDUCATION: Education[] = [
  {
    degree: 'BSc Eng (Hons) in Civil Engineering',
    school: 'General Sir John Kotelawala Defence University, Ratmalana',
    period: '2021 – 2024',
    result: 'Second Class Upper Division · GPA 3.41 / 4.0',
    details: 'Key modules: Finite Element Analysis, Geotechnical Engineering, Transportation Engineering, Engineering Hydrology.',
  },
  {
    degree: 'GCE Advanced Level, Physical Science',
    school: 'Sujatha Vidyalaya, Matara',
    period: '2020',
    result: 'Combined Mathematics A · Physics C · Chemistry C',
    details: '',
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: 'The Emerging Civil Engineer Award',
    org: 'Institution of Civil Engineers, Colombo 07',
    year: '2023',
    distinction: 'Top 10 finalist: flooding and drainage in the Colombo region',
  },
  {
    title: "MATHRIX '24 Mathematical Quiz Competition",
    org: 'KDU, Ratmalana',
    year: '2024',
    distinction: 'First place',
  },
  {
    title: 'Spaghetti Bridge Competition',
    org: 'KDU, Ratmalana',
    year: '2022',
    distinction: 'Participant',
  },
];

export const LEADERSHIP: Activity[] = [
  { role: 'PR Team Lead', org: 'Highway Engineering Society, KDU', period: '2024' },
  { role: 'PR Team', org: 'Electronic Robotics and Innovation Club, KDU', period: '2023' },
  { role: 'Senior Prefect', org: 'Sujatha Vidyalaya, Matara', period: '2017 – 2019' },
  { role: 'President, Girl Guides', org: 'Sujatha Vidyalaya, Matara', period: '2019 – Present' },
  { role: 'Cultural pageant and display', org: 'Commonwealth Heads of Government Meeting (CHOGM), Sri Lanka', period: '2013' },
];

export const VOLUNTEERING: Activity[] = [
  { role: 'Member', org: 'Institution of Civil Engineers Student Chapter, Sri Lanka', period: '2023 – Present' },
  { role: 'Member', org: 'Institution of Civil Engineers Student Chapter, UK', period: '2023 – Present' },
  { role: 'Member', org: 'Highway Engineering Society, KDU', period: '2021 – Present' },
  { role: 'Member', org: 'Rotaract Club, KDU', period: '2021 – Present' },
];

export const SKILLS: SkillCategory[] = [
  { title: 'BIM & reality capture', skills: ['Revit', 'ReCap', 'Navisworks'] },
  { title: 'Analysis & design', skills: ['SAP2000', 'ETABS', 'ANSYS', 'COMSOL Multiphysics', 'AutoCAD'] },
  { title: 'Surveying', skills: ['Land survey', 'Setting out survey', 'Theodolite survey'] },
  { title: 'Computer', skills: ['MS Office'] },
  { title: 'Languages', skills: ['English (fluent)', 'Sinhala (native)'] },
  { title: 'Interests', skills: ['CAD modelling', 'Journalism', 'DIY', 'Lego'] },
];

