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
  title: 'BIM Engineer',
  role: 'BIM Engineer',
  affiliation: 'Central Engineering Services (Pvt) Ltd',
  interests: ['BIM-driven workflows', 'Digital twins', 'Scan-to-BIM & point clouds', 'Bridge design', 'Numerical modelling'],
  tagline: 'I bring BIM and reality capture to the way we build and care for infrastructure.',
  intro: 'Merging civil engineering with modern technology for impactful, data-driven solutions.',
};

export const ABOUT_DATA = {
  photo: asset('hemalka.png'),
  bio: `I am a dedicated BIM Engineer with a diverse skill set in problem-solving, communication, leadership, and teamwork. Passionate about merging civil engineering with modern technology and skilled in BIM Driven workflows, Software Modelling, Numerical Modelling, Bridge Designing and on site working experience. Thrives in complex situations, finding innovative solutions and Excellent communicator, building strong relationships, Natural leader, motivating teams towards collective goals. Committed to driving success, utilizing adaptability, strategic thinking, and a results-oriented approach. Eager to integrate civil engineering with modern technology for impact solutions.`,
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
// Project images live in public/projects/<slug>/
const IMG = (slug: string, name: string) => asset(`projects/${slug}/${name}.webp`);
const PD = (name: string) => IMG('paravi-duwa', name);
const CO = (name: string) => IMG('corrosion', name);
const NA = (name: string) => IMG('narahenpita', name);
const SC = (name: string) => IMG('survey-camp', name);

export const PROJECTS: Project[] = [
  {
    id: 'paravi-duwa',
    slug: 'paravi-duwa-bridge',
    title: 'Paravi Duwa Bridge & Car Park Redesign, Matara',
    description: 'Re-designing the 107 m bridge to Paravi Duwa island after the old cable-stayed bridge collapsed, with an 80-space car park for temple visitors.',
    longDescription: `Paravi Duwa is a small island off the Matara coast with a modern Buddhist temple. Its only link to the mainland, a three-span cable-stayed bridge, collapsed on 4 March 2022. The temporary bridge that replaced it lacks aesthetic appeal, and the temple has too little parking for its visitors.

This comprehensive design project at General Sir John Kotelawala Defence University set out to re-design the 107 m bridge with all its architectural, structural, geotechnical and environmental aspects, to design a car park for temple visitors, and to carry out an environmental impact assessment for the coastal site.

After comparing arch, cable-stayed and beam bridges, the team chose a four-span pre-stressed concrete beam bridge with decorative stay cables. The design ran from loads and foundations through beams, deck, pylons, cables and abutments, to lighting, drainage, the car park and a full bill of quantities.`,
    role: 'One of seven in Group 06. I was responsible for the pre-stressed beam design, the abutment design, and the feasibility study and bridge drawings.',
    tags: ['Bridge design', 'Pre-stressed concrete', 'SAP2000', 'Eurocode', 'Car park design', 'EIA'],
    gallery: [
      PD('temporary-bridge'),
      PD('collapsed-bridge'),
      PD('drawing-longitudinal'),
      PD('sap2000-model'),
      PD('pc-beam-section'),
      PD('abutment-design'),
      PD('car-park-layout'),
      PD('dialux-lighting'),
    ],
    details: [
      '107 m four-span bridge on 26.75 m pre-stressed concrete beams',
      'Feasibility study comparing arch, cable-stayed and beam bridges',
      'Pre-stressed beam design: Magnel diagram, cable zone, losses and deflection',
      'Abutment design for vertical, earth, hydrostatic and surcharge loads',
      'Whole bridge modelled and analysed in SAP2000',
      'Pile, pile cap, pylon, stay cable and staircase design',
      'Solar LED walkway lighting checked in DIALux',
      '80-space car park, EIA and a Rs. 219.8 million bill of quantities',
    ],
    sections: [
      { type: 'heading', content: 'The site' },
      { type: 'text', content: 'The old bridge was built after the 2004 tsunami, and its piles and pile caps were still intact after the collapse. The site lies within the Coastal Zone defined by the Coast Conservation Act No. 57 of 1981, so the project needed a permit and an environmental impact assessment under Coast Conservation Department and Central Environmental Authority guidelines. Site visits covered the collapsed bridge, the temporary bridge and a survey of the area.' },
      {
        type: 'gallery',
        images: [
          { src: PD('collapsed-bridge'), caption: 'The collapsed cable-stayed bridge' },
          { src: PD('temporary-bridge-deck'), caption: 'The temporary bridge just after construction' },
          { src: PD('old-pile-caps'), caption: 'Piles and pile caps of the old bridge' },
          { src: PD('site-survey'), caption: 'Surveying the site' },
        ],
      },
      { type: 'text', content: 'The EIA assessed air, water, noise, ecological, and social, cultural and economic impacts for both construction and operation, and set out mitigation for each: covering dusty stockpiles, silt barriers and sediment basins, limiting loud work to normal hours, scheduling around religious events, plus solid waste and wastewater management plans for the temple.' },

      { type: 'heading', content: 'Choosing the bridge' },
      { type: 'text', content: 'Arch, cable-stayed and beam bridges were compared on environmental, structural, economic, architectural, social and legal grounds. The chosen design is a four-span beam bridge of pre-stressed concrete girders, with decorative stay cables from the pylons that echo the original cable-stayed bridge. The design follows EN 1992-1:2004 with AASHTO standards.' },
      { type: 'image', src: PD('longitudinal-section'), caption: 'Longitudinal section: 107 m in four spans of 26.75 m.' },
      { type: 'image', src: PD('deck-plan'), caption: 'Plan of the deck.' },

      { type: 'heading', content: 'Pre-stressed beam design' },
      { type: 'text', content: 'Each span is carried by 26.75 m post-tensioned beams in G50 concrete (36 N/mm² at transfer), stressed with 7-wire 12.9 mm strands of 1680 N/mm² tensile strength. Dead loads came from the beam itself, the cables, handrail, wearing surface and the concrete deck; live loads from a 5 kN/m² UDL and a 120 kN knife-edge load.' },
      {
        type: 'gallery',
        contain: true,
        images: [
          { src: PD('pc-beam-section'), caption: '26.75 m PC beam cross-section' },
          { src: PD('deck-cross-section'), caption: 'Bridge deck cross-section' },
        ],
      },
      {
        type: 'table',
        headers: ['Bending moment', 'kNm'],
        rows: [
          ['Self-weight', '884.61'],
          ['Stay cables', '382.82'],
          ['Handrail', '242.39'],
          ['Wearing surface', '101.70'],
          ['Debonding', '533.98'],
          ['Concrete deck', '536.67'],
          ['Live load, UDL', '447.20'],
          ['Live load, KEL', '605.00'],
        ],
        caption: 'Bending moments on one 26.75 m beam.',
      },
      { type: 'text', content: 'The Magnel diagram bounded the pre-stress force between 1,470.6 kN and 8,333.3 kN, and 5,000 kN was taken as the most economical force. The cable zone and duct layout followed from it.' },
      {
        type: 'gallery',
        contain: true,
        images: [
          { src: PD('magnel-diagram'), caption: 'Magnel diagram' },
          { src: PD('cable-zone'), caption: 'Cable zone' },
          { src: PD('duct-arrangement'), caption: 'Duct arrangement in the beam' },
        ],
      },
      {
        type: 'stats',
        items: [
          { value: '5,000 kN', label: 'Economic pre-stress force' },
          { value: '5.81%', label: 'Short-term losses' },
          { value: '19.27%', label: 'Long-term losses' },
          { value: '7.14 mm', label: 'Net deflection' },
        ],
      },
      { type: 'text', content: 'Pre-stress pushes the beam up by 49.37 mm and dead load brings it down by 56.51 mm, leaving 7.14 mm net. The beams sit on Type B elastomeric bearings to EN 1337-3:2005, 250 × 300 × 50 mm with eight layers, which pass the load to the substructure while allowing controlled movement.' },

      { type: 'heading', content: 'Analysis in SAP2000' },
      { type: 'text', content: 'The whole structure was modelled in SAP2000 with area loads from the deck, wearing surface, handrails, wind and thermal stress, plus pedestrian live load. Pedestrian load was worked out from 10,000 visitors a day with a 10% peak hour, giving 2.67 persons/m² and 698.25 kN in total. The model gave a deflection of 5 mm.' },
      {
        type: 'gallery',
        images: [
          { src: PD('sap2000-model'), caption: 'SAP2000 model of the four spans' },
          { src: PD('sap2000-deflection'), caption: 'Deformed shape under load' },
        ],
      },

      { type: 'heading', content: 'Foundations and abutments' },
      { type: 'text', content: 'The superstructure puts 8,755.83 kN on the foundations, or 2,422.03 kN per pile cap at ULS. Pile caps are 4.8 × 1 × 1.5 m with T20 main bars at 150 mm, T10 shear links at 200 mm and 75 mm cover for the marine setting. Piles are socketed 800 mm into rock.' },
      {
        type: 'gallery',
        contain: true,
        images: [
          { src: PD('pile-cap-plan'), caption: 'Pile cap plan' },
          { src: PD('pile-cap-reinforcement'), caption: 'Pile cap reinforcement' },
          { src: PD('pile-section'), caption: 'Typical pile section' },
        ],
      },
      { type: 'text', content: 'The abutments take the beam reactions plus horizontal pedestrian force, earth pressure, hydrostatic pressure and surcharge, for a total ultimate moment of 241.45 kNm. Main reinforcement is T20 and T16 at 150 mm, with T16 secondary bars at 150 mm.' },
      {
        type: 'table',
        headers: ['Horizontal load on abutment', 'Force (kN)', 'Ultimate moment (kNm)'],
        rows: [
          ['Pedestrian force', '6.53', '29.78'],
          ['Earth pressure', '64.54', '145.65'],
          ['Hydrostatic pressure', '8.58', '6.84'],
          ['Surcharge pressure', '17.48', '59.17'],
          ['Total', '', '241.45'],
        ],
      },
      {
        type: 'gallery',
        contain: true,
        images: [
          { src: PD('abutment-design'), caption: 'Abutment section' },
          { src: PD('abutment-reinforcement'), caption: 'Abutment reinforcement' },
        ],
      },

      { type: 'heading', content: 'Cables, finishes and services' },
      { type: 'text', content: 'The decorative stay cables use a modified fan system, anchored with fork-end terminals on galvanised steel clevis brackets welded to the pylons and deck, then tensioned. Handrails are 1,100 mm stainless steel 316 balusters for corrosion resistance, and the stairs are faced in slip-resistant granite or sandstone.' },
      { type: 'text', content: 'Twenty 13 W solar LED bollards, 12 m apart on each side, light the walkway to EN 13201:2015 class P5. DIALux gave an average of 22.32 lux, and each light has its own 30 W panel and a battery for two to three nights. Rainwater runs off the 2.5 m deck through gutters and 75 mm uPVC downpipes, sized for 60 mm/hr rainfall.' },
      {
        type: 'gallery',
        images: [
          { src: PD('handrail'), caption: 'Stainless steel 316 handrail' },
          { src: PD('dialux-lighting'), caption: 'Walkway lighting in DIALux' },
        ],
      },

      { type: 'heading', content: 'Car park' },
      { type: 'text', content: 'The 4,375 m² car park follows UDA regulations and AASHTO guidelines, with turning paths checked for cars and buses. It has 80 spaces: 53 for motorbikes, 19 for cars, vans and jeeps, 8 for buses, and one accessible space. Grass paving blocks let rain soak in, interlocking pavers take the heavy loads, and runoff is graded at 1–2% towards the existing border drains. Lighting is solar powered.' },
      {
        type: 'gallery',
        images: [
          { src: PD('car-park-site'), caption: 'Car park site' },
          { src: PD('bus-turning-radius'), caption: 'Bus turning radius' },
          { src: PD('car-park-layout'), caption: 'Car park layout' },
        ],
      },

      { type: 'heading', content: 'Cost' },
      {
        type: 'table',
        headers: ['Bill of quantities', 'Rs.'],
        rows: [
          ['Bridge deck construction', '82,750,000'],
          ['Substructure works', '35,000,000'],
          ['Pylon construction', '24,250,000'],
          ['Electrical installations', '16,350,000'],
          ['Finishing works', '15,750,000'],
          ['Decorative cables', '9,400,000'],
          ['Site cleaning and demolition', '6,601,000'],
          ['Bridge subtotal', '190,101,000'],
          ['Car park subtotal', '29,720,000'],
          ['Total estimated cost', '219,821,000'],
        ],
      },
      { type: 'heading', content: 'Drawings' },
      {
        type: 'gallery',
        contain: true,
        images: [
          { src: PD('drawing-longitudinal'), caption: 'Longitudinal section' },
          { src: PD('drawing-abutment'), caption: 'Abutment details' },
          { src: PD('drawing-car-park'), caption: 'Car park layout' },
        ],
        caption: 'Click a drawing to open it full size.',
      },
    ],
  },
  {
    id: 'corrosion',
    slug: 'corrosion-modelling',
    title: 'Corrosion Modelling of Pre-Stressed Concrete Structures',
    description: 'A finite element model of chloride-induced corrosion in pre-stressed concrete beams, validated against 72 beams cast and corroded in the lab.',
    longDescription: `Corrosion is one of the main ways pre-stressed concrete deteriorates. Carbonation or chloride attack breaks down the protective layer around the steel, and the corrosion that follows shrinks the strands, weakens the steel and cracks the concrete around it. Because pre-stressed structures can collapse suddenly when strands fail, it matters to know where and when corrosion will start.

This final-year research project, supervised by Eng. B. H. J. Pushpakumara, set out to identify how chloride-induced corrosion behaves in pre-stressed concrete, and to build a model that predicts the service life of affected structures.

The work ran on two tracks: a finite element model of pre-stressed beams and of chloride ingress, and an experimental programme of cast, pre-stressed and corroded beams to validate it.`,
    role: 'Individual final-year research project at General Sir John Kotelawala Defence University.',
    tags: ['ANSYS', 'COMSOL Multiphysics', 'Finite element analysis', 'Durability', 'Experimental testing'],
    gallery: [
      CO('cast-beams'),
      CO('equivalent-stress'),
      CO('chloride-day-120'),
      CO('strand-tensioning'),
      CO('tetrahedral-mesh'),
      CO('formwork'),
    ],
    details: [
      '72 pre-stressed beams cast in G40, G50 and G60 concrete',
      'Strands tensioned to 250, 500 and 750 kN, plus unstressed controls',
      'Accelerated corrosion test in seawater with an applied DC voltage',
      'Pre-stressed beam model in ANSYS: camber, stress, deflection and mode shapes',
      'FEA chloride ingress model over 120 days',
      'Model validated against flexural strength and chloride concentration tests',
    ],
    sections: [
      { type: 'heading', content: 'How corrosion starts' },
      { type: 'text', content: 'Electrons freed at the anode travel through the steel to the cathode, where oxygen and water turn them into hydroxyl ions. In concrete this goes through stages: chlorides penetrate the cover, the steel depassivates, rust builds pressure until a crack initiates, and the crack propagates until the structure reaches the end of its service life.' },
      {
        type: 'gallery',
        contain: true,
        images: [
          { src: CO('corrosion-cell'), caption: 'The corrosion cell on steel' },
          { src: CO('corrosion-stages'), caption: 'Stages from chloride penetration to cracking' },
        ],
      },

      { type: 'heading', content: 'Test programme' },
      { type: 'text', content: 'Three concrete grades were tested, each at three pre-stressing loads and an unstressed control, with three beams of each type to average the results: 72 beams in all, with 10 mm strands and a constant clear cover.' },
      { type: 'image', src: CO('specimen-arrangement'), caption: 'Specimen arrangement: each grade at 250, 500 and 750 kN.', narrow: true },
      {
        type: 'table',
        headers: ['Grade', 'Water/cement ratio'],
        rows: [
          ['G40', '0.47'],
          ['G50', '0.39'],
          ['G60', '0.33'],
        ],
      },
      { type: 'text', content: 'The strands were tensioned in the formwork, the concrete was poured around them, and the load was released once it had hardened. Slump was checked on every batch and came out at 170–180 mm.' },
      {
        type: 'gallery',
        images: [
          { src: CO('formwork'), caption: 'Formwork' },
          { src: CO('strand-tensioning'), caption: 'Tensioning the strands' },
          { src: CO('fresh-concrete'), caption: 'Fresh concrete' },
          { src: CO('cast-beams'), caption: 'Hardened beams ready for testing' },
        ],
      },
      {
        type: 'table',
        headers: ['Requirement', 'Test'],
        rows: [
          ['Workability', 'Slump test (AASHTO T 119)'],
          ['Flexural strength', 'Three-point bending (ASTM C1609)'],
          ['Corrosion rate and amount', 'Accelerated corrosion test (ASTM B117)'],
        ],
      },
      { type: 'text', content: 'For the accelerated corrosion test the beams were immersed in seawater, electrodes were connected and a DC voltage applied, and crack widths were monitored and recorded. Free and total chloride concentration, rust production and the corrosion rate were then measured.' },

      { type: 'heading', content: 'Pre-stressed beam model' },
      { type: 'text', content: 'Twelve 150 × 150 × 1000 mm beams were modelled in ANSYS Workbench, one per grade and load, plus unstressed controls. The strand was bonded to the concrete, fixed at one end and released at the other to develop the pre-stressing force. The model gave flexural strength, deflection, upward camber and mode shapes, which were checked against the literature.' },
      {
        type: 'gallery',
        contain: true,
        images: [
          { src: CO('beam-geometry'), caption: 'Beam geometry with the strand' },
          { src: CO('force-and-supports'), caption: 'Force and supports' },
          { src: CO('upward-camber'), caption: 'Upward camber after release' },
          { src: CO('equivalent-stress'), caption: 'Equivalent stress' },
        ],
      },
      {
        type: 'table',
        headers: ['Mode', 'Pre-stressed (Hz)', 'Not pre-stressed (Hz)'],
        rows: [
          ['1', '82.98', '2.80'],
          ['2', '83.84', '10.30'],
          ['3', '461.15', '16.52'],
        ],
        caption: 'Pre-stressing raises the natural frequencies of the beam.',
      },
      {
        type: 'table',
        headers: ['G40 model', 'Deflection (mm)'],
        rows: [
          ['Control', '1.89'],
          ['250 kN', '3.85'],
          ['500 kN', '3.96'],
          ['750 kN', '4.11'],
        ],
        caption: 'Deflection grows with the pre-stressing force and falls with concrete grade: G40 deflected most and G60 least.',
      },

      { type: 'heading', content: 'Corrosion model' },
      { type: 'text', content: 'The corrosion model used a tetrahedral mesh, with 30 kg/m³ of chloride at the concrete face and a 14 kg/m³ chloride limit. Anodic and cathodic reactions were set up as electrochemical reactions and ferrous chloride formation as a volumetric reaction, assuming uniform corrosion. The model tracked chloride concentration through the beam over 120 days.' },
      { type: 'image', src: CO('tetrahedral-mesh'), caption: 'Tetrahedral mesh for the corrosion model.' },
      {
        type: 'gallery',
        images: [
          { src: CO('chloride-day-0'), caption: 'Chloride concentration at day 0' },
          { src: CO('chloride-day-120'), caption: 'Chloride concentration at day 120' },
        ],
      },

      { type: 'heading', content: 'Findings' },
      {
        type: 'list',
        items: [
          'The finite element corrosion model was validated against the experimental data.',
          'Beams with higher pre-stressing force had higher flexural strength than the lower and unstressed ones.',
          'Free and total chloride concentration fell as the pre-stressing force rose.',
          'Deflection of the pre-stressed models increased with the pre-stressing force.',
          'The model can predict the lifetime of a pre-stressed concrete member.',
        ],
      },
      { type: 'callout', variant: 'info', content: 'The gap between model and experiment comes from real concrete: cracking and corrosion are more complex than the software assumes, the model treats the material as perfectly uniform, and moisture, aggregate distribution, temperature and small vibrations all affect the test results.' },
      { type: 'text', content: 'Next steps would be to model pitting rather than uniform corrosion, build a numerical model to validate against, extend the service-life prediction to carbonation, and try other materials.' },
    ],
  },
  {
    id: 'narahenpita',
    slug: 'narahenpita-preschool',
    title: 'Pre-school & Cultural Centre, Narahenpita',
    description: '24 weeks of industrial training at Access Engineering PLC on an 8.44 million USD pre-school and cultural centre, from site supervision to the design and planning units.',
    longDescription: `The industrial training was 24 weeks at Access Engineering PLC, a leading Sri Lankan engineering and infrastructure contractor with CIDA CS2 grading for buildings and C1 for bridges, and the contractor for the country's largest piling project on the Outer Circular Highway.

The project was the design and construction of a pre-school and cultural centre at Kirimandala Mawatha, Narahenpita, for Shinnyo-En Lanka with Taisei Corporation as consultant: two buildings with 7,875.8 m² of floor area, costing 8.44 million USD and running from May 2023 to June 2024.

The training covered three parts of the business. On site it meant the superstructure and finishing works. In the design unit it meant slab, beam and column design and modelling. In the planning unit it meant procurement schedules and daily progress reports.`,
    role: 'Trainee civil engineer, 24 weeks.',
    tags: ['Site supervision', 'ETABS', 'SAP2000', 'BS 8110', 'Eurocode 2', 'Planning'],
    gallery: [
      NA('site-aerial'),
      NA('site-overview'),
      NA('slab-reinforcement'),
      NA('column-formwork'),
      NA('concreting'),
      NA('etabs-model'),
      NA('toolbox-meeting'),
    ],
    details: [
      'Supervised reinforcement, formwork and concreting of the superstructure',
      'Followed blockwork and anti-termite treatment in the finishing works',
      'Designed a slab for a water tank to EC2 and modelled it in SAP2000',
      'Built shear capacity and slope stability spreadsheets',
      'Modelled two buildings in ETABS and checked slab deformation',
      'Designed beams, slabs and a column to BS 8110 with detail drawings',
      'Prepared procurement and ironmongery schedules and daily progress reports',
    ],
    sections: [
      { type: 'stats', items: [
        { value: '8.44M', label: 'USD project cost' },
        { value: '7,876 m²', label: 'Floor area' },
        { value: '2', label: 'Buildings' },
        { value: '24 wks', label: 'Training period' },
      ] },
      { type: 'heading', content: 'Site safety' },
      { type: 'text', content: 'Every day on site started with personal protective equipment and a toolbox meeting, with warning signs marking hazards around the works.' },
      {
        type: 'gallery',
        images: [
          { src: NA('toolbox-meeting'), caption: 'Toolbox meeting' },
          { src: NA('warning-signs'), caption: 'Warning signs on site' },
        ],
      },

      { type: 'heading', content: 'Superstructure' },
      { type: 'text', content: 'The superstructure is the beams, columns, walls, slabs and parapets that carry dead, live and imposed loads down to the substructure. The work falls into reinforcement, formwork and concreting.' },
      { type: 'heading', content: 'Reinforcement', level: 3 },
      {
        type: 'list',
        items: [
          'Beams: T10 to T25 main bars with T10 shear links, lapped at 40 bar diameters.',
          'Columns: T20 to T32 main bars running through the slabs, 40 mm cover blocks at no more than 1 m spacing, first lift limited to 2 m.',
          'Slabs: four layers (T1, T2, B1, B2), extended into the beam reinforcement for continuity.',
          'RC walls: 30 mm cover, first lift limited to 2,000 mm, with wall starters checked for cover before the floor slab is poured.',
        ],
      },
      {
        type: 'gallery',
        images: [
          { src: NA('slab-reinforcement'), caption: 'Slab reinforcement' },
          { src: NA('wall-reinforcement'), caption: 'Wall reinforcement' },
        ],
      },
      { type: 'heading', content: 'Formwork and concreting', level: 3 },
      { type: 'text', content: 'Circular columns used steel formwork and rectangular ones timber. Form oil gave a smooth finish and easy striking, and verticality was checked with a plumb bob. Each truck of concrete was checked for slump and temperature, compacted with poker vibrators and rubber mallets, and cured with water or a curing compound. Pours were planned to avoid cold joints.' },
      {
        type: 'gallery',
        images: [
          { src: NA('column-formwork'), caption: 'Column formwork' },
          { src: NA('concreting'), caption: 'Compacting with a poker vibrator' },
          { src: NA('curing'), caption: 'Applying curing compound' },
        ],
      },

      { type: 'heading', content: 'Finishing works' },
      { type: 'text', content: 'Before blockwork, the ground floor was treated against termites with bifenthrin at 1 m hole spacing. Blocks were laid with about 10 mm joints and checked with a plumb bob, no cut block smaller than half a block, and nails for stiffener and lintel formwork went into the blocks, not the mortar, to avoid cracking it.' },
      { type: 'image', src: NA('blockwork'), caption: 'Blockwork in progress.', narrow: true },

      { type: 'heading', content: 'Design unit' },
      { type: 'text', content: 'For a mini tennis court project, a 2.66 × 2.06 m concrete slab to hold a water tank was designed to EC2 and modelled in SAP2000. A spreadsheet worked out the shear capacity of doubly reinforced rectangular beams of different sizes, and another applied Culmann\'s method to wedge failure of a 3.5 m slope.' },
      {
        type: 'gallery',
        contain: true,
        images: [
          { src: NA('sap2000-slab'), caption: 'Meshed slab in SAP2000' },
          { src: NA('shear-capacity-sheet'), caption: 'Shear capacity spreadsheet' },
        ],
      },
      { type: 'text', content: 'For the NSCC project, an 8 m beam, a long-span and a short-span slab panel and a column were designed to BS 8110. Both buildings were modelled in ETABS with their beams, columns and slabs, and every slab panel was checked for deformation. Detail drawings with lap and crank lengths followed IStructE/ICE guidance.' },
      {
        type: 'gallery',
        contain: true,
        images: [
          { src: NA('beam-design-sheet'), caption: 'Beam design to BS 8110' },
          { src: NA('etabs-model'), caption: 'ETABS model' },
        ],
      },

      { type: 'heading', content: 'Planning unit' },
      { type: 'text', content: 'The planning unit prepared the procurement schedule, with dates, milestones and deliverables for every stage from identifying a need to delivery and payment. It also produced two daily reports, one for manpower and one for completed work, materials, machinery and subcontractors, and the ironmongery schedule for doors and windows.' },
      { type: 'image', src: NA('procurement-schedule'), caption: 'Procurement schedule.' },
    ],
  },
  {
    id: 'survey-camp',
    slug: 'survey-camp-channel',
    title: 'Drainage Channel Design, KDU Southern Campus',
    description: 'Surveying a catchment, designing a 1.05 m³/s channel and setting out a new canteen at the KDU Southern Campus, Sooriyawewa.',
    longDescription: `The Intake 38 survey camp was held at the General Sir John Kotelawala Defence University Southern Campus in Sooriyawewa. The aim was to design a channel to carry water through a selected area, set out a proposed new canteen, and design a road to give access to it.

The work ran from traversing, levelling and detail survey, through contour maps and channel sections, to hydrological calculations, the channel design and setting out on the ground.`,
    role: 'One of eight members of Group 1.',
    tags: ['Land survey', 'Total station', 'AutoCAD', 'Surfer', 'Hydraulic design', 'Setting out'],
    gallery: [
      SC('field-work'),
      SC('survey-team'),
      SC('contour-map'),
      SC('main-traverse'),
      SC('autocad-detailing'),
      SC('channel-cross-sections'),
      SC('mass-haul-diagram'),
    ],
    details: [
      'Closed main traverse over the catchment and an internal traverse along the existing channel',
      'Closed-loop levelling, repeated by the flyback method to meet the allowable error',
      'Detail survey plotted in AutoCAD through Transit',
      'Contour map of the catchment generated in Surfer',
      'Channel cross-sections every 5 m, longitudinal section and mass haul diagram',
      'Rational method and Manning\'s equation for a 1.05 m³/s design discharge',
      'Most economical trapezoidal section: 0.42 m deep, 0.5 m base, 1.0 m top',
      'New canteen set out from AutoCAD coordinates',
    ],
    sections: [
      { type: 'image', src: SC('site-aerial'), caption: 'The KDU Southern Campus at Sooriyawewa.', narrow: true },
      { type: 'image', src: SC('channel-workflow'), caption: 'Steps in designing the channel.', narrow: true },

      { type: 'heading', content: 'Traversing and levelling' },
      { type: 'text', content: 'A main traverse covering the whole estimated catchment tied four control points to two GPS stations, and an open internal traverse picked up the existing channel in detail. A traverse is accepted when the obtained error is below the allowable error, and the error is then distributed.' },
      { type: 'equation', content: 'Allowable error = 1.27 √K      (K = distance in km)\nObtained error = √(ΔN² + ΔE²)' },
      {
        type: 'gallery',
        images: [
          { src: SC('main-traverse'), caption: 'Main traverse and control points' },
          { src: SC('tie-measurements'), caption: 'Tie measurements to the control points' },
          { src: SC('internal-traverse'), caption: 'Internal traverse along the existing channel' },
        ],
      },
      { type: 'text', content: 'A closed loop level line was run between the control points. The first attempt came out above the allowable error, so it was repeated by the flyback method.' },
      { type: 'equation', content: 'Obtained error = Σ Rise − Σ Fall = Σ BS − Σ FS\nAllowable error = 0.024 √K' },

      { type: 'heading', content: 'Detailing, contours and sections' },
      { type: 'text', content: 'Detail survey data was converted in Transit and plotted in AutoCAD. Surfer produced a contour map of the catchment, and the channel was drawn as a longitudinal section and as cross-sections every 5 m along its length. A mass haul diagram balanced the cut and fill.' },
      {
        type: 'gallery',
        images: [
          { src: SC('autocad-detailing'), caption: 'Detail survey in AutoCAD' },
          { src: SC('contour-map'), caption: 'Contour map from Surfer' },
          { src: SC('channel-cross-sections'), caption: 'Channel cross-sections' },
          { src: SC('mass-haul-diagram'), caption: 'Mass haul diagram' },
        ],
      },

      { type: 'heading', content: 'How much water' },
      { type: 'text', content: 'Three sources gave very different rainfall intensities: 27.9 mm/hr from a design reference, 524.26 mm/hr from a 10-year IDF curve with a 4.34 minute time of concentration, and 37.5 mm/hr measured at the Hambantota station in November 2021. Because the IDF value was so far from the measured data, the design used 37.5 mm/hr.' },
      { type: 'text', content: 'The catchment was split into sub-areas using the contour map, and an area-weighted runoff coefficient of 0.4942 was calculated for its mix of land types. The channel also had to carry flow from two existing channels and wastewater from the old and new canteens, with a safety factor of 1.5 on the wastewater.' },
      { type: 'equation', content: 'Qp = (1/3.6) · C · i · A = 0.08 m³/s' },
      {
        type: 'table',
        headers: ['Flow into the channel', 'm³/s'],
        rows: [
          ['Surface runoff (rational method)', '0.08'],
          ['Existing channel near the cafeteria', '0.15'],
          ['Existing channel near the temple', '0.79'],
          ['Canteen wastewater', '0.027'],
          ['Design discharge', '1.05'],
        ],
        caption: 'Existing channel flows from Manning\'s equation with n = 0.012.',
      },

      { type: 'heading', content: 'Channel section' },
      { type: 'text', content: 'The channel is trapezoidal, half a hexagon, which is the most economical section: it minimises the wetted perimeter at side slopes of 60°, so the hydraulic radius is half the depth. Solving Manning\'s equation for 1.05 m³/s at a slope of 0.0134 gave the final dimensions.' },
      { type: 'equation', content: 'A = √3 y²      R = y / 2      b = 2y / √3\n1.05 = √3 y² × (1/0.012) × (y/2)^(2/3) × 0.0134^(1/2)\ny = 0.421 m' },
      {
        type: 'stats',
        items: [
          { value: '1.05 m³/s', label: 'Design discharge' },
          { value: '0.42 m', label: 'Depth' },
          { value: '0.5 m', label: 'Bottom width' },
          { value: '1.0 m', label: 'Top width' },
        ],
      },
      { type: 'heading', content: 'Setting out and access road' },
      { type: 'text', content: 'The canteen was placed in the AutoCAD drawing and its coordinates taken off for setting out in the field. A 28 m access road for loading and unloading was added to the brief later; it was planned with an asphalt surface, a 2% cross slope and a 2.1 m design vehicle width, though time ran out before its design was finished.' },
      { type: 'callout', variant: 'tip', content: 'Skills covered: detail survey, contour maps in Surfer, design and placement of the canteen, road and drainage, field setting out, total station and level work, field records and quality control, earthwork calculations, and Transit, AutoCAD and GIS.' },
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
