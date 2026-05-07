import React from 'react';
import Layout from '@/components/Layout';
import { Award, Calendar, Target, TrendingUp, Star, Shield, FileText, Download } from 'lucide-react';
import naac1stCycle from '@/assets/naac-1st-cycle.jpg';
import naac2ndCycle from '@/assets/naac-2nd-cycle.jpg';

const NAAC = () => {
  return (
    <Layout title="NAAC Accreditation | AMET University">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-aemet-blue via-purple-600 to-aemet-navy text-white py-24 mt-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              NAAC Accreditation
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Grade 'A' Accreditation - A Testament to Excellence
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-300 to-purple-300 mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        {/* Accreditation Achievement */}
        <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-aemet-blue to-purple-600 rounded-full">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-aemet-navy">NAAC Grade 'A' Accreditation</h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="text-xl leading-relaxed font-medium text-aemet-navy">
                AMET has been recently accredited with a Grade 'A' by the National Assessment and 
                Accreditation Council from 2021 to 2026. This adds as a stride of excellence to the University.
              </p>
              
              <p className="text-lg leading-relaxed">
                Moreover, the crowning accomplishment is that we as a University received the 2nd highest 
                rank given to institutions in the new accreditation process. This 70% weightage according 
                to quantitative metrics.
              </p>
              
              <div className="bg-gradient-to-r from-gold-50 to-yellow-50 border border-yellow-200 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Star className="h-6 w-6 text-yellow-600" />
                  <h3 className="text-xl font-semibold text-aemet-navy">Outstanding Achievement</h3>
                </div>
                <p className="text-gray-700">
                  AMET University's Grade 'A' accreditation represents our unwavering commitment to 
                  academic excellence, quality education, and institutional effectiveness.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* NAAC Certificates */}
        <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-aemet-navy mb-8 text-center">NAAC Accreditation Certificates</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <img 
                    src={naac1stCycle} 
                    alt="NAAC 1st Cycle Accreditation Certificate"
                    className="w-full max-w-md mx-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-aemet-navy mb-2">1st Cycle Accreditation</h3>
                <p className="text-gray-600">CGPA 3.13 - Grade 'A'</p>
                <p className="text-sm text-gray-500">Valid: November 16, 2015</p>
              </div>

              <div className="text-center">
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <img 
                    src={naac2ndCycle} 
                    alt="NAAC 2nd Cycle Accreditation Certificate"
                    className="w-full max-w-md mx-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-aemet-navy mb-2">2nd Cycle Accreditation</h3>
                <p className="text-gray-600">CGPA 3.13 - Grade 'A'</p>
                <p className="text-sm text-gray-500">Valid: September 13, 2021 - 2026</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="bg-gradient-to-r from-gold-50 to-yellow-50 border border-yellow-200 p-6 rounded-lg">
                <p className="text-aemet-navy font-semibold">
                  Both accreditation cycles demonstrate AMET University's consistent commitment 
                  to maintaining high academic standards and quality education excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* NAAC Documents and Resources */}
        <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-gradient-to-r from-aemet-blue to-purple-600 rounded-full">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-aemet-navy">NAAC Documents & Resources</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'IIQA', description: 'Institutional Information for Quality Assessment', href: '/pdfs/IIQA_2021.pdf' },
                { title: 'SSR Second Cycle', description: 'Self Study Report - Second Cycle', href: '/pdfs/SSR_2021.pdf' },
                { title: 'DVV Extended Profile', description: 'Data Verification & Validation - Extended Profile', href: '/pdfs/DVV_Extended.pdf' },
                { title: 'DVV Metrics Level Profile', description: 'Data Verification & Validation - Metrics Level', href: '/pdfs/DVV_Metric.pdf' },
                { title: 'Grade Card', description: 'Official NAAC Grade Card', href: '/pdfs/Grade_Sheet_2021.pdf' },
                { title: 'NAAC Certificate of Accreditation', description: 'Official Accreditation Certificate', href: '/pdfs/NAAC-Certificate-of-Accreditation.pdf' }
              ].map((doc, index) => (
                <a
                  key={index}
                  href={doc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6 hover:shadow-lg hover:border-aemet-blue transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-gradient-to-r from-aemet-blue to-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Download className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-aemet-navy group-hover:text-aemet-blue transition-colors mb-2">
                        {doc.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {doc.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-gray-500">Click to view</span>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <Download className="h-4 w-4 text-aemet-blue" />
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="h-6 w-6 text-aemet-blue" />
                <h3 className="text-lg font-semibold text-aemet-navy">Document Authenticity</h3>
              </div>
              <p className="text-gray-700 text-sm">
                All documents are official NAAC accreditation materials. These resources provide 
                comprehensive information about AMET University's quality assurance processes, 
                institutional performance metrics, and compliance with NAAC standards.
              </p>
            </div>
          </div>
        </section>

        {/* Accreditation Details */}
        <section className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-aemet-navy mb-2">Grade Achieved</h3>
              <p className="text-3xl font-bold text-green-600">A</p>
              <p className="text-sm text-gray-600 mt-2">NAAC Accreditation Grade</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-aemet-navy mb-2">Validity Period</h3>
              <p className="text-lg font-bold text-aemet-navy">2021-2026</p>
              <p className="text-sm text-gray-600 mt-2">5 Years Duration</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-aemet-navy mb-2">National Ranking</h3>
              <p className="text-3xl font-bold text-purple-600">2nd</p>
              <p className="text-sm text-gray-600 mt-2">Highest Rank in Process</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-aemet-navy mb-2">Quantitative Score</h3>
              <p className="text-3xl font-bold text-orange-600">70%</p>
              <p className="text-sm text-gray-600 mt-2">Weightage Metrics</p>
            </div>
          </div>
        </section>

        {/* About NAAC */}
        <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-aemet-navy mb-8">About NAAC</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-aemet-navy mb-4">What is NAAC?</h3>
                <p className="text-gray-700 mb-4">
                  The National Assessment and Accreditation Council (NAAC) is an autonomous body 
                  established by the University Grants Commission (UGC) of India to assess and 
                  accredit Higher Education Institutions (HEIs) in the country.
                </p>
                
                <h4 className="text-lg font-semibold text-aemet-navy mb-3">Key Objectives:</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Quality assurance in higher education</li>
                  <li>Continuous improvement of institutions</li>
                  <li>Accountability and transparency</li>
                  <li>Enhancement of academic standards</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-aemet-navy mb-4">Assessment Process</h3>
                <p className="text-gray-700 mb-4">
                  NAAC follows a rigorous assessment process that evaluates institutions based on 
                  seven criteria covering various aspects of institutional performance and quality.
                </p>
                
                <h4 className="text-lg font-semibold text-aemet-navy mb-3">Assessment Criteria:</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Curricular Aspects</li>
                  <li>Teaching-Learning and Evaluation</li>
                  <li>Research, Innovation and Extension</li>
                  <li>Infrastructure and Learning Resources</li>
                  <li>Student Support and Progression</li>
                  <li>Governance, Leadership and Management</li>
                  <li>Institutional Values and Best Practices</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Impact of Accreditation */}
        <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-aemet-navy mb-8 text-center">Impact of Grade 'A' Accreditation</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-aemet-navy mb-4">For Students</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-aemet-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Enhanced credibility and recognition of degrees</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-aemet-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Better career prospects and opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-aemet-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Access to quality education and resources</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-aemet-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>International recognition and mobility</span>
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-aemet-navy mb-4">For Institution</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>National and international recognition</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Enhanced funding opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Improved stakeholder confidence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Quality assurance framework</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Commitment to Excellence */}
        <section className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-aemet-blue/10 to-purple-600/10 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-aemet-navy mb-6 text-center">Our Commitment to Excellence</h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 text-center space-y-4">
              <p className="text-lg leading-relaxed">
                The NAAC Grade 'A' accreditation is not just an achievement but a responsibility 
                that AMET University takes seriously. It reflects our continuous efforts towards 
                maintaining and enhancing the quality of education we provide.
              </p>
              
              <p className="text-lg leading-relaxed">
                As we move forward in the accreditation period from 2021 to 2026, we remain 
                committed to upholding the highest standards of academic excellence, innovation 
                in teaching and research, and holistic student development.
              </p>
              
              <div className="mt-8">
                <p className="text-aemet-navy font-semibold text-xl">
                  "Striving for Excellence, Committed to Quality"
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default NAAC;