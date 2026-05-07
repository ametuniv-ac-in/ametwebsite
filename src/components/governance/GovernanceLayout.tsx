import React from 'react';
import Layout from '@/components/Layout';
import GovernanceTabs from './GovernanceTabs';
import { ArrowUp } from 'lucide-react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import { seoConfig, defaultSEO } from '@/config/seoConfig';

interface GovernanceLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

const getBreadcrumbTitle = (path: string): string => {
  switch (path) {
    case '/governance':
      return 'Governance';
    case '/governance/officials':
      return 'Officials';
    case '/governance/executive-council':
      return 'Executive Council';
    case '/governance/deans-directors':
      return 'Deans & Directors';
    case '/governance/academic-council':
      return 'Academic Council';
    case '/governance/faculty-chairpersons':
      return 'Faculty Chairpersons';
    case '/governance/planning-monitoring':
      return 'Planning and Monitoring Board';
    case '/governance/finance-committee':
      return 'Finance Committee';
    case '/governance/coordinators':
      return 'Co-ordinators';
    case '/governance/organogram':
      return 'Organogram';
    case '/governance/decentralization':
      return 'Decentralization';
    default:
      return 'Governance';
  }
};

const GovernanceLayout: React.FC<GovernanceLayoutProps> = ({ children, title, subtitle }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const breadcrumbTitle = getBreadcrumbTitle(currentPath);
  const pageSEO = seoConfig[currentPath] || defaultSEO;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Layout title={`${title} - AMET University`}>
      <SEO 
        title={pageSEO.title}
        description={pageSEO.description}
        keywords={pageSEO.keywords}
        canonicalUrl={currentPath}
      />
      <div className="bg-slate-50 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="mb-3">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">
                      <Home className="h-4 w-4" />
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/governance">Administration</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {currentPath !== '/governance' && (
                  <>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>{breadcrumbTitle}</BreadcrumbPage>
                    </BreadcrumbItem>
                  </>
                )}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          
          <div className="bg-white rounded-md mb-3">
            <GovernanceTabs />
          </div>
          
          <div className="w-full">
            <div className="bg-white rounded-lg shadow-md p-4 mb-6">
              {children}
            </div>
          </div>
          
          <Button
            onClick={scrollToTop}
            variant="secondary"
            size="icon"
            className="fixed bottom-36 right-6 z-10 rounded-full shadow-md hover:shadow-lg"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default GovernanceLayout;
