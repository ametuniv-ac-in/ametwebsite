
import React from 'react';
import { Link } from 'react-router-dom';
import MenuItemIcon from '../megamenu/MenuItemIcon';

interface StandardDropdownProps {
  menuLabel: string;
  items: string[];
  getSubmenuLink: (subItem: string) => string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const StandardDropdown: React.FC<StandardDropdownProps> = ({
  menuLabel,
  items,
  getSubmenuLink,
  onMouseEnter,
  onMouseLeave
}) => {
  return (
    <div
      className="absolute left-0 pt-2 z-50"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div 
        className="w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 animate-fade-in overflow-hidden"
        style={{ minWidth: '250px' }}
      >
        <div className="p-2">
        <h3 className="text-aemet-navy font-medium text-sm mb-2 border-b pb-2 px-3">{menuLabel}</h3>
        {items.map((item) => (
          <Link
            key={item}
            to={getSubmenuLink(item)}
            className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-aemet-blue rounded-md transition-colors"
          >
            <MenuItemIcon item={item} />
            <span>{item}</span>
          </Link>
        ))}
        </div>
      </div>
    </div>
  );
};

export default StandardDropdown;
