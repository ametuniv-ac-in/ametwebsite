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
import { Button } from "@/components/ui/button";
import { Calendar, FileDown } from 'lucide-react';

const AcademicCalendar = () => {
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
                <BreadcrumbPage>Academic Calendar</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      
      <div className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-aemet-navy mb-8 text-center">Academic Calendar</h1>
          
          <div className="mb-8 max-w-3xl mx-auto">
            <p className="text-center text-gray-600">
              Stay informed about important academic dates, examination schedules, holidays, and university events 
              throughout the academic year.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid gap-6">
            <a href="/documents/revised-academic-calendar-2025-26-1.pdf" download className="block">
              <Card className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-l-aemet-gold">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <FileDown className="h-12 w-12 text-aemet-navy flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-aemet-navy mb-1">
                        Revised Academic Calendar 2025-26 (Part 1)
                      </h3>
                      <p className="text-gray-600">Click to download</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </a>
            
            <a href="/documents/revised-academic-calendar-2025-26-2-3-4.pdf" download className="block">
              <Card className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-l-aemet-gold">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <FileDown className="h-12 w-12 text-aemet-navy flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-aemet-navy mb-1">
                        Revised Academic Calendar 2025-26 (Part 2, 3 & 4)
                      </h3>
                      <p className="text-gray-600">Click to download</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </a>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              For any questions regarding the academic calendar, please contact the Office of Academic Affairs at 
              <a href="mailto:academics@amet.ac.in" className="text-aemet-blue hover:underline ml-1">academics@amet.ac.in</a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AcademicCalendar;