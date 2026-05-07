import React from 'react';
import Layout from '@/components/Layout';
import { Shield, Eye, Lock, UserCheck, Database, Mail, AlertTriangle, BarChart3 } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <Layout title="Privacy Policy | AMET University">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-aemet-blue via-purple-600 to-aemet-navy text-white py-24 mt-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Your privacy and data protection matter to us
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-300 to-purple-300 mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        {/* Last Updated */}
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
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-aemet-navy">Introduction</h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="text-lg leading-relaxed">
                AMET University ("we," "our," or "us") is committed to protecting your privacy and ensuring 
                the security of your personal information. This Privacy Policy explains how we collect, use, 
                disclose, and safeguard your information when you visit our website, use our services, or 
                interact with us in any way.
              </p>
              
              <p className="text-lg leading-relaxed">
                By accessing or using our website and services, you agree to the terms of this Privacy Policy. 
                If you do not agree with the practices described in this policy, please do not use our services.
              </p>
            </div>
          </div>
        </section>

        {/* Information We Collect */}
        <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-aemet-blue to-purple-600 rounded-full">
                <Database className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-aemet-navy">Information We Collect</h2>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-aemet-navy mb-4">Personal Information</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Name, email address, phone number, and postal address</li>
                  <li>Academic records and educational background</li>
                  <li>Application and admission information</li>
                  <li>Financial information for fee payments</li>
                  <li>Emergency contact information</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-aemet-navy mb-4">Technical Information</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>IP address and browser information</li>
                  <li>Device information and operating system</li>
                  <li>Website usage data and analytics</li>
                  <li>Cookies and similar technologies</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How We Use Information */}
        <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-aemet-blue to-purple-600 rounded-full">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-aemet-navy">How We Use Your Information</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-aemet-navy mb-3">Educational Services</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>Process applications and admissions</li>
                  <li>Provide academic services and support</li>
                  <li>Maintain academic records</li>
                  <li>Facilitate student communication</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-aemet-navy mb-3">Communication</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>Send important notifications</li>
                  <li>Respond to inquiries</li>
                  <li>Share university updates</li>
                  <li>Marketing communications (with consent)</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-aemet-navy mb-3">Legal Compliance</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>Comply with regulatory requirements</li>
                  <li>Meet accreditation standards</li>
                  <li>Respond to legal requests</li>
                  <li>Protect rights and safety</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-aemet-navy mb-3">Improvement</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>Analyze website usage</li>
                  <li>Improve our services</li>
                  <li>Enhance user experience</li>
                  <li>Research and development</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Data Security */}
        <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-aemet-blue to-purple-600 rounded-full">
                <Lock className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-aemet-navy">Data Security</h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="text-lg leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your 
                personal information against unauthorized access, alteration, disclosure, or destruction. 
                These measures include:
              </p>
              
              <ul className="list-disc list-inside space-y-2">
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Staff training on data protection practices</li>
                <li>Incident response and breach notification procedures</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Your Rights */}
        <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-aemet-blue to-purple-600 rounded-full">
                <UserCheck className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-aemet-navy">Your Rights</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-aemet-navy mb-3">Access and Portability</h4>
                <p className="text-gray-700 mb-4">
                  You have the right to request access to your personal information and receive 
                  a copy of the data we hold about you.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-aemet-navy mb-3">Correction and Updates</h4>
                <p className="text-gray-700 mb-4">
                  You can request corrections to inaccurate or incomplete personal information 
                  we have about you.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-aemet-navy mb-3">Deletion</h4>
                <p className="text-gray-700 mb-4">
                  In certain circumstances, you may request deletion of your personal information, 
                  subject to legal and regulatory requirements.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-aemet-navy mb-3">Communication Preferences</h4>
                <p className="text-gray-700 mb-4">
                  You can opt out of non-essential communications and update your 
                  communication preferences at any time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Us */}
        <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-aemet-blue to-purple-600 rounded-full">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-aemet-navy">Contact Us</h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="text-lg leading-relaxed">
                If you have questions about this Privacy Policy or wish to exercise your rights, 
                please contact us:
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="space-y-2">
                  <p><strong>Data Protection Officer</strong></p>
                  <p>AMET University</p>
                  <p>135, Rajiv Gandhi Salai (OMR), Kanathur</p>
                  <p>Chennai - 603112, Tamil Nadu, India</p>
                  <p>Email: privacy@ametuniv.ac.in</p>
                  <p>Phone: +91-44-39967000</p>
                </div>
              </div>
              
              <p className="text-lg leading-relaxed">
                We will respond to your inquiry within 30 days and may request additional 
                information to verify your identity before processing your request.
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
                While we strive to keep our content accurate and current, AMET University makes no guarantees 
                regarding the completeness, accuracy, or reliability of any information on this website.
              </p>
            </div>
          </div>
        </section>

        {/* Third-Party Analytics */}
        <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-aemet-blue to-purple-600 rounded-full">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-aemet-navy">Third-Party Analytics</h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="text-lg leading-relaxed">
                We use third-party analytics and tracking tools to understand how visitors use our website 
                and to improve our services. These include:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-aemet-navy mb-3">Google Analytics</h4>
                  <p className="text-gray-700 text-sm">
                    Collects anonymized data about website usage including pages visited, time on site, 
                    geographic location, and device information to help us understand visitor behavior.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-aemet-navy mb-3">Microsoft Clarity</h4>
                  <p className="text-gray-700 text-sm">
                    Captures behavioral metrics, heatmaps, and session replays to help us understand 
                    how users interact with our website and identify usability improvements.
                  </p>
                </div>
              </div>
              <p className="text-lg leading-relaxed">
                These tools may use cookies and similar technologies. For more details, please refer to our 
                <a href="/cookie-policy" className="text-aemet-blue hover:underline"> Cookie Policy</a>.
              </p>
            </div>
          </div>
        </section>

        {/* Policy Updates */}
        <section className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-aemet-blue/10 to-purple-600/10 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-aemet-navy mb-6 text-center">Policy Updates</h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 text-center space-y-4">
              <p className="text-lg leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our 
                practices, technology, or legal requirements. We will notify you of any material 
                changes by posting the updated policy on our website and updating the "Last Updated" date.
              </p>
              
              <p className="text-lg leading-relaxed">
                Your continued use of our services after any changes indicates your acceptance 
                of the updated Privacy Policy.
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default PrivacyPolicy;