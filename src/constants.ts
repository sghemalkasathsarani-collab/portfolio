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
  photo: asset('hemalka.png'),
  bio: `I am a Civil Engineer passionate about merging civil engineering with modern technology. My work spans BIM-driven workflows, bridge design, software and numerical modelling, with hands-on site experience behind it.

I thrive in complex situations and enjoy finding innovative solutions, from turning point clouds into models of damaged bridges to building digital twins that track how concrete structures age. I like working with people as much as with models, and enjoy leading teams towards a shared goal.`,
};

// =========================================
// 📄 RESEARCH PAPERS
// =========================================
// Bolded wherever it appears in a paper's author list
export const OWN_NAME = 'H. S. S. Gamage';

export const RESEARCH_PAPERS: ResearchPaper[] = [
  {
    id: 'p1',
    title: 'Development of a BIM-Driven Digital Twin Framework for Lifecycle Monitoring of Structural Deterioration in Concrete Infrastructure',
    abstract: 'The current state of ageing concrete infrastructure leads to increasing maintenance expenses, safety risks and service disruptions, since the existing Structural Health Monitoring (SHM) practices often lack integration with Building Information Modeling (BIM) and Digital Twin (DT) technologies, limiting real-time condition assessment and predictive maintenance capabilities. This study introduces a closed loop based, BIM driven, Digital Twin framework for the continuous condition-based monitoring of reinforced concrete deterioration. This framework is based on recent published articles that investigate the integration of BIM and DT for structural health monitoring, deterioration prediction and condition-based maintenance of concrete infrastructure. The framework integrates (1) parametric BIM structural baseline (LOD 350-400) with geometry, material grades, rebar detailing and deterioration thresholds, (2) an IoT enabled sensing layer to capture crack width (±0.01 mm), strain deformation (με), corrosion potential (mV) and concrete resistivity (kΩ·cm) in real time, and (3) predictive analytics using time-series degradation models to predict Remaining Service Life and Probability of Failure under varying loads. The BIM-DT integration framework is based on the principles of systems-theoretic risk governance, and empirical evidence shows that the integration maturity is always associated with the decrease of multidimensional risk in civil infrastructure projects. Operationalization of risk involves quantifying the severity of the deterioration indicators; crack propagation rate (mm/day), deterioration of stiffness (ΔE/E₀), cross section loss (mm²/year), and trajectories of probability of failure that can be updated periodically. Previous studies validated the management of demolition waste, which indicated the high material recovery rate and a positive net economic benefit for BIM Navisworks with DT data fusion. The proposed framework aims to achieve extended service life, reduction of lifecycle cost and unplanned downtime compared to conventional regimes, and creates a bi-directional digital thread between physical assets and their digital representation, helping infrastructure owners to move away from the traditional approach of maintenance.',
    image: asset('research_papers/SSESL_Digital_Twin.webp'),
    link: '#',
    publisher: 'Society of Structural Engineers, Sri Lanka (SSESL) Annual Sessions 2026',
    venue: 'SSESL',
    authors: ['H. S. S. Gamage', 'R. C. Dissanayake', 'P. M. Ranawaka'],
    date: '2026',
    summary: {
      problem: 'Structural health monitoring of ageing concrete is rarely linked to BIM, so deterioration is caught late and maintenance stays reactive.',
      built: 'A five-layer BIM-driven digital twin: IoT sensing, data pipeline, FEM analytics, IFC/BIM integration and a web dashboard.',
      result: 'Sensor readings are tied to each BIM element, so a crack or corrosion event can trigger a maintenance workflow automatically.',
    },
    tags: ['BIM', 'Digital Twin', 'Structural Health Monitoring', 'IoT Sensors'],
  },
  {
    id: 'p2',
    title: 'Development of a BIM and AR Framework for Real-Time Construction QA/QC',
    abstract: 'Quality assurance and quality control (QA/QC) are critical concerns in the construction industry throughout project execution due to inadequate information and data sharing, manual inspection methods, poor communication among stakeholders, and delays in identifying defects. Using recent literature and frameworks that explore the idea of digital construction technologies, this paper addresses these basic inefficiencies by presenting a conceptual framework that demonstrates how Building Information Modelling (BIM) and Augmented Reality (AR) can be used together for real-time QA/QC in construction. The framework demonstrates that BIM is an effective tool for centralized storage of data for the management of the geometric, temporal and structural life cycles, whereas AR is an excellent complement to BIM, enabling communication between the virtual and real-time physical elements. This paper presents a unified web-based BIM-AR conceptual framework, building on the knowledge gained from the review, which aims to set up a common and continuous digital environment. The framework integrates (1) multidimensional metadata such as geometric, structural, and temporal (4D) parameters systematically extracted from open-standard Industry Foundation Class (IFC) BIM models, (2) an interactive, web-based digital inspection checklist automatically created by the system in accordance with model components, (3) mobile and wearable AR devices that enable field personnel to overlay 3D digital design templates directly onto physical structures, and (4) the results of field inspections, any structural variations, and real-time validation data, captured and synchronized in real time within a common cloud repository. Ultimately, this research benefits both academic knowledge and practical applications by outlining actionable approaches for integrating digital technologies and setting the stage for fully automated, highly secure, and autonomous quality environments.',
    image: asset('research_papers/CECB_BIM_AR_QAQC.webp'),
    link: '#',
    publisher: 'CECB / CESL Symposium 2026',
    venue: 'CECB',
    authors: ['H. S. S. Gamage', 'P. M. Ranawaka'],
    date: 'Accepted',
    summary: {
      problem: 'Construction QA/QC relies on manual inspections and scattered drawings, forms and photos, so defects are found late.',
      built: 'A web-based BIM-AR framework that generates inspection checklists from IFC models and overlays the design on site through AR.',
      result: 'Eight inspection scenarios on a 16-storey office building showed full functional coverage and traceability.',
    },
    tags: ['BIM', 'Augmented Reality', 'QA/QC'],
  },
  {
    id: 'p3',
    title: "BIM-Enabled Post-Disaster Damage Assessment of the Kalupalama (Devil's Bridge) Railway Bridge Using Point Cloud Data: A Sri Lankan Case Study",
    abstract: "Extreme weather events increasingly threaten the integrity of critical transport infrastructure. Post-disaster bridge inspections frequently encounter restricted access, hazardous site conditions, and limited baseline information. These difficulties intensify for historic structures, where original design drawings have often been lost or no longer exist. This study presents a BIM-enabled analysis for the post-disaster damage assessment of the Kalupalama (Devil's Bridge) Railway Bridge in Sri Lanka using point cloud data collected after the bridge sustained damage during Cyclone Ditwah. By integrating a framework for point cloud processing with Scan-to-BIM techniques, the proposed approach generates an accurate digital representation of the bridge and supports systematic condition assessment in the absence of original documentation. The point cloud data were processed to remove noise, register scans, and extract the geometric characteristics of the bridge. A detailed Building Information Model (BIM) was then developed to document the post-disaster condition of the structure and support the systematic identification and visualization of damage. The BIM environment was enriched with inspection-related information, including observed defects, affected structural components, and damage severity levels, enabling a centralized platform for condition assessment and rehabilitation planning. The developed assessment demonstrates how point cloud-derived BIM models can facilitate rapid documentation and decision-making when original design drawings, pre-disaster records, and continuous monitoring systems are unavailable. The findings indicate that BIM-enabled workflows can significantly improve the efficiency, traceability, and visualization of post-disaster bridge assessments, providing infrastructure owners with enhanced support for prioritizing inspection and rehabilitation activities. Beyond the case study, this research contributes to the growing body of knowledge on the application of Scan-to-BIM methodologies for infrastructure resilience and offers a practical approach for the digital documentation and management of disaster-affected railway assets in resource-constrained environments. To the authors' knowledge, this represents one of the first studies in Sri Lanka to integrate point cloud data and BIM for the post-disaster assessment of a historic railway bridge.",
    image: asset('research_papers/FIDIC_Kalupalama_Bridge.webp'),
    link: '#',
    publisher: 'FIDIC Asia Pacific Annual Conference 2026',
    venue: 'FIDIC',
    authors: ['H. M. Dilshan', 'H. S. S. Gamage', 'R. M. S. Madumali', 'R. C. Dissanayake', 'P. M. Ranawaka'],
    date: 'Accepted',
    summary: {
      problem: 'A historic railway bridge damaged by Cyclone Ditwah had to be assessed without its original drawings.',
      built: 'A Scan-to-BIM model of the bridge from laser scans and drone photogrammetry, tagged with defects and damage severity.',
      result: 'Modelled dimensions matched the point cloud to 5.8 mm MAE across 45 checkpoints, within USIBD LOA30.',
    },
    tags: ['Scan-to-BIM', 'Post-Disaster Assessment', 'Point Cloud Processing'],
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
