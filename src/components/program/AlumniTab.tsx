import React from 'react';
import { Users, Award, FileDown, TrendingUp } from 'lucide-react';

interface AlumniTabProps {
  program: any;
}

const AlumniTab: React.FC<AlumniTabProps> = ({ program }) => {
  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-aemet-navy mb-6">Alumni</h2>
      
      <div className="bg-gradient-to-br from-indigo-50 to-blue-50 border-2 border-indigo-200 rounded-lg p-8 mb-6">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-shrink-0">
            <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full flex items-center justify-center">
              <Users className="w-10 h-10 text-white" />
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold text-aemet-navy mb-2">
              Our Distinguished Alumni
            </h3>
            <p className="text-gray-700">
              Explore the achievements and career paths of our Naval Architecture graduates who are making waves in the maritime industry worldwide.
            </p>
          </div>
          <div className="flex-shrink-0">
            <a
              href="/documents/naval-architecture/Alumni.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium shadow-sm"
            >
              <FileDown className="w-5 h-5" />
              Download Alumni Details
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-all">
          <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Award className="h-7 w-7 text-aemet-blue" />
          </div>
          <h4 className="font-semibold text-aemet-navy mb-2">Global Recognition</h4>
          <p className="text-sm text-gray-600">
            Our alumni work with leading maritime companies worldwide
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-all">
          <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <TrendingUp className="h-7 w-7 text-green-600" />
          </div>
          <h4 className="font-semibold text-aemet-navy mb-2">Career Growth</h4>
          <p className="text-sm text-gray-600">
            Rapid career progression in shipyards and maritime firms
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-all">
          <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="h-7 w-7 text-purple-600" />
          </div>
          <h4 className="font-semibold text-aemet-navy mb-2">Strong Network</h4>
          <p className="text-sm text-gray-600">
            Active alumni network supporting current students
          </p>
        </div>
      </div>
    </div>
  );
};

export default AlumniTab;
