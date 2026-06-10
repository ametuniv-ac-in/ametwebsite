import React from 'react';
import Layout from '@/components/Layout';
import { Separator } from "@/components/ui/separator";
import { Shield, Users, Phone, Mail, AlertCircle, Scale } from "lucide-react";

const SexualHarassment = () => {
  return (
    <Layout title="Committee Against Sexual Harassment | AMET University">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-6xl mx-auto pt-28 md:pt-32">
          {/* Hero Section */}
          <div className="flex items-center gap-3 mb-2">
            <Shield className="h-8 w-8 text-aemet-blue" />
            <h1 className="text-3xl md:text-4xl font-bold text-aemet-navy">Committee Against Sexual Harassment</h1>
          </div>
          
          <Separator className="my-6" />
          
          <div className="bg-gradient-to-r from-aemet-navy/10 to-aemet-blue/10 p-6 rounded-lg mb-10 shadow-sm border border-aemet-blue/20 animate-fade-in">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="shrink-0">
                <Shield className="h-12 w-12 text-aemet-navy" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-aemet-navy mb-4">Safe & Respectful Environment</h2>
                <p className="text-gray-700 leading-relaxed">
                  AMET University is committed to providing a safe, secure, and respectful environment free from 
                  sexual harassment for all students, faculty, and staff. Our Committee Against Sexual Harassment 
                  ensures prompt redressal of complaints and maintains the dignity of all individuals in our 
                  academic community.
                </p>
              </div>
            </div>
          </div>

          {/* Important Notice */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-lg">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-6 w-6 text-blue-500 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Important Notice</h3>
                <p className="text-blue-700 leading-relaxed">
                  Any grievance related to women can be addressed to the committee. All complaints will be handled 
                  with utmost confidentiality and sensitivity.
                </p>
              </div>
            </div>
          </div>

          {/* Committee Members */}
          <section className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-8">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <Users className="h-6 w-6 text-aemet-blue" />
                <h2 className="text-xl font-semibold text-aemet-navy">Committee Members</h2>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-aemet-navy text-white">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-medium">S.No</th>
                    <th className="px-6 py-3 text-left text-sm font-medium">Name</th>
                    <th className="px-6 py-3 text-left text-sm font-medium">Designation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm">1</td>
                    <td className="px-6 py-4 text-sm font-medium">Dr.V.Sangeetha Albin</td>
                    <td className="px-6 py-4 text-sm">Registrar i/c</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm">2</td>
                    <td className="px-6 py-4 text-sm font-medium">Dr.A.Shameem</td>
                    <td className="px-6 py-4 text-sm">Professor, AMET Business School</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm">3</td>
                    <td className="px-6 py-4 text-sm font-medium">Ms.Sandhya Rani Ramadass</td>
                    <td className="px-6 py-4 text-sm">Lady Member of NGO and Psychologist</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm">4</td>
                    <td className="px-6 py-4 text-sm font-medium">Mr.R.Sundar</td>
                    <td className="px-6 py-4 text-sm">Coordinator Student Support Service Centre (S3)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm">5</td>
                    <td className="px-6 py-4 text-sm font-medium">Mr.Varghese Mathew</td>
                    <td className="px-6 py-4 text-sm">Proctor</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm">6</td>
                    <td className="px-6 py-4 text-sm font-medium">Dr.K.Gayathri</td>
                    <td className="px-6 py-4 text-sm">Assistant Professor, Department of Physics</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm">7</td>
                    <td className="px-6 py-4 text-sm font-medium">Dr.H.J.Shanthi</td>
                    <td className="px-6 py-4 text-sm">Co-ordinator - Women Empowerment Cell</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm">8</td>
                    <td className="px-6 py-4 text-sm font-medium">Ms.Pramitiy Roy</td>
                    <td className="px-6 py-4 text-sm">Student – Department of Electrical and Electronics Engineering</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm">9</td>
                    <td className="px-6 py-4 text-sm font-medium">Ms.Janani Shetty</td>
                    <td className="px-6 py-4 text-sm">Student – Department of Nautical Science</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Phone className="h-6 w-6 text-aemet-blue" />
              <h2 className="text-xl font-semibold text-aemet-navy">Contact Information</h2>
            </div>
            
            <div className="bg-gradient-to-r from-aemet-navy/5 to-aemet-blue/5 rounded-lg p-6 border border-aemet-blue/20">
              <h3 className="text-lg font-semibold text-aemet-navy mb-4">For Grievances and Complaints</h3>
              <div className="space-y-3">
                <h4 className="font-semibold text-aemet-navy">Dr. A. Shameem</h4>
                <p className="text-gray-600 text-sm">AMET Business School</p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-aemet-blue" />
                    <span className="text-gray-700">98840 63040</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-aemet-blue" />
                    <a href="mailto:drshameem@ametuniv.ac.in" className="text-aemet-blue hover:underline">
                      drshameem@ametuniv.ac.in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Definition of Sexual Harassment */}
          <section className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="h-6 w-6 text-aemet-blue" />
              <h2 className="text-xl font-semibold text-aemet-navy">What Constitutes Sexual Harassment</h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-aemet-blue">
                <p className="text-sm font-medium text-aemet-navy mb-2">
                  As defined by the Hon'ble Supreme Court:
                </p>
                <p className="text-gray-700 leading-relaxed">
                  For this purpose, sexual harassment includes any unwelcome sexually determined behaviour 
                  (whether directly or by implication) as:
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-aemet-navy">Types of Sexual Harassment Include:</h3>
                
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-aemet-blue rounded-full mt-2"></div>
                    <span><strong>Physical contact and advances;</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-aemet-blue rounded-full mt-2"></div>
                    <span><strong>A demand or request for sexual favours;</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-aemet-blue rounded-full mt-2"></div>
                    <span><strong>Sexually coloured remarks;</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-aemet-blue rounded-full mt-2"></div>
                    <span><strong>Showing pornography;</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-aemet-blue rounded-full mt-2"></div>
                    <span><strong>Any other unwelcome physical, verbal or non-verbal conduct of sexual nature.</strong></span>
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">Important Note:</h4>
                <p className="text-yellow-700 text-sm leading-relaxed">
                  Where any of these acts is committed in circumstances in relation to the victim's employment 
                  or work or course of study, whether he/she is drawing salary, or honorarium or voluntary or 
                  a Student pursuing Education, when the Employee / Student has reasonable grounds to believe 
                  that his/her objection would disadvantage his/her in connection with his/her employment or 
                  work or disrupt the course of study in the University including when it creates a hostile 
                  environment, adverse consequences might be visited if the victim does not consent to the 
                  conduct in question or raises any objection thereto - such conducts amount to sexual harassment.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default SexualHarassment;