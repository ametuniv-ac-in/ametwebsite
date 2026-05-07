import React from 'react';
import { Target } from 'lucide-react';

interface AimTabProps {
  program: {
    aim?: string;
    [key: string]: any;
  };
}

const AimTab: React.FC<AimTabProps> = ({ program }) => {
  if (!program.aim) {
    return (
      <div className="text-gray-500 italic">
        Aim information not available for this program.
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-aemet-navy mb-4">Aim</h2>
      
      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
        <h3 className="text-lg font-semibold text-aemet-navy mb-3 flex items-center">
          <Target className="text-aemet-blue mr-2 h-5 w-5" />
          Program Aim
        </h3>
        <div className="text-gray-700 whitespace-pre-line">
          {program.aim}
        </div>
      </div>
    </div>
  );
};

export default AimTab;
