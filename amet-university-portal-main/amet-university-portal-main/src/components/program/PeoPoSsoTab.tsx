import React from 'react';
import { Target, Star, Award } from 'lucide-react';
import { ProgramDetails } from './ProgramTypeDefinitions';

interface PeoPoSsoTabProps {
  program: ProgramDetails;
}

const PeoPoSsoTab: React.FC<PeoPoSsoTabProps> = ({ program }) => {
  const hasPEO = program.peos && program.peos.length > 0;
  const hasPO = program.pos && program.pos.length > 0;
  const hasPSO = program.psos && program.psos.length > 0;

  if (!hasPEO && !hasPO && !hasPSO) {
    return (
      <div className="text-gray-500 italic">
        Programme Educational Objectives (PEO), Programme Outcomes (PO), and Programme Specific Outcomes (PSO) information not available for this program.
      </div>
    );
  }

  return (
    <div className="animate-fade-in space-y-8">
      <h2 className="text-2xl font-bold text-aemet-navy mb-6">PEO, PO & PSO</h2>

      {/* Programme Educational Objectives (PEO) */}
      {hasPEO && (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-aemet-navy mb-4 flex items-center">
            <Target className="text-aemet-blue mr-2 h-6 w-6" />
            Programme Educational Objectives (PEO)
          </h3>
          <div className="space-y-3">
            {program.peos?.map((peo, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-gray-700">
                  <span className="font-semibold text-aemet-navy">PEO {index + 1}:</span> {peo}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Program Outcomes (PO) */}
      {hasPO && (
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-aemet-navy mb-4 flex items-center">
            <Award className="text-green-600 mr-2 h-6 w-6" />
            Program Outcomes (PO)
          </h3>
          <div className="space-y-3">
            {program.pos?.map((po, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-gray-700">
                  <span className="font-semibold text-aemet-navy">PO {index + 1}:</span> {po}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Programme Specific Outcomes (PSO) */}
      {hasPSO && (
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-aemet-navy mb-4 flex items-center">
            <Star className="text-purple-600 mr-2 h-6 w-6" />
            Programme Specific Outcomes (PSO)
          </h3>
          <div className="space-y-3">
            {program.psos?.map((pso, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-gray-700">
                  <span className="font-semibold text-aemet-navy">PSO {index + 1}:</span> {pso}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PeoPoSsoTab;
