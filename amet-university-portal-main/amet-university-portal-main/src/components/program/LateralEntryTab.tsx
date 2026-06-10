import React from 'react';
import { ArrowRight, CheckCircle, Users, Info } from 'lucide-react';

interface LateralEntryTabProps {
  program: any;
}

const LateralEntryTab: React.FC<LateralEntryTabProps> = ({ program }) => {
  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-aemet-navy mb-6">Lateral Entry</h2>
      
      <div className="bg-blue-50 border-l-4 border-aemet-blue rounded-lg p-6 mb-6">
        <div className="flex items-start gap-3">
          <Info className="h-5 w-5 text-aemet-blue mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-aemet-navy mb-2">About Lateral Entry</h3>
            <p className="text-gray-700">
              Eligible students from diploma or B.Sc. background can join directly into the second year of the B.E. Naval Architecture program.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
        <h3 className="text-lg font-bold text-aemet-navy mb-4 flex items-center">
          <CheckCircle className="h-5 w-5 text-aemet-blue mr-2" />
          Eligible Candidates
        </h3>
        
        <div className="space-y-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-semibold text-aemet-navy mb-2">Diploma Holders</h4>
            <p className="text-gray-700">
              Students with Diploma in the following streams are eligible to be admitted in second year of the study:
            </p>
            <ul className="mt-2 space-y-1 ml-4">
              <li className="text-gray-700 flex items-start">
                <span className="text-aemet-blue mr-2">•</span>
                Mechanical Engineering
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="text-aemet-blue mr-2">•</span>
                Civil Engineering
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="text-aemet-blue mr-2">•</span>
                Metallurgy
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="text-aemet-blue mr-2">•</span>
                Production Engineering
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="text-aemet-blue mr-2">•</span>
                Naval Architecture
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="text-aemet-blue mr-2">•</span>
                Marine Engineering
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="text-aemet-blue mr-2">•</span>
                Shipbuilding
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-semibold text-aemet-navy mb-2">B.Sc. Graduates</h4>
            <p className="text-gray-700">
              B.Sc. graduates in the following streams are eligible to be admitted in second year of the study:
            </p>
            <ul className="mt-2 space-y-1 ml-4">
              <li className="text-gray-700 flex items-start">
                <span className="text-aemet-blue mr-2">•</span>
                Mathematics
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="text-aemet-blue mr-2">•</span>
                Physics
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
        <h3 className="text-lg font-bold text-aemet-navy mb-4">Eligibility Criteria</h3>
        <p className="text-gray-700">
          A pass in plus-two (12th standard) or its equivalent, with minimum <strong>50% Marks for OC</strong> and <strong>45% for others</strong> aggregate in Maths, Physics and Chemistry Group from any recognized Board.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-aemet-navy to-aemet-blue text-white rounded-lg p-6">
          <h4 className="font-semibold mb-2 flex items-center">
            <ArrowRight className="h-5 w-5 mr-2" />
            Mode of Selection
          </h4>
          <p className="text-white/90">Admission test / Personal interview</p>
        </div>

        <div className="bg-gradient-to-br from-aemet-blue to-blue-600 text-white rounded-lg p-6">
          <h4 className="font-semibold mb-2 flex items-center">
            <Users className="h-5 w-5 mr-2" />
            Who Can Apply
          </h4>
          <p className="text-white/90">Boys and Girls are eligible to apply</p>
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-6">
        <p className="text-amber-900 text-sm font-medium">
          <strong>Note:</strong> Lateral Entry is subject to availability of seats
        </p>
      </div>
    </div>
  );
};

export default LateralEntryTab;
