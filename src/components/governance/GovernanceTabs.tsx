
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Users, 
  Building2, 
  GraduationCap, 
  ClipboardList, 
  UserSquare,
  BarChart3,
  DollarSign,
  Users2,
  Network,
  Share2
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

type GovernanceRoute = {
  title: string;
  path: string;
  icon: React.ElementType;
};

// Split routes into two groups for better display on smaller screens
const firstRowRoutes: GovernanceRoute[] = [
  {
    title: "Governance",
    path: "/governance",
    icon: Building2,
  },
  {
    title: "Officials",
    path: "/governance/officials",
    icon: Users,
  },
  {
    title: "Executive Council",
    path: "/governance/executive-council",
    icon: Building2,
  },
  {
    title: "Deans & Directors",
    path: "/governance/deans-directors",
    icon: Users,
  },
  {
    title: "Academic Council",
    path: "/governance/academic-council",
    icon: GraduationCap,
  },
];

const secondRowRoutes: GovernanceRoute[] = [
  {
    title: "Faculty Chairpersons",
    path: "/governance/faculty-chairpersons",
    icon: UserSquare,
  },
  {
    title: "Planning & Monitoring",
    path: "/governance/planning-monitoring",
    icon: BarChart3,
  },
  {
    title: "Finance Committee",
    path: "/governance/finance-committee",
    icon: DollarSign,
  },
  {
    title: "Co-ordinators",
    path: "/governance/coordinators",
    icon: Users2,
  },
  {
    title: "Organogram",
    path: "/governance/organogram",
    icon: Network,
  },
];

const allRoutes = [...firstRowRoutes, ...secondRowRoutes];

const GovernanceTabs = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const isMobile = useIsMobile();
  
  const renderTabRow = (routes: GovernanceRoute[]) => {
    return routes.map((route) => {
      const isActive = (route.path === '/governance' 
        ? currentPath === '/governance' 
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

export default GovernanceTabs;
