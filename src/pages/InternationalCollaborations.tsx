import React from 'react';
import Layout from '@/components/Layout';
import { Separator } from "@/components/ui/separator";
import { Globe, Users } from "lucide-react";

const InternationalCollaborations = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-5xl mx-auto pt-28 md:pt-32">
          {/* Hero Section */}
          <div className="flex items-center gap-3 mb-2">
            <Globe className="h-8 w-8 text-aemet-blue" />
            <h1 className="text-3xl md:text-4xl font-bold text-aemet-navy">International Collaborations</h1>
          </div>
          
          <Separator className="my-6" />
          
          <div className="bg-gradient-to-r from-aemet-navy/10 to-aemet-blue/10 p-6 rounded-lg mb-10 shadow-sm border border-aemet-blue/20 animate-fade-in">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="shrink-0">
                <Users className="h-12 w-12 text-aemet-navy" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-aemet-navy mb-4">Global Partnerships in Maritime Education</h2>
                <p className="text-gray-700 leading-relaxed">
                  AMET University has established strategic partnerships with world-renowned institutions to provide 
                  exceptional maritime education and global opportunities. Our international collaborations enable 
                  students to pursue advanced diplomas and degrees with leading universities in the UK and beyond.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  These partnerships offer unique pathways for academic progression, international exposure, 
                  and industry-recognized qualifications that enhance career prospects in the global maritime sector.
                </p>
              </div>
            </div>
          </div>
        <div className="space-y-8">
          {/* City of Glasgow College */}
          <section className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-200 border-b pb-2">
              City of Glasgow College
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                AMET is in collaboration with City of Glasgow college formerly known as Glasgow college of nautical studies, UK to conduct the Advanced Diploma Programmes in two parts, the first year at AMET and the second year at City of Glasgow College, UK, came into existence in 1968. It is situated on the South bank of the river Clyde, close to the center of the city of Glasgow, in Scotland U.K.
              </p>
              <p>
                The College prides itself on the quality of the education and training it provides. This training is valued for what it leads to, rather than solely being an end in itself, a fact that is exemplified by their Programmes in Maritime Studies, Engineering and Telecommunication.
              </p>
              <p>
                Academy of Maritime Education and Training (AMET) has a 24 year old relationship with City of Glasgow College, UK and thousands of graduates have come out of this association.
              </p>
              
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-3 text-slate-800 dark:text-slate-200">Programmes Offered</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Advanced Diploma in Marine Engineering (Formerly HND-ME)</li>
                  <li>Advanced Diploma in Nautical Science (Formerly HND-NS)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* South Tyneside College */}
          <section className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-200 border-b pb-2">
              South Tyneside College
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                South Tyneside College has provided education and training in South Tyneside for over 150 years. Established in 1861 as a Marine School, it has changed dramatically over the years to meet the evolving needs of both the local community and the marine industry.
              </p>
              <p>
                STC still enjoys a worldwide reputation for the quality of their marine Programmes. They are also very proud of their longstanding links with the local Borough. Today, they cater for nearly 3,000 full-time and over 5,000 part-time students who study hundreds of different Programmes and subject areas.
              </p>
              <p>
                However you will still find the same community ethos and the warm welcoming atmosphere which has always been their trademark.
              </p>
              
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-3 text-slate-800 dark:text-slate-200">Programmes Offered</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Advanced Diploma in Marine Engineering (Formerly HND-ME)</li>
                  <li>Advanced Diploma in Nautical Science (Formerly HND-NS)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* University of Strathclyde */}
          <section className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-200 border-b pb-2">
              University of Strathclyde
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                University of Strathclyde, Glasgow (USG) is Scotland's third largest university with an international reputation and outlook with students and staff from over 100 countries.
              </p>
              <p>
                The university and Faculties are investing in academic programmes that reflect a positive, also encourages it's students to play an active role in the dialogue about strategic implementation and vision for the future With an illustrious 125 year history, the department of naval architecture and marine engineering is a key provider of marine technology expertise in the UK and beyond.
              </p>
              <p>
                Ideally located in Glasgow, the university continuous to build on the city's rich heritage of shipbuilding and sea-faring, making significant contribution to national and international policy, making and advancement of the marine technology field.
              </p>
              <p>
                B.E and M.E Programmes in Naval Architecture, offered by Academy of Maritime Education and Training (AMET) Deemed to be University are accredited by the Royal Institution of Naval Architects (RINA) and the Institute of Marine Engineering, Science and Technology (IMarEST) on behalf of the Engineering Council.
              </p>
              <p>
                Academy of Maritime Education and Training (AMET) students can continue their third and fourth year of B.E Degree in Naval Architecture in the University of Strathclyde, UK and the Degree will be awarded by University of Strathclyde, UK.
              </p>
            </div>
          </section>

          {/* University of Plymouth */}
          <section className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-200 border-b pb-2">
              University of Plymouth
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                The University of Plymouth is one of the UK's most dynamic and innovative Universities – located in the heart of a great and beautiful waterfront city. With an educational history dating back to 1862, it boasts a tradition of excellence.
              </p>
              <p>
                Plymouth business school is a major provider of management education in the south West region of England.
              </p>
            </div>
          </section>
        </div>
        </div>
      </div>
    </Layout>
  );
};

export default InternationalCollaborations;