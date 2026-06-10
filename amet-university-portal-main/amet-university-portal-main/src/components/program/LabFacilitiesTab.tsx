import React from 'react';
import { Microscope, FlaskConical, TestTubes, Beaker } from 'lucide-react';

interface LabFacilitiesTabProps {
  program: {
    labFacilities?: string;
    [key: string]: any;
  };
}

const LabFacilitiesTab: React.FC<LabFacilitiesTabProps> = ({ program }) => {
  if (!program.labFacilities) {
    return (
      <div className="text-gray-500 italic">
        Lab facilities information not available for this program.
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-aemet-navy mb-4">Lab Facilities</h2>
      
      <div className="bg-gradient-to-br from-aemet-navy/5 to-aemet-blue/10 border border-aemet-blue/20 rounded-lg p-6 mb-6">
        <div className="flex items-center gap-4 mb-4">
          <FlaskConical className="h-8 w-8 text-aemet-blue" />
          <Microscope className="h-8 w-8 text-aemet-blue" />
          <Beaker className="h-8 w-8 text-aemet-blue" />
          <TestTubes className="h-8 w-8 text-aemet-blue" />
        </div>
        <div className="text-gray-700 whitespace-pre-line leading-relaxed">
          {program.labFacilities}
        </div>
      </div>
    </div>
  );
};

export default LabFacilitiesTab;
