
import React from 'react';
import { Microscope, Users } from 'lucide-react';

const ResearchCenterInfo = () => {
  return (
    <>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-aemet-navy mb-4">Centre for Research</h2>
        <p className="text-gray-700 mb-4">
          The administrative aspects of the Ph.D., research programme at AMET are facilitated by the Centre for Research headed by the Director Research. The Centre provides end to end assistance for the Ph.D., scholars in every stage of their Ph.D., research programme.
        </p>
        <p className="text-gray-700 mb-4"> 
          The Centre frequently organizes workshops, guest lectures and sensitization programmes for the promotion of academic research, technical writing, academic integrity, plagiarism issues, research methodology, statistical methods etc.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center mb-4">
            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
              <Microscope className="h-6 w-6 text-aemet-blue" />
            </div>
            <h3 className="text-lg font-semibold text-aemet-navy">Research Facilities</h3>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <span className="text-xs font-medium text-aemet-blue">✓</span>
              </span>
              <span>50+ sophisticated laboratories</span>
            </li>
            <li className="flex items-start">
              <span className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <span className="text-xs font-medium text-aemet-blue">✓</span>
              </span>
              <span>2 exclusive research centers</span>
            </li>
            <li className="flex items-start">
              <span className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <span className="text-xs font-medium text-aemet-blue">✓</span>
              </span>
              <span>7 specialized research laboratories</span>
            </li>
            <li className="flex items-start">
              <span className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <span className="text-xs font-medium text-aemet-blue">✓</span>
              </span>
              <span>124+ major equipment units</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center mb-4">
            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
              <Users className="h-6 w-6 text-aemet-blue" />
            </div>
            <h3 className="text-lg font-semibold text-aemet-navy">Research Community</h3>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <span className="text-xs font-medium text-aemet-blue">✓</span>
              </span>
              <span>15 academic disciplines</span>
            </li>
            <li className="flex items-start">
              <span className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <span className="text-xs font-medium text-aemet-blue">✓</span>
              </span>
              <span>262 active Ph.D. research scholars</span>
            </li>
            <li className="flex items-start">
              <span className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <span className="text-xs font-medium text-aemet-blue">✓</span>
              </span>
              <span>168 doctorate degrees awarded</span>
            </li>
            <li className="flex items-start">
              <span className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <span className="text-xs font-medium text-aemet-blue">✓</span>
              </span>
              <span>Interdisciplinary research approach</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ResearchCenterInfo;
