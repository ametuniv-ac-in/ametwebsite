import { Landmark, Briefcase, UtensilsCrossed } from "lucide-react";
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
  ,
  {
    id: "hotel-management",
    name: "Department of Hotel Management & Catering Science",
    description: "Offering industry-focused programmes in hotel management, catering science, and marine catering — preparing professionals for hospitality, cruise, airline, and global catering careers.",
    icon: UtensilsCrossed,
    facilities: [
      { name: "Training Kitchen & Bakery Lab", description: "Modern kitchen and bakery facility for food production and confectionery training" },
      { name: "Food & Beverage Service Lab", description: "Mock restaurant for service operations and hospitality etiquette training" },
      { name: "Front Office & Housekeeping Lab", description: "Practical facility for front office operations and housekeeping management" }
    ],
    research_areas: [
      "Hospitality Operations",
      "Food Production & Culinary Sciences",
      "Marine & Cruise Catering",
      "Customer Service Excellence"
    ],
    collaborations: [
      "Leading Hotels & Resorts",
      "Cruise Lines",
      "Airline Catering Services",
      "Hospitality Industry Partners"
    ],
    certifications: [
      "UGC Recognition",
      "Industry-aligned Hospitality Training",
      "STCW Safety Training (Marine Catering)"
    ],
    courses: [
      {
        id: "bsc-hotel-management",
        name: "B.Sc. Hotel Management and Catering Science",
        category: "UG",
        duration: "3 Years",
        admission: "Merit-based",
        careerPath: "Hotel Operations Executive, Chef, Front Office Executive, F&B Manager, Cruise Hospitality Staff",
        description: "The B.Sc. Hotel Management and Catering Science programme is a comprehensive undergraduate course designed to provide students with professional knowledge and practical skills in hospitality operations and management. The programme focuses on food production, bakery and confectionery, food & beverage service, front office operations, housekeeping management, hospitality marketing, customer relationship management, and hotel administration.\n\nStudents gain extensive practical exposure through laboratory training, industrial visits, internships, and industry interaction programmes, enabling them to understand real-time hospitality operations and global service standards. The course prepares graduates for rewarding careers in hotels, resorts, cruise lines, airlines, tourism, event management, and international hospitality organizations.\n\n**Career Prospects**\n\nGraduates of this program can pursue various career opportunities in the hospitality, tourism, catering, airline, and cruise industries, including positions such as:\n\n• Hotel Operations Executive\n• Chef / Culinary Professional\n• Front Office Executive\n• Food & Beverage Manager\n• Hospitality Entrepreneur\n• Cruise Line Hospitality Staff\n• Airline Catering Executive\n• Resort and Tourism Professional\n\n**Programme Highlights**\n\n• Comprehensive practical and hands-on hospitality training\n• Industry-oriented curriculum with modern hospitality practices\n• Internship and industrial exposure opportunities\n• Training in food production, bakery, and confectionery\n• Front office, housekeeping, and food & beverage service training\n• Communication, leadership, and personality development focus\n• Modern kitchen and hospitality laboratory facilities\n• Customer service and hospitality etiquette training\n• Skill development with entrepreneurship orientation\n• Career opportunities in hotels, resorts, airlines, cruise lines, and tourism sectors",
        eligibility: "Candidates must have passed Higher Secondary Examination (10+2) from a recognized board.",
        ageLimit: "No specific age limit",
        medicalStandard: "General good health",
        programHighlights: [
          "Comprehensive practical and hands-on hospitality training",
          "Industry-oriented curriculum with modern hospitality practices",
          "Internship and industrial exposure opportunities",
          "Training in food production, bakery, and confectionery",
          "Front office, housekeeping, and food & beverage service training",
          "Communication, leadership, and personality development focus",
          "Modern kitchen and hospitality laboratory facilities",
          "Customer service and hospitality etiquette training",
          "Skill development with entrepreneurship orientation",
          "Career opportunities in hotels, resorts, airlines, cruise lines, and tourism sectors"
        ],
        curriculumLink: '#'
      },
      {
        id: "diploma-hotel-management",
        name: "Diploma in Hotel Management and Catering Science",
        category: "PG Diploma",
        duration: "1 Year",
        admission: "Merit-based",
        careerPath: "Hotel Service Associate, Food Production Assistant, Restaurant Supervisor, Front Office Assistant, Catering Service Executive",
        description: "The Diploma in Hotel Management and Catering Science is a professionally oriented programme aimed at providing foundational knowledge and practical training in hospitality and catering operations. The course focuses on core hospitality areas including food production, restaurant service, housekeeping operations, front office management, hygiene standards, and customer service excellence.\n\nDesigned with an industry-focused approach, the programme enables students to develop operational skills and professional confidence required for entry-level positions in the hospitality sector. The curriculum emphasizes practical learning, personality development, communication skills, and service excellence to meet the growing demands of the hospitality industry.\n\n**Career Prospects**\n\nStudents completing this diploma programme can pursue career opportunities in the hospitality, catering, tourism, airline, and cruise hospitality sectors, including positions such as:\n\n• Hotel Service Associate\n• Food Production Assistant\n• Restaurant Supervisor\n• Front Office Assistant\n• Housekeeping Associate\n• Catering Service Executive\n• Hospitality Support Staff\n\n**Programme Highlights**\n\n• Intensive practical and hands-on training\n• Industry-focused hospitality curriculum\n• Skill-based learning approach\n• Internship and industrial exposure opportunities\n• Communication and personality development training\n• Training in food production and service operations\n• Customer service and hospitality etiquette focus\n• Quick employability pathway in hospitality sectors\n• Experienced faculty and industry interaction sessions\n• Career opportunities in hotels, catering, tourism, and cruise hospitality",
        eligibility: "Candidates possessing a Degree from a recognized University are eligible for admission.",
        ageLimit: "No specific age limit",
        medicalStandard: "General good health",
        programHighlights: [
          "Intensive practical and hands-on training",
          "Industry-focused hospitality curriculum",
          "Skill-based learning approach",
          "Internship and industrial exposure opportunities",
          "Communication and personality development training",
          "Training in food production and service operations",
          "Customer service and hospitality etiquette focus",
          "Quick employability pathway in hospitality sectors",
          "Experienced faculty and industry interaction sessions",
          "Career opportunities in hotels, catering, tourism, and cruise hospitality"
        ],
        curriculumLink: '#'
      },
      {
        id: "marine-catering",
        name: "Marine Catering Programme",
        category: "PG Diploma",
        duration: "3 Months",
        admission: "Merit-based with experience verification",
        careerPath: "Cruise Catering Staff, Merchant Ship Catering Crew, Offshore Catering Professional",
        description: "The Marine Catering Programme at AMET University is a specialized residential training programme designed to prepare hospitality professionals for rewarding careers in the maritime and cruise hospitality industry. The programme combines advanced catering training with mandatory STCW safety training to equip candidates with the professional, operational, and safety skills required to work onboard merchant vessels, cruise ships, offshore vessels, and international maritime hospitality sectors.\n\nThe curriculum focuses on maritime food production, galley operations, catering administration, hygiene and food safety, shipboard hospitality standards, customer service, and onboard operational procedures. The programme is designed in alignment with international maritime hospitality training standards followed across the global shipping industry.\n\n**Career Prospects**\n\nStudents completing this programme can pursue career opportunities in the maritime hospitality, cruise catering, offshore catering, and shipboard service sectors, including positions in:\n\n• Merchant Ships\n• Cruise Ships\n• Offshore Vessels\n• Passenger Ships\n• International Catering Operations\n• Marine Hospitality Services\n\n**Programme Highlights**\n\n• Specialized training in marine catering and shipboard hospitality\n• STCW mandatory safety training included\n• Practical training in galley and catering operations\n• International maritime hospitality standards-based curriculum\n• Training in hygiene, food safety, and onboard service procedures\n• Residential training with disciplined learning environment\n• Industry-oriented skill development and operational exposure\n• Career opportunities in merchant ships and cruise hospitality sectors\n• Personality development and customer service training\n• Global employability in maritime and offshore catering services",
        eligibility: "Candidates must possess a Diploma or Degree qualification with a minimum of 2 years of experience in the hotel industry. Applicants should be 21 years of age or above.",
        ageLimit: "21 years and above",
        medicalStandard: "Fit for sea service per STCW medical standards",
        programHighlights: [
          "Specialized training in marine catering and shipboard hospitality",
          "STCW mandatory safety training included",
          "Practical training in galley and catering operations",
          "International maritime hospitality standards-based curriculum",
          "Training in hygiene, food safety, and onboard service procedures",
          "Residential training with disciplined learning environment",
          "Industry-oriented skill development and operational exposure",
          "Career opportunities in merchant ships and cruise hospitality sectors",
          "Personality development and customer service training",
          "Global employability in maritime and offshore catering services"
        ],
        curriculumLink: '#'
      }
    ]
  }
];
