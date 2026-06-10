
// This file contains utility functions to organize menu items into structured layouts

// Organize items into two rows with columns
export const organizeMenuItems = (menuLabel: string, menuItems: string[]) => {
  // Define specific groupings for certain menus
  if (menuLabel === 'About Us') {
    return [
      // Row 1
      {
        'University Information': menuItems, // Put all About Us items under one heading
      },
      // Row 2
      {} // Empty second row for About Us
    ];
  }
  
  if (menuLabel === 'Examination') {
    return [
      // Row 1
      {
        'Main Services': ['Controller of Examinations', 'Reforms and IT Integrations', 'Announcement'],
        'Examination Info': ['Exam Timetable', 'Download Forms', 'Fee Details'],
      },
      // Row 2
      {
        'Results & Certificates': ['e-SAND', 'Result Publication', 'Certificate Verification'],
        'Advanced Programs': ['Convocation', 'Ph.D. Course Work Examination', 'NAD Cell'],
      }
    ];
  }
  
  if (menuLabel === 'Administration') {
    return [
      // Row 1
      {
        'Leadership': ['Governance', 'Chancellor', 'Vice Chancellor', 'Registrar', 'COE'],
        'Management': ['Officials', 'Executive Council', 'Academic Council', 'School Chair Persons', 'Management Review Committee'],
      },
      // Row 2
      {
        'Administration': ['Planning and Monitoring Board', 'Finance Committee', 'Coordinators', 
                          'Organogram of AEMET', 'Dean and Directors'],
      }
    ];
  }
  
  if (menuLabel === 'Academics') {
    return [
      // Row 1
      {
        'Academic Resources': ['Faculty', 'International Affairs', 'Mentor Mentee'],
        'Student Services': ['Directorate of Student Welfare', 'Student Executive Council', 'NEP 2020'],
      },
      // Row 2
      {
        'Learning Resources': ['Library', 'Physical Education', 'CBCS Regulations 2023', 'Video Lectures'],
        'Information': ['Media Centre', 'Academic Calendar'],
      }
    ];
  }
  
  if (menuLabel === 'Admissions') {
    return [
      // Row 1
      {
        'Admission Information': ['Admissions Overview', 'Programmes Offered', 'Announcement', 'Scholarship'],
        'Documents & Fees': ['Application Forms', 'Prospectus 2026-27', 'Fee Structure 2026-27', 'Admission Policy', 'Refund Policy'],
      },
      // Row 2
      {
        'Special Programs': ['V.Ships Admission & Recruitment Drive', 'Kalvi Career Education', 'Face Prep Campus', 'Emversity'],
        'Student Resources': ['Enquiry', 'Diversity', 'Guidelines for Indian Students', 'Guidelines for International Students', 'Testimonials'],
      }
    ];
  }
  
  if (menuLabel === 'Research') {
    return [
      // Row 1
      {
        'Research Framework': ['Research and Development', 'Research Ecosystem', 'Academic Research'],
        'Research Centers': ['Center for CMIS', 'Center for NDE'],
      },
      // Row 2
      {
        'Research Output': ['AMET Journals', 'Publications', 'Patents'],
        'Intellectual Property': ['IPR Cell'],
      }
    ];
  }
  
  if (menuLabel === 'Placement') {
    return [
      // Row 1
      {
        'Centers & Leadership': ['Center for Placement & Training', 'Placement Officials', 'Our Recruiters', 'A.P Moller - Maersk Center of Excellence'],
        'Recruitment': ['Admission Cum Recruitment', 'Testimonial', 'Placement Policy'],
      },
      // Row 2
      {
        'Placement Process': ['Placement Activities', 'Competency Assessment', 'Placement Rules and Procedures'],
        'Training & Guidelines': ['Training Rules', 'SOP for Recruitment / Placement'],
      }
    ];
  }
  
  if (menuLabel === 'Gallery') {
    // Update the Gallery menu to match the available routes
    return [
      // Row 1
      {
        'Gallery Sections': menuItems, // This will ensure we only show the actual items from the submenu list
      },
      // Row 2
      {} // Empty second row for Gallery
    ];
  }
  
  // Default: Split items evenly across 2 rows and columns
  const itemsPerGroup = Math.ceil(menuItems.length / 4); // 4 groups total (2 rows × 2 columns)
  const row1 = {}, row2 = {};
  
  for (let i = 0; i < Math.min(itemsPerGroup * 2, menuItems.length); i++) {
    const groupName = i < itemsPerGroup ? `Group 1` : `Group 2`;
    if (i < itemsPerGroup) {
      row1[groupName] = row1[groupName] || [];
      row1[groupName].push(menuItems[i]);
    } else {
      const groupName2 = `Group ${Math.ceil((i - itemsPerGroup) / itemsPerGroup) + 2}`;
      row2[groupName2] = row2[groupName2] || [];
      row2[groupName2].push(menuItems[i]);
    }
  }
  
  return [row1, row2];
};
