
import React from 'react';
import { Sparkles, Eye, Target } from 'lucide-react';

interface GmdssVisionMissionTabProps {
  program: {
    gmdssVisionMissionContent?: string;
    [key: string]: any;
  };
}

const GmdssVisionMissionTab: React.FC<GmdssVisionMissionTabProps> = ({ program }) => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-br from-aemet-blue to-aemet-navy rounded-xl shadow-lg">
          <Sparkles className="h-6 w-6 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Vision & Mission</h2>
      </div>

      {/* Vision & Mission Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Vision Card */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-aemet-lightBlue hover:shadow-lg transition-shadow">
          <div className="bg-gradient-to-r from-aemet-navy to-aemet-blue px-5 py-4">
            <div className="flex items-center gap-3">
              <Eye className="h-5 w-5 text-white" />
              <h3 className="text-lg font-semibold text-white">Vision</h3>
            </div>
          </div>
          <div className="p-5">
            <p className="text-gray-700 leading-relaxed">
              To enhance safety of life at sea by establishing an effective global <span className="font-semibold text-aemet-navy">Search and Rescue (SAR)</span> communication system, ensuring that all <span className="font-semibold text-aemet-navy">GMDSS-equipped ships</span> can maintain seamless contact with shore stations and nearby vessels anywhere in the world, at any time, during distress or emergency situations.
            </p>
          </div>
        </div>

        {/* Mission Card */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-aemet-lightBlue hover:shadow-lg transition-shadow">
          <div className="bg-gradient-to-r from-aemet-blue to-aemet-navy px-5 py-4">
            <div className="flex items-center gap-3">
              <Target className="h-5 w-5 text-white" />
              <h3 className="text-lg font-semibold text-white">Mission</h3>
            </div>
          </div>
          <div className="p-5">
            <p className="text-gray-700 leading-relaxed">
              To train and empower maritime professionals with the essential knowledge, understanding, and proficiency required to operate <span className="font-semibold text-aemet-navy">GMDSS equipment</span> effectively, handle all forms of radio communication during distress, urgency, safety, and routine operations, and ensure full compliance with international maritime conventions such as <span className="font-semibold text-aemet-navy">SOLAS</span>, <span className="font-semibold text-aemet-navy">STCW</span>, and <span className="font-semibold text-aemet-navy">ITU Radio Regulations</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GmdssVisionMissionTab;
