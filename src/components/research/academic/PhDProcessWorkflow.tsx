
import React from 'react';
import { GraduationCap } from 'lucide-react';

const PhDProcessWorkflow = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold text-aemet-navy mb-6 flex items-center">
        <GraduationCap className="h-6 w-6 mr-2 text-aemet-blue" />
        Ph.D. Process Workflow
      </h2>
      <div className="relative overflow-x-auto">
        <div className="flex flex-col md:flex-row gap-1 md:gap-0 md:justify-between">
          {/* Step 1: Admission */}
          <div className="w-full md:w-1/5 relative">
            <div className="bg-red-500 text-white p-5 rounded-tl-lg rounded-tr-lg md:rounded-tr-none md:rounded-l-lg">
              <h3 className="text-lg font-bold mb-2">Admission</h3>
              <div className="absolute -bottom-3 -right-3 hidden md:block">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 shadow-md rounded-bl-lg rounded-br-lg md:rounded-br-none md:rounded-bl-lg border border-gray-100">
              <ul className="text-sm space-y-2">
                <li className="flex items-start">
                  <span className="min-w-4 h-4 rounded-full bg-red-100 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-xs font-medium text-red-500">✓</span>
                  </span>
                  <span>As per UGC guidelines and AMET PhD Regulations 2017</span>
                </li>
                <li className="flex items-start">
                  <span className="min-w-4 h-4 rounded-full bg-red-100 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-xs font-medium text-red-500">✓</span>
                  </span>
                  <span>Entrance Examinations and Interview</span>
                </li>
                <li className="flex items-start">
                  <span className="min-w-4 h-4 rounded-full bg-red-100 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-xs font-medium text-red-500">✓</span>
                  </span>
                  <span>55% of marks in PG</span>
                </li>
                <li className="flex items-start">
                  <span className="min-w-4 h-4 rounded-full bg-red-100 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-xs font-medium text-red-500">✓</span>
                  </span>
                  <span>Admission done in every quarter of the Year</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Step 2: Provisional Registration */}
          <div className="w-full md:w-1/5 relative">
            <div className="bg-green-500 text-white p-5 md:rounded-none rounded-tl-lg rounded-tr-lg">
              <h3 className="text-lg font-bold mb-2">Provisional Registration</h3>
              <div className="absolute -bottom-3 -right-3 hidden md:block">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 shadow-md md:rounded-none rounded-bl-lg rounded-br-lg border border-gray-100">
              <ul className="text-sm space-y-2">
                <li className="flex items-start">
                  <span className="min-w-4 h-4 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-xs font-medium text-green-500">✓</span>
                  </span>
                  <span>Department Research Committee (DRC) allots Guide</span>
                </li>
                <li className="flex items-start">
                  <span className="min-w-4 h-4 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-xs font-medium text-green-500">✓</span>
                  </span>
                  <span>Doctoral Committee (DC) evaluates candidate performance</span>
                </li>
                <li className="flex items-start">
                  <span className="min-w-4 h-4 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-xs font-medium text-green-500">✓</span>
                  </span>
                  <span>Registration confirmed only after course works</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Step 3: Course Works */}
          <div className="w-full md:w-1/5 relative">
            <div className="bg-purple-500 text-white p-5 md:rounded-none rounded-tl-lg rounded-tr-lg">
              <h3 className="text-lg font-bold mb-2">Course Works</h3>
              <div className="absolute -bottom-3 -right-3 hidden md:block">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 shadow-md md:rounded-none rounded-bl-lg rounded-br-lg border border-gray-100">
              <ul className="text-sm space-y-2">
                <li className="flex items-start">
                  <span className="min-w-4 h-4 rounded-full bg-purple-100 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-xs font-medium text-purple-500">✓</span>
                  </span>
                  <span>Minimum 3 course works prescribed by the DC</span>
                </li>
                <li className="flex items-start">
                  <span className="min-w-4 h-4 rounded-full bg-purple-100 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-xs font-medium text-purple-500">✓</span>
                  </span>
                  <span>Research Methodology is compulsory</span>
                </li>
                <li className="flex items-start">
                  <span className="min-w-4 h-4 rounded-full bg-purple-100 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-xs font-medium text-purple-500">✓</span>
                  </span>
                  <span>Course works to be done in one or two semesters</span>
                </li>
                <li className="flex items-start">
                  <span className="min-w-4 h-4 rounded-full bg-purple-100 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-xs font-medium text-purple-500">✓</span>
                  </span>
                  <span>Examinations conducted every quarter of the year</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Step 4: Research */}
          <div className="w-full md:w-1/5 relative">
            <div className="bg-blue-500 text-white p-5 md:rounded-none rounded-tl-lg rounded-tr-lg">
              <h3 className="text-lg font-bold mb-2">Research</h3>
              <div className="absolute -bottom-3 -right-3 hidden md:block">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 shadow-md md:rounded-none rounded-bl-lg rounded-br-lg border border-gray-100">
              <ul className="text-sm space-y-2">
                <li className="flex items-start">
                  <span className="min-w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-xs font-medium text-blue-500">✓</span>
                  </span>
                  <span>Evaluated by the DC and DRC</span>
                </li>
                <li className="flex items-start">
                  <span className="min-w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-xs font-medium text-blue-500">✓</span>
                  </span>
                  <span>Half yearly progress reports</span>
                </li>
                <li className="flex items-start">
                  <span className="min-w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-xs font-medium text-blue-500">✓</span>
                  </span>
                  <span>Publications- Minimum 3 in SCOPUS</span>
                </li>
                <li className="flex items-start">
                  <span className="min-w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-xs font-medium text-blue-500">✓</span>
                  </span>
                  <span>Two Conference papers</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Step 5: Ph.D. Evaluation */}
          <div className="w-full md:w-1/5 relative">
            <div className="bg-orange-500 text-white p-5 rounded-tl-lg rounded-tr-lg md:rounded-tl-none md:rounded-r-lg">
              <h3 className="text-lg font-bold mb-2">Ph.D. Evaluation</h3>
            </div>
            <div className="bg-white p-4 shadow-md rounded-bl-lg rounded-br-lg md:rounded-bl-none md:rounded-br-lg border border-gray-100">
              <ul className="text-sm space-y-2">
                <li className="flex items-start">
                  <span className="min-w-4 h-4 rounded-full bg-orange-100 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-xs font-medium text-orange-500">✓</span>
                  </span>
                  <span>Synopsis DC meeting, Pre-PhD Presentation</span>
                </li>
                <li className="flex items-start">
                  <span className="min-w-4 h-4 rounded-full bg-orange-100 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-xs font-medium text-orange-500">✓</span>
                  </span>
                  <span>Plagiarism Checking by DRKRND</span>
                </li>
                <li className="flex items-start">
                  <span className="min-w-4 h-4 rounded-full bg-orange-100 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-xs font-medium text-orange-500">✓</span>
                  </span>
                  <span>Thesis is adjudicated by both Indian and Foreign Examiners</span>
                </li>
                <li className="flex items-start">
                  <span className="min-w-4 h-4 rounded-full bg-orange-100 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-xs font-medium text-orange-500">✓</span>
                  </span>
                  <span>Public Viva Voce Examination</span>
                </li>
                <li className="flex items-start">
                  <span className="min-w-4 h-4 rounded-full bg-orange-100 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-xs font-medium text-orange-500">✓</span>
                  </span>
                  <span>Thesis will be uploaded in SHODHGANGA</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Connecting arrows for desktop */}
          <div className="hidden md:block absolute top-1/2 left-[19%] w-[2%] h-0.5 bg-gray-300"></div>
          <div className="hidden md:block absolute top-1/2 left-[39%] w-[2%] h-0.5 bg-gray-300"></div>
          <div className="hidden md:block absolute top-1/2 left-[59%] w-[2%] h-0.5 bg-gray-300"></div>
          <div className="hidden md:block absolute top-1/2 left-[79%] w-[2%] h-0.5 bg-gray-300"></div>
        </div>
      </div>
    </section>
  );
};

export default PhDProcessWorkflow;
