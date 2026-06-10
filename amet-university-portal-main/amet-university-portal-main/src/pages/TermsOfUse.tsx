import React from 'react';
import Layout from '@/components/Layout';
import { FileText, AlertTriangle, Globe, Scale, BarChart3, Mail } from 'lucide-react';

const TermsOfUse = () => {
  return (
    <Layout title="Terms of Use | AMET University">
      <section className="relative bg-gradient-to-br from-aemet-blue via-purple-600 to-aemet-navy text-white py-24 mt-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Terms of Use
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Please read these terms carefully before using our website
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-300 to-purple-300 mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        <section className="max-w-6xl mx-auto mb-8">
          <div className="bg-blue-50 rounded-lg p-4 text-center">
            <p className="text-aemet-navy font-semibold">Last Updated: January 2024</p>
          </div>
        </section>

        {/* Introduction */}
        <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-aemet-blue to-purple-600 rounded-full">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-aemet-navy">Introduction</h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="text-lg leading-relaxed">
                Welcome to the AMET University website. By accessing and using this website, you accept and agree 
                to be bound by these Terms of Use. If you do not agree with any part of these terms, please do 
                not use our website.
              </p>
              <p className="text-lg leading-relaxed">
                AMET University reserves the right to modify these terms at any time without prior notice. 
                Your continued use of the website following any changes constitutes your acceptance of the 
                revised terms.
              </p>
            </div>
          </div>
        </section>

        {/* Acceptable Use */}
        <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-aemet-blue to-purple-600 rounded-full">
                <Scale className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-aemet-navy">Acceptable Use</h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="text-lg leading-relaxed">You agree to use this website only for lawful purposes and in a manner that does not:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Infringe the rights of others or restrict their use of the website</li>
                <li>Violate any applicable local, national, or international law or regulation</li>
                <li>Transmit any material that is unlawful, threatening, abusive, or otherwise objectionable</li>
                <li>Attempt to gain unauthorized access to any part of the website or its servers</li>
                <li>Introduce viruses, malware, or other harmful technology</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Intellectual Property */}
        <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-aemet-blue to-purple-600 rounded-full">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-aemet-navy">Intellectual Property</h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="text-lg leading-relaxed">
                All content on this website, including but not limited to text, graphics, logos, images, 
                audio clips, video clips, and software, is the property of AMET University or its content 
                suppliers and is protected by Indian and international copyright laws.
              </p>
              <p className="text-lg leading-relaxed">
                You may not reproduce, distribute, modify, create derivative works from, or publicly display 
                any content from this website without prior written permission from AMET University.
              </p>
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
                The information provided on this website is for general informational purposes only. While we 
                strive to keep the information up to date and accurate, <strong>the information or data presented 
                on this website may sometimes be outdated or inappropriate</strong>. AMET University makes no 
                representations or warranties of any kind, express or implied, about the completeness, accuracy, 
                reliability, suitability, or availability of the information, products, services, or related 
                graphics contained on the website.
              </p>
              <p className="text-lg leading-relaxed">
                Any reliance you place on such information is strictly at your own risk. AMET University shall 
                not be liable for any loss or damage arising from the use of this website.
              </p>
            </div>
          </div>
        </section>

        {/* Third-Party Links */}
        <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-aemet-blue to-purple-600 rounded-full">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-aemet-navy">Third-Party Links</h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="text-lg leading-relaxed">
                This website may contain links to external websites that are not operated by AMET University. 
                We have no control over the content and practices of these sites and cannot accept responsibility 
                for their privacy policies or content.
              </p>
            </div>
          </div>
        </section>

        {/* Analytics */}
        <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-aemet-blue to-purple-600 rounded-full">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-aemet-navy">Analytics & Tracking</h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="text-lg leading-relaxed">
                This website uses third-party analytics and tracking tools, including but not limited to 
                <strong> Google Analytics</strong> and <strong>Microsoft Clarity</strong>, to understand how 
                visitors interact with our website. These tools may collect information such as your IP address, 
                browser type, pages visited, time spent on pages, and other usage data.
              </p>
              <p className="text-lg leading-relaxed">
                By using this website, you consent to the processing of data about you by these third-party 
                tools in the manner and for the purposes set out above. You can manage your preferences 
                through our cookie consent mechanism.
              </p>
            </div>
          </div>
        </section>

        {/* Governing Law */}
        <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-aemet-blue to-purple-600 rounded-full">
                <Scale className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-aemet-navy">Governing Law</h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="text-lg leading-relaxed">
                These terms shall be governed by and construed in accordance with the laws of India. 
                Any disputes arising under these terms shall be subject to the exclusive jurisdiction of 
                the courts in Chennai, Tamil Nadu, India.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-aemet-blue to-purple-600 rounded-full">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-aemet-navy">Contact Us</h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="text-lg leading-relaxed">
                If you have questions about these Terms of Use, please contact us:
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
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default TermsOfUse;
