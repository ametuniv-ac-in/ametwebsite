import React from 'react';
import Layout from '../components/Layout';
import { FileText, Download, Calendar } from 'lucide-react';

const AmetWaves: React.FC = () => {
  const issues = [
    { period: 'Apr - Dec 2023', year: '2023' },
    { period: 'Jan - Mar 2023', year: '2023' },
    { period: 'Jan - Dec 2022', year: '2022' },
    { period: 'Jan - Dec 2021', year: '2021' },
    { period: 'Jan - Dec 2020', year: '2020' },
    { period: 'Jan - Dec 2019', year: '2019' },
    { period: 'Jan - Dec 2018', year: '2018' },
    { period: 'Jan - Dec 2017', year: '2017' },
    { period: 'Jul - Dec 2016', year: '2016' },
    { period: 'Jan - Jun 2016', year: '2016' },
    { period: 'Jan - Dec 2015', year: '2015' },
    { period: 'Jun - Dec 2014', year: '2014' },
    { period: 'Jan - Jun 2014', year: '2014' },
    { period: 'Aug - Dec 2013', year: '2013' },
    { period: 'Feb - Aug 2013', year: '2013' },
  ];

  return (
    <Layout title="AMET Waves - AMET University">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-aemet-blue via-blue-600 to-blue-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-aemet-blue/30 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
              <FileText className="h-6 w-6" />
              <span className="font-medium">University Publication</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              AMET Waves
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Discover the latest developments, achievements, and insights from AMET University through our comprehensive publication series
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span className="font-medium">{issues.length} Issues Available</span>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="font-medium">2013 - 2023</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Issues Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Available Issues
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Browse through our collection of AMET Waves issues spanning over a decade of university excellence and achievements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {issues.map((issue, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-gradient-to-br from-aemet-blue to-blue-600 text-white p-3 rounded-lg">
                      <FileText className="h-6 w-6" />
                    </div>
                    <span className="bg-blue-50 text-aemet-blue px-3 py-1 rounded-full text-sm font-medium">
                      {issue.year}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-aemet-blue transition-colors">
                    {issue.period} Issue
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    Explore the latest updates, achievements, and insights from AMET University during this period.
                  </p>
                  
                  <button className="w-full bg-gradient-to-r from-aemet-blue to-blue-600 text-white py-2.5 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                    <Download className="h-4 w-4 group-hover/btn:animate-bounce" />
                    Download PDF
                  </button>
                </div>
              ))}
            </div>

            {/* Archive Note */}
            <div className="mt-16 bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <div className="text-center">
                <div className="bg-gradient-to-br from-aemet-blue to-blue-600 text-white p-4 rounded-full inline-flex items-center justify-center mb-4">
                  <FileText className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Complete Archive
                </h3>
                <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
                  Our AMET Waves publication has been documenting the university's journey since 2013, 
                  showcasing achievements, research breakthroughs, and academic excellence.
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
                  <span>• Academic Achievements</span>
                  <span>• Research Publications</span>
                  <span>• Student Success Stories</span>
                  <span>• University News</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AmetWaves;