
import React from 'react';
import FooterBrand from './FooterBrand';
import FooterLinkSection from './FooterLinkSection';
import CopyrightBar from './CopyrightBar';
import { footerLinks } from './footerData';

const Footer = () => {
  return (
    <footer className="bg-[#4191ce] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          <FooterBrand />
          
          {footerLinks.map((section, i) => (
            <FooterLinkSection 
              key={i}
              title={section.title}
              links={section.links}
            />
          ))}
        </div>
        
        <CopyrightBar />
      </div>
    </footer>
  );
};

export default Footer;
