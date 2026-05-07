
import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import MobileSubmenuContent from './MobileSubmenuContent';

interface MenuItem {
  label: string;
  link: string;
  submenu?: string[];
}

interface MobileMenuItemProps {
  item: MenuItem;
  expandedSubmenus: string[];
  toggleSubmenu: (label: string) => void;
}

const MobileMenuItem: React.FC<MobileMenuItemProps> = ({ item, expandedSubmenus, toggleSubmenu }) => {
  return (
    <div className="border-b border-gray-100 last:border-0 py-1">
      {item.submenu ? (
        <>
          <button
            onClick={() => toggleSubmenu(item.label)}
            className="flex justify-between items-center w-full py-3 text-aemet-navy hover:text-aemet-blue text-base font-medium transition-colors"
          >
            <span>{item.label}</span>
            {expandedSubmenus.includes(item.label) ? (
              <ChevronDown className="h-5 w-5" />
            ) : (
              <ChevronRight className="h-5 w-5" />
            )}
          </button>
          
          {expandedSubmenus.includes(item.label) && (
            <MobileSubmenuContent 
              menuLabel={item.label} 
              submenu={item.submenu} 
            />
          )}
        </>
      ) : (
        <a
          href={item.link}
          className="block py-3 text-aemet-navy hover:text-aemet-blue text-base font-medium transition-colors"
        >
          {item.label}
        </a>
      )}
    </div>
  );
};

export default MobileMenuItem;
