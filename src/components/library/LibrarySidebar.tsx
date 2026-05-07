
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  BookOpen, 
  Cpu, 
  Users, 
  FileText, 
  GraduationCap, 
  UserSquare2,
  Link as LinkIcon
} from 'lucide-react';
import { cn } from '@/lib/utils';

type LibraryRoute = {
  title: string;
  path: string;
  icon: React.ElementType;
};

const libraryRoutes: LibraryRoute[] = [
  {
    title: "Library Home",
    path: "/library",
    icon: BookOpen,
  },
  {
    title: "Resources",
    path: "/library/resources",
    icon: BookOpen,
  },
  {
    title: "Automation and Services",
    path: "/library/automation-services",
    icon: Cpu,
  },
  {
    title: "Membership & Resource Sharing",
    path: "/library/membership-sharing",
    icon: Users,
  },
  {
    title: "Rules and Regulations",
    path: "/library/rules",
    icon: FileText,
  },
  {
    title: "Ph.D. Thesis (New Arrival)",
    path: "/library/phd-thesis",
    icon: GraduationCap,
  },
  {
    title: "Committee & Staff",
    path: "/library/committee-staff",
    icon: UserSquare2,
  },
  {
    title: "Important Links",
    path: "/library/important-links",
    icon: LinkIcon,
  },
];

const LibrarySidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="bg-white rounded-lg shadow-md h-full overflow-hidden border border-slate-100">
      <div className="p-4 bg-gradient-to-r from-aemet-navy to-aemet-blue">
        <h3 className="text-lg font-semibold text-white mb-1">Library</h3>
        <p className="text-xs text-white/80">Navigation Menu</p>
      </div>
      <div className="py-3 px-2">
        <ul className="space-y-1.5">
          {libraryRoutes.map((route) => {
            const isActive = (route.path === '/library' 
              ? currentPath === '/library' 
              : currentPath.startsWith(route.path));
            
            return (
              <li key={route.path}>
                <Link
                  to={route.path}
                  className={cn(
                    "flex items-center gap-3 p-2.5 rounded-lg transition-all duration-200",
                    isActive 
                      ? "bg-slate-100 text-aemet-navy shadow-sm" 
                      : "text-gray-600 hover:bg-slate-50 hover:text-aemet-blue"
                  )}
                >
                  <div className={cn(
                    "flex items-center justify-center w-8 h-8 rounded-full",
                    isActive
                      ? "bg-aemet-blue/10 text-aemet-blue"
                      : "bg-slate-100 text-gray-500"
                  )}>
                    <route.icon className="h-4 w-4" />
                  </div>
                  <span className={cn(
                    "text-sm",
                    isActive && "font-medium"
                  )}>
                    {route.title}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default LibrarySidebar;
