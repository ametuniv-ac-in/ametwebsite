import React from 'react';
import { GraduationCap, Globe, Users, Award } from 'lucide-react';

interface TwinningProgrammeTabProps {
  program: any;
}

const TwinningProgrammeTab: React.FC<TwinningProgrammeTabProps> = ({ program }) => {
  if (!program.twinningProgramme) {
    return (
      <div className="text-gray-500 italic">
        Twinning Programme information not available for this program.
      </div>
    );
  }

  const { university, program: twinningProgram, description } = program.twinningProgramme;

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-aemet-navy mb-6">Twinning Programme</h2>
      
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-lg p-6 mb-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
              <Globe className="h-8 w-8 text-white" />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-aemet-navy mb-3">
              International Collaboration
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
        <h3 className="text-lg font-semibold text-aemet-navy mb-4 flex items-center gap-2">
          <GraduationCap className="h-6 w-6 text-aemet-blue" />
          Programme Details
        </h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <Globe className="h-5 w-5 text-aemet-blue mt-1 flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-600 mb-1">Partner University</p>
              <p className="font-semibold text-aemet-navy">{university}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Award className="h-5 w-5 text-aemet-blue mt-1 flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-600 mb-1">Programme</p>
              <p className="font-semibold text-aemet-navy">{twinningProgram}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-all">
          <GraduationCap className="h-10 w-10 text-aemet-blue mx-auto mb-3" />
          <h4 className="font-semibold text-aemet-navy mb-2">2+1 Structure</h4>
          <p className="text-sm text-gray-600">Complete 2 years at AMET, then transfer to UK</p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-all">
          <Award className="h-10 w-10 text-aemet-blue mx-auto mb-3" />
          <h4 className="font-semibold text-aemet-navy mb-2">Dual Recognition</h4>
          <p className="text-sm text-gray-600">Recognized by both institutions</p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-all">
          <Users className="h-10 w-10 text-aemet-blue mx-auto mb-3" />
          <h4 className="font-semibold text-aemet-navy mb-2">Global Exposure</h4>
          <p className="text-sm text-gray-600">International learning experience</p>
        </div>
      </div>
    </div>
  );
};

export default TwinningProgrammeTab;
