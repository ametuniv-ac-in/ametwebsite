import React from 'react';
import Layout from '@/components/Layout';
import { Separator } from "@/components/ui/separator";
import { Lightbulb, Users, Target, Eye, Building2, FileDown } from "lucide-react";

const ACEII = () => {
  return (
    <Layout title="ACEII | AMET University">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-6xl mx-auto pt-28 md:pt-32">
          {/* Hero Section */}
          <div className="flex items-center gap-3 mb-2">
            <Lightbulb className="h-8 w-8 text-aemet-blue" />
            <h1 className="text-3xl md:text-4xl font-bold text-aemet-navy">AMET Chamber for Entrepreneurship Innovation and Incubation (ACEII)</h1>
          </div>
          
          <Separator className="my-6" />
          
          <div className="bg-gradient-to-r from-aemet-navy/10 to-aemet-blue/10 p-6 rounded-lg mb-10 shadow-sm border border-aemet-blue/20 animate-fade-in">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="shrink-0">
                <Lightbulb className="h-12 w-12 text-aemet-navy" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-aemet-navy mb-4">Innovation & Entrepreneurship Hub</h2>
                <p className="text-gray-700 leading-relaxed">
                  AMET Chamber for Entrepreneurship Innovation & Incubation (ACEII) fosters entrepreneurship and innovation, 
                  providing a comprehensive platform for incubating business ideas in both maritime and non-maritime sectors. 
                  We nurture young minds to think differently and support them through their most vulnerable startup period.
                </p>
              </div>
            </div>
          </div>

          {/* Coordinators Section */}
          <section className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-6 w-6 text-aemet-blue" />
              <h2 className="text-xl font-semibold text-aemet-navy">Coordinators</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-aemet-navy">Mr.P.Karthick</h3>
                <p className="text-gray-600 text-sm">Entrepreneurship Development Cell</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-aemet-navy">Dr.Anitha Rexalin Devaraj</h3>
                <p className="text-gray-600 text-sm">Entrepreneurship Development Cell</p>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 mb-8">
            <h2 className="text-xl font-semibold text-aemet-navy mb-6">About ACEII</h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                The Entrepreneurship Development Cell (EDC) [sponsored by AMET Alumni Association] was established in 2014 to motivate students to start their own business venture instead of queuing in job market. Being a maritime university the EDC primarily focuses on marine entrepreneurship. Falling in line the AMET –Innovation and Incubation centre was established in 2015 to catalyze and promote startups, to guide and support in identifying a platform for commercialization. In accordance with the suggestions of the UGC expert committee both the cells have been integrated with effect from April 2018. The cells are functioning a hand in hand to achieve the common goal under a single banner as "Centre for Entrepreneurship Innovation, and Incubation".
              </p>
              
              <p>
                AMET Chamber for Entrepreneurship Innovation & Incubation (CEII), was formed in 2024 to play a commendable role in fostering Entrepreneurship and Innovation thereby provide a platform for incubating business ideas both in maritime plus non-maritime sectors and augment its contribution to the economy. AMET CEII is aimed to be a solution in itself to trigger the young minds to think different.
              </p>
              
              <p>
                AMET Innovation and incubation centre is being shaped with a vision to inculcate entrepreneurship among the students/faculty/any young mind and technocrats from this region. The main objective of AMET Innovation and incubation centre is to build a campus filled with opportunities to scale-up to tap business opportunities. Hence, the centre is situated inside the University campus, to leverage all the resources that are available within the campus such as access to laboratory, workshops, development and testing centers, computing resources, library, internet access and above all the human resources. In addition to these resources, the centre also has a network of eminent professionals, academicians, bankers, venture capitalists and businessmen, who can extend support to these ventures. Moreover, an advisory board consisting of eminent academicians and expert professionals from diverse industries guide the students, researchers and incubates.
              </p>
            </div>
          </section>

          {/* Vision, Mission & Objectives */}
          <div className="grid md:grid-cols-1 gap-8 mb-8">
            {/* Vision */}
            <section className="bg-gradient-to-r from-aemet-navy/5 to-aemet-blue/5 rounded-lg p-6 border border-aemet-blue/20">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="h-6 w-6 text-aemet-blue" />
                <h3 className="text-lg font-semibold text-aemet-navy">Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To play a commendable role in fostering Entrepreneurship and Innovation thereby provide a platform for incubating business ideas in maritime sector and augment its contribution to the economy.
              </p>
            </section>

            {/* Mission */}
            <section className="bg-gradient-to-r from-aemet-blue/5 to-aemet-navy/5 rounded-lg p-6 border border-aemet-navy/20">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-6 w-6 text-aemet-navy" />
                <h3 className="text-lg font-semibold text-aemet-navy">Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To nurture young minds to think differently and to help them to survive and grow during the startup period when they are most vulnerable.
              </p>
            </section>
          </div>

          {/* Objectives */}
          <section className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 mb-8">
            <h2 className="text-xl font-semibold text-aemet-navy mb-6">Objectives</h2>
            
            <ul className="space-y-3 text-gray-700 list-disc list-inside">
              <li>To identify potential Entrepreneurs among the students and faculty of AMET and to create a platform for them to emerge as successful entrepreneurs.</li>
              <li>To identify new business opportunities in Maritime sector.</li>
              <li>To focus on areas with high potential for Marine Entrepreneurship, such as aqua farming, marine bio technology, shipping and logistics.</li>
              <li>To network with entrepreneurship development institutes, funding agencies, Maritime Institutions, and other industry/ academic institutions to support entrepreneurial initiatives.</li>
              <li>Encourage students to innovate by providing a conducive ecosystem.</li>
              <li>Encourage students to incubate their innovations in AMET premises.</li>
              <li>Encourage industry to incubate the ideas in AMET premises</li>
              <li>Establish tie-ups with the industry</li>
            </ul>
          </section>

          {/* Thrust Areas */}
          <section className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 mb-8">
            <h2 className="text-xl font-semibold text-aemet-navy mb-6">Thrust Areas</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-aemet-navy mb-3">Maritime Focus Areas</h3>
                <ul className="space-y-2 text-gray-700 list-disc list-inside text-sm">
                  <li>Port Connectivity</li>
                  <li>Logistics efficiency</li>
                  <li>Seafarer's effectiveness</li>
                  <li>Bio-technology and Marine Bio-technology</li>
                  <li>Ship building</li>
                  <li>Fisheries and Aquaculture Technology</li>
                  <li>Petroleum Engineering</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-aemet-navy mb-3">Technology Areas</h3>
                <ul className="space-y-2 text-gray-700 list-disc list-inside text-sm">
                  <li>IOT and cloud</li>
                  <li>Labor management efficiency idea implementation</li>
                  <li>Mechanical Engineering</li>
                  <li>Electrical Engineering</li>
                  <li>Electronics and Communication Engineering</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Institution Innovation Council */}
          <section className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="h-6 w-6 text-aemet-blue" />
              <h2 className="text-xl font-semibold text-aemet-navy">AMET - Institution Innovation Council</h2>
            </div>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Institution's Innovation Council (IIC) for Academy Of Maritime Education and Training - AMET was formed as per the prescribed format given by MHRD Innovation Cell - MIC.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4">
                <a href="#" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <h3 className="font-semibold text-aemet-navy mb-2">List of Institution Innovation Council (IIC) Members</h3>
                  <p className="text-sm text-gray-600">View complete member list</p>
                </a>
                
                <a href="#" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <h3 className="font-semibold text-aemet-navy mb-2">ARIIA Rank</h3>
                  <p className="text-sm text-gray-600">View ranking details</p>
                </a>
                
                <a href="#" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <h3 className="font-semibold text-aemet-navy mb-2">National Innovation and Startup Policy 2019</h3>
                  <p className="text-sm text-gray-600">For Students and Faculty</p>
                </a>
              </div>
            </div>
          </section>

          {/* Innovation and Incubation Centre */}
          <section className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 mb-8">
            <h2 className="text-xl font-semibold text-aemet-navy mb-6">AMET - Innovation and Incubation Centre</h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Incubation is a dynamic process of business enterprise development. Incubators nurture young firms, helping them to survive and grow during the startup period when they are most vulnerable. It speeds up the commercialization of R&D outputs and creates additional avenues of employment. Keeping this in mind, AMET University has initiated to startup an incubation centre – AMET Innovation and incubation centre to help the emerging entrepreneurs in terms of providing space, machinery, equipment, computing facilities, communication networks, start-up friendly infrastructure, individual incubation cells with common resource sharing arrangements, know-how to overcome their problems and facilitate in filing patents etc., including commercial exploitation to benefit society.
              </p>
              
              <p>
                AMET Innovation and incubation centre is aimed to be a solution in itself to trigger the young minds to think different. AMET Innovation and incubation centre is being shaped with a vision to inculcate entrepreneurship among the students/faculty/any young mind and technocrats from this region. The main objective of AMET Innovation and incubation centre is to build a campus filled with opportunities to scale-up to tap business opportunities. Hence, the centre is situated inside the University campus, to leverage all the resources that are available within the campus such as access to laboratory, workshops, development and testing centers, computing resources, library, internet access and above all the human resources. In addition to these resources, the centre also has a network of eminent professionals, academicians, bankers, venture capitalists and businessmen, who can extend support to these ventures. Moreover, an advisory board consisting of eminent academicians and expert professionals from diverse industries guide the students, researchers and incubates.
              </p>
            </div>

            <div className="mt-6">
              <a 
                href="#" 
                className="inline-flex items-center text-aemet-blue hover:text-aemet-navy transition-colors duration-200 font-medium"
              >
                <FileDown className="h-4 w-4 mr-2" />
                Application Form to Incubate - click here
              </a>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default ACEII;