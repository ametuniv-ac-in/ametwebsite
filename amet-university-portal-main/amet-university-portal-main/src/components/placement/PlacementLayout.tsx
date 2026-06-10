import React from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Separator } from "@/components/ui/separator";
import PlacementTabs from './PlacementTabs';
import SEO from '@/components/SEO';
import { seoConfig, defaultSEO } from '@/config/seoConfig';

interface PlacementLayoutProps {
  children: React.ReactNode;
  title: string;
}

const PlacementLayout: React.FC<PlacementLayoutProps> = ({ children, title }) => {
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
      <div className="bg-white mt-32 mb-16">
        <div className="container mx-auto px-4 md:px-6 pt-6 pb-4">
          <h1 className="text-2xl md:text-3xl font-bold text-aemet-navy mb-2">{title}</h1>
          <Separator className="mb-4" />
          
          {/* Tabs Navigation */}
          <PlacementTabs />
          
          {/* Content */}
          <div className="mt-6">
            {children}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PlacementLayout;
