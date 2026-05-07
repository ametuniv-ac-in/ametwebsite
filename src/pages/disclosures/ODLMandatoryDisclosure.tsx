import React from 'react';
import Layout from '@/components/Layout';
import { FileText, GraduationCap, Bell } from 'lucide-react';

const ODLMandatoryDisclosure = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-aemet-navy to-aemet-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">ODL/OL Mandatory Disclosure</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Open and Distance Learning (ODL) & Online Learning (OL) regulatory documents and approvals
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Public Notice and Application */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-aemet-blue to-aemet-navy text-white p-6">
            <div className="flex items-center gap-3">
              <Bell className="h-6 w-6" />
              <h2 className="text-2xl font-bold">Important Documents</h2>
            </div>
          </div>
          <div className="p-6">
            <a href="/pdfs/Public_Notice_by_UGC-DEB.pdf" target="_blank" rel="noopener noreferrer" className="p-4 bg-red-50 rounded-lg block hover:bg-red-100 transition-colors">
              <h3 className="font-semibold text-aemet-navy mb-2 inline-flex items-center gap-2"><FileText className="h-4 w-4" />Public Notice by UGC-DEB</h3>
              <p className="text-gray-600 text-sm">Official notification from UGC Distance Education Bureau</p>
            </a>
          </div>
        </div>

        {/* HEI Basic Information */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-aemet-blue to-aemet-navy text-white p-6">
            <div className="flex items-center gap-3">
              <GraduationCap className="h-6 w-6" />
              <h2 className="text-2xl font-bold">HEI Basic Information</h2>
            </div>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-aemet-navy mb-1">Registration ID</h4>
                  <p className="text-gray-700">HEI-P-U-0434</p>
                </div>
                <div>
                  <h4 className="font-semibold text-aemet-navy mb-1">Name of the HEI</h4>
                  <p className="text-gray-700">Academy of Maritime Education and Training</p>
                </div>
                <div>
                  <h4 className="font-semibold text-aemet-navy mb-1">Institution Type</h4>
                  <p className="text-gray-700">Deemed-To-Be-University</p>
                </div>
                <div>
                  <h4 className="font-semibold text-aemet-navy mb-1">Year of Establishment</h4>
                  <p className="text-gray-700">Aug 2007</p>
                </div>
                <div>
                  <h4 className="font-semibold text-aemet-navy mb-1">Mode of Education</h4>
                  <p className="text-gray-700">Dual Mode</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-aemet-navy mb-1">City</h4>
                  <p className="text-gray-700">Chennai</p>
                </div>
                <div>
                  <h4 className="font-semibold text-aemet-navy mb-1">District</h4>
                  <p className="text-gray-700">Chengalpattu</p>
                </div>
                <div>
                  <h4 className="font-semibold text-aemet-navy mb-1">Address</h4>
                  <p className="text-gray-700">135 East Coast Road, Kanathur</p>
                </div>
                <div>
                  <h4 className="font-semibold text-aemet-navy mb-1">Pin Code</h4>
                  <p className="text-gray-700">603 112</p>
                </div>
              </div>
            </div>
            
            {/* Website Information */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h4 className="font-semibold text-aemet-navy mb-4">Official Websites</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h5 className="font-medium text-aemet-navy mb-2">Official Website of HEI</h5>
                  <a href="https://www.ametuniv.ac.in" target="_blank" rel="noopener noreferrer" 
                     className="text-aemet-blue hover:underline">
                    www.ametuniv.ac.in
                  </a>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h5 className="font-medium text-aemet-navy mb-2">Open & Distance Learning</h5>
                  <a href="https://www.aucode.in" target="_blank" rel="noopener noreferrer" 
                     className="text-aemet-blue hover:underline">
                    www.aucode.in
                  </a>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h5 className="font-medium text-aemet-navy mb-2">Online Learning</h5>
                  <a href="https://www.auol.in" target="_blank" rel="noopener noreferrer" 
                     className="text-aemet-blue hover:underline">
                    www.auol.in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* HEI Authorities */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-aemet-blue to-aemet-navy text-white p-6">
            <div className="flex items-center gap-3">
              <GraduationCap className="h-6 w-6" />
              <h2 className="text-2xl font-bold">HEI Authorities</h2>
            </div>
          </div>
          <div className="p-6">
            {/* Vice Chancellor */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-aemet-navy mb-4">Vice Chancellor</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-aemet-navy mb-1">Name</h4>
                    <p className="text-gray-700">Prof. Dr. V. Rajendran</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-aemet-navy mb-1">Email</h4>
                    <p className="text-gray-700">vc@ametuniv.ac.in</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-aemet-navy mb-1">Mobile</h4>
                    <p className="text-gray-700">99941 37373</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-aemet-navy mb-1">Phone (Office)</h4>
                    <p className="text-gray-700">044 27444 629</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-aemet-navy mb-1">Phone (Residence)</h4>
                    <p className="text-gray-700">97871 37373</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-aemet-navy mb-1">Highest Qualification</h4>
                    <p className="text-gray-700">Ph.D, D.Sc</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-aemet-navy mb-1">Experience</h4>
                    <p className="text-gray-700">33 years</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Registrar */}
            <div className="mb-8 pt-6 border-t border-gray-200">
              <h3 className="text-xl font-bold text-aemet-navy mb-4">Registrar</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-aemet-navy mb-1">Name</h4>
                    <p className="text-gray-700">Dr. V. Sangeetha Albin</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-aemet-navy mb-1">Email</h4>
                    <p className="text-gray-700">registrar@ametuniv.ac.in</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-aemet-navy mb-1">Mobile</h4>
                    <p className="text-gray-700">94438 73501</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-aemet-navy mb-1">Phone (Office)</h4>
                    <p className="text-gray-700">044 2747 2804</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-aemet-navy mb-1">Phone (Residence)</h4>
                    <p className="text-gray-700">94438 73501</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-aemet-navy mb-1">Highest Qualification</h4>
                    <p className="text-gray-700">Ph.D</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-aemet-navy mb-1">Experience</h4>
                    <p className="text-gray-700">18 years</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Director – Centre for Distance and Online Education */}
            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-xl font-bold text-aemet-navy mb-4">Director – Centre for Distance and Online Education (CDOE)</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-aemet-navy mb-1">Name</h4>
                    <p className="text-gray-700">Dr. R. Nandhini</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-aemet-navy mb-1">Email</h4>
                    <p className="text-gray-700">director@aucode.in</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-aemet-navy mb-1">Designation</h4>
                    <p className="text-gray-700">Director</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-aemet-navy mb-1">Highest Qualification</h4>
                    <p className="text-gray-700">Ph.D (Management - Marketing)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-aemet-navy mb-1">Date of Joining</h4>
                    <p className="text-gray-700">02-07-2025</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-aemet-navy mb-1">Appointment & Joining Report</h4>
                    <a href="/pdfs/Director_CDOE_Nandhini.pdf" target="_blank" rel="noopener noreferrer" className="text-aemet-blue hover:underline inline-flex items-center gap-1">
                      <FileText className="h-4 w-4" />
                      <span>Director CDOE - Appointment & Joining Report</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* HEI Recognition */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-aemet-blue to-aemet-navy text-white p-6">
            <div className="flex items-center gap-3">
              <GraduationCap className="h-6 w-6" />
              <h2 className="text-2xl font-bold">HEI Recognition</h2>
            </div>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-aemet-navy mb-1">Recognition status (UGC Act, 1956)</h4>
                  <p className="text-gray-700">SECTION 3</p>
                </div>
                <div>
                  <h4 className="font-semibold text-aemet-navy mb-1">Recognized under 12B?</h4>
                  <p className="text-gray-700">No</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-aemet-navy mb-1">Approval of Statutory Authority</h4>
                  <p className="text-gray-700">Yes</p>
                </div>
                <div>
                  <h4 className="font-semibold text-aemet-navy mb-1">Supporting Document</h4>
                  <a href="/pdfs/1.3-HEI_Recognition.pdf" target="_blank" rel="noopener noreferrer" className="text-aemet-blue hover:underline inline-flex items-center gap-1">
                    <FileText className="h-4 w-4" />
                    <span>1.3-HEI recognition</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* UGC DEB Recognition */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-aemet-blue to-aemet-navy text-white p-6">
            <div className="flex items-center gap-3">
              <GraduationCap className="h-6 w-6" />
              <h2 className="text-2xl font-bold">UGC DEB Recognition</h2>
            </div>
          </div>
          <div className="p-6">
            <div className="mb-6">
              <h4 className="font-semibold text-aemet-navy mb-2">Recognized under UGC (ODL/OL) Regulations</h4>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                Yes
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-aemet-navy">Year</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-aemet-navy">Regulations</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-aemet-navy">Letter No</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-aemet-navy">Date</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-aemet-navy">File</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">2023-24</td>
                    <td className="border border-gray-300 px-4 py-3">DEB_ODL_OL_2020</td>
                    <td className="border border-gray-300 px-4 py-3">F.No.30-30/2024 (DEB-II), F.No.31-5/2024 (DEB-II)</td>
                    <td className="border border-gray-300 px-4 py-3">02-11-2025</td>
                    <td className="border border-gray-300 px-4 py-3">
                      <a href="/pdfs/1.4-UGC_DEB_Approval.pdf" target="_blank" rel="noopener noreferrer" className="text-aemet-blue hover:underline inline-flex items-center gap-1">
                        <FileText className="h-4 w-4" />
                        <span>1.4-UGC_DEB_Approval</span>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">2026-27</td>
                    <td className="border border-gray-300 px-4 py-3">AICTE EOA</td>
                    <td className="border border-gray-300 px-4 py-3">—</td>
                    <td className="border border-gray-300 px-4 py-3">—</td>
                    <td className="border border-gray-300 px-4 py-3">
                      <a href="/pdfs/AICTE-EOA-2026-27.pdf" target="_blank" rel="noopener noreferrer" className="text-aemet-blue hover:underline inline-flex items-center gap-1">
                        <FileText className="h-4 w-4" />
                        <span>AICTE-EOA-2026-27</span>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">2023-24</td>
                    <td className="border border-gray-300 px-4 py-3">CIQA Report</td>
                    <td className="border border-gray-300 px-4 py-3">—</td>
                    <td className="border border-gray-300 px-4 py-3">—</td>
                    <td className="border border-gray-300 px-4 py-3">
                      <a href="/pdfs/CIQA-2023-24.pdf" target="_blank" rel="noopener noreferrer" className="text-aemet-blue hover:underline inline-flex items-center gap-1">
                        <FileText className="h-4 w-4" />
                        <span>CIQA-2023-24</span>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">2024-25</td>
                    <td className="border border-gray-300 px-4 py-3">CIQA Report</td>
                    <td className="border border-gray-300 px-4 py-3">—</td>
                    <td className="border border-gray-300 px-4 py-3">—</td>
                    <td className="border border-gray-300 px-4 py-3">
                      <a href="/pdfs/CIQA-2024-25.pdf" target="_blank" rel="noopener noreferrer" className="text-aemet-blue hover:underline inline-flex items-center gap-1">
                        <FileText className="h-4 w-4" />
                        <span>CIQA-2024-25</span>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* NAAC Details */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-aemet-blue to-aemet-navy text-white p-6">
            <div className="flex items-center gap-3">
              <GraduationCap className="h-6 w-6" />
              <h2 className="text-2xl font-bold">NAAC Details</h2>
            </div>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-aemet-navy mb-1">Accredited by NAAC?</h4>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    Yes
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-aemet-navy mb-1">Grade</h4>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    A
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-aemet-navy mb-1">Score</h4>
                  <p className="text-gray-700 font-medium">3.13</p>
                </div>
                <div>
                  <h4 className="font-semibold text-aemet-navy mb-1">Validity</h4>
                  <p className="text-gray-700">12-09-2026</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-aemet-navy mb-1">Document</h4>
                  <a href="/pdfs/1.5-NAAC_Certificate.pdf" target="_blank" rel="noopener noreferrer" className="text-aemet-blue hover:underline inline-flex items-center gap-1">
                    <FileText className="h-4 w-4" />
                    <span>1.5-NAAC Certificate</span>
                  </a>
                </div>
                <div>
                  <h4 className="font-semibold text-aemet-navy mb-1">Year of Assessment</h4>
                  <p className="text-gray-700">2021</p>
                </div>
                <div>
                  <h4 className="font-semibold text-aemet-navy mb-1">Valid for July-Aug 2025 session?</h4>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    Yes
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Proposed Programmes */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-aemet-blue to-aemet-navy text-white p-6">
            <div className="flex items-center gap-3">
              <GraduationCap className="h-6 w-6" />
              <h2 className="text-2xl font-bold">Proposed Programmes</h2>
            </div>
          </div>
          <div className="p-6 space-y-8">
            {/* Programme 1 */}
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-aemet-navy mb-4">Programme 1</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-aemet-navy mb-1">Name</h4>
                    <p className="text-gray-700">Bachelor of Commerce (General)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-aemet-navy mb-1">Mode</h4>
                    <p className="text-gray-700">Both (ODL & OL)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-aemet-navy mb-1">Year</h4>
                    <p className="text-gray-700">2025-26</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-aemet-navy mb-1">Level</h4>
                    <p className="text-gray-700">UG</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-aemet-navy mb-1">Session</h4>
                    <p className="text-gray-700">July Onwards</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-aemet-navy mb-1">Eligibility</h4>
                    <p className="text-gray-700">10+2</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-aemet-navy mb-1">Duration</h4>
                    <p className="text-gray-700">3 years</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-aemet-navy mb-1">Department</h4>
                    <p className="text-gray-700">Department of Commerce</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Programme 2 */}
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-aemet-navy mb-4">Programme 2</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-aemet-navy mb-1">Name</h4>
                    <p className="text-gray-700">Bachelor of Business Administration (NA)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-aemet-navy mb-1">Mode</h4>
                    <p className="text-gray-700">Both (ODL & OL)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-aemet-navy mb-1">Year</h4>
                    <p className="text-gray-700">2025-26</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-aemet-navy mb-1">Level</h4>
                    <p className="text-gray-700">UG</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-aemet-navy mb-1">Session</h4>
                    <p className="text-gray-700">July Onwards</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-aemet-navy mb-1">Eligibility</h4>
                    <p className="text-gray-700">10+2</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-aemet-navy mb-1">Duration</h4>
                    <p className="text-gray-700">3 years</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-aemet-navy mb-1">Department</h4>
                    <p className="text-gray-700">Department of Management Studies</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Programme 3 */}
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-aemet-navy mb-4">Programme 3</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-aemet-navy mb-1">Name</h4>
                    <p className="text-gray-700">Master of Business Administration (Shipping & Logistics Management)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-aemet-navy mb-1">Mode</h4>
                    <p className="text-gray-700">Both (ODL & OL)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-aemet-navy mb-1">Year</h4>
                    <p className="text-gray-700">2025-26</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-aemet-navy mb-1">Level</h4>
                    <p className="text-gray-700">PG</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-aemet-navy mb-1">Session</h4>
                    <p className="text-gray-700">July Onwards</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-aemet-navy mb-1">Eligibility</h4>
                    <p className="text-gray-700">Bachelor's</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-aemet-navy mb-1">Duration</h4>
                    <p className="text-gray-700">2 years</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-aemet-navy mb-1">Department</h4>
                    <p className="text-gray-700">AMET Business School</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </Layout>
  );
};

export default ODLMandatoryDisclosure;