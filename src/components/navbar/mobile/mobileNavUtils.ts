
export const getSubmenuGroups = (menu: string, submenu: string[] = []) => {
  if (menu === 'About Us') {
    return {
      'University Information': submenu, // Put all About Us items under one heading
    };
  }
  
  if (menu === 'Examination') {
    return {
      'Main Services': ['Controller of Examinations', 'Reforms and IT Integrations', 'Announcement'],
      'Examination Info': ['Exam Timetable', 'Download Forms', 'Fee Details'],
      'Results & Certificates': ['e-SAND', 'Result Publication', 'Certificate Verification'],
      'Advanced Programs': ['Convocation', 'Ph.D. Course Work Examination', 'NAD Cell'],
    };
  }
  
  if (menu === 'Administration') {
    return {
      'Leadership': ['Governance', 'Chancellor', 'Vice Chancellor', 'Registrar', 'COE'],
      'Management': ['Officials', 'Executive Council', 'Academic Council', 'School Chair Persons', 'Management Review Committee'],
      'Administration': ['Planning and Monitoring Board', 'Finance Committee', 'Coordinators', 'Organogram of AEMET', 'Dean and Directors'],
    };
  }
  
  if (menu === 'Academics') {
    return {
      'Academic Resources': ['Faculty', 'International Affairs', 'Mentor Mentee', 'Library'],
      'Student Services': ['Directorate of Student Welfare', 'Student Executive Council', 'NEP 2020'],
      'Learning Resources': ['Library', 'Physical Education', 'CBCS Regulations 2023', 'Video Lectures'],
      'Information': ['Media Centre', 'Academic Calendar', 'Neptune Magazine'],
    };
  }
  
  if (menu === 'Admissions') {
    return {
      'Admission Information': ['Admissions Overview', 'Programmes Offered', 'Announcement', 'Scholarship'],
      'Documents & Fees': ['Application Forms', 'Prospectus 2026-27', 'Fee Structure 2026-27', 'Admission Policy', 'Refund Policy'],
      'Special Programs': ['V.Ships Admission & Recruitment Drive', 'Kalvi Career Education', 'Face Prep Campus', 'Emversity'],
      'Student Resources': ['Enquiry', 'Diversity', 'Guidelines for Indian Students', 'Guidelines for International Students', 'Testimonials'],
    };
  }
  
  if (menu === 'Research') {
    return {
      'Research Framework': ['Research and Development', 'Research Ecosystem', 'Academic Research'],
      'Research Centers': ['Center for CMIS', 'Center for NDE'],
      'Research Output': ['AMET Journals', 'Publications', 'Patents'],
      'Intellectual Property': ['IPR Cell'],
    };
  }
  
  if (menu === 'Placement') {
    return {
      'Centers & Leadership': ['Center for Placement & Training', 'Placement Officials', 'Our Recruiters', 'A.P Moller - Maersk Center of Excellence'],
      'Recruitment': ['Admission Cum Recruitment', 'Testimonial', 'Placement Policy'],
      'Placement Process': ['Placement Activities', 'Competency Assessment', 'Placement Rules and Procedures'],
      'Training & Guidelines': ['Training Rules', 'SOP for Recruitment / Placement'],
    };
  }
  
  if (menu === 'Gallery') {
    return {
      'Gallery Sections': ['Infrastructure', 'Laboratories', 'Events', 'Videos', 'Extension Activities'],
    };
  }
  
  return { 'Menu': submenu };
};

export const getSubmenuLink = (menu: string, subItem: string): string => {
  if (menu === 'Academics') {
    if (subItem === 'Faculty') return '/faculties';
    if (subItem === 'Academic Calendar') return '/academic-calendar';
    if (subItem === 'International Affairs') return '/international-affairs';
    if (subItem === 'Mentor Mentee') return '/mentor-mentee';
    if (subItem === 'Directorate of Student Welfare') return '/directorate-students-welfare';
    if (subItem === 'Library') return '/library';
    if (subItem === 'Student Executive Council') return '/student-executive-council';
    if (subItem === 'NEP 2020') return '/nep-2020';
    if (subItem === 'Physical Education') return '/physical-education';
    if (subItem === 'CBCS Regulations 2023') return '/cbcs-regulations';
    if (subItem === 'Video Lectures') return '/video-lectures';
    if (subItem === 'Neptune Magazine') return '/neptune-magazine';
  }
  
  if (menu === 'About Us') {
    if (subItem === 'About AMET') return '/about';
    if (subItem === 'Objectives') return '/objectives';
    if (subItem === 'Awards') return '/awards';
    if (subItem === 'Policies') return '/policies';
    if (subItem === 'Members of IQAC') return '/members-of-iqac';
    if (subItem === 'Ranking and Accreditation') return '/ranking-accreditation';
    if (subItem === 'News and Events') return '/blog';
  }
  
  if (menu === 'Administration') {
    if (subItem === 'Governance') return '/governance';
    if (subItem === 'Officials') return '/governance/officials';
    if (subItem === 'Executive Council') return '/governance/executive-council';
    if (subItem === 'Academic Council') return '/governance/academic-council';
    if (subItem === 'School Chair Persons') return '/governance/faculty-chairpersons';
    if (subItem === 'Planning and Monitoring Board') return '/governance/planning-monitoring';
    if (subItem === 'Finance Committee') return '/governance/finance-committee';
    if (subItem === 'Coordinators') return '/governance/coordinators';
    if (subItem === 'Organogram of AEMET') return '/governance/organogram';
    if (subItem === 'Dean and Directors') return '/governance/deans-directors';
    if (subItem === 'Management Review Committee') return '/governance/management-review-committee';
    if (subItem === 'Chancellor') return '/profile/j-ramachandran';
    if (subItem === 'Vice Chancellor') return '/profile/v-rajendran';
    if (subItem === 'Registrar') return '/profile/v-sangeetha-albin';
    if (subItem === 'COE') return '/profile/a-rajesh-kanna';
  }
  
  if (menu === 'Admissions') {
    if (subItem === 'Admissions 2025-26') return '/admissions';
    if (subItem === 'Admissions Overview') return '/admissions';
    if (subItem === 'Programmes Offered') return '/courses';
    if (subItem === 'Announcement') return '/admissions/announcement';
    
    if (subItem === 'Scholarship') return '/scholarship';
    if (subItem === 'Application Forms') return '/application-forms';
    if (subItem === 'Prospectus 2026-27') return '/prospectus';
    if (subItem === 'Fee Structure 2026-27') return '/fee-structure';
    if (subItem === 'Enquiry') return '/contact';
    if (subItem === 'V.Ships Admission & Recruitment Drive') return '/vships-admission';
    if (subItem === 'Kalvi Career Education') return '/kalvi-career';
    if (subItem === 'Face Prep Campus') return '/face-prep-campus';
    if (subItem === 'Emversity') return '/emversity';
    if (subItem === 'Diversity') return '/diversity';
    if (subItem === 'Guidelines for Indian Students') return '/guidelines-indian';
    if (subItem === 'Guidelines for International Students') return '/guidelines-international';
    if (subItem === 'Testimonials') return '/testimonials';
    if (subItem === 'Admission Policy') return '/admission-policy';
    if (subItem === 'Refund Policy') return '/refund-policy';
  }
  
  if (menu === 'Examination') {
    if (subItem === 'Controller of Examinations') return '/examination';
    if (subItem === 'Reforms and IT Integrations') return '/examination/reforms';
    if (subItem === 'Announcement') return '/examination/announcement';
    if (subItem === 'Exam Timetable') return '/examination/timetable';
    if (subItem === 'Download Forms') return '/examination/forms';
    if (subItem === 'Fee Details') return '/examination/fees';
    if (subItem === 'e-SAND') return '/examination/verification';
    if (subItem === 'Result Publication') return '/examination/results';
    if (subItem === 'Certificate Verification') return '/examination/verification';
    if (subItem === 'Convocation') return '/examination/convocation';
    if (subItem === 'Ph.D. Course Work Examination') return '/examination/phd-coursework';
    if (subItem === 'NAD Cell') return '/examination/nad-cell';
  }
  
  if (menu === 'Research') {
    if (subItem === 'Research and Development') return '/research-development';
    if (subItem === 'Research Ecosystem') return '/research-ecosystem';
    if (subItem === 'Academic Research') return '/academic-research';
    if (subItem === 'Center for CMIS') return '/research-development';
    if (subItem === 'Center for NDE') return '/research-development';
    if (subItem === 'AMET Journals') return '/research-development';
    if (subItem === 'Publications') return '/research-development';
    if (subItem === 'Patents') return '/research-development';
    if (subItem === 'IPR Cell') return '/research-development';
  }
  
  if (menu === 'Placement') {
    if (subItem === 'Center for Placement & Training') return '/placements';
    if (subItem === 'Placement Officials') return '/placement/director';
    if (subItem === 'Our Recruiters') return '/placement/recruiters';
    if (subItem === 'A.P Moller - Maersk Center of Excellence') return '/placement/maersk-excellence';
    if (subItem === 'Admission Cum Recruitment') return '/placement/admission-recruitment';
    if (subItem === 'Testimonial') return '/placement/testimonial';
    if (subItem === 'Placement Policy') return '/placement/policy';
    if (subItem === 'Placement Activities') return '/placement/activities';
    if (subItem === 'Competency Assessment') return '/placement/assessment';
    if (subItem === 'Placement Rules and Procedures') return '/placement/rules';
    if (subItem === 'Training Rules') return '/placement/training-rules';
    if (subItem === 'SOP for Recruitment / Placement') return '/placement/sop';
  }
  
  if (menu === 'Gallery') {
    if (subItem === 'Infrastructure') return '/gallery/infrastructure';
    if (subItem === 'Laboratories') return '/gallery/laboratories';
    if (subItem === 'Events') return '/gallery/events';
    if (subItem === 'Videos') return '/gallery/videos';
    if (subItem === 'Extension Activities') return '/gallery/extension-activities';
  }
  
  return '#';
};
