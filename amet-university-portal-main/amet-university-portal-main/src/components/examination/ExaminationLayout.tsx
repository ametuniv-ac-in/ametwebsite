import React from 'react';
import Layout from '@/components/Layout';
import ExaminationTabs from './ExaminationTabs';
import { ArrowUp } from 'lucide-react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import { seoConfig, defaultSEO } from '@/config/seoConfig';

interface ExaminationLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

const getBreadcrumbTitle = (path: string): string => {
  switch (path) {
    case '/examination':
      return 'Controller of Examinations';
    case '/examination/reforms':
      return 'Reforms and IT Integrations';
    case '/examination/announcement':
      return 'Announcement';
    case '/examination/timetable':
      return 'Exam Timetable';
    case '/examination/forms':
      return 'Download Forms';
    case '/examination/fees':
      return 'Fee Details';
    case '/examination/e-sand':
      return 'e-SAND';
    case '/examination/results':
      return 'Result Publication';
    case '/examination/verification':
      return 'Certificate Verification';
    case '/examination/convocation':
      return 'Convocation';
    case '/examination/phd-coursework':
      return 'Ph.D. Course Work';
    case '/examination/nad-cell':
      return 'NAD Cell';
    default:
      return 'Examination';
  }
};

const ExaminationLayout: React.FC<ExaminationLayoutProps> = ({ children, title, subtitle }) => {
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
                    <Link to="/examination">Examination</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {currentPath !== '/examination' && (
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
            <ExaminationTabs />
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
    </Layout>
  );
};

export default ExaminationLayout;
