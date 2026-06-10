import { Atom, BookOpen, Calculator, FileText, Brain, Dumbbell } from "lucide-react";
import { Department } from "./types";

export const scienceHumanitiesDepartments: Department[] = [
  {
    id: "physics",
    name: "Department of Physics",
    description: "Welcome to the Department of Physics. Since its inception in 2001–2002, the department has been dedicated to fostering scientific knowledge, innovation, and research excellence. With a strong academic curriculum, well-equipped laboratories, and highly qualified faculty, we aim to provide students with a solid foundation in both theoretical and experimental physics.\n\nOur research spans Nanophotonics, Photonics, Optoelectronics, Energy Materials, Biophotonics, and Computational Physics, with active participation from research scholars and funded projects from national agencies. We encourage curiosity, critical thinking, and hands-on learning to prepare students for successful careers in academia, industry, and research.\n\nWe warmly invite you to explore our academic programs, research facilities, achievements, and opportunities offered by our department. Together, let us continue to discover, innovate, and contribute to the ever-evolving scientific world.\n\nWelcome to a journey of knowledge, discovery, and excellence.",
    icon: Atom,
    visionMission: "**Vision**\n\nThe Department aspires to be a centre of excellence in scientific education, delivering world-class scientific and maritime-oriented learning and fostering innovation through progressive teaching. It aims to offer a transformative experience that builds strong fundamentals and prepares learners to contribute to global society.\n\n**Mission**\n\n- Provide value-based, high-quality Physics education with strong conceptual and technical skills.\n- Develop student competencies in emerging technologies and industry-relevant areas.\n- Foster holistic growth by encouraging critical thinking, communication, and creativity.\n- Empower students from all backgrounds and apply Physics knowledge for societal benefit.\n- Promote active research culture through innovative and collaborative projects.",
    facilities: [
      {
        name: "Physics Laboratory",
        description: "Advanced lab for experimental physics research"
      },
      {
        name: "Computational Physics Center",
        description: "Facility for computational modeling and simulations"
      }
    ],
    research_areas: [
      "Theoretical Physics",
      "Experimental Physics",
      "Applied Physics",
      "Quantum Mechanics",
      "Astrophysics"
    ],
    collaborations: [
      "National Physics Laboratories",
      "International Research Institutions",
      "Physics Research Organizations"
    ],
    certifications: [
      "International Physics Standards Certification"
    ],
    courses: [
      {
        id: "phd-physics",
        name: "Ph.D. Physics",
        category: "Research",
        duration: "3-5 years",
        credits: "180",
        admission: "Entrance Examination and Interview",
        careerPath: "Research Scientist, Professor, R&D Specialist, Scientific Consultant",
        description: "A comprehensive doctoral program focusing on advanced research in physics, enabling scholars to contribute to the frontiers of knowledge in the field.",
        eligibility: "Masters in Physics or related field with minimum 60% marks",
        ageLimit: "No specific age limit",
        medicalStandard: "General fitness",
        note: "Selection is highly competitive and based on research aptitude and academic excellence",
        peos: [
          "Develop advanced research skills to contribute to the field of Physics",
          "Foster independent thinking and problem-solving abilities in complex scientific challenges",
          "Prepare scholars for leadership roles in academic and research institutions"
        ],
        pos: [
          "Demonstrate comprehensive understanding of advanced theoretical and experimental physics concepts",
          "Design and conduct original research using appropriate methodologies",
          "Critically analyze research findings and relate them to existing knowledge",
          "Effectively communicate research findings through publications and presentations",
          "Apply ethical standards in research and professional activities"
        ],
        psos: [
          "Develop specialized expertise in chosen physics subdiscipline",
          "Contribute original research that advances the field of physics",
          "Demonstrate proficiency in advanced experimental or computational techniques"
        ],
        curriculumLink: "https://example.com/phd-physics-curriculum.pdf"
      }
    ]
  },
  {
    id: "mathematics",
    name: "Department of Mathematics",
    description: "Advancing mathematical theory and applications",
    icon: Calculator,
    facilities: [
      {
        name: "Mathematics Computer Lab",
        description: "Advanced computing facility for mathematical modeling"
      },
      {
        name: "Mathematical Research Center",
        description: "Hub for mathematical research and collaboration"
      }
    ],
    research_areas: [
      "Pure Mathematics",
      "Applied Mathematics",
      "Mathematical Modeling",
      "Computational Mathematics",
      "Statistics and Probability"
    ],
    collaborations: [
      "Mathematical Research Institutes",
      "National Mathematics Society",
      "International Mathematics Associations"
    ],
    certifications: [
      "Mathematics Standards Organization Certification"
    ],
    courses: [
      {
        id: "phd-mathematics",
        name: "Ph.D. Mathematics",
        category: "Research",
        duration: "3-5 years",
        credits: "180",
        admission: "Entrance Examination and Interview",
        careerPath: "Research Mathematician, Professor, Data Scientist, Quantitative Analyst",
        description: "An advanced doctoral program focusing on mathematical research, enabling scholars to contribute original mathematical theories and solutions.",
        eligibility: "Masters in Mathematics or related field with minimum 60% marks",
        ageLimit: "No specific age limit",
        medicalStandard: "General fitness",
        note: "Selection is based on research aptitude and academic excellence in the field of mathematics",
        peos: [
          "Develop advanced research skills to contribute to mathematical theory and applications",
          "Foster innovative thinking and problem-solving abilities in complex mathematical challenges",
          "Prepare scholars for leadership roles in academic and research institutions"
        ],
        pos: [
          "Demonstrate comprehensive understanding of advanced mathematical concepts and theories",
          "Design and conduct original mathematical research using appropriate methodologies",
          "Critically analyze research findings and relate them to existing mathematical knowledge",
          "Effectively communicate mathematical research through publications and presentations",
          "Apply ethical standards in research and professional activities"
        ],
        psos: [
          "Develop specialized expertise in chosen mathematics subdiscipline",
          "Contribute original research that advances the field of mathematics",
          "Demonstrate proficiency in advanced computational and analytical techniques"
        ],
        curriculumLink: "https://example.com/phd-mathematics-curriculum.pdf"
      }
    ]
  },
  {
    id: "chemistry",
    name: "Department of Chemistry",
    description: "Exploring chemical processes and material science",
    icon: FileText,
    facilities: [
      {
        name: "Chemistry Laboratory Complex",
        description: "State-of-the-art labs for chemical research and experiments"
      },
      {
        name: "Analytical Instrumentation Center",
        description: "Advanced equipment for chemical analysis and research"
      }
    ],
    research_areas: [
      "Organic Chemistry",
      "Inorganic Chemistry",
      "Physical Chemistry",
      "Analytical Chemistry",
      "Biochemistry"
    ],
    collaborations: [
      "Chemical Research Institutes",
      "Pharmaceutical Companies",
      "Chemical Industry Partners"
    ],
    certifications: [
      "Chemical Safety Standards Certification",
      "Analytical Chemistry Certification"
    ],
    courses: [
      {
        id: "phd-chemistry",
        name: "Ph.D. Chemistry",
        category: "Research",
        duration: "3-5 years",
        credits: "180",
        admission: "Entrance Examination and Interview",
        careerPath: "Research Chemist, Professor, R&D Scientist, Chemical Industry Consultant",
        description: "A comprehensive doctoral program focusing on advanced chemical research, enabling scholars to contribute to the frontiers of knowledge in chemical sciences.",
        eligibility: "Masters in Chemistry or related field with minimum 60% marks",
        ageLimit: "No specific age limit",
        medicalStandard: "General fitness",
        note: "Selection is highly competitive and based on research aptitude and academic excellence in chemistry",
        peos: [
          "Develop advanced research skills to contribute to the field of Chemistry",
          "Foster innovative thinking and problem-solving abilities in complex chemical challenges",
          "Prepare scholars for leadership roles in academic and research institutions"
        ],
        pos: [
          "Demonstrate comprehensive understanding of advanced chemical concepts and theories",
          "Design and conduct original chemical research using appropriate methodologies",
          "Critically analyze research findings and relate them to existing chemical knowledge",
          "Effectively communicate research findings through publications and presentations",
          "Apply ethical standards in research and professional activities"
        ],
        psos: [
          "Develop specialized expertise in chosen chemistry subdiscipline",
          "Contribute original research that advances the field of chemistry",
          "Demonstrate proficiency in advanced experimental and analytical techniques"
        ],
        curriculumLink: "https://example.com/phd-chemistry-curriculum.pdf"
      }
    ]
  },
  {
    id: "english",
    name: "Department of English",
    description: "Fostering language skills and literary appreciation",
    icon: BookOpen,
    facilities: [
      {
        name: "Language Laboratory",
        description: "Modern facility for language learning and communication skills"
      },
      {
        name: "Literary Resource Center",
        description: "Collection of literary works and research materials"
      }
    ],
    research_areas: [
      "English Literature",
      "Linguistics",
      "Communication Studies",
      "Cultural Studies",
      "Technical Writing"
    ],
    collaborations: [
      "Literary Societies",
      "Publishing Houses",
      "Language Research Institutes"
    ],
    certifications: [
      "English Language Proficiency Certification",
      "Technical Communication Certification"
    ],
    courses: [
      {
        id: "phd-english",
        name: "Ph.D. English",
        category: "Research",
        duration: "3-5 years",
        credits: "180",
        admission: "Entrance Examination and Interview",
        careerPath: "Professor, Researcher, Literary Critic, Communication Consultant, Language Specialist",
        description: "An advanced doctoral program focusing on research in English literature, language, and cultural studies, enabling scholars to contribute original insights to the field.",
        eligibility: "Masters in English or related field with minimum 60% marks",
        ageLimit: "No specific age limit",
        medicalStandard: "General fitness",
        note: "Selection is based on research proposal quality, academic excellence, and interview performance",
        peos: [
          "Develop advanced research skills to contribute to the field of English literature and linguistics",
          "Foster innovative thinking and analytical abilities in complex literary and linguistic challenges",
          "Prepare scholars for leadership roles in academic and research institutions"
        ],
        pos: [
          "Demonstrate comprehensive understanding of advanced literary theories and linguistic concepts",
          "Design and conduct original research using appropriate methodologies in English studies",
          "Critically analyze research findings and relate them to existing knowledge in the field",
          "Effectively communicate research findings through publications and presentations",
          "Apply ethical standards in research and professional activities"
        ],
        psos: [
          "Develop specialized expertise in chosen area of English studies",
          "Contribute original research that advances the field of literature or linguistics",
          "Demonstrate proficiency in advanced literary analysis or linguistic research techniques"
        ],
        curriculumLink: "https://example.com/phd-english-curriculum.pdf"
      }
    ]
  },
  {
    id: "physical-education",
    name: "Department of Physical Education",
    description: "Promoting physical fitness and sports excellence",
    icon: Dumbbell,
    facilities: [
      {
        name: "Sports Complex",
        description: "Comprehensive facilities for various sports and physical activities"
      },
      {
        name: "Fitness Assessment Lab",
        description: "State-of-the-art equipment for fitness evaluation and research"
      }
    ],
    research_areas: [
      "Sports Science",
      "Exercise Physiology",
      "Sports Psychology",
      "Physical Fitness",
      "Sports Management"
    ],
    collaborations: [
      "National Sports Associations",
      "Fitness Research Institutes",
      "Sports Medicine Centers"
    ],
    certifications: [
      "Sports Coaching Certification",
      "Fitness Training Certification"
    ],
    courses: [
      {
        id: "phd-physical-education",
        name: "Ph.D. Physical Education",
        category: "Research",
        duration: "3-5 years",
        credits: "180",
        admission: "Entrance Examination and Interview",
        careerPath: "Sports Scientist, Physical Education Professor, Sports Psychologist, Athletic Director, Sports Policy Advisor",
        description: "An advanced doctoral program focusing on research in sports science, exercise physiology, and physical education pedagogy, enabling scholars to contribute original insights to the field.",
        eligibility: "Masters in Physical Education or related field with minimum 60% marks",
        ageLimit: "No specific age limit",
        medicalStandard: "Good physical fitness",
        note: "Selection is based on research proposal quality, academic excellence, and interview performance",
        peos: [
          "Develop advanced research skills to contribute to the field of physical education and sports science",
          "Foster innovative thinking and analytical abilities in sports and exercise research",
          "Prepare scholars for leadership roles in academic and sports institutions"
        ],
        pos: [
          "Demonstrate comprehensive understanding of advanced sports science and physical education theories",
          "Design and conduct original research using appropriate methodologies in sports science",
          "Critically analyze research findings and relate them to existing knowledge in the field",
          "Effectively communicate research findings through publications and presentations",
          "Apply ethical standards in sports research and professional activities"
        ],
        psos: [
          "Develop specialized expertise in chosen area of physical education and sports science",
          "Contribute original research that advances the field of sports science",
          "Demonstrate proficiency in advanced sports research techniques and methodologies"
        ],
        curriculumLink: "https://example.com/phd-physical-education-curriculum.pdf"
      }
    ]
  }
];
