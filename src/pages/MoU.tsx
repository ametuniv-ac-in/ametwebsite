import React from 'react';
import Layout from '@/components/Layout';
import { FileText, Download, Calendar, Building } from 'lucide-react';

const MoU = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-aemet-navy to-aemet-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">MoU 2022-23 and 2023-24</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Memoranda of Understanding establishing strategic partnerships and collaborative initiatives
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="space-y-8">
          {/* 2023-2024 Section */}
          <section className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-aemet-blue to-aemet-navy text-white p-6">
              <div className="flex items-center gap-3">
                <Calendar className="h-6 w-6" />
                <h2 className="text-2xl font-bold">2023-2024</h2>
              </div>
            </div>
            <div className="p-6">
              <div className="grid gap-6">
                <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-aemet-blue">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-aemet-navy mb-2 flex items-center gap-2">
                        <Building className="h-5 w-5" />
                        Academic Year 2023-2024 MoUs
                      </h3>
                      <p className="text-gray-700 mb-4">
                        Strategic partnerships and collaborative agreements established during the academic year 2023-2024 
                        to enhance educational opportunities, research initiatives, and industry connections.
                      </p>
                      <div className="flex gap-4">
                        <button className="flex items-center gap-2 bg-aemet-navy text-white px-4 py-2 rounded-lg hover:bg-aemet-navy/90 transition-colors">
                          <FileText className="h-4 w-4" />
                          View Details
                        </button>
                        <button className="flex items-center gap-2 bg-aemet-blue text-white px-4 py-2 rounded-lg hover:bg-aemet-blue/90 transition-colors">
                          <Download className="h-4 w-4" />
                          Download
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sample MoU entries for 2023-24 */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold text-aemet-navy mb-2">International Partnerships</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• University of Strathclyde, UK</li>
                      <li>• City of Glasgow College, UK</li>
                      <li>• South Tyneside College, UK</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold text-aemet-navy mb-2">Industry Collaborations</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Maritime Industry Partners</li>
                      <li>• Technology Companies</li>
                      <li>• Research Organizations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 2022-2023 Section */}
          <section className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-aemet-navy to-aemet-blue text-white p-6">
              <div className="flex items-center gap-3">
                <Calendar className="h-6 w-6" />
                <h2 className="text-2xl font-bold">2022-2023</h2>
              </div>
            </div>
            <div className="p-6">
              <div className="grid gap-6">
                <div className="p-4 bg-navy-50 rounded-lg border-l-4 border-aemet-navy">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-aemet-navy mb-2 flex items-center gap-2">
                        <Building className="h-5 w-5" />
                        Academic Year 2022-2023 MoUs
                      </h3>
                      <p className="text-gray-700 mb-4">
                        Foundation partnerships and collaborative agreements established during the academic year 2022-2023 
                        to strengthen educational frameworks, research capabilities, and industry relationships.
                      </p>
                      <div className="flex gap-4">
                        <button className="flex items-center gap-2 bg-aemet-navy text-white px-4 py-2 rounded-lg hover:bg-aemet-navy/90 transition-colors">
                          <FileText className="h-4 w-4" />
                          View Details
                        </button>
                        <button className="flex items-center gap-2 bg-aemet-blue text-white px-4 py-2 rounded-lg hover:bg-aemet-blue/90 transition-colors">
                          <Download className="h-4 w-4" />
                          Download
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sample MoU entries for 2022-23 */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold text-aemet-navy mb-2">Educational Partnerships</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Academic Exchange Programs</li>
                      <li>• Joint Degree Programs</li>
                      <li>• Faculty Exchange Initiatives</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold text-aemet-navy mb-2">Research Collaborations</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Joint Research Projects</li>
                      <li>• Technology Transfer</li>
                      <li>• Innovation Partnerships</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Additional Information */}
          <section className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-aemet-navy dark:text-white mb-4">About MoUs</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Memoranda of Understanding (MoUs) are formal agreements that outline the terms and understanding 
              between AMET University and various partner institutions, organizations, and industry stakeholders. 
              These agreements facilitate:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Academic collaboration and student exchange programs</li>
              <li>Joint research initiatives and technology transfer</li>
              <li>Faculty development and training programs</li>
              <li>Industry partnerships and internship opportunities</li>
              <li>Infrastructure sharing and resource optimization</li>
            </ul>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default MoU;