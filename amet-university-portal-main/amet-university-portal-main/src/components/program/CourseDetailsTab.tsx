import React from 'react';
import { GraduationCap, Clock } from 'lucide-react';

interface CourseDetailsTabProps {
  program: {
    courseDetails?: string;
    [key: string]: any;
  };
}

const CourseDetailsTab: React.FC<CourseDetailsTabProps> = ({ program }) => {
  if (!program.courseDetails) {
    return (
      <div className="text-gray-500 italic">
        Course details information not available for this program.
      </div>
    );
  }

  const courses = program.courseDetails.split('\n\n').filter(section => section.trim());

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-aemet-navy mb-6">Course Details</h2>
      
      <div className="space-y-6">
        {courses.map((courseSection, index) => {
          const lines = courseSection.split('\n').filter(line => line.trim());
          const title = lines[0];
          const content = lines.slice(1);
          
          return (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-aemet-navy mb-4 flex items-center">
                <GraduationCap className="text-aemet-blue mr-2 h-5 w-5" />
                {title}
              </h3>
              <div className="space-y-3">
                {content.map((line, lineIndex) => {
                  if (line.startsWith('Duration:')) {
                    return (
                      <div key={lineIndex} className="flex items-center gap-2 text-aemet-blue font-semibold mt-4">
                        <Clock className="h-4 w-4" />
                        {line}
                      </div>
                    );
                  } else if (line.startsWith('•')) {
                    return (
                      <div key={lineIndex} className="flex items-start gap-2 ml-4">
                        <span className="text-aemet-blue mt-1">•</span>
                        <p className="text-gray-700">{line.substring(1).trim()}</p>
                      </div>
                    );
                  } else {
                    return (
                      <p key={lineIndex} className="text-gray-700 leading-relaxed">
                        {line}
                      </p>
                    );
                  }
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseDetailsTab;
