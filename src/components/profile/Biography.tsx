
import React from 'react';

interface BiographyProps {
  title: string;
  paragraphs: string[];
}

const Biography: React.FC<BiographyProps> = ({ title, paragraphs }) => {
  return (
    <div className="space-y-6 text-gray-700">
      <h2 className="text-2xl font-semibold text-aemet-navy mb-6">{title}</h2>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default Biography;
