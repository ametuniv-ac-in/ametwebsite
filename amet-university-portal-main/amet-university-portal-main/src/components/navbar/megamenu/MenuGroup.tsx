
import React from 'react';
import MenuItem from './MenuItem';

interface MenuGroupProps {
  groupName: string;
  items: string[];
  getSubmenuLink: (subItem: string) => string;
}

const MenuGroup: React.FC<MenuGroupProps> = ({ groupName, items, getSubmenuLink }) => {
  return (
    <div className="space-y-3">
      <h4 className="text-xs font-semibold text-aemet-blue uppercase tracking-wider">{groupName}</h4>
      <div className="grid grid-cols-1 gap-1">
        {Array.isArray(items) && items.map((item) => (
          <MenuItem 
            key={item} 
            item={item} 
            getSubmenuLink={getSubmenuLink}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuGroup;
