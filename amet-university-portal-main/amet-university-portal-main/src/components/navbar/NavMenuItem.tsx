
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import MegaMenu from './MegaMenu';
import StandardDropdown from './dropdown/StandardDropdown';
import { getSubmenuLink } from './utils/submenuLinks';

interface MenuItem {
  label: string;
  link: string;
  submenu?: string[];
}

interface NavMenuItemProps {
  item: MenuItem;
  hoveredMenu: string | null;
  onMenuEnter: (label: string) => void;
  onMenuLeave: () => void;
  hoveringSubmenu: boolean;
  setHoveringSubmenu: (hovering: boolean) => void;
}

const NavMenuItem: React.FC<NavMenuItemProps> = ({
  item,
  hoveredMenu,
  onMenuEnter,
  onMenuLeave,
  hoveringSubmenu,
  setHoveringSubmenu
}) => {
  const isActive = hoveredMenu === item.label;
  
  // Determine which menus should use the mega menu style
  // Gallery, Administration and Admissions should use MegaMenu regardless of item count for consistency
  const hasMegaMenu = item.submenu && (
    item.submenu.length > 6 || 
    item.label === 'Gallery' || 
    item.label === 'Administration' ||
    item.label === 'Admissions'
  );

  return (
    <div 
      className="relative group"
      onMouseEnter={() => onMenuEnter(item.label)}
      onMouseLeave={onMenuLeave}
    >
      {item.submenu ? (
        <div 
          className={cn(
            "text-aemet-navy text-sm font-medium flex items-center transition-all duration-200 px-2 py-2 rounded-md whitespace-nowrap cursor-pointer",
            isActive 
              ? "text-aemet-blue bg-gray-50"
              : "hover:text-aemet-blue hover:bg-gray-50"
          )}
        >
          {item.label}
          <ChevronDown className={cn(
            "ml-0.5 h-4 w-4 transition-transform duration-200",
            isActive && "rotate-180"
          )} />
        </div>
      ) : (
        <Link 
          to={item.link} 
          className={cn(
            "text-aemet-navy text-sm font-medium flex items-center transition-all duration-200 px-2 py-2 rounded-md whitespace-nowrap",
            isActive 
              ? "text-aemet-blue bg-gray-50"
              : "hover:text-aemet-blue hover:bg-gray-50"
          )}
        >
          {item.label}
        </Link>
      )}
      
      {item.submenu && isActive && (
        <>
          {hasMegaMenu ? (
            <MegaMenu 
              menuLabel={item.label}
              menuItems={item.submenu}
              getSubmenuLink={(subItem) => getSubmenuLink(item.label, subItem)}
              onMouseEnter={() => setHoveringSubmenu(true)}
              onMouseLeave={() => {
                setHoveringSubmenu(false);
                onMenuLeave();
              }}
            />
          ) : (
            <StandardDropdown
              menuLabel={item.label}
              items={item.submenu}
              getSubmenuLink={(subItem) => getSubmenuLink(item.label, subItem)}
              onMouseEnter={() => setHoveringSubmenu(true)}
              onMouseLeave={() => {
                setHoveringSubmenu(false);
                onMenuLeave();
              }}
            />
          )}
        </>
      )}
    </div>
  );
};

export default NavMenuItem;
