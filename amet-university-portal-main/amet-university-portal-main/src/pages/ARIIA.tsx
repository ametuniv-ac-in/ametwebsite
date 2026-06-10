import React from 'react';
import Layout from '@/components/Layout';
import { Lightbulb, TrendingUp, Award, FileText, ExternalLink, Target, Rocket } from 'lucide-react';

const ARIIA = () => {
  const ariiaLinks = [
    { title: 'ARIIA 2021-22', href: '#ariia-2021-22', description: 'Innovation and Research Assessment Report 2021-22' },
    { title: 'ARIIA 2020-21', href: '#ariia-2020-21', description: 'Innovation and Research Assessment Report 2020-21' },
  ];

  return (
    <Layout title="ARIIA Ranking | AMET University">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-aemet-blue via-purple-600 to-aemet-navy text-white py-24 mt-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              ARIIA Ranking
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Atal Ranking of Institutions on Innovation Achievements
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-300 to-purple-300 mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        {/* ARIIA Overview */}
        <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-aemet-blue to-purple-600 rounded-full">
                <Lightbulb className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-aemet-navy">About ARIIA</h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="text-xl leading-relaxed font-medium text-aemet-navy">
                The Atal Ranking of Institutions on Innovation Achievements (ARIIA) is an initiative 
                by the Innovation Cell, Ministry of Education, Government of India to systematically 
                rank all major higher educational institutions and universities in India on innovation.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-aemet-blue">
                <div className="flex items-start gap-3">
                  <Target className="h-6 w-6 text-aemet-blue mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-aemet-navy mb-2">ARIIA Mission</p>
                    <p className="text-gray-700">
                      ARIIA evaluates institutions based on their innovation achievements, including 
                      patents, startups, innovation infrastructure, and student entrepreneurship 
                      activities. AMET University actively participates to showcase its commitment 
                      to fostering innovation and entrepreneurship.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-aemet-navy mb-3 flex items-center gap-2">
                    <Rocket className="h-5 w-5" />
                    Innovation Focus Areas
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Patent Applications & Grants</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Student Startups & Entrepreneurship</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Innovation Infrastructure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Industry Collaborations</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-aemet-navy mb-3 flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    Assessment Parameters
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Innovation Infrastructure & Policies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Institutional Innovation Activities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Innovation Output & Impact</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Innovation Ecosystem Development</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ARIIA Submissions */}
        <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-gradient-to-r from-aemet-blue to-purple-600 rounded-full">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-aemet-navy">ARIIA Submissions</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {ariiaLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="group bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-8 hover:shadow-xl hover:border-aemet-blue transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-r from-aemet-blue to-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-aemet-navy group-hover:text-aemet-blue transition-colors mb-3">
                        {link.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {link.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">Click to access report</span>
                        <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-aemet-blue transition-colors" />
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
              <div className="flex items-center gap-3 mb-3">
                <Lightbulb className="h-6 w-6 text-aemet-blue" />
                <h3 className="text-lg font-semibold text-aemet-navy">Innovation Excellence</h3>
              </div>
              <p className="text-gray-700">
                AMET University's participation in ARIIA rankings demonstrates our commitment to 
                innovation, research excellence, and entrepreneurship development. These submissions 
                showcase our efforts in creating an innovation ecosystem that benefits students, 
                faculty, and society.
              </p>
            </div>
          </div>
        </section>

        {/* Innovation Highlights */}
        <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-aemet-navy mb-8 text-center">Innovation Highlights at AMET</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-aemet-navy mb-3">Research & Innovation</h3>
                <p className="text-gray-700">
                  Cutting-edge research projects and innovation initiatives across 
                  multiple disciplines with industry collaboration.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-aemet-navy mb-3">Startup Incubation</h3>
                <p className="text-gray-700">
                  Supporting student entrepreneurs through incubation facilities, 
                  mentorship programs, and startup development initiatives.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-aemet-navy mb-3">Patent Portfolio</h3>
                <p className="text-gray-700">
                  Growing portfolio of patents and intellectual property 
                  contributions from faculty and student research work.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Commitment to Innovation */}
        <section className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-aemet-blue/10 to-purple-600/10 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-aemet-navy mb-6 text-center">Our Innovation Commitment</h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 text-center space-y-4">
              <p className="text-lg leading-relaxed">
                AMET University recognizes innovation as a key driver of progress and development. 
                Our participation in ARIIA rankings reflects our dedication to creating an 
                innovation-friendly ecosystem that encourages creativity, research, and entrepreneurship.
              </p>
              
              <p className="text-lg leading-relaxed">
                Through our innovation initiatives, we aim to contribute to national development, 
                solve real-world problems, and prepare our students to be future innovators and 
                entrepreneurs who can make a positive impact on society.
              </p>
              
              <div className="mt-8">
                <p className="text-aemet-navy font-semibold text-xl">
                  "Innovation Today, Excellence Tomorrow"
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default ARIIA;