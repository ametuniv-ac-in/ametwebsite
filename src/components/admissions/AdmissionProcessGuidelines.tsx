import React from 'react';
import { Card } from "@/components/ui/card";

const AdmissionProcessGuidelines = () => {
  return (
    <Card className="p-6 md:p-8 shadow-md bg-white mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-amet-navy mb-6 text-center uppercase">
        Admission Process and Guidelines
      </h2>
      
      <div className="prose max-w-none space-y-6">
        <p className="text-gray-700 leading-relaxed">
          Candidates seeking admission for Under Graduate / Post Graduate / GME / ETO / GP Rating / Lateral Entry offered by AMET to apply as follows:
        </p>
        
        <p className="text-gray-700 leading-relaxed">
          Online Application Form available on the website, candidate can fill out the application form and make an online payment of Rs.1,250 +GST through Payment Gateway.
        </p>
        
        <p className="text-red-600 font-semibold">
          The fee towards application is non-refundable under any circumstances.
        </p>

        {/* Procedure to fill Application Form */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-amet-navy mb-4">Procedure to fill the Application Form</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-2">
              <span className="text-amet-blue">•</span>
              The application form must be complete in all aspects. To avoid rejection of your application, ensure that all uploaded documents are visible.
            </li>
            <li className="flex gap-2">
              <span className="text-amet-blue">•</span>
              Please note that the address that you furnish in this column shall remain unchanged and shall be used for all future correspondences with you by the University.
            </li>
            <li className="flex gap-2">
              <span className="text-amet-blue">•</span>
              Ensure that your mailing address, PIN code, email ID, telephone number (with STD code), and mobile number are correctly provided. Please note that all communications will be sent to the registered mobile number and email ID that you have given.
            </li>
            <li className="flex gap-2">
              <span className="text-amet-blue">•</span>
              You must quote your Application Number as reference in all your future correspondences.
            </li>
            <li className="flex gap-2">
              <span className="text-amet-blue">•</span>
              Please ensure that you keep the acknowledgment receipt of the online application form safe for future reference.
            </li>
          </ul>
        </div>

        {/* Submission of Documents */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-amet-navy mb-4">Submission of Documents</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-2">
              <span className="text-amet-blue">•</span>
              Recently taken passport photographs White/off-white background is preferred. The file should be only in (.jpeg) format
            </li>
            <li className="flex gap-2">
              <span className="text-amet-blue">•</span>
              Please draw a rectangular box of size 6 cm (width) X 2 cm (height) on a A4 white paper. Sign with dark blue or black pen within the box.
            </li>
            <li className="flex gap-2">
              <span className="text-amet-blue">•</span>
              Scan the signature in (.jpeg) format using scanner and crop the image. The scanned signature image size should be within 5 kB to 150 kB.
            </li>
            <li className="flex gap-2">
              <span className="text-amet-blue">•</span>
              Attested Photocopies of the relevant certificates and documents should be submitted along with the Application Form if available (For details contact: <a href="tel:18001083030" className="text-amet-blue hover:underline font-semibold">1800 108 3030</a>).
            </li>
          </ul>
        </div>

        {/* Entrance Exam */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-amet-navy mb-4">Entrance Exam</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-2">
              <span className="text-amet-blue">•</span>
              The AMETCET 2026 Entrance Examination will be conducted through online. Phase I will be in April and Phase II will be in May 2026.
            </li>
            <li className="flex gap-2">
              <span className="text-amet-blue">•</span>
              Candidates seeking Admission to the undergraduate courses will be examined, based on the syllabus prescribed for Higher Secondary courses in subjects like Physics, Chemistry, Mathematics, English, General Awareness and Logical & Analytical reasoning.
            </li>
            <li className="flex gap-2">
              <span className="text-amet-blue">•</span>
              Candidates seeking Admission to the School of Management Studies will be examined, based on the Under Graduate Syllabus, Aptitude, Reasoning, Current Affairs, and English.
            </li>
            <li className="flex gap-2">
              <span className="text-amet-blue">•</span>
              Candidates seeking Admission in the Post Graduate Technical Programs will be examined based on the Merit & Personal Interview by the Directors of Schools / Heads of the Department.
            </li>
          </ul>
        </div>

        {/* Selection Process */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-amet-navy mb-4">Selection Process for BE Marine and B.Sc Nautical Science and other UG Programmes</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-2">
              <span className="text-amet-blue">1.</span>
              The candidates for Undergraduate admission will be shortlisted by preparing a Rank list based on the Marks obtained by the candidates in the AMETCET & 12th std board exams.
            </li>
            <li className="flex gap-2">
              <span className="text-amet-blue">2.</span>
              For BE Marine and B.Sc Nautical Science, the admission for shortlisted candidates is subject to qualifying the IMUCET, or they must secure a minimum of 40 percentile in the State-level Engineering Entrance Exam. As a final step they must clear the medical examination which will be carried out by the team of doctors approved by the Directorate General of Shipping, Govt of India. The Medical Examination fee shall be Rs.1500/- and has to be borne by the candidates at the time of the Medical Exam.
            </li>
          </ul>
          <div className="mt-4 p-3 bg-blue-50 rounded border-l-4 border-amet-blue">
            <p className="text-sm text-gray-700"><strong>Note:</strong> Minimum 60% of sanctioned strength will be admitted through IMUCET.</p>
            <p className="text-sm text-gray-700 mt-1">Point no 2 is not applicable for the other Undergraduate programmes.</p>
          </div>
        </div>

        {/* Payment of Fee */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-amet-navy mb-4">(F) Payment of Fee</h3>
          <p className="text-gray-700 mb-3">
            Selected candidates should pay their Partial fees of Rs. 25000/- as Admission and Registration Fees within FIVE days from the Date of Publication of the Selection list and balance fees within 15 days. Payment is to be made by DD/Online/Cash.
          </p>
          <div className="p-3 bg-red-50 rounded border-l-4 border-red-500">
            <p className="text-sm text-red-700"><strong>Note:</strong> Fee remittance in the form of Cheque payment/ Direct Cash Deposit in the Bank, shall not be accepted.</p>
          </div>
        </div>

        {/* General Information */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-amet-navy mb-4">(G) General Information</h3>
          <p className="text-gray-700">
            Candidates / Parents should make their own arrangements for their stay at Chennai during the period of Admission Process.
          </p>
        </div>
      </div>
    </Card>
  );
};

export default AdmissionProcessGuidelines;
