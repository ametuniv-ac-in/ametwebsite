
import React from 'react';
import { Link } from 'react-router-dom';
import { trackCTAClick } from '@/lib/gtm';

const ApplyButton = () => {
  const handleClick = () => {
    trackCTAClick({
      ctaName: 'Apply Now',
      ctaLocation: 'Navbar',
      ctaDestination: '/application-forms',
    });
  };

  return (
    <div className="hidden lg:block">
      <Link
        to="/application-forms"
        onClick={handleClick}
        className="bg-aemet-navy text-white hover:bg-white hover:text-aemet-blue transition-colors duration-300 px-5 py-2 rounded-md text-sm font-medium shadow-sm hover:shadow transform hover:-translate-y-1"
      >
        Apply
      </Link>
    </div>
  );
};

export default ApplyButton;
