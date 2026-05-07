import React from 'react';
import Layout from '@/components/Layout';
import { Briefcase, Mail, Send, Download, FileText } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Career = () => {
  return (
    <Layout title="Career | AMET University">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="max-w-4xl mx-auto pt-28 md:pt-32">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-aemet-navy/10 to-aemet-blue/10 rounded-lg p-8 mb-12 shadow-md">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-aemet-blue/10 p-3 rounded-full">
                <Briefcase className="h-8 w-8 text-aemet-blue" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-aemet-navy">Career Opportunities</h1>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Join our team and be part of a dynamic institution committed to excellence in education and research.
            </p>
          </div>

          {/* Current Vacancies Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-aemet-navy mb-6">Current Vacancies</h2>
            
            <div className="space-y-6">
              {/* MoES-DOM Technical Assistant Vacancy */}
              <Card className="border-aemet-blue/20 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {/* Vacancy Header */}
                    <div className="flex items-start gap-4">
                      <div className="bg-aemet-navy/5 p-3 rounded-full flex-shrink-0">
                        <Briefcase className="h-6 w-6 text-aemet-blue" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <h3 className="text-xl font-semibold text-aemet-navy">
                            MoES-DOM Technical Assistant
                          </h3>
                          <span className="bg-red-100 text-red-700 text-xs font-semibold px-2 py-1 rounded">
                            Last Date: Feb 20, 2026
                          </span>
                        </div>
                        <p className="text-sm text-aemet-blue font-medium mb-2">
                          Department of Marine Biotechnology
                        </p>
                        <p className="text-gray-600 mb-2">
                          Project: "Sub-Sea Bioinvasion and Its Ecological Impacts" funded by Ministry of Earth Sciences - Deep Ocean Mission
                        </p>
                        <p className="text-gray-700 font-medium">
                          Salary: Rs. 20,000/- per month (consolidated)
                        </p>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                      <Button asChild className="bg-aemet-blue hover:bg-aemet-navy transition-colors">
                        <a href="/career/moes-dom-technical-assistant">
                          View Details
                        </a>
                      </Button>
                      <Button asChild variant="outline">
                        <a href="/documents/AMET-MOES-DOM-Project-Application.doc" download>
                          <Download className="h-4 w-4 mr-2" />
                          Download Application Form
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Marketing Executive Vacancy */}
              <Card className="border-aemet-blue/20 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {/* Vacancy Header */}
                    <div className="flex items-start gap-4">
                      <div className="bg-aemet-navy/5 p-3 rounded-full flex-shrink-0">
                        <Briefcase className="h-6 w-6 text-aemet-blue" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-semibold text-aemet-navy mb-2">
                          Marketing Executive
                        </h3>
                        <p className="text-gray-600 mb-4">
                          We are seeking a dynamic and motivated Marketing Executive to join our team at AMET University.
                        </p>
                      </div>
                    </div>

                    {/* Application Instructions */}
                    <div className="bg-blue-50 border border-blue-100 rounded-lg p-5">
                      <div className="flex items-start gap-3">
                        <Send className="h-5 w-5 text-aemet-blue mt-0.5 flex-shrink-0" />
                        <div className="flex-grow">
                          <p className="text-gray-700 mb-3">
                            <span className="font-semibold text-aemet-navy">Interested candidates may apply by sending their resume to:</span>
                          </p>
                          <div className="flex items-center gap-2 mb-4">
                            <Mail className="h-5 w-5 text-aemet-blue flex-shrink-0" />
                            <a 
                              href="mailto:registrar@ametuniv.ac.in" 
                              className="text-aemet-blue hover:underline font-medium text-lg"
                            >
                              registrar@ametuniv.ac.in
                            </a>
                          </div>
                          <Button 
                            asChild
                            className="bg-aemet-blue hover:bg-aemet-navy transition-colors"
                          >
                            <a href="mailto:registrar@ametuniv.ac.in">
                              <Mail className="h-4 w-4 mr-2" />
                              Send Your Resume
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Application Forms Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-aemet-navy mb-6">Application Forms</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Teaching Faculty Form */}
              <Card className="border-aemet-blue/20 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-aemet-navy/5 p-3 rounded-full flex-shrink-0">
                      <FileText className="h-6 w-6 text-aemet-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-aemet-navy mb-2">
                        Teaching Faculty Application
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        Application form for teaching positions at AMET University
                      </p>
                    </div>
                  </div>
                  <Button 
                    asChild
                    className="w-full bg-aemet-blue hover:bg-aemet-navy transition-colors"
                  >
                    <a 
                      href="/documents/Application-Teaching-Faculty.doc" 
                      download="Application-Teaching-Faculty.doc"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download Application Form
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Non-Teaching Staff Form */}
              <Card className="border-aemet-blue/20 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-aemet-navy/5 p-3 rounded-full flex-shrink-0">
                      <FileText className="h-6 w-6 text-aemet-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-aemet-navy mb-2">
                        Non-Teaching Staff Application
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        Application form for non-teaching positions at AMET University
                      </p>
                    </div>
                  </div>
                  <Button 
                    asChild
                    className="w-full bg-aemet-blue hover:bg-aemet-navy transition-colors"
                  >
                    <a 
                      href="/documents/Application-Non-Teaching-Staff.docx" 
                      download="Application-Non-Teaching-Staff.docx"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download Application Form
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Additional Information */}
          <Card className="bg-gradient-to-r from-aemet-navy/5 to-aemet-blue/5 border-none">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-aemet-navy mb-3">Why Join AMET University?</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-aemet-blue mt-1">•</span>
                  <span>Work with a dedicated team committed to educational excellence</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-aemet-blue mt-1">•</span>
                  <span>Professional growth and development opportunities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-aemet-blue mt-1">•</span>
                  <span>Collaborative and innovative work environment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-aemet-blue mt-1">•</span>
                  <span>Be part of a prestigious institution with national recognition</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Career;
