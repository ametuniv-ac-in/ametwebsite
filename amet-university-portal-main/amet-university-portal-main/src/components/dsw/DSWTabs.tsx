
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Building2, 
  Home, 
  Globe, 
  Users, 
  Flag, 
  Shield, 
  Music, 
  Leaf, 
  Sparkles, 
  Heart, 
  UtensilsCrossed, 
  FileText 
} from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useIsMobile } from '@/hooks/use-mobile';

type DSWRoute = {
  title: string;
  path: string;
  icon: React.ReactNode;
};

const dswRoutes: DSWRoute[] = [
  { title: 'Overview', path: '/directorate-students-welfare', icon: <Building2 className="h-4 w-4" /> },
  { title: 'S3 Centre', path: '/directorate-students-welfare/s3-centre', icon: <Building2 className="h-4 w-4" /> },
  { title: 'Hall of Residence', path: '/directorate-students-welfare/hall-of-residence', icon: <Home className="h-4 w-4" /> },
  { title: 'AMETUNISPO', path: '/directorate-students-welfare/ametunispo', icon: <Globe className="h-4 w-4" /> },
  { title: 'Student Council', path: '/directorate-students-welfare/student-council', icon: <Users className="h-4 w-4" /> },
  { title: 'NSS', path: '/directorate-students-welfare/nss', icon: <Flag className="h-4 w-4" /> },
  { title: 'NCC', path: '/directorate-students-welfare/ncc', icon: <Shield className="h-4 w-4" /> },
  { title: 'Cultural Club', path: '/directorate-students-welfare/cultural-club', icon: <Music className="h-4 w-4" /> },
  { title: 'Unnat Bharat', path: '/directorate-students-welfare/unnat-bharat', icon: <Leaf className="h-4 w-4" /> },
  { title: 'Swachhta Pakhwada', path: '/directorate-students-welfare/swachhta-pakhwada', icon: <Sparkles className="h-4 w-4" /> },
  { title: 'Health Care', path: '/directorate-students-welfare/health-care', icon: <Heart className="h-4 w-4" /> },
  { title: 'Mess Committee', path: '/directorate-students-welfare/mess-committee', icon: <UtensilsCrossed className="h-4 w-4" /> },
  { title: 'Service Request', path: '/directorate-students-welfare/service-request', icon: <FileText className="h-4 w-4" /> },
];

const DSWTabs: React.FC = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const currentPath = location.pathname;

  const renderTabRow = (routes: DSWRoute[]) => {
    return routes.map((route) => (
      <TabsTrigger
        key={route.path}
        value={route.path}
        asChild
        className={`flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm whitespace-nowrap ${
          currentPath === route.path
            ? 'bg-aemet-blue text-white data-[state=active]:bg-aemet-blue data-[state=active]:text-white'
            : 'text-gray-600 hover:text-aemet-blue'
        }`}
      >
        <Link to={route.path}>
          {route.icon}
          <span>{route.title}</span>
        </Link>
      </TabsTrigger>
    ));
  };

  // Split routes into rows for mobile
  const firstRowRoutes = dswRoutes.slice(0, 4);
  const secondRowRoutes = dswRoutes.slice(4, 8);
  const thirdRowRoutes = dswRoutes.slice(8);

  return (
    <Tabs value={currentPath} className="w-full">
      {isMobile ? (
        <div className="flex flex-col gap-1">
          <TabsList className="w-full h-auto flex-wrap justify-center bg-slate-100 overflow-x-auto">
            {renderTabRow(firstRowRoutes)}
          </TabsList>
          <TabsList className="w-full h-auto flex-wrap justify-center bg-slate-100 overflow-x-auto">
            {renderTabRow(secondRowRoutes)}
          </TabsList>
          <TabsList className="w-full h-auto flex-wrap justify-center bg-slate-100 overflow-x-auto">
            {renderTabRow(thirdRowRoutes)}
          </TabsList>
        </div>
      ) : (
        <div className="flex flex-col gap-1">
          <TabsList className="w-full h-auto flex-wrap justify-center bg-slate-100">
            {renderTabRow(dswRoutes.slice(0, 7))}
          </TabsList>
          <TabsList className="w-full h-auto flex-wrap justify-center bg-slate-100">
            {renderTabRow(dswRoutes.slice(7))}
          </TabsList>
        </div>
      )}
    </Tabs>
  );
};

export default DSWTabs;
