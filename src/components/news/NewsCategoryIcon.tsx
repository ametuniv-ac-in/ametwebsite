
import React from 'react';
import { Bell, Calendar, FileText } from 'lucide-react';

interface NewsCategoryIconProps {
  category: string;
}

const NewsCategoryIcon: React.FC<NewsCategoryIconProps> = ({ category }) => {
  if (category === 'announcement') {
    return <Bell className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />;
  }
  
  if (category === 'event') {
    return <Calendar className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />;
  }
  
  if (category === 'academic') {
    return <FileText className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />;
  }
  
  return <Bell className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />; // Default
};

export default NewsCategoryIcon;
