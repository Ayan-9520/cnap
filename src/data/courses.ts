export interface Course {
  id: string;
  title: string;
  category: 'cyber-it' | 'degrees' | 'hospitality' | 'trades' | 'teacher-training' | 'management';
  targetAudience: ('student' | 'teacher' | 'center')[];
  level: string;
  duration: string;
  eligibility: string;
  certification: string;
  stipendEligible: boolean;
  stipendAmount?: string;
  practicalHours: number;
  highlight: string;
  overview: string;
  modules: string[];
  careerOpportunities: string[];
  feeEstimate: string;
}

export const COURSES_DATA: Course[] = [
  // High-Tech & Cyber
  {
    id: 'cyber-soc',
    title: 'Cybersecurity, Digital Forensics & SOC Operations',
    category: 'cyber-it',
    targetAudience: ['student'],
    level: 'Advanced Professional',
    duration: '6 Months (Full-Time) / 12 Months',
    eligibility: '10+2 / Diploma / ITI / Graduation with basic computing',
    certification: 'NSDC & Industry Aligned Security Certification',
    stipendEligible: true,
    stipendAmount: '₹12,000 – ₹18,000 / month in Phase 2',
    practicalHours: 320,
    highlight: 'Hands-on live SOC simulation, threat hunting, and red/blue team drills.',
    overview: 'Specialized intensive program designed to produce frontline cybersecurity analysts, ethical hackers, and incident responders ready for corporate security operations centers.',
    modules: [
      'Network Architecture & TCP/IP Packet Analysis',
      'Ethical Hacking & Vulnerability Assessment (CEH Aligned)',
      'Security Operations Center (SOC) Log Analysis & SIEM Tools',
      'Digital Forensics, Evidence Preservation & Chain of Custody',
      'Cloud Security, AWS/Azure Identity & Access Management',
      'GRC, ISO 27001 Auditing & Cyber Defense Compliance'
    ],
    careerOpportunities: [
      'SOC Analyst (L1/L2)',
      'Junior Penetration Tester',
      'Cyber Forensics Investigator',
      'Information Security Auditor'
    ],
    feeEstimate: 'Government Subsidized / ₹24,000'
  },
  {
    id: 'ai-prompt-tools',
    title: 'AI Tools, Cloud Security & Modern Automation',
    category: 'cyber-it',
    targetAudience: ['student', 'teacher'],
    level: 'Certification',
    duration: '3 Months / 120 Hours',
    eligibility: 'Open to 12th Pass, Undergraduates, and Working Educators',
    certification: 'CNAP Emerging Tech & NSQF Aligned Credential',
    stipendEligible: false,
    practicalHours: 90,
    highlight: 'Master generative AI, workflow automation, and secure enterprise integration.',
    overview: 'Equips participants with hands-on proficiency in using modern AI systems, API integrations, prompt engineering, and cloud deployment security protocols.',
    modules: [
      'Foundations of Generative AI & Foundation Models',
      'Enterprise Workflow Automation (No-code / Low-code API stacks)',
      'Prompt Engineering & Agentic Workflows',
      'Data Privacy, Safe Model Deployment & Ethics',
      'Practical Capstone: Building an Intelligent Business Assistant'
    ],
    careerOpportunities: [
      'AI Operations Specialist',
      'Automation Associate',
      'Digital Transformation Executive',
      'Educator Technology Trainer'
    ],
    feeEstimate: '₹15,000'
  },
  // Design & Engineering
  {
    id: 'cad-solidworks',
    title: 'Product Design, SolidWorks 3D & Mechanical CAD',
    category: 'trades',
    targetAudience: ['student'],
    level: 'Diploma / Certificate',
    duration: '6 Months',
    eligibility: 'ITI / Diploma / B.E. / B.Tech or 12th with Science/Maths',
    certification: 'Industry CAD & SolidWorks Certified Professional Pathway',
    stipendEligible: true,
    stipendAmount: '₹10,000 – ₹15,000 / month (Internship)',
    practicalHours: 280,
    highlight: 'Guided by veteran EV battery & mechanical R&D design heads.',
    overview: 'Real-world 3D modeling, surface modeling, parametric design, sheet metal, and geometric dimensioning & tolerancing (GD&T) for modern manufacturing industries.',
    modules: [
      'Engineering Drafting & AutoCAD 2D Technical Schematics',
      'SolidWorks 3D Part Modeling, Assemblies & Exploded Views',
      'Surface Modeling, Sheet Metal & Mold Design',
      'Finite Element Analysis (FEA) & Stress Testing Basics',
      'Design for Manufacturing (DFM) & EV Enclosure Fabrication'
    ],
    careerOpportunities: [
      'CAD Draftsman / Design Engineer',
      'SolidWorks Modeler',
      'Tool & Die Design Trainee',
      'Manufacturing Simulation Technician'
    ],
    feeEstimate: '₹22,000'
  },
  // Technical Trades & Automation
  {
    id: 'industrial-automation-plc',
    title: 'Industrial Automation, PLC, HMI & Robotics',
    category: 'trades',
    targetAudience: ['student', 'center'],
    level: 'Advanced Vocational Certificate',
    duration: '6 Months',
    eligibility: '10th / 12th / ITI (Electrical / Electronics / Mechanical)',
    certification: 'NSDC Mapped Skill Council for Capital Goods',
    stipendEligible: true,
    stipendAmount: '₹11,000 – ₹16,000 / month apprentice stipend',
    practicalHours: 350,
    highlight: 'Rigorous laboratory workshops with real Siemens & Allen-Bradley PLCs.',
    overview: 'Hands-on qualification preparing students for automated production lines, smart factories, FMCG packaging, and heavy machinery automation systems.',
    modules: [
      'Electrical Circuit Schematics, Relays & Industrial Sensors',
      'PLC Programming (Ladder Logic, Function Block Diagram)',
      'HMI Interface Design & SCADA Monitoring Systems',
      'Pneumatics, Hydraulics & Actuators in Assembly Lines',
      'Robotic Arm Kinematics & Mechatronics Maintenance'
    ],
    careerOpportunities: [
      'Automation Maintenance Technician',
      'PLC Programmer Assistant',
      'Factory Instrumentation Specialist',
      'Plant Electrical Supervisor'
    ],
    feeEstimate: 'Government Subsidized / ₹18,000'
  },
  {
    id: 'electrical-refrigeration-trades',
    title: 'Modern Electrical, HVAC & Food Processing Technology',
    category: 'trades',
    targetAudience: ['student'],
    level: 'Vocational Trade Certificate',
    duration: '6 Months',
    eligibility: '10th / 12th Standard or equivalent',
    certification: 'NSQF Level 4 Certified Trade Qualification',
    stipendEligible: true,
    stipendAmount: '₹9,000 – ₹14,000 / month field placement',
    practicalHours: 300,
    highlight: 'Essential regional livelihood trades with guaranteed contractor linkages.',
    overview: 'Practical trade training addressing critical infrastructure needs: construction electrification, cold-chain refrigeration, and agricultural food processing plants.',
    modules: [
      'Single & 3-Phase Domestic / Commercial Electrical Wiring',
      'HVAC Systems, Compressors & Commercial Cold Storage',
      'Food Processing Equipment & Hygienic Packaging Lines',
      'Industrial Safety, Hazard Management & First Aid'
    ],
    careerOpportunities: [
      'Certified Electrician',
      'HVAC & Cold-Chain Technician',
      'Food Processing Unit Operator',
      'Maintenance Contractor'
    ],
    feeEstimate: '₹14,000'
  },
  // Hospitality & Learn, Work & Earn (Vemosa Replica + Proposal)
  {
    id: 'hospitality-learn-work-earn',
    title: 'Hospitality, Hotel Operations & Culinary Arts (Learn, Work & Earn)',
    category: 'hospitality',
    targetAudience: ['student', 'center'],
    level: 'Diploma / B.Voc Track',
    duration: '1 Year / 3 Years (Dual Track)',
    eligibility: '10th Pass or 12th Pass (Any Stream)',
    certification: 'UGC Recognized University & NSDC Tourism Council Aligned',
    stipendEligible: true,
    stipendAmount: '₹10,000 – ₹22,000 / month (Paid Star-Hotel Internship)',
    practicalHours: 650,
    highlight: 'Guaranteed paid on-job training in leading 4-star and 5-star hotel chains.',
    overview: 'The signature Learn-Work-Earn program bridging classroom theory with paid industry exposure. Students earn monthly stipends while acquiring world-class culinary and hotel management expertise.',
    modules: [
      'Front Office Systems, Guest Relations & Opera PMS',
      'Culinary Arts, Continental & Indian Cuisine Kitchen Labs',
      'Food & Beverage Service, Mixology & Banqueting',
      'Housekeeping Management & Hygiene Standards (HACCP)',
      'Hospitality English, Cross-Cultural Communication & Etiquette',
      'Cruise Ship, Aviation & Luxury Tourism Operations'
    ],
    careerOpportunities: [
      'Front Office Associate',
      'Commis Chef / Demi-Chef de Partie',
      'F&B Guest Service Executive',
      'Aviation Ground Staff / Cruise Host'
    ],
    feeEstimate: 'Flexible EMI / Stipend Self-Funded Option'
  },
  // University Degrees (From Ladli Ju Proposal Phase 2)
  {
    id: 'bca-computer-science',
    title: 'Bachelor of Computer Applications (BCA) & Cloud Computing',
    category: 'degrees',
    targetAudience: ['student', 'center'],
    level: 'Undergraduate Degree',
    duration: '3 Years (6 Semesters)',
    eligibility: '10+2 with minimum 45% marks',
    certification: 'UGC Recognized State / Central University Degree',
    stipendEligible: true,
    stipendAmount: '₹15,000 / month in 5th & 6th Semester Internships',
    practicalHours: 720,
    highlight: 'Integrated with Cloud, Full-Stack Software Engineering, and AI.',
    overview: 'A high-impact undergraduate degree program blending formal university academic rigor with modern industry certifications in software development and database engineering.',
    modules: [
      'C++, Java & Python Programming Core',
      'Database Systems, SQL & PostgreSQL Architecture',
      'Web Technologies, React & Full-Stack Development',
      'Operating Systems, Cloud Foundations & Containerization',
      'Data Structures, Algorithms & Software Engineering Capstone'
    ],
    careerOpportunities: [
      'Software Developer',
      'Full Stack Web Engineer',
      'Database Administrator',
      'IT Systems Consultant'
    ],
    feeEstimate: '₹28,000 / Semester'
  },
  {
    id: 'bba-commerce-management',
    title: 'Bachelor of Business Administration (BBA) in Enterprise & Retail',
    category: 'degrees',
    targetAudience: ['student', 'center'],
    level: 'Undergraduate Degree',
    duration: '3 Years (6 Semesters)',
    eligibility: '10+2 (Any Stream)',
    certification: 'UGC Recognized University Degree',
    stipendEligible: true,
    stipendAmount: '₹12,000 / month summer corporate internships',
    practicalHours: 400,
    highlight: 'Curriculum structured by former leaders of Amity, RICS, and SRM.',
    overview: 'Prepares students for leadership roles in business management, marketing strategy, supply chain logistics, and entrepreneurial venture launching.',
    modules: [
      'Principles of Management & Organizational Behavior',
      'Financial Accounting & Corporate Project Financing',
      'Marketing Management & Brand Strategy',
      'Logistics, Supply Chain & E-commerce Operations',
      'Business Law, Corporate Governance & Entrepreneurship'
    ],
    careerOpportunities: [
      'Business Development Executive',
      'Retail Operations Manager',
      'Marketing Associate',
      'Startup Founder / Regional Entrepreneur'
    ],
    feeEstimate: '₹25,000 / Semester'
  },
  {
    id: 'bsc-agriculture-allied',
    title: 'B.Sc. (Hons.) Agriculture & Rural Agribusiness',
    category: 'degrees',
    targetAudience: ['student', 'center'],
    level: 'Undergraduate Degree',
    duration: '4 Years (8 Semesters)',
    eligibility: '10+2 with Science (PCB / PCM / Agriculture)',
    certification: 'ICAR / UGC Compliant University Degree',
    stipendEligible: true,
    stipendAmount: '₹14,000 / month RAWE Field Project Stipend',
    practicalHours: 850,
    highlight: 'Tailored for Northeast India agriculture, organic farming & agribusiness.',
    overview: 'Advanced agronomy, horticulture, soil sciences, precision agriculture, and commercial nursery management with intensive rural agricultural work experience (RAWE).',
    modules: [
      'Agronomy, Crop Production & Soil Fertility Management',
      'Horticulture, Post-Harvest Management & Cold Storage',
      'Organic Farming & Sustainable Mountain Agriculture',
      'Agri-Business Management, Supply Chains & Farmer Cooperatives',
      'Plant Pathology & Integrated Pest Management (IPM)'
    ],
    careerOpportunities: [
      'Agriculture Development Officer (ADO)',
      'Agribusiness Manager',
      'Organic Farm Supervisor',
      'Quality Control Analyst in Food & Fertilizer Units'
    ],
    feeEstimate: '₹32,000 / Semester'
  },
  // Teacher & Facilitator Programs (Replicating Vemosa Teacher Facilitator Courses)
  {
    id: 'teacher-preschool-facilitator',
    title: 'Pre-School, ECCE & Day-Care Facilitator Certification',
    category: 'teacher-training',
    targetAudience: ['teacher'],
    level: 'Diploma / Certificate',
    duration: '6 Months (Weekend / Hybrid)',
    eligibility: '10+2 or Graduate; Aspiring Educators & Childcare Providers',
    certification: 'CNAP National Early Childhood Certification',
    stipendEligible: false,
    practicalHours: 160,
    highlight: 'Child psychology, play-based learning pedagogies & smart classroom management.',
    overview: 'Empowers aspiring teachers and school educators with modern methodologies for Early Childhood Care and Education (ECCE), aligned with National Education Policy (NEP 2020).',
    modules: [
      'Child Growth, Cognitive Milestones & Developmental Stages',
      'Activity-Based Curriculum Design & Montessori Methods',
      'Language Acquisition, Phonics & Storytelling Techniques',
      'Smart Classroom Digital Aids & Child Safety Protocols',
      'Classroom Internship & Lesson Plan Demonstrations'
    ],
    careerOpportunities: [
      'Pre-Primary Teacher',
      'Day Care Center Director',
      'Early Childhood Curriculum Planner',
      'Child Development Counselor'
    ],
    feeEstimate: '₹14,000'
  },
  {
    id: 'career-counsellor-certification',
    title: 'Certified Career & Vocational Guidance Counsellor',
    category: 'teacher-training',
    targetAudience: ['teacher', 'center'],
    level: 'Professional Post-Grad Certificate',
    duration: '4 Months (Online / Hybrid)',
    eligibility: 'Graduation in any stream (Psychology, Education, HR preferred)',
    certification: 'CNAP Career Guidance & Assessment Council Credential',
    stipendEligible: false,
    practicalHours: 120,
    highlight: 'Master psychometric assessments, stream selection, and university profiling.',
    overview: 'Trains teachers, lecturers, and educational consultants to deliver scientific career mapping, stream selection, and admission mentoring for high school and college youth.',
    modules: [
      'Theories of Career Development & Vocational Psychology',
      'Psychometric Testing, Aptitude & Personality Battery Administration',
      'Higher Education Pathways in India & Global Study Options',
      'Vocational / Skill Development Opportunities (NSQF / NSDC Framework)',
      'Parent-Student Counselling & Ethical Advisory Standards'
    ],
    careerOpportunities: [
      'Institutional Career Counselor',
      'Admission Guidance Director',
      'Independent Career Practice Consultant',
      'EdTech Student Mentor'
    ],
    feeEstimate: '₹18,000'
  },
  // Center / Entrepreneurship
  {
    id: 'entrepreneurship-incubation',
    title: 'Rural & Regional Entrepreneurship Incubation Module',
    category: 'management',
    targetAudience: ['student', 'center'],
    level: 'Certificate & Mentorship',
    duration: '3 Months + 6 Months Incubation Support',
    eligibility: 'Open to youth with a venture idea or family business',
    certification: 'Ladli Ju & CNAP Venture Incubation Certificate',
    stipendEligible: true,
    stipendAmount: 'Micro-grant / Seed Linkage Support up to ₹2,00,000',
    practicalHours: 150,
    highlight: 'Direct institutional linkages for government scheme subsidies (PMEGP, MSME).',
    overview: 'Empowers youth with the tools to write viable business plans, structure project finance, navigate regulatory compliance, and launch profitable local enterprises.',
    modules: [
      'Idea Validation, Market Research & Unit Economics',
      'Business Registration, GST, MSME & Licensing Compliance',
      'Project Financing, Bankable DPR Creation & PMEGP Linkages',
      'Digital Marketing, Social Selling & Supply Chains',
      'Pitch Deck Presentation to Angel Mentors & Council Officials'
    ],
    careerOpportunities: [
      'Independent Business Owner',
      'MSME Venture Founder',
      'Franchise Operator',
      'Regional Trade Manager'
    ],
    feeEstimate: 'Sponsored / Subsidized'
  }
];
