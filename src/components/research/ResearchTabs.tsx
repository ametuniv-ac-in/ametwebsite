
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Microscope, 
  Network, 
  GraduationCap, 
  FileText,
  Award,
  ScrollText,
  FileCheck,
  ClipboardList
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

type ResearchRoute = {
  title: string;
  path: string;
  icon: React.ElementType;
};

// All research routes
const researchRoutes: ResearchRoute[] = [
  {
    title: "Research & Development",
    path: "/research-development",
    icon: Microscope,
  },
  {
    title: "Research Advisory Council",
    path: "/research-advisory-council",
    icon: Award,
  },
  {
    title: "Research Monitoring Committee",
    path: "/research-monitoring-committee",
    icon: ClipboardList,
  },
  {
    title: "Research Ecosystem",
    path: "/research-ecosystem",
    icon: Network,
  },
  {
    title: "Academic Research",
    path: "/academic-research",
    icon: GraduationCap,
  },
  {
    title: "PhD/D.Sc. Programmes",
    path: "/phd-programmes",
    icon: GraduationCap,
  },
  {
    title: "PhD Regulations",
    path: "/phd-regulations",
    icon: ScrollText,
  },
  {
    title: "PhD Admission",
    path: "/phd-admission-requirements",
    icon: ClipboardList,
  },
  {
    title: "DSC Regulations",
    path: "/dsc-regulations",
    icon: FileCheck,
  },
  {
    title: "DC Procedure",
    path: "/doctoral-committee-procedure",
    icon: ClipboardList,
  },
  {
    title: "Course Work",
    path: "/course-work-examinations",
    icon: FileCheck,
  },
  {
    title: "PhD Evaluation",
    path: "/phd-evaluation-procedures",
    icon: Award,
  },
  {
    title: "PhD Awarded",
    path: "/phd-awarded-list",
    icon: Award,
  },
  {
    title: "PhD Scholars",
    path: "/phd-scholars-list",
    icon: GraduationCap,
  },
  {
    title: "Supervisors",
    path: "/supervisors-list",
    icon: Award,
  },
  {
    title: "PhD Forms",
    path: "/phd-forms",
    icon: FileText,
  },
];

const ResearchTabs = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const isMobile = useIsMobile();
  
  // For mobile, split into two rows if needed
  const firstRowRoutes = researchRoutes.slice(0, 3);
  const secondRowRoutes = researchRoutes.slice(3);
  
  const renderTabRow = (routes: ResearchRoute[]) => {
    return routes.map((route) => {
      const isActive = route.path === currentPath ||
        (route.path === '/research-development' && currentPath === '/research');

      return (
        <TabsTrigger
          key={route.path}
          value={route.path}
          className={cn(
            "py-2 px-3 md:px-4 flex items-center gap-1 md:gap-2 whitespace-nowrap text-xs md:text-sm",
            "transition-all duration-200 ease-in-out",
            isActive 
              ? "bg-slate-100 text-aemet-navy" 
              : "hover:bg-slate-50 hover:text-aemet-blue"
          )}
          asChild
        >
          <Link to={route.path}>
            <route.icon className={cn(
              "h-3 w-3 md:h-4 md:w-4",
              "transition-colors duration-200",
              !isActive && "group-hover:text-aemet-blue"
            )} />
            <span className="truncate">{route.title}</span>
          </Link>
        </TabsTrigger>
      );
    });
  };

  const activeRoute = researchRoutes.find(route => {
    return route.path === currentPath || 
      (route.path === '/research-development' && currentPath === '/research');
  })?.path || currentPath;

  return (
    <div className="w-full">
      <Tabs value={activeRoute} className="w-full">
        {isMobile ? (
          <>
            <TabsList className="bg-white h-auto p-1 mb-1 flex flex-nowrap overflow-x-auto scrollbar-hide">
              {renderTabRow(firstRowRoutes)}
            </TabsList>
            <TabsList className="bg-white h-auto p-1 flex flex-nowrap overflow-x-auto scrollbar-hide">
              {renderTabRow(secondRowRoutes)}
            </TabsList>
          </>
        ) : (
          <TabsList className="bg-white h-auto p-1 flex flex-wrap overflow-x-auto">
            {renderTabRow(researchRoutes)}
          </TabsList>
        )}
      </Tabs>
    </div>
  );
};

export default ResearchTabs;
