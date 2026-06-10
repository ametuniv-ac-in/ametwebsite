
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { 
  GraduationCap, 
  BookOpen, 
  FileText, 
  Award, 
  FileCheck,
  Ship,
  BookOpenCheck,
  ExternalLink,
  Lightbulb,
  HelpCircle,
  ChevronDown,
  Anchor,
  Bell
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

type AdmissionsRoute = {
  title: string;
  path: string;
  icon: React.ElementType;
};

// Split routes into two groups for better display on smaller screens
const firstRowRoutes: AdmissionsRoute[] = [
  {
    title: "Admissions",
    path: "/admissions",
    icon: GraduationCap,
  },
  {
    title: "Programs Offered",
    path: "/programs-offered",
    icon: BookOpen,
  },
  {
    title: "Application Forms",
    path: "/application-forms",
    icon: FileCheck,
  },
  {
    title: "Scholarship",
    path: "/scholarship",
    icon: Award,
  },
  {
    title: "Announcement",
    path: "/admissions/announcement",
    icon: Bell,
  },
];

// Dropdown menu items for Admission & Recruitment Drive
const recruitmentDropdownItems = [
  {
    title: "V-Ships Admission",
    path: "/vships-admission",
    icon: Ship,
  },
  {
    title: "AP Moller",
    path: "/placement/maersk-excellence",
    icon: Anchor,
  },
];

const secondRowRoutes: AdmissionsRoute[] = [
  {
    title: "Kalvi Career",
    path: "/kalvi-career",
    icon: BookOpenCheck,
  },
  {
    title: "Face Prep Campus",
    path: "/face-prep-campus",
    icon: Lightbulb,
  },
  {
    title: "Emversity",
    path: "/emversity",
    icon: ExternalLink,
  },
  {
    title: "Guidelines Indian",
    path: "/guidelines-indian",
    icon: HelpCircle,
  },
  {
    title: "Guidelines International",
    path: "/guidelines-international",
    icon: HelpCircle,
  },
];

const allRoutes = [...firstRowRoutes, ...secondRowRoutes];

const AdmissionsTabs = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const isMobile = useIsMobile();
  
  const isRecruitmentActive = recruitmentDropdownItems.some(
    item => currentPath.startsWith(item.path)
  );

  const renderTabRow = (routes: AdmissionsRoute[], includeDropdown = false) => {
    const tabs = routes.map((route) => {
      const isActive = (route.path === '/admissions' 
        ? currentPath === '/admissions' 
        : currentPath.startsWith(route.path));
      
      return (
        <TabsTrigger
          key={route.path}
          value={route.path}
          className={cn(
            "py-2 px-3 md:px-4 flex items-center gap-1 md:gap-2 whitespace-nowrap text-xs md:text-sm",
            "transition-all duration-200 ease-in-out",
            isActive 
              ? "bg-white text-[#152043] font-medium" 
              : "text-white/80 hover:bg-white/10 hover:text-white"
          )}
          asChild
        >
          <Link to={route.path}>
            <route.icon className={cn(
              "h-3 w-3 md:h-4 md:w-4",
              "transition-colors duration-200",
              isActive ? "text-[#152043]" : "text-white/80"
            )} />
            <span className="truncate">{route.title}</span>
          </Link>
        </TabsTrigger>
      );
    });

    if (includeDropdown) {
      const dropdownElement = (
        <DropdownMenu key="recruitment-dropdown">
          <DropdownMenuTrigger
            className={cn(
              "py-2 px-3 md:px-4 flex items-center gap-1 md:gap-2 whitespace-nowrap text-xs md:text-sm rounded-md",
              "transition-all duration-200 ease-in-out outline-none",
              isRecruitmentActive 
                ? "bg-white text-[#152043] font-medium" 
                : "text-white/80 hover:bg-white/10 hover:text-white"
            )}
          >
            <Ship className={cn(
              "h-3 w-3 md:h-4 md:w-4",
              "transition-colors duration-200",
              isRecruitmentActive ? "text-[#152043]" : "text-white/80"
            )} />
            <span className="truncate">Admission & Recruitment Drive</span>
            <ChevronDown className={cn(
              "h-3 w-3",
              isRecruitmentActive ? "text-[#152043]" : "text-white/80"
            )} />
          </DropdownMenuTrigger>
          <DropdownMenuContent 
            className="bg-[#152043] border-white/20 z-50 min-w-[180px]"
            align="start"
          >
            {recruitmentDropdownItems.map((item) => {
              const isItemActive = currentPath.startsWith(item.path);
              return (
                <DropdownMenuItem 
                  key={item.path} 
                  asChild
                  className={cn(
                    "cursor-pointer",
                    isItemActive 
                      ? "bg-white/20 text-white" 
                      : "text-white/80 hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white"
                  )}
                >
                  <Link to={item.path} className="flex items-center gap-2">
                    <item.icon className="h-4 w-4" />
                    <span>{item.title}</span>
                  </Link>
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      );
      
      // Insert dropdown after the first tab (after firstRowRoutes)
      return [dropdownElement, ...tabs];
    }

    return tabs;
  };

  return (
    <div className="w-full">
      <Tabs defaultValue={currentPath} className="w-full">
        {isMobile ? (
          <>
            <TabsList className="bg-[#152043] h-auto p-1 mb-1 flex flex-nowrap overflow-x-auto scrollbar-hide rounded-lg">
              {renderTabRow(firstRowRoutes)}
            </TabsList>
            <TabsList className="bg-[#152043] h-auto p-1 flex flex-nowrap overflow-x-auto scrollbar-hide rounded-lg">
              {renderTabRow(secondRowRoutes, true)}
            </TabsList>
          </>
        ) : (
          <TabsList className="bg-[#152043] h-auto p-1 flex flex-wrap overflow-x-auto rounded-lg">
            {renderTabRow(firstRowRoutes)}
            <DropdownMenu>
              <DropdownMenuTrigger
                className={cn(
                  "py-2 px-3 md:px-4 flex items-center gap-1 md:gap-2 whitespace-nowrap text-xs md:text-sm rounded-md",
                  "transition-all duration-200 ease-in-out outline-none",
                  isRecruitmentActive 
                    ? "bg-white text-[#152043] font-medium" 
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                )}
              >
                <Ship className={cn(
                  "h-3 w-3 md:h-4 md:w-4",
                  "transition-colors duration-200",
                  isRecruitmentActive ? "text-[#152043]" : "text-white/80"
                )} />
                <span className="truncate">Admission & Recruitment Drive</span>
                <ChevronDown className={cn(
                  "h-3 w-3",
                  isRecruitmentActive ? "text-[#152043]" : "text-white/80"
                )} />
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                className="bg-[#152043] border-white/20 z-50 min-w-[180px]"
                align="start"
              >
                {recruitmentDropdownItems.map((item) => {
                  const isItemActive = currentPath.startsWith(item.path);
                  return (
                    <DropdownMenuItem 
                      key={item.path} 
                      asChild
                      className={cn(
                        "cursor-pointer",
                        isItemActive 
                          ? "bg-white/20 text-white" 
                          : "text-white/80 hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white"
                      )}
                    >
                      <Link to={item.path} className="flex items-center gap-2">
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </Link>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
            {renderTabRow(secondRowRoutes)}
          </TabsList>
        )}
      </Tabs>
    </div>
  );
};

export default AdmissionsTabs;
