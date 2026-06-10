
import { Computer } from "lucide-react";
import { Department } from "./types";

export const computingSciencesDepartments: Department[] = [
  {
    id: "information-technology",
    name: "Department of Information Technology",
    description: "The Department of Information Technology was established in the year 2007 with the commitment to prepare competent graduates who would be up to the challenge of implementing viable and sound IT solution specifically in marine, nautical and shipping application domains. In view of the need for such professionals, the curriculum is designed to stimulate the students' urge for learning and are nurtured to cater to the demands of industry.\n\nThe Department places equal emphasis on theoretical and practical knowledge in the area of Information Technology. The Department is facilitated with adequate computing infrastructures and a Department library. Having the Faculty with rich expertise on IT domain knowledge, they are able to mentor and facilitate the students to be competent enough for industries, higher studies and research.",
    icon: Computer,
    visionMission: "**Vision**\n\nTo transform the Department into a Centre of Excellence to contribute significantly to Marine based realms through Information Technology (IT) and Information Technology Enabled Services (ITES).\n\n**Mission**\n\n- To provide adaptive learning ambiance in Information Technology and its related fields to enhance problem solving, leadership and teamwork skills of students\n- To enable the students to tap the potentials of information Technology in the marine related domains by adopting innovative teaching – learning techniques\n- To nurture knowledge through cutting-edge research and innovations to enrich the society in meaningful and sustainable ways\n- To inculcate among students the value of commitment, quality, and ethical behavior",
    highlights: [
      "Effective Teaching-Learning through Flipped Class practicing activity based learning to cater to the need of a wide spectrum of learners",
      "Technology Enabled Learning (TEL) for making learning as an experience",
      "CBCS based curriculum is updated at regular period to satisfy the requirements of employability and Higher studies",
      "The department has 2 labs with 120 computer systems of state – of - art to support the core disciplines for their curriculum",
      "Faculty members are actively involved in Research Publications, Innovations through Patent and Industrial, Consultancy Projects",
      "Faculty Development Programmes and Workshops and Invited Talks are organized at regular intervals"
    ],
    facilities: [
      {
        name: "Advanced Computing Lab",
        description: "State-of-the-art computing facilities with high-performance workstations and servers"
      },
      {
        name: "Software Development Studio",
        description: "Collaborative workspace equipped with industry-standard tools and frameworks"
      },
      {
        name: "Cloud Computing Lab",
        description: "Specialized lab for cloud infrastructure design, development, and management"
      }
    ],
    research_areas: [
      "Cloud Computing and Virtualization",
      "Data Science and Big Data Analytics",
      "Cybersecurity and Network Defense",
      "Artificial Intelligence and Machine Learning",
      "Internet of Things (IoT)"
    ],
    collaborations: [
      "Microsoft Research",
      "Google Cloud Platform",
      "Amazon Web Services",
      "IBM Research",
      "National Supercomputing Mission"
    ],
    certifications: [
      "AWS Certified Solutions Architect",
      "Microsoft Azure Certifications",
      "CompTIA Security+",
      "Cisco Certified Network Professional",
      "Oracle Certified Professional"
    ],
    courses: [
      {
        id: "bsc-data-science",
        name: "B.Sc. Data Science",
        category: "UG",
        duration: "3 Years",
        credits: "120",
        admission: "Annual",
        careerPath: "Data Scientist, Data Analyst, Business Intelligence Analyst, Data Engineer",
        description: "Data Science is an interdisciplinary field that combines the magic of programming, mathematics and business. Combined with Machine Learning, it helps to identify a future trend which can be used to derive actionable insights for creating future impact. Students will be encouraged to share the acquired knowledge from the quantitative analysis to programming concept and to further extend to business intelligence. Data science can add value to any business which can use the data well. The programme focuses on topics such as reproducible data analysis, collaborative problem solving, visualization and communication, and security and ethical issues that arise in data science.",
        eligibility: "Duration: 3 years (6 semesters)\n\nEligibility: 10 + 2 (Higher Secondary) with Mathematics mandatory or Computer Science with Mathematics. (Minimum Aggregate of 50%)\n\nSanctioned Strength: 30\n\nMode of Selection: Personal Interview.\n\nAge Limit: Below 25 years at the time of commencement.\n\nBoys and Girls are eligible to apply.",
        curriculumLink: "/curriculum/computing/bsc-data-science.pdf",
        tabs: ["overview", "highlights", "career-prospects", "eligibility", "download-curriculum"],
        programHighlights: [
          "Curriculum designed with inputs from eminent academicians and industry leaders",
          "Well Experienced faculty from Industry and Academicians",
          "Continuous interaction with the Industry experts",
          "ICT Class rooms",
          "Blended Learning",
          "Case Studies and Projects",
          "Practical hands-on training",
          "Internships",
          "Well Equipped Computer Laboratories",
          "Job Placement Assistants with top firms"
        ],
        careerProspects: "Data Science graduates are in high demand across industries including technology, finance, healthcare, e-commerce, and consulting. Career opportunities include roles such as Data Scientist, Data Analyst, Business Intelligence Analyst, Data Engineer, Machine Learning Engineer, and Analytics Consultant. The field offers excellent growth potential with competitive salaries and opportunities to work on cutting-edge technologies and business-critical problems."
      },
      {
        id: "bsc-ai-ml",
        name: "B.Sc. Artificial Intelligence and Machine Learning",
        category: "UG",
        duration: "3 Years",
        credits: "120",
        admission: "Annual",
        careerPath: "AI Engineer, ML Engineer, AI Research Assistant, NLP Specialist",
        description: "Artificial intelligence (AI) is a field of computer science, which makes a computer system that can mimic human intelligence. Machine Learning (ML) is a subfield of Artificial Intelligence, which enables machines to learn from past data or experiences without being explicitly programmed.",
        eligibility: "Duration: 3 years (6 semesters)\n\nEligibility: 10 + 2 (Higher Secondary) with Mathematics mandatory or Computer Science with Mathematics. (Minimum Aggregate of 50%)\n\nSanctioned Strength: 30\n\nMode of Selection: Personal Interview.\n\nAge Limit: Below 25 years at the time of commencement.\n\nBoys and Girls are eligible to apply.",
        curriculumLink: "/curriculum/computing/bsc-ai-ml.pdf",
        tabs: ["overview", "highlights", "career-prospects", "eligibility", "download-curriculum"],
        programHighlights: [
          "Curriculum designed with inputs from eminent academicians and industry leaders",
          "Well Experienced faculty from Industry and Academicians",
          "Continuous interaction with the Industry experts",
          "ICT Class rooms",
          "Blended Learning",
          "Case Studies and Projects",
          "Practical hands-on training",
          "Internships",
          "Well Equipped Computer Laboratories",
          "Job Placement Assistants with top firms",
          "No regular scholarship provided by the university will be applicable for students who are enrolling in our Placement Assured Programme",
          "Eligibility criteria to apply the placement assured programme is above 60% in their +2 examinations"
        ],
        careerProspects: "NASSCOM in its survey on the Future Skills says that the total demand for Artificial Intelligence & Machine Learning, Big Data /Analytics and Computer Science by 2021 is 800,000 and the right talent employable by 2021 is 570,000 creating a shortage of talent pool of 230,000. It also mentions that 1 million professionals are to be reskilled and 1 million potential employees and students to be skilled in the new emerging technologies.\n\nThe career prospects of the graduates are excellent, Graduates could take roles such as:\n\n- AI Engineer\n- Machine Learning Engineer\n- Robotics Scientist\n- Big Data Engineering\n- AI Data Analyst\n- Business Intelligence Developer\n- Research Scientist\n- Machine Learning Engineer"
      },
      {
        id: "bsc-hons-robotics-ai",
        name: "B.Sc. (Hons) Robotics and Artificial Intelligence",
        category: "UG",
        duration: "3 Years",
        credits: "120",
        admission: "Annual",
        careerPath: "Robotics Engineer, AI Researcher, Automation Specialist, Intelligent Systems Developer",
        description: "Artificial intelligence (AI) is a field of computer science, which makes a computer system that can mimic human intelligence. Machine Learning (ML) is a subfield of Artificial Intelligence, which enables machines to learn from past data or experiences without being explicitly programmed.",
        eligibility: "Duration: 3 years (6 semesters)\n\nEligibility: 10 + 2 (Higher Secondary) with Mathematics mandatory or Computer Science with Mathematics. (Minimum Aggregate of 50%)\n\nSanctioned Strength: 30\n\nMode of Selection: Personal Interview.\n\nAge Limit: Below 25 years at the time of commencement.\n\nBoys and Girls are eligible to apply.",
        curriculumLink: "/curriculum/computing/bsc-hons-robotics-ai.pdf",
        tabs: ["overview", "highlights", "career-prospects", "eligibility", "download-curriculum"],
        programHighlights: [
          "Curriculum designed with inputs from eminent academicians and industry leaders",
          "Well Experienced faculty from Industry and Academicians",
          "Continuous interaction with the Industry experts",
          "ICT Class rooms",
          "Blended Learning",
          "Case Studies and Projects",
          "Practical hands-on training",
          "Internships",
          "Well Equipped Computer Laboratories",
          "Job Placement Assistants with top firms",
          "No regular scholarship provided by the university will be applicable for students who are enrolling in our Placement Assured Programme",
          "Eligibility criteria to apply the placement assured programme is above 60% in their +2 examinations"
        ],
        careerProspects: "NASSCOM in its survey on the Future Skills says that the total demand for Artificial Intelligence & Machine Learning, Big Data /Analytics and Computer Science by 2021 is 800,000 and the right talent employable by 2021 is 570,000 creating a shortage of talent pool of 230,000. It also mentions that 1 million professionals are to be reskilled and 1 million potential employees and students to be skilled in the new emerging technologies.\n\nThe career prospects of the graduates are excellent, Graduates could take roles such as:\n\n- AI Engineer\n- Machine Learning Engineer\n- Robotics Scientist\n- Big Data Engineering\n- AI Data Analyst\n- Business Intelligence Developer\n- Research Scientist\n- Machine Learning Engineer"
      },
      {
        id: "bsc-ai-data-science",
        name: "B.Sc Artificial Intelligence and Data Science",
        category: "UG",
        duration: "3 Years",
        credits: "120",
        admission: "Annual",
        careerPath: "AI Data Scientist, ML Engineer, Data Analytics Specialist, AI Solutions Architect",
        description: "Artificial Intelligence and Data Science is an undergraduate degree program that focuses on the interdisciplinary field of artificial intelligence (AI) and data science (DS). It is designed to provide students with a strong foundation in AI and DS technologies, along with the necessary programming, statistical, and mathematical skills to develop intelligent data-driven solutions for real-world problems.\n\nDuration: 3 years (Full-Time) - 6 Semesters\n\nEligibility: 10 + 2 (Higher Secondary) with Mathematics mandatory or Computer Science with Mathematics. (Minimum Aggregate of 50%)\n\nMode of Selection: Personal Interview\n\nAge Limit: Below 25 years at the time of commencement",
        eligibility: "Duration: 3 years (Full-Time) - 6 Semesters\n\nEligibility: 10 + 2 (Higher Secondary) with Mathematics mandatory or Computer Science with Mathematics. (Minimum Aggregate of 50%)\n\nMode of Selection: Personal Interview\n\nAge Limit: Below 25 years at the time of commencement",
        curriculumLink: "/curriculum/computing/bsc-ai-data-science.pdf",
        tabs: ["overview", "career-prospects", "eligibility", "download-curriculum"],
        careerProspects: "The programme empowers students to pursue careers as AI Engineers, Data Scientists, Machine Learning Developers, and Full-Stack Professionals in leading technology firms and startups. With its focus on career readiness, entrepreneurship, and emerging technologies this programme enables graduates to lead confidently in the fast-evolving world of intelligent systems and digital transformation."
      },
      {
        id: "phd-computing",
        name: "Ph.D",
        category: "Research",
        duration: "3-5 Years",
        credits: "N/A",
        admission: "Biannual",
        careerPath: "Research Scientist, Academic Professor, R&D Specialist, Technology Consultant",
        description: "Doctoral program for advanced research in specialized areas of computing sciences, focusing on innovation and technological advancement.",
        eligibility: "M.Sc/M.Tech in relevant discipline with minimum 65% marks",
        curriculumLink: "/curriculum/computing/phd-computing.pdf"
      }
    ]
  }
];
