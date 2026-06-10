import React from 'react';
import { Card } from "@/components/ui/card";

const steps = [
  "Admissions open will be posted through advts in various platforms and AMET Website as well",
  "Submission of AMET Application through online https://www.ametuniv.ac.in/application-form.html",
  "Application Verifying and Scrutiny Eligibility Criteria",
  "AMET CET will be conducted at the month of April & May 2026",
  "Preparation of Rank list and shortlisted candidates will be declared in website",
  "Counselling and Information sent to the selected and eligible candidates",
];

const GeneralAdmissionProcess = () => {
  return (
    <Card className="p-6 md:p-8 shadow-md bg-white mb-8">
      <h2 className="text-xl md:text-2xl font-bold text-amet-navy mb-6">
        For General UG and PG Programmes
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-amet-blue transition-colors"
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-sm">
              {index + 1}
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">{step}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default GeneralAdmissionProcess;
