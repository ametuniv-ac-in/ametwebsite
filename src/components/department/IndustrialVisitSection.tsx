import React from 'react';
import { Factory, FileDown, Users, MapPin } from 'lucide-react';

interface IndustrialVisitSectionProps {
  departmentId?: string;
}

const IndustrialVisitSection: React.FC<IndustrialVisitSectionProps> = ({ departmentId }) => {
  
  if (departmentId === 'mechanical-engineering') {
    return (
      <div>
        <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
          <Factory className="h-5 w-5 mr-2 text-aemet-blue" />
          Industrial Visits
        </h3>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-lg p-8 mb-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                <Factory className="w-10 h-10 text-white" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h4 className="text-2xl font-bold text-aemet-navy mb-2">
                Industry Exposure & Learning
              </h4>
              <p className="text-gray-700">
                Our department organizes regular industrial visits to provide students with hands-on exposure to real-world manufacturing processes, advanced machinery, and industry best practices.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a
                href="/documents/mechanical-engineering-Industrial-Visit.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-sm"
              >
                <FileDown className="w-5 h-5" />
                Download Details
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-all">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Factory className="h-7 w-7 text-blue-600" />
            </div>
            <h5 className="font-semibold text-aemet-navy mb-2">Manufacturing Units</h5>
            <p className="text-sm text-gray-600">
              Visits to leading manufacturing facilities and production plants
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-all">
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-7 w-7 text-green-600" />
            </div>
            <h5 className="font-semibold text-aemet-navy mb-2">Industry Interaction</h5>
            <p className="text-sm text-gray-600">
              Direct interaction with industry professionals and engineers
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-all">
            <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-7 w-7 text-purple-600" />
            </div>
            <h5 className="font-semibold text-aemet-navy mb-2">Diverse Industries</h5>
            <p className="text-sm text-gray-600">
              Exposure to various sectors including automotive, aerospace, and more
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Default content for other departments
  return (
    <div>
      <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
        <Factory className="h-5 w-5 mr-2 text-aemet-blue" />
        Industrial Visits
      </h3>
      <div className="bg-white border border-gray-200 rounded-lg p-8 text-center">
        <Factory className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-600">Industrial visit information will be updated soon.</p>
      </div>
    </div>
  );
};

export default IndustrialVisitSection;
