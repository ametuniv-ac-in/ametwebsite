import React from 'react';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, FileText, Heart, Bus, CreditCard, Shield, Phone, Star, BookOpen, MessageSquare, Download, Gavel } from 'lucide-react';

interface SectionItem {
  title: string;
  url?: string;
}

const StudentCorner: React.FC = () => {
  const sections = [
    {
      title: "Academic Resources",
      icon: <BookOpen className="w-5 h-5" />,
      items: [
        { title: "Circulars", url: "https://www.ametuniv.ac.in/latest-updates" },
        { title: "Student Login", url: "https://css.ametonline.com/login" },
        { title: "Student Magazine", url: "/amet-waves" },
        { title: "Minor degree, Value added programme, Skill development and MOOC courses", url: "/pdfs/Minor-Degree-CDC.pdf" },
        
        { title: "AMET - LMS", url: "https://lms.amet.edu/" }
      ] as SectionItem[]
    },
    {
      title: "Student Life & Services",
      icon: <Users className="w-5 h-5" />,
      items: [
        { title: "Health Care Centre", url: "/directorate-students-welfare/health-care" },
        { title: "Students Executive Council 2022-23", url: "/student-executive-council" },
        { title: "Bus Route", url: "/bus-route" },
        { title: "Students Counseling Centre", url: "/directorate-students-welfare/s3-centre" },
        { title: "AMET Alumni Association", url: "https://ametuniversity.com/alumni/" }
      ] as SectionItem[]
    },
    {
      title: "Financial & Payment",
      icon: <CreditCard className="w-5 h-5" />,
      items: [
        { title: "Online Payment Details", url: "/online-payment-details" },
        { title: "Guidelines for registration of students in the different Scholarship Schemes", url: "/scholarship" },
        { title: "Operating Manual for AICTE Pragati (For Girl Students) and Saksham (For Specially Abled Students) Scholarship Schemes", url: "/pdfs/National-Scholarships-Manual.pdf" }
      ] as SectionItem[]
    },
    {
      title: "Conduct & Governance",
      icon: <Shield className="w-5 h-5" />,
      items: [
        { title: "Code of Conduct", url: "/policies" },
        { title: "National Ragging Prevention Programme", url: "/anti-ragging" },
        { title: "Anti - Ragging Committee", url: "https://www.ametuniv.ac.in/anti-ragging" },
        { title: "Anti - Ragging Squad", url: "/anti-ragging-squad" }
      ] as SectionItem[]
    },
    {
      title: "Committees & Support",
      icon: <Heart className="w-5 h-5" />,
      items: [
        { title: "Committee Against Sexual Harassment", url: "/sexual-harassment" },
        { title: "SC / ST Committee", url: "/sc-st-committee" },
        { title: "Internal Complaints Committee", url: "/internal-complaints-committee" },
        { title: "Equal Opportunity Cell", url: "/equal-opportunity-cell" },
        { title: "Women Empowerment Cell", url: "/women-empowerment-cell" },
        { title: "Socio-Economically Disadvantaged Groups (SEDGs) Cell", url: "/sedg-cell" },
        { title: "Industry Institute Interaction Cell", url: "/iiic" },
        { title: "Students Grievance Redressal Mechanism", url: "/grievance-redressal" },
        { title: "Nodal Officer for Students Facilitation Services", url: "https://www.ametuniv.ac.in/directorate-students-welfare/s3-centre" }
      ] as SectionItem[]
    },
    {
      title: "Feedback & Complaints",
      icon: <MessageSquare className="w-5 h-5" />,
      items: [
        { title: "SC / ST / OBC - Discrimination Complaint Form", url: "/complaint-form" },
        { title: "Students Feedback" },
        { title: "Parents Feedback", url: "https://docs.google.com/forms/d/e/1FAIpQLSdWJkctTt7EzaexW9XglNdtzBrjYZA59AaP3c7NWY-59LueBA/viewform?usp=sf_link" }
      ] as SectionItem[]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-aemet-navy to-aemet-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Student Corner</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Your comprehensive resource center for academic support, student services, and campus life at AMET University
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-sm font-medium uppercase tracking-wider text-aemet-blue mb-2">Resources & Services</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-aemet-navy">Everything You Need for Student Success</h3>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sections.map((section, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-aemet-blue/10 rounded-lg text-aemet-blue">
                    {section.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-aemet-navy">{section.title}</h4>
                </div>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-sm text-gray-600">
                      <ArrowRight className="w-4 h-4 text-aemet-blue mt-0.5 flex-shrink-0" />
                      {item.url ? (
                        item.url.startsWith('http') ? (
                          <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-aemet-blue font-medium underline underline-offset-2 hover:text-aemet-navy transition-colors">
                            {item.title}
                          </a>
                        ) : (
                          <Link to={item.url} className="text-aemet-blue font-medium underline underline-offset-2 hover:text-aemet-navy transition-colors">
                            {item.title}
                          </Link>
                        )
                      ) : (
                        <span>{item.title}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Policies Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-aemet-navy to-aemet-blue p-4">
              <div className="flex items-center gap-3 text-white">
                <Gavel className="h-6 w-6" />
                <h2 className="text-xl font-semibold">Policies</h2>
              </div>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { title: "Anti Ragging Policy", url: "/pdfs/anti-ragging-policy.docx" },
                  { title: "Whistleblower Policy", url: "/pdfs/whistleblower-policy.docx" },
                  { title: "Anti-Harassment, Discrimination and Gender Relations Policy", url: "/pdfs/anti-harassment-policy.docx" },
                  { title: "Anti-Corruption Policy", url: "/pdfs/anti-corruption-policy.docx" },
                  { title: "Drug, Alcohol and Tobacco Policy", url: "/pdfs/drug-alcohol-tobacco-policy.docx" },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.url}
                    download
                    className="group p-4 border border-gray-200 rounded-lg hover:border-aemet-blue hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-aemet-blue flex-shrink-0" />
                      <span className="text-gray-800 group-hover:text-aemet-blue transition-colors text-sm">
                        {item.title}
                      </span>
                      <Download className="h-4 w-4 text-gray-400 group-hover:text-aemet-blue transition-colors ml-auto flex-shrink-0" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="container mx-auto px-4 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-aemet-blue/5 to-aemet-navy/5 rounded-lg p-8 text-center">
            <h4 className="text-xl font-semibold text-aemet-navy mb-4">Need Help?</h4>
            <p className="text-gray-600 mb-4">
              Our student support team is here to assist you with any questions or concerns you may have.
            </p>
            <div className="flex items-center justify-center gap-2 text-aemet-blue">
              <Phone className="w-4 h-4" />
              <span className="font-medium">Contact Student Services</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StudentCorner;
