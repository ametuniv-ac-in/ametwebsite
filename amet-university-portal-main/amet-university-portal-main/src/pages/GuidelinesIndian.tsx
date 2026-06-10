
import React from 'react';
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { GraduationCap, FileText, Check, Users, Search, ClipboardList, CreditCard, Info, Clipboard, BookOpen } from "lucide-react";

const GuidelinesIndian = () => {
  return (
    <Layout title="Guidelines for Indian Students | AMET University">
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Add extra padding at the top to push content below the navbar */}
        <div className="max-w-5xl mx-auto pt-16 md:pt-20">
          <div className="flex items-center gap-3 mb-2">
            <GraduationCap className="h-8 w-8 text-aemet-blue" />
            <h1 className="text-3xl md:text-4xl font-bold text-aemet-navy">Guidelines for Indian Students</h1>
          </div>
          
          <Separator className="my-6" />
          
          <div className="bg-gradient-to-r from-aemet-navy/10 to-aemet-blue/10 p-6 rounded-lg mb-10 shadow-sm border border-aemet-blue/20 animate-fade-in">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="shrink-0">
                <BookOpen className="h-12 w-12 text-aemet-navy" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-aemet-navy mb-4">Admission Guidelines for Indian Nationals</h2>
                <p className="text-gray-700 leading-relaxed">
                  The following guidelines outline the complete admission process for Indian nationals 
                  seeking to pursue education at AMET University. Please read all sections carefully 
                  to ensure a smooth application process.
                </p>
              </div>
            </div>
          </div>
          
          {/* Guidelines Sections */}
          <div className="space-y-8">
            {guidelineSections.map((section, index) => (
              <Card key={index} className="border-aemet-blue/20 hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold text-aemet-navy mb-4 flex items-center gap-3">
                    <section.icon className="h-6 w-6 text-aemet-blue shrink-0" />
                    <span>({section.letter}) {section.title}</span>
                  </h2>
                  
                  <div className="prose max-w-none text-gray-700">
                    {section.introduction && (
                      <p className="mb-4">{section.introduction}</p>
                    )}
                    
                    {section.items && (
                      <ul className="list-disc pl-5 space-y-2">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    )}
                    
                    {section.note && (
                      <p className="mt-3 text-sm font-medium text-gray-600 italic">{section.note}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Contact Information */}
          <div className="bg-aemet-navy text-white p-8 rounded-lg shadow-lg mt-10 animate-fade-in">
            <h3 className="text-xl font-semibold mb-4">Admission Contact Information</h3>
            <p className="mb-4">
              For any further information or clarification regarding the admission process, 
              please contact the Admissions Office:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <CreditCard className="h-5 w-5 text-aemet-blue shrink-0" />
                <p>Phone: +91 - 76677 99444</p>
              </div>
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-aemet-blue shrink-0" />
                <p>Email: admissions@ametuniv.ac.in</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

// Guidelines sections with appropriate icons
const guidelineSections = [
  {
    letter: "A",
    title: "How to Apply",
    icon: FileText,
    introduction: "Candidates seeking admission for Under Graduate / Post Graduate / GME / ETO / GP Rating / Lateral Entry offered by AMET to apply as follows:",
    items: [
      "Online Application Form available on the website, candidate can fill out the application form and make an online payment of Rs.1,250/- through Payment Gateway."
    ],
    note: "Application Form Fee once paid shall not be refunded under any circumstances."
  },
  {
    letter: "B",
    title: "Procedure to Fill the Application Form",
    icon: ClipboardList,
    items: [
      "The Application Form should be complete in all respects. To avoid rejection of your application, ensure that all uploaded documents are visible.",
      "Furnish your complete address for further communication by giving your Name and Pin code legibly in the space provided. Please note that the address that you furnish in this column shall remain unchanged and shall be used for all future correspondences with you by the University.",
      "Ensure your Mailing address, Pincode, E-mail, Telephone number with std code, and Mobile number. Please note that AMET shall not be answerable if communications do not reach you due to an incomplete or illegible address, E-mail, or Telephone number, furnished by the candidates themselves.",
      "You must quote your Application Number as reference in all your future correspondences."
    ]
  },
  {
    letter: "C",
    title: "Submission of Documents",
    icon: Clipboard,
    items: [
      "Please ensure that you keep the acknowledgment receipt of the online application form safe for future reference.",
      "Attested Photocopies of the relevant certificates and documents must be submitted along with the Application Form (For details contact: 76677 99444)"
    ]
  },
  {
    letter: "D",
    title: "Entrance Exam",
    icon: Search,
    items: [
      "The Entrance Examination will be conducted through online mode at major cities in India.",
      "Candidates seeking Admission to the undergraduate courses will be examined, based on the syllabus prescribed for Higher Secondary courses in subjects like Physics, Chemistry, and Mathematics syllabus plus English grammar, vocabulary, and Logical & Analytical reasoning.",
      "Candidates seeking Admission to the School of Management Studies will be examined, based on the Higher Secondary/Under Graduate Syllabus plus Aptitude, Reasoning, Current Affairs, and English.",
      "Candidates seeking Admission in the Post Graduate Technical Programs will be examined based on the Merit & Personal Interview by the Directors of Schools / Heads of the Department."
    ]
  },
  {
    letter: "E",
    title: "Selection Process",
    icon: Check,
    items: [
      "The candidates for Undergraduate admission will be shortlisted by preparing a Rank list based on the Marks obtained by the candidates in the Qualifying Examination together with the marks obtained by them in the Entrance Examination & Personal Interview.",
      "Those short-listed candidates (B.Sc-NS, B.E.ME, GME, ETO & GP Rating) as per ranking would be subjected to a Medical Examination, which will be carried out by the team of Doctors approved by the Directorate General of Shipping, Govt of India. The Medical Examination fee shall be Rs.1500/- and has to be borne by the candidates at the time of the Medical Exam.",
      "Selected candidates list will be displayed on the University website, once the Selection Process is duly completed. However, selected candidates will be admitted to DG-approved courses only subject to their medical fitness for specified courses, as prescribed by the Directorate General of Shipping. The Medical Examination does not apply to General courses.",
      "Admission to postgraduate courses will be granted based on the candidate's performance in the entrance examination, group discussion, and interview. The rank list for admission will be prepared based on the marks obtained by the candidate in the qualifying undergraduate examination, as well as in the entrance examinations. Once the selection process is complete, the list of selected candidates will be displayed on the university's website.",
      "The international Collaborative courses like ADNS Admission will be shortlisted by preparing a Rank list based on the marks obtained by the candidate in the Qualifying Examination together with the marks obtained by them in the Entrance Examination, Medical Fitness & Personal Interview."
    ]
  },
  {
    letter: "F",
    title: "Payment of Fee",
    icon: CreditCard,
    items: [
      "Selected candidates should pay their Partial fees within FIVE days from the Date of Publication of the Selection list and balance fees within 15 days. Payment is to be made by DD/Online/Cash."
    ],
    note: "Note: Fee remittance in the form of Cheque payment/ Direct Cash Deposit in the Bank, shall not be accepted."
  },
  {
    letter: "G",
    title: "General Information",
    icon: Info,
    items: [
      "Candidates / Parents should make their own arrangements for their stay at Chennai during the period of Admission Process."
    ]
  },
  {
    letter: "H",
    title: "Refund Policy of the University",
    icon: CreditCard,
    introduction: "The University Follows the UGC Guidelines with regard to the refund of fees."
  }
];

export default GuidelinesIndian;
