import React from 'react';
import Layout from '@/components/Layout';
import { Separator } from "@/components/ui/separator";
import { MessageSquare, Users, Mail, Phone, Globe, User, FileText, ExternalLink } from "lucide-react";

const GrievanceRedressal = () => {
  return (
    <Layout title="Students Grievance Redressal | AMET University">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-6xl mx-auto pt-28 md:pt-32">
          {/* Hero Section */}
          <div className="flex items-center gap-3 mb-2">
            <MessageSquare className="h-8 w-8 text-aemet-blue" />
            <h1 className="text-3xl md:text-4xl font-bold text-aemet-navy">Students Grievance Redressal Committee</h1>
          </div>
          
          <Separator className="my-6" />
          
          <div className="bg-gradient-to-r from-aemet-navy/10 to-aemet-blue/10 p-6 rounded-lg mb-10 shadow-sm border border-aemet-blue/20 animate-fade-in">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="shrink-0">
                <MessageSquare className="h-12 w-12 text-aemet-navy" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-aemet-navy mb-4">Student Voice & Support</h2>
                <p className="text-gray-700 leading-relaxed">
                  The Students Grievance Redressal Committee at AMET University ensures that every student's 
                  concern is heard and addressed promptly. We provide multiple channels for students to voice 
                  their grievances and work towards fair and transparent resolution of all issues.
                </p>
              </div>
            </div>
          </div>

          {/* UGC Notification */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-lg">
            <div className="flex items-start gap-3">
              <FileText className="h-6 w-6 text-blue-500 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-blue-800 mb-2">UGC Compliance</h3>
                <p className="text-blue-700 leading-relaxed">
                  This committee has been constituted as per the UGC notification published in the Gazette on 23rd March 2013.
                </p>
              </div>
            </div>
          </div>

          {/* Management Structure */}
          <section className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-6 w-6 text-aemet-blue" />
              <h2 className="text-xl font-semibold text-aemet-navy">Management Structure</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Vice Chancellor",
                "Registrar",
                "Dean, Student Welfare",
                "Heads of the Core Departments",
                "Controlling Officers",
                "Controller of Examination",
                "Proctor",
                "Director, Physical Education",
                "Librarian",
                "PRO"
              ].map((position, index) => (
                <div key={index} className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                  <p className="text-sm font-medium text-aemet-navy">{position}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Grievance Redressal Committee */}
          <section className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-8">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <Users className="h-6 w-6 text-aemet-blue" />
                <h2 className="text-xl font-semibold text-aemet-navy">Student Grievance Redressal Committee</h2>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-aemet-navy text-white">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium">S.No.</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Name</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Designation & Department</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Contact No</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { sno: 1, name: "Dr. S. Ramalingam", designation: "Dean Student Welfare - Convener", contact: "9444660285" },
                    { sno: 2, name: "Capt. P. Rajendran", designation: "HOD – Nautical Science", contact: "9445263760" },
                    { sno: 3, name: "C/E. Muthukumar", designation: "HOD – Marine Engineering", contact: "9600591769" },
                    { sno: 4, name: "Dr.S.Priya", designation: "Dean – Academics", contact: "9710744774" },
                    { sno: 5, name: "Dr.A.Thanikasalam", designation: "Dean – Administration (i/c)", contact: "9884947968" },
                    { sno: 6, name: "Sub.Lt.A.Prem Anandh", designation: "NCC Officer", contact: "9003360606" },
                    { sno: 7, name: "Mr. Varghese Mathew", designation: "Proctor", contact: "9072469094" },
                    { sno: 8, name: "Dr.N.Mathivanan", designation: "Ombuds person", contact: "9840253789" },
                    { sno: 9, name: "Cadt. Mridu Prayash", designation: "B.E. Marine Engg-IV year", contact: "6003140296" },
                    { sno: 10, name: "Ms. Kriuthikha S", designation: "B.E. NA&OE-IV Year", contact: "8925494044" },
                  ].map((member, index) => (
                    <tr key={member.sno} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-4 py-3 text-sm">{member.sno}</td>
                      <td className="px-4 py-3 text-sm font-medium">{member.name}</td>
                      <td className="px-4 py-3 text-sm">{member.designation}</td>
                      <td className="px-4 py-3 text-sm">{member.contact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Ombudsperson */}
          <section className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <User className="h-6 w-6 text-aemet-blue" />
              <h2 className="text-xl font-semibold text-aemet-navy">Ombudsperson</h2>
            </div>
            
            <div className="bg-gradient-to-r from-aemet-navy/5 to-aemet-blue/5 rounded-lg p-6 border border-aemet-blue/20">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-aemet-navy mb-2">Dr.N.Mathivanan</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Former Director and Head, Department of Centre for Advanced Study in Botany, University of Madras
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-aemet-blue" />
                      <span className="text-gray-700">98402 53789</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-aemet-blue" />
                      <a href="mailto:prabhamathi@yahoo.com" className="text-aemet-blue hover:underline">
                        prabhamathi@yahoo.com
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-end">
                  <a 
                    href="#" 
                    className="inline-flex items-center text-aemet-blue hover:text-aemet-navy transition-colors duration-200 font-medium"
                  >
                    <User className="h-4 w-4 mr-2" />
                    View Profile
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Grievance Systems */}
          <div className="grid md:grid-cols-1 gap-8 mb-8">
            {/* Green Box System */}
            <section className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-aemet-navy mb-6">Grievance Redressal System</h2>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-green-800 mb-4">Green Box System</h3>
                <p className="text-green-700 leading-relaxed">
                  Under "Green Box System" students can very well put their letters of Grievances in the Green Box, 
                  which is available in the lounge of the University Entrance. Vice-Chancellor attends those 
                  grievances on daily basis and redresses the grievances of any nature.
                </p>
              </div>

              {/* Online System */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-4">Online Grievance Redressal System</h3>
                <p className="text-blue-700 leading-relaxed mb-4">
                  University has also made the provision to receive and attend various grievances of students 
                  online through University website portal ametuniv.edugrievance.com. Students can register 
                  and login using their email ID /mobile number and post their grievance which will be addressed 
                  by the concerned Grievance Redressal Committee officials.
                </p>
                
                <div className="space-y-6">
                  {/* Registration Process */}
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-3">Registration Process:</h4>
                    <ol className="space-y-2 text-blue-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="bg-blue-200 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold">1</span>
                        <span>Students can register their grievance through the website ametuniv.edugrievance.com</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-blue-200 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold">2</span>
                        <span>Click Students Icon.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-blue-200 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold">3</span>
                        <span>Click "New User Registration".</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-blue-200 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold">4</span>
                        <span>Enter your details such as Name, Course, Batch, Mobile No., Email and click Register.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-blue-200 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold">5</span>
                        <span>Once your registration is approved, you can post a grievance.</span>
                      </li>
                    </ol>
                  </div>

                  {/* To Post Grievance */}
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-3">To Post a Grievance:</h4>
                    <ol className="space-y-2 text-blue-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="bg-blue-200 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold">1</span>
                        <span>Use Email ID or Mobile Number to Login.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-blue-200 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold">2</span>
                        <span>Click Post a Grievance to register your grievance.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-blue-200 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold">3</span>
                        <span>Select the Grievance Type - If the grievance is department related, select your department name. If not, select the appropriate grievance type listed.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-blue-200 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold">4</span>
                        <span>Enter the grievance subject with brief description. If there is any proof or documents, it can be attached.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-blue-200 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold">5</span>
                        <span>Click Create to submit your grievance.</span>
                      </li>
                    </ol>
                  </div>

                  {/* To View Status */}
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-3">To view the Status of Grievance:</h4>
                    <ol className="space-y-2 text-blue-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="bg-blue-200 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold">1</span>
                        <span>Students can view the status of grievance in My Grievances section.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-blue-200 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold">2</span>
                        <span>To view the details of the action taken on the grievance, click the View button.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-blue-200 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold">3</span>
                        <span>If the student is not satisfied with the reply, they can reopen the grievance and submit it with their queries again.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-blue-200 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold">4</span>
                        <span>To reopen the grievance, click Reopen button and type your grievance and post it.</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* External Portals */}
          <section className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="h-6 w-6 text-aemet-blue" />
              <h2 className="text-xl font-semibold text-aemet-navy">Online Grievances in UGC and AICTE Portal</h2>
            </div>
            
            <p className="text-gray-700 mb-6">
              Students can also submit their grievances in the UGC and AICTE Grievance portal at the following links:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <a 
                href="https://ugc.ac.in/grievance" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-aemet-navy mb-1">UGC Grievance Portal</h3>
                    <p className="text-sm text-gray-600">https://ugc.ac.in/grievance</p>
                  </div>
                  <ExternalLink className="h-5 w-5 text-aemet-blue group-hover:text-aemet-navy transition-colors" />
                </div>
              </a>
              
              <a 
                href="https://centralgrievances.aicte-india.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-aemet-navy mb-1">AICTE Grievance Portal</h3>
                    <p className="text-sm text-gray-600">https://centralgrievances.aicte-india.org/</p>
                  </div>
                  <ExternalLink className="h-5 w-5 text-aemet-blue group-hover:text-aemet-navy transition-colors" />
                </div>
              </a>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default GrievanceRedressal;