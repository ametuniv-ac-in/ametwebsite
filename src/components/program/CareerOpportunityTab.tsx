import React from 'react';
import { TrendingUp, Ship, Award, GraduationCap } from 'lucide-react';

interface CareerOpportunityTabProps {
  program: {
    careerOpportunity?: string;
    [key: string]: any;
  };
}

const CareerOpportunityTab: React.FC<CareerOpportunityTabProps> = ({ program }) => {
  if (!program.careerOpportunity) {
    return (
      <div className="animate-fade-in">
        <h2 className="text-2xl font-bold text-aemet-navy mb-4">Career Opportunity and Growth</h2>
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <TrendingUp className="h-12 w-12 text-gray-400 mx-auto mb-3" />
          <p className="text-gray-600">Career information will be updated soon.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-aemet-navy mb-6">Career Opportunity and Growth</h2>
      
      <div className="space-y-6">
        {/* Career Path Steps */}
        <div className="bg-gradient-to-br from-aemet-navy/5 to-aemet-blue/5 rounded-lg p-6 border-l-4 border-aemet-blue">
          <div className="flex items-start mb-4">
            <Ship className="h-6 w-6 text-aemet-blue mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-aemet-navy text-lg mb-3">Your Career Journey</h3>
              <div className="space-y-4 text-gray-700">
                {program.careerOpportunity.split('\n').map((line: string, index: number) => {
                  if (line.trim()) {
                    return (
                      <div key={index} className="flex items-start">
                        <div className="min-w-[8px] h-[8px] rounded-full bg-aemet-blue mt-2 mr-3 flex-shrink-0" />
                        <p className="leading-relaxed">{line.trim()}</p>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Growth Potential */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-5 border border-gray-200 hover:border-aemet-blue transition-colors">
            <div className="flex items-center mb-3">
              <Award className="h-5 w-5 text-aemet-blue mr-2" />
              <h4 className="font-semibold text-aemet-navy">Professional Growth</h4>
            </div>
            <p className="text-gray-600 text-sm">
              Opportunities to progress from Rating to Officer level positions through dedicated service and certification.
            </p>
          </div>

          <div className="bg-white rounded-lg p-5 border border-gray-200 hover:border-aemet-blue transition-colors">
            <div className="flex items-center mb-3">
              <GraduationCap className="h-5 w-5 text-aemet-blue mr-2" />
              <h4 className="font-semibold text-aemet-navy">Continuous Learning</h4>
            </div>
            <p className="text-gray-600 text-sm">
              Guidance and support for meritorious students to progress as Merchant Navy Officers.
            </p>
          </div>
        </div>

        {/* Leadership Path */}
        <div className="bg-blue-50 rounded-lg p-5 border-l-4 border-aemet-blue">
          <div className="flex items-start">
            <TrendingUp className="h-5 w-5 text-aemet-blue mr-3 mt-0.5" />
            <div>
              <h3 className="font-medium text-aemet-navy mb-2">Leadership Opportunities</h3>
              <p className="text-gray-700">
                A committed person can rise to the levels of a Captain or a Chief Engineer by passing Certificate of Competency for officers, subject to meeting DGS requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerOpportunityTab;
