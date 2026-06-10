import React from 'react';
import { Briefcase, FileDown, TrendingUp, Building2, GraduationCap } from 'lucide-react';

interface PlacementSectionProps {
  departmentId?: string;
}

const PlacementSection: React.FC<PlacementSectionProps> = ({ departmentId }) => {
  
  if (departmentId === 'commerce-department') {
    return (
      <div>
        <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
          <Briefcase className="h-5 w-5 mr-2 text-aemet-blue" />
          Placement Details
        </h3>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-8 border border-green-200">
          <div className="flex flex-col items-center text-center">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-4 rounded-full mb-6">
              <Briefcase className="h-12 w-12 text-white" />
            </div>
            
            <h4 className="text-2xl font-bold text-aemet-navy mb-3">
              Placement Statistics & Career Outcomes
            </h4>
            
            <p className="text-gray-700 mb-6 max-w-2xl">
              Explore our comprehensive placement records and career success stories. Download detailed placement information including company profiles, job roles, and alumni career progression.
            </p>
            
            <a
              href="/documents/commerce/placement-details.pdf"
              download
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-emerald-600 hover:to-green-500 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <FileDown className="h-5 w-5" />
              Download Placement Details
            </a>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200 text-center">
            <Building2 className="h-8 w-8 text-blue-600 mx-auto mb-3" />
            <h5 className="font-semibold text-aemet-navy mb-2">Top Recruiters</h5>
            <p className="text-sm text-gray-600">Leading companies across various industries</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-200 text-center">
            <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-3" />
            <h5 className="font-semibold text-aemet-navy mb-2">Career Growth</h5>
            <p className="text-sm text-gray-600">Strong career progression and advancement opportunities</p>
          </div>
          
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-lg border border-amber-200 text-center">
            <GraduationCap className="h-8 w-8 text-amber-600 mx-auto mb-3" />
            <h5 className="font-semibold text-aemet-navy mb-2">Industry Ready</h5>
            <p className="text-sm text-gray-600">Comprehensive training and placement support</p>
          </div>
        </div>
      </div>
    );
  }
  
  if (departmentId === 'mechanical-engineering') {
    return (
      <div>
        <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
          <Briefcase className="h-5 w-5 mr-2 text-aemet-blue" />
          Placement Details
        </h3>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-lg p-8 mb-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                <Briefcase className="w-10 h-10 text-white" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h4 className="text-2xl font-bold text-aemet-navy mb-2">
                Career Opportunities & Success Stories
              </h4>
              <p className="text-gray-700">
                Comprehensive information about placements, higher studies, and entrepreneurship opportunities for our Mechanical Engineering graduates.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a
                href="/documents/mechanical-engineering-Placement-Details.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium shadow-sm"
              >
                <FileDown className="w-5 h-5" />
                Download Details
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-all">
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Briefcase className="h-7 w-7 text-green-600" />
            </div>
            <h5 className="font-semibold text-aemet-navy mb-2">Placements</h5>
            <p className="text-sm text-gray-600">
              Top companies recruiting our graduates across various sectors
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-all">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="h-7 w-7 text-blue-600" />
            </div>
            <h5 className="font-semibold text-aemet-navy mb-2">Higher Studies</h5>
            <p className="text-sm text-gray-600">
              Students pursuing advanced degrees at prestigious institutions
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-all">
            <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-7 w-7 text-purple-600" />
            </div>
            <h5 className="font-semibold text-aemet-navy mb-2">Entrepreneurship</h5>
            <p className="text-sm text-gray-600">
              Alumni launching successful startups and business ventures
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (departmentId === 'electrical-engineering') {
    return (
      <div>
        <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
          <Briefcase className="h-5 w-5 mr-2 text-aemet-blue" />
          Placements
        </h3>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-lg p-8 mb-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                <Briefcase className="w-10 h-10 text-white" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h4 className="text-2xl font-bold text-aemet-navy mb-2">
                Electrical Engineering Placements
              </h4>
              <p className="text-gray-700">
                Comprehensive placement information for Electrical Engineering graduates
              </p>
            </div>
            <div className="flex-shrink-0">
              <a
                href="/documents/electrical-placement.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-sm"
              >
                <FileDown className="w-5 h-5" />
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default content for other departments
  return (
    <div>
      <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
        <Briefcase className="h-5 w-5 mr-2 text-aemet-blue" />
        Placement Details
      </h3>
      <div className="bg-white border border-gray-200 rounded-lg p-8 text-center">
        <Briefcase className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-600">Placement information will be updated soon.</p>
      </div>
    </div>
  );
};

export default PlacementSection;
