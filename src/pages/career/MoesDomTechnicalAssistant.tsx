import React from 'react';
import Layout from '@/components/Layout';
import { Briefcase, Calendar, Mail, Phone, Download, Building, GraduationCap, IndianRupee, FileText } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const MoesDomTechnicalAssistant = () => {
  return (
    <Layout title="MoES-DOM Technical Assistant Vacancy | AMET University">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="max-w-4xl mx-auto pt-28 md:pt-32">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-aemet-navy/10 to-aemet-blue/10 rounded-lg p-8 mb-8 shadow-md relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Last Date: February 20, 2026
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-aemet-blue/10 p-3 rounded-full">
                <Briefcase className="h-8 w-8 text-aemet-blue" />
              </div>
              <div>
                <p className="text-sm text-aemet-blue font-medium mb-1">Advertisement No. MOES-DOM/AMET/MBT/2026-1</p>
                <h1 className="text-2xl md:text-3xl font-bold text-aemet-navy">MoES-DOM Technical Assistant Vacancy</h1>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Applications are invited for the position of Technical Assistant under the project "Sub-Sea Bioinvasion and Its Ecological Impacts" funded by the Ministry of Earth Sciences (MoES) - Deep Ocean Mission.
            </p>
          </div>

          {/* Position Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="border-aemet-blue/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-aemet-navy/5 p-2 rounded-full">
                    <Building className="h-5 w-5 text-aemet-blue" />
                  </div>
                  <h3 className="font-semibold text-aemet-navy">Position Details</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="font-medium text-aemet-navy min-w-[100px]">Position:</span>
                    <span>Technical Assistant (Post Code No. 1)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium text-aemet-navy min-w-[100px]">Department:</span>
                    <span>Marine Biotechnology, Faculty of Life Sciences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium text-aemet-navy min-w-[100px]">Vacancies:</span>
                    <span>One (1)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-aemet-blue/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-aemet-navy/5 p-2 rounded-full">
                    <IndianRupee className="h-5 w-5 text-aemet-blue" />
                  </div>
                  <h3 className="font-semibold text-aemet-navy">Salary & Duration</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="font-medium text-aemet-navy min-w-[100px]">Salary:</span>
                    <span>Rs. 20,000/- per month (consolidated)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium text-aemet-navy min-w-[100px]">Duration:</span>
                    <span>Up to 30-10-2026 (extendable based on project extension)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium text-aemet-navy min-w-[100px]">Age Limit:</span>
                    <span>28 years as on January 1, 2026</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Qualifications */}
          <Card className="border-aemet-blue/20 mb-8">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-aemet-navy/5 p-2 rounded-full">
                  <GraduationCap className="h-5 w-5 text-aemet-blue" />
                </div>
                <h3 className="font-semibold text-aemet-navy">Qualifications</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-aemet-navy mb-2">Essential Qualification:</h4>
                  <p className="text-gray-700">B.Sc. Degree in Life Sciences/allied sciences</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-aemet-navy mb-2">Desirable Qualifications:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Experienced diver</li>
                    <li>Sea swimmer</li>
                    <li>Experience in marine survey and sampling</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Job Role */}
          <Card className="border-aemet-blue/20 mb-8">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-aemet-navy/5 p-2 rounded-full">
                  <FileText className="h-5 w-5 text-aemet-blue" />
                </div>
                <h3 className="font-semibold text-aemet-navy">Job Role</h3>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Sample collection by diving from various depths across the coasts</li>
                <li>Handling and organizing samples</li>
                <li>Assistance in laboratory experiments</li>
                <li>Any other duties assigned by the Project Investigator</li>
              </ul>
            </CardContent>
          </Card>

          {/* Application Instructions */}
          <Card className="border-aemet-blue/20 mb-8 bg-blue-50/50">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-aemet-blue/10 p-2 rounded-full">
                  <Mail className="h-5 w-5 text-aemet-blue" />
                </div>
                <h3 className="font-semibold text-aemet-navy">How to Apply</h3>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  Interested candidates may send their filled application along with all required enclosures to the email address below:
                </p>
                
                <div className="bg-white rounded-lg p-4 border border-blue-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Mail className="h-5 w-5 text-aemet-blue" />
                    <a href="mailto:ramakritinan@ametuniv.ac.in" className="text-aemet-blue hover:underline font-medium">
                      ramakritinan@ametuniv.ac.in
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-aemet-blue" />
                    <span className="font-medium">09442039861</span>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <p className="text-amber-800">
                    <span className="font-semibold">Contact Person:</span> Dr. C.M. Ramakritinan, Project Investigator
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button asChild className="bg-aemet-blue hover:bg-aemet-navy">
                    <a href="/documents/AMET-MOES-DOM-Project-Application.doc" download>
                      <Download className="h-4 w-4 mr-2" />
                      Download Application Form
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href="mailto:ramakritinan@ametuniv.ac.in">
                      <Mail className="h-4 w-4 mr-2" />
                      Send Application
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Important Dates */}
          <Card className="border-red-200 bg-red-50/50 mb-8">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-red-100 p-2 rounded-full">
                  <Calendar className="h-5 w-5 text-red-600" />
                </div>
                <h3 className="font-semibold text-red-700">Important Dates</h3>
              </div>
              <p className="text-red-700 font-medium">
                Last Date for Submission: February 20, 2026
              </p>
            </CardContent>
          </Card>

          {/* Back to Career */}
          <div className="text-center">
            <Button asChild variant="outline">
              <Link to="/career">
                ← Back to Career Opportunities
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MoesDomTechnicalAssistant;
