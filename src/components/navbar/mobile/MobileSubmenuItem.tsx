import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Calendar, FileText, Award, GraduationCap, Microscope, Building, Database, FileBadge, Bell, Newspaper, Globe, Search, Users, File, Mail, Landmark, Camera, Image, Dumbbell, Music, School, Ship } from 'lucide-react';

interface MobileSubmenuItemProps {
  menuLabel: string;
  subItem: string;
  getSubmenuLink: (menu: string, subItem: string) => string;
}

const getIconForMenuItem = (item: string) => {
  // Gallery menu icons
  if (item.includes('Campus Tour'))
    return <Image className="h-4 w-4 mr-2 text-aemet-blue" />;
    
  if (item.includes('Events') && !item.includes('Academic'))
    return <Camera className="h-4 w-4 mr-2 text-aemet-blue" />;
    
  if (item.includes('Academic Events'))
    return <School className="h-4 w-4 mr-2 text-aemet-blue" />;
    
  if (item.includes('Sports'))
    return <Dumbbell className="h-4 w-4 mr-2 text-aemet-blue" />;
    
  if (item.includes('Cultural'))
    return <Music className="h-4 w-4 mr-2 text-aemet-blue" />;
    
  if (item.includes('Infrastructure'))
    return <Building className="h-4 w-4 mr-2 text-aemet-blue" />;
    
  if (item.includes('Maritime Training'))
    return <Ship className="h-4 w-4 mr-2 text-aemet-blue" />;
    
  if (item.includes('Student Activities'))
    return <Users className="h-4 w-4 mr-2 text-aemet-blue" />;
  
  // Existing icons for other menus
  if (item.includes('Admissions 2026-27') || item.includes('Admissions 2025-26'))
    return <GraduationCap className="h-4 w-4 mr-2 text-aemet-blue" />;
  
  if (item.includes('Programmes') || item.includes('Program'))
    return <Book className="h-4 w-4 mr-2 text-aemet-blue" />;
    
  if (item.includes('Scholarship'))
    return <Award className="h-4 w-4 mr-2 text-aemet-blue" />;
    
  if (item.includes('Application Forms') || item.includes('Prospectus') || item.includes('Policy'))
    return <File className="h-4 w-4 mr-2 text-aemet-blue" />;
    
  if (item.includes('Fee Structure'))
    return <Landmark className="h-4 w-4 mr-2 text-aemet-blue" />;
    
  if (item.includes('Enquiry'))
    return <Mail className="h-4 w-4 mr-2 text-aemet-blue" />;
    
  if (item.includes('V-Ships') || item.includes('Kalvi') || item.includes('Face Prep'))
    return <Building className="h-4 w-4 mr-2 text-aemet-blue" />;
    
  if (item.includes('Diversity'))
    return <Users className="h-4 w-4 mr-2 text-aemet-blue" />;
    
  if (item.includes('Guidelines') && item.includes('International'))
    return <Globe className="h-4 w-4 mr-2 text-aemet-blue" />;
    
  if (item.includes('Guidelines') && item.includes('Indian'))
    return <FileText className="h-4 w-4 mr-2 text-aemet-blue" />;
    
  if (item.includes('Testimonials'))
    return <Award className="h-4 w-4 mr-2 text-aemet-blue" />;
    
  if (item.includes('News and Events'))
    return <Newspaper className="h-4 w-4 mr-2 text-aemet-blue" />;
    
  if (item.includes('Exam') || item.includes('Controller') || item.includes('NAD')) 
    return <FileText className="h-4 w-4 mr-2 text-aemet-blue" />;
  
  if (item.includes('Result') || item.includes('Certificate') || item.includes('Convocation') || item.includes('Award'))
    return <Award className="h-4 w-4 mr-2 text-aemet-blue" />;
    
  if (item.includes('Ph.D.'))
    return <GraduationCap className="h-4 w-4 mr-2 text-aemet-blue" />;
    
  if (item.includes('Calendar') || item.includes('Timetable'))
    return <Calendar className="h-4 w-4 mr-2 text-aemet-blue" />;
    
  if (item.includes('Research') || item.includes('Academic Research'))
    return <Microscope className="h-4 w-4 mr-2 text-aemet-blue" />;
    
  if (item.includes('Center'))
    return <Building className="h-4 w-4 mr-2 text-aemet-blue" />;
    
  if (item.includes('Journal') || item.includes('Publication'))
    return <Database className="h-4 w-4 mr-2 text-aemet-blue" />;
    
  if (item.includes('Patent') || item.includes('IPR'))
    return <FileBadge className="h-4 w-4 mr-2 text-aemet-blue" />;
    
  if (item.includes('Ecosystem'))
    return <Microscope className="h-4 w-4 mr-2 text-aemet-blue" />;
    
  return <Book className="h-4 w-4 mr-2 text-aemet-blue" />;
};

const MobileSubmenuItem: React.FC<MobileSubmenuItemProps> = ({ menuLabel, subItem, getSubmenuLink }) => {
  return (
    <Link
      to={getSubmenuLink(menuLabel, subItem)}
      className="flex items-center py-2 text-sm text-gray-700 hover:text-aemet-blue transition-colors"
    >
      {getIconForMenuItem(subItem)}
      <span>{subItem}</span>
    </Link>
  );
};

export default MobileSubmenuItem;
