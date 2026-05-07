
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  FileText, 
  FileCheck, 
  Calendar, 
  Download, 
  DollarSign, 
  Database,
  Award,
  GraduationCap,
  BookOpen,
  Settings
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

type ExaminationRoute = {
  title: string;
  path: string;
  icon: React.ElementType;
};

// Split routes into two groups for better display on smaller screens
const firstRowRoutes: ExaminationRoute[] = [
  {
    title: "Controller of Examinations",
    path: "/examination",
    icon: Settings,
  },
  {
    title: "Reforms and IT Integrations",
    path: "/examination/reforms",
    icon: Settings,
  },
  {
    title: "Announcement",
    path: "/examination/announcement",
    icon: FileText,
  },
  {
    title: "Exam Timetable",
    path: "/examination/timetable",
    icon: Calendar,
  },
];

const secondRowRoutes: ExaminationRoute[] = [
  {
    title: "Download Forms",
    path: "/examination/forms",
    icon: Download,
  },
  {
    title: "Fee Details",
    path: "/examination/fees",
    icon: DollarSign,
  },
  {
    title: "Result Publication",
    path: "/examination/results",
    icon: FileCheck,
  },
  {
    title: "Certificate Verification",
    path: "/examination/verification",
    icon: FileCheck,
  },
  {
    title: "Convocation",
    path: "/examination/convocation",
    icon: Award,
  },
  {
    title: "Ph.D. Course Work",
    path: "/examination/phd-coursework",
    icon: GraduationCap,
  },
  {
    title: "NAD Cell",
    path: "/examination/nad-cell",
    icon: BookOpen,
  },
];

const allRoutes = [...firstRowRoutes, ...secondRowRoutes];

const ExaminationTabs = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const isMobile = useIsMobile();
  
  const renderTabRow = (routes: ExaminationRoute[]) => {
    return routes.map((route) => {
      const isActive = (route.path === '/examination' 
        ? currentPath === '/examination' 
        : currentPath.startsWith(route.path));
      
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

  // Find the active route value for the tabs
  const activeRoute = allRoutes.find(route => 
    route.path === '/examination' 
      ? currentPath === '/examination' 
      : currentPath.startsWith(route.path)
  )?.path || currentPath;

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
            {renderTabRow(allRoutes)}
          </TabsList>
        )}
      </Tabs>
    </div>
  );
};

export default ExaminationTabs;
