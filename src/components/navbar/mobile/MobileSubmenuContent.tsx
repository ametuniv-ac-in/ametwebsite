
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileSubmenuGroup from './MobileSubmenuGroup';
import { getSubmenuGroups, getSubmenuLink } from './mobileNavUtils';

interface MobileSubmenuContentProps {
  menuLabel: string;
  submenu: string[];
}

const MobileSubmenuContent: React.FC<MobileSubmenuContentProps> = ({ menuLabel, submenu }) => {
  const [expandedGroups, setExpandedGroups] = useState<string[]>([]);

  const toggleGroup = (group: string) => {
    setExpandedGroups(prev => 
      prev.includes(group) 
        ? prev.filter(item => item !== group)
        : [...prev, group]
    );
  };

  const shouldUseGroups = submenu.length > 6;

  return (
    <div className="pl-4 mt-1 mb-3 animate-accordion-down">
      {shouldUseGroups ? (
        <>
          {Object.entries(getSubmenuGroups(menuLabel, submenu)).map(([group, items]) => (
            <MobileSubmenuGroup
              key={group}
              groupName={group}
              items={items}
              menuLabel={menuLabel}
              getSubmenuLink={getSubmenuLink}
            />
          ))}
        </>
      ) : (
        <div className="space-y-2">
          {submenu.map((subItem) => (
            <Link
              key={subItem}
              to={getSubmenuLink(menuLabel, subItem)}
              className="block py-2.5 text-sm text-aemet-navy hover:text-aemet-blue border-l-2 border-gray-200 pl-3 transition-colors hover:border-aemet-blue"
            >
              {subItem}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileSubmenuContent;
