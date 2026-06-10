
import React from 'react';
import { Heart } from 'lucide-react';

interface SocialInitiativesProps {
  title: string;
  content: string | React.ReactNode;
  icon?: React.ReactNode;
}

const SocialInitiatives: React.FC<SocialInitiativesProps> = ({ title, content, icon = <Heart className="h-5 w-5" /> }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold text-aemet-navy mb-4 flex items-center gap-2">
        {icon}
        {title}
      </h3>
      {typeof content === 'string' ? <p>{content}</p> : content}
    </div>
  );
};

export default SocialInitiatives;
