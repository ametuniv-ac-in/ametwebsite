import React from "react";
import Layout from "@/components/Layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileDown, Eye } from "lucide-react";

const Policies = () => {
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
                <BreadcrumbLink href="#">About Us</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Policies</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-aemet-navy mb-8 text-center">University Policies</h1>

          <div className="mb-8 max-w-3xl mx-auto">
            <p className="text-center text-gray-600">
              Academy of Maritime Education and Training (AMET University) is committed to maintaining high standards of
              academic integrity, ethical conduct, and administrative excellence. Its policies guide all aspects of
              university operations and ensure transparency, accountability, and consistency in institutional
              procedures.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-aemet-navy mb-2">University Policies Document</h3>
                    <p className="text-gray-700 mb-4">
                      This comprehensive document outlines all university policies including academic, administrative,
                      student conduct, research ethics, and other institutional guidelines. The document serves as a
                      reference for the entire university community.
                    </p>
                    <div className="text-sm text-gray-500">
                      <p>Format: PDF</p>
                    </div>
                  </div>
                  <div className="mt-2 flex flex-col sm:flex-row gap-3">
                    <Button
                      onClick={() => window.open("/documents/University-Policies.pdf", "_blank")}
                      className="bg-aemet-navy hover:bg-aemet-blue transition-colors gap-2"
                    >
                      <Eye className="h-4 w-4" />
                      View PDF
                    </Button>
                    <Button asChild variant="outline" className="gap-2">
                      <a href="/documents/University-Policies.pdf" download>
                        <FileDown className="h-4 w-4" />
                        Download PDF
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500">
                For any questions regarding university policies, please contact the Office of the Registrar at
                <a href="mailto:registrar@amet.ac.in" className="text-aemet-blue hover:underline ml-1">
                  registrar@amet.ac.in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Policies;
