import React from 'react';
import { Calendar } from 'lucide-react';

interface ProgrammePatternTabProps {
  program: {
    programmePattern?: string;
    [key: string]: any;
  };
}

const ProgrammePatternTab: React.FC<ProgrammePatternTabProps> = ({ program }) => {
  if (!program.programmePattern) {
    return (
      <div className="text-gray-500 italic">
        Programme Pattern information not available for this program.
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-aemet-navy mb-4">Programme Pattern</h2>
      
      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
        <h3 className="text-lg font-semibold text-aemet-navy mb-3 flex items-center">
          <Calendar className="text-aemet-blue mr-2 h-5 w-5" />
          Programme Pattern
        </h3>
        <div className="text-gray-700 whitespace-pre-line">
          {program.programmePattern}
        </div>
      </div>
    </div>
  );
};

export default ProgrammePatternTab;
