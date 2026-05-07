
import React from 'react';
import { Link } from 'react-router-dom';
import MenuItemIcon from './MenuItemIcon';

interface MenuItemProps {
  item: string;
  getSubmenuLink: (subItem: string) => string;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, getSubmenuLink }) => {
  return (
    <Link
      key={item}
      to={getSubmenuLink(item)}
      className="flex items-center text-xs text-gray-700 hover:text-aemet-blue hover:bg-gray-50 transition-colors px-2 py-1.5 rounded-md"
    >
      <MenuItemIcon item={item} />
      <span>{item}</span>
    </Link>
  );
};

export default MenuItem;
