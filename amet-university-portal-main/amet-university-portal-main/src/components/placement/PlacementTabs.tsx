
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  Briefcase, Users, Award, Building, FileText, ClipboardList, 
  FileCheck, BookOpen, CheckSquare, Bookmark, FileType
} from 'lucide-react';

const PlacementTabs = () => {
  const location = useLocation();
  const path = location.pathname;

  // Organize tabs in two rows for better display
  const topRowTabs = [
    { name: 'Placements and Training', href: '/placements', icon: Briefcase },
    { name: 'Placement Officials', href: '/placement/director', icon: Users },
    { name: 'Our Recruiters', href: '/placement/recruiters', icon: Building },
    { name: 'A.P Moller - Maersk Centre of Excellence', href: '/placement/maersk-excellence', icon: Award },
    { name: 'Admission Cum Recruitment', href: '/placement/admission-recruitment', icon: FileText },
  ];

  const bottomRowTabs = [
    { name: 'Testimonials', href: '/placement/testimonial', icon: BookOpen },
    { name: 'Placement Activities', href: '/placement/activities', icon: ClipboardList },
    { name: 'Placement Policy', href: '/pdfs/placement-policy.pdf', icon: FileCheck, external: true },
    { name: 'Competency Assessment', href: '/placement/assessment', icon: CheckSquare },
    { name: 'Placement Procedure', href: '/pdfs/placement-procedure.pdf', icon: FileCheck, external: true },
    { name: 'Training Rules', href: '/placement/training-rules', icon: Bookmark },
    { name: 'SOP for Recruitment', href: '/placement/sop', icon: FileType },
  ];

  const renderTabRow = (tabs: Array<{ name: string; href: string; icon: React.ElementType; external?: boolean }>) => {
    return tabs.map((tab) => {
      const isActive = path === tab.href || 
                      (tab.href === '/placements' && path === '/placement/center') ||
                      path.startsWith(tab.href);
      const Icon = tab.icon;
      
      const className = cn(
        "inline-flex items-center px-2 py-2 text-sm font-medium rounded-md whitespace-nowrap transition-colors",
        isActive
          ? "bg-white text-[#152043] shadow-sm"
          : "text-white/80 hover:text-white hover:bg-white/10"
      );

      if (tab.external) {
        return (
          <a
            key={tab.href}
            href={tab.href}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
          >
            <Icon className="mr-1 h-4 w-4" />
            <span className="text-xs sm:text-sm">{tab.name}</span>
          </a>
        );
      }

      return (
        <Link
          key={tab.href}
          to={tab.href}
          className={className}
        >
          <Icon className="mr-1 h-4 w-4" />
          <span className="text-xs sm:text-sm">{tab.name}</span>
        </Link>
      );
    });
  };

  return (
    <div className="w-full overflow-x-auto bg-[#152043] rounded-lg p-4">
      <div className="flex flex-col gap-3">
        <div className="flex flex-nowrap space-x-1 pb-1 min-w-max">
          {renderTabRow(topRowTabs)}
        </div>
        <div className="flex flex-nowrap space-x-1 pb-1 min-w-max">
          {renderTabRow(bottomRowTabs)}
        </div>
      </div>
    </div>
  );
};

export default PlacementTabs;
