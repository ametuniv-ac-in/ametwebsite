
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GTMPageTracker from './components/GTMPageTracker';
import Home from './pages/Index';
import About from './pages/AboutAMET';
import Courses from './pages/ProgramsOffered';
import Faculties from './pages/Faculties';
import Faculty from './pages/Faculty';
import AcademicCalendar from './pages/AcademicCalendar';
import Objectives from './pages/Objectives';
import Awards from './pages/Awards';
import Policies from './pages/Policies';
import Admissions from './pages/Admissions';

import Scholarship from './pages/Scholarship';
import Prospectus from './pages/Prospectus';
import FeeStructure from './pages/FeeStructure';
import AdmissionPolicy from './pages/AdmissionPolicy';
import Diversity from './pages/Diversity';
import Examination from './pages/examination/Announcement';
import ReformsAndIT from './pages/examination/ReformsAndIT';
import Timetable from './pages/examination/Timetable';
import Forms from './pages/examination/Forms';
import Fees from './pages/examination/Fees';
import ESAND from './pages/examination/ESAND';
import Results from './pages/examination/Results';
import Convocation from './pages/examination/Convocation';
import PhDCoursework from './pages/examination/PhDCoursework';
import ControllerOfExaminations from './pages/examination/ControllerOfExaminations';
import ResearchDevelopment from './pages/research/ResearchDevelopment';
import ResearchAdvisoryCouncil from './pages/research/ResearchAdvisoryCouncil';
import ResearchMonitoringCommittee from './pages/research/ResearchMonitoringCommittee';
import ResearchEcosystem from './pages/research/ResearchEcosystem';
import AcademicResearch from './pages/research/AcademicResearch';
import PhDProgrammes from './pages/research/PhDProgrammes';
import PhDRegulations from './pages/research/PhDRegulations';
import PhDAdmissionRequirements from './pages/research/PhDAdmissionRequirements';
import DSCRegulations from './pages/research/DSCRegulations';
import DoctoralCommitteeProcedure from './pages/research/DoctoralCommitteeProcedure';
import CourseWorkExaminations from './pages/research/CourseWorkExaminations';
import PhDEvaluationProcedures from './pages/research/PhDEvaluationProcedures';
import PhDAwardedList from './pages/research/PhDAwardedList';
import PhDScholarsList from './pages/research/PhDScholarsList';
import SupervisorsList from './pages/research/SupervisorsList';
import PhDForms from './pages/research/PhDForms';
import Placements from './pages/placement/PlacementCenter';
import Gallery from './pages/gallery/Events';
import Infrastructure from './pages/gallery/Infrastructure';
import Laboratories from './pages/gallery/Laboratories';
import GalleryEvents from './pages/gallery/Events';
import Videos from './pages/gallery/Videos';
import ExtensionActivities from './pages/gallery/ExtensionActivities';
import Blog from './pages/NewsAndEvents';
import NotFound from './pages/NotFound';
import NadCell from './pages/examination/NADCell';
import Nba from './pages/NBA';
import ODLPrograms from './pages/ODLPrograms';
import DSWOverview from './pages/dsw/Overview';
import S3Centre from './pages/dsw/S3Centre';
import HallOfResidence from './pages/dsw/HallOfResidence';
import Ametunispo from './pages/dsw/Ametunispo';
import StudentCouncilDSW from './pages/dsw/StudentCouncil';
import NSSDSW from './pages/dsw/NSS';
import NCCDSW from './pages/dsw/NCC';
import CulturalClub from './pages/dsw/CulturalClub';
import UnnatBharat from './pages/dsw/UnnatBharat';
import SwachhtaPakhwada from './pages/dsw/SwachhtaPakhwada';
import HealthCare from './pages/dsw/HealthCare';
import MessCommittee from './pages/dsw/MessCommittee';
import ServiceRequest from './pages/dsw/ServiceRequest';
import ContactUs from './pages/ContactUs';
import RankingAccreditation from './pages/RankingAccreditation';
import MandatoryDisclosure from './pages/disclosures/MandatoryDisclosure';
import ODLMandatoryDisclosure from './pages/disclosures/ODLMandatoryDisclosure';
import PublicSelfDisclosure from './pages/disclosures/PublicSelfDisclosure';
import FCRADisclosure from './pages/disclosures/FCRADisclosure';
import AuditedStatements from './pages/disclosures/AuditedStatements';
import InternationalAffairs from './pages/InternationalAffairs';
import MentorMentee from './pages/MentorMentee';
import Library from './pages/Library';
import LibraryResources from './pages/library/LibraryResources';
import LibraryAutomation from './pages/library/LibraryAutomation';
import LibraryMembership from './pages/library/LibraryMembership';
import LibraryRules from './pages/library/LibraryRules';
import LibraryThesis from './pages/library/LibraryThesis';
import LibraryCommittee from './pages/library/LibraryCommittee';
import LibraryLinks from './pages/library/LibraryLinks';
import StudentExecutiveCouncil from './pages/StudentExecutiveCouncil';
import NEP2020 from './pages/NEP2020';
import PhysicalEducation from './pages/PhysicalEducation';
import CBCSRegulations from './pages/CBCSRegulations';
import VideoLectures from './pages/VideoLectures';
import Profile from './pages/Profile';
import Department from './pages/Department';
import ProgramDetails from './pages/ProgramDetails';
import Testimonial from './pages/placement/Testimonial';
import MembersOfIQAC from './pages/MembersOfIQAC';
import ApplicationForms from './pages/ApplicationForms';
import VShipsAdmission from './pages/VShipsAdmission';
import KalviCareer from './pages/KalviCareer';
import FacePrepCampus from './pages/FacePrepCampus';
import Emversity from './pages/Emversity';
import GuidelinesIndian from './pages/GuidelinesIndian';
import GuidelinesInternational from './pages/GuidelinesInternational';
import BusRoute from './pages/BusRoute';
import OnlinePaymentDetails from './pages/OnlinePaymentDetails';


// Import all governance pages
import Governance from './pages/Governance';
import Officials from './pages/governance/Officials';
import ExecutiveCouncil from './pages/governance/ExecutiveCouncil';
import AcademicCouncil from './pages/governance/AcademicCouncil';
import FacultyChairpersons from './pages/governance/FacultyChairpersons';
import PlanningMonitoring from './pages/governance/PlanningMonitoring';
import FinanceCommittee from './pages/governance/FinanceCommittee';
import Coordinators from './pages/governance/Coordinators';
import Organogram from './pages/governance/Organogram';
import DeansDirectors from './pages/governance/DeansDirectors';
import ManagementReviewCommittee from './pages/governance/ManagementReviewCommittee';

// Import placement pages
import PlacementDirector from './pages/placement/Director';
import PlacementRecruiters from './pages/placement/Recruiters';
import PlacementMaerskExcellence from './pages/placement/MaerskExcellence';
import PlacementAdmissionRecruitment from './pages/placement/AdmissionRecruitment';
import PlacementActivities from './pages/placement/Activities';

import PlacementAssessment from './pages/placement/Assessment';

import PlacementTrainingRules from './pages/placement/TrainingRules';
import PlacementSOP from './pages/placement/SOP';
import InternationalCollaborations from './pages/InternationalCollaborations';
import MoU from './pages/MoU';
import StudentCorner from './pages/StudentCorner';
import OutreachPrograms from './pages/OutreachPrograms';
import IQAC from './pages/IQAC';
import IIIC from './pages/IIIC';
import ACEII from './pages/ACEII';
import OPRCLevel2 from './pages/OPRCLevel2';
import AntiRagging from './pages/AntiRagging';
import AntiRaggingCommittee from './pages/AntiRaggingCommittee';
import AntiRaggingSquad from './pages/AntiRaggingSquad';
import SexualHarassment from './pages/SexualHarassment';
import GrievanceRedressal from './pages/GrievanceRedressal';
import AmetWaves from './pages/AmetWaves';
import Magazines from './pages/Magazines';
import NeptuneMagazine from './pages/NeptuneMagazine';
import EContent2015 from './pages/EContent2015';
import EContent2016 from './pages/EContent2016';
import EContent2017 from './pages/EContent2017';
import EContent2018 from './pages/EContent2018';
import EContent2019 from './pages/EContent2019';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import NAAC from './pages/NAAC';
import NIRF from './pages/NIRF';
import ARIIA from './pages/ARIIA';
import Career from './pages/Career';
import MoesDomTechnicalAssistant from './pages/career/MoesDomTechnicalAssistant';
import MoesDomProjectAssociate from './pages/career/MoesDomProjectAssociate';
import ViceChancellorRecruitment from './pages/career/ViceChancellorRecruitment';
import DirectorResearch from './pages/career/DirectorResearch';
import AdmissionsAnnouncement from './pages/admissions/Announcement';
import LatestUpdates from './pages/LatestUpdates';
import RTI from './pages/RTI';
import SEDGCell from './pages/SEDGCell';
import AnnualAccounts from './pages/AnnualAccounts';
import Ombudsperson from './pages/Ombudsperson';
import ChiefVigilanceOfficer from './pages/ChiefVigilanceOfficer';
import PrincipalDGS from './pages/PrincipalDGS';
import FinanceController from './pages/FinanceController';
import ComplaintForm from './pages/ComplaintForm';
import SCSTCommittee from './pages/SCSTCommittee';
import InternalComplaintsCommittee from './pages/InternalComplaintsCommittee';
import StaffWelfareCommittee from './pages/StaffWelfareCommittee';
import EqualOpportunityCell from './pages/EqualOpportunityCell';
import WomenEmpowermentCell from './pages/WomenEmpowermentCell';
import TermsOfUse from './pages/TermsOfUse';
import CookiePolicy from './pages/CookiePolicy';
import Accessibility from './pages/Accessibility';

// Maritime Foundation pages
import MFHome from './pages/maritime-foundation/Home';
import MFVisionMission from './pages/maritime-foundation/VisionMission';
import MFLegend from './pages/maritime-foundation/Legend';
import MFAwards from './pages/maritime-foundation/Awards';
import MFApplication from './pages/maritime-foundation/Application';
import MFAgms2025 from './pages/maritime-foundation/Agms2025';
import MFContact from './pages/maritime-foundation/Contact';

function App() {
  return (
    <Router>
      <GTMPageTracker />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/objectives" element={<Objectives />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/ranking-accreditation" element={<RankingAccreditation />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/faculties" element={<Faculties />} />
        <Route path="/faculty/:id" element={<Faculty />} />
        <Route path="/faculty/:facultyId/department/:departmentId" element={<Department />} />
        <Route path="/faculty/:facultyId/department/:departmentId/program/:programId" element={<ProgramDetails />} />
        <Route path="/academic-calendar" element={<AcademicCalendar />} />
        <Route path="/international-affairs" element={<InternationalAffairs />} />
        <Route path="/mentor-mentee" element={<MentorMentee />} />
        <Route path="/student-executive-council" element={<StudentExecutiveCouncil />} />
        <Route path="/student-corner" element={<StudentCorner />} />
        <Route path="/bus-route" element={<BusRoute />} />
        <Route path="/nep-2020" element={<NEP2020 />} />
        <Route path="/physical-education" element={<PhysicalEducation />} />
        <Route path="/cbcs-regulations" element={<CBCSRegulations />} />
        <Route path="/video-lectures" element={<VideoLectures />} />
        <Route path="/e-content-2015-16" element={<EContent2015 />} />
        <Route path="/e-content-2016-17" element={<EContent2016 />} />
        <Route path="/e-content-2017-18" element={<EContent2017 />} />
        <Route path="/e-content-2018-19" element={<EContent2018 />} />
        <Route path="/e-content-2019-20" element={<EContent2019 />} />
        <Route path="/library" element={<Library />} />
        <Route path="/library/resources" element={<LibraryResources />} />
        <Route path="/library/automation-services" element={<LibraryAutomation />} />
        <Route path="/library/membership-sharing" element={<LibraryMembership />} />
        <Route path="/library/rules" element={<LibraryRules />} />
        <Route path="/library/phd-thesis" element={<LibraryThesis />} />
        <Route path="/library/committee-staff" element={<LibraryCommittee />} />
        <Route path="/library/important-links" element={<LibraryLinks />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/programs-offered" element={<Courses />} />
<Route path="/admissions" element={<Admissions />} />

<Route path="/scholarship" element={<Scholarship />} />
<Route path="/prospectus" element={<Prospectus />} />
<Route path="/fee-structure" element={<FeeStructure />} />
<Route path="/admission-policy" element={<AdmissionPolicy />} />
<Route path="/application-forms" element={<ApplicationForms />} />
<Route path="/vships-admission" element={<VShipsAdmission />} />
<Route path="/kalvi-career" element={<KalviCareer />} />
<Route path="/face-prep-campus" element={<FacePrepCampus />} />
<Route path="/emversity" element={<Emversity />} />
<Route path="/diversity" element={<Diversity />} />
<Route path="/guidelines-indian" element={<GuidelinesIndian />} />
<Route path="/guidelines-international" element={<GuidelinesInternational />} />
<Route path="/admissions/announcement" element={<AdmissionsAnnouncement />} />

<Route path="/testimonials" element={<Testimonial />} />
            <Route path="/examination" element={<ControllerOfExaminations />} />
            <Route path="/examination/announcement" element={<Examination />} />
<Route path="/examination/reforms" element={<ReformsAndIT />} />
<Route path="/examination/timetable" element={<Timetable />} />
<Route path="/examination/forms" element={<Forms />} />
<Route path="/examination/fees" element={<Fees />} />

<Route path="/examination/results" element={<Results />} />
<Route path="/examination/verification" element={<ESAND />} />
<Route path="/examination/convocation" element={<Convocation />} />
<Route path="/examination/phd-coursework" element={<PhDCoursework />} />
        <Route path="/research" element={<ResearchDevelopment />} />
        <Route path="/research-development" element={<ResearchDevelopment />} />
        <Route path="/research-advisory-council" element={<ResearchAdvisoryCouncil />} />
        <Route path="/research-monitoring-committee" element={<ResearchMonitoringCommittee />} />
        <Route path="/research-ecosystem" element={<ResearchEcosystem />} />
        <Route path="/academic-research" element={<AcademicResearch />} />
        <Route path="/phd-programmes" element={<PhDProgrammes />} />
        <Route path="/phd-regulations" element={<PhDRegulations />} />
        <Route path="/phd-admission-requirements" element={<PhDAdmissionRequirements />} />
        <Route path="/dsc-regulations" element={<DSCRegulations />} />
        <Route path="/doctoral-committee-procedure" element={<DoctoralCommitteeProcedure />} />
        <Route path="/course-work-examinations" element={<CourseWorkExaminations />} />
        <Route path="/phd-evaluation-procedures" element={<PhDEvaluationProcedures />} />
        <Route path="/phd-awarded-list" element={<PhDAwardedList />} />
        <Route path="/phd-scholars-list" element={<PhDScholarsList />} />
        <Route path="/supervisors-list" element={<SupervisorsList />} />
        <Route path="/phd-forms" element={<PhDForms />} />
        <Route path="/placements" element={<Placements />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/iqac" element={<IQAC />} />
        <Route path="/iiic" element={<IIIC />} />
        <Route path="/aceii" element={<ACEII />} />
        <Route path="/oprc-level-2" element={<OPRCLevel2 />} />
        <Route path="/anti-ragging" element={<AntiRagging />} />
        <Route path="/anti-ragging-committee" element={<AntiRaggingCommittee />} />
        <Route path="/anti-ragging-squad" element={<AntiRaggingSquad />} />
        <Route path="/sexual-harassment" element={<SexualHarassment />} />
        <Route path="/grievance-redressal" element={<GrievanceRedressal />} />
        <Route path="/amet-waves" element={<AmetWaves />} />
        <Route path="/magazines" element={<Magazines />} />
        <Route path="/members-of-iqac" element={<MembersOfIQAC />} />
        
        {/* Profile routes */}
        <Route path="/profile/:id" element={<Profile />} />
        
        {/* Gallery routes */}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/infrastructure" element={<Infrastructure />} />
        <Route path="/gallery/laboratories" element={<Laboratories />} />
        <Route path="/gallery/events" element={<GalleryEvents />} />
        <Route path="/gallery/videos" element={<Videos />} />
        <Route path="/gallery/extension-activities" element={<ExtensionActivities />} />
        
        {/* Governance routes */}
        <Route path="/governance" element={<Governance />} />
        <Route path="/governance/officials" element={<Officials />} />
        <Route path="/governance/executive-council" element={<ExecutiveCouncil />} />
        <Route path="/governance/academic-council" element={<AcademicCouncil />} />
        <Route path="/governance/faculty-chairpersons" element={<FacultyChairpersons />} />
        <Route path="/governance/planning-monitoring" element={<PlanningMonitoring />} />
        <Route path="/governance/finance-committee" element={<FinanceCommittee />} />
        <Route path="/governance/coordinators" element={<Coordinators />} />
        <Route path="/governance/organogram" element={<Organogram />} />
        <Route path="/governance/deans-directors" element={<DeansDirectors />} />
        <Route path="/governance/management-review-committee" element={<ManagementReviewCommittee />} />
        
        {/* Placement routes */}
        <Route path="/placement/testimonial" element={<Testimonial />} />
        <Route path="/placement/director" element={<PlacementDirector />} />
        <Route path="/placement/recruiters" element={<PlacementRecruiters />} />
        <Route path="/placement/maersk-excellence" element={<PlacementMaerskExcellence />} />
        <Route path="/placement/admission-recruitment" element={<PlacementAdmissionRecruitment />} />
        <Route path="/placement/activities" element={<PlacementActivities />} />
        
        <Route path="/placement/assessment" element={<PlacementAssessment />} />
        
        <Route path="/placement/training-rules" element={<PlacementTrainingRules />} />
        <Route path="/placement/sop" element={<PlacementSOP />} />
        <Route path="/placement/center" element={<Placements />} />
        
        <Route path="/blog" element={<Blog />} />
        <Route path="/examination/nad-cell" element={<NadCell />} />
        <Route path="/nba" element={<Nba />} />
        <Route path="/odl-programs" element={<ODLPrograms />} />
        <Route path="/directorate-students-welfare" element={<DSWOverview />} />
        <Route path="/directorate-students-welfare/s3-centre" element={<S3Centre />} />
        <Route path="/directorate-students-welfare/hall-of-residence" element={<HallOfResidence />} />
        <Route path="/directorate-students-welfare/ametunispo" element={<Ametunispo />} />
        <Route path="/directorate-students-welfare/student-council" element={<StudentCouncilDSW />} />
        <Route path="/directorate-students-welfare/nss" element={<NSSDSW />} />
        <Route path="/directorate-students-welfare/ncc" element={<NCCDSW />} />
        <Route path="/directorate-students-welfare/cultural-club" element={<CulturalClub />} />
        <Route path="/directorate-students-welfare/unnat-bharat" element={<UnnatBharat />} />
        <Route path="/directorate-students-welfare/swachhta-pakhwada" element={<SwachhtaPakhwada />} />
        <Route path="/directorate-students-welfare/health-care" element={<HealthCare />} />
        <Route path="/directorate-students-welfare/mess-committee" element={<MessCommittee />} />
        <Route path="/directorate-students-welfare/service-request" element={<ServiceRequest />} />
        <Route path="/contact-us" element={<ContactUs />} />
        
        {/* Disclosure Pages */}
        <Route path="/disclosures/mandatory" element={<MandatoryDisclosure />} />
        <Route path="/disclosures/odl-ol" element={<ODLMandatoryDisclosure />} />
        <Route path="/disclosures/public-self" element={<PublicSelfDisclosure />} />
        <Route path="/disclosures/fcra" element={<FCRADisclosure />} />
        <Route path="/disclosures/audited-statements" element={<AuditedStatements />} />
        <Route path="/neptune-magazine" element={<NeptuneMagazine />} />
        <Route path="/international-collaborations" element={<InternationalCollaborations />} />
        <Route path="/mou" element={<MoU />} />
        <Route path="/outreach-programs" element={<OutreachPrograms />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/naac" element={<NAAC />} />
        <Route path="/nirf" element={<NIRF />} />
        <Route path="/ariia" element={<ARIIA />} />
        <Route path="/career" element={<Career />} />
        <Route path="/career/moes-dom-technical-assistant" element={<MoesDomTechnicalAssistant />} />
        <Route path="/career/moes-dom-project-associate" element={<MoesDomProjectAssociate />} />
        <Route path="/career/vice-chancellor-recruitment" element={<ViceChancellorRecruitment />} />
        <Route path="/career/director-research" element={<DirectorResearch />} />
        <Route path="/latest-updates" element={<LatestUpdates />} />
        <Route path="/online-payment-details" element={<OnlinePaymentDetails />} />
        <Route path="/rti" element={<RTI />} />
        <Route path="/sedg-cell" element={<SEDGCell />} />
        <Route path="/annual-accounts" element={<AnnualAccounts />} />
        <Route path="/ombudsperson" element={<Ombudsperson />} />
        <Route path="/chief-vigilance-officer" element={<ChiefVigilanceOfficer />} />
        <Route path="/profile/srinivas-gopal" element={<PrincipalDGS />} />
        <Route path="/finance-controller" element={<FinanceController />} />
        <Route path="/complaint-form" element={<ComplaintForm />} />
        <Route path="/sc-st-committee" element={<SCSTCommittee />} />
        <Route path="/internal-complaints-committee" element={<InternalComplaintsCommittee />} />
        <Route path="/staff-welfare-committee" element={<StaffWelfareCommittee />} />
        <Route path="/equal-opportunity-cell" element={<EqualOpportunityCell />} />
        <Route path="/women-empowerment-cell" element={<WomenEmpowermentCell />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/accessibility" element={<Accessibility />} />

        {/* Dr. J. Ramachandran Maritime Foundation */}
        <Route path="/maritime-foundation" element={<MFHome />} />
        <Route path="/maritime-foundation/vision-mission" element={<MFVisionMission />} />
        <Route path="/maritime-foundation/legend" element={<MFLegend />} />
        <Route path="/maritime-foundation/awards" element={<MFAwards />} />
        <Route path="/maritime-foundation/application" element={<MFApplication />} />
        <Route path="/maritime-foundation/agms-2025" element={<MFAgms2025 />} />
        <Route path="/maritime-foundation/contact" element={<MFContact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
