
import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import MobileSubmenuItem from './MobileSubmenuItem';

interface MobileSubmenuGroupProps {
  groupName: string;
  items: string[];
  menuLabel: string;
  getSubmenuLink: (menu: string, subItem: string) => string;
}

const MobileSubmenuGroup: React.FC<MobileSubmenuGroupProps> = ({ 
  groupName, 
  items, 
  menuLabel, 
  getSubmenuLink 
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mb-4">
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex justify-between items-center w-full py-2 text-aemet-blue text-sm font-medium"
      >
        <span>{groupName}</span>
        {expanded ? (
          <ChevronDown className="h-4 w-4" />
        ) : (
          <ChevronRight className="h-4 w-4" />
        )}
      </button>
      
      {expanded && (
        <div className="pl-2 space-y-2 mt-1 mb-2">
          {items.map((subItem) => (
            <MobileSubmenuItem
              key={subItem}
              menuLabel={menuLabel}
              subItem={subItem}
              getSubmenuLink={getSubmenuLink}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileSubmenuGroup;
