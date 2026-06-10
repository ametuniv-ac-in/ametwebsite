import React from 'react';
import Layout from '@/components/Layout';
import { Accessibility as AccessibilityIcon, CheckCircle, AlertTriangle, Mail } from 'lucide-react';

const Accessibility = () => {
  return (
    <Layout title="Accessibility | AMET University">
      <section className="relative bg-gradient-to-br from-aemet-blue via-purple-600 to-aemet-navy text-white py-24 mt-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Accessibility
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Our commitment to making our website accessible to all
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-300 to-purple-300 mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        {/* Commitment */}
        <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-aemet-blue to-purple-600 rounded-full">
                <AccessibilityIcon className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-aemet-navy">Our Commitment</h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="text-lg leading-relaxed">
                AMET University is committed to ensuring that our website is accessible to all users, including 
                people with disabilities. We continuously work to improve the accessibility of our digital 
                content and strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.
              </p>
            </div>
          </div>
        </section>

        {/* Accessibility Features */}
        <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-aemet-blue to-purple-600 rounded-full">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-aemet-navy">Accessibility Features</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-aemet-navy mb-3">Navigation</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>Keyboard-accessible navigation</li>
                  <li>Skip-to-content links</li>
                  <li>Consistent and predictable layout</li>
                  <li>Clear page structure with headings</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-aemet-navy mb-3">Visual Design</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>Sufficient color contrast ratios</li>
                  <li>Resizable text without loss of functionality</li>
                  <li>Alt text for images</li>
                  <li>Responsive design for all screen sizes</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-aemet-navy mb-3">Content</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>Clear and simple language</li>
                  <li>Descriptive link text</li>
                  <li>Properly labeled form fields</li>
                  <li>Error messages with guidance</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-aemet-navy mb-3">Technology</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>Semantic HTML structure</li>
                  <li>ARIA landmarks and roles</li>
                  <li>Compatible with screen readers</li>
                  <li>Works across modern browsers</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-aemet-blue to-purple-600 rounded-full">
                <AlertTriangle className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-aemet-navy">Disclaimer</h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="text-lg leading-relaxed">
                The information or data presented on this website may sometimes be outdated or inappropriate. 
                While we strive for accuracy and accessibility, AMET University does not guarantee the 
                completeness or reliability of all information. We are continuously working to improve our 
                content and accessibility features.
              </p>
            </div>
          </div>
        </section>

        {/* Contact / Feedback */}
        <section className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-aemet-blue to-purple-600 rounded-full">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-aemet-navy">Feedback & Contact</h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="text-lg leading-relaxed">
                We welcome your feedback on the accessibility of our website. If you encounter any 
                accessibility barriers or have suggestions for improvement, please contact us:
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="space-y-2">
                  <p><strong>AMET University</strong></p>
                  <p>135, Rajiv Gandhi Salai (OMR), Kanathur</p>
                  <p>Chennai - 603112, Tamil Nadu, India</p>
                  <p>Email: info@ametuniv.ac.in</p>
                  <p>Phone: +91-44-39967000</p>
                </div>
              </div>
              <p className="text-lg leading-relaxed">
                We will make reasonable efforts to address accessibility concerns and respond to your 
                feedback within a reasonable timeframe.
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Accessibility;
