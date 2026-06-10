import React from 'react';
import Layout from '@/components/Layout';

const link = (href: string) => (
  <a href={href} className="text-blue-600 hover:underline">Click here</a>
);
const noLink = "—";

const PublicSelfDisclosure = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-aemet-navy to-aemet-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">AMET University – Public Self-Disclosure</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Comprehensive transparency and disclosure information as per UGC regulations
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* a) About HEI */}
          <section className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-200 border-b pb-2">
              a) About HEI
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-700">
                    <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left font-semibold">Item</th>
                    <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left font-semibold">Link/Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">About HEI: Overview</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">{link("/about")}</td></tr>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Act and Statutes or MoA</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><a href="/documents/MOA-2023.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Click here</a></td></tr>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Institutional Development Plan</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><a href="/documents/InstitutionalDevelopmentPlan.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Click here</a></td></tr>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Off-campus</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Awaiting for Approval</td></tr>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Accreditation / Ranking Status</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2"></td></tr>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2 pl-8">– NAAC</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><a href="/documents/10_AMET_NAAC_Cycle_2.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Click here</a></td></tr>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2 pl-8">– NBA</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><a href="/documents/NBA-Certificate.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Click here</a></td></tr>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2 pl-8">– NIRF</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">{link("/nirf")}</td></tr>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2 pl-8">– DNV - Management System Certificate (ISO 9001:2015)</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><a href="/documents/DNV-Management-System-Certificate-ISO-9001.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Click here</a></td></tr>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2 pl-8">– Environmental Management System Certificate (ISO 14001:2015)</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><a href="/documents/EMS-Certificate-ISO-14001.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Click here</a></td></tr>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Recognition / Approval (2(f), 12B, etc. as applicable)</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><a href="/documents/Recognition-2f.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Click here</a></td></tr>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">12B</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">N.A</td></tr>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Annual Reports</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><a href="/documents/Annual-Report-13th-Convocation.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Click here</a></td></tr>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Annual Accounts (Balance Sheet, Income & Expenditure, Receipts & Payments, Audit Report)</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">{link("/annual-accounts")}</td></tr>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Sponsoring Body Details (if any)</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><a href="/documents/TrustDeed.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Click here</a></td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* b) Administration */}
          <section className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-200 border-b pb-2">
              b) Administration
            </h2>
            <p className="mb-4 text-slate-600 dark:text-slate-400">Profiles with photographs and contact details</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-700">
                    <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left font-semibold">Position</th>
                    <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left font-semibold">Link</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Chancellor</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">{link("/profile/chancellor")}</td></tr>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">President</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">{link("/profile/president")}</td></tr>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Vice-Chancellor</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">{link("/profile/vice-chancellor")}</td></tr>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Registrar</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">{link("/profile/registrar")}</td></tr>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Principal</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">{link("/profile/srinivas-gopal")}</td></tr>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Finance Officer</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">{link("/finance-controller")}</td></tr>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Controller of Examination</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">{link("/examination")}</td></tr>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Chief Vigilance Officer</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">{link("/chief-vigilance-officer")}</td></tr>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Ombudsperson</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">{link("/ombudsperson")}</td></tr>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Executive Council</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">{link("/governance/executive-council")}</td></tr>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Academic Council</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">{link("/governance/academic-council")}</td></tr>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Finance Committee</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">{link("/governance/finance-committee")}</td></tr>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Internal Complaint Committee</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">{link("/sexual-harassment")}</td></tr>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Deans & Directors</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">{link("/governance/deans-directors")}</td></tr>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">School Chair Persons</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">{link("/governance/faculty-chairpersons")}</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* c) Academics */}
          <section className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-200 border-b pb-2">
              c) Academics
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-700">
                    <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left font-semibold">Item</th>
                    <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left font-semibold">Link</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Details of Academic Programs</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">{link("/programs-offered")}</td></tr>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Academic Calendar</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">{link("/academic-calendar")}</td></tr>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Statutes/Ordinances pertaining to Academics/Examinations</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><a href="/documents/AMET-CBCS-Regulations-2023.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Click here</a></td></tr>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Schools/Departments/Centres</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">{link("/faculties")}</td></tr>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Department/School/Centre wise Faculty/Staff details with photographs</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><a href="/documents/FacultyList.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Click here</a></td></tr>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">List of UGC-recognized ODL/Online Programs</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><a href="https://auol.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Click here</a></td></tr>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Internal Quality Assurance Cell (IQAC)</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">{link("/iqac")}</td></tr>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Library</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">{link("/library")}</td></tr>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Academic collaborations</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><a href="/documents/AcademicCollaborations.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Click here</a></td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* d) Admissions & Fee */}
          <section className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-200 border-b pb-2">
              d) Admissions & Fee
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-700">
                    <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left font-semibold">Item</th>
                    <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left font-semibold">Link</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Prospectus – DGS Programmes</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">{link("/prospectus")}</td></tr>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Prospectus – General Programmes</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">{link("/prospectus")}</td></tr>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Admission process and guidelines</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">{link("/admissions")}</td></tr>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Fee refund policy</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">{link("/refund-policy")}</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* e) Research */}
          <section className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-200 border-b pb-2">
              e) Research
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-700">
                    <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left font-semibold">Item</th>
                    <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left font-semibold">Link</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Research and Development Cell</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">{link("/research-development")}</td></tr>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Incubation Centre / Start-Ups / Entrepreneurship Cell</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><a href="/documents/ACEII.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Click here</a></td></tr>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Central facilities</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">{link("/gallery/laboratories")}</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* f) Student Life */}
          <section className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-200 border-b pb-2">
              f) Student Life
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-700">
                    <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left font-semibold">Item</th>
                    <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left font-semibold">Link</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Sports facilities</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">{link("/physical-education")}</td></tr>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">NCC</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><a href="/documents/NCC.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Click here</a></td></tr>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">NSS</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><a href="/documents/NSS.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Click here</a></td></tr>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Hostel</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><a href="/documents/hostel.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Click here</a></td></tr>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Placement Cell</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">{link("/placements")}</td></tr>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Student Grievance Redressal Committee (SGRC) and Ombudsperson</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">{link("/grievance-redressal")}</td></tr>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Health</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">{link("/directorate-students-welfare/health-care")}</td></tr>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Internal Complaint Committee</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">{link("/sexual-harassment")}</td></tr>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Anti-Ragging Cell</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">{link("/anti-ragging")}</td></tr>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Equal Opportunity Cell</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><a href="/documents/EOC-APPLICATION-FORM.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Click here</a></td></tr>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Socio-Economically Disadvantaged Groups Cell (SEDG)</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">{link("/sedg-cell")}</td></tr>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Facilities for differently-abled</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><a href="/documents/Facilities-DifferentlyAbledPersons.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Click here</a></td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* g) Alumni */}
          <section className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-200 border-b pb-2">
              g) Alumni
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-700">
                    <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left font-semibold">Item</th>
                    <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left font-semibold">Link</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Alumni Association</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><a href="https://ametuniversity.com/alumni/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Click here</a></td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* h) Information Corner */}
          <section className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-200 border-b pb-2">
              h) Information Corner
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-700">
                    <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left font-semibold">Item</th>
                    <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left font-semibold">Link</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">RTI: Details of Central Public Information Officer (CPIO) and Appellate Authority</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">{link("/rti")}</td></tr>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Circulars and Notices</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">{noLink}</td></tr>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Announcements</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">{link("/admissions/announcement")}</td></tr>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Newsletters</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">{link("/magazines")}</td></tr>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">News, Recent Events & Achievements</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">{link("/blog")}</td></tr>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Job Openings</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">{link("/career")}</td></tr>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Reservation Roster</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><a href="/documents/Reservation-Roster.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Click here</a></td></tr>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Study in India</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><a href="https://www.studyinindia.gov.in/admission/registrations" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Click here</a></td></tr>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Admission procedure and facilities provided to International Students</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">{link("/guidelines-international")}</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* i) Picture Gallery */}
          <section className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-200 border-b pb-2">
              i) Picture Gallery
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-700">
                    <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left font-semibold">Item</th>
                    <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left font-semibold">Link</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Infrastructure</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">{link("/gallery/infrastructure")}</td></tr>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Laboratories</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">{link("/gallery/laboratories")}</td></tr>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Videos</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">{link("/gallery/videos")}</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* j) Contact Us */}
          <section className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-200 border-b pb-2">
              j) Contact Us
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-700">
                    <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left font-semibold">Item</th>
                    <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left font-semibold">Link</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Details with Phone Number, Official Email ID, Address, Location Map</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">{link("/contact-us")}</td></tr>
                  <tr><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Telephone Directory</td><td className="border border-slate-300 dark:border-slate-600 px-4 py-2">{link("/contact-us")}</td></tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default PublicSelfDisclosure;
