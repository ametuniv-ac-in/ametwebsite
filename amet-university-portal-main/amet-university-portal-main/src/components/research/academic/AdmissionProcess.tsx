
import React from 'react';
import { Calendar } from 'lucide-react';

const AdmissionProcess = () => {
  return (
    <section className="mb-10 bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
      <h2 className="text-xl font-semibold text-aemet-navy mb-4 flex items-center">
        <Calendar className="h-5 w-5 mr-2 text-aemet-blue" />
        Ph.D. Admission Process
      </h2>
      <p className="text-gray-700 mb-4">
        Admission to Ph.D., programme is based on the availability of vacancy in the respective Departments which will be notified widely. Normally in every quarter of the year, applications will be invited. Eligible candidate will be selected based on entrance examinations and interview as per AMET Ph.D., regulations 2023.
      </p>
      <div className="mt-4 flex justify-center">
        <a 
          href="#apply-phd" 
          className="inline-flex items-center px-4 py-2 bg-aemet-blue text-white rounded-md hover:bg-aemet-navy transition-colors text-sm"
        >
          Apply for Ph.D. Program
        </a>
      </div>
    </section>
  );
};

export default AdmissionProcess;
