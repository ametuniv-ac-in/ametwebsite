import React from 'react';
import Layout from '@/components/Layout';
import { Briefcase, Calendar, Mail, Building, GraduationCap, IndianRupee, FileText, ExternalLink, Download, MapPin, AlertTriangle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PDF_HREF = '/documents/Vacancy-Project-Associate-I-MOES-DOM.pdf';

const MoesDomProjectAssociate = () => {
  return (
    <Layout title="MoES-DOM Project Associate – I Vacancy | AMET University">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="max-w-4xl mx-auto pt-28 md:pt-32">
          {/* Hero */}
          <div className="bg-gradient-to-r from-aemet-navy/10 to-aemet-blue/10 rounded-lg p-8 mb-8 shadow-md relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Last Date: 16.05.2026 (5:30 PM)
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-aemet-blue/10 p-3 rounded-full">
                <Briefcase className="h-8 w-8 text-aemet-blue" />
              </div>
              <div>
                <p className="text-sm text-aemet-blue font-medium mb-1">MoES-DOM Sponsored Research Project</p>
                <h1 className="text-2xl md:text-3xl font-bold text-aemet-navy">Project Associate – I Vacancy</h1>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Applications are invited for the position of <strong>Project Associate – I</strong> under the MoES-DOM sponsored research project entitled
              <em> "Exploring Marine Bioresources as Potential Natural Antifoulants: An In-depth Study on Secondary Metabolites of Marine Actinomycetes"</em>.
            </p>
          </div>

          {/* Position & Salary */}
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
                    <span className="font-medium text-aemet-navy min-w-[110px]">Position:</span>
                    <span>Project Associate – I</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium text-aemet-navy min-w-[110px]">Department:</span>
                    <span>Marine Biotechnology, Faculty of Life Sciences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium text-aemet-navy min-w-[110px]">Funding:</span>
                    <span>MoES – Deep Ocean Mission (DOM)</span>
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
                  <h3 className="font-semibold text-aemet-navy">Emoluments</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="font-medium text-aemet-navy min-w-[110px]">Fellowship:</span>
                    <span>Rs. 25,000/- per month</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium text-aemet-navy min-w-[110px]">HRA:</span>
                    <span>24% as per norms</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Project */}
          <Card className="border-aemet-blue/20 mb-8">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-aemet-navy/5 p-2 rounded-full">
                  <GraduationCap className="h-5 w-5 text-aemet-blue" />
                </div>
                <h3 className="font-semibold text-aemet-navy">Research Project</h3>
              </div>
              <p className="text-gray-700 italic">
                "Exploring Marine Bioresources as Potential Natural Antifoulants: An In-depth Study on Secondary Metabolites of Marine Actinomycetes"
              </p>
              <p className="mt-3 text-gray-700">
                For complete eligibility, qualifications and detailed terms, please refer to the full advertisement (PDF).
              </p>
            </CardContent>
          </Card>

          {/* How to Apply */}
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
                  Interested candidates should send their CV to the Principal Investigator's email on or before <strong>16.05.2026, 5:30 PM</strong>.
                </p>
                <div className="bg-white rounded-lg p-4 border border-blue-100">
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-aemet-blue" />
                    <a href="mailto:jayaprakashvel.m@ametuniv.ac.in" className="text-aemet-blue hover:underline font-medium">
                      jayaprakashvel.m@ametuniv.ac.in
                    </a>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">Principal Investigator</p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button asChild className="bg-aemet-blue hover:bg-aemet-navy">
                    <a href={PDF_HREF} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Full Advertisement (PDF)
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href={PDF_HREF} download>
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href="mailto:jayaprakashvel.m@ametuniv.ac.in">
                      <Mail className="h-4 w-4 mr-2" />
                      Send CV
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Walk-in */}
          <Card className="border-aemet-blue/20 mb-8">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-aemet-navy/5 p-2 rounded-full">
                  <MapPin className="h-5 w-5 text-aemet-blue" />
                </div>
                <h3 className="font-semibold text-aemet-navy">Walk-in Interview</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Date:</strong> 19.05.2026</li>
                <li><strong>Time:</strong> 02:30 PM</li>
                <li><strong>Venue:</strong> Department of Marine Biotechnology, AMET University, Kanathur, Chennai</li>
              </ul>
              <div className="mt-4 flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-lg p-3 text-amber-800">
                <AlertTriangle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>No TA/DA will be provided.</span>
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
              <ul className="space-y-1 text-red-700 font-medium">
                <li>Last Date for Applications: 16.05.2026 (5:30 PM)</li>
                <li>Walk-in Interview: 19.05.2026 at 02:30 PM</li>
              </ul>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button asChild variant="outline">
              <Link to="/career">← Back to Career Opportunities</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MoesDomProjectAssociate;