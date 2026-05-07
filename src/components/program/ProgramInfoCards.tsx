
import React from 'react';
import { Calendar } from 'lucide-react';

interface ProgramInfoCardsProps {
  program: {
    duration: string;
  };
}

const ProgramInfoCards: React.FC<ProgramInfoCardsProps> = ({ program }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div className="bg-white rounded-lg shadow-md p-5">
        <div className="flex items-center mb-3">
          <Calendar className="h-5 w-5 text-aemet-blue mr-2" />
          <h3 className="font-medium text-aemet-navy">Duration</h3>
        </div>
        <p className="text-gray-700">{program.duration}</p>
      </div>
    </div>
  );
};

export default ProgramInfoCards;
