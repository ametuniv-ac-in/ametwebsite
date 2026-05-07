
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
import { ChevronRight, Award, Eye, Target, Shield } from 'lucide-react';

const Objectives = () => {
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
                <BreadcrumbPage>Objectives</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      
      <div className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-aemet-navy mb-8 text-center">Vision, Mission & Objectives</h1>
          
          <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
            {/* Vision Section */}
            <section>
              <div className="bg-gradient-to-r from-blue-50 via-sky-50 to-blue-50 border-l-4 border-aemet-navy p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-aemet-navy to-aemet-blue rounded-full text-white shadow-lg flex-shrink-0">
                    <Eye className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-aemet-navy mb-2">Our Vision</h3>
                    <p className="text-gray-700 leading-relaxed">
                      To sustain identity as a World Class Leader in Maritime Education and empower learners with wholesome knowledge through progressive innovation in training, research and development which will render students a unique learning experience and a transformation impact on the Global Society.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Mission Section */}
            <section>
              <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 border-l-4 border-emerald-600 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-full text-white shadow-lg flex-shrink-0">
                    <Target className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-emerald-900 mb-2">Our Mission</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      AMET will strive continuously to:
                    </p>
                    <ul className="space-y-3">
                      {[
                        'Impart value-based higher education and technical knowledge with uncompromising strides of an outstanding quality.',
                        'Emerge as a Centre of Excellence inculcating skill development in recent technologies in accordance with industrial trends.',
                        'Create World class research capabilities on par with the finest in the world and broaden student\'s horizons beyond classroom education.',
                        'Nurture talent and entrepreneurship to enable all round personality development among students.',
                        'Empower students across socio economic strata.',
                        'Make a positive difference to society through technical education.',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <ChevronRight className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Quality Policy Section */}
            <section>
              <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 border-l-4 border-amber-600 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-amber-600 to-orange-700 rounded-full text-white shadow-lg flex-shrink-0">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-amber-900 mb-2">Quality Policy</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      AMET is committed to provide the highest quality in education and be the most preferred institution for pursuing marine and marine related courses.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      This will be achieved by consistent focus on:
                    </p>
                    <ul className="space-y-3">
                      {[
                        'Providing a conducive, vibrant, progressive and enriching learning atmosphere.',
                        'Teaching Excellence and Research Output.',
                        'Global outlook and engaging with the world through learning, teaching and research.',
                        'Providing competitive advantage in gaining employment for further academic opportunities.',
                        'Maintaining excellent links with commerce and industry both national and international.',
                        'Complying with all applicable requirements and continually improving the effectiveness of Quality Management System.',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <ChevronRight className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Founding Visionary & Pioneer Section */}
            <section>
              <div className="bg-gradient-to-r from-purple-50 via-indigo-50 to-purple-50 border-l-4 border-purple-600 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-full text-white shadow-lg flex-shrink-0">
                    <Award className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-purple-900 mb-2">Founding Visionary & Pioneer</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Founder of <strong>India's First Maritime University</strong>, established NAESEY to empower thousands of youth, and created history by transforming maritime education in India through innovation, dedication, and unwavering commitment to excellence.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Objectives;
