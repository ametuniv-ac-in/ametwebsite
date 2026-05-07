
import React from 'react';
import { BookOpen } from 'lucide-react';

const ResearchDevelopmentActivities = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg shadow-sm mb-8">
      <h3 className="text-xl font-semibold text-aemet-navy mb-4 flex items-center">
        <BookOpen className="h-5 w-5 mr-2 text-aemet-blue" />
        Research Development Activities
      </h3>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h4 className="font-medium text-aemet-navy mb-2">Research Workshops</h4>
          <p className="text-sm text-gray-600">Regular workshops on research methodologies and emerging technologies</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h4 className="font-medium text-aemet-navy mb-2">Technical Writing</h4>
          <p className="text-sm text-gray-600">Training programs to enhance scholarly writing and publication skills</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h4 className="font-medium text-aemet-navy mb-2">Academic Integrity</h4>
          <p className="text-sm text-gray-600">Sessions on plagiarism prevention and research ethics</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h4 className="font-medium text-aemet-navy mb-2">Statistical Methods</h4>
          <p className="text-sm text-gray-600">Training on data analysis and statistical tools for research</p>
        </div>
      </div>
    </div>
  );
};

export default ResearchDevelopmentActivities;
