import { Landmark, Briefcase } from "lucide-react";
import { Department } from "./types";

export const managementDepartments: Department[] = [
  {
    id: "amet-business-school",
    name: "AMET Business School",
    description: "The MBA in Shipping & Logistics Management offered by AMET Business School is a practice-oriented program jointly offered by AMET Business School and CII Institute of Logistics. The curriculum is industry-aligned and focuses on core areas of shipping, port operations, logistics, supply chain management, and trade practices. Students gain applied knowledge through industry-driven courses, practical exposure, and learning support from the CII Logistics Centre of Excellence at IIT Madras Research Park.\n\n**Program highlights include:**\n\n• Delivered by industry experts and subject specialists\n• Exposure through port, terminal, and warehouse visits\n• Hands-on training through live cases and simulations\n• Access to Logistics Council Centre facilities\n• Skill-based certifications enhancing employability\n• Internships and industry projects for practical learning\n• Strong CII industry network for placements support",
    icon: Landmark,
    visionMission: "**Vision**\n\nTo continuously upgrade the quality of our curriculum, pedagogy and research pursuits in order to achieve the status of one of the top-ranking institutions in the Maritime Management Education in the world.\n\n**Mission**\n\n- To be a source of effective value based managerial talent for the sustained development of Maritime Trade, Commerce and Industry not only in India but across the Globe.\n- To emerge as a Centre of Excellence in technical, managerial and leadership in maritime trade and business based industrial needs.\n- To produce and disseminate world-class, cutting edge research that shapes the way organisations operate and businesses are led and managed.\n- To produce world-class, socially responsible, creative leaders and entrepreneurs who think on a global scale.\n- To endow students with the educational opportunity belonging to different socio-economy.",
    facilities: [
      {
        name: "Management Analytics Lab",
        description: "Advanced facility for business analytics and decision-making simulations"
      },
      {
        name: "Healthcare Management Center",
        description: "Specialized facility for healthcare administration training"
      },
      {
        name: "Logistics Simulation Lab",
        description: "State-of-the-art facility for supply chain and logistics management"
      }
    ],
    research_areas: [
      "Healthcare Management Systems",
      "Supply Chain Analytics",
      "Maritime Logistics",
      "Hospital Administration",
      "Healthcare Economics"
    ],
    collaborations: [
      "Leading Hospitals",
      "Shipping Companies",
      "Healthcare Consultancies",
      "International Logistics Firms"
    ],
    certifications: [
      "AICTE Approved Programs",
      "NBA Accreditation",
      "International Quality Certifications"
    ],
    courses: [
      {
        id: "mba-hospital-admin",
        name: "MBA Hospital Administration",
        category: "PG",
        duration: "2 years (4 semesters)",
        credits: "120",
        admission: "Written Test and Personal Interview",
        careerPath: "Hospital Administrator, Healthcare Manager, Medical Services Director",
        description: "MBA in Hospital Administration is a two-year postgraduate course in the Business Management stream. An MBA Hospital Administration is a specialized program designed to provide students with the knowledge and skills necessary to effectively manage healthcare organizations, particularly hospitals and other healthcare facilities. It combines traditional business management principles with specific knowledge of healthcare systems, policies, regulations, and practices.\n\n**Program Highlights**\n\n• Ingenious Healthcare Management for Innovative Living\n• Congruent Collaboration with Healthcare Industry\n• Extensive Placement\n• Beneficial Interaction with Clinical Specialty Heads, Medical Administrators and Senior Doctors\n• Sustainable Healthcare Management\n• Live Projects and Internships in leading Corporate Hospitals\n• Sui Generis Blend of Management and Healthcare Education\n• Unique Sector Specific Program\n• Global Outlook\n• 40:60 coverage by Healthcare Industry Experts and Academicians\n\n**Career Prospects**\n\nSome of the job profiles that graduates usually take up after an MBA Hospital Administration are Hospital Administrator, Pharmaceutical Product Manager, Health Informatics Manager, and Product Manager.\n\nThe Program offers job opportunities in the following sectors:\n\n• Hospitals\n• Nursing Homes\n• Telemedicine\n• Medical Tourism Agencies\n• NGOs\n• Health Insurance\n• Medical Equipment and Devices & Medicine Industries\n• Life Style Clinics\n• Outpatient care centers",
        eligibility: "Pass in any UG Degree from a recognized University with 50% of Marks\n\nSanctioned Strength: 30\n\nMode of Selection: Written Test and Personal Interview\n\nAge Limit: Below 25 years at the time of commencement\n\nBoys and Girls are eligible to apply.",
        ageLimit: "Below 25 years at the time of commencement",
        medicalStandard: "General good health",
        peos: [
          "Develop healthcare management professionals with strong administrative and leadership skills",
          "Create industry-ready managers for the healthcare sector",
          "Foster innovation and excellence in healthcare administration"
        ],
        pos: [
          "Apply management principles to healthcare settings",
          "Develop strategic planning skills for healthcare organizations",
          "Understand healthcare economics and finance",
          "Implement quality management in healthcare delivery"
        ],
        psos: [
          "Demonstrate expertise in hospital operations management",
          "Apply healthcare policies and regulations effectively",
          "Develop innovative solutions for healthcare challenges"
        ],
        curriculumLink: '#'
      },
      {
        id: "mba-shipping-logistics",
        name: "MBA Shipping and Logistics Management",
        category: "PG",
        duration: "2 years",
        credits: "120",
        admission: "Entrance Examination (CAT/MAT/XAT/ATMA/JMET/TANCET or AMET Entrance Exam) + Personal Interview/Group Discussion",
        careerPath: "Logistics Manager, Shipping Executive, Supply Chain Manager",
        description: "An MBA program specializing in shipping and logistics management, preparing professionals for the maritime logistics industry.",
        eligibility: "**Duration:** 2 years\n\n**Eligibility:**\n\n1. Any degree from a recognized University with 50% marks.\n\n(OR)\n\n2. Mariners holding the following professional qualification obtained after a minimum duration of study-cum-training of 6 years after 10+2 leading to:\n\na) Master Foreign Going Certificate of Competency.\n\n(OR)\n\nb) First Class Motor or Steam or Combined (Chief Engineer) Certificate of Competency issued by the Directorate General of Shipping, Ministry of Shipping, Government of India or its counterparts in other countries.\n\n**Sanctioned Strength:** 90\n\n**Mode of Selection:**\n\nEntrance Examination - CAT / MAT / XAT / ATMA / JMET / TANCET scores will be accepted. If a candidate has not taken any of the above tests, he / she will be asked to appear for Entrance Exam of AMET.\n\nPersonal interview / Group discussion",
        ageLimit: "No specific age limit",
        medicalStandard: "General good health",
        peos: [
          "Create professionals for the shipping and logistics sector",
          "Develop expertise in global supply chain management",
          "Foster innovation in maritime logistics"
        ],
        pos: [
          "Apply logistics management principles",
          "Understand global shipping operations",
          "Implement supply chain strategies",
          "Analyze maritime business environments"
        ],
        psos: [
          "Demonstrate expertise in shipping operations",
          "Apply logistics optimization techniques",
          "Develop strategic solutions for maritime logistics"
        ],
        curriculumLink: '#',
        curriculumDownload: '/curriculum/mba-shipping-logistics-curriculum.pdf',
        tabs: ['overview', 'eligibility', 'peo-po-pso', 'download-curriculum']
      },
      {
        id: "phd-management",
        name: "Ph.D in Management",
        category: "Research",
        duration: "3-5 years",
        credits: "Research-based",
        admission: "Entrance Examination + Interview",
        careerPath: "Research Scholar, Professor, Industry Consultant, Policy Advisor",
        description: "A doctoral research program in management sciences, fostering advanced research in healthcare management, logistics, supply chain, and maritime business domains.",
        eligibility: "Master's degree in Management/Business Administration with minimum 55% marks (50% for SC/ST candidates)",
        ageLimit: "No specific age limit",
        medicalStandard: "General good health",
        peos: [
          "Develop independent researchers capable of contributing to management knowledge",
          "Foster critical thinking and advanced research skills in specialized management areas",
          "Create academicians and thought leaders for management education and industry"
        ],
        pos: [
          "Conduct original research in management sciences",
          "Apply advanced research methodologies and statistical analysis",
          "Contribute to academic literature through quality publications",
          "Demonstrate expertise in specialized management domains"
        ],
        psos: [
          "Develop expertise in healthcare management or maritime logistics research",
          "Publish research in reputed national and international journals",
          "Contribute innovative solutions to contemporary management challenges"
        ],
        curriculumLink: '#'
      }
    ]
  },
  {
    id: "management-studies",
    name: "Department of Management Studies",
    description: "Offering specialized undergraduate programs in shipping, E-Commerce and Digital Marketing to prepare future industry leaders.",
    icon: Briefcase,
    facilities: [
      {
        name: "Business Simulation Lab",
        description: "Modern facility for business simulation and decision-making training"
      },
      {
        name: "Maritime Business Center",
        description: "Specialized center for shipping business studies"
      }
    ],
    research_areas: [
      "Shipping Management",
      "Maritime Business",
      "Port Management",
      "Shipping Economics"
    ],
    collaborations: [
      "Shipping Companies",
      "Port Authorities",
      "Maritime Agencies",
      "Industry Partners"
    ],
    certifications: [
      "AICTE Approved",
      "UGC Recognition",
      "Industry Certifications"
    ],
    courses: [
      {
        id: "bba-shipping",
        name: "BBA (Shipping)",
        category: "UG",
        duration: "3 years (6 semesters)",
        credits: "140",
        admission: "Merit-based + Interview",
        careerPath: "Shipping Executive, Maritime Business Manager, Port Management Professional",
        description: "A comprehensive undergraduate program focusing on shipping.",
        eligibility: "**Duration:** 3 years (6 semesters)\n\n**Eligibility:** Pass in Higher Secondary with 50% marks.\n\n**Sanctioned Strength:** 90\n\n**Mode of Selection:** Admission Test and Personal Interview.\n\nBoys and Girls are eligible to apply.",
        ageLimit: "No specific age limit",
        medicalStandard: "General good health",
        peos: [
          "Become successful graduates who are competent, innovative and productive in addressing the needs of the Industry or pursue higher education and research.",
          "Grow professionally with their knowledge and skills throughout their career.",
          "Demonstrate high standard of ethical conduct, positive attitude and societal responsibilities."
        ],
        pos: [
          "Critical Thinking: Apply knowledge of commercial shipping to provide solutions to industry problems.",
          "Effective Communication: Effectively and efficiently communicate in English by using appropriate media.",
          "Social Interaction: Arrive at logical conclusion through meaningful social exchange of ideas.",
          "Effective Citizenship: Apply societal and environmental issues towards national development with civic life volunteering.",
          "Ethical Norms: Ability to understand, analyze and apply ethical norms in business practices.",
          "Environment and Sustainability: Addressing environmental issues and work towards sustainable development.",
          "Self-directed and Life-long Learning: Function effectively as an individual or member of a team and undertake lifelong learning."
        ],
        psos: [
          "Identify, analyze, interpret and evaluate various issues faced by corporate world with respect to business management, shipping and logistics.",
          "Efficiently practice as graduate trainees in the fields such as business management, shipping and logistics.",
          "Demonstrate and adopt ethical and socially accepted norms for effective management of diverse environments."
        ],
        curriculumLink: '#',
        curriculumDownload: '/curriculum/bba-shipping-curriculum.pdf',
        twinningProgramme: {
          university: "University of Plymouth, United Kingdom",
          program: "B.Sc. (Hons) Maritime Business & Logistics",
          description: "Students of B.B.A. Shipping after completion of first two years study at AMET can opt for the following twinning programme offered in collaboration with University of Plymouth, United Kingdom"
        },
        facultyList: [
          { name: "Dr. C. Manoharan", designation: "Professor & Head", qualification: "M.B.A., Ph.D." },
          { name: "Mr. A. Kaushick", designation: "Assistant Professor", qualification: "M.B.A., (Ph.D)" },
          { name: "Ms. C. Revathi", designation: "Assistant Professor", qualification: "M.B.A." },
          { name: "Mr. Sheik Jaffar Hussain", designation: "Assistant Professor", qualification: "M.B.A." },
          { name: "Ms. A. J. Glorry", designation: "Assistant Professor", qualification: "M.B.A." },
          { name: "Ms. R. Maria Deepika", designation: "Assistant Professor", qualification: "M.B.A." },
          { name: "Mr. S. Vinothkumar", designation: "Assistant Professor", qualification: "M.B.A." },
          { name: "Ms. Juliyamary", designation: "Assistant Professor", qualification: "M.B.A." },
          { name: "Ms. S. Preethi", designation: "Assistant Professor", qualification: "M.B.A." },
          { name: "Ms. G. Bhuvana Devi", designation: "Assistant Professor", qualification: "M.B.A." },
          { name: "Ms. S. Geetha Selvam", designation: "Assistant Professor", qualification: "M.B.A." },
          { name: "Mr. R. Jaya Surya", designation: "Assistant Professor", qualification: "M.B.A." },
          { name: "Mr. S. Mohankumar", designation: "Assistant Professor", qualification: "M.B.A." },
          { name: "Mr. R. Rajkumar Raja", designation: "Assistant Professor", qualification: "M.B.A." },
        ],
        tabs: ['overview', 'eligibility', 'peo-po-pso', 'twinning-programme', 'download-curriculum', 'faculty']
      },
      {
        id: "bba-ecommerce-digital",
        name: "B.B.A eCommerce and Digital Business",
        category: "UG",
        duration: "3 years (Full-Time) - 6 Semesters",
        credits: "140",
        admission: "Merit-based + Interview",
        careerPath: "Digital Marketing Manager, E-commerce Manager, Digital Business Consultant, Online Business Developer",
        description: "A Bachelor of Business Administration (BBA) in E-Commerce and Digital Business is an undergraduate program that focuses on the intersection of business, technology, and digital commerce. It is designed to equip students with the knowledge and skills needed to thrive in the digital economy, covering areas such as online business management, digital marketing, e-commerce strategies, and data-driven decision-making.",
        eligibility: "**Eligibility:** Pass in Higher Secondary with 50% marks\n\n**Mode of Selection:** Admission Test and Personal Interview",
        ageLimit: "No specific age limit",
        medicalStandard: "General good health",
        peos: [
          "Prepare professionals for the digital business industry",
          "Develop expertise in e-commerce and digital marketing",
          "Create industry-ready digital business managers"
        ],
        pos: [
          "Understand e-commerce business operations",
          "Apply digital marketing principles",
          "Analyze online business trends",
          "Implement digital business strategies"
        ],
        psos: [
          "Demonstrate knowledge of e-commerce platforms",
          "Apply digital business principles effectively",
          "Develop practical digital marketing skills"
        ],
        curriculumLink: '#'
      }
    ]
  }
];
