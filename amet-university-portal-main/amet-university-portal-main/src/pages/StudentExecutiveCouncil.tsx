import React from 'react';
import Layout from '@/components/Layout';
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Download, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const StudentExecutiveCouncil = () => {
  return (
    <Layout>
      <div className="bg-gray-50 py-3 border-b">
        <div className="container mx-auto px-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Academics</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Student Executive Council</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      
      <div className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-aemet-navy mb-8 text-center">Student Executive Council</h1>
          
          <div className="mb-12 max-w-3xl mx-auto">
            <p className="text-center text-gray-600 leading-relaxed">
              The Student Executive Council represents the voice of all students at AMET University, 
              fostering leadership, organizing events, and ensuring student welfare and academic excellence.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-2 border-aemet-blue/20 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-8 pb-8">
                <div className="flex flex-col items-center text-center">
                  <div className="h-20 w-20 rounded-full bg-aemet-blue/10 flex items-center justify-center mb-6">
                    <Users className="h-10 w-10 text-aemet-blue" />
                  </div>
                  
                  <h2 className="text-xl font-semibold text-aemet-navy mb-2">
                    Student Council Executive Committee
                  </h2>
                  
                  <p className="text-gray-600 mb-6">
                    Download the complete details of the Student Executive Council members
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button 
                      asChild
                      variant="default"
                      className="gap-2"
                    >
                      <a 
                        href="/pdfs/student-executive-council.pdf" 
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FileText className="h-4 w-4" />
                        View PDF
                      </a>
                    </Button>
                    <Button 
                      asChild
                      variant="outline"
                      className="gap-2"
                    >
                      <a 
                        href="/pdfs/student-executive-council.pdf" 
                        download="Student-Executive-Council.pdf"
                      >
                        <Download className="h-4 w-4" />
                        Download PDF
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StudentExecutiveCouncil;
