import React from 'react';
import { Star } from 'lucide-react';
import { ProgramDetails } from './ProgramTypeDefinitions';

interface PSOsTabProps {
  program: ProgramDetails;
}

const PSOsTab = ({ program }: PSOsTabProps) => {
  if (!program.psos || program.psos.length === 0) {
    return (
      <div className="text-gray-500 italic">
        Programme Specific Objectives information not available for this program.
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-aemet-navy mb-4">Programme Specific Objectives</h2>
      
      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
        <h3 className="text-lg font-semibold text-aemet-navy mb-3 flex items-center">
          <Star className="text-aemet-blue mr-2 h-5 w-5" />
          Programme Specific Objectives (PSOs)
        </h3>
        <p className="text-gray-700 mb-3">The graduates of the program will:</p>
        <div className="space-y-3">
          {program.psos.map((pso, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 h-6 min-w-[24px] bg-aemet-blue text-white rounded-full flex items-center justify-center mr-3 mt-0.5 text-sm font-medium">
                {index + 1}
              </div>
              <p className="text-gray-700"><span className="font-medium">PSO{index + 1}:</span> {pso}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PSOsTab;
