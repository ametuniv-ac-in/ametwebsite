
import React from 'react';
import { Link } from "react-router-dom";
import { BookOpen, ChevronRight } from "lucide-react";
import { trackCTAClick } from '@/lib/gtm';

const ProgramsCTA = () => {
  const handleAdmissionsClick = () => {
    trackCTAClick({
      ctaName: 'Visit Admissions Page',
      ctaLocation: 'Programs CTA Section',
      ctaDestination: '/admissions',
    });
  };

  const handleFacultiesClick = () => {
    trackCTAClick({
      ctaName: 'Explore Faculties',
      ctaLocation: 'Programs CTA Section',
      ctaDestination: '/academics/faculties',
    });
  };

  return (
    <div className="bg-gradient-to-r from-aemet-navy/5 to-aemet-blue/5 p-8 rounded-xl border-2 border-aemet-blue/20 shadow-sm">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        <div className="bg-aemet-blue/10 p-4 rounded-full flex-shrink-0">
          <BookOpen className="h-10 w-10 text-aemet-blue" />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-aemet-navy mb-2">Ready to Apply?</h3>
          <p className="text-gray-600 mb-4">
            Our admissions team is ready to help you through the application process. 
            Start your journey to academic excellence today.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link 
              to="/admissions" 
              onClick={handleAdmissionsClick}
              className="inline-flex items-center px-6 py-2.5 bg-aemet-blue text-white rounded-lg hover:bg-aemet-navy transition-colors font-medium"
            >
              Visit Admissions Page
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
            <Link 
              to="/academics/faculties" 
              onClick={handleFacultiesClick}
              className="inline-flex items-center px-6 py-2.5 border-2 border-aemet-blue text-aemet-blue rounded-lg hover:bg-aemet-blue hover:text-white transition-colors font-medium"
            >
              Explore Faculties
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramsCTA;
