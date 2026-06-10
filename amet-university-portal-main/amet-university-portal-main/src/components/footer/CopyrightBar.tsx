
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert } from 'lucide-react';

const CopyrightBar = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center">
      <div className="text-white text-sm mb-4 md:mb-0">
        © {currentYear} AMET University. All Rights Reserved.
      </div>
      <div className="flex flex-wrap justify-center gap-4 text-white text-sm">
        <Link to="/privacy-policy" className="hover:text-aemet-navy transition-colors">Privacy Policy</Link>
        <Link to="/terms-of-use" className="hover:text-aemet-navy transition-colors">Terms of Use</Link>
        <Link to="/cookie-policy" className="hover:text-aemet-navy transition-colors">Cookie Policy</Link>
        <Link to="/accessibility" className="hover:text-aemet-navy transition-colors">Accessibility</Link>
        <Link to="/disclosures/fcra" className="hover:text-aemet-navy transition-colors flex items-center">
          <ShieldAlert className="h-3 w-3 mr-1" />
          FCRA Disclosure
        </Link>
      </div>
    </div>
  );
};

export default CopyrightBar;
