
import React from 'react';
import { Sparkles, Calendar, Award, Clock, Users } from 'lucide-react';

interface GmdssProgramHighlightsTabProps {
  program: {
    gmdssProgramHighlightsContent?: string;
    [key: string]: any;
  };
}

const GmdssProgramHighlightsTab: React.FC<GmdssProgramHighlightsTabProps> = ({ program }) => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-br from-aemet-blue to-aemet-navy rounded-xl shadow-lg">
          <Sparkles className="h-6 w-6 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Program Highlights</h2>
      </div>

      {/* Highlights Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Indian GMDSS Card */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-aemet-lightBlue hover:shadow-lg transition-shadow">
          <div className="bg-gradient-to-r from-aemet-navy to-aemet-blue px-5 py-4">
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-white" />
              <h3 className="text-lg font-semibold text-white">1. For Indian GMDSS (GOC)</h3>
            </div>
          </div>
          <div className="p-5 space-y-4">
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-aemet-blue mt-0.5 flex-shrink-0" />
              <p className="text-gray-700">
                A <span className="font-semibold text-aemet-navy">two-week training programme</span> followed by <span className="font-semibold text-aemet-navy">one week of examinations</span>.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Users className="h-5 w-5 text-aemet-blue mt-0.5 flex-shrink-0" />
              <p className="text-gray-700">
                Upon successful completion of the course, the examinations are conducted jointly by the <span className="font-semibold text-aemet-navy">Wireless Planning and Coordination (WPC) wing</span> and the <span className="font-semibold text-aemet-navy">Directorate General of Shipping (DGS)</span> — both under the <span className="font-semibold text-aemet-navy">Government of India (GOI)</span>.
              </p>
            </div>
          </div>
        </div>

        {/* UK GMDSS Card */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-aemet-lightBlue hover:shadow-lg transition-shadow">
          <div className="bg-gradient-to-r from-aemet-blue to-aemet-navy px-5 py-4">
            <div className="flex items-center gap-3">
              <Award className="h-5 w-5 text-white" />
              <h3 className="text-lg font-semibold text-white">2. For UK GMDSS (GOC)</h3>
            </div>
          </div>
          <div className="p-5 space-y-4">
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-aemet-blue mt-0.5 flex-shrink-0" />
              <p className="text-gray-700">
                An <span className="font-semibold text-aemet-navy">8-day programme</span> including examinations.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Users className="h-5 w-5 text-aemet-blue mt-0.5 flex-shrink-0" />
              <p className="text-gray-700">
                Upon completion, the examinations are conducted by <span className="font-semibold text-aemet-navy">Maritime and Coastguard Agency (MCA) UK-certified examiners</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GmdssProgramHighlightsTab;
