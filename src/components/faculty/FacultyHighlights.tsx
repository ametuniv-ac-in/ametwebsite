import React from 'react';
import { ChevronRight } from 'lucide-react';

interface FacultyHighlightsProps {
  facultyId: string;
}

const FacultyHighlights: React.FC<FacultyHighlightsProps> = ({ facultyId }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 h-full">
      <h2 className="text-2xl font-bold text-aemet-navy mb-4">Faculty Highlights</h2>
      <ul className="space-y-3">
        {facultyId === 'maritime' ? (
          <>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                <ChevronRight className="h-4 w-4 text-aemet-blue" />
              </div>
              <span className="text-gray-600">IMO and STCW compliant curriculum</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                <ChevronRight className="h-4 w-4 text-aemet-blue" />
              </div>
              <span className="text-gray-600">State-of-the-art bridge and engine room simulators</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                <ChevronRight className="h-4 w-4 text-aemet-blue" />
              </div>
              <span className="text-gray-600">Dedicated training vessel for practical experience</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                <ChevronRight className="h-4 w-4 text-aemet-blue" />
              </div>
              <span className="text-gray-600">100% placement record for top performing students</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                <ChevronRight className="h-4 w-4 text-aemet-blue" />
              </div>
              <span className="text-gray-600">Industry partnerships with leading shipping companies</span>
            </li>
          </>
        ) : facultyId === 'engineering-tech' ? (
          <>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                <ChevronRight className="h-4 w-4 text-aemet-blue" />
              </div>
              <span className="text-gray-600">AICTE approved programs with industry-focused curriculum</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                <ChevronRight className="h-4 w-4 text-aemet-blue" />
              </div>
              <span className="text-gray-600">Advanced laboratories for computer science, mechanical, and electrical engineering</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                <ChevronRight className="h-4 w-4 text-aemet-blue" />
              </div>
              <span className="text-gray-600">Specialized research centers for petroleum and naval architecture</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                <ChevronRight className="h-4 w-4 text-aemet-blue" />
              </div>
              <span className="text-gray-600">Strong placement records with top technology and engineering companies</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                <ChevronRight className="h-4 w-4 text-aemet-blue" />
              </div>
              <span className="text-gray-600">Industry collaborations for real-world project experience</span>
            </li>
          </>
        ) : facultyId === 'science-humanities' ? (
          <>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                <ChevronRight className="h-4 w-4 text-aemet-blue" />
              </div>
              <span className="text-gray-600">Highly qualified faculty with specializations in diverse fields</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                <ChevronRight className="h-4 w-4 text-aemet-blue" />
              </div>
              <span className="text-gray-600">Advanced laboratories for research in physics, chemistry and mathematics</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                <ChevronRight className="h-4 w-4 text-aemet-blue" />
              </div>
              <span className="text-gray-600">Open Elective Courses and Value Added Courses for enhanced learning</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                <ChevronRight className="h-4 w-4 text-aemet-blue" />
              </div>
              <span className="text-gray-600">Student-led workshops, symposia, and conferences in emerging areas</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                <ChevronRight className="h-4 w-4 text-aemet-blue" />
              </div>
              <span className="text-gray-600">Focus on moral development alongside academic excellence</span>
            </li>
          </>
        ) : facultyId === 'aviation' ? (
          <>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                <ChevronRight className="h-4 w-4 text-aemet-blue" />
              </div>
              <span className="text-gray-600">Industry-integrated undergraduate programs</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                <ChevronRight className="h-4 w-4 text-aemet-blue" />
              </div>
              <span className="text-gray-600">Partnership with BCAS-cleared Global Flight Handling Services</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                <ChevronRight className="h-4 w-4 text-aemet-blue" />
              </div>
              <span className="text-gray-600">Experiential learning with industry professionals</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                <ChevronRight className="h-4 w-4 text-aemet-blue" />
              </div>
              <span className="text-gray-600">On-the-Job Training (OJT) opportunities in Aviation Sector</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                <ChevronRight className="h-4 w-4 text-aemet-blue" />
              </div>
              <span className="text-gray-600">ISO-certified training in ground handling services</span>
            </li>
          </>
        ) : facultyId === 'computing-sciences' ? (
          <>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                <ChevronRight className="h-4 w-4 text-aemet-blue" />
              </div>
              <span className="text-gray-600">Comprehensive undergraduate and graduate programs in advanced computing</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                <ChevronRight className="h-4 w-4 text-aemet-blue" />
              </div>
              <span className="text-gray-600">State-of-the-art research facilities and equipment</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                <ChevronRight className="h-4 w-4 text-aemet-blue" />
              </div>
              <span className="text-gray-600">Expert faculty engaged in industry collaborations and research</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                <ChevronRight className="h-4 w-4 text-aemet-blue" />
              </div>
              <span className="text-gray-600">Outreach programs including workshops, seminars, and conferences</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                <ChevronRight className="h-4 w-4 text-aemet-blue" />
              </div>
              <span className="text-gray-600">Focus on cutting-edge topics including AI, computer security, and machine learning</span>
            </li>
          </>
        ) : (
          <>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                <ChevronRight className="h-4 w-4 text-aemet-blue" />
              </div>
              <span className="text-gray-600">UGC approved programs</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                <ChevronRight className="h-4 w-4 text-aemet-blue" />
              </div>
              <span className="text-gray-600">Industry-focused curriculum</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                <ChevronRight className="h-4 w-4 text-aemet-blue" />
              </div>
              <span className="text-gray-600">Specialized management labs and simulation centers</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                <ChevronRight className="h-4 w-4 text-aemet-blue" />
              </div>
              <span className="text-gray-600">Strong placement record with top companies</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                <ChevronRight className="h-4 w-4 text-aemet-blue" />
              </div>
              <span className="text-gray-600">The institution has active industry partnerships with the Confederation of Indian Industry (CII) and FACE Prep that support skill development, training, and placement readiness.</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                <ChevronRight className="h-4 w-4 text-aemet-blue" />
              </div>
              <span className="text-gray-600">Experiential learning with industry professionals</span>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default FacultyHighlights;
