import React from 'react';
import Layout from '@/components/Layout';
import { Cookie, Settings, AlertTriangle, Mail } from 'lucide-react';

const CookiePolicy = () => {
  return (
    <Layout title="Cookie Policy | AMET University">
      <section className="relative bg-gradient-to-br from-aemet-blue via-purple-600 to-aemet-navy text-white py-24 mt-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Cookie Policy
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              How we use cookies and similar technologies
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

        {/* What Are Cookies */}
        <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-aemet-blue to-purple-600 rounded-full">
                <Cookie className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-aemet-navy">What Are Cookies?</h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="text-lg leading-relaxed">
                Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) 
                when you visit a website. They are widely used to make websites work more efficiently, provide 
                a better user experience, and supply information to website owners.
              </p>
            </div>
          </div>
        </section>

        {/* Cookies We Use */}
        <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-aemet-blue to-purple-600 rounded-full">
                <Settings className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-aemet-navy">Cookies We Use</h2>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-aemet-navy mb-4">Essential Cookies</h3>
                <p className="text-gray-700 mb-2">
                  These cookies are necessary for the website to function properly. They enable core functionality 
                  such as page navigation, secure areas, and cookie consent preferences. The website cannot 
                  function properly without these cookies.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-aemet-navy mb-4">Analytics Cookies</h3>
                <p className="text-gray-700 mb-2">
                  We use analytics cookies from the following third-party services to understand how visitors 
                  interact with our website:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-aemet-navy mb-3">Google Analytics</h4>
                    <p className="text-gray-700 text-sm">
                      Google Analytics uses cookies to collect information about how visitors use our website, 
                      including the number of visitors, pages visited, and time spent on each page. This data 
                      helps us improve our website and your experience.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-aemet-navy mb-3">Microsoft Clarity</h4>
                    <p className="text-gray-700 text-sm">
                      Microsoft Clarity uses cookies and similar technologies to capture how visitors use and 
                      interact with our website through behavioral metrics, heatmaps, and session replay. 
                      This helps us understand usability issues and improve the user experience.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-aemet-navy mb-4">Functional Cookies</h3>
                <p className="text-gray-700">
                  These cookies allow the website to remember choices you make (such as your language preference 
                  or display settings) and provide enhanced, personalized features.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Managing Cookies */}
        <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-aemet-blue to-purple-600 rounded-full">
                <Settings className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-aemet-navy">Managing Cookies</h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="text-lg leading-relaxed">
                You can control and manage cookies through your browser settings. Most browsers allow you to:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>View and delete cookies stored on your device</li>
                <li>Block cookies from specific or all websites</li>
                <li>Set preferences for specific types of cookies</li>
                <li>Accept or reject cookies when visiting a website</li>
              </ul>
              <p className="text-lg leading-relaxed">
                Please note that disabling certain cookies may affect the functionality of this website and 
                limit your ability to use some features.
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
                The information or data presented on this website may sometimes be outdated or inappropriate. 
                While we make every effort to ensure accuracy, AMET University does not guarantee the 
                completeness or reliability of any information on this website.
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
                If you have questions about our use of cookies, please contact us:
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

export default CookiePolicy;
