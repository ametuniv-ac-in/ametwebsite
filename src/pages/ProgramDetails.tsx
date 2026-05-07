
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { 
  faculties, 
  maritimeDepartments, 
  managementDepartments, 
  commerceDepartments, 
  lifeSciencesDepartments, 
  engineeringTechDepartments,
  scienceHumanitiesDepartments,
  aviationDepartments,
  computingSciencesDepartments,
  alliedHealthSciencesDepartments
} from '@/data/faculties';
import NotFoundMessage from '@/components/faculty/NotFoundMessage';

import ProgramHeader from '@/components/program/ProgramHeader';
import ProgramInfoCards from '@/components/program/ProgramInfoCards';

import ProgramTabs from '@/components/program/ProgramTabs';
import OverviewTab from '@/components/program/OverviewTab';
import AimTab from '@/components/program/AimTab';
import EligibilityTab from '@/components/program/EligibilityTab';
import ProgrammePatternTab from '@/components/program/ProgrammePatternTab';
import VisionMissionTab from '@/components/program/VisionMissionTab';
import CoursesTab from '@/components/program/CoursesTab';
import CurriculumTab from '@/components/program/CurriculumTab';
import InfrastructureTab from '@/components/program/InfrastructureTab';
import HighlightsTab from '@/components/program/HighlightsTab';
import CourseDetailsTab from '@/components/program/CourseDetailsTab';
import ObjectivesTab from '@/components/program/ObjectivesTab';
import OutcomesTab from '@/components/program/OutcomesTab';
import PSOsTab from '@/components/program/PSOsTab';
import PeoPoSsoTab from '@/components/program/PeoPoSsoTab';
import GmdssTab from '@/components/program/GmdssTab';
import GmdssIndianTab from '@/components/program/GmdssIndianTab';
import GmdssUkTab from '@/components/program/GmdssUkTab';
import PaymentProcedureTab from '@/components/program/PaymentProcedureTab';
import CareerOpportunityTab from '@/components/program/CareerOpportunityTab';
import CareerProspectsTab from '@/components/program/CareerProspectsTab';
import DownloadCurriculumTab from '@/components/program/DownloadCurriculumTab';
import TwinningProgrammeTab from '@/components/program/TwinningProgrammeTab';
import LateralEntryTab from '@/components/program/LateralEntryTab';
import CareerOpportunitiesTab from '@/components/program/CareerOpportunitiesTab';
import AlumniTab from '@/components/program/AlumniTab';
import PlacementOpportunitiesTab from '@/components/program/PlacementOpportunitiesTab';
import ResearchDevelopmentTab from '@/components/program/ResearchDevelopmentTab';
import LabFacilitiesTab from '@/components/program/LabFacilitiesTab';
import JobProspectsTab from '@/components/program/JobProspectsTab';
import SalientFeaturesTab from '@/components/program/SalientFeaturesTab';
import GmdssContactTab from '@/components/program/GmdssContactTab';
import GmdssCareerProspectsTab from '@/components/program/GmdssCareerProspectsTab';
import GmdssEligibilityTab from '@/components/program/GmdssEligibilityTab';
import GmdssProgramHighlightsTab from '@/components/program/GmdssProgramHighlightsTab';
import GmdssVisionMissionTab from '@/components/program/GmdssVisionMissionTab';
import HodProfileTab from '@/components/program/HodProfileTab';
import FacultyListTab from '@/components/program/FacultyListTab';

import { ProgramDetails, Department } from '@/components/program/ProgramTypeDefinitions';
import AdmissionsFloatingCard from '@/components/AdmissionsFloatingCard';
import FloatingApplyButton from '@/components/admissions/FloatingApplyButton';

const ProgramDetailsPage = () => {
  const { facultyId, departmentId, programId } = useParams();
  const navigate = useNavigate();
  
  // Find the current faculty based on the URL parameter
  const faculty = faculties.find(f => f.id === facultyId);
  
  if (!faculty) {
    return (
      <Layout>
        <NotFoundMessage type="faculty" />
      </Layout>
    );
  }

  // Find department based on faculty type
  let department;
  let program;

  if (facultyId === 'maritime') {
    department = maritimeDepartments.find(d => d.id === departmentId);
  } else if (facultyId === 'management') {
    department = managementDepartments.find(d => d.id === departmentId);
  } else if (facultyId === 'commerce') {
    department = commerceDepartments.find(d => d.id === departmentId);
  } else if (facultyId === 'life-sciences') {
    department = lifeSciencesDepartments.find(d => d.id === departmentId);
  } else if (facultyId === 'engineering-tech') {
    department = engineeringTechDepartments.find(d => d.id === departmentId);
  } else if (facultyId === 'science-humanities') {
    department = scienceHumanitiesDepartments.find(d => d.id === departmentId);
  } else if (facultyId === 'aviation') {
    department = aviationDepartments.find(d => d.id === departmentId);
  } else if (facultyId === 'computing-sciences') {
    department = computingSciencesDepartments.find(d => d.id === departmentId);
  } else if (facultyId === 'allied-health-sciences') {
    department = alliedHealthSciencesDepartments.find(d => d.id === departmentId);
  }

  if (!department) {
    return (
      <Layout>
        <NotFoundMessage type="department" facultyId={facultyId} />
      </Layout>
    );
  }

  // Find the program within the department
  program = department.courses.find(c => c.id === programId);

  if (!program) {
    return (
      <Layout>
        <NotFoundMessage type="program" facultyId={facultyId} departmentId={departmentId} />
      </Layout>
    );
  }

  // Define all available tabs
  const allAvailableTabs = [
    { id: 'overview', name: 'About the Programme' },
    { id: 'career-prospects', name: 'Career Prospects' },
    { id: 'aim', name: 'Aim' },
    { id: 'vision-mission', name: 'Vision and Mission' },
    { id: 'courses', name: 'Courses' },
    { id: 'eligibility', name: 'Eligibility' },
    { id: 'twinning-programme', name: 'Twinning Programme' },
    { id: 'curriculum', name: 'Curriculum' },
    { id: 'download-curriculum', name: 'Download Curriculum' },
    { id: 'lateral-entry', name: 'Lateral Entry' },
    { id: 'career-opportunities', name: 'Career Opportunities' },
    { id: 'alumni', name: 'Alumni' },
    { id: 'placement-opportunities', name: 'Placement Opportunities' },
    { id: 'research-development', name: 'Research and Development' },
    { id: 'infrastructure', name: 'Infrastructure' },
    { id: 'highlights', name: 'Programme Highlights' },
    { id: 'lab-facilities', name: 'Lab Facilities' },
    { id: 'course-details', name: 'Course Details' },
    { id: 'programme-pattern', name: 'Programme Pattern' },
    { id: 'objectives', name: 'Programme Educational Objectives (PEO)' },
    { id: 'outcomes', name: 'Program Outcomes (PO)' },
    { id: 'psos', name: 'Programme Specific Objectives (PSOs)' },
    { id: 'peo-po-pso', name: 'PEO, PO & PSO' },
    { id: 'gmdss', name: 'GMDSS' },
    { id: 'gmdss-program-highlights', name: 'Program Highlights' },
    { id: 'gmdss-career-prospects', name: 'Career Prospects' },
    { id: 'gmdss-eligibility', name: 'Eligibility' },
    { id: 'gmdss-vision-mission', name: 'Vision & Mission' },
    { id: 'gmdss-indian', name: 'GMDSS - Indian' },
    { id: 'gmdss-uk', name: 'GMDSS - UK' },
    { id: 'gmdss-contact', name: 'Contact' },
    { id: 'payment-procedure', name: 'Procedure for Online Payment' },
    { id: 'career-opportunity', name: 'Career Opportunity and Growth' },
    
    { id: 'job-prospects', name: 'Job Prospects' },
    { id: 'salient-features', name: 'Salient Features' },
    { id: 'hod-profile', name: 'HOD Profile' },
    { id: 'faculty', name: 'Faculty' },
  ];

  // Filter tabs based on program configuration
  // If program.tabs is defined, use it; otherwise default to overview and eligibility
  const programTabs = program.tabs
    ? allAvailableTabs.filter(tab => program.tabs?.includes(tab.id))
    : allAvailableTabs.filter(tab => ['overview', 'eligibility'].includes(tab.id));

  // Set initial active tab to the first available tab for this program
  const [activeTab, setActiveTab] = useState<string>(programTabs[0]?.id || 'overview');

  const DeptIcon = department.icon;

  return (
    <Layout>
      {/* Program Header */}
      <ProgramHeader 
        facultyId={facultyId || ''} 
        departmentId={departmentId || ''} 
        departmentName={department.name} 
        program={program} 
        DeptIcon={DeptIcon} 
      />

      <div className="container mx-auto px-4 py-8">
        <div className="animate-fade-in">
          {/* Quick Info Cards */}
          <ProgramInfoCards program={program} />


          {/* Program Tabs and Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar Menu */}
            <div className="lg:col-span-1">
              <ProgramTabs 
                tabs={programTabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                curriculumLink={program.curriculumLink}
              />
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg shadow-md p-6">
                {/* Overview Tab */}
                {activeTab === 'overview' && <OverviewTab program={program} />}

                {/* Career Prospects Tab */}
                {activeTab === 'career-prospects' && <CareerProspectsTab program={program} />}

                {/* Aim Tab */}
                {activeTab === 'aim' && <AimTab program={program} />}

                {/* Vision and Mission Tab */}
                {activeTab === 'vision-mission' && <VisionMissionTab program={program} />}

                {/* Courses Tab */}
                {activeTab === 'courses' && <CoursesTab program={program} />}

                {/* Eligibility Tab */}
                {activeTab === 'eligibility' && <EligibilityTab program={program} />}

                {/* Curriculum Tab */}
                {activeTab === 'curriculum' && <CurriculumTab program={program} />}

                {/* Download Curriculum Tab */}
                {activeTab === 'download-curriculum' && <DownloadCurriculumTab program={program} />}

                {/* Infrastructure Tab */}
                {activeTab === 'infrastructure' && <InfrastructureTab program={program} />}

                {/* Highlights Tab */}
                {activeTab === 'highlights' && <HighlightsTab program={program} />}

                {/* Course Details Tab */}
                {activeTab === 'course-details' && <CourseDetailsTab program={program} />}

                {/* Programme Pattern Tab */}
                {activeTab === 'programme-pattern' && <ProgrammePatternTab program={program} />}

                {/* Program Objectives Tab */}
                {activeTab === 'objectives' && <ObjectivesTab program={program} />}

                {/* Program Outcomes Tab */}
                {activeTab === 'outcomes' && <OutcomesTab program={program} />}

                {/* Programme Specific Objectives Tab */}
                {activeTab === 'psos' && <PSOsTab program={program} />}

                {/* Combined PEO, PO & PSO Tab */}
                {activeTab === 'peo-po-pso' && <PeoPoSsoTab program={program} />}

                {/* GMDSS Tabs */}
                {activeTab === 'gmdss' && <GmdssTab program={program} />}
                {activeTab === 'gmdss-program-highlights' && <GmdssProgramHighlightsTab program={program} />}
                {activeTab === 'gmdss-career-prospects' && <GmdssCareerProspectsTab program={program} />}
                {activeTab === 'gmdss-eligibility' && <GmdssEligibilityTab program={program} />}
                {activeTab === 'gmdss-vision-mission' && <GmdssVisionMissionTab program={program} />}
                {activeTab === 'gmdss-indian' && <GmdssIndianTab program={program} />}
                {activeTab === 'gmdss-uk' && <GmdssUkTab program={program} />}
                {activeTab === 'gmdss-contact' && <GmdssContactTab program={program} />}
                {activeTab === 'payment-procedure' && <PaymentProcedureTab program={program} />}
                
                {/* Career Opportunity Tab */}
                {activeTab === 'career-opportunity' && <CareerOpportunityTab program={program} />}
                
                {/* New Tabs */}
                {activeTab === 'twinning-programme' && <TwinningProgrammeTab program={program} />}
                {activeTab === 'lateral-entry' && <LateralEntryTab program={program} />}
                {activeTab === 'career-opportunities' && <CareerOpportunitiesTab program={program} />}
                {activeTab === 'alumni' && <AlumniTab program={program} />}
                {activeTab === 'placement-opportunities' && <PlacementOpportunitiesTab program={program} />}
                {activeTab === 'research-development' && <ResearchDevelopmentTab program={program} />}
                {activeTab === 'lab-facilities' && <LabFacilitiesTab program={program} />}
                {activeTab === 'job-prospects' && <JobProspectsTab program={program} />}
                {activeTab === 'salient-features' && <SalientFeaturesTab program={program} />}
                {activeTab === 'hod-profile' && <HodProfileTab program={program} />}
                {activeTab === 'faculty' && <FacultyListTab program={program} />}
                
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Admissions Card */}
      <AdmissionsFloatingCard />
      <FloatingApplyButton />
    </Layout>
  );
};

export default ProgramDetailsPage;
