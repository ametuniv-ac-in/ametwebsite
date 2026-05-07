export interface PageSEO {
  title: string;
  description: string;
  keywords?: string;
}

export const seoConfig: Record<string, PageSEO> = {
  // Home
  '/': {
    title: 'Deemed to be University - Chennai, India',
    description: 'AMET University - India\'s premier maritime university offering undergraduate, postgraduate, and doctoral programs in Marine Engineering, Naval Architecture, Nautical Science, and more.',
    keywords: 'AMET University, maritime university, marine engineering, naval architecture, nautical science, Chennai university, deemed university'
  },

  // About Section
  '/about': {
    title: 'About AMET',
    description: 'Learn about AMET University\'s history, vision, mission, and commitment to maritime education excellence since 1993. Deemed to be University under UGC Act 1956.',
    keywords: 'about AMET, maritime university history, AMET vision mission, Chennai university'
  },
  '/objectives': {
    title: 'Objectives',
    description: 'AMET University\'s educational objectives and goals for maritime excellence. Discover our commitment to quality education and research in maritime sciences.',
    keywords: 'AMET objectives, university goals, maritime education objectives, academic excellence'
  },
  '/awards': {
    title: 'Awards & Achievements',
    description: 'Awards and recognitions received by AMET University for excellence in maritime education, research, and innovation.',
    keywords: 'AMET awards, university achievements, maritime education awards, recognition'
  },
  '/policies': {
    title: 'University Policies',
    description: 'AMET University policies and guidelines covering academic, administrative, and student welfare matters.',
    keywords: 'AMET policies, university guidelines, academic policies, student policies'
  },
  '/ranking-accreditation': {
    title: 'Ranking & Accreditation',
    description: 'AMET University rankings and accreditations including NAAC Grade A, NBA, NIRF, and other recognitions.',
    keywords: 'AMET ranking, NAAC accreditation, NBA, NIRF ranking, university accreditation'
  },

  // Faculties & Academics
  '/faculties': {
    title: 'Faculty',
    description: 'Explore AMET University\'s 8 faculty divisions offering programs in Maritime Studies, Engineering, Science, Management, and more.',
    keywords: 'AMET faculty, maritime faculty, engineering faculty, academic departments'
  },
  '/academic-calendar': {
    title: 'Academic Calendar',
    description: 'AMET University academic calendar with important dates, examination schedules, and semester timelines.',
    keywords: 'academic calendar, AMET calendar, semester dates, examination schedule'
  },
  '/international-affairs': {
    title: 'International Affairs',
    description: 'AMET University\'s global partnerships, international collaborations, and foreign student programs.',
    keywords: 'international affairs, global partnerships, foreign students, international collaboration'
  },
  '/mentor-mentee': {
    title: 'Mentor-Mentee Program',
    description: 'AMET University\'s student mentorship programs connecting students with experienced faculty mentors.',
    keywords: 'mentor mentee, student mentorship, faculty mentors, academic guidance'
  },
  '/student-executive-council': {
    title: 'Student Executive Council',
    description: 'Student leadership and governance at AMET University. Learn about student council activities and representation.',
    keywords: 'student council, student leadership, student governance, AMET SEC'
  },
  '/student-corner': {
    title: 'Student Corner',
    description: 'Resources, information, and services for AMET University students including forms, guidelines, and support.',
    keywords: 'student resources, student services, AMET students, campus life'
  },
  '/nep-2020': {
    title: 'NEP 2020',
    description: 'National Education Policy 2020 implementation at AMET University. Learn about academic reforms and innovations.',
    keywords: 'NEP 2020, National Education Policy, academic reforms, education policy'
  },
  '/physical-education': {
    title: 'Physical Education',
    description: 'Sports and physical education facilities, programs, and achievements at AMET University.',
    keywords: 'physical education, sports, AMET sports, fitness programs'
  },
  '/cbcs-regulations': {
    title: 'CBCS Regulations',
    description: 'Choice Based Credit System regulations and guidelines for AMET University students.',
    keywords: 'CBCS, credit system, academic regulations, course credits'
  },
  '/video-lectures': {
    title: 'Video Lectures',
    description: 'Online video lectures and e-learning resources for AMET University students.',
    keywords: 'video lectures, e-learning, online education, AMET videos'
  },

  // E-Content
  '/e-content-2015-16': {
    title: 'E-Content 2015-16',
    description: 'Digital learning materials and e-content resources from academic year 2015-16.',
    keywords: 'e-content, digital learning, 2015-16, learning materials'
  },
  '/e-content-2016-17': {
    title: 'E-Content 2016-17',
    description: 'Digital learning materials and e-content resources from academic year 2016-17.',
    keywords: 'e-content, digital learning, 2016-17, learning materials'
  },
  '/e-content-2017-18': {
    title: 'E-Content 2017-18',
    description: 'Digital learning materials and e-content resources from academic year 2017-18.',
    keywords: 'e-content, digital learning, 2017-18, learning materials'
  },
  '/e-content-2018-19': {
    title: 'E-Content 2018-19',
    description: 'Digital learning materials and e-content resources from academic year 2018-19.',
    keywords: 'e-content, digital learning, 2018-19, learning materials'
  },
  '/e-content-2019-20': {
    title: 'E-Content 2019-20',
    description: 'Digital learning materials and e-content resources from academic year 2019-20.',
    keywords: 'e-content, digital learning, 2019-20, learning materials'
  },

  // Admissions Section
  '/admissions': {
    title: 'Admissions Overview',
    description: 'Apply to AMET University. Discover admission procedures, eligibility criteria, and application deadlines for maritime and engineering programs.',
    keywords: 'AMET admissions, maritime admission, B.Tech admission, university application, Chennai'
  },
  '/programs-offered': {
    title: 'Programs Offered',
    description: 'Explore UG, PG, and PhD programs at AMET University including Marine Engineering, Naval Architecture, MBA, and more.',
    keywords: 'AMET programs, B.Tech, M.Tech, MBA, PhD, maritime courses'
  },
  '/courses': {
    title: 'Courses',
    description: 'Browse all academic courses offered at AMET University across various faculties and disciplines.',
    keywords: 'AMET courses, academic programs, maritime courses, engineering courses'
  },
  '/scholarship': {
    title: 'Scholarships',
    description: 'Merit and need-based scholarships available at AMET University. Learn about eligibility and application process.',
    keywords: 'AMET scholarships, merit scholarship, financial aid, student scholarships'
  },
  '/prospectus': {
    title: 'Prospectus 2025-26',
    description: 'Download AMET University prospectus 2025-26 with complete program details, fee structure, and admission information.',
    keywords: 'AMET prospectus, university brochure, 2025-26, admission guide'
  },
  '/fee-structure': {
    title: 'Fee Structure',
    description: 'AMET University program fees and payment details for all undergraduate, postgraduate, and doctoral programs.',
    keywords: 'AMET fees, tuition fees, program fees, fee structure'
  },
  '/admission-policy': {
    title: 'Admission Policy',
    description: 'AMET University admission rules, eligibility criteria, and selection process for various programs.',
    keywords: 'admission policy, eligibility criteria, selection process, admission rules'
  },
  '/application-forms': {
    title: 'Application Forms',
    description: 'Download AMET University admission application forms for various programs and courses.',
    keywords: 'application forms, admission forms, download forms, AMET application'
  },
  '/vships-admission': {
    title: 'V.Ships Admission',
    description: 'V.Ships maritime cadet sponsorship and admission program at AMET University.',
    keywords: 'V.Ships, cadet sponsorship, maritime training, shipping career'
  },
  '/kalvi-career': {
    title: 'Kalvi Career',
    description: 'Kalvi career counseling and guidance services at AMET University.',
    keywords: 'Kalvi career, career counseling, career guidance, student counseling'
  },
  '/face-prep-campus': {
    title: 'FacePrep Campus',
    description: 'FacePrep campus placement preparation and training programs at AMET University.',
    keywords: 'FacePrep, placement preparation, campus training, interview prep'
  },
  '/emversity': {
    title: 'Emversity',
    description: 'Emversity online learning platform and digital education resources at AMET University.',
    keywords: 'Emversity, online learning, digital education, e-learning platform'
  },
  '/diversity': {
    title: 'Diversity',
    description: 'AMET University\'s commitment to diversity and inclusive admission policies.',
    keywords: 'diversity, inclusion, equal opportunity, student diversity'
  },
  '/guidelines-indian': {
    title: 'Guidelines for Indian Students',
    description: 'Admission guidelines and requirements for Indian students applying to AMET University.',
    keywords: 'Indian students, admission guidelines, domestic students, application process'
  },
  '/guidelines-international': {
    title: 'Guidelines for International Students',
    description: 'Admission guidelines, visa requirements, and support for international students at AMET University.',
    keywords: 'international students, foreign students, visa, admission guidelines'
  },

  // Research Section
  '/research': {
    title: 'Research & Development',
    description: 'AMET University research initiatives, publications, and doctoral programs in maritime and engineering fields.',
    keywords: 'AMET research, maritime research, PhD programs, research development'
  },
  '/research-development': {
    title: 'Research & Development',
    description: 'Explore AMET University\'s research initiatives, publications, and doctoral programs in maritime and engineering fields.',
    keywords: 'AMET research, maritime research, PhD programs, R&D Chennai'
  },
  '/research-ecosystem': {
    title: 'Research Ecosystem',
    description: 'AMET University research infrastructure, laboratories, and collaborative research environment.',
    keywords: 'research ecosystem, research labs, research infrastructure, collaborative research'
  },
  '/academic-research': {
    title: 'Academic Research',
    description: 'Academic research programs and doctoral studies at AMET University.',
    keywords: 'academic research, doctoral studies, PhD research, research scholars'
  },
  '/phd-programmes': {
    title: 'PhD/D.Sc. Programmes',
    description: 'Doctoral programs offered at AMET University including PhD and D.Sc. in various disciplines.',
    keywords: 'PhD programs, D.Sc., doctoral studies, research degrees'
  },
  '/phd-regulations': {
    title: 'PhD Regulations',
    description: 'Rules and regulations governing PhD programs at AMET University.',
    keywords: 'PhD regulations, doctoral rules, research guidelines, thesis requirements'
  },
  '/phd-admission-requirements': {
    title: 'PhD Admission Requirements',
    description: 'Eligibility criteria and admission requirements for PhD programs at AMET University.',
    keywords: 'PhD admission, eligibility criteria, research admission, doctoral application'
  },
  '/dsc-regulations': {
    title: 'D.Sc. Regulations',
    description: 'Doctor of Science degree regulations and requirements at AMET University.',
    keywords: 'D.Sc. regulations, Doctor of Science, higher doctorate, research degree'
  },
  '/doctoral-committee-procedure': {
    title: 'Doctoral Committee Procedure',
    description: 'Doctoral Committee meeting procedures and guidelines for PhD scholars at AMET University.',
    keywords: 'doctoral committee, DC meeting, research progress, PhD supervision'
  },
  '/course-work-examinations': {
    title: 'Course Work Examinations',
    description: 'PhD coursework details and examination procedures at AMET University.',
    keywords: 'PhD coursework, course examinations, research methodology, doctoral courses'
  },
  '/phd-evaluation-procedures': {
    title: 'PhD Evaluation Procedures',
    description: 'Thesis evaluation process and viva-voce procedures for PhD scholars at AMET University.',
    keywords: 'PhD evaluation, thesis evaluation, viva voce, dissertation review'
  },
  '/phd-awarded-list': {
    title: 'PhD Awarded List',
    description: 'List of PhD degrees awarded by AMET University across various disciplines.',
    keywords: 'PhD awarded, doctoral degrees, research scholars, completed PhDs'
  },
  '/phd-scholars-list': {
    title: 'PhD Scholars List',
    description: 'Current PhD research scholars and their research areas at AMET University.',
    keywords: 'PhD scholars, research scholars, doctoral students, ongoing research'
  },
  '/supervisors-list': {
    title: 'PhD Supervisors',
    description: 'List of approved PhD supervisors and their research specializations at AMET University.',
    keywords: 'PhD supervisors, research guides, doctoral supervisors, faculty guides'
  },
  '/phd-forms': {
    title: 'PhD Forms',
    description: 'Downloadable forms for PhD scholars at AMET University including registration and progress reports.',
    keywords: 'PhD forms, research forms, doctoral forms, download forms'
  },

  // Examination Section
  '/examination': {
    title: 'Controller of Examinations',
    description: 'AMET University Controller of Examinations office - examination administration and management.',
    keywords: 'COE, examinations, exam office, AMET examination'
  },
  '/examination/reforms': {
    title: 'Reforms & IT Integration',
    description: 'Examination reforms and IT integration initiatives at AMET University.',
    keywords: 'exam reforms, IT integration, examination automation, digital exams'
  },
  '/examination/announcement': {
    title: 'Exam Announcements',
    description: 'Latest examination notifications and announcements from AMET University.',
    keywords: 'exam announcements, notifications, exam updates, examination news'
  },
  '/examination/timetable': {
    title: 'Exam Timetable',
    description: 'Semester examination schedules and timetables for all programs at AMET University.',
    keywords: 'exam timetable, exam schedule, semester exams, examination dates'
  },
  '/examination/forms': {
    title: 'Examination Forms',
    description: 'Download examination application forms including hall tickets and registration forms.',
    keywords: 'exam forms, hall ticket, registration form, examination application'
  },
  '/examination/fees': {
    title: 'Examination Fees',
    description: 'Fee structure for examinations including regular, supplementary, and revaluation fees.',
    keywords: 'exam fees, examination charges, fee structure, revaluation fees'
  },
  '/examination/results': {
    title: 'Exam Results',
    description: 'View and download examination results and grade sheets from AMET University.',
    keywords: 'exam results, grades, marksheet, result publication'
  },
  '/examination/verification': {
    title: 'Certificate Verification',
    description: 'e-SAND certificate verification service for employers and institutions.',
    keywords: 'certificate verification, e-SAND, document verification, degree verification'
  },
  '/examination/convocation': {
    title: 'Convocation',
    description: 'AMET University convocation ceremony details and graduation information.',
    keywords: 'convocation, graduation, degree ceremony, AMET convocation'
  },
  '/examination/phd-coursework': {
    title: 'PhD Coursework Exams',
    description: 'PhD coursework examination details and schedules at AMET University.',
    keywords: 'PhD coursework, doctoral exams, research methodology exam'
  },
  '/examination/nad-cell': {
    title: 'NAD Cell',
    description: 'National Academic Depository cell for digital degree verification and storage.',
    keywords: 'NAD, academic depository, digital degrees, document storage'
  },

  // DSW Section
  '/directorate-students-welfare': {
    title: 'Directorate of Students Welfare',
    description: 'AMET University Directorate of Students Welfare - comprehensive student support and services.',
    keywords: 'DSW, student welfare, student support, campus services'
  },
  '/directorate-students-welfare/s3-centre': {
    title: 'S3 Centre',
    description: 'Student Support Services Centre providing counseling and assistance at AMET University.',
    keywords: 'S3 Centre, student support, counseling, student assistance'
  },
  '/directorate-students-welfare/hall-of-residence': {
    title: 'Hall of Residence',
    description: 'AMET University hostel facilities and residential accommodation for students.',
    keywords: 'hostel, residence, accommodation, student housing, dormitory'
  },
  '/directorate-students-welfare/ametunispo': {
    title: 'AMETUNISPO',
    description: 'AMET University Sports Organization - sports activities and athletic programs.',
    keywords: 'AMETUNISPO, sports, athletics, university sports, games'
  },
  '/directorate-students-welfare/student-council': {
    title: 'Student Council',
    description: 'Student council activities and student government at AMET University.',
    keywords: 'student council, student government, student leadership'
  },
  '/directorate-students-welfare/nss': {
    title: 'NSS',
    description: 'National Service Scheme activities and community service programs at AMET University.',
    keywords: 'NSS, National Service Scheme, community service, social service'
  },
  '/directorate-students-welfare/ncc': {
    title: 'NCC',
    description: 'National Cadet Corps unit and activities at AMET University.',
    keywords: 'NCC, National Cadet Corps, cadet training, military training'
  },
  '/directorate-students-welfare/cultural-club': {
    title: 'Cultural Club',
    description: 'Arts and cultural activities, festivals, and events at AMET University.',
    keywords: 'cultural club, arts, festivals, cultural events, student activities'
  },
  '/directorate-students-welfare/unnat-bharat': {
    title: 'Unnat Bharat Abhiyan',
    description: 'Unnat Bharat Abhiyan rural development and village adoption program at AMET University.',
    keywords: 'Unnat Bharat, rural development, village adoption, community outreach'
  },
  '/directorate-students-welfare/swachhta-pakhwada': {
    title: 'Swachhta Pakhwada',
    description: 'Swachhta Pakhwada cleanliness campaign and sanitation initiatives at AMET University.',
    keywords: 'Swachhta Pakhwada, cleanliness, sanitation, clean campus'
  },
  '/directorate-students-welfare/health-care': {
    title: 'Health Care Centre',
    description: 'Medical facilities and health care services for students at AMET University.',
    keywords: 'health care, medical centre, student health, medical facilities'
  },
  '/directorate-students-welfare/mess-committee': {
    title: 'Mess Committee',
    description: 'Dining services and mess committee activities at AMET University hostels.',
    keywords: 'mess committee, dining, food services, hostel mess'
  },
  '/directorate-students-welfare/service-request': {
    title: 'Service Request',
    description: 'Student service request forms and support ticket system at AMET University.',
    keywords: 'service request, support ticket, student services, help desk'
  },

  // Governance Section
  '/governance': {
    title: 'Governance',
    description: 'AMET University governance structure and administrative bodies.',
    keywords: 'governance, administration, university management, academic governance'
  },
  '/governance/officials': {
    title: 'University Officials',
    description: 'Key university officials including Vice-Chancellor, Registrar, and other administrators.',
    keywords: 'officials, Vice-Chancellor, Registrar, university administration'
  },
  '/governance/executive-council': {
    title: 'Executive Council',
    description: 'Executive Council members and functions at AMET University.',
    keywords: 'Executive Council, EC members, university council, governance body'
  },
  '/governance/deans-directors': {
    title: 'Deans & Directors',
    description: 'Academic leadership including Deans and Directors at AMET University.',
    keywords: 'Deans, Directors, academic leadership, faculty heads'
  },
  '/governance/academic-council': {
    title: 'Academic Council',
    description: 'Academic Council composition and responsibilities at AMET University.',
    keywords: 'Academic Council, academic governance, curriculum approval'
  },
  '/governance/faculty-chairpersons': {
    title: 'Faculty Chairpersons',
    description: 'Department heads and faculty chairpersons at AMET University.',
    keywords: 'chairpersons, department heads, faculty leaders'
  },
  '/governance/planning-monitoring': {
    title: 'Planning & Monitoring Board',
    description: 'Planning and Monitoring Board details and strategic planning at AMET University.',
    keywords: 'PMB, planning board, strategic planning, university development'
  },
  '/governance/finance-committee': {
    title: 'Finance Committee',
    description: 'Finance Committee and financial governance at AMET University.',
    keywords: 'Finance Committee, financial governance, budget, accounts'
  },
  '/governance/coordinators': {
    title: 'Coordinators',
    description: 'Program coordinators and special cell coordinators at AMET University.',
    keywords: 'coordinators, program coordinators, cell coordinators'
  },
  '/governance/organogram': {
    title: 'Organogram',
    description: 'AMET University organizational structure and hierarchy chart.',
    keywords: 'organogram, organization structure, hierarchy, administrative structure'
  },

  // Library Section
  '/library': {
    title: 'Central Library',
    description: 'AMET University Central Library - resources, services, and facilities for academic excellence.',
    keywords: 'library, central library, AMET library, academic resources'
  },
  '/library/resources': {
    title: 'Library Resources',
    description: 'E-journals, e-books, databases, and digital resources at AMET University Library.',
    keywords: 'library resources, e-journals, e-books, digital library, databases'
  },
  '/library/automation-services': {
    title: 'Library Automation & Services',
    description: 'KOHA Integrated Library Management System and library services at AMET University.',
    keywords: 'KOHA ILMS, library automation, library services, digital catalog'
  },
  '/library/membership-sharing': {
    title: 'Library Membership & Resource Sharing',
    description: 'Library membership details and inter-library resource sharing facilities.',
    keywords: 'library membership, resource sharing, inter-library loan, DELNET'
  },
  '/library/rules': {
    title: 'Library Rules',
    description: 'Library rules and regulations for users at AMET University.',
    keywords: 'library rules, regulations, borrowing rules, library guidelines'
  },
  '/library/phd-thesis': {
    title: 'PhD Thesis Repository',
    description: 'PhD thesis collection and repository at AMET University Library.',
    keywords: 'PhD thesis, thesis repository, dissertations, research archives'
  },
  '/library/committee-staff': {
    title: 'Library Committee & Staff',
    description: 'Library committee members and staff directory at AMET University.',
    keywords: 'library committee, library staff, librarian, library team'
  },
  '/library/important-links': {
    title: 'Important Links',
    description: 'Important online resources and reference links from AMET University Library.',
    keywords: 'important links, online resources, reference links, academic links'
  },

  // Placement Section
  '/placements': {
    title: 'Training & Placement',
    description: 'AMET University Training and Placement Cell - career services, campus recruitment, and industry partnerships.',
    keywords: 'placements, training, campus recruitment, career services, jobs'
  },
  '/placement/director': {
    title: 'Placement Director',
    description: 'Message from the Director of Training and Placement at AMET University.',
    keywords: 'placement director, T&P director, career guidance'
  },
  '/placement/recruiters': {
    title: 'Our Recruiters',
    description: 'Companies and organizations recruiting from AMET University campus.',
    keywords: 'recruiters, companies, campus recruitment, hiring partners'
  },
  '/placement/maersk-excellence': {
    title: 'Maersk Excellence Centre',
    description: 'Maersk Training Excellence Centre partnership and programs at AMET University.',
    keywords: 'Maersk, excellence centre, shipping training, maritime career'
  },
  '/placement/admission-recruitment': {
    title: 'Campus Recruitment',
    description: 'Campus recruitment process and hiring procedures at AMET University.',
    keywords: 'campus recruitment, hiring process, placement process, interviews'
  },
  '/placement/activities': {
    title: 'Placement Activities',
    description: 'Career events, workshops, and placement activities at AMET University.',
    keywords: 'placement activities, career events, workshops, job fairs'
  },
  '/placement/assessment': {
    title: 'Skill Assessment',
    description: 'Student skill assessment and evaluation programs at AMET University.',
    keywords: 'skill assessment, aptitude test, evaluation, competency'
  },
  '/placement/training-rules': {
    title: 'Training Rules',
    description: 'Internship and training guidelines for students at AMET University.',
    keywords: 'training rules, internship guidelines, industrial training'
  },
  '/placement/sop': {
    title: 'Placement SOP',
    description: 'Standard Operating Procedures for placements at AMET University.',
    keywords: 'placement SOP, procedures, guidelines, placement rules'
  },
  '/testimonials': {
    title: 'Testimonials',
    description: 'Alumni experiences and testimonials from AMET University graduates.',
    keywords: 'testimonials, alumni, success stories, graduate experiences'
  },
  '/placement/testimonial': {
    title: 'Placement Testimonials',
    description: 'Placement success stories and alumni testimonials from AMET University.',
    keywords: 'placement testimonials, success stories, placed students'
  },

  // Gallery Section
  '/gallery': {
    title: 'Photo Gallery',
    description: 'AMET University photo gallery showcasing campus events, infrastructure, and activities.',
    keywords: 'gallery, photos, campus events, AMET images'
  },
  '/gallery/events': {
    title: 'Events Gallery',
    description: 'Photos from campus events, celebrations, and activities at AMET University.',
    keywords: 'events gallery, campus events, celebrations, functions'
  },
  '/gallery/infrastructure': {
    title: 'Infrastructure Gallery',
    description: 'Campus infrastructure and facility photos at AMET University.',
    keywords: 'infrastructure, campus facilities, buildings, amenities'
  },
  '/gallery/laboratories': {
    title: 'Laboratories Gallery',
    description: 'Laboratory facilities and equipment photos at AMET University.',
    keywords: 'laboratories, lab equipment, research facilities, practical labs'
  },
  '/gallery/videos': {
    title: 'Video Gallery',
    description: 'AMET University video gallery featuring campus tours, events, and promotional content.',
    keywords: 'videos, video gallery, campus tour, AMET videos'
  },
  '/gallery/extension-activities': {
    title: 'Extension Activities',
    description: 'Community outreach and extension activities at AMET University.',
    keywords: 'extension activities, community outreach, social service, outreach programs'
  },

  // Disclosure Section
  '/disclosures/mandatory': {
    title: 'Mandatory Disclosure',
    description: 'UGC mandatory disclosure information for AMET University.',
    keywords: 'mandatory disclosure, UGC disclosure, university information'
  },
  '/disclosures/odl-ol': {
    title: 'ODL Mandatory Disclosure',
    description: 'Open and Distance Learning mandatory disclosure at AMET University.',
    keywords: 'ODL disclosure, distance education, online learning disclosure'
  },
  '/disclosures/public-self': {
    title: 'Public Self Disclosure',
    description: 'Public self disclosure and transparency report from AMET University.',
    keywords: 'public disclosure, transparency, self disclosure'
  },
  '/disclosures/fcra': {
    title: 'FCRA Disclosure',
    description: 'Foreign Contribution Regulation Act disclosure from AMET University.',
    keywords: 'FCRA, foreign contributions, regulatory compliance'
  },

  // Other Pages
  '/contact': {
    title: 'Contact Us',
    description: 'Contact AMET University - address, phone, email, and inquiry form for admissions and general queries.',
    keywords: 'contact AMET, address, phone, email, enquiry, Chennai'
  },
  '/contact-us': {
    title: 'Contact Us',
    description: 'Get in touch with AMET University for admissions, academics, and general inquiries.',
    keywords: 'contact, enquiry, admissions contact, university address'
  },
  '/career': {
    title: 'Career Opportunities',
    description: 'Job openings and career opportunities at AMET University.',
    keywords: 'careers, jobs, employment, vacancies, faculty positions'
  },
  '/iqac': {
    title: 'IQAC',
    description: 'Internal Quality Assurance Cell at AMET University ensuring academic excellence.',
    keywords: 'IQAC, quality assurance, academic quality, NAAC'
  },
  '/members-of-iqac': {
    title: 'IQAC Members',
    description: 'IQAC committee members and their roles at AMET University.',
    keywords: 'IQAC members, committee, quality assurance team'
  },
  '/iiic': {
    title: 'IIIC',
    description: 'Industry-Institution Interaction Cell fostering industry partnerships at AMET University.',
    keywords: 'IIIC, industry interaction, corporate partnerships, industry connect'
  },
  '/aceii': {
    title: 'ACE II',
    description: 'Academic Centre of Excellence Phase II at AMET University.',
    keywords: 'ACE II, centre of excellence, academic excellence'
  },
  '/oprc-level-2': {
    title: 'OPRC Level 2',
    description: 'Oil Pollution Response Certificate Level 2 training at AMET University.',
    keywords: 'OPRC, oil pollution, maritime training, IMO certified'
  },
  '/anti-ragging': {
    title: 'Anti-Ragging',
    description: 'Anti-ragging policy, committee, and measures at AMET University.',
    keywords: 'anti-ragging, ragging prevention, student safety, UGC guidelines'
  },
  '/sexual-harassment': {
    title: 'Internal Complaints Committee',
    description: 'Internal Complaints Committee for prevention of sexual harassment at AMET University.',
    keywords: 'ICC, sexual harassment, women safety, POSH Act'
  },
  '/grievance-redressal': {
    title: 'Grievance Redressal',
    description: 'Student grievance redressal mechanisms and complaint process at AMET University.',
    keywords: 'grievance redressal, complaints, student grievance, ombudsman'
  },
  '/amet-waves': {
    title: 'AMET Waves',
    description: 'AMET Waves university newsletter featuring news, achievements, and updates.',
    keywords: 'AMET Waves, newsletter, university news, campus updates'
  },
  '/magazines': {
    title: 'Magazines',
    description: 'University magazines and publications from AMET University.',
    keywords: 'magazines, publications, university magazine, student publications'
  },
  '/international-collaborations': {
    title: 'International Collaborations',
    description: 'Global academic partnerships and international collaborations at AMET University.',
    keywords: 'international collaborations, global partnerships, MoU, foreign universities'
  },
  '/mou': {
    title: 'MoUs',
    description: 'Memoranda of Understanding with industry and academic institutions.',
    keywords: 'MoU, memorandum, partnerships, agreements, collaborations'
  },
  '/outreach-programs': {
    title: 'Outreach Programs',
    description: 'Community engagement and outreach programs at AMET University.',
    keywords: 'outreach programs, community service, extension activities, social responsibility'
  },
  '/privacy-policy': {
    title: 'Privacy Policy',
    description: 'AMET University data privacy policy and information handling practices.',
    keywords: 'privacy policy, data protection, information security'
  },
  '/refund-policy': {
    title: 'Refund Policy',
    description: 'AMET University fee refund guidelines and policies.',
    keywords: 'refund policy, fee refund, cancellation, refund guidelines'
  },
  '/naac': {
    title: 'NAAC Accreditation',
    description: 'NAAC Grade A accreditation details and quality assessment at AMET University.',
    keywords: 'NAAC, accreditation, Grade A, quality assessment'
  },
  '/nirf': {
    title: 'NIRF Ranking',
    description: 'National Institutional Ranking Framework ranking of AMET University.',
    keywords: 'NIRF, ranking, national ranking, university ranking'
  },
  '/ariia': {
    title: 'ARIIA',
    description: 'Atal Ranking of Institutions on Innovation Achievements at AMET University.',
    keywords: 'ARIIA, innovation ranking, research innovation, startup'
  },
  '/nba': {
    title: 'NBA Accreditation',
    description: 'NBA accredited programs at AMET University.',
    keywords: 'NBA, accreditation, engineering accreditation, program accreditation'
  },
  '/odl-programs': {
    title: 'ODL Programs',
    description: 'Open and Distance Learning programs offered at AMET University.',
    keywords: 'ODL, distance learning, online programs, remote education'
  },
  '/latest-updates': {
    title: 'Latest Updates',
    description: 'Latest news, announcements, and updates from AMET University.',
    keywords: 'latest updates, news, announcements, university updates'
  },
  '/blog': {
    title: 'News & Events',
    description: 'AMET University news, events, and media coverage.',
    keywords: 'news, events, blog, university news, campus events'
  },
  '/rti': {
    title: 'Right to Information | AMET University',
    description: 'Right to Information Act 2005 details for AMET University including CPIO, Appellate Authority, objectives, and contact information.',
    keywords: 'RTI, right to information, CPIO, appellate authority, AMET University'
  },
  '/sedg-cell': {
    title: 'SEDG Cell | AMET University',
    description: 'Socio-Economically Disadvantaged Groups (SEDGs) Cell at AMET University - Committee members and initiatives.',
    keywords: 'SEDG Cell, AMET University, disadvantaged groups, equal opportunity'
  },
  '/ombudsperson': {
    title: 'Ombudsperson | AMET University',
    description: 'Details of the Ombudsperson and Security Advisor at AMET University.',
    keywords: 'ombudsperson, AMET University, grievance, security advisor'
  },
  '/chief-vigilance-officer': {
    title: 'Chief Vigilance Officer | AMET University',
    description: 'Chief Vigilance Officer of AMET University - Mr. S. Asokan, retired Assistant Commissioner of Police, Chennai City.',
    keywords: 'chief vigilance officer, AMET University, S Asokan, vigilance'
  },
  '/finance-controller': {
    title: 'Financial Controller | AMET University',
    description: 'Mrs. K. Bharathi, Financial Controller at AMET University with over 16 years of experience in financial operations and strategic planning.',
    keywords: 'financial controller, K Bharathi, AMET University, finance'
  },
  '/profile/srinivas-gopal': {
    title: 'Principal – DGS Courses | AMET University',
    description: 'Capt. Srinivas Gopal, Principal – DGS Courses at AMET University. Master F.G with 20 years of sailing experience.',
    keywords: 'principal DGS courses, Srinivas Gopal, AMET University, maritime education'
  },
  '/terms-of-use': {
    title: 'Terms of Use',
    description: 'Terms and conditions for using the AMET University website. Read our acceptable use, intellectual property, and liability policies.',
    keywords: 'terms of use, terms and conditions, AMET University, website terms'
  },
  '/cookie-policy': {
    title: 'Cookie Policy',
    description: 'Learn about how AMET University uses cookies, Google Analytics, and Microsoft Clarity on our website.',
    keywords: 'cookie policy, cookies, Google Analytics, Microsoft Clarity, AMET University'
  },
  '/accessibility': {
    title: 'Accessibility',
    description: 'AMET University accessibility commitment and features. We strive to make our website accessible to all users.',
    keywords: 'accessibility, WCAG, web accessibility, AMET University, inclusive design'
  },
};

// Default SEO for pages not in config
export const defaultSEO: PageSEO = {
  title: 'AMET University',
  description: 'AMET University - India\'s premier maritime university offering undergraduate, postgraduate, and doctoral programs. Deemed to be University, Chennai.',
  keywords: 'AMET University, maritime university, Chennai, India, higher education'
};
