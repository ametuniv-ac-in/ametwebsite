import React from 'react';
import Layout from '@/components/Layout';
import { ArrowLeft, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const EContent2016 = () => {
  return (
    <Layout title="E-Content 2016-17 | AMET University">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-aemet-navy to-aemet-blue text-white py-24 mt-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              E-Content 2016-17
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Educational Materials developed by EMRDC using Media Centre
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-300 to-purple-300 mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        {/* Back Navigation */}
        <div className="max-w-6xl mx-auto mb-8">
          <Link 
            to="/video-lectures"
            className="inline-flex items-center gap-2 text-aemet-blue hover:text-aemet-navy transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Video Lectures
          </Link>
        </div>

        {/* Content Section */}
        <section className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-gradient-to-r from-aemet-blue to-purple-600 rounded-full">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-aemet-navy">Academic Year 2016-17</h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="text-lg leading-relaxed">
                This section contains the comprehensive list of educational content materials 
                developed during the academic year 2016-17 using the facilities at the 
                Educational Materials Resource Development Centre (EMRDC).
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-aemet-navy font-semibold mb-2">Content Categories Include:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Advanced Video Lectures</li>
                  <li>Laboratory Demonstrations</li>
                  <li>Case Study Materials</li>
                  <li>Assessment and Evaluation Resources</li>
                </ul>
              </div>

              <p className="text-lg leading-relaxed">
                The academic year 2016-17 marked significant expansion in digital content creation, 
                with enhanced production quality and broader subject coverage.
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default EContent2016;