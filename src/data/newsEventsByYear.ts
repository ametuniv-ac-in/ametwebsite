
export interface NewsEventItem {
  title: string;
  date?: string;
  isHighlighted?: boolean;
  link?: string;
  linkText?: string;
}

export interface YearlyNewsEvents {
  year: string;
  items: NewsEventItem[];
}

export const newsEventsByYear: YearlyNewsEvents[] = [
  {
    year: "2024-2025",
    items: [
      { title: "Model Examinations – April 2026 for all UG and PG Programs" },
      { title: "End Semester Examinations – April 2026 for all UG and PG Programs" },
      { title: "Admission Open 2025 - 2026", isHighlighted: true },
      { title: "UGC Approved Online / Open Distance Learning (OL/ODL) Programmes - Admissions Open 2024-25", isHighlighted: true },
      { title: "Career Guidance Program - What Next After 12th, on 05 & 06 April 2025", link: "#", linkText: "Register Now!!!" },
      { title: "National Conference on \"Artificial Intelligence Vs Human Intelligence: What stays Unchanged? NCAIHI'2K25\", on 28 Mar 2025" },
      { title: "Notification for End Semester (Arrear) Examinations - May 2025 (Marine Programs / General Programs / Passed Out Students)" },
      { title: "Revised Academic Calendar for the Academic year 2024 - 2025, for all Maritime Programmes (1st Year)" },
      { title: "Revised Academic Calendar for the Academic year 2024 - 2025, for all Maritime Programmes (2nd, 3rd & 4th Years)" },
      { title: "International Conference on Smart Manufacturing, Advanced Materials, and Intelligent Automation - SMAMIA 2025" },
      { title: "Notification for PhD Viva Voce Examination of M.U.Jayanth Sastri, on 05 Mar 2025" },
      { title: "Applications are invited for SRF / JRF Vacancies For the MOES/DOM/81 Project", date: "Last date to apply: 28 Feb 2025", link: "#", linkText: "Application Form" },
      { title: "Six Days FDP (Online) on \"Modern Trends in Mineral Exploration and Mining\", organized by Dept of Mining Engineering, on 17 - 22 Feb 2025" },
      { title: "National Workshop on Toxicological Testing in Environmental Monitoring and Drug Discovery (TT-EMDD-2025), on 26-28, March 2025", link: "#", linkText: "Registration Form" },
      { title: "Notification for Pre-PhD Thesis Presentation of P.N.Shiammala, on 14 Feb 2025" },
      { title: "Notification for PhD Viva Voce Examination of G.B.Jishya, on 10 Feb 2025" },
      { title: "Teacher's Excellence Award 2025, on 15 Feb 2025 (Last date to apply 09 Feb 2025)", link: "#", linkText: "Video!!!" },
      { title: "Graduate Marine Engineering (GME) course - Fully Paid / Sponsored for eligible EWS (Economically Weaker Section) Girls" },
      { title: "14th Convocation, on 04 Jan 2025 / 02:00 PM", link: "#", linkText: "Video!!!" },
      { title: "AIU - South Zone Inter University Table Tennis (Women) Championship 2024-25, on 03-05 Jan 2025" },
      { title: "Notification for PhD Viva Voce Examination of R.Divyaranjani, on 02 Jan 2025" },
      { title: "Notification for Pre-PhD Thesis Presentation of S.Paramagururaj, on 30 Dec 2024" },
      { title: "Notification for Pre-PhD Thesis Presentation of K.Suvetha, on 26 Dec 2024" },
      { title: "Notification for PhD Viva Voce Examination of U.Kalpana, on 24 Dec 2024" },
      { title: "Applications are invited for Dr.Kalam Post Doctoral Fellowships (PDF) and Sir CV Raman Full Time Research Fellowships (JRF)", date: "Last date to apply: 31 Dec 2024" },
      { title: "The Online Entrance Exam for GME & ETO is scheduled to take place on 28 Dec 2024" },
      { title: "AMET Alumni Association is organizing Chennai Chapter Alumni Meet, at Ramada Plaza, Chennai, on 07 Dec 2024" },
      { title: "Notification for PhD Viva Voce Examination of Hannah Rose Esther T, on 05 Dec 2024" },
      { title: "Guest Lecture on \"Bridging the Gap: Strategies for Technology Transfer from Academia to Industry & Basics of IPR for Innovators\", on 29 Nov 2024" },
      { title: "Essay Writing Competition in the celebration of \"Samvidhan Divas - Constitution Day\", organised by AMET Readers Club and AMET Fitness Club, on 28 Nov 2024" },
      { title: "A Special Lecture on \"A Guide to Beginners in Research\", organised by Dr.V.B.S. Rajan Library & AMET NDLI Club, on 28 Nov 2024" },
      { title: "Notification for PhD Viva Voce Examination of K.Balamurugan, on 28 Nov 2024" },
      { title: "Notification for Pre-PhD Thesis Presentation of K.Sangeetha, on 22 Nov 2024" },
      { title: "Applications are invited for MoES-DOM Research Project Positions: JRF & TA, Dept. of Marine Biotechnology", date: "Last date to apply: 30 Nov 2024" },
      { title: "Notification for Pre-PhD Thesis Presentation of K.R.Anupriya, on 28 Oct 2024" },
      { title: "Notification for Pre-PhD Thesis Presentation of E.Kanniappan, on 24 Oct 2024" },
      { title: "Notification for Pre-PhD Thesis Presentation of R.Divyaranjani, on 24 Oct 2024" },
      { title: "Notification for PhD Viva Voce Examination of S.Jivita, on 22 Oct 2024" },
      { title: "Notification for PhD Viva Voce Examination of R.Dorothy, on 21 Oct 2024" },
      
      { title: "Community Development Programme on Awareness towards Aadhaar Enrolment and Updation, Appointment for New Passport / Passport Renewal / Passport Corrections, Pan Card Application and New Pension Schemes by the Post Office, on 14 Oct 2024" },
      { title: "National Workshop on Copepod Culture Techniques for Aqua-Hatcheries, organised by Dept. of Marine Biotechnology, on 26 - 28 Feb 2025" },
      { title: "Applications are invited for Dr.Kalam Post Doctoral Fellowships (PDF) and Sir CV Raman Full Time Research Fellowships (JRF)", date: "Last date to apply: 15 Nov 2024" },
      { title: "Notification for Pre-PhD Thesis Presentation of U.Kalpana, on 09 Oct 2024" },
      { title: "Donate the Eyes; Light the Lives; A Mega Social Outreach Project on Gandhiji's Birthday, Valedictory Ceremony, on 02 Oct 2024", link: "#", linkText: "Video!!!" },
      { title: "Notification of 14th Convocation", date: "Last Date: 05 Oct 2024", link: "#", linkText: "Register Now!!!" },
      { title: "Notification for End Semester (Arrear) Examinations - October 2024", link: "#", linkText: "Arrear Application Form" },
      { title: "Donate Eyes Light The Lives, on 02 Oct 2024" },
      { title: "Register Now!!! Donate Eyes Light The Lives, on 02 Oct 2024" },
      { title: "Notification for Pre-PhD Thesis Presentation of G.B.Jishya, on 19 Sep 2024" },
      { title: "Notification for PhD Viva Voce Examination of M.Sivakumar, on 12 Sep 2024" },
      { title: "Notification for PhD Viva Voce Examination of R.K.Padmashini, on 06 Sep 2024" },
      { title: "Notification for PhD Viva Voce Examination of D.Sathyanarayanan, on 05 Sep 2024" },
      { title: "Results of ODL/OL End Semester Examinations - July 2024" },
      { title: "Academic Calendar for the Academic year 2024 - 2025, for all Maritime and General Programmes" },
      { title: "Time Table of Instant Examinations - Aug 2024 (only for Passed out Students)" },
      { title: "Notification for PhD Viva Voce Examination of P.Hariharan, on 05 Aug 2024" },
      { title: "Notification for Instant Examinations - August 2024 (Only for Passed Out Students)", link: "#", linkText: "Application Form" },
      { title: "Notification for PhD Viva Voce Examination of S.Salai Sivasundari, on 22 Jul 2024" },
      { title: "Applications are invited for Admission to the Ph.D., programme in various departments of the university for August 2024.", date: "Last date for submission on or before 15 Aug 2024" },
      { title: "Time Table of End Semester Examinations – July 2024 for UG and PG courses of Center of Distance and Online Education (CDOE)" },
      { title: "Notification for PhD Viva Voce Examination of G.Jegadeeswari, on 15 Jul 2024" },
      { title: "Notification for Pre-PhD Thesis Presentation of S.Lakshmi, on 04 Jul 2024" },
      { title: "AMET Global Maritime Summit 2024, on 02 July 2024", link: "#", linkText: "Video!!!" },
      { title: "AMET Global Maritime Summit 2024, on 02 July 2024" },
      { title: "The AMET Online CET for ETO is scheduled on 05 July 2024. Candidates those who have cleared the Online CET will be shortlisted and called for a physical interview which will be held on 17 & 18 July 2024, at Chennai and Mumbai centers. Venue details will be given shortly." }
    ]
  },
  {
    year: "2023-2024",
    items: [
      { title: "Admission Information 2023-2024", isHighlighted: true },
      { title: "International Conference on Marine Engineering and Technology, Dec 2023" },
      { title: "Annual Sports Meet 2023-2024" },
      { title: "Graduation Day Ceremony for Batch 2019-2023" },
      { title: "New Research Lab inaugurated in collaboration with Industry Partners" }
    ]
  },
  {
    year: "2022-2023",
    items: [
      { title: "International Maritime Day Celebrations 2023" },
      { title: "National Level Technical Symposium - TechOcean 2022" },
      { title: "Seminar on Career Opportunities in Merchant Navy" },
      { title: "AMET Awarded for Excellence in Maritime Education, 2022" },
      { title: "Memorandum of Understanding signed with Maritime Academy of Asia and the Pacific" }
    ]
  },
  {
    year: "2021-2022",
    items: [
      { title: "Online Admissions Begin for Academic Year 2021-2022" },
      { title: "Virtual Maritime Research Symposium, March 2022" },
      { title: "Webinar Series on Future of Maritime Education Post-COVID" },
      { title: "New Curriculum Framework Implemented for Maritime Programs" },
      { title: "AMET Ranks among Top Maritime Universities Globally" }
    ]
  },
  {
    year: "2020-2021",
    items: [
      { title: "COVID-19 Updates: Online Classes for All Students" },
      { title: "Virtual Alumni Meet 2021" },
      { title: "Launch of New Maritime Research Initiatives" },
      { title: "Online Workshops for Career Development in Maritime Sector" },
      { title: "MoU with Singapore Maritime Institute for Research Collaboration" }
    ]
  },
  {
    year: "2019-2020",
    items: [
      { title: "Orientation Program for New Batch 2019-2023" },
      { title: "Maritime Industry Conclave 2019" },
      { title: "Annual College Festival - Nautical Fiesta 2020" },
      { title: "Seminar on Emerging Technologies in Shipping" },
      { title: "International Faculty Exchange Program Launched" }
    ]
  }
];
