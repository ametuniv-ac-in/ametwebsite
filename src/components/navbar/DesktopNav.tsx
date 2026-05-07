
import React, { useState, useRef, useEffect } from 'react';
import NavMenuItem from './NavMenuItem';

interface MenuItem {
  label: string;
  link: string;
  submenu?: string[];
}

interface DesktopNavProps {
  menuItems: MenuItem[];
  hoveredMenu: string | null;
  setHoveredMenu: (menu: string | null) => void;
}

const DesktopNav: React.FC<DesktopNavProps> = ({ menuItems, hoveredMenu, setHoveredMenu }) => {
  const [hoveringSubmenu, setHoveringSubmenu] = useState(false);
  const hoveringSubmenuRef = useRef(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Sync ref with state and clear timeout when hovering submenu
  useEffect(() => {
    hoveringSubmenuRef.current = hoveringSubmenu;
    if (hoveringSubmenu && timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, [hoveringSubmenu]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleMenuEnter = (label: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setHoveredMenu(label);
  };

  const handleMenuLeave = () => {
    // Add delay before closing to allow mouse to reach submenu
    timeoutRef.current = setTimeout(() => {
      if (!hoveringSubmenuRef.current) {
        setHoveredMenu(null);
      }
    }, 150);
  };

  // Safe setter that updates ref immediately (prevents stale closure)
  const setHoveringSubmenuSafe = (value: boolean) => {
    hoveringSubmenuRef.current = value;
    setHoveringSubmenu(value);
  };

  return (
    <div className="hidden lg:flex items-center justify-between space-x-0.5 flex-grow max-w-5xl whitespace-nowrap">
      {menuItems.map((item) => (
        <NavMenuItem
          key={item.label}
          item={item}
          hoveredMenu={hoveredMenu}
          onMenuEnter={handleMenuEnter}
          onMenuLeave={handleMenuLeave}
          hoveringSubmenu={hoveringSubmenu}
          setHoveringSubmenu={setHoveringSubmenuSafe}
        />
      ))}
    </div>
  );
};

export default DesktopNav;
