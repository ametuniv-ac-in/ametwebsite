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
import FacultyCards from '@/components/faculty/FacultyCards';

const Faculties = () => {
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
                <BreadcrumbPage>Faculty</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      
      <div className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-aemet-navy mb-8 text-center">Our Faculty</h1>
          
          <div className="mb-8 max-w-3xl mx-auto">
            <p className="text-center text-gray-600">
              AMET University offers diverse academic programs across multiple faculties, 
              each designed to provide comprehensive education and practical skills in specialized fields.
            </p>
          </div>
          
          <FacultyCards 
            title="Our Faculty" 
            subtitle="Academic Excellence"
            description="Discover our diverse academic offerings across prestigious faculties, each offering specialized programs designed to prepare you for global success."
          />
        </div>
      </div>
    </Layout>
  );
};

export default Faculties;