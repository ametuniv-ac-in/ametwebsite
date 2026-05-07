
import React from 'react';
import { Card } from "@/components/ui/card";
import { Phone, Mail } from "lucide-react";
import AdmissionsLayout from '@/components/admissions/AdmissionsLayout';
import MaritimeAdmissionProcess from '@/components/admissions/MaritimeAdmissionProcess';
import GeneralAdmissionProcess from '@/components/admissions/GeneralAdmissionProcess';
import ImportantAnnouncements from '@/components/admissions/ImportantAnnouncements';
import AdmissionProcessGuidelines from '@/components/admissions/AdmissionProcessGuidelines';
import AdmissionRecruitmentDrive from '@/components/admissions/AdmissionRecruitmentDrive';

const helplineNumbers = [
  { languages: "Malayalam / English", number: "0 99620 80324" },
  { languages: "English / Tamil / Telugu", number: "0 93443 91418" },
  { languages: "Tamil / English", number: "0 99416 46119" },
  { languages: "English / Tamil / Kannada", number: "0 76677 99444" },
  { languages: "English / Tamil", number: "0 99629 96462" },
  { languages: "Hindi / English", number: "0 87545 99801" },
  { languages: "Hindi / English", number: "0 99629 96453" },
];

const Admissions = () => {
  return (
    <AdmissionsLayout title="Admissions Overview">
      <div>
        <div className="bg-gray-100 p-6 md:p-8 rounded-lg mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-amet-navy mb-2">
            Admissions Overview
          </h1>
        </div>
        
        <Card className="p-6 md:p-8 shadow-md bg-white mb-8">
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
              AMET serves as an ocean of knowledge for over 5000 students pursuing Programmes. AMET offers 25 UG programmes, 5 DG approved Certification programmes, 7 PG programmes and 14 Research Programmes. In addition to full-time Ph.D Degrees through Faculty of Maritime Studies, Faculty of Engineering and Technology, Faculty of Advanced Computing Science, Faculty of Management Studies, Faculty of Commerce, Faculty of Life Sciences, Faculty of Liberal Arts, Faculty of Science and Humanities, related to marine and general sector programmes.
            </p>
            
            <p className="text-gray-700 leading-relaxed text-lg">
              All admitted students should register in the School relevant to their selected programme.
            </p>
          </div>
        </Card>

        {/* Admission Helpline Section - Moved to top */}
        <Card className="p-6 md:p-8 shadow-md bg-white mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-amet-navy mb-4 flex items-center gap-2">
            <Phone className="h-6 w-6" />
            Admission Helpline Numbers
          </h2>

          <div className="flex items-center gap-2 text-lg mb-6">
            <Mail className="h-5 w-5 text-amet-navy" />
            <span className="font-semibold text-amet-navy">Email id : </span>
            <a href="mailto:admission@ametuniv.ac.in" className="text-amet-blue hover:underline">
              admission@ametuniv.ac.in
            </a>
          </div>
          
          <div className="mb-6">
            <div className="bg-blue-900 text-white p-4 rounded-lg inline-block mb-6">
              <span className="font-semibold">Toll Free Number : </span>
              <a href="tel:18001083030" className="text-xl font-bold hover:underline">1800 108 3030</a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {helplineNumbers.map((item, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-600 mb-1">{item.languages}</p>
                <a href={`tel:${item.number.replace(/\s/g, '')}`} className="text-lg font-semibold text-amet-navy hover:text-amet-blue">
                  {item.number}
                </a>
              </div>
            ))}
          </div>
        </Card>

        {/* For International Admission - Moved to top */}
        <Card className="p-6 md:p-8 shadow-md bg-white mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-amet-navy mb-4">
            For International Admission
          </h2>
          <div className="space-y-2">
            <p className="text-gray-700">
              <strong>E-Mail:</strong>{" "}
              <a href="mailto:internationaloffice@ametuniv.ac.in" className="text-amet-blue hover:underline">internationaloffice@ametuniv.ac.in</a>
              {" "}/{" "}
              <a href="mailto:exdrinrl@gmail.com" className="text-amet-blue hover:underline">exdrinrl@gmail.com</a>
            </p>
            <p className="text-gray-700">
              <strong>Contact:</strong> <a href="tel:+919444752994" className="text-amet-blue hover:underline">91 - 94447 52994</a>
            </p>
          </div>
        </Card>

        {/* Maritime Admission Process */}
        <MaritimeAdmissionProcess />

        {/* General UG/PG Admission Process */}
        <GeneralAdmissionProcess />

        {/* Important Announcements */}
        <ImportantAnnouncements />

        {/* Admission Process and Guidelines */}
        <AdmissionProcessGuidelines />

        {/* Admission and Recruitment Drive */}
        <AdmissionRecruitmentDrive />
      </div>
    </AdmissionsLayout>
  );
};

export default Admissions;
