
import React from 'react';
import { Award } from 'lucide-react';

interface AwardsProps {
  awards: string[];
}

const Awards: React.FC<AwardsProps> = ({ awards }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold text-aemet-navy mb-4 flex items-center gap-2">
        <Award className="h-5 w-5" />
        Awards and Recognition
      </h3>
      <p className="mb-2">
        His entrepreneurial acumen and edupreneurial efforts attracted many an award nationally and internationally including:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        {awards.map((award, index) => (
          <li key={index}>{award}</li>
        ))}
      </ul>
    </div>
  );
};

export default Awards;
