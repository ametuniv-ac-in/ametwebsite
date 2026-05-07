import React from 'react';
import { Building2 } from 'lucide-react';

interface InfrastructureTabProps {
  program: {
    infrastructure?: string;
    [key: string]: any;
  };
}

const InfrastructureTab: React.FC<InfrastructureTabProps> = ({ program }) => {
  if (!program.infrastructure) {
    return (
      <div className="text-gray-500 italic">
        Infrastructure information not available for this program.
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-aemet-navy mb-4">Infrastructure</h2>
      
      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
        <h3 className="text-lg font-semibold text-aemet-navy mb-3 flex items-center">
          <Building2 className="text-aemet-blue mr-2 h-5 w-5" />
          Infrastructure
        </h3>
        <div className="text-gray-700 whitespace-pre-line">
          {program.infrastructure}
        </div>
      </div>
    </div>
  );
};

export default InfrastructureTab;
