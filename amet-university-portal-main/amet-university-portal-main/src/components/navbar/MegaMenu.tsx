
import React from 'react';
import MenuRow from './megamenu/MenuRow';
import { organizeMenuItems } from './megamenu/menuOrganizers';
import { cn } from '@/lib/utils';

interface MegaMenuProps {
  menuLabel: string;
  menuItems: string[];
  getSubmenuLink: (subItem: string) => string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const MegaMenu: React.FC<MegaMenuProps> = ({ 
  menuLabel, 
  menuItems, 
  getSubmenuLink, 
  onMouseEnter, 
  onMouseLeave 
}) => {
  const menuRows = organizeMenuItems(menuLabel, menuItems);
  const isPlacement = menuLabel === 'Placement';
  
  return (
    <div 
      className={cn(
        "absolute pt-2 z-50",
        isPlacement ? "right-0" : "left-0"
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div 
        className="rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 animate-fade-in overflow-hidden"
        style={{ width: 'max-content', maxWidth: '800px', minHeight: '200px' }}
      >
        <div className="py-4 px-6">
        <h3 className="text-aemet-navy font-medium text-sm mb-4 border-b pb-2">{menuLabel}</h3>
        
        <div className="flex flex-col space-y-6">
          {/* Row 1 */}
          {Object.keys(menuRows[0]).length > 0 && (
            <MenuRow 
              rowData={menuRows[0]} 
              getSubmenuLink={getSubmenuLink} 
            />
          )}
          
          {/* Row 2 (if exists) */}
          {menuRows[1] && Object.keys(menuRows[1]).length > 0 && (
            <MenuRow 
              rowData={menuRows[1]} 
              getSubmenuLink={getSubmenuLink}
              extraClasses="pt-2 border-t border-gray-100" 
            />
          )}
        </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
