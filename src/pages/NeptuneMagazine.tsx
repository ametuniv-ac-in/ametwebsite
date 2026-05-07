import React from 'react';
import Layout from '../components/Layout';
import { BookOpen, ExternalLink, Calendar } from 'lucide-react';

const magazines = [
  {
    title: 'Neptune Magazine',
    period: 'March 2026',
    url: 'https://drive.google.com/file/d/1BJ1K7WNMfneQsUWD2_SD30XbPomSLOnQ/view',
  },
  {
    title: 'Neptune Magazine',
    period: 'January 2026',
    url: 'https://drive.google.com/file/d/1_BwlHOmu84E7EQuODf5KUbRkN_NQ9wzN/view',
  },
  {
    title: 'Neptune Magazine',
    period: 'November 2025',
    url: 'https://drive.google.com/file/d/17wcM5GxaHmuGMv5ibGs-3DOoYhijgC2k/view',
  },
];

const NeptuneMagazine: React.FC = () => {
  return (
    <Layout title="Neptune Magazine - AMET University">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-blue-600 to-aemet-blue text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
              <BookOpen className="h-6 w-6" />
              <span className="font-medium">University Publication</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Neptune Magazine
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              AMET University's flagship magazine featuring campus highlights, student achievements, research breakthroughs, and institutional milestones
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span className="font-medium">{magazines.length} Issues Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Magazine Issues */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Browse Issues
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Read or download the latest editions of Neptune Magazine
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {magazines.map((mag, index) => (
                <a
                  key={index}
                  href={mag.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-gradient-to-br from-aemet-blue to-purple-600 text-white p-3 rounded-xl">
                      <BookOpen className="h-6 w-6" />
                    </div>
                    <span className="bg-blue-50 text-aemet-blue px-3 py-1 rounded-full text-sm font-medium">
                      {mag.period.split(' ')[1]}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-aemet-blue transition-colors">
                    {mag.title}
                  </h3>
                  <p className="text-gray-500 font-medium mb-4">{mag.period}</p>
                  <p className="text-gray-600 text-sm mb-6">
                    Featuring campus news, student stories, faculty insights, and updates from AMET University.
                  </p>

                  <div className="w-full bg-gradient-to-r from-aemet-blue to-blue-600 text-white py-2.5 px-4 rounded-lg font-medium flex items-center justify-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    View Magazine
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NeptuneMagazine;
