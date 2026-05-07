
import React from 'react';
import { Link } from 'react-router-dom';
import FooterContactInfo from './FooterContactInfo';
import FooterSocialMedia from './FooterSocialMedia';
import footerLogo from '@/assets/amet-footer-logo.png';

const FooterBrand = () => {
  return (
    <div className="lg:col-span-2">
      <div className="mb-6">
        <Link to="/" className="inline-block">
          <img 
            src={footerLogo} 
            alt="AMET University" 
            className="h-14 md:h-16 object-contain"
            loading="lazy"
          />
        </Link>
        <p className="mt-4 text-white max-w-xs">
          A world-class institution dedicated to excellence in education, research, and innovation.
        </p>
      </div>
      
      <FooterContactInfo />
      <FooterSocialMedia />
    </div>
  );
};

export default FooterBrand;
