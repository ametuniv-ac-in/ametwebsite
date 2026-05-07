
import React from 'react';
import Layout from '@/components/Layout';
import FacultyCards from '@/components/faculty/FacultyCards';
import CallToAction from '@/components/CallToAction';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const FacultiesPage = () => {
  return (
    <Layout>
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <Breadcrumb className="mb-8">
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
      
      <FacultyCards 
        title="All Faculties and Programs"
        subtitle="Academic Excellence"
        description="Discover our diverse academic offerings across prestigious faculties, each offering specialized programs designed to prepare you for global success."
      />
      
      {/* Call to Action for Admissions */}
      <CallToAction type="apply" />
    </Layout>
  );
};

export default FacultiesPage;
