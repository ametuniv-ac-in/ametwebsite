import React from 'react';
import { Briefcase } from 'lucide-react';

interface CareerOpportunitiesTabProps {
  program: any;
}

const CareerOpportunitiesTab: React.FC<CareerOpportunitiesTabProps> = ({ program }) => {
  // Use program-specific data if available, otherwise fall back to default
  const careerRoles = program.careerRoles || [];
  const placementSectors = program.placementSectors || [];
  const researchRoles = program.researchRoles || [];

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-aemet-navy mb-6">Career Opportunities</h2>
      
      <div className="bg-gradient-to-r from-aemet-navy to-aemet-blue text-white rounded-lg p-6 mb-8">
        <div className="flex items-center gap-3 mb-3">
          <Briefcase className="h-8 w-8" />
          <h3 className="text-xl font-bold">Exciting Career Paths Await</h3>
        </div>
        <p className="text-white/90">
          Graduates have diverse career opportunities across various industries and sectors.
        </p>
      </div>

      {careerRoles.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-bold text-aemet-navy mb-4">Career Roles</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {careerRoles.map((role: string, index: number) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md hover:border-aemet-blue transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-aemet-blue rounded-full"></div>
                  <p className="text-gray-700 font-medium">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {placementSectors.length > 0 && (
        <div className="mb-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-aemet-navy mb-4">Placement Opportunities</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {placementSectors.map((sector: string, index: number) => (
              <div key={index} className="bg-white rounded-lg px-4 py-3 text-gray-700 border border-gray-200">
                {sector}
              </div>
            ))}
          </div>
        </div>
      )}

      {researchRoles.length > 0 && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-aemet-navy mb-4">Research & Development</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {researchRoles.map((role: string, index: number) => (
              <div key={index} className="bg-white rounded-lg px-4 py-3 text-gray-700 border border-gray-200 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                {role}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerOpportunitiesTab;
