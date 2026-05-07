
import React from 'react';
import { GraduationCap } from 'lucide-react';

const ConvocationIntro: React.FC = () => {
  return (
    <div className="prose max-w-none mb-8">
      <div className="bg-gradient-to-r from-aemet-navy to-blue-700 text-white p-6 rounded-lg mb-8">
        <div className="flex items-center mb-4">
          <GraduationCap className="h-8 w-8 mr-3" />
          <h2 className="text-2xl font-bold">Celebrating Academic Excellence</h2>
        </div>
        <p className="text-white/90">
          AMET University's annual convocation ceremony is a prestigious event that celebrates 
          the academic achievements of our graduates. It marks the culmination of years of hard work, 
          dedication, and perseverance. The ceremony brings together students, faculty, families, and 
          distinguished guests to honor the accomplishments of our graduating students.
        </p>
      </div>
    </div>
  );
};

export default ConvocationIntro;
