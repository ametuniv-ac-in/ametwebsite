import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  Eye,
  User,
  Award,
  FileText,
  Globe,
  Mail,
  ChevronRight,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const routes = [
  { title: 'Home', path: '/maritime-foundation', icon: Home },
  { title: 'Vision & Mission', path: '/maritime-foundation/vision-mission', icon: Eye },
  { title: 'Dr. J. Ramachandran – A Maritime Legend', path: '/maritime-foundation/legend', icon: User },
  { title: 'AMET Global Maritime Awards (AGMA)', path: '/maritime-foundation/awards', icon: Award },
  { title: 'Application and Nomination Process', path: '/maritime-foundation/application', icon: FileText },
  { title: 'AMET Global Maritime Summit (AGMS)', path: '/maritime-foundation/agms-2025', icon: Globe },
  { title: 'Contact Us', path: '/maritime-foundation/contact', icon: Mail },
];

const MaritimeFoundationSidebar: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-slate-100">
      <div className="p-4 bg-aemet-navy">
        <h3 className="text-lg font-semibold text-white">Foundation Sections</h3>
      </div>
      <ul className="py-2">
        {routes.map((route) => {
          const isActive =
            route.path === '/maritime-foundation'
              ? pathname === '/maritime-foundation'
              : pathname.startsWith(route.path);
          const Icon = route.icon;
          return (
            <li key={route.path}>
              <Link
                to={route.path}
                className={cn(
                  'flex items-center justify-between gap-3 px-4 py-3 transition-colors border-l-4',
                  isActive
                    ? 'bg-slate-50 border-aemet-navy text-aemet-navy font-medium'
                    : 'border-transparent text-gray-700 hover:bg-slate-50 hover:text-aemet-blue'
                )}
              >
                <span className="flex items-center gap-3 min-w-0">
                  <Icon className={cn('h-4 w-4 flex-shrink-0', isActive ? 'text-aemet-navy' : 'text-aemet-blue')} />
                  <span className="text-sm leading-snug">{route.title}</span>
                </span>
                <ChevronRight className="h-4 w-4 text-gray-400 flex-shrink-0" />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MaritimeFoundationSidebar;