export interface Project {
  id: string;
  title: string;
  category: 'Enterprise Implementation' | 'Systems Delivery' | 'Web Application' | 'Database Architecture';
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  metrics: { label: string; value: string }[];
  technologies: string[];
  deliverables: string[];
  challengesSolved: string[];
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  companySubtitle?: string;
  period: string;
  location: string;
  isCurrent: boolean;
  highlight: string;
  achievements: string[];
  technologies: string[];
  clientCount?: string;
  goLiveRate?: string;
}

export interface Client {
  name: string;
  shortName: string;
  category: string;
  sector: string;
  description: string;
  color: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  score?: string;
  description: string;
}

export interface Certification {
  id: string;
  name: string;
  credential: string;
  issuer: string;
  year: string;
  description: string;
  skills: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'Suraj Arvind Jaiswar',
    shortName: 'Suraj Jaiswar',
    role: 'Senior Implementation Engineer',
    secondaryRole: 'Lead Implementation Specialist & Systems Delivery Expert',
    email: 'jssuraja999@gmail.com',
    workEmail: 'suraj@fastfacts.co',
    phone: '+91 7263938844',
    phoneFormatted: '+91 72639 38844',
    location: 'Mumbai, Maharashtra, India',
    linkedin: 'https://linkedin.com/in/suraj-jaiswar-036a001b8',
    portfolioUrl: 'https://suraj-jet.vercel.app/',
    headline: 'Driving seamless enterprise software rollouts, high-performance database migrations, and 98% on-time go-live execution.',
    bio: 'Senior Implementation Specialist with over 4 years of proven experience in enterprise software implementations, system integrations, and client delivery across Asset Management, Purchase Order (PO), and IT/Admin Ticketing platforms. Demonstrated track record in managing large-scale rollouts for Tier-1 institutions including BSE, Morgan Stanley, and SBI Securities. Expert in PostgreSQL and SQL Server database operations, REST API integrations, and leading User Acceptance Testing (UAT) to accelerate user adoption by 30%.',
  },
  metrics: [
    { value: '4+', label: 'Years Experience', subtext: 'Enterprise Software & Systems Delivery' },
    { value: '50+', label: 'Enterprise Clients', subtext: 'Rolled out across India & global accounts' },
    { value: '98%', label: 'On-Time Go-Live', subtext: 'Across 30+ complex multi-module rollouts' },
    { value: '25%', label: 'Efficiency Gain', subtext: 'Via standardized deployment frameworks' },
  ],
  experiences: [
    {
      id: 'fastfacts',
      title: 'Senior Implementation Engineer / Lead Specialist',
      company: 'FASTFACTS Powered by Newgen',
      companySubtitle: 'Newgen DigitalWorks Pvt Ltd',
      period: 'Dec 2024 - Present',
      location: 'Mumbai, India',
      isCurrent: true,
      highlight: 'Led 30+ enterprise implementations with 98% on-time go-live rate across Asset Management, PO, and IT/Admin Ticketing modules.',
      clientCount: '30+ Deployments',
      goLiveRate: '98% Go-Live Rate',
      achievements: [
        'Directed end-to-end enterprise software implementations across Asset Management, PO, and IT/Admin Ticketing modules in test and production environments, ensuring zero-downtime user transitions.',
        'Served as Team Lead providing technical mentorship, enforcing rigorous implementation standards, and acting as the primary escalation point for complex integration and production incidents.',
        'Optimized implementation efficiency by 25% through the introduction of standardized deployment frameworks, automated migration workflows, and comprehensive technical documentation.',
        'Managed advanced PostgreSQL database operations, including data correction scripts, query performance tuning, index optimization, and high-throughput REST API integrations.',
        'Led client-facing User Acceptance Testing (UAT) cycles with key executive stakeholders, validating solution architecture against enterprise business rules and compliance standards.',
      ],
      technologies: ['PostgreSQL', 'REST API', 'Swagger', 'Asset Management', 'PO Module', 'IT/Admin Ticketing', 'UAT Governance', 'DBeaver', 'Team Leadership'],
    },
    {
      id: 'spine',
      title: 'Implementation Engineer',
      company: 'Spine Technologies India Private Limited',
      companySubtitle: 'Enterprise HR & Asset Solutions Provider',
      period: 'Jan 2022 - Dec 2024',
      location: 'Mumbai, India',
      isCurrent: false,
      highlight: 'Implemented and customized Asset Management solutions for 50+ enterprise and mid-market client environments.',
      clientCount: '50+ Client Environments',
      goLiveRate: 'High-Impact Delivery',
      achievements: [
        'Implemented and optimized Asset Management software across 50+ client environments, tailoring configurations to meet complex regulatory and organizational workflows.',
        'Managed end-to-end deployment lifecycles for enterprise clients, overseeing SQL Server database administration, IIS web server hosting, and network endpoint configurations.',
        'Delivered high-impact technical support and client engagement both onsite and remotely, resolving critical blocking bugs and consistently earning client commendations.',
        'Enhanced end-user adoption by 30% through structured training academies, authoring detailed operating manuals, and conducting executive walkthrough sessions.',
      ],
      technologies: ['Microsoft SQL Server', 'IIS Server', 'Asset Tracking', 'Database Administration', 'Client Training', 'Onsite Deployment', 'HTML', 'System Configuration'],
    },
  ] as Experience[],
  projects: [
    {
      id: 'asset-management',
      title: 'Enterprise Asset Management Rollout Framework',
      category: 'Enterprise Implementation',
      subtitle: 'Configured and delivered asset lifecycles across 50+ enterprise environments',
      description: 'A comprehensive rollout framework designed to transition legacy manual asset registers into real-time digital tracking systems with automated depreciation, warranty tracking, and audit workflows.',
      longDescription: 'Engineered and executed an end-to-end deployment standard for Tier-1 corporate clients. Orchestrated data discovery, normalization scripts, SQL Server & PostgreSQL database schemas, and IIS web application integration. Led UAT testing with operations and finance teams, resulting in 98% on-time cutover with minimal operational friction.',
      image: '/src/assets/images/asset_management_system_1791304069100.jpg',
      metrics: [
        { label: 'Client Rollouts', value: '50+' },
        { label: 'On-Time Go-Live', value: '98%' },
        { label: 'Data Accuracy', value: '99.8%' },
      ],
      technologies: ['PostgreSQL', 'SQL Server', 'IIS Hosting', 'REST APIs', 'Swagger', 'UAT Execution'],
      deliverables: [
        'Standardized 5-stage deployment checklist for rapid client onboarding',
        'Automated database cleansing & migration scripts for legacy data',
        'Role-based permission matrices for asset custodians and auditors',
        'End-user operational guides and train-the-trainer video modules',
      ],
      challengesSolved: [
        'Resolved legacy data inconsistencies across thousands of disparate asset records using custom SQL sanitization scripts.',
        'Managed tight deployment windows without disrupting daytime financial operations through structured weekend cutovers.',
      ],
    },
    {
      id: 'po-ticketing',
      title: 'PO & IT/Admin Ticketing Automation Engine',
      category: 'Systems Delivery',
      subtitle: 'Multi-department procurement and service desk workflow mapping',
      description: 'Streamlined purchase orders and internal ticketing pipelines by mapping complex corporate approval matrices into automated, auditable system flows.',
      longDescription: 'Designed and deployed standardized workflows for Purchase Order approvals and IT/Admin service request handling. Configured automated status transitions, escalation triggers, and SLA tracking dashboards that reduced request turnaround times and increased cross-department transparency.',
      image: '/src/assets/images/workflow_ticketing_system_1791304091230.jpg',
      metrics: [
        { label: 'Adoption Rate', value: '+30%' },
        { label: 'Turnaround Time', value: '-35%' },
        { label: 'Workflow SLA', value: '99.2%' },
      ],
      technologies: ['Process Design', 'REST API Integration', 'Swagger', 'PostgreSQL', 'SLA Triggers', 'User Training'],
      deliverables: [
        'Dynamic multi-tier approval hierarchy for purchase requisitions',
        'IT/Admin service ticketing queue with category-based routing',
        'Automated email notifications and audit trails for compliance',
        'Live Power BI operational dashboards for management oversight',
      ],
      challengesSolved: [
        'Addressed high initial change resistance by conducting interactive training sessions, boosting user adoption by 30%.',
        'Created fail-safe fallback escalation rules preventing tickets from stalling when managers are out-of-office.',
      ],
    },
    {
      id: 'database-integration',
      title: 'High-Availability Database & API Integration Pipeline',
      category: 'Database Architecture',
      subtitle: 'Resilient PostgreSQL & SQL Server data pipelines for enterprise clients',
      description: 'High-performance database operations and API integration architecture supporting heavy data throughput and zero-loss synchronizations.',
      longDescription: 'Managed critical enterprise database layers handling transactional records for enterprise clients. Architected data correction pipelines, optimized slow-running queries, and configured secure REST endpoints documented in Swagger for external ERP integrations.',
      image: '/src/assets/images/database_integration_hub_1791304104175.jpg',
      metrics: [
        { label: 'Efficiency Gain', value: '+25%' },
        { label: 'Deployment Rate', value: '30+ Live' },
        { label: 'Query Latency', value: '<20ms' },
      ],
      technologies: ['PostgreSQL', 'SQL Server', 'DBeaver', 'Swagger', 'IIS Server', 'Linux', 'Query Optimization'],
      deliverables: [
        'Automated schema versioning and data correction procedures',
        'Swagger-documented REST API contract specifications',
        'Query index tuning and dead-lock prevention protocols',
        'Database backup and disaster recovery validation procedures',
      ],
      challengesSolved: [
        'Eliminated query bottlenecks during peak month-end reporting periods through index redesign and partition analysis.',
        'Standardized deployment scripts reducing manual error rate to virtually zero.',
      ],
    },
    {
      id: 'notes-drive',
      title: 'College Notes Drive System',
      category: 'Web Application',
      subtitle: 'Centralized academic content management platform with RBAC',
      description: 'A structured knowledge management system built to digitize, index, and organize academic lecture notes, assignments, and research documents with role-based access.',
      longDescription: 'Engineered a full-featured web application allowing students, faculty, and administrative staff to publish, search, and review syllabus-aligned academic documents. Features include secure file uploads, role-based document access, and categorized tag search.',
      image: '/src/assets/images/database_integration_hub_1791304104175.jpg',
      metrics: [
        { label: 'Role Types', value: '3 Tiers' },
        { label: 'Search Speed', value: 'Instant' },
        { label: 'Architecture', value: 'MVC Web' },
      ],
      technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'HTML5/CSS3', 'Apache'],
      deliverables: [
        'Role-Based Access Control (RBAC) authentication system',
        'Categorized document directory with department and semester filters',
        'Admin moderation dashboard for upload approvals',
        'Responsive mobile-ready document previewer',
      ],
      challengesSolved: [
        'Prevented unauthorized access to private exam materials using secure session validation and directory level safeguards.',
      ],
    },
  ] as Project[],
  clients: [
    {
      name: 'BSE (Bombay Stock Exchange)',
      shortName: 'BSE',
      category: 'Financial Markets',
      sector: 'BFSI & Capital Markets',
      description: 'Premier Indian stock exchange; implementation of enterprise asset & infrastructure tracking modules.',
      color: 'blue',
    },
    {
      name: 'Morgan Stanley',
      shortName: 'Morgan Stanley',
      category: 'Investment Banking',
      sector: 'Global Financial Services',
      description: 'Global financial services leader; enterprise workflow integrations and compliance verification.',
      color: 'slate',
    },
    {
      name: 'SBI Securities',
      shortName: 'SBI Securities',
      category: 'Securities & Wealth',
      sector: 'Banking & Financial Institution',
      description: 'Subsidiary of State Bank of India; systems configuration, database management and module rollout.',
      color: 'cyan',
    },
    {
      name: 'Crowne Plaza',
      shortName: 'Crowne Plaza',
      category: 'Hospitality',
      sector: 'IHG Hotels & Resorts',
      description: 'Luxury international hotel chain; operational asset lifecycle and service ticketing integration.',
      color: 'amber',
    },
    {
      name: 'Skechers',
      shortName: 'Skechers',
      category: 'Retail & Footwear',
      sector: 'Global Lifestyle & Retail',
      description: 'Multinational retail giant; store inventory hardware, asset tracking, and ticketing workflows.',
      color: 'indigo',
    },
    {
      name: 'J.W. Marriott',
      shortName: 'J.W. Marriott',
      category: 'Luxury Hospitality',
      sector: 'Marriott International',
      description: '5-star luxury hospitality network; administrative workflow management and asset deployment.',
      color: 'emerald',
    },
    {
      name: 'Muthoot Finance',
      shortName: 'Muthoot',
      category: 'NBFC & Gold Loans',
      sector: 'Non-Banking Financial Company',
      description: 'India’s largest gold financing company; multi-branch asset governance and user training programs.',
      color: 'red',
    },
    {
      name: 'Pyrotek',
      shortName: 'Pyrotek',
      category: 'Industrial Engineering',
      sector: 'Global High-Temp Materials',
      description: 'International engineering firm; industrial equipment tracking and maintenance ticketing modules.',
      color: 'orange',
    },
  ] as Client[],
  capabilities: [
    {
      category: 'Implementation & Delivery',
      skills: [
        { name: 'End-to-End Implementation', detail: 'Discovery, scoping, architecture, cutover & hypercare' },
        { name: 'UAT Execution & Sign-off', detail: 'Designing test scenarios and leading user acceptance testing' },
        { name: 'Deployment Frameworks', detail: 'Standardized SOPs reducing deployment timelines by 25%' },
        { name: 'Client Training & Adoption', detail: 'Workshops and documentation driving 30% higher utilization' },
        { name: 'Escalation Management', detail: 'Tier-3 technical resolution for critical production blockers' },
      ],
    },
    {
      category: 'Database Management',
      skills: [
        { name: 'PostgreSQL', detail: 'Schema design, data correction, query optimization, indexing' },
        { name: 'Microsoft SQL Server', detail: 'Administration, relational modeling, backup & restoration' },
        { name: 'MySQL', detail: 'Web application database schemas, queries, migrations' },
        { name: 'DBeaver & Query Tools', detail: 'Cross-database inspection, query profiling and diagnostic scripts' },
      ],
    },
    {
      category: 'Integrations & Infrastructure',
      skills: [
        { name: 'REST API Integration', detail: 'Connecting enterprise applications with external third-party services' },
        { name: 'Swagger & Postman', detail: 'API contract testing, endpoint debugging, payload verification' },
        { name: 'IIS Server', detail: 'Windows web server hosting, SSL binding, application pools' },
        { name: 'Linux Environments', detail: 'Basic administration, service maintenance, log inspection' },
      ],
    },
    {
      category: 'Domain Modules & Tech',
      skills: [
        { name: 'Enterprise Asset Management', detail: 'Physical & digital asset lifecycle, depreciation, audit trails' },
        { name: 'Purchase Order (PO) Module', detail: 'Multi-level procurement approval hierarchies and verification' },
        { name: 'IT/Admin Ticketing', detail: 'Service desks, category routing, SLA alerts, resolution tracking' },
        { name: 'Power BI & Analytics', detail: 'Operational status dashboards and KPI reporting' },
        { name: 'Python, JavaScript, HTML', detail: 'Automating routine tasks and customizing client interfaces' },
      ],
    },
  ],
  education: [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'SRM Institute of Science and Technology',
      period: 'Jan 2023 - Feb 2025',
      description: 'Advanced studies in Software Engineering, Enterprise Database Architecture, System Integrations, and Distributed Applications.',
    },
    {
      degree: 'B.Sc. in Computer Science',
      institution: 'Shree Shankar Narayan College of Arts, Commerce & Science',
      period: 'Jul 2018 - Apr 2021',
      score: 'SGPA: 9.1',
      description: 'Graduated with high distinction (9.1 SGPA). Core coursework in Data Structures, Database Management Systems (RDBMS), Web Technologies, and Network Security.',
    },
    {
      degree: 'Higher Secondary Certificate (HSC) - Science & IT',
      institution: 'Vidya Varidhi Vidyalaya Junior College',
      period: '2016 - 2018',
      description: 'Specialization in Information Technology, Mathematics, and Computer Science fundamentals.',
    },
  ] as Education[],
  certifications: [
    {
      id: 'pmp',
      name: 'Project Management Professional (PMP Concepts)',
      credential: 'PMP Project Governance & Execution',
      issuer: 'PMI aligned workshop',
      year: 'Certified',
      description: 'Comprehensive project management training covering agile & waterfall lifecycles, risk registers, stakeholder engagement, and critical path scheduling.',
      skills: ['Stakeholder Management', 'Risk Mitigation', 'Schedule Control', 'Change Governance'],
    },
    {
      id: 'powerbi',
      name: 'Power BI Developer',
      credential: 'Data Visualization & Analytics',
      issuer: 'Microsoft Certified Course',
      year: 'Certified',
      description: 'Data modeling, DAX queries, and dashboard engineering to visualize implementation health, asset utilization metrics, and SLA attainment.',
      skills: ['Power BI Dashboards', 'Data Modeling', 'DAX Measures', 'Executive Reporting'],
    },
  ] as Certification[],
  lifecycleSteps: [
    {
      number: '01',
      phase: 'Discovery & Requirement Scoping',
      summary: 'Mapping existing business workflows, asset taxonomies, and departmental approval chains.',
      deliverables: ['Business Requirement Document (BRD)', 'Data Source Audit', 'Scope Baseline'],
      tools: ['Stakeholder Interviews', 'Process Mapping', 'Gap Analysis'],
    },
    {
      number: '02',
      phase: 'Schema Setup & Data Migration',
      summary: 'Preparing database environments (PostgreSQL / SQL Server) and cleansing historical records.',
      deliverables: ['Data Mapping Matrix', 'Sanitization Scripts', 'Staging Database'],
      tools: ['PostgreSQL', 'SQL Server', 'DBeaver', 'Data Cleansing'],
    },
    {
      number: '03',
      phase: 'Module Configuration & API Integration',
      summary: 'Configuring Asset, PO, and Ticketing rules and verifying API contracts.',
      deliverables: ['Configured Testing Sandbox', 'API Integration Contracts', 'Swagger Docs'],
      tools: ['Swagger', 'REST APIs', 'IIS Hosting', 'Custom Workflows'],
    },
    {
      number: '04',
      phase: 'UAT Execution & Client Governance',
      summary: 'Collaborative end-to-end testing with client department heads and audit leads.',
      deliverables: ['UAT Test Script Sign-off', 'Issue Triage Log', 'Compliance Approval'],
      tools: ['UAT Test Matrix', 'Regression Testing', 'Bug Resolution'],
    },
    {
      number: '05',
      phase: 'Production Cutover & User Adoption',
      summary: 'Seamless live switchboard launch followed by structured client training academies.',
      deliverables: ['Production Go-Live Signoff', 'User Training Sessions', 'Hypercare Support'],
      tools: ['Cutover Plan', 'End-User Training', '98% On-Time Go-Live'],
    },
  ],
};
