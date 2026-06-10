import React from 'react';
import { Microscope, Beaker, Lightbulb, Building } from 'lucide-react';

interface ResearchDevelopmentTabProps {
  program: any;
}

const ResearchDevelopmentTab: React.FC<ResearchDevelopmentTabProps> = ({ program }) => {
  const organizations = [
    {
      name: 'NSTL',
      fullName: 'Naval Science & Technological Laboratory',
      type: 'Defense Research'
    },
    {
      name: 'NPOL',
      fullName: 'Naval Physical & Oceanographic Laboratory',
      type: 'Defense Research'
    },
    {
      name: 'DRDO',
      fullName: 'Defence Research and Development Organisation',
      type: 'Defense Research'
    },
    {
      name: 'ONGC',
      fullName: 'Oil and Natural Gas Corporation',
      type: 'Energy Sector'
    },
    {
      name: 'EIL',
      fullName: 'Engineers India Limited',
      type: 'Engineering'
    }
  ];

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-aemet-navy mb-6">Research and Development</h2>
      
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg p-6 mb-8">
        <div className="flex items-center gap-3 mb-3">
          <Microscope className="h-8 w-8" />
          <h3 className="text-xl font-bold">Exciting Research Careers</h3>
        </div>
        <p className="text-white/90">
          Naval Architecture graduates can pursue advanced research positions as scientists 
          in prestigious national laboratories and premier research institutions.
        </p>
      </div>

      <div className="bg-blue-50 border-l-4 border-aemet-blue rounded-lg p-6 mb-6">
        <div className="flex items-start gap-3">
          <Lightbulb className="h-6 w-6 text-aemet-blue mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-bold text-aemet-navy mb-2 text-lg">Research Scientist Positions</h3>
            <p className="text-gray-700">
              Graduates can work as scientists in leading research and development organizations, 
              contributing to cutting-edge maritime technology, defense systems, and offshore engineering innovations.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {organizations.map((org, index) => (
          <div 
            key={index}
            className="bg-white border-2 border-gray-200 rounded-lg p-5 hover:shadow-lg hover:border-aemet-blue transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <Building className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-aemet-navy mb-1">{org.name}</h4>
                <p className="text-sm text-gray-600 mb-2">{org.fullName}</p>
                <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                  {org.type}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-5 text-center">
          <Microscope className="h-10 w-10 text-aemet-blue mx-auto mb-3" />
          <h4 className="font-semibold text-aemet-navy mb-2">Advanced Research</h4>
          <p className="text-sm text-gray-600">Work on cutting-edge maritime and offshore technologies</p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-5 text-center">
          <Beaker className="h-10 w-10 text-purple-600 mx-auto mb-3" />
          <h4 className="font-semibold text-aemet-navy mb-2">Innovation</h4>
          <p className="text-sm text-gray-600">Contribute to national defense and energy sectors</p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg p-5 text-center">
          <Lightbulb className="h-10 w-10 text-green-600 mx-auto mb-3" />
          <h4 className="font-semibold text-aemet-navy mb-2">Impact</h4>
          <p className="text-sm text-gray-600">Make significant contributions to national development</p>
        </div>
      </div>
    </div>
  );
};

export default ResearchDevelopmentTab;
