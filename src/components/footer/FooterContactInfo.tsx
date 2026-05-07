
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

interface ContactInfoItem {
  icon: React.FC<any>;
  text: string;
}

const FooterContactInfo = () => {
  const contactInfo: ContactInfoItem[] = [
    { icon: MapPin, text: 'Academy of Maritime Education and Training (AMET)\n135, East Coast Road, Kanathur - 603 112\nTamil Nadu, India' },
    { icon: Phone, text: '+91 - 44 - 2744 4625 / 627 / 628' },
    { icon: Mail, text: 'office@ametuniv.ac.in' }
  ];

  return (
    <div className="space-y-4">
      {contactInfo.map((item, i) => {
        const Icon = item.icon;
        return (
          <div key={i} className="flex items-start">
            <Icon className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
            <span className="ml-3 text-white whitespace-pre-line">{item.text}</span>
          </div>
        );
      })}
    </div>
  );
};

export default FooterContactInfo;
