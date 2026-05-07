
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import TopMenu from './navbar/TopMenu';
import DesktopNav from './navbar/DesktopNav';
import MobileNav from './navbar/MobileNav';
import ApplyButton from './navbar/ApplyButton';
import { menuItems } from '@/data/menuItems';
import ametLogo from '@/assets/amet-header-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Top Menu - Always visible */}
      <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
        <TopMenu />
        
        {/* Main Navigation */}
        <nav
          className={cn(
            'w-full transition-all duration-300 bg-white',
            isScrolled ? 'py-2 shadow-sm' : 'py-3'
          )}
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex justify-between items-start">
              {/* Logo - Fully responsive across all breakpoints */}
              <a href="/" className="flex items-center relative z-50 transition-all duration-300 hover:scale-105">
                <img 
                  src={ametLogo}
                  alt="AMET University Logo" 
                  className={cn(
                    "transition-all duration-300 w-auto",
                    isScrolled 
                      ? "h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20" 
                      : "h-12 sm:h-14 md:h-16 lg:h-20 xl:h-24"
                  )}
                />
              </a>

              <div className="flex flex-col items-end">
                {/* 32 Years Badges - Above navigation menu */}
                <div className="hidden md:flex justify-end mb-2">
                  <img 
                    src="/lovable-uploads/29808f61-702a-452a-bf3a-be8f4e92b6f0.png" 
                    alt="32 Years Badges" 
                    className="h-9" 
                  />
                </div>
                
                <div className="flex items-center">
                  {/* Main Navigation Menu */}
                  <div className="flex-grow flex justify-center px-2">
                    <DesktopNav 
                      menuItems={menuItems} 
                      hoveredMenu={hoveredMenu} 
                      setHoveredMenu={setHoveredMenu} 
                    />
                  </div>

                  {/* Apply Button */}
                  <div className="flex items-center mt-2">
                    <ApplyButton />
                    
                    {/* Mobile Navigation */}
                    <MobileNav 
                      menuItems={menuItems} 
                      isOpen={isOpen} 
                      toggleMenu={toggleMenu} 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Overlay when mobile menu is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-30 lg:hidden" 
          onClick={toggleMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Navbar;
