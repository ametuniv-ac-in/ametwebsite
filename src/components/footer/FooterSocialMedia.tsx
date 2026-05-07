
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

interface SocialMediaItem {
  icon: React.FC<any>;
  href: string;
  label: string;
}

const FooterSocialMedia = () => {
  const socialMedia: SocialMediaItem[] = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' }
  ];

  return (
    <div className="mt-6 flex space-x-4">
      {socialMedia.map((item, i) => {
        const Icon = item.icon;
        return (
          <a 
            key={i}
            href={item.href}
            aria-label={item.label}
            target="_blank"
            rel="noopener noreferrer"
            className="hover-lift w-10 h-10 bg-white/10 hover:bg-aemet-blue rounded-full flex items-center justify-center transition-colors"
          >
            <Icon className="h-5 w-5 text-white" />
          </a>
        );
      })}
    </div>
  );
};

export default FooterSocialMedia;
