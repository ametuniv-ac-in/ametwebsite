
import React from 'react';
import { GraduationCap } from 'lucide-react';

interface MedicalInitiativeProps {
  content: string;
}

const MedicalInitiative: React.FC<MedicalInitiativeProps> = ({ content }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold text-aemet-navy mb-4 flex items-center gap-2">
        <GraduationCap className="h-5 w-5" />
        Medical Education Initiative
      </h3>
      <p>{content}</p>
    </div>
  );
};

export default MedicalInitiative;
