
// Define the common program structure with detailed information
export interface ProgramDetails {
  id: string;
  name: string;
  category: 'UG' | 'PG' | 'PG Diploma' | 'Research';
  duration: string;
  credits?: string;
  admission?: string;
  careerPath?: string;
  description?: string;
  eligibility?: string;
  ageLimit?: string;
  medicalStandard?: string;
  lateralEntry?: string;
  note?: string;
  aim?: string;
  programmePattern?: string;
  visionMission?: string;
  courses?: string;
  curriculum?: string;
  infrastructure?: string;
  highlights?: string;
  courseDetails?: string;
  peos?: string[];
  pos?: string[];
  psos?: string[];
  curriculumLink?: string;
  tabs?: string[]; // Optional array of tab IDs to display for this program
  gmdssContent?: string;
  gmdssScopeContent?: string;
  gmdssScopeApplicationsContent?: string;
  gmdssRegulatoryFrameworkContent?: string;
  gmdssApplicabilityContent?: string;
  gmdssTypesContent?: string;
  gmdssCareerProspectsContent?: string;
  gmdssEligibilityContent?: string;
  gmdssProgramHighlightsContent?: string;
  gmdssVisionMissionContent?: string;
  gmdssIndianContent?: string;
  gmdssUkContent?: string;
  applicationIndianContent?: string;
  applicationUkContent?: string;
  paymentProcedureContent?: string;
  careerOpportunity?: string;
  careerProspects?: string;
  curriculumDownload?: string;
  labFacilities?: string;
  jobProspects?: string[];
  salientFeatures?: string[];
  hodProfile?: string;
  facultyList?: { name: string; designation: string; qualification: string }[];
}

// Define the department interface
export interface Department {
  id: string;
  name: string;
  description: string;
  courses: ProgramDetails[];
  image?: string;
  icon: React.ElementType;
}

export interface ProgramTab {
  id: string;
  name: string;
}
