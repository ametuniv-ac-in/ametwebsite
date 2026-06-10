
import { HeartPulse, FlaskConical } from "lucide-react";
import { Department } from "./types";

export const lifeSciencesDepartments: Department[] = [
  {
    id: "food-processing",
    name: "Department of Food Processing Technology",
    description: "Advancing food science and technology through innovative research and industry-focused education.",
    icon: HeartPulse,
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
        category: "UG",
        duration: "4 years",
        credits: "160",
        admission: "JEE Main Score + Counselling",
        careerPath: "Food Technologist, Quality Assurance Manager, R&D Specialist",
        description: "A comprehensive program focusing on food processing technologies, quality control, and product development. The program provides hands-on experience with modern food processing equipment and techniques.",
        eligibility: "**Sanctioned Strength:** 30\n\n**Duration:** 4 Years (8 semesters)\n\n**Eligibility:** Should have passed 10+2 with Physics, Chemistry, Maths or Biology with minimum 50% marks in aggregate.\n\n**Mode of Selection:** Entrance Examination / Personal Interview",
        ageLimit: "No specific age limit",
        medicalStandard: "General good health",
        lateralEntry: "**Lateral Entry:** The candidate should undergo, 3 years Diploma or Degree Programme in the following disciplines.\n\n**Any one of the 2/3 years Diploma Programme like:**\n- Food Technology\n- Dairy Technology\n- Fisheries Technology\n- Mechanical\n- Chemical\n- Catering\n\n**Any one of the 3 years B.Sc Degree Programme in:**\n- Food Science\n- Food and Nutrition\n- Dietetics\n- Home Science\n- Microbiology\n- Biochemistry\n- Biotechnology\n- Chemistry\n- Physics\n- Food Management and Service\n- Catering",
        note: "The program includes advanced laboratory work and research project in specialized areas of food processing.",
        tabs: ['overview', 'eligibility', 'download-curriculum', 'career-opportunities', 'objectives', 'outcomes', 'psos'],
        peos: [
          "Be efficient Food analysts with quality knowledge and essential skills as per the industry needs.",
          "To provide the strong foundation in the areas of food engineering, post-harvest practices and value addition of food materials.",
          "Graduates of the program must be able to competently work with professionals of related fields over the wide spectrum of practice in areas of processing and food engineering, post-harvest technology and value addition."
        ],
        pos: [
          "Apply the knowledge of mathematics, science, engineering fundamentals and an engineering specialization to the solution of complex technical problems.",
          "Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusion using first principles of mathematics, natural science and engineering science.",
          "Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for public health and safety, and the cultural, societal and environmental considerations.",
          "Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusion.",
          "Create, select, and apply appropriate techniques, resources and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.",
          "Apply reasoning informed by the contextual knowledge to assess societal and environmental contexts, and demonstrate the knowledge of and need for sustainable development.",
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
        curriculumLink: '/curricula/btech-food-processing-technology.pdf',
        careerRoles: [
          "Food Inspector",
          "Process Development Specialists",
          "Toxicologist",
          "Manufacturing Specialist",
          "Food Processor",
          "Food Production Manager",
          "Sales Marketing Brand Management",
          "Dietician, Nutritionist",
          "Product Development Specialists"
        ],
        placementSectors: [
          "Processing of Agri-goods",
          "Dairy",
          "Seafood processing and packaging",
          "Beverages (alcoholic and soft drinks)",
          "Poultry",
          "Confectionary",
          "Food packaging industry",
          "Biopharma companies"
        ],
        researchRoles: [
          "Food Scientist",
          "Food Technologist",
          "Food Chemist",
          "Product Development Specialist",
          "Food Formulation Scientists"
        ]
      },
      {
        id: "bsc-food-tech",
        name: "B.Sc. Food Processing Technology and Management",
        category: "UG",
        duration: "3 years",
        credits: "140",
        admission: "Merit-based Selection",
        careerPath: "Food Quality Analyst, Production Supervisor, Food Service Manager",
        description: "A bachelor's program combining food processing technology with essential management skills. Students learn both the technical aspects of food processing and the management principles required for the food industry.",
        eligibility: "Pass in 12th Standard with Physics, Chemistry, Biology/Mathematics with minimum 55% aggregate marks",
        ageLimit: "No specific age limit",
        medicalStandard: "General good health",
        lateralEntry: "Not available",
        note: "The program includes industrial visits and a 6-month internship in food processing companies.",
        tabs: ['overview', 'eligibility', 'job-prospects', 'salient-features'],
        peos: [
          "Develop professionals with combined knowledge of food technology and management",
          "Prepare students for supervisory and management roles in the food industry",
          "Create graduates equipped to handle both technical and administrative aspects of food processing operations"
        ],
        pos: [
          "Apply principles of food processing and preservation",
          "Implement food safety and quality management systems",
          "Apply management principles to food processing operations",
          "Analyze food products for quality and safety",
          "Manage food processing facilities efficiently",
          "Develop and implement food production schedules",
          "Apply business principles to food industry contexts"
        ],
        psos: [
          "Demonstrate integrated knowledge of food processing technology and management principles",
          "Apply technical and managerial concepts to practical food industry situations",
          "Develop proficiency in managing food processing operations"
        ],
        jobProspects: [
          "**Government Sector Opportunities:** FCI, FSSAI, BIS, Ministry of Agriculture, NABARD, CFTRI, Defence Food Research Laboratory, ICMR – National Institute of Nutrition",
          "**Private Sector Companies:** Nestle, Pepsi, Britannia, ITC, MTR, Aachi, Cavin Kare, Vegroute, Relish, Parle Products Pvt Ltd, Licious",
          "**Startups:** Licious, Waycool Foods, Veeba, Mega Foods",
          "**Available Positions:** Research Scientist, Food Engineer, Quality Analyst, Food Microbiologist, Product Developer, Food Inspector, Quality Chemist, Nutritional Therapist, Toxicologist, Food Technologist",
          "**Mandatory Industry Project:** 6 months project in food industry with stipend",
          "**Internship Opportunities:** Students selected for German Internship with stipend. In-plant training provided to all students (one month)"
        ],
        salientFeatures: [
          "Our Student received World Guinness Record In Millet Processing",
          "Our students placed in major food companies",
          "Association with National and International bodies",
          "Student Entrepreneurs",
          "Industrial Guest Lectures",
          "Experiential Learning",
          "E-Resources",
          "New Product Development Programme"
        ],
        curriculumLink: '#'
      },
      {
        id: "phd-food-tech",
        name: "Ph.D. in Food Technology",
        category: "Research",
        duration: "3-5 years",
        credits: "Varies",
        admission: "Entrance Test + Interview",
        careerPath: "Research Scientist, Academic Professor, R&D Director, Food Technology Consultant",
        description: "A doctoral program focused on original research in food technology. Students contribute to advancing knowledge in specialized areas of food processing and technology through rigorous research.",
        eligibility: "M.Sc./M.Tech in Food Technology, Food Science, or related fields with minimum 60% marks",
        ageLimit: "No specific age limit",
        medicalStandard: "General good health",
        lateralEntry: "Not applicable",
        note: "The program requires publication of research papers in peer-reviewed journals.",
        peos: [
          "Develop research leaders in food technology",
          "Foster innovation and original contributions to food technology knowledge",
          "Create experts capable of addressing global challenges in food processing and safety"
        ],
        pos: [
          "Conduct original research in food technology",
          "Design and implement complex research methodologies",
          "Analyze and interpret complex data in food technology",
          "Develop innovative theories and approaches in food processing",
          "Communicate research findings effectively to diverse audiences",
          "Contribute to the advancement of food technology knowledge"
        ],
        psos: [
          "Demonstrate expertise in specialized areas of food technology",
          "Apply advanced research methodologies to complex problems in food technology",
          "Develop original contributions to food technology knowledge"
        ],
        curriculumLink: '#'
      }
    ]
  },
  {
    id: "marine-biotechnology",
    name: "Department of Marine Biotechnology",
    description: `The Department of Marine Biotechnology at AMET Deemed to be University was established in 2008 with the aim of providing world-class higher education in Marine Biotechnology. This dynamic field encompasses diverse areas of research and development. As a branch of blue biotechnology, it offers extensive opportunities across various industries, including biomedical, pharmaceutical, nutraceutical, food, feed, cosmetics, environment, aquaculture, agriculture, and renewable energy production.

Pharmaceutical companies are increasingly focusing on developing new drugs from marine resources, as many potent drugs derived from marine bioresources are already in the market. Additionally, blue biotechnology plays a critical role in industrial and environmental applications, particularly through the exploration of marine microbes (including those from deep-sea environments) for pollution control via biodegradation, biotransformation, and bioremediation.

The growing emphasis on aquaculture is expected to create thousands of job opportunities for trained Marine Biotechnologists. The increasing demand for marine-derived products across various sectors continues to outpace supply. Among renewable energy sources, energy derived from marine bioresources is a key area of national interest, and microalgae biotechnology offers promising potential for renewable energy production.

The Department focuses its research on discovering novel bioactive marine pharmaceuticals, cosmeceuticals, and aquaculture products from marine sources. Other core research areas include marine molecular taxonomy (identifying marine organisms using molecular markers) and aquatic ecotoxicology and pollution studies (toxicological testing, environmental monitoring, impact assessment, and safe limit derivation for toxicants). Guided by these core research areas, the Department has designed comprehensive academic, research, consultancy, and extension programs to meet the needs of stakeholders effectively.

**Highlights:**

• The Department is strengthened by a blend of experienced and young faculty members.

• The core research focus of the Department is on "biologically active molecules from marine organisms" - this theme is integrated into research and consultancy.

• Undertaken major research projects funded by key government agencies, including the Department of Biotechnology (DBT), Science and Engineering Research Board (SERB), Ministry of Earth Sciences (MoES), and the Tamil Nadu State Council for Science and Technology (TNSCST), as well as non-governmental organizations such as the International Association of Maritime Universities (IAMU), focusing on Live Feed Culture Technology, Biofouling, Deep-Sea Mission on Bioinvasion, and Antifouling Metabolites.

• The Department conducts National-Level Training/Workshops on "Isolation and Identification of Bioactive Products from Marine Bioresources" annually, catering to undergraduate, postgraduate, and research scholars. Additionally, it organizes National and International Conferences/Symposiums/Seminars to share knowledge and research insights in areas such as Marine Biotechnology, Aquaculture, Marine Natural Products, and Environmental Sciences.

• Established research collaborations with leading International and National Research Institutes/Organizations and various R&D departments, offering students opportunities for summer training and internships.

• Signed a Memorandum of Understanding (MoU) with the Central Institute of Brackishwater Aquaculture (CIBA), ICAR for joint academic and research collaborations.

• Signed MoUs with biotechnology industries to expand training, consultancy, research, and development activities in Marine Biotechnology.

• Developed international collaborations with Liverpool John Moores University (UK), National Taiwan Ocean University (Taiwan), and Scottish Association of Marine Sciences (SAMS, UK) to facilitate joint research and development, faculty and student exchange programs in specialized areas such as carbon sequestration, algal biofuels, biofouling, aquaculture, and bioprospecting of marine organisms.

• The Department's faculty members have extensive expertise in Marine Microbiology, Mycology, Marine Bioprospecting, Aquaculture, Marine Live Feed Technology, Marine Underwater Monitoring, Coral Reef Ecology, Marine Molecular Taxonomy, Aquatic Ecotoxicology and Pollution, and Socioeconomics.

• The Department has established state-of-the-art laboratory facilities to support research across these fields, with financial assistance from government agencies such as the Department of Biotechnology (DBT), Science and Engineering Research Board (SERB), and the Ministry of Environment, Forest, and Climate Change (MoEF&CC).

• Publishes a biannual journal, the Journal of Marine Biosciences, to showcase cutting-edge research in Marine Biotechnology.`,
    icon: FlaskConical,
    visionMission: `**Vision**
To be a Centre of excellence in the field of biotechnology equipped to nurture world-class bioengineers with a potential to innovate, discover and disseminate knowledge for the welfare of mankind.

**Mission**
- To transform into a comprehensive and a multidisciplinary biotechnology center that supports, coordinates, disseminates and advances biotechnology
- To impart quality education for life long professional growth and opportunity in a wide range of Careers
- To become a resource center for biotechnology information and education to create awareness towards socio ethical implications of potentials of biotechnology
- To initiate multi-disciplinary programs through academia-industry interface with a special emphasis on implementation of bioprocess and scale-up
- To endow students with the educational opportunity belonging to different socio-economic backgrounds
- To engage in the fruitful research that can be beneficial to create a better society`,
    facilities: [
      {
        name: "Marine Biotech Laboratory",
        description: "Advanced laboratory for marine biotechnology research and development"
      },
      {
        name: "Marine Genomics Center",
        description: "State-of-the-art facility for marine organism genomic studies"
      },
      {
        name: "Aquatic Biosystems Facility",
        description: "Controlled environment for marine organism cultivation and research"
      },
      {
        name: "Bioproducts Development Lab",
        description: "Facility for developing marine-derived bioproducts and pharmaceuticals"
      }
    ],
    research_areas: [
      "Marine Natural Products",
      "Marine Microbial Biotechnology",
      "Algal Biotechnology",
      "Marine Genomics",
      "Marine Bioprospecting",
      "Aquaculture Biotechnology",
      "Marine Pharmaceutical Development"
    ],
    collaborations: [
      "Marine Research Institutes",
      "Pharmaceutical Companies",
      "Biotechnology Industry Partners",
      "International Marine Conservation Organizations",
      "Aquaculture Industry"
    ],
    certifications: [
      "DBT Recognition",
      "ISO 9001:2015 Certification",
      "GLP Compliance Certification"
    ],
    courses: [
      {
        id: "msc-marine-biotech",
        name: "M.Sc. Marine Biotechnology",
        category: "PG",
        duration: "2 years",
        credits: "120",
        admission: "Entrance Exam + Interview",
        careerPath: "Marine Biotechnologist, Research Scientist, Marine Product Developer, Aquaculture Specialist",
        description: "A specialized postgraduate program focusing on marine biological resources and their biotechnological applications. Students gain expertise in marine genomics, bioprospecting, and marine-derived products development.",
        eligibility: "**Duration:** 2 years (4 Semesters)\n\n**Eligibility:** Bachelors Degree in Science (Botany, Zoology, Chemistry, Biochemistry, Biotechnology, Bioinformatics tech), Agriculture and Medicine with minimum 55% marks and Life Sciences/Biology as Main/Ancillary subject.\n\n**Sanctioned Strength:** 16\n\n**Mode of Selection:** Personal interview\n\nBoys and Girls are eligible to apply.",
        ageLimit: "No specific age limit",
        medicalStandard: "General good health",
        lateralEntry: "Not applicable",
        note: "The program includes field visits to marine ecosystems and a research dissertation on marine biotechnology.",
        tabs: ['overview', 'eligibility', 'objectives', 'outcomes'],
        peos: [
          "Become successful Marine Biologists who are able to competent, innovative and productive in addressing the needs of the Industry, or pursue higher education and research.",
          "Grow professionally with their knowledge and proficient skills throughout their career.",
          "Demonstrate high standard of ethical conduct, positive attitude and societal responsibilities"
        ],
        pos: [
          "Post graduates will be well versed in the field of marine environment studies so that they will be confident enough to carry out their knowledge practically in the areas individually and meticulously.",
          "Post graduates will be self motivated, so that they can design their own problems and research proposal and can work meticulously on that aspect.",
          "They will have clear view about how to design a fermentor for production purposes and scale up processes.",
          "The students will know how to formulate their research progress and they will know how to present it as a complete research paper with the help of statistical analysis.",
          "The students will be highly motivated towards the value of natural resources and they will know what the nature provide us with a wealthy resource and they will know the importance of preserving it.",
          "The post graduates will be able to communicate effectively in both verbal and written forms",
          "The post graduates will demonstrate their ability to design and experiments, interpret and analyze data, and report results with international standards.",
          "They can handle sophisticated instruments individually when they are placed in pharmaceutical, food industries etc, they will be expertise in the instrument handling",
          "They can handle and rectify the problems arises technically while conducting a experiment and they can create new innovative methods to conduct such experiments in the due course",
          "They will stand up to the international standards to meet the research expectations throughout the world scenario."
        ],
        psos: [
          "Demonstrate specialized knowledge of marine biotechnology",
          "Apply theoretical concepts to practical marine biotechnology applications",
          "Develop proficiency in marine biotechnological techniques and research"
        ],
        curriculumLink: '#'
      },
      {
        id: "phd-marine-biotech",
        name: "Ph.D. in Marine Biotechnology",
        category: "Research",
        duration: "3-5 years",
        credits: "Varies",
        admission: "Entrance Test + Interview",
        careerPath: "Research Scientist, Academic Professor, R&D Director, Biotechnology Consultant",
        description: "A doctoral program focused on original research in marine biotechnology. Students contribute to advancing knowledge in specialized areas of marine biotechnology through rigorous research.",
        eligibility: "M.Sc./M.Tech in Biotechnology, Marine Biology, or related fields with minimum 60% marks",
        ageLimit: "No specific age limit",
        medicalStandard: "General good health",
        lateralEntry: "Not applicable",
        note: "The program requires publication of research papers in peer-reviewed journals.",
        peos: [
          "Develop research leaders in marine biotechnology",
          "Foster innovation and original contributions to marine biotechnology knowledge",
          "Create experts capable of addressing global challenges through marine biotechnology"
        ],
        pos: [
          "Conduct original research in marine biotechnology",
          "Design and implement complex research methodologies",
          "Analyze and interpret complex data in marine biotechnology",
          "Develop innovative theories and approaches in marine biotechnology",
          "Communicate research findings effectively to diverse audiences",
          "Contribute to the advancement of marine biotechnology knowledge"
        ],
        psos: [
          "Demonstrate expertise in specialized areas of marine biotechnology",
          "Apply advanced research methodologies to complex problems in marine biotechnology",
          "Develop original contributions to marine biotechnology knowledge"
        ],
        curriculumLink: '#'
      }
    ]
  }
];
