/*
 * ====================================================================================
 * CONTENT DATABASE
 * ====================================================================================
 *
 * All site copy, projects, research papers and achievements live here rather than
 * inside components. Assets go in `public/` and are referenced with `asset('path')`
 * so links resolve both in dev and on GitHub Pages.
 *
 * Adding pictures:
 *  - Project: put files in public/projects/<id>/ and list them in `gallery`
 *    (images, .mp4 clips or YouTube links; the first still image is the card cover).
 *  - Paper: a screenshot of the first page as `image`.
 *  - Achievement: a photo of the award or event as `image`.
 * Until then each one shows a drawn placeholder.
 *
 * Changes here only go live after running `npm run deploy`.
 */

import type { Project, SkillCategory, ProcessStep, ResearchPaper, Achievement } from './types';

export const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

// =========================================
// 👤 PERSONAL LINKS & CONTACT
// =========================================
export const SOCIAL_LINKS = {
  email: 'sghemalkasathsarani@gmail.com',
  linkedin: 'https://www.linkedin.com/in/hemalka-senarath-gamage',
};

// Monogram in the header; matches public/favicon.svg
export const INITIALS = 'HS';

export const HERO_DATA = {
  name: 'Hemalka Senarath Gamage',
  title: 'Civil Engineer',
  role: 'Civil Engineer',
  affiliation: 'Central Engineering Services (Pvt) Ltd',
  interests: ['BIM-driven workflows', 'Digital twins', 'Scan-to-BIM & point clouds', 'Bridge design', 'Numerical modelling'],
  tagline: 'I bring BIM and reality capture to the way we build and care for infrastructure.',
  intro: 'Merging civil engineering with modern technology for impactful, data-driven solutions.',
};

export const ABOUT_DATA = {
  photo: asset('photo.jpg'),
  bio: `I am a Civil Engineer passionate about merging civil engineering with modern technology. My work spans BIM-driven workflows, bridge design, software and numerical modelling, with hands-on site experience behind it.

I thrive in complex situations and enjoy finding innovative solutions, from turning point clouds into models of damaged bridges to building digital twins that track how concrete structures age. I like working with people as much as with models, and enjoy leading teams towards a shared goal.`,
};

// =========================================
// 📄 RESEARCH PAPERS
// =========================================
export const RESEARCH_PAPERS: ResearchPaper[] = [
  {
    id: 'p1',
    title: 'Development of a BIM-Driven Digital Twin Framework for Lifecycle Monitoring of Structural Deterioration in Concrete Infrastructure',
    abstract: 'A framework that integrates structural condition data with BIM to support continuous performance monitoring, maintenance planning and lifecycle asset management of concrete infrastructure, improving data-driven decision-making for infrastructure management and maintenance.',
    link: '#',
    publisher: 'Society of Structural Engineers, Sri Lanka (SSESL) Annual Sessions',
    venue: 'SSESL',
    date: '2026',
    tags: ['BIM', 'Digital twin', 'Lifecycle asset management'],
  },
  {
    id: 'p2',
    title: 'Development of a BIM and AR Framework for Real-Time Construction QA/QC',
    abstract: 'A framework for visualising BIM-based information on site and comparing planned design information with actual construction conditions, aiming to improve inspection efficiency, issue identification, documentation and construction quality management.',
    link: '#',
    publisher: 'Central Engineering Services (Pvt) Ltd',
    venue: 'CESL',
    date: 'In Progress',
    tags: ['BIM', 'Augmented reality', 'Quality control'],
  },
  {
    id: 'p3',
    title: "BIM-Enabled Post-Disaster Damage Assessment of the Kalupalama (Devil's Bridge) Railway Bridge Using Point Cloud Data: A Sri Lankan Case Study",
    abstract: 'A digital representation of the Kalupalama railway bridge built from point cloud data to support damage identification, condition assessment and visualisation of affected structural components, demonstrating how reality capture and BIM enable efficient post-disaster structural assessment and decision-making.',
    link: '#',
    publisher: 'Central Engineering Services (Pvt) Ltd',
    venue: 'CESL',
    date: 'In Progress',
    tags: ['Scan-to-BIM', 'Point clouds', 'Damage assessment'],
  },
];

// =========================================
// 🏗️ PROJECTS
// =========================================
export const PROJECTS: Project[] = [
  {
    id: 'paravi-duwa',
    title: 'Paravi Duwa Bridge & Car Park Redesign, Matara',
    description: 'A four-span beam bridge with decorative cables giving pilgrims safe, efficient access to Paravi Duwa island, with a car park to ease congestion.',
    longDescription: `Paravi Duwa is a small island off the coast of Matara, visited by pilgrims and tourists. This university design project re-designed the bridge to the island as a four-span beam bridge with decorative cables, giving pilgrims and other visitors safe and efficient access.

Access on land was part of the brief too: a dedicated car park was designed for pilgrims to improve accessibility and reduce traffic congestion around the site.

The work covered the full structural design of the bridge, from the beams and abutments to the cables and pylons, with the structure modelled and analysed in SAP2000.`,
    tags: ['SAP2000', 'Bridge design', 'Structural analysis', 'Car park design'],
    details: [
      'Four-span beam bridge with decorative cables',
      'Detailed beam design',
      'Detailed abutment design',
      'Detailed cable and pylon design',
      'Full structural model analysed in SAP2000',
      'Pilgrim car park designed to reduce traffic congestion',
    ],
  },
  {
    id: 'corrosion',
    title: 'Corrosion Modelling of Pre-Stressed Concrete Structures',
    description: 'Computational models that simulate how corrosion starts and progresses in pre-stressed concrete under different environmental conditions.',
    longDescription: `Corrosion of the steel inside pre-stressed concrete is one of the main ways these structures lose strength over time, and it often progresses out of sight. This undergraduate research project developed computational models that simulate the initiation and progression of corrosion under various environmental conditions.

The structural behaviour of the pre-stressed concrete was modelled in ANSYS, while the corrosion process itself was modelled in COMSOL Multiphysics, bringing structural and corrosion modelling together in one study.`,
    tags: ['ANSYS', 'COMSOL Multiphysics', 'Finite element analysis', 'Durability'],
    details: [
      'Pre-stressed concrete modelling in ANSYS',
      'Corrosion modelling in COMSOL Multiphysics',
      'Simulated corrosion initiation and progression',
      'Compared behaviour under various environmental conditions',
    ],
  },
  {
    id: 'narahenpita',
    title: 'Pre-school & Cultural Centre, Narahenpita',
    description: 'Design support and site supervision for a pre-school and cultural centre, from the design office through to concreting and finishing on site.',
    longDescription: `During an internship at Access Engineering PLC, this project was followed from the design office to the site. In the design unit, the work involved assisting in the design of the Pre-school and Cultural Centre at Narahenpita, alongside a steel-structure mini tennis court in Colombo 05.

In the planning unit, the focus moved to procurement schedules, bills of quantities and daily progress reports. On site, it meant supervising reinforcement, formwork, concreting and finishing works for the same building, seeing the design through to construction.`,
    tags: ['Building design', 'Site supervision', 'BOQ', 'Planning'],
    details: [
      'Assisted in the design of the Pre-school and Cultural Centre',
      'Assisted in the design of a steel-structure mini tennis court, Colombo 05',
      'Developed the procurement schedule',
      'Prepared BOQs and daily progress reports',
      'Supervised reinforcement and formwork',
      'Supervised concreting and finishing works',
    ],
  },
  {
    id: 'survey-camp',
    title: 'Drainage Channel Design, KDU Southern Campus',
    description: 'Designing and setting out a channel to carry water through the plot proposed for a new canteen, working with the existing landscape.',
    longDescription: `At the KDU survey camp in Sooriyawewa, the task was to design and set out a suitable channel to carry water through the land plot proposed for a new canteen.

The design had to respect the existing landscape and the client's requirements. The work ran from the land survey through channel capacity design and CAD modelling, to setting the channel out on the ground.`,
    tags: ['Land survey', 'Setting out', 'Hydraulic design', 'AutoCAD'],
    details: [
      'Land survey of the proposed site',
      'Channel capacity design',
      'CAD modelling of the channel',
      'Setting out on site',
      "Designed around the existing landscape and the client's requirements",
    ],
  },
];

// =========================================
// 🏆 HONOURS & ACHIEVEMENTS
// =========================================
export const ACHIEVEMENTS: Achievement[] = [
  { id: 'a1', title: 'The Emerging Civil Engineer Award | Top 10 Finalist', year: '2023' },
  { id: 'a2', title: 'MATHRIX 24 | Champions', year: '2024' },
  { id: 'a3', title: 'Publication at SSESL Annual Sessions 2026', year: '2026' },
  { id: 'a4', title: 'Highway Engineering Society | PR Team Lead', year: '2024' },
  { id: 'a5', title: 'Senior Prefect | Sujatha Vidyalaya', year: '2017' },
  { id: 'a6', title: 'Girl Guides | President', year: '2019' },
];

// =========================================
// 🧰 SKILLS
// =========================================
export const SKILLS: SkillCategory[] = [
  {
    title: 'BIM & Reality Capture',
    usedIn: ['Digital twin framework', 'Kalupalama bridge assessment'],
    skills: ['Revit', 'Navisworks', 'ReCap', 'Scan-to-BIM', 'Rebar detailing'],
  },
  {
    title: 'Structural Design',
    usedIn: ['Paravi Duwa bridge'],
    skills: ['SAP2000', 'ETABS', 'Bridge design', 'Steel structures'],
  },
  {
    title: 'Numerical Modelling',
    usedIn: ['Corrosion modelling'],
    skills: ['ANSYS', 'COMSOL Multiphysics', 'Finite element analysis'],
  },
  {
    title: 'Surveying & Drafting',
    usedIn: ['Drainage channel design'],
    skills: ['AutoCAD', 'Land survey', 'Setting out', 'Theodolite survey'],
  },
  {
    title: 'Site & Planning',
    usedIn: ['Pre-school & Cultural Centre'],
    skills: ['Site supervision', 'BOQ preparation', 'Procurement scheduling', 'Progress reporting'],
  },
];

// =========================================
// 🧭 JOURNEY (oldest first)
// =========================================
export const PROCESS_STEPS: ProcessStep[] = [
  {
    title: 'BSc Eng (Hons) Civil Engineering',
    year: '2021 - 2024',
    description: 'Graduated from General Sir John Kotelawala Defence University with Second Class Upper Division: 3.41 GPA. Undergraduate research on corrosion in pre-stressed concrete and a redesign of the Paravi Duwa bridge.',
  },
  {
    title: 'Engineering Intern | Access Engineering PLC',
    year: '2023 - 2024',
    description: 'Worked across the design, planning and site units, from design support and BOQs to supervising concreting on the Narahenpita Pre-school and Cultural Centre.',
  },
  {
    title: 'Civil Engineer | Central Engineering Services',
    year: '2025 - 2026',
    description: 'Delivering end-to-end BIM workflows in Revit, from structural modelling and rebar detailing to Scan-to-BIM with ReCap, and researching digital twins and AR for construction.',
  },
];
