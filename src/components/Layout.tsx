import React, { ReactNode, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './footer/Footer';
import CookieConsent from './CookieConsent';
import { Toaster } from "@/components/ui/toaster";
import SEO from './SEO';
import { seoConfig, defaultSEO } from '@/config/seoConfig';

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  
  // Get SEO data for current page
  const pageSEO = seoConfig[location.pathname] || defaultSEO;
  
  // Console log to debug rendering
  useEffect(() => {
    console.log(`Layout rendering for path: ${location.pathname}`);
    
    // Check if we're in an iframe
    const isInIframe = window !== window.parent;
    console.log("Layout - Is in iframe:", isInIframe);
  }, [location.pathname]);
  
  // Reset loading state on route change and scroll to top
  useEffect(() => {
    console.log(`Loading state reset for: ${location.pathname}`);
    setIsLoading(true);
    
    // Scroll to top when route changes
    window.scrollTo(0, 0);
    
    // Simulate content loading with a shorter timeout
    const timer = setTimeout(() => {
      setIsLoading(false);
      console.log(`Content loaded for: ${location.pathname}`);
    }, 100); // Reduced timeout from 300ms to 100ms
    
    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Update document title when title prop changes (fallback)
  useEffect(() => {
    if (title && !seoConfig[location.pathname]) {
      document.title = title;
      console.log(`Title updated to: ${title}`);
    }
  }, [title, location.pathname]);
  
  return (
    <div className="min-h-screen flex flex-col bg-white relative">
      <SEO 
        title={pageSEO.title}
        description={pageSEO.description}
        keywords={pageSEO.keywords}
        canonicalUrl={location.pathname}
      />
      <Navbar />
      <main className="flex-grow pt-[calc(42px+3.5rem)]"> {/* Adjusted to account for slightly reduced navbar height */}
        {isLoading ? (
          <div className="container mx-auto px-4 py-8 min-h-[20vh] flex flex-col items-center justify-center">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 border-3 border-aemet-blue border-t-transparent rounded-full animate-spin mb-2"></div>
              <p className="text-gray-600 text-sm">Loading content...</p>
            </div>
          </div>
        ) : (
          children
        )}
      </main>
      <Footer />
      <CookieConsent />
      <Toaster />
    </div>
  );
};

export default Layout;
