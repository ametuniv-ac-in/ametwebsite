
import React, { useState } from 'react';
import { Faculty } from '@/data/faculties';
import { ChevronRight, GraduationCap, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface FacultyCardProps {
  faculty: Faculty;
  index: number;
}

const FacultyCard: React.FC<FacultyCardProps> = ({ faculty, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const animationDelay = `${index * 100}ms`;

  // Map color values to corresponding Tailwind classes
  const getBorderColorClass = (color: string) => {
    switch (color) {
      case "#152043": return "border-aemet-navy";
      case "#3182ce": return "border-blue-500";
      case "#38a169": return "border-green-500";
      case "#e53e3e": return "border-red-500";
      case "#d97706": return "border-amber-500";
      default: return "border-aemet-blue";
    }
  };

  const getBackgroundColorClass = (color: string) => {
    switch (color) {
      case "#152043": return "bg-aemet-navy";
      case "#3182ce": return "bg-blue-500";
      case "#38a169": return "bg-green-500";
      case "#e53e3e": return "bg-red-500";
      case "#d97706": return "bg-amber-500";
      default: return "bg-aemet-blue";
    }
  };

  const getTextColorClass = (color: string) => {
    switch (color) {
      case "#152043": return "text-aemet-navy";
      case "#3182ce": return "text-blue-500";
      case "#38a169": return "text-green-500";
      case "#e53e3e": return "text-red-500";
      case "#d97706": return "text-amber-500";
      default: return "text-aemet-blue";
    }
  };

  const getHoverBgColorClass = (color: string) => {
    switch (color) {
      case "#152043": return "hover:bg-aemet-navy/5";
      case "#3182ce": return "hover:bg-blue-500/5";
      case "#38a169": return "hover:bg-green-500/5";
      case "#e53e3e": return "hover:bg-red-500/5";
      case "#d97706": return "hover:bg-amber-500/5";
      default: return "hover:bg-aemet-blue/5";
    }
  };

  return (
    <div 
      className="animate-fade-in opacity-0 h-full"
      style={{ animationDelay, animationFillMode: 'forwards' }}
    >
      <div
        className={cn(
          "group h-full rounded-lg overflow-hidden transition-all duration-500 card-hover",
          "relative flex flex-col bg-white shadow",
          "border-t-4",
          getBorderColorClass(faculty.color)
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="p-6 flex-grow">
          <h3 className="text-xl font-bold mb-3 text-aemet-navy">{faculty.name}</h3>
          
          <p className="text-gray-600 mb-5">{faculty.description}</p>
          
          <div className="mt-auto">
            <h4 className="font-medium text-aemet-navy mb-2 flex items-center">
              <GraduationCap className="h-4 w-4 mr-2 text-aemet-blue" />
              Popular Programs:
            </h4>
            <ul className="space-y-1">
              {faculty.programs.slice(0, 3).map((program, i) => (
                <li key={i} className="text-gray-600 text-sm">• {program}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div 
          className={cn(
            "p-4 border-t border-gray-100 flex items-center justify-between gap-2 transition-all duration-300",
            getHoverBgColorClass(faculty.color)
          )}
        >
          <Link 
            to={`/faculty/${faculty.id}`}
            className={cn(
              "font-medium text-sm flex items-center transition-all duration-300",
              getTextColorClass(faculty.color),
              "group-hover:translate-x-1"
            )}
          >
            Learn More
            <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FacultyCard;
