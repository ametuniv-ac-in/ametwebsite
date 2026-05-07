
import React from 'react';
import { Check } from 'lucide-react';

interface ReasonPointListProps {
  points: string[];
}

const ReasonPointList: React.FC<ReasonPointListProps> = ({ points }) => {
  return (
    <ul className="space-y-3">
      {points.map((point, index) => (
        <li key={index} className="flex items-start">
          <span className="flex-shrink-0 w-6 h-6 bg-amet-blue rounded-full flex items-center justify-center mt-0.5">
            <Check className="h-4 w-4 text-white" />
          </span>
          <span className="ml-3 text-gray-700">{point}</span>
        </li>
      ))}
    </ul>
  );
};

export default ReasonPointList;
