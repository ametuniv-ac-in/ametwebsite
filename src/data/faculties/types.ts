
import { LucideIcon } from "lucide-react";

export interface Faculty {
  id: string;
  name: string;
  icon: LucideIcon;
  description: string;
  color: string;
  programs: string[];
  pdfProfile?: string;
}

export interface Department {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  highlights?: string[];
  visionMission?: string;
  facilities: {
    name: string;
    description: string;
  }[];
  research_areas: string[];
  collaborations: string[];
  certifications: string[];
  courses: {
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
    programHighlights?: string[]; // Optional array of program highlights
    gmdssContent?: string;
    gmdssScopeContent?: string;
  gmdssScopeApplicationsContent?: string;
  gmdssRegulatoryFrameworkContent?: string;
  gmdssApplicabilityContent?: string;
  gmdssTypesContent?: string;
    gmdssAboutDepartmentContent?: string;
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
    twinningProgramme?: {
      university: string;
      program: string;
      description: string;
    };
    careerRoles?: string[];
    placementSectors?: string[];
    researchRoles?: string[];
    jobProspects?: string[];
    salientFeatures?: string[];
    hodProfile?: string;
    facultyList?: { name: string; designation: string; qualification: string }[];
  }[];
}
