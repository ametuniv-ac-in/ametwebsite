import React from 'react';
import Layout from '@/components/Layout';
import AdmissionsTabs from './AdmissionsTabs';
import FloatingApplyButton from './FloatingApplyButton';
import { ArrowUp } from 'lucide-react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import { seoConfig, defaultSEO } from '@/config/seoConfig';

interface AdmissionsLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

const getBreadcrumbTitle = (path: string): string => {
  switch (path) {
    case '/admissions':
      return 'Admissions';
    case '/programs-offered':
      return 'Programs Offered';
    case '/scholarship':
      return 'Scholarship';
    case '/application-forms':
      return 'Application Forms';
    case '/prospectus':
      return 'Prospectus';
    case '/fee-structure':
      return 'Fee Structure';
    case '/admission-policy':
      return 'Admission Policy';
    case '/admissions/announcement':
      return 'Announcement';
    case '/vships-admission':
      return 'V-Ships Admission';
    case '/kalvi-career':
      return 'Kalvi Career';
    case '/face-prep-campus':
      return 'Face Prep Campus';
    case '/emversity':
      return 'Emversity';
    case '/diversity':
      return 'Diversity';
    case '/guidelines-indian':
      return 'Guidelines Indian';
    case '/guidelines-international':
      return 'Guidelines International';
    default:
      return 'Admissions';
  }
};

const AdmissionsLayout: React.FC<AdmissionsLayoutProps> = ({ children, title, subtitle }) => {
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
      <div className="bg-slate-50 pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-4">
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
                    <Link to="/admissions">Admissions</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {currentPath !== '/admissions' && (
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
          
          <div className="bg-white rounded-md mb-4">
            <AdmissionsTabs />
          </div>
          
          <div className="w-full">
            <div className="bg-white rounded-lg shadow-md p-6">
              {children}
            </div>
          </div>
          
          {/* Go to Top Button */}
          <Button
            onClick={scrollToTop}
            variant="secondary"
            size="icon"
            className="fixed bottom-6 left-6 z-50 rounded-full shadow-md hover:shadow-lg"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <FloatingApplyButton />
    </Layout>
  );
};

export default AdmissionsLayout;
