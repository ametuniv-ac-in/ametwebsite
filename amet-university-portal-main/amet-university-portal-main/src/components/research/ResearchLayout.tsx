import React from 'react';
import Layout from '@/components/Layout';
import ResearchTabs from './ResearchTabs';
import { ArrowUp } from 'lucide-react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import { seoConfig, defaultSEO } from '@/config/seoConfig';

interface ResearchLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

const getBreadcrumbTitle = (path: string): string => {
  switch (path) {
    case '/research-development':
      return 'Research & Development';
    case '/research-ecosystem':
      return 'Research Ecosystem';
    case '/academic-research':
      return 'Academic Research';
    case '/phd-programmes':
      return 'PhD Programmes Offered';
    case '/phd-regulations':
      return 'PhD Regulations';
    case '/phd-admission-requirements':
      return 'PhD Admission Requirements';
    case '/dsc-regulations':
      return 'DSC Regulations';
    case '/doctoral-committee-procedure':
      return 'Doctoral Committee Procedure';
    case '/course-work-examinations':
      return 'Course Work Examinations';
    case '/phd-evaluation-procedures':
      return 'PhD Evaluation Procedures';
    case '/phd-awarded-list':
      return 'PhD Awarded List';
    case '/phd-scholars-list':
      return 'PhD Scholars List';
    case '/supervisors-list':
      return 'PhD Supervisors List';
    case '/phd-forms':
      return 'PhD Forms';
    case '/journals':
      return 'AMET Journals';
    case '/publications':
      return 'Publications';
    case '/patents':
      return 'Patents';
    default:
      return 'Research';
  }
};

const ResearchLayout: React.FC<ResearchLayoutProps> = ({ children, title, subtitle }) => {
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
                    <Link to="/research-development">Research</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {currentPath !== '/research-development' && (
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
            <ResearchTabs />
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

export default ResearchLayout;
