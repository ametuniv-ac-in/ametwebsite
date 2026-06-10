
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import MobileMenuItem from './mobile/MobileMenuItem';

interface MenuItem {
  label: string;
  link: string;
  submenu?: string[];
}

interface MobileNavProps {
  menuItems: MenuItem[];
  isOpen: boolean;
  toggleMenu: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ menuItems, isOpen, toggleMenu }) => {
  const [expandedSubmenus, setExpandedSubmenus] = useState<string[]>([]);

  const toggleSubmenu = (label: string) => {
    setExpandedSubmenus(prev => 
      prev.includes(label) 
        ? prev.filter(item => item !== label)
        : [...prev, label]
    );
  };

  return (
    <>
      <div className="lg:hidden">
        <button 
          onClick={toggleMenu} 
          className="p-2 rounded-md hover:bg-gray-100 focus:outline-none transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-aemet-navy" />
          ) : (
            <Menu className="h-6 w-6 text-aemet-navy" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[calc(3.5rem+28px)] h-[calc(100vh-3.5rem-28px)] bg-white z-50 overflow-auto shadow-lg">
          <div className="px-4 py-6 space-y-2 max-h-full overflow-y-auto pb-24">
            {menuItems.map((item) => (
              <MobileMenuItem
                key={item.label}
                item={item}
                expandedSubmenus={expandedSubmenus}
                toggleSubmenu={toggleSubmenu}
              />
            ))}
            <div className="pt-4 pb-6">
              <Link
                to="/application-forms"
                className="block w-full text-center bg-aemet-navy text-white px-4 py-3 rounded-md text-base font-medium hover:bg-opacity-90 transition-colors"
              >
                Apply
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNav;
