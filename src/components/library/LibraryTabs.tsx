
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
import { useIsMobile } from '@/hooks/use-mobile';

type LibraryRoute = {
  title: string;
  path: string;
  icon: React.ElementType;
};

// Split routes into two groups for better display on smaller screens
const firstRowRoutes: LibraryRoute[] = [
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
];

const secondRowRoutes: LibraryRoute[] = [
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

const allRoutes = [...firstRowRoutes, ...secondRowRoutes];

const LibraryTabs = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const isMobile = useIsMobile();
  
  const renderTabRow = (routes: LibraryRoute[]) => {
    return routes.map((route) => {
      const isActive = (route.path === '/library' 
        ? currentPath === '/library' 
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

  return (
    <div className="w-full">
      <Tabs defaultValue={currentPath} className="w-full">
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

export default LibraryTabs;
