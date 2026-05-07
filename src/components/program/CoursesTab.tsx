import React from 'react';
import { BookOpen } from 'lucide-react';

interface CoursesTabProps {
  program: {
    courses?: string;
    [key: string]: any;
  };
}

const CoursesTab: React.FC<CoursesTabProps> = ({ program }) => {
  if (!program.courses) {
    return (
      <div className="text-gray-500 italic">
        Courses information not available for this program.
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-aemet-navy mb-4">Courses</h2>
      
      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
        <h3 className="text-lg font-semibold text-aemet-navy mb-3 flex items-center">
          <BookOpen className="text-aemet-blue mr-2 h-5 w-5" />
          Courses
        </h3>
        <div className="text-gray-700 whitespace-pre-line">
          {program.courses}
        </div>
      </div>
    </div>
  );
};

export default CoursesTab;
