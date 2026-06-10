
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackCTAClick } from '@/lib/gtm';

interface ApplyCTAProps {
  programName: string;
}

const ApplyCTA: React.FC<ApplyCTAProps> = ({ programName }) => {
  const handleClick = () => {
    trackCTAClick({
      ctaName: 'Apply Now',
      ctaLocation: `Program Page - ${programName}`,
      ctaDestination: '/application-forms',
    });
  };

  return (
    <div className="bg-aemet-navy p-6 rounded-lg shadow-md mb-8 text-white">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-semibold">Interested in {programName}?</h3>
          <p className="text-white/80 mt-1">Take the next step towards your educational journey</p>
        </div>
        <Link 
          to="/application-forms" 
          onClick={handleClick}
          className="bg-aemet-blue hover:bg-white hover:text-aemet-blue text-white font-medium py-3 px-6 rounded-md transition-colors duration-300 inline-flex items-center justify-center shadow-sm hover:shadow-md transform hover:-translate-y-1"
        >
          Apply <ChevronRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  );
};

export default ApplyCTA;
