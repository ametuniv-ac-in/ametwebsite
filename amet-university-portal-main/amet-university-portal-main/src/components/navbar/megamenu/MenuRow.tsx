
import React from 'react';
import MenuGroup from './MenuGroup';

interface MenuRowProps {
  rowData: Record<string, string[]>;
  getSubmenuLink: (subItem: string) => string;
  extraClasses?: string;
}

const MenuRow: React.FC<MenuRowProps> = ({ rowData, getSubmenuLink, extraClasses = '' }) => {
  return (
    <div className={`grid grid-cols-2 gap-6 ${extraClasses}`}>
      {Object.entries(rowData).map(([groupName, items], index) => (
        <MenuGroup 
          key={`group-${index}`}
          groupName={groupName}
          items={items}
          getSubmenuLink={getSubmenuLink}
        />
      ))}
    </div>
  );
};

export default MenuRow;
