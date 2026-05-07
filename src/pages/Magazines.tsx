import React from 'react';
import Layout from '../components/Layout';
import { BookOpen, Download, Users, Calendar } from 'lucide-react';

const Magazines: React.FC = () => {
  const departments = [
    {
      name: 'Department of Naval Architecture and Offshore Engineering',
      shortName: 'Naval Architecture & Offshore Engineering',
      magazines: [
        { period: '2022-23 Even Semester', year: '2023' },
        { period: '2022-23 Odd Semester', year: '2022' },
        { period: '2021-22 Even Semester', year: '2022' },
        { period: '2021-22 Odd Semester', year: '2021' },
        { period: '2020-21 Even Semester', year: '2021' },
        { period: '2020-21 Odd Semester', year: '2020' },
      ]
    },
    {
      name: 'Department of Mathematics',
      shortName: 'Mathematics',
      magazines: [
        { period: 'January 2022 - June 2022', year: '2022' },
      ]
    }
  ];

  const totalMagazines = departments.reduce((total, dept) => total + dept.magazines.length, 0);

  return (
    <Layout title="AMET Magazines - AMET University">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-blue-600 to-aemet-blue text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400/10 rounded-full blur-2xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
              <BookOpen className="h-6 w-6" />
              <span className="font-medium">Academic Publications</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              AMET Magazines
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Explore departmental publications showcasing academic excellence, research contributions, and scholarly achievements across various disciplines
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  <span className="font-medium">{departments.length} Departments</span>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span className="font-medium">{totalMagazines} Publications</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Departmental Publications
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Browse through our collection of departmental magazines featuring academic research, student contributions, and scholarly articles
              </p>
            </div>

            <div className="space-y-16">
              {departments.map((department, deptIndex) => (
                <div key={deptIndex} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="mb-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-gradient-to-br from-aemet-blue to-purple-600 text-white p-3 rounded-xl">
                        <BookOpen className="h-8 w-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {department.shortName}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {department.name}
                        </p>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-2 rounded-lg inline-block">
                      <span className="text-aemet-blue font-medium">
                        {department.magazines.length} Publication{department.magazines.length > 1 ? 's' : ''} Available
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {department.magazines.map((magazine, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-md transition-all duration-300 group border border-gray-100"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="bg-gradient-to-br from-aemet-blue to-blue-600 text-white p-2.5 rounded-lg">
                            <BookOpen className="h-5 w-5" />
                          </div>
                          <span className="bg-white text-aemet-blue px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                            {magazine.year}
                          </span>
                        </div>
                        
                        <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-aemet-blue transition-colors">
                          {magazine.period}
                        </h4>
                        
                        <p className="text-gray-600 text-sm mb-4">
                          Academic publication featuring research articles, student contributions, and departmental achievements.
                        </p>
                        
                        <button className="w-full bg-gradient-to-r from-aemet-blue to-blue-600 text-white py-2.5 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                          <Download className="h-4 w-4 group-hover/btn:animate-bounce" />
                          Download PDF
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-16 bg-gradient-to-br from-aemet-blue to-purple-600 text-white rounded-2xl p-8 text-center">
              <div className="max-w-2xl mx-auto">
                <BookOpen className="h-16 w-16 mx-auto mb-6 opacity-90" />
                <h3 className="text-3xl font-bold mb-4">
                  Contributing to Academic Excellence
                </h3>
                <p className="text-blue-100 text-lg mb-6">
                  Our departmental magazines serve as platforms for showcasing research innovations, 
                  academic achievements, and scholarly contributions from faculty and students.
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    Research Articles
                  </span>
                  <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    Student Publications
                  </span>
                  <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    Academic Reviews
                  </span>
                  <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    Innovation Showcase
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Magazines;