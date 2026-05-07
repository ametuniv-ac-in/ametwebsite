
import { Bolt } from "lucide-react";
import { Department } from "./types";

export const engineeringDepartments: Department[] = [
  {
    id: "electrical-electronics",
    name: "Department of Electrical and Electronics Engineering",
    description: "Advancing electrical engineering education and research for power systems, electronics, and electrical technologies.",
    icon: Bolt,
    facilities: [
      {
        name: "Power Systems Lab",
        description: "Advanced facility for power systems simulation and analysis"
      },
      {
        name: "Electronics Design Lab",
        description: "State-of-the-art electronics design and fabrication facility"
      },
      {
        name: "Electrical Machines Lab",
        description: "Modern laboratory for electrical machines and drives"
      }
    ],
    research_areas: [
      "Power Systems Engineering",
      "Renewable Energy Integration",
      "Smart Grid Technologies",
      "Power Electronics",
      "Electrical Machines and Drives"
    ],
    collaborations: [
      "IEEE Power & Energy Society",
      "National Power Training Institute",
      "Siemens Energy",
      "ABB Group",
      "Schneider Electric"
    ],
    certifications: [
      "NBA Accreditation",
      "IEEE Recognition",
      "AICTE Approved Programs"
    ],
    courses: [
      {
        id: "be-electrical-computer-engineering",
        name: "B.E Electrical and Computer Engineering",
        category: "UG",
        duration: "4 years",
        credits: "160",
        admission: "JEE Main Score + Counselling",
        careerPath: "Electrical Engineer, Computer Systems Engineer, Power Systems Engineer, Embedded Systems Engineer",
        description: "A comprehensive program combining electrical engineering and computer science fundamentals to prepare graduates for careers at the intersection of hardware and software technologies.",
        eligibility: "Pass in 12th Standard with Physics, Chemistry, Mathematics with minimum 60% aggregate marks",
        ageLimit: "No specific age limit",
        medicalStandard: "General good health",
        lateralEntry: "Available for diploma holders in electrical/electronics engineering directly to second year, subject to seat availability",
        note: "The program includes mandatory industrial training in the third year",
        peos: [
          "Develop professionals with strong foundations in electrical engineering and computer systems",
          "Foster innovation at the intersection of hardware and software technologies",
          "Create industry-ready engineers equipped to solve complex technological challenges"
        ],
        pos: [
          "Apply knowledge of mathematics, science, and engineering principles",
          "Design and conduct experiments, analyze and interpret data",
          "Design systems that integrate hardware and software components",
          "Function effectively in multidisciplinary teams",
          "Identify, formulate, and solve complex engineering problems",
          "Understand professional and ethical responsibilities",
          "Communicate effectively in professional environments",
          "Recognize the need for lifelong learning and engage in continuous professional development"
        ],
        psos: [
          "Apply electrical engineering principles to computer system design and implementation",
          "Integrate hardware and software components for efficient system operation",
          "Develop innovative solutions that bridge electrical engineering and computing technologies"
        ],
        curriculumLink: '#'
      },
      {
        id: "me-power-systems",
        name: "M.E Power Systems",
        category: "PG",
        duration: "2 years",
        credits: "120",
        admission: "GATE Score + Interview",
        careerPath: "Power Systems Engineer, Grid Operations Specialist, Power Distribution Manager, Energy Consultant",
        description: "An advanced program focusing on power generation, transmission, distribution systems, and modern grid technologies with emphasis on sustainable energy integration.",
        eligibility: "B.E/B.Tech in Electrical Engineering or related field with minimum 60% marks",
        ageLimit: "No specific age limit",
        medicalStandard: "General good health",
        lateralEntry: "Not applicable",
        note: "The program includes advanced laboratory work and research project in specialized areas of power systems",
        peos: [
          "Develop advanced expertise in power systems engineering and grid technologies",
          "Foster research capabilities and innovative thinking in electrical power engineering",
          "Create specialists equipped to handle complex challenges in modern power systems"
        ],
        pos: [
          "Apply advanced knowledge of power system analysis and design",
          "Design and optimize complex power transmission and distribution networks",
          "Analyze and solve problems related to grid stability and protection",
          "Integrate renewable energy sources into existing power systems",
          "Conduct independent research in specialized areas of power engineering",
          "Develop sustainable solutions for modern electrical power challenges"
        ],
        psos: [
          "Demonstrate expertise in advanced power systems analysis and design",
          "Apply specialized knowledge to solve complex power engineering problems",
          "Develop innovative solutions for modern electrical grid challenges"
        ],
        curriculumLink: '#'
      }
    ]
  }
];
