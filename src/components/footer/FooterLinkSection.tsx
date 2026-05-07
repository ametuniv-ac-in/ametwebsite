
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ExternalLink } from 'lucide-react';

export interface FooterLink {
  label: string;
  href: string;
  target?: string;
}

interface FooterLinkSectionProps {
  title: string;
  links: FooterLink[];
}

const FooterLinkSection: React.FC<FooterLinkSectionProps> = ({ title, links }) => {
  return (
    <div className="lg:col-span-1">
      <h4 className="text-lg font-bold mb-4 text-white border-b border-aemet-blue/30 pb-2">
        {title}
      </h4>
      <ul className="space-y-2">
        {links.map((link, j) => (
          <li key={j}>
            {link.target ? (
              <a 
                href={link.href} 
                target={link.target}
                rel="noopener noreferrer"
              className="text-white hover:text-aemet-navy transition-colors inline-flex items-center group"
              >
                <ChevronRight className="h-3 w-3 mr-1.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span>{link.label}</span>
                {link.target === '_blank' && <ExternalLink className="h-3 w-3 ml-1.5 opacity-50" />}
              </a>
            ) : (
              <Link
                to={link.href}
                className="text-white hover:text-aemet-navy transition-colors inline-flex items-center group"
              >
                <ChevronRight className="h-3 w-3 mr-1.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span>{link.label}</span>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinkSection;
