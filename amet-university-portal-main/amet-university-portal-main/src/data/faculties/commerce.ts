import { BookText } from "lucide-react";
import { Department } from "./types";

export const commerceDepartments: Department[] = [
  {
    id: "commerce-department",
    name: "Department of Commerce",
    description: "Providing comprehensive education in commerce, finance, accounting and business to develop future business leaders and professionals.",
    icon: BookText,
    visionMission: "**Vision**\n\nTo develop a Global level centre of excellence in the fields of Business, Commerce, Economics and Logistics through value based Education, Training and Research.\n\n**Mission**\n\n- To empower the students in acquiring the knowledge, abilities, and skills needed in the field of commerce to satisfy the global business expectation\n- To enable the commerce Students to adapt social realities changes through acquisition, development and application of knowledge\n- To achieve excellence in Teaching, Training and Research in the areas of Commerce, Business, Economics and Logistics\n- To evaluate our performance continuously and develop new programmes to meet the requirements of stakeholders\n- To prepare students for higher education in Business, Commerce and Economics, Logistics\n- To inculcate the use of Information and Communication Technology in the teaching learning process\n- To monitor and improve the performance of students continuously through Evaluation and Counselling",
    facilities: [
      {
        name: "Department Academic Block",
        description: "VO Chidambaram Block"
      },
      {
        name: "Classrooms with ICT Facility",
        description: "03 fully equipped smart classrooms with modern teaching aids"
      },
      {
        name: "Seminar Halls",
        description: "01 well-equipped seminar hall for academic events and presentations"
      },
      {
        name: "Computer Lab",
        description: "01 computer lab with 40 computers for hands-on practical learning"
      },
      {
        name: "Business Lab",
        description: "Established in Association with AIMA (All India Management Association)"
      },
      {
        name: "ICT Facilities",
        description: "Smart Boards, LCD Projectors, Audio-Video equipment, Video Conferencing equipment, Facilities for Flipped Class activities, and Digital Library Resources"
      },
      {
        name: "Library Facility",
        description: "106 books with 74 titles, 19 Journals (14 National and 5 International)"
      },
      {
        name: "Research Support",
        description: "Encouraging students to enrich their research skills through association and providing financial support to start their own Consultancy projects"
      }
    ],
    research_areas: [
      "Financial Markets",
      "Accounting Systems",
      "Business Analytics",
      "International Trade",
      "E-Commerce"
    ],
    collaborations: [
      "Chamber of Commerce",
      "Certified Public Accountants Association",
      "Major Banking Institutions",
      "Trading Companies"
    ],
    certifications: [
      "UGC Recognition",
      "AICTE Approval",
      "Professional Body Accreditations"
    ],
    courses: [
      {
        id: "bcom-general",
        name: "B.Com (General)",
        category: "UG",
        duration: "3 years",
        credits: "140",
        admission: "Merit-based + Entrance Test",
        careerPath: "Accountant, Financial Analyst, Business Consultant, Banking Professional",
        description: "**Embark on a Journey of Comprehensive Commerce Education**\n\nOur Bachelor of Commerce (B. Com) General program is tailored to provide students with a broad-based understanding of commerce and its various facets. This program is designed for those aspiring to excel in the world of business and finance, offering a blend of theoretical knowledge and practical insight to navigate the complexities of the commercial sector.\n\n**Why Choose Our B. Com General Program?**\n\n- **Versatile Curriculum:** Our B. Com General program encompasses a wide array of subjects including Accounting, Economics, Business Law, Taxation, Finance, and Management. This diverse curriculum ensures that our graduates emerge as well-rounded professionals with a comprehensive understanding of commerce.\n- **Industry-Relevant Education:** We continuously update our curriculum to reflect the latest trends and practices in the global business landscape, ensuring that our students are well-prepared to meet the demands of the industry.\n- **Experiential Learning:** Through case studies, project work, and internships, students gain hands-on experience that enhances their practical knowledge and prepares them for real-world challenges.\n- **Expert Faculty:** Our faculty members are seasoned professionals and scholars who bring a wealth of knowledge and experience to the classroom, providing students with rich insights into the intricacies of commerce.\n\n**Program Highlights**\n\n- **Foundational Excellence:** Start your journey with a solid foundation in core commerce subjects, enabling you to understand and analyze business operations and financial transactions.\n- **Skill Development:** Alongside technical knowledge, we emphasize the development of essential skills such as analytical thinking, effective communication, and ethical decision-making.\n- **Career Opportunities:** Graduates of our B. Com General program are well-equipped to pursue a variety of career paths in sectors such as banking, consulting, accounting, finance, and entrepreneurship.\n- **Networking Opportunities:** Leverage our strong industry connections through guest lectures, workshops, and seminars that provide networking opportunities with professionals and potential employers.\n\nOur B. Com General program is the stepping stone to a successful career in commerce, offering a dynamic and supportive learning environment. We are committed to nurturing the next generation of business leaders and professionals who are capable of making a positive impact in the business world.\n\nJoin us to embark on a transformative educational journey that bridges theoretical knowledge with practical application, opening doors to a world of opportunities in the realm of commerce.\n\n**Duration:** 3 years (6 semesters)\n\n**Eligibility:** 10 + 2 (Higher Secondary)\n\n**Sanctioned Strength:** 30\n\nBoys and Girls are eligible to apply.\n\n**Minor Degree Programme**\n- Digital Marketing\n- Supply Chain Management\n- Banking and Insurance\n- Financial Analytics\n- Customer Relationship Management\n- International Business\n- Artificial Intelligence",
        eligibility: "Pass in 12th Standard (Commerce stream preferred) with minimum 50% aggregate marks.",
        ageLimit: "No specific age limit",
        medicalStandard: "General good health",
        lateralEntry: "Available for diploma holders in commerce/business subjects directly to second year, subject to seat availability",
        note: "The program offers specialization options in the final year in areas like Accounting, Finance, Banking, and Taxation.",
        peos: [
          "Develop commerce professionals with strong financial and accounting knowledge",
          "Foster analytical thinking and problem-solving abilities in business contexts",
          "Create ethically responsible business professionals with global perspective"
        ],
        pos: [
          "Apply principles of accounting, finance, and business in practical scenarios",
          "Analyze financial statements and make informed business decisions",
          "Understand the legal and regulatory framework governing business operations",
          "Develop effective communication skills for business environments",
          "Apply ethical principles in business decision-making processes",
          "Understand the impact of global economic trends on business operations",
          "Apply quantitative techniques to solve business problems",
          "Develop entrepreneurial mindset and leadership qualities"
        ],
        psos: [
          "Demonstrate comprehensive knowledge of commerce, accounting, and finance principles",
          "Apply theoretical concepts to practical business situations and decision-making",
          "Develop proficiency in using technology for business applications and financial analysis"
        ],
        curriculumLink: '#',
        curriculumDownload: '/curriculum/BCom-General.pdf',
        tabs: ['overview', 'eligibility', 'download-curriculum']
      },
      {
        id: "bcom-fintech-ai",
        name: "B.Com. Financial Technology (FinTech) and Artificial Intelligence (AI)",
        category: "UG",
        duration: "3 years (Full-Time) - 6 Semesters",
        credits: "140",
        admission: "Admission Test and Personal Interview",
        careerPath: "FinTech Analyst, AI Solutions Developer, Digital Banking Specialist, Blockchain Developer",
        description: "**About the Programme**\n\nA Bachelor of Commerce (BCom) in Financial Technology (FinTech) and Artificial Intelligence (AI) is an undergraduate program designed to prepare students for careers in the rapidly evolving fields of finance, technology, and AI-driven financial solutions. This program integrates core commerce subjects with emerging technologies, equipping students with the knowledge and skills to drive innovation in the financial sector.\n\n**Duration:** 3 years (Full-Time) - 6 Semesters\n\n**Eligibility:** Pass in Higher Secondary with 50% marks\n\n**Mode of Selection:** Admission Test and Personal Interview",
        eligibility: "Pass in Higher Secondary with 50% marks",
        curriculumLink: '#'
      },
      {
        id: "phd-commerce",
        name: "Ph.D",
        category: "Research",
        duration: "3-5 Years",
        credits: "N/A",
        admission: "Research Proposal + Interview",
        careerPath: "Research Scientist, Academic Professor, Policy Advisor, Business Consultant",
        description: "Doctoral program for advanced research in specialized areas of commerce, finance, accounting, and business management. The program focuses on developing research scholars who can contribute to knowledge creation and innovation in commerce and related disciplines.",
        eligibility: "M.Com or MBA with minimum 55% marks (50% for reserved categories)",
        curriculumLink: '#'
      }
    ]
  }
];
