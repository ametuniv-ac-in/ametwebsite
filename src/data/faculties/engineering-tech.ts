import { Cpu, Anchor, Droplet, Wrench, Zap, FlaskConical, HardHat } from "lucide-react";
import { Department } from "./types";

export const engineeringTechDepartments: Department[] = [
  {
    id: "computer-science",
    name: "Dept. of Computer Science and Engineering",
    description: "The Department of Computer Science and Engineering (CSE) at AMET University is committed to excellence in teaching, research, and innovation in the fields of Artificial Intelligence, Data Science, Cyber security and Software Engineering. The department offers B.E and B.Tech programmes in AIML, AIDS, Cyber security and Software Engineering designed to bridge the gap between academia, knowledge and industry requirements.\n\nThrough a curriculum that emphasizes experiential learning, skill based education, and interdisciplinary collaboration, Students are equipped with the competencies necessary to solve complex technological challenges. The department fosters an environment that promotes innovation, research, and entrepreneurship, encouraging students to participate in hackathons, workshops, and collaborative projects.\n\nWith modern laboratories, smart classrooms, and industry-integrated modules, the CSE Department ensures that every graduate is prepared to lead in the evolving global technology landscape.",
    icon: Cpu,
    visionMission: "**Vision**\n\nTo transform the Department into a Centre of Excellence to contribute significantly to Marine based realms through Computer Science and Engineering (CSE).\n\n**Mission**\n\n- To provide adaptive learning ambiance in Computer Science and its related fields to enhance problem solving, leadership and teamwork skills of students\n- To enable the students to tap the potentials of Computer Science in the marine related domains by adopting innovative teaching - learning techniques\n- To nurture knowledge through cutting-edge research and innovations to enrich the society in meaningful and sustainable ways\n- To inculcate among students the value of commitment, quality, and ethical behaviour",
    highlights: [
      "Highly Qualified & Research Oriented Faculty",
      "Industry oriented learning through Technology Groups",
      "Excellent infrastructure & computing facilities",
      "Excellent placement records",
      "Strong Alumni & industry Interaction. Our Alumni are working in top MNC's of world like IBM, Microsoft, Facebook, SAP, Oracle etc",
      "Well defined student mentoring process",
      "Excellent academic results",
      "Strong focus on placement preparation & continuous assessment",
      "Showcase of Student's innovative working project models at Annual Project Contest",
      "Research orientation for both faculty & students",
      "Focus on programming hands-on",
      "Motivation for Self learning initiatives",
      "Well defined teaching-learning process with use of technology based teaching methodologies",
      "National & International level Engineering activities",
      "Enough opportunities for all round development of students through engineering activities under student chapters & clubs"
    ],
    facilities: [
      {
        name: "Computing Labs",
        description: "State-of-the-art computing facilities for research and development"
      },
      {
        name: "AI Research Center",
        description: "Advanced laboratory focused on artificial intelligence and machine learning"
      },
      {
        name: "Software Development Studio",
        description: "Modern facility for software development and testing"
      }
    ],
    research_areas: [
      "Artificial Intelligence",
      "Machine Learning",
      "Computer Vision",
      "Cybersecurity",
      "Cloud Computing",
      "Big Data Analytics"
    ],
    collaborations: [
      "Tech Industry Leaders",
      "Software Development Companies",
      "Research Institutions",
      "IT Consulting Firms"
    ],
    certifications: [
      "AICTE Recognition",
      "ACM Association",
      "IEEE Certification"
    ],
    courses: [
      {
        id: "btech-cse-cyber",
        name: "B.Tech. Computer Science and Engineering (Cyber Security)",
        category: "UG",
        duration: "4 years",
        credits: "160",
        admission: "JEE Main Score + Counselling",
        careerPath: "Security Analyst, Penetration Tester, Security Consultant, Cyber Forensics Expert",
        description: "About the Programme:\n\nThe B.Tech in Computer Science and Engineering (Cyber Security) program at AMET, powered by Kalvium, is designed to equip students with advanced cybersecurity expertise through an AI-powered adaptive learning platform. This program integrates real-time formative assessments, personalized 1:1 mentorship, and actionable feedback, ensuring students develop critical problem-solving skills, threat mitigation strategies, and hands-on experience in securing digital infrastructures.\n\nStudents gain in-depth knowledge of network security, ethical hacking, cryptography, risk management, cloud security, and secure software development. With project-based learning from Semester 1, students work on real-world cybersecurity challenges, vulnerability assessments, and security automation, preparing them for evolving cyber threats in the digital landscape.\n\nBy combining structured mentorship, industry-aligned curriculum, and hands-on cybersecurity training, this program ensures graduates are job-ready and equipped to protect modern enterprises against cyber threats.",
        eligibility: "Eligibility: Candidates aspiring for the B.Tech.-CSE course need to qualify through their +2 exams from a recognised educational institute. Also, having science stream in 12th standards is mandatory with Physics, Chemistry and Mathematics as compulsory subjects.\n\nSanctioned Strength: 30\n\nMode of Selection: Written Test and Personal Interview\n\nAge Limit: Minimum 17 Years\n\nBoys and Girls are eligible to apply.",
        highlights: "Build an Impressive Project Portfolio\nLearn hands-on by building tons of real-world projects right from 1st Year.\n\nMaster Highly In-Demand Tech Skills\nLearn new age tech like MERN Stack, Cybersecurity & more.\n\nDaily Coding Hours\nStrengthen your technical foundation with dedicated daily coding hours, ensuring consistent practice and growth.\n\nProfessional Skills for the modern workplace\nStand out with key skills like communication, teamwork, creativity, etc.\n\n1:1 Mentorship\nUnlock your potential with personalized 1:1 mentorship from industry leaders.\n\nHigher Salary Final Year Placements\nKickstart your career as a pro right after graduation.\n\nHackathons / FOSS / Entrepreneurship\nEmpower your growth through Hackathons, FOSS contributions, and entrepreneurial experiences.",
        careerProspects: "Graduates of this program can pursue various roles in the AI and ML industry, including:\n\n- Cyber Security Analyst\n- Ethical Hacker / Penetration Tester\n- Security Operations Center (SOC) Analyst\n- Information Security Analyst\n- Network Security Engineer\n- Cryptography Engineer\n- Digital Forensics Expert\n- Cloud Security Engineer\n- Security Architect\n- Cyber Threat Intelligence Analyst\n- Risk & Compliance Manager",
        curriculumDownload: "/documents/BE-CSE-CS-Curriculum.pdf",
        tabs: ['overview', 'career-prospects', 'eligibility', 'download-curriculum', 'highlights']
      },
      {
        id: "btech-cse-ai-ml",
        name: "B.Tech. Computer Science and Engineering (Artificial Intelligence and Machine Learning)",
        category: "UG",
        duration: "4 years",
        credits: "160",
        admission: "JEE Main Score + Counselling",
        careerPath: "AI Engineer, ML Specialist, Data Scientist, AI Research Engineer",
        description: "About the Programme:\n\nThe B.Tech in Computer Science and Engineering (Artificial Intelligence and Machine Learning) program at AMET, powered by Kalvium, is designed to equip students with real-time formative assessments, personalized 1:1 mentorship, and actionable feedback to ensure continuous skill development. The program integrates an AI-powered adaptive learning system that monitors student progress, provides targeted insights, and enables timely faculty intervention only when necessary, fostering independent problem-solving and critical thinking.\n\nStudents gain expertise in neural networks, deep learning, predictive analytics, reproducible data analysis, collaborative problem-solving, visualization techniques, and ethical AI considerations. The curriculum is designed to help students build and deploy AI-driven solutions across industries while maintaining a strong foundation in modern AI and ML methodologies.\n\nWith project-based learning from Semester 1, students apply AI and ML concepts to real-world challenges, working with real datasets and developing intelligent models. This hands-on, industry-aligned approach, combined with structured mentorship and continuous feedback, ensures that graduates are job-ready and prepared to drive AI innovations across multiple sectors.",
        highlights: "Build an Impressive Project Portfolio\nLearn hands-on by building tons of real-world projects right from 1st Year.\n\nMaster Highly In-Demand Tech Skills\nLearn new age tech like MERN Stack, AI/ML & more.\n\nDaily Coding Hours\nStrengthen your technical foundation with dedicated daily coding hours, ensuring consistent practice and growth.\n\nProfessional Skills for the modern workplace\nStand out with key skills like communication, teamwork, creativity, etc.\n\n1:1 Mentorship\nUnlock your potential with personalized 1:1 mentorship from industry leaders.\n\nHigher Salary Final Year Placements\nKickstart your career as a pro right after graduation.\n\nHackathons / FOSS / Entrepreneurship\nEmpower your growth through Hackathons, FOSS contributions, and entrepreneurial experiences.",
        careerProspects: "Graduates of this program can pursue various roles in the AI and ML industry, including:\n\n- Big Data Engineer\n- Machine Learning Engineer\n- Data Scientist\n- Data Analyst\n- AI Engineer\n- Deep Learning Engineer\n- Natural Language Processing (NLP) Engineer\n- Full Stack Developer\n- Computer Systems Analyst\n- Database Administrator\n- Information Systems Manager",
        eligibility: "Duration: 4 years (Full-Time) - 8 Semesters\n\nEligibility: 10 + 2 (Higher Secondary) with Mathematics mandatory or Computer Science with Mathematics. (Minimum Aggregate of 50%).\n\nSanctioned Strength: 30\n\nMode of Selection: Written Test and Personal Interview\n\nAge Limit: Below 25 years at the time of commencement\n\nBoys and Girls are eligible to apply.",
        curriculum: "/documents/BE-CSE-AIML-Curriculum.pdf",
        tabs: ['overview', 'highlights', 'career-prospects', 'eligibility', 'curriculum']
      },
      {
        id: "btech-cse",
        name: "B.Tech. Computer Science and Engineering",
        category: "UG",
        duration: "4 years",
        credits: "160",
        admission: "JEE Main Score + Counselling",
        careerPath: "Software Engineer, System Architect, DevOps Engineer, Technical Lead",
        description: "About the Programme:\n\nThe B.Tech in Computer Science and Engineering (Cyber Security) program at AMET, powered by Kalvium, is designed to equip students with advanced cybersecurity expertise through an AI-powered adaptive learning platform. This program integrates real-time formative assessments, personalized 1:1 mentorship, and actionable feedback, ensuring students develop critical problem-solving skills, threat mitigation strategies, and hands-on experience in securing digital infrastructures.\n\nStudents gain in-depth knowledge of network security, ethical hacking, cryptography, risk management, cloud security, and secure software development. With project-based learning from Semester 1, students work on real-world cybersecurity challenges, vulnerability assessments, and security automation, preparing them for evolving cyber threats in the digital landscape.\n\nBy combining structured mentorship, industry-aligned curriculum, and hands-on cybersecurity training, this program ensures graduates are job-ready and equipped to protect modern enterprises against cyber threats."
      },
      {
        id: "btech-ai-ds",
        name: "B.Tech. Artificial Intelligence and Data Science",
        category: "UG",
        duration: "4 years",
        credits: "160",
        admission: "JEE Main Score + Counselling",
        careerPath: "Data Scientist, AI Developer, ML Engineer, Business Intelligence Analyst",
        description: "About the Programme:\n\nThe B.Tech in Computer Science and Engineering (Artificial Intelligence and Machine Learning) program at AMET, powered by Kalvium, is designed to equip students with real-time formative assessments, personalized 1:1 mentorship, and actionable feedback to ensure continuous skill development. The program integrates an AI-powered adaptive learning system that monitors student progress, provides targeted insights, and enables timely faculty intervention only when necessary, fostering independent problem-solving and critical thinking.\n\nStudents gain expertise in neural networks, deep learning, predictive analytics, reproducible data analysis, collaborative problem-solving, visualization techniques, and ethical AI considerations. The curriculum is designed to help students build and deploy AI-driven solutions across industries while maintaining a strong foundation in modern AI and ML methodologies.\n\nWith project-based learning from Semester 1, students apply AI and ML concepts to real-world challenges, working with real datasets and developing intelligent models. This hands-on, industry-aligned approach, combined with structured mentorship and continuous feedback, ensures that graduates are job-ready and prepared to drive AI innovations across multiple sectors.",
        highlights: "Build an Impressive Project Portfolio\nLearn hands-on by building tons of real-world projects right from 1st Year.\n\nMaster Highly In-Demand Tech Skills\nLearn new age tech like MERN Stack, AI/ML & more.\n\nDaily Coding Hours\nStrengthen your technical foundation with dedicated daily coding hours, ensuring consistent practice and growth.\n\nProfessional Skills for the modern workplace\nStand out with key skills like communication, teamwork, creativity, etc.\n\n1:1 Mentorship\nUnlock your potential with personalized 1:1 mentorship from industry leaders.\n\nHigher Salary Final Year Placements\nKickstart your career as a pro right after graduation.\n\nHackathons / FOSS / Entrepreneurship\nEmpower your growth through Hackathons, FOSS contributions, and entrepreneurial experiences.",
        careerProspects: "Graduates of this program can pursue various roles in the AI and ML industry, including:\n\n- Big Data Engineer\n- Machine Learning Engineer\n- Data Scientist\n- Data Analyst\n- AI Engineer\n- Deep Learning Engineer\n- Natural Language Processing (NLP) Engineer\n- Full Stack Developer\n- Computer Systems Analyst\n- Database Administrator\n- Information Systems Manager",
        eligibility: "Duration: 4 years (Full-Time) - 8 Semesters\n\nEligibility: 10 + 2 (Higher Secondary) with Mathematics mandatory or Computer Science with Mathematics. (Minimum Aggregate of 50%).\n\nSanctioned Strength: 30\n\nMode of Selection: Written Test and Personal Interview\n\nAge Limit: Below 25 years at the time of commencement\n\nBoys and Girls are eligible to apply.",
        curriculum: "/documents/BE-CSE-AIML-Curriculum.pdf",
        tabs: ['overview', 'highlights', 'career-prospects', 'eligibility', 'curriculum']
      },
      {
        id: "btech-cse-se",
        name: "B.Tech. Computer Science and Engineering (Software Engineering)",
        category: "UG",
        duration: "4 years",
        credits: "160",
        admission: "JEE Main Score + Counselling",
        careerPath: "Software Engineer, Full Stack Developer, Software Architect, DevOps Engineer",
        description: "About the Programme:\n\nThe B.Tech in Computer Science and Engineering (Software Engineering) at AMET, powered by Kalvium, is designed to produce job-ready software engineers through real-world coding experience, paid internships as early as the second year, and hands-on project-based learning. Unlike traditional B.Tech programs, students gain practical expertise in full-stack development, scalable software design, and modern software engineering principles right from Semester 1.\n\nThe curriculum focuses on full-stack development, data structures & algorithms, DevOps, cloud computing, and database management, using industry-relevant tools like Python, Java, JavaScript, C++, SQL, Docker, and Kubernetes. Students benefit from paid internships, allowing them to earn while they learn, gain up to 3 years of work experience, and potentially earn up to ₹8 lakhs before graduation.\n\nWith /strong>real-time formative assessments, 1:1 mentorship, and continuous feedback, students receive personalized guidance to refine their skills. Supported by leaders from Google, Microsoft, Amazon, and PhonePe, the program ensures graduates enter the workforce as mid-level software professionals, not entry-level engineers.\n\nBy integrating paid internships, project-based learning, and an industry-aligned curriculum, this program makes students future-proof and industry-ready for top software roles worldwide.\n\nDuration: 4 years (Full-Time) - 8 Semesters",
        eligibility: "Eligibility:\n\nA Pass in 10 +2 (Higher Secondary) with Mathematics mandatory or Computer Science with Mathematics.\n\nKNET (Kalvium National Entrance Test) Score: A qualifying score in KNET is required.",
        careerProspects: "Job Opportunities\n\nGraduates of this program have career opportunities with leading global technology companies, product-based enterprises, and high-growth startups across multiple industries.\n\nPotential Recruiters:\n\nTop companies hiring Software Product Engineering graduates include Morgan Stanley, Lowe's, PhonePe, Thoughtworks, MediaKind, TCS, Wipro, HCL, Tech Mahindra, Infosys, and many more.\n\nIndustry Sectors:\n\nSoftware Development & Product Engineering – Full-stack development, scalable application design, and enterprise solutions.\n\nCloud Computing & DevOps – Cloud-native applications, infrastructure automation, and deployment pipelines.\n\nIT Consulting & Technology Services – Software architecture, system design, and digital transformation solutions.\n\nBanking & Financial Technology (FinTech) – Development of secure, scalable, and AI-integrated financial platforms.\n\nE-commerce & SaaS Platforms – Web and mobile application development, performance optimization, and API integrations.\n\nStartup & Innovation Ecosystem – Building high-growth technology products in emerging tech sectors.\n\nWith real-world coding experience, paid internships as early as the second year, and hands-on product development, graduates of this program are job-ready and well-prepared to thrive in the evolving software engineering landscape.",
        highlights: "Master Highly In-Demand Tech Skills\nLearn new age tech like MERN Stack, AI ML, Cyber Security & more.\n\nBuild an Impressive Project Portfolio\nLearn hands-on by building tons of real-world projects right from 1st Year.\n\nProfessional Skills for the modern workplace\nStand out with key skills like communication, teamwork, creativity, etc.\n\nGain Invaluable Real World Experience\nPursue Internships & more as part of your B.Tech, starting from as early as 2nd Year.\n\nEarn attractive stipends while in college\nIntern at global tech brands & earn up to ₹8 Lacs before you graduate.\n\nHigher Salary Final Year Placements\nKickstart your career as a mid-level tech professional right after graduation with up to 3 years of work experience.",
        tabs: ['overview', 'eligibility', 'career-prospects', 'highlights']
      },
      {
        id: "phd-cse",
        name: "Ph.D. in Computer Science and Engineering",
        category: "Research",
        duration: "3-5 years",
        credits: "Varies",
        admission: "Entrance Test + Interview",
        careerPath: "Research Scientist, Academic Professor, R&D Director, Chief Technology Officer",
        description: "Doctoral program focused on original research in computer science, contributing to the advancement of knowledge in specialized areas."
      }
    ]
  },
  {
    id: "naval-architecture",
    name: "Dept. of Naval Architecture and Offshore Engineering",
    description: "Department of Naval Architecture and Offshore Engineering was established in 2007, aspires to impart quality education to the students, train them to enrich their skills and attitude and make them competent and efficient for the maritime sector. The department offers PhD, M.E and B.E programs in Naval Architecture and Offshore Engineering. The department has a group of highly qualified and experienced faculties from both academia and industry. We provide solid foundation in wide range of Naval Architectural and offshore engineering aspects such as design, production, construction, structural and hydrodynamic engineering. The department has been constantly updating the curriculum and syllabus of the programs to meet the latest advances in shipping sector. We always set high standards to perform the activities for the benefit of student community in various areas of design and production of ships and offshore structures.\n\nThrough Memorandums of Understanding (MoUs) with leading industry partners, we facilitate knowledge sharing and collaboration, and we offer value-added courses in partnership with industry professionals to further enrich students' practical skills.\n\nOur department is dedicated to maintaining high standards in all its activities, benefiting students in the design and production of ships and offshore structures. The department is accredited by the National Board of Accreditation (NBA), in 2024 for 3 years reflecting our commitment to academic excellence and quality education. Supported by a strong alumni network actively engaged in the maritime industry, our graduates are placed in prominent shipyards, marine industries, and consultancy firms, both in India and abroad, reflecting our commitment to producing capable, industry-ready professionals.",
    icon: Anchor,
    facilities: [
      {
        name: "Naval Design Studio",
        description: "Advanced facility for ship design and modeling"
      },
      {
        name: "Marine Hydrodynamics Lab",
        description: "Specialized laboratory for studying marine hydrodynamics"
      },
      {
        name: "Offshore Structures Test Facility",
        description: "Testing facility for offshore structure designs"
      }
    ],
    research_areas: [
      "Ship Design and Construction",
      "Offshore Engineering",
      "Marine Hydrodynamics",
      "Maritime Safety",
      "Green Ship Technology"
    ],
    collaborations: [
      "Shipbuilding Companies",
      "Offshore Industry Partners",
      "Maritime Research Institutions",
      "Classification Societies"
    ],
    certifications: [
      "AICTE Recognition",
      "International Association of Maritime Universities",
      "Classification Society Partnerships"
    ],
    courses: [
      {
        id: "be-naval",
        name: "B.E. Naval Architecture & Offshore Engineering",
        category: "UG",
        duration: "4 years",
        credits: "160",
        admission: "JEE Main Score + Counselling",
        careerPath: "Naval Architect, Offshore Engineer, Marine Surveyor, Shipyard Designer",
        description: "Bachelor of Engineering program that combines principles of naval architecture with offshore engineering, focusing on design, construction, and maintenance of ships and offshore structures.",
        eligibility: `Duration: 4 years (8 semesters)

Eligibility: A pass in plus-two (12th standard) or its equivalent, with minimum 50% Marks for OC and 45% for others aggregate in Maths, Physics and Chemistry Group from any recognized Board.

Sanctioned Strength: 60

Mode of Selection: Entrance Examination / Personal interview`,
        peos: [
          "Become successful Naval Architects and Offshore Engineers with breadth and depth of knowledge who are competent, innovative and productive in addressing the needs of the global industry.",
          "Pursue higher education and research in Naval Architecture and Offshore Engineering, and other allied disciplines.",
          "Develop innovative thinking skills and pursue a life-long learning process to augment professional growth.",
          "Exhibit high standards of ethical conduct, positive attitude and societal responsibility."
        ],
        pos: [
          "Engineering Knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.",
          "Problem Analysis: Identify, formulate, research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.",
          "Design/development of Solutions: Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.",
          "Conduct Investigations of Complex Problems: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.",
          "Modern Tool Usage: Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.",
          "The Engineer and Society: Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.",
          "Environment and Sustainability: Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.",
          "Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.",
          "Individual and Team Work: Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.",
          "Communication: Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.",
          "Project Management and Finance: Demonstrate knowledge and understanding of the engineering and management principles and apply these to one's own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.",
          "Life-long learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change."
        ],
        psos: [
          "Develop innovative and contemporary designs of ships and offshore structures through advanced analysis and experiments to meet the challenges of marine operations in the shipbuilding, offshore, and other maritime industries.",
          "Implement engineering design and construction concepts to produce solutions in the field of Naval Architecture and Offshore Engineering.",
          "Apply research based knowledge and research methods to analyse and interpret data using modern tools towards the solution of complex problems in the area of Naval Architecture and Offshore Engineering."
        ],
        curriculumDownload: "/documents/naval-architecture/BE-Naval-Architecture-Curriculum.pdf",
        tabs: [
          "eligibility",
          "twinning-programme",
          "download-curriculum",
          "lateral-entry",
          "career-opportunities",
          "alumni",
          "placement-opportunities",
          "research-development",
          "objectives",
          "outcomes",
          "psos"
        ]
      },
      {
        id: "me-naval",
        name: "M.E. Naval Architecture & Offshore Engineering",
        category: "PG",
        duration: "2 years",
        credits: "80",
        admission: "GATE Score + Interview",
        careerPath: "Senior Naval Architect, Research Engineer, Technical Consultant, Project Manager",
        description: "Master of Engineering program providing advanced knowledge in naval architecture, marine engineering, and offshore structural design with emphasis on research and specialized applications.",
        eligibility: `Duration: 2 years

Eligibility: Under Graduate Degree in Naval Architecture, Ship Building, Petroleum, Marine Engineering, Mechanical, Civil, Aeronautical, Production, Industrial Engineering and Fisheries Engineering.

Sanctioned Strength: 16

Mode of Selection: Entrance Examination / Personal Interview

Boys and Girls are eligible to apply.`,
        curriculumDownload: "/documents/naval-architecture/ME-Naval-Architecture-Curriculum.pdf",
        tabs: ["eligibility", "download-curriculum"]
      },
      {
        id: "phd-naval",
        name: "Ph.D. in Naval Architecture & Offshore Engineering",
        category: "Research",
        duration: "3-5 years",
        credits: "Varies",
        admission: "Entrance Test + Interview",
        careerPath: "Research Scientist, Academic Professor, R&D Director, Maritime Technology Consultant",
        description: "Doctoral program focused on original research in naval architecture and offshore engineering, contributing to advancements in maritime technology and offshore structures."
      }
    ]
  },
  {
    id: "petroleum-engineering",
    name: "Dept. of Petroleum Engineering",
    description: "Specialized education in exploration, extraction, and processing of petroleum resources with strong industry partnerships and research focus.",
    icon: Droplet,
    facilities: [
      {
        name: "Reservoir Simulation Lab",
        description: "Advanced facility for petroleum reservoir simulation and modeling"
      },
      {
        name: "Drilling Fluids Laboratory",
        description: "Specialized laboratory for drilling fluid analysis and testing"
      },
      {
        name: "Petroleum Process Simulation Facility",
        description: "Modern facility for petroleum process simulation and optimization"
      }
    ],
    research_areas: [
      "Reservoir Engineering",
      "Drilling Technology",
      "Enhanced Oil Recovery",
      "Petroleum Geology",
      "Production Optimization"
    ],
    collaborations: [
      "Oil and Gas Companies",
      "Energy Research Institutions",
      "Petroleum Service Providers",
      "International Energy Organizations"
    ],
    certifications: [
      "AICTE Recognition",
      "Society of Petroleum Engineers Affiliation",
      "Energy Industry Partnerships"
    ],
    courses: [
      {
        id: "me-petroleum",
        name: "M.E. Petroleum Engineering",
        category: "PG",
        duration: "2 years",
        credits: "80",
        admission: "GATE Score + Interview",
        careerPath: "Senior Petroleum Engineer, Reservoir Specialist, Drilling Operations Manager, Production Optimization Expert",
        description: "Master of Engineering program providing advanced knowledge in petroleum engineering with specialization in reservoir engineering, drilling technology, and production optimization.",
        tabs: ['eligibility', 'objectives', 'outcomes', 'psos', 'download-curriculum'],
        eligibility: `Duration: 2 Years (4 Semesters)

Eligibility: B.E. Degree in Petroleum Engineering, Mechanical Engineering, Chemical Engineering, M.Sc. Geology, M.Sc. Geophysics.

Sanctioned Strength: 16

Mode of Selection: Personal Interview`,
        peos: [
          "Become a successful Petroleum Engineering professional with deep knowledge of the professional subjects.",
          "Ability to integrate, assimilate and analyze the field data for formulating a sound strategy.",
          "Ability to think originally and come out with new technology for efficient drilling and enhancing production through innovative environment friendly methods at optimum cost.",
          "Demonstrate high standards of ethical conduct, positive attitude and social responsibilities."
        ],
        pos: [
          "Apply knowledge of mathematics, science and engineering in their specialization involving complex engineering problems.",
          "Analyze a problem, identify, formulate and solve engineering problems using basic fundamental principles of mathematics and science.",
          "Design a system component or process to meet the desired needs and standards within realistic constraints such as public health and safety, social and environmental considerations.",
          "Design and conduct experiments, as well as do research, analyze and interpret data and give clear solutions.",
          "Use and learn the limitations involved in recent techniques, skills and modern engineering tools necessary for engineering practice.",
          "Assess the local and global impact of engineering solutions on individuals, organization and society and the consequent responsibilities relevant to their professional engineering practice.",
          "Understand the impact of the professional engineering solutions in societal and environmental contexts and demonstrate the knowledge of, and need for sustainable development.",
          "Understand the professional and ethical responsibilities and norms of engineering practice.",
          "Work with multi-disciplinary teams, involve in team activities and accomplish a common goal.",
          "Communicate effectively with engineering community for presentation, documentation of reports adopting the design standards.",
          "Understand engineering and management principles and apply these to one's own work, as a member and leader in a team, to manage projects and in multi-disciplinary environments.",
          "Meet contemporary issues and create advance technologies and will be engaged to life long learning in the broadest scale."
        ],
        psos: [
          "Analyze, design, operate, maintenance and evaluate various components, methods and systems using state-of-art technology in Petroleum Exploration and Exploitation.",
          "Effectively practice as professional engineers, managers, and leaders in the maritime, industries and/or a wide variety of other fields as Petroleum Engineers"
        ],
        curriculumDownload: "/documents/petroleum-engineering/MTech-Petroleum-Engg-Curriculum.pdf"
      },
      {
        id: "phd-petroleum",
        name: "Ph.D. in Petroleum Engineering",
        category: "Research",
        duration: "3-5 years",
        credits: "Varies",
        admission: "Entrance Test + Interview",
        careerPath: "Research Scientist, Academic Professor, R&D Director, Petroleum Technology Consultant",
        description: "Doctoral program focused on original research in petroleum engineering, contributing to advancements in exploration, extraction, and processing technologies."
      }
    ]
  },
  {
    id: "mechanical-engineering",
    name: "Dept. of Mechanical Engineering",
    description: "Comprehensive education in mechanical systems design, manufacturing, and thermal engineering",
    icon: Wrench,
    highlights: [
      "B.E. Mechanical Engineering offers diverse and promising career opportunities across various industries.",
      "Major sectors include automotive, aerospace, energy, manufacturing, robotics, and renewable technologies.",
      "Advancements in automation, artificial intelligence, and sustainable design have increased the demand for mechanical engineers.",
      "Mechanical engineers contribute to developing efficient systems, innovative machinery, and eco-friendly solutions.",
      "Graduates can pursue roles such as Design Engineer, Project Manager, R&D Specialist, Maintenance Engineer.",
      "Opportunities are available in both private and government sectors.",
      "Growing focus on green energy and smart manufacturing supports continuous career evolution.",
      "Mechanical engineers have strong prospects in the global job market.",
      "Pursue GME (Graduate Marine Engineering) to enter the ship and marine industry.",
      "Unique UG, PhD courses with specialization in Mechanical Engineering, Marine Engineering and Naval Architecture.",
      "Accredited by National Board of Accreditation (NBA), New Delhi in September 2021.",
      "CBCS Curriculum aligned with NEP-2020 to achieve Global Competence.",
      "Minor Degree in Industrial Internet of Things [IIoT].",
      "B.E. Mechanical Engineering + 1 year GME can become Marine Engineer for Shipping Industries.",
      "Three projects in Curriculum: Design, Fabrication and Research based projects.",
      "Open Elective Courses: MOOC such as NPTEL courses.",
      "Mandatory courses: Learning and examination in regional language.",
      "Value Added Course: Odd semesters in University and Even semester in Industries.",
      "Experimental Learning, Experiential Learning, Self-Learning, Flipped classroom.",
      "Students Chapters: ISHRAE, IE-I, ISTE and SAEINDIA.",
      "Industrial visits: ISRO, IGCAR, TIDC, MTC Workshops and Chennai Port etc.",
      "Industrial Internships: Three semesters.",
      "Assistance for Book Chapter, Research article publication, Patents.",
      "Placement assistance in Shipping, Automobile, Manufacturing industries.",
      "State-of-the-art laboratories: Industrial Automation, Research Lab, Ship-in-Campus.",
      "ICT enabled Air-conditioned classrooms.",
      "Department Library with latest books.",
      "Study tour to INTI International University, Malaysia.",
      "Training in Centre for Communication and Personality Development (CCPD).",
      "Mentor-Mentee meeting.",
      "Scholarships for eligible students.",
      "Students' Clubs: Cultural club, Media Club, Language Club.",
      "NCC and NSS.",
      "Sports and Games.",
      "Medical facilities and counseling.",
      "Industry Integrated EV Specialization with L & T Edu Tech.",
      "Earn while you learn.",
      "Annual symposium, seminar and Workshop.",
      "University scholarships."
    ],
    facilities: [
      {
        name: "Fluid Mechanics Laboratory",
        description: "Advanced facility for fluid mechanics experiments"
      },
      {
        name: "Manufacturing Technology Center",
        description: "State-of-the-art manufacturing and production facility"
      },
      {
        name: "Thermodynamics and Heat Transfer Lab",
        description: "Specialized laboratory for thermal engineering research"
      }
    ],
    research_areas: [
      "Manufacturing Technology",
      "Thermal Engineering",
      "Robotics and Automation",
      "Materials Science",
      "Energy Systems"
    ],
    collaborations: [
      "Manufacturing Industries",
      "Automotive Companies",
      "Energy Sector Partners",
      "Research Institutions"
    ],
    certifications: [
      "AICTE Recognition",
      "ASME Affiliation",
      "Industry Partnerships"
    ],
    courses: [
      {
        id: "be-mechanical",
        name: "B.E. Mechanical Engineering",
        category: "UG",
        duration: "4 years",
        credits: "160",
        admission: "JEE Main Score + Counselling",
        careerPath: "Mechanical Engineer, Design Engineer, Manufacturing Engineer, Energy Systems Engineer",
        description: "A comprehensive program focusing on mechanical systems design, manufacturing processes, and thermal engineering principles.",
        tabs: ['eligibility', 'highlights', 'download-curriculum', 'objectives', 'outcomes', 'psos'],
        curriculumLink: "/documents/BE-Mechanical-Engineering-Curriculum.pdf",
        eligibility: `Duration: 4 Years (8 semesters)

Eligibility: A Pass in Plus-two (12th Standard) or its equivalent, with minimum 50% Marks for OC and 45% Marks for others aggregate in Maths, Physics and Chemistry Group from any recognized Board. Minimum 50% marks in the English either in +2 or 10th, Boys and Girls are eligible to apply.

Sanctioned Strength: 108

Mode of Selection: Entrance Examination / Personal Interview`,
        lateralEntry: `Lateral Entry: A Pass in DME/DAE/DPE/DNAOE/B.Sc. (Mathematics/Physics/Chemistry) with a minimum of 50% marks.

Boys and Girls are eligible to apply.`,
        peos: [
          "Become successful Marine Engineers who are able to be competent, innovative and productive in addressing the needs of the Shipping Industry or pursue higher education and research.",
          "Grow professionally with their knowledge and proficient skills throughout their career.",
          "Demonstrate high standard of ethical conduct, positive attitude and societal responsibilities."
        ],
        pos: [
          "Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.",
          "Problem analysis: Identify, formulate, research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.",
          "Design/development of solutions: Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.",
          "Conduct investigations of complex problems: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.",
          "Modern tool usage: Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.",
          "The engineer and society: Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.",
          "Environment and sustainability: Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.",
          "Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.",
          "Individual and team work: Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.",
          "Communication: Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions",
          "Project Management and Finance: Demonstrate knowledge and understanding of the engineering and management principles and apply these to one's own work, as a member and leader in a team, to manage projects and in multi-disciplinary environments.",
          "Life-long learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest scale."
        ],
        psos: [
          "Attain knowledge to carry out the watch keeping duties of an engineer officer on board a ship in a safely manner.",
          "Attain Knowledge to maintain and operate machinery and equipment fitted on board ships at operational level.",
          "Achieve excellence in outstanding leadership in Marine Engineering position and passion for lifelong learning and research in advanced fields."
        ]
      },
      {
        id: "phd-mechanical",
        name: "Ph.D. in Mechanical Engineering",
        category: "Research",
        duration: "3-5 years",
        credits: "Varies",
        admission: "Entrance Test + Interview",
        careerPath: "Research Scientist, Academic Professor, R&D Director, Advanced Manufacturing Consultant",
        description: "Doctoral program focused on original research in mechanical engineering, contributing to advancements in design, manufacturing, and energy systems."
      }
    ]
  },
  {
    id: "electrical-engineering",
    name: "Dept. of Electrical and Electronics Engineering",
    description: "Department of Electrical and Electronics Engineering is established in the year 2008 with the objective of imparting quality education of international standards and to produce highly innovative Marine Electrical and Electronics Engineers capable of solving global maritime challenges. Since its inception, the Department has grown steadily and acquired excellent infrastructure, modern equipment for laboratories, and qualified dedicated faculty to impart sound technical knowledge to the enthusiastic student community. The Department has successfully produced four batches of talented graduates who are serving in prestigious shipping industries and organizations.",
    icon: Zap,
    visionMission: "**Vision**\n\nTo emerge as a Centre for higher learning and research through development of highly competent, innovative and world class Marine Electrical and Electronics Engineers while remaining sensitive to ethical, societal and environmental issues.\n\n**Mission**\n\n- To impart quality education in order to produce highly innovative, socio-economically conscious Marine Electrical and Electronics Engineers.\n- To provide knowledge and skills, that is essential to meet the local and global demands in Marine Electrical and Electronics Engineering.\n- To upgrade student's technical knowledge through industry interaction activities.\n- To foster strong ethics, positive attitude and transform the Department into Centre of Excellence by promoting world class research and development to meet the challenging needs of society.\n- To motivate and guide students for developing entrepreneurship or pursue higher education and train them for overall personality development.",
    facilities: [
      {
        name: "Power Systems Laboratory",
        description: "Advanced facility for electrical power systems research"
      },
      {
        name: "Electronics Design Studio",
        description: "Modern laboratory for electronic circuit design and testing"
      },
      {
        name: "Control Systems Laboratory",
        description: "Specialized facility for control systems engineering"
      }
    ],
    research_areas: [
      "Power Systems Engineering",
      "Control Systems",
      "VLSI Design",
      "Embedded Systems",
      "Renewable Energy Systems"
    ],
    collaborations: [
      "Power Companies",
      "Electronics Manufacturers",
      "Automation Industries",
      "Research Institutions"
    ],
    certifications: [
      "AICTE Recognition",
      "IEEE Affiliation",
      "Industry Partnerships"
    ],
    courses: [
      {
        id: "be-electrical-computer",
        name: "B.E. Electrical and Computer Engineering",
        category: "UG",
        duration: "4 years",
        credits: "160",
        admission: "JEE Main Score + Counselling",
        careerPath: "Electrical Engineer, Power Systems Engineer, Electronics Engineer, Control Systems Engineer",
        description: "A specialized program focusing on electrical systems, electronics, computer engineering, and control systems.",
        eligibility: `Duration: 4 Years (8 semesters)

Eligibility: A Pass in Plus-two (12th Standard) or its equivalent, with minimum 50% Marks for OC and 45% Marks for others aggregate in Maths, Physics and Chemistry Group from any recognized Board

Sanctioned Strength: 30

Age: Not more than 25 years at the time of commencement of the Programme

Mode of Selection: Entrance Examination / Personal Interview.

Lateral Entry

Diploma in Electrical & Electronics Engineering (EEE)
Diploma in Electronics a& Communication Engineering (ECE)
Diploma in Electronic & Instrumentation (EIE)
Diploma in Instrumentation & Control (I.C.E)
The above stream candidates should have minimum 60% marks. Good Communication and Writing skills in English

Boys and Girls are eligible to apply.`,
        curriculumLink: "/downloads/be-electrical-curriculum.pdf",
        peos: [
          "Have a successful career in Electrical, Computer and Marine Engineering related fields or pursue higher education and research in multidisciplinary area",
          "Apply Engineering fundamentals, technical knowledge, skills and modern tools to solve real world Electrical and Computer Engineering problems in Maritime and other core industries",
          "Adapt to any environment and practice the ethics of their profession, consistent with a sense of social responsibility",
          "Exhibit the skills by updating the breadth of knowledge in the life-long learning process to meet the global challenges"
        ],
        psos: [
          "Apply the knowledge of electrical and Computer engineering, investigate and solve the complex electrical, computer and marine engineering problems to meet the specified needs with appropriate considerations for the society",
          "Develop solutions for complex Engineering problems in the broad field of Electric Vehicle, Power electronics and drives, power systems, high voltage Engineering and Marine Engineering and control using AI, Machine Learning, Data science and IoT",
          "Analyze, design and integrate Electrical and Computer systems in on board ships and apply modern tools and techniques in core industries and create passion for life-long learning and research in advanced fields"
        ],
        curriculumDownload: '/curricula/BE-EEE_M.pdf',
        pos: [
          "Engineering Knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.",
          "Problem Analysis: Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.",
          "Design/Development of Solutions: Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.",
          "Conduct Investigations of Complex Problems: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.",
          "Modern Tool Usage: Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modelling to complex engineering activities with an understanding of the limitations.",
          "The Engineer and Society: Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.",
          "Environment and Sustainability: Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.",
          "Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.",
          "Individual and Team work: Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.",
          "Communication: Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.",
          "Project Management and Finance: Demonstrate knowledge and understanding of the engineering and management principles and apply these to one's own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.",
          "Life-long learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change."
        ],
        tabs: ["overview", "eligibility", "peo-po-pso", "download-curriculum"]
      },
      {
        id: "me-power-systems",
        name: "M.E. Power Systems",
        category: "PG",
        duration: "2 years",
        credits: "80",
        admission: "GATE Score + Interview",
        careerPath: "Power Systems Engineer, Electrical Grid Specialist, Energy Systems Manager, Power Transmission Expert",
        description: "Content to be updated.",
        eligibility: "Duration: 2 years (4 semesters)\n\nEligibility: BE degree in Electrical and Electronics Engg, Electronics and Communication Engg, Electronics and Instrumentation Engg, Instrumentation and Control Engg, Electrical and Electronics Engg-Marine, Marine Engg, Naval Arch and Offshore Engg, Ocean Engg, Petroleum Engg, Harbour Engg\n\nSanctioned Strength: 16\n\nMode of Selection: Entrance Examination / Personal Interview",
        peos: [
          "PEO1: have professional and personal leadership and growth towards power systems and offshore energy engineering.",
          "PEO2: have technical expertise to remain globally competitive in the energy engineering field."
        ],
        pos: [
          "PO1: An ability to independently carry out research/investigation and development work to solve practical problems.",
          "PO2: An ability to write and present a substantial technical report /document.",
          "PO3: Students should be able to demonstrate a degree of mastery over the area as per the specialization of the program. The mastery should be at a level higher than the requirements in the appropriate bachelor program.",
          "PO4: An ability to develop a patent in the area of core field of power systems",
          "PO5: An ability to independently develop research model on renewable energy systems.",
          "PO6: Acquire professional integrity and ethics, understand the responsibility for sustainable development of the society."
        ],
        psos: [
          "PSO1: Achieve excellence in power system and also excellence in offshore energy engineering and related fields.",
          "PSO2: Attain proficiency in renewable energy engineering and to find solutions on various research problems in the core area.",
          "PSO3: Acquire knowledge in the field of offshore energy engineering by doing research in the lifelong learning process."
        ],
        curriculumDownload: "/curricula/MTECH-EEE_M.pdf",
        tabs: ["overview", "eligibility", "objectives", "outcomes", "psos", "download-curriculum"]
      },
      {
        id: "phd-electrical",
        name: "Ph.D. in Electrical Engineering",
        category: "Research",
        duration: "3-5 years",
        credits: "Varies",
        admission: "Entrance Test + Interview",
        careerPath: "Research Scientist, Academic Professor, R&D Director, Technical Consultant",
        description: "Doctoral program focused on original research in electrical engineering, contributing to advancements in power systems, electronics, and control technologies."
      }
    ]
  },
  {
    id: "food-processing",
    name: "Dept. of Food Processing Technology",
    description: "The Department of Food Processing Technology was established during the academic year 2022-23, featuring professionally qualified faculty and state-of-the-art laboratories catering to the needs of the food industry. The department offers a three-year regular B.Sc. in Food Processing Technology and Management System with specialization in fundamental principles of food processing including food science and chemistry, unit operations, food analysis, modern processing and preservation techniques, and principles of management and marketing. The course provides ample opportunities to apply these principles through internships and project work.",
    icon: FlaskConical,
    visionMission: "**Vision**\n\nTo become a Centre of excellence in Food Technology Education and Research, through the development of highly competent and Dynamic Food Technologist, for serving the society.\n\n**Mission**\n\n- To inculcate in-depth knowledge of Food Engineering and Technology with an ability to analyze, evaluate, design, discriminate, interpret, create and integrate existing and new knowledge.\n\n- To analyze technological problems and judge independently to create information for conducting research and think to conceptualize in the area of Food Engineering and Technology.\n\n- To develop strong research aptitude through research work to enable the students to opt for higher levels of learning in the field of Food Engineering and Technology.\n\n- To inculcate capabilities of students to analyze a problem, identify, formulate and solve technical problems using basic fundamental principles of food process engineering approach.\n\n- To acquaint and equip students with professional and intellectual integrity, ethics of research and scholarship and responsibilities to contribute positively in the sustainable development of society.\n\n- To enable the students to get engaged in lifelong learning independently with the vigor and zeal and become capable to start-up their own businesses.",
    highlights: [
      "Graduates qualified to become food technologists and quality control officers in various Government and private organizations",
      "Internship opportunities in leading Food industries to gain exposure to day-to-day processing activities",
      "Certificate programmes in association with leading external organizations: ISO 22000:2018 and HACCP internal Auditor certification, Marketing and branding certification, Logistics and Supply chain management certification",
      "Food Industries and Research institute visits for all core subjects to enhance understanding of technical concepts",
      "MoU with Government and Private Organizations for research and training programmes",
      "Training on Food Product development and packaging material design with entrepreneurial skills to become Food Business Operators",
      "Career opportunities in MNC Food industries in Production, Quality Control, Quality Assurance, Research and Development, Logistics and supply chain management",
      "Opportunities in Government of India organizations like FSSAI, FCI, MOFPI and state government Cooperative Dairy Organizations, state government food and health departments"
    ],
    facilities: [
      {
        name: "Food Processing Lab",
        description: "State-of-the-art facility for food processing and preservation techniques"
      },
      {
        name: "Food Analysis Center",
        description: "Advanced laboratory for food quality testing and analysis"
      },
      {
        name: "Product Development Kitchen",
        description: "Modern facility for food product development and testing"
      }
    ],
    research_areas: [
      "Food Processing Technologies",
      "Food Safety and Quality Control",
      "Product Development",
      "Preservation Techniques",
      "Sustainable Food Processing"
    ],
    collaborations: [
      "Food Industry Partners",
      "Research Institutions",
      "Quality Control Agencies",
      "Food Safety Organizations"
    ],
    certifications: [
      "FSSAI Recognition",
      "ISO 22000 Certification",
      "HACCP Certification"
    ],
    courses: [
      {
        id: "btech-food-tech",
        name: "B.Tech Food Processing Technology",
        category: "UG" as const,
        duration: "4 years",
        credits: "160",
        admission: "JEE Main Score + Counselling",
        careerPath: "Food Technologist, Quality Assurance Manager, R&D Specialist",
        description: "A comprehensive program focusing on food processing technologies, quality control, and product development. The program provides hands-on experience with modern food processing equipment and techniques.",
        eligibility: `Sanctioned Strength: 30

Duration: 4 Years (8 semesters)

Eligibility: Should have passed 10+2 with Physics, Chemistry, Maths or Biology with minimum 50% marks in aggregate.

Mode of Selection: Entrance Examination / Personal Interview`,
        lateralEntry: `Lateral Entry: The candidate should undergo, 3 years Diploma or Degree Programme in the following disciplines.

• Any one of the 2/3 years Diploma Programme like Food Technology / Dairy Technology / Fisheries Technology / Mechanical / Chemical / Catering

• Any one of the 3 years B.Sc Degree Programme in Food Science / Food and Nutrition / Dietetics / Home Science / Microbiology / Biochemistry / Biotechnology / Chemistry / Physics / Food Management and Service / Catering.`,
        careerOpportunity: `**Career Opportunities**

• Food Inspector
• Process Development Specialists
• Toxicologist
• Manufacturing Specialist
• Food Processor
• Food Production Manager
• Sales Marketing Brand Management
• Dietician, Nutritionist
• Product Development Specialists

**Placement Opportunities**

Processing of Agri – goods, Dairy, Seafood processing and packaging, Beverages (alcoholic and soft drinks), Poultry, Confectionary, Food packaging industry, Biopharma companies.

**Research and Development:**

Food Scientist, Food Technologist, Food Chemist, Product Development Specialist, Food Formulation Scientists.`,
        peos: [
          "Be efficient Food analysts with quality knowledge and essential skills as per the industry needs.",
          "To provide the strong foundation in the areas of food engineering, post-harvest practices and value addition of food materials.",
          "Graduates of the program must be able to competently work with professionals of related fields over the wide spectrum of practice in areas of processing and food engineering, post-harvest technology and value addition."
        ],
        pos: [
          "Apply the knowledge of mathematics, science, engineering fundamentals and an engineering specialization to the solution of complex technical problems.",
          "Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusion using first principles of mathematics, natural science and engineering science.",
          "Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for public health and safety, and the cultural, societal and environmental considerations.",
          "Use research –based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusion.",
          "Create, select, and apply appropriate techniques, resources and modern engineering and IT tools including prediction and modeling to complex engineering activates with an understanding of the limitations.",
          "Apply reasoning informed by the contextual knowledge to asses societal and environmental contexts, and demonstrate the knowledge of and need for sustainable development.",
          "Understand the impact of the professional ethics and responsibilities and norms of the engineering practice.",
          "Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practices.",
          "Function effectively as an individual, and a member or leader in diverse teams, and in multidisciplinary setting.",
          "Communicate effectively on complex engineering activities with the engineering community and with society at large, such as being able to comprehend and write reports effectively and design documentation, make effective presentations and give and received clear instructions.",
          "Demonstrate knowledge and understanding of the engineering and management principles and apply these to one's own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.",
          "Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change."
        ],
        psos: [
          "Apply the knowledge of Food Technology, investigate and solve the complex in food processing and nutrition to meet the specified needs with appropriate considerations for the society.",
          "Develop solutions for complex Engineering problems in the broad field of Food Engineering.",
          "Analyze, design and integrate knowledge of Food processing techniques in food industries and create passion for life-long learning and research in advanced fields."
        ],
        curriculumDownload: "/documents/btech-food-processing-curriculum.pdf",
        tabs: ['overview', 'eligibility', 'career-opportunities', 'peo-po-pso', 'download-curriculum']
      },
      {
        id: "bsc-food-tech",
        name: "B.Sc. Food Processing Technology and Management System",
        category: "UG",
        duration: "3 years",
        credits: "140",
        admission: "Merit-based Selection",
        careerPath: "Food Technologist, Quality Control Officer, Production Manager, Quality Assurance Specialist, R&D Professional, Logistics and Supply Chain Manager, Food Business Operator",
        description: "A comprehensive three-year programme specializing in fundamental principles of food processing including food science and chemistry, unit operations, food analysis, modern processing and preservation techniques, and principles of management and marketing. The course provides ample opportunities to apply these principles through internships and project work in leading food industries.",
        highlights: `• Our Student received World Guinness Record In Millet Processing
• Our students placed in major food companies
• Association with National and International bodies
• Student Entrepreneurs
• Industrial Guest Lectures
• Experiential Learning
• E-Resources
• New Product Development Programme`,
        eligibility: `Sanctioned Strength: 30

Duration: 4 Years (8 semesters)

Eligibility: Should have passed 10+2 with Physics, Chemistry, Maths or Biology with minimum 50% marks in aggregate.

Mode of Selection: Entrance Examination / Personal Interview`,
        lateralEntry: `Lateral Entry: The candidate should undergo, 3 years Diploma or Degree Programme in the following disciplines.

• Any one of the 2/3 years Diploma Programme like Food Technology / Dairy Technology / Fisheries Technology / Mechanical / Chemical / Catering

• Any one of the 3 years B.Sc Degree Programme in Food Science / Food and Nutrition / Dietetics / Home Science / Microbiology / Biochemistry / Biotechnology / Chemistry / Physics / Food Management and Service / Catering.`,
        careerProspects: `**Job Prospects:**

**In Govt Sector:** FCI, FSSAI, BIS, Ministry of Agriculture, NABARD, CFTRI, Defence food Research Laboratory, ICMR – National Institute of Nutrition

**In Pvt:** Nestle, Pepsi, Britannia, ITC, MTR, Aachi, Cavin kare, Vegroute, Relish, Parle Products Pvt Ltd, Licious

**Startups:** Licious, Waycool Foods, Veeba, Mega Foods

**Position:** Research Scientist, Food Engineer, Quality Analyst, Food Microbiologist, Product Developer, Food Inspector, Quality Chemist, Nutritional therapist, Toxicologist, Food Technologist.

**Project:** Mandatory 6 months Project in Food industry with stipend

**Internship:** Our students selected in German Internship with Stipend. Inplant training to all students (one month).`,
        tabs: ['overview', 'eligibility', 'lab-facilities', 'career-prospects', 'highlights']
      },
      {
        id: "phd-food-tech",
        name: "Ph.D. in Food Technology",
        category: "Research",
        duration: "3-5 years",
        credits: "Varies",
        admission: "Entrance Test + Interview",
        careerPath: "Research Scientist, Academic Professor, R&D Director, Food Technology Consultant",
        description: "A doctoral program focused on original research in food technology. Students contribute to advancing knowledge in specialized areas of food processing and technology through rigorous research."
      }
    ]
  },
  {
    id: "mining-engineering",
    name: "Dept. of Mining Engineering",
    description: "Core engineering department established in 2016, specializing in upstream and downstream mining engineering with industry-oriented curriculum and advanced mining technologies",
    icon: HardHat,
    facilities: [
      {
        name: "Department Academic Block",
        description: "VO Chidambaram Block with 03 classrooms with ICT facility and 01 seminar hall"
      },
      {
        name: "Computer Lab",
        description: "01 computer lab equipped with 40 computers for mining software applications"
      },
      {
        name: "ICT Facilities", 
        description: "Smart Boards, LCD Projectors, Audio-Video equipment, Video Conferencing equipment, Facilities for Flipped Class activities, Digital Library Resources"
      },
      {
        name: "Geology Laboratory",
        description: "Specialized laboratory for geological studies and mineral identification"
      },
      {
        name: "Mine Design Laboratory", 
        description: "Advanced facility for mine planning and design using modern software and hardware"
      },
      {
        name: "Rock Mechanics Laboratory",
        description: "Laboratory for studying rock properties and mechanical behavior"
      },
      {
        name: "Mine Survey Laboratory",
        description: "Facility for mine surveying techniques and equipment training"
      },
      {
        name: "Software Resources",
        description: "Geo Slope and Arc GIS (trial versions) for geological and mining applications"
      },
      {
        name: "Library Facility",
        description: "1448 books and 367 titles, 5 journals (3 National and 2 International) specific to mining engineering"
      },
      {
        name: "Research Support Center",
        description: "Comprehensive research support including training programs, financial support for startups, seed money for research projects, incubation and innovation center with hackathon support, and patent filing assistance"
      }
    ],
    research_areas: [
      "Mineral Exploration",
      "Mine Design and Planning",
      "Slope Stability Studies",
      "Mining Safety Engineering",
      "Modern Mining Technologies",
      "Sustainable Mining Practices"
    ],
    collaborations: [
      "ICL (Indian Cement Limited)",
      "Adhunik (India)",
      "Bedrock Mineral Resources (Dubai)",
      "Techno min - Tanzania Projects",
      "Ghusuria Soap Stone Ltd.",
      "Hutti Gold Mines",
      "Jindal Steel Works",
      "Neyveli Lignite Corporation India Limited (NLC)",
      "Tata Steel",
      "Coal India Ltd.",
      "BHP Billiton",
      "Anglo American",
      "Vedanta Corp."
    ],
    certifications: [
      "AICTE Recognition",
      "Industry Partnership Certifications",
      "Mining Industry Association Memberships"
    ],
    courses: [
      {
        id: "be-mining",
        name: "B.E. Mining Engineering",
        category: "UG",
        duration: "4 years",
        credits: "160",
        admission: "JEE Main Score + Counselling",
        careerPath: "Mining Engineer, Mineral Exploration Specialist, Mine Safety Officer, Mining Project Manager, Quarry Manager",
        description: "Comprehensive program focusing on modern mining curriculum with industry-oriented syllabus, industrial internship opportunities, and ICT-enabled teaching methods. Features faculty with extensive industrial experience and multiple industrial internship opportunities with large mines including Hutti Gold Mines, Jindal Steel Works, Indian Cement Limited, and Neyveli Lignite Corporation.",
        note: "100% Placement record from Batch 3. Current Batch 4 has 4 students placed in Indian Cements with 3 additional placements. Long-term project opportunities in industries with subsequent absorption prospects.",
        tabs: ['overview', 'eligibility', 'career-opportunities', 'download-curriculum', 'peo-po-pso'],
        eligibility: "Eligibility: A Pass in Plus-two (12th Standard) or its equivalent, with minimum 50% Marks for OC and 45% Marks for others aggregate in Maths, Physics and Chemistry Group from any recognized Board. Minimum 50% marks in the English either in +2 or 10th.\n\nBoys and Girls are eligible to apply.\n\nSanctioned Strength: 30\n\nMode of Selection: Entrance Examination / Personal Interview",
        lateralEntry: "Lateral Entry: B.E in Mining Engineering 1st year drop outs should have got 50% in passed subjects, Diploma in mining can join for second year.\n\nBoys and Girls are eligible to apply.",
        curriculumDownload: "/documents/be-mining-curriculum.pdf",
        peos: [
          "Become successful Mining Engineers with quality knowledge and essential skills as per the industry needs.",
          "Pursue higher education and engage in cutting edge research to offer solutions to complicated field programmes.",
          "Demonstrate high standard of ethical conduct, positive attitude and social responsibilities."
        ],
        pos: [
          "Apply the knowledge of mathematics, science, engineering fundamentals and an engineering specialization to the solution of complex engineering problems",
          "Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusion using first principles of mathematics, natural science and engineering science",
          "Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for public health and safety, and the cultural, societal and environmental considerations",
          "Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusion",
          "Create, select, and apply appropriate techniques, resources and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations",
          "Apply reasoning informed by the contextual knowledge to assess societal and environmental contexts, and demonstrate the knowledge of and need for sustainable development",
          "Understand the impact of the professional ethics and responsibilities and norms of the engineering practice",
          "Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practices",
          "Function effectively as an individual, and a member or leader in diverse teams, and in multidisciplinary setting",
          "Communicate effectively on complex engineering activities with the engineering community and with society at large, such as being able to comprehend and write effectively reports and design documentation, make effective presentations and give and receive clear instructions",
          "Demonstrate knowledge and understanding of the engineering and management principles and apply these to one's own work, as a member and leader in a team, to manage projects and in multidisciplinary environments",
          "Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change"
        ],
        psos: [
          "Analyze, design, operate, maintenance and evaluate various components, methods and systems using state-of-art technology",
          "Effectively practice as professional engineers, managers, and leaders in the mining industries and/or a wide variety of other fields as engineers",
          "Create, select, and apply appropriate techniques, resources and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations"
        ]
      },
      {
        id: "phd-mining",
        name: "Ph.D. in Mining Engineering",
        category: "Research",
        duration: "3-5 years",
        credits: "Varies",
        admission: "Entrance Test + Interview",
        careerPath: "Research Scientist, Academic Professor, R&D Director, Mining Technology Consultant, Senior Mining Engineer",
        description: "Doctoral program focused on original research in mining engineering, mineral exploration, and advanced mining technologies. Opportunities for collaboration with national and international mining projects and industry partners."
      }
    ]
  }
];
