import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '@/lib/gtm';
import { seoConfig, defaultSEO } from '@/config/seoConfig';

const GTMPageTracker = () => {
  const location = useLocation();

  useEffect(() => {
    const pageSEO = seoConfig[location.pathname] || defaultSEO;
    
    trackPageView({
      pageTitle: `${pageSEO.title} | AMET University`,
      pageUrl: window.location.href,
      pagePath: location.pathname,
    });
  }, [location.pathname]);

  return null;
};

export default GTMPageTracker;
