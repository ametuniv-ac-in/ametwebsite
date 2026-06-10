
export interface MenuItem {
  label: string;
  link: string;
  submenu?: string[];
}

export const menuItems: MenuItem[] = [
  { 
    label: 'About Us', 
    link: '#',
    submenu: ['About AMET', 'Objectives', 'Awards', 'Ranking and Accreditation', 'Policies', 'Members of IQAC', 'News and Events']
  },
  { 
    label: 'Administration', 
    link: '#',
    submenu: [
      'Governance', 'Chancellor', 'Vice Chancellor', 'Registrar', 'COE', 'Officials', 
      'Executive Council', 'Academic Council', 'School Chair Persons', 
      'Planning and Monitoring Board', 'Finance Committee', 'Coordinators', 
      'Organogram of AEMET', 'Dean and Directors', 'Management Review Committee'
    ]
  },
  { 
    label: 'Admissions', 
    link: '#',
    submenu: [
      'Admissions Overview',
      'Programmes Offered',
      'Announcement',
      'Scholarship',
      'Application Forms',
      'Prospectus 2026-27',
      'Fee Structure 2026-27',
      'Enquiry',
      'V.Ships Admission & Recruitment Drive',
      'Kalvi Career Education',
      'Face Prep Campus',
      'Emversity',
      'Diversity',
      'Guidelines for Indian Students',
      'Guidelines for International Students',
      'Testimonials',
      'Admission Policy',
      'Refund Policy'
    ]
  },
  { 
    label: 'Academics', 
    link: '#',
    submenu: [
      'Faculty', 
      'International Affairs', 
      'Mentor Mentee', 
      'Directorate of Student Welfare', 
      'Student Executive Council', 
      'NEP 2020', 
      'Library', 
      'Physical Education', 
      'CBCS Regulations 2023', 
      'Video Lectures', 
      'Academic Calendar',
      'Neptune Magazine'
    ]
  },
  { 
    label: 'Research', 
    link: '#',
    submenu: [
      'Research and Development',
      'Research Ecosystem',
      'Academic Research',
      'Center for CMIS',
      'Center for NDE',
      'AMET Journals',
      'Publications',
      'Patents',
      'IPR Cell'
    ]
  },
  { 
    label: 'Examination', 
    link: '#',
    submenu: [
      'Controller of Examinations',
      'Reforms and IT Integrations',
      'Announcement',
      'Exam Timetable',
      'Download Forms',
      'Fee Details',
      'e-SAND',
      'Result Publication',
      'Certificate Verification',
      'Convocation',
      'Ph.D. Course Work Examination',
      'NAD Cell'
    ]
  },
  { 
    label: 'Placement', 
    link: '#',
    submenu: [
      'Center for Placement & Training',
      'Placement Officials',
      'Our Recruiters',
      'A.P Moller - Maersk Center of Excellence',
      'Admission Cum Recruitment',
      'Testimonial',
      'Placement Policy',
      'Placement Activities',
      'Competency Assessment',
      'Placement Rules and Procedures',
      'Training Rules',
      'SOP for Recruitment / Placement'
    ]
  },
  { 
    label: 'Gallery', 
    link: '/gallery/events',
    submenu: [
      'Infrastructure',
      'Laboratories',
      'Events',
      'Videos',
      'Extension Activities'
    ]
  },
];
