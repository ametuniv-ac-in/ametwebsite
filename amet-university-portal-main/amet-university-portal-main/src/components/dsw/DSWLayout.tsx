import React from 'react';
import Layout from '@/components/Layout';
import DSWTabs from './DSWTabs';
import { ArrowUp, Home } from 'lucide-react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import { seoConfig, defaultSEO } from '@/config/seoConfig';

interface DSWLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

const getBreadcrumbTitle = (path: string): string => {
  switch (path) {
    case '/directorate-students-welfare':
      return 'Overview';
    case '/directorate-students-welfare/s3-centre':
      return 'S3 Centre';
    case '/directorate-students-welfare/hall-of-residence':
      return 'Hall of Residence';
    case '/directorate-students-welfare/ametunispo':
      return 'AMETUNISPO';
    case '/directorate-students-welfare/student-council':
      return 'Student Executive Council';
    case '/directorate-students-welfare/nss':
      return 'NSS';
    case '/directorate-students-welfare/ncc':
      return 'NCC';
    case '/directorate-students-welfare/cultural-club':
      return 'Cultural Club';
    case '/directorate-students-welfare/unnat-bharat':
      return 'Unnat Bharat Abhiyan';
    case '/directorate-students-welfare/swachhta-pakhwada':
      return 'Swachhta Pakhwada';
    case '/directorate-students-welfare/health-care':
      return 'Health Care Centre';
    case '/directorate-students-welfare/mess-committee':
      return 'Mess Committee';
    case '/directorate-students-welfare/service-request':
      return 'Service Request Form';
    default:
      return 'DSW';
  }
};

const DSWLayout: React.FC<DSWLayoutProps> = ({ children, title, subtitle }) => {
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
                    <Link to="/directorate-students-welfare">Students Welfare</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {currentPath !== '/directorate-students-welfare' && (
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
            <DSWTabs />
          </div>
          
          <div className="w-full">
            <div className="bg-white rounded-lg shadow-md p-6">
              {children}
            </div>
          </div>
          
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

export default DSWLayout;
