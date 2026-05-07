import React, { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../Layout';
import SEO from '@/components/SEO';
import { seoConfig, defaultSEO } from '@/config/seoConfig';

interface GalleryLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

const GalleryLayout: React.FC<GalleryLayoutProps> = ({ 
  children,
  title = "Gallery",
  description
}) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const pageSEO = seoConfig[currentPath] || defaultSEO;

  return (
    <Layout>
      <SEO 
        title={pageSEO.title}
        description={pageSEO.description}
        keywords={pageSEO.keywords}
        canonicalUrl={currentPath}
      />
      <div className="pt-32 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-aemet-navy mb-4">{title}</h1>
          {description && <p className="text-gray-600 mb-8 max-w-3xl">{description}</p>}
          {children}
        </div>
      </div>
    </Layout>
  );
};

export default GalleryLayout;
