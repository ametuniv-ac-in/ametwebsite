
import React from 'react';
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Anchor, Ship, Building, Globe, GraduationCap, CheckCircle, FileCheck, AlertTriangle, ExternalLink } from "lucide-react";
import { Link } from 'react-router-dom';

const VShipsAdmission = () => {
  return (
    <Layout title="V.Ships Admission & Recruitment Drive | AMET University">
      <div className="py-16 md:py-20 lg:py-24 bg-gray-50"> 
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-100 p-6 md:p-8 rounded-lg mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-aemet-navy mb-2">
                V.Ships Admission & Recruitment Drive
              </h1>
              <p className="text-gray-600">Academic Year 2026-2027</p>
            </div>
            
            <div className="mb-8 text-center">
              <Link to="/application-forms">
                <Button size="lg" className="bg-aemet-blue hover:bg-aemet-navy text-white px-8 py-6 rounded-md text-lg">
                  Apply Now <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            
            <Card className="p-6 md:p-8 shadow-md bg-white mb-8">
              <div className="prose max-w-none">
                <h2 className="text-xl md:text-2xl font-semibold text-aemet-navy mb-4 flex items-center">
                  <Anchor className="h-6 w-6 text-aemet-blue mr-3" />
                  About AMET
                </h2>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  AMET is India's First Private Maritime University for maritime-related education, training and research and the only University from India to be a member of the International Association of Maritime Universities (IAMU). With quality, commitment, knowledge and excellence as its corner stones, AMET, through 4 schools and 2 intensive research and training centers for marine and marine related activities, serves as an ocean of knowledge for over 3400 students pursuing programs from diploma right up to Doctoral.
                </p>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  AMET had a humble beginning with just 14 cadets in 1992 but in the last 27 years, more than 10,000 graduates have passed the University's portals and are occupying high positions in Industry today. AMET continuously holds IRS for four consecutive cycles and has been recognised for its excellence by the Industry as follows:
                </p>
                
                <ul className="list-disc pl-5 mb-6 text-gray-700 space-y-2">
                  <li>AMET was awarded "Emerging Maritime University of the year" on 2013 by Ministry of Human Resource Development, Govt. of India.</li>
                  <li>AMET was awarded "Best Maritime Institute" in 2013 by Lloyd's List Middle East and Indian Subcontinent.</li>
                </ul>
                
                <p className="text-gray-700 mb-8 leading-relaxed">
                  Being a University, AMET is now future proofing its students by offering courses and minor degrees in emerging technologies and trends like AI, ML, IOT etc. We welcome you to The World of AMET.
                </p>
              </div>
            </Card>
            
            <Card className="p-6 md:p-8 shadow-md bg-white mb-8">
              <div className="prose max-w-none">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl md:text-2xl font-semibold text-aemet-navy flex items-center">
                    <Ship className="h-6 w-6 text-aemet-blue mr-3" />
                    About V.Group
                  </h2>
                  
                  <Link to="/application-forms">
                    <Button className="bg-aemet-blue hover:bg-aemet-navy text-white">
                      Apply Now <ExternalLink className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  V. Group is one of the world's largest third-party ship-manager with 600 vessels of all types, including tankers, bulk carriers, containerships, gas carriers, cruise ships and offshore vessels under their management. V. Group has access to an international network of over 44,000 seafarers, covering all areas of ship management and crewing. These colleagues on board are supported by an onshore team of over 3,000 across 60 regional offices in 30 countries.
                </p>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  V. Group not only provides a full range of ship management and marine support services to ship owners and operators around the globe, but also has the ability to blend those services together in unique combinations to meet specific customer needs. Guided by their values, they aim to deliver excellence in every area in which V. Group operates, with safety being their number one priority. To help V. Group achieve that, all the group companies and brands work interdependently, operating across different sectors, allowing V. Group to become a comprehensive supplier of maritime and offshore services around the world.
                </p>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  With over 35 years' experience in managing vessels in the shipping, cruise, energy, and defence sectors, V. Group is committed to delivering safe and compliant operations. Helping customers with specific needs and putting them at the heart of our business. V. Group is also dedicated to working towards a maritime industry free of corruption, as an active member of the Maritime Anti-Corruption Network (MACN).
                </p>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  V. Group is dedicated to and remains committed to investing in their people, their technology, and their systems, to ensure they deliver the highest quality service to their customers.
                </p>
                
                <div className="bg-aemet-lightGray p-4 rounded-md mb-6 flex items-center">
                  <Globe className="h-5 w-5 text-aemet-blue mr-2 flex-shrink-0" />
                  <p className="text-gray-700 m-0">
                    For more information about V. Group, please visit their website{" "}
                    <a 
                      href="https://vgrouplimited.com/" 
                      className="text-aemet-blue hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://vgrouplimited.com/
                    </a>
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 md:p-8 shadow-md bg-white mb-8 border-t-4 border-t-aemet-blue">
              <div className="prose max-w-none">
                <h2 className="text-xl md:text-2xl font-semibold text-aemet-navy mb-4 flex items-center">
                  <Building className="h-6 w-6 text-aemet-blue mr-3" />
                  Association of AMET & V. Group
                </h2>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  V. Group's Indian Entity, V. Ships India Pvt. Ltd., has signed an MoU with AMET in January 2025, wherein AMET and V. Group decided to collaborate on a nonexclusive basis, in the following two areas. The V.Ships Learning Academy (VSLA) under AMET Institute of Science and Technology having its address at No.121, Madura Thenpattinam, East Coast Road, Cheyyur Taluk, Mugaiyur Village, Chengalpet, Tamil Nadu - 603 305 will be established by AMET and will come into operation from the Academic year 2026-2027 onwards.
                </p>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  All proposed maritime and catering Courses will be conducted in VSLA at AMET Institute of Science and Technology at Thenpattinam during the Academic year 2026-2027. The terms of individual Courses and activities shall be mutually discussed and agreed.
                </p>
                
                <p className="text-gray-700 mb-4 leading-relaxed">
                  V.Ships (and/or Oceanic) intends to recruit the following cadets / catering candidates in each academic year. This is Subject to suitable and appropriate candidates being identified during the admission process for the following courses.
                </p>
                
                <ul className="list-none space-y-2 mb-6 pl-0">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-aemet-blue mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">B.E Marine Engineering</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-aemet-blue mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Diploma in Nautical Science</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-aemet-blue mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Electro Technical Officer</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-aemet-blue mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Certification Course for Marine Catering</span>
                  </li>
                </ul>
                
                <div className="bg-aemet-lightGray p-4 rounded-md mb-8">
                  <p className="text-gray-700 font-medium m-0 flex items-center">
                    <Ship className="h-5 w-5 text-aemet-blue mr-2 flex-shrink-0" />
                    V.Ships will provide ship on board training for the selected cadets upon successful course completion.
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 md:p-8 shadow-md bg-white mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-aemet-navy mb-4 flex items-center">
                <GraduationCap className="h-6 w-6 text-aemet-blue mr-3" />
                Eligibility Criteria
              </h2>
              
              <ul className="list-none space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-aemet-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Should be a Citizen of India.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-aemet-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">A pass in the first attempt in the Plus-two (12th Standard) or its equivalent from any recognised Board in India, with minimum 70% aggregate marks in Mathematics, Physics and Chemistry and a minimum of 60% marks each in (PCM) and at least 60% marks in English in 10th or 12th std.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-aemet-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Should be below 25 years at the time of the commencement of the course.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-aemet-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Passport is mandatory</span>
                </li>
              </ul>
              
              <h2 className="text-xl md:text-2xl font-semibold text-aemet-navy mb-4 flex items-center">
                <FileCheck className="h-6 w-6 text-aemet-blue mr-3" />
                Mode of Selection
              </h2>
              
              <ul className="list-none space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-aemet-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">To clear AMET Online CET, AMET Psychometric Test, IMU CET</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-aemet-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Aptitude test & Personal Interview by V. Ships India Pvt. Ltd.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-aemet-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Medical Fitness as per DGS norms - please check details</span>
                </li>
              </ul>
            </Card>
            
            <Alert className="bg-yellow-50 border-yellow-200 mb-8">
              <AlertTriangle className="h-5 w-5 text-yellow-600" />
              <AlertDescription className="text-gray-700 mt-2">
                <p className="font-medium mb-3">Note:</p>
                <p className="mb-4">
                  The selection for V. Ships India Pvt. Ltd. - AMET admission and recruitment is based purely on Merit. We have not appointed any agency or individual to issue admission letters for this cadetship training program. 
                </p>
                <p className="mb-4">
                  Moreover, certain agencies or individuals may demand huge sum of money or any sort of services or favors promising to get admission for this cadetship training program. If you come across any such fraudulent practices, kindly write to us at{" "}
                  <a href="mailto:office@ametuniv.ac.in" className="text-aemet-blue hover:underline">
                    office@ametuniv.ac.in
                  </a>.
                </p>
                <p>
                  Please also note that AMET University shall not be held responsible or liable for anyone dealing with such agencies or individuals as any individual/group who would have dealt with such agencies or individuals would have done so at their own risk.
                </p>
              </AlertDescription>
            </Alert>
            
            <div className="text-center mb-8">
              <Link to="/application-forms">
                <Button size="lg" className="bg-aemet-blue hover:bg-aemet-navy text-white px-8 py-6 rounded-md text-lg">
                  Apply Now <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VShipsAdmission;
