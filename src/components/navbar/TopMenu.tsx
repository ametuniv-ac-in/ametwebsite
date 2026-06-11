
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ChevronDown, ChevronUp, Menu } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerClose
} from "@/components/ui/drawer";

const TopMenu = () => {
  const topMenuLinks = {
    'NAD': '/examination/nad-cell',
    'NAAC': '/naac',
    'NBA': '/nba',
    'NIRF': '/nirf',
    'ARIIA': '/ariia',
    'Career': '/career',
    'Sea Courses': 'https://ametcitycollege.com/',
    'ODL/OL': '/odl-programs',
    'Campus Life': '/directorate-students-welfare',
    'Student Corner': '/student-corner',
    'Contact': '/contact-us'
  };
  
  const isMobile = useIsMobile();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const NewBadge = () => (
    <span className="ml-0.5 inline-flex items-center bg-red-600 text-white text-[8px] font-bold uppercase px-1 py-[1px] rounded animate-pulse leading-none align-super">
      New
    </span>
  );
  
  if (isMobile) {
    return (
      <div className="bg-aemet-navy text-white py-1.5 text-xs flex justify-end">
        <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
          <DrawerTrigger asChild>
            <button className="flex items-center px-3 py-1 mr-2 text-white text-xs focus:outline-none">
              Quick Links <ChevronDown className="h-3 w-3 ml-1" />
            </button>
          </DrawerTrigger>
          <DrawerContent className="bg-aemet-navy text-white max-h-[75vh]">
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-sm font-semibold">Quick Links</h4>
                <DrawerClose asChild>
                  <button className="text-white/70 hover:text-white">
                    <ChevronUp className="h-4 w-4" />
                  </button>
                </DrawerClose>
              </div>
              <div className="space-y-3 overflow-y-auto max-h-[calc(75vh-4rem)]">
                {Object.entries(topMenuLinks).map(([key, link]) => (
                  link.startsWith('http') ? (
                    <a
                      key={key}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsDrawerOpen(false)}
                      className="block py-2 hover:text-amber-200 transition-colors border-b border-white/10 last:border-b-0"
                    >
                      {key}
                    </a>
                  ) : (
                    <Link
                      key={key}
                      to={link}
                      onClick={() => setIsDrawerOpen(false)}
                      className={cn(
                        "block py-2 hover:text-amber-200 transition-colors border-b border-white/10 last:border-b-0",
                        link === "#" && "opacity-50"
                      )}
                    >
                      {key}
                      {key === 'Career' && <NewBadge />}
                    </Link>
                  )
                ))}
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    );
  }
  
  return (
    <div className="bg-aemet-navy text-white py-1.5 text-xs md:text-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-end">
          <div className="flex items-center space-x-1">
            {Object.entries(topMenuLinks).map(([key, link], i) => (
              <div key={key} className="flex items-center">
                {i > 0 && <div className="w-px h-3.5 bg-white/30 mr-1.5" />}
                {link.startsWith('http') ? (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-1.5 hover:text-amber-200 transition-colors whitespace-nowrap"
                  >
                    {key}
                  </a>
                ) : (
                  <Link
                    to={link}
                    className={cn(
                      "px-1.5 hover:text-amber-200 transition-colors whitespace-nowrap",
                      link === "#" && "cursor-not-allowed opacity-50"
                    )}
                  >
                    {key}
                    {key === 'Career' && <NewBadge />}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
