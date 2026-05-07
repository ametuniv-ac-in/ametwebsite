import React from 'react';
import { GraduationCap, Globe, BookOpen } from 'lucide-react';

interface GmdssEligibilityTabProps {
  program: {
    gmdssEligibilityContent?: string;
    [key: string]: any;
  };
}

const GmdssEligibilityTab: React.FC<GmdssEligibilityTabProps> = ({ program }) => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-br from-aemet-blue to-aemet-navy rounded-xl shadow-lg">
          <GraduationCap className="h-6 w-6 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Eligibility Requirements</h2>
      </div>

      {/* Eligibility Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Indian GMDSS Card */}
        <div className="bg-white rounded-xl border border-aemet-lightBlue overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div className="bg-gradient-to-r from-aemet-navy to-aemet-blue px-6 py-4">
            <div className="flex items-center gap-3">
              <BookOpen className="h-5 w-5 text-white" />
              <h3 className="text-lg font-semibold text-white">1. For Indian GMDSS (GOC)</h3>
            </div>
          </div>
          <div className="p-6">
            <p className="text-gray-700 leading-relaxed">
              Candidates must have successfully completed <strong className="text-aemet-navy">10+2 (Higher Secondary)</strong> with <strong className="text-aemet-navy">Physics</strong> and <strong className="text-aemet-navy">Mathematics</strong> as compulsory subjects.
            </p>
          </div>
        </div>

        {/* UK GMDSS Card */}
        <div className="bg-white rounded-xl border border-aemet-lightBlue overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div className="bg-gradient-to-r from-aemet-blue to-aemet-navy px-6 py-4">
            <div className="flex items-center gap-3">
              <Globe className="h-5 w-5 text-white" />
              <h3 className="text-lg font-semibold text-white">2. For UK GMDSS (GOC)</h3>
            </div>
          </div>
          <div className="p-6">
            <p className="text-gray-700 leading-relaxed">
              Candidates should have a <strong className="text-aemet-navy">good command of the English language</strong> and possess <strong className="text-aemet-navy">basic knowledge of world geography</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GmdssEligibilityTab;
