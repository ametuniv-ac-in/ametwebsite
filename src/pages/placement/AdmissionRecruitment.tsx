import React from 'react';
import PlacementLayout from '@/components/placement/PlacementLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const AdmissionRecruitment = () => {
  return (
    <PlacementLayout title="Admission Cum Recruitment">
      <div className="container mx-auto py-4">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-aemet-navy mb-4">
              Admission Cum Recruitment
            </h1>
            <p className="text-gray-700 max-w-3xl mx-auto">
              AMET University's unique Admission Cum Recruitment Programs offer students direct pathways to employment 
              with our partner companies, providing career assurance right from the admission stage.
            </p>
          </div>

          {/* Maersk Section */}
          <Card className="mb-10">
            <CardHeader className="bg-aemet-blue/10">
              <CardTitle className="text-xl md:text-2xl text-aemet-navy">
                A.P Moller - Maersk Admission cum Recruitment
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold text-aemet-blue mb-4">Association of AMET & MAERSK</h3>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  AMET's relationship with MAERSK is paramount and everlasting for the last 25 years. MAERSK has been 
                  recruiting AMET cadet's of B.Sc Nautical Science, B.E Marine Engineering, HND NS, HND ME, ETO and GME 
                  courses all along.
                </p>
                
                <p>
                  <strong className="text-aemet-navy">More than 2500 cadets</strong> have been recruited by MAERSK and 
                  many of them are currently occupying coveted positions in various renowned International Shipping 
                  companies as Managing Directors and CEOs.
                </p>
                
                <p>
                  During 1999-2001, AMET conducted a diploma programme in association with MAERSK by conducting DNS and 
                  DMS course with a total sponsorship by MAERSK. Also during 2005-2008, AMET conducted 3 Batches of Dual 
                  degree programme in association with MAERSK by conducting BE Marine Technology course with a total 
                  sponsorship by MAERSK. It was the first of its kind in the history of Maritime Education in India as well.
                </p>
                
                <div className="bg-aemet-gold/10 p-4 rounded-lg border-l-4 border-aemet-gold">
                  <p className="font-medium text-aemet-navy">
                    Recently MAERSK has signed an MoU with AMET to establish the <strong>Centre of Excellence of 
                    MAERSK-AMET University</strong>, which is the world's first Centre of Excellence of MAERSK at AMET 
                    University and MAERSK agreed to recruit Deck and Engine Cadets only from AMET.
                  </p>
                  <p className="mt-3 text-sm">
                    The MoU was signed by <strong>Dr. J. Ramachandran</strong>, Chancellor, AMET, Deemed to be University, 
                    Chennai and <strong>Mr. Niels H. Bruus</strong>, Head of Marine – HR, Fleet Management & Technology, 
                    A.P. Moller- Maersk A/S, Denmark.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Separator className="my-8" />

          {/* V.Ships Section */}
          <Card>
            <CardHeader className="bg-aemet-blue/10">
              <CardTitle className="text-xl md:text-2xl text-aemet-navy">
                V. Ships India Pvt. Ltd Admission and Recruitment
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold text-aemet-blue mb-4">About V.Group</h3>
              
              <div className="space-y-4 text-gray-700 mb-8">
                <p>
                  V. Group is one of the world's largest third-party ship-manager with <strong className="text-aemet-navy">600 vessels</strong> of 
                  all types, including tankers, bulk carriers, containerships, gas carriers, cruise ships and offshore 
                  vessels under their management. V. Group has access to an international network of over 
                  <strong className="text-aemet-navy"> 44,000 seafarers</strong>, covering all areas of ship management and crewing. 
                  These colleagues on board are supported by an onshore team of over <strong className="text-aemet-navy">3,000 across 
                  60 regional offices in 30 countries</strong>.
                </p>
                
                <p>
                  V. Group not only provides a full range of ship management and marine support services to ship owners 
                  and operators around the globe, but also has the ability to blend those services together in unique 
                  combinations to meet specific customer needs. Guided by their values, they aim to deliver excellence 
                  in every area in which V. Group operates, with safety being their number one priority. To help V. Group 
                  achieve that, all the group companies and brands work interdependently, operating across different 
                  sectors, allowing V. Group to become a comprehensive supplier of maritime and offshore services around 
                  the world.
                </p>
                
                <p>
                  With over <strong className="text-aemet-navy">35 years' experience</strong> in managing vessels in the shipping, cruise, energy, 
                  and defence sectors, V. Group is committed to delivering safe and compliant operations. Helping customers 
                  with specific needs and putting them at the heart of our business. V. Group is also dedicated to working 
                  towards a maritime industry free of corruption, as an active member of the Maritime Anti-Corruption 
                  Network (MACN).
                </p>
                
                <p>
                  V. Group is dedicated to and remains committed to investing in their people, their technology, and their 
                  systems, to ensure they deliver the highest quality service to their customers.
                </p>
              </div>

              <h3 className="text-lg font-bold text-aemet-blue mb-4">Association of AMET & V. Group</h3>
              
              <div className="bg-aemet-gold/10 p-4 rounded-lg border-l-4 border-aemet-gold">
                <p className="text-gray-700">
                  AMET has long time relationship with V. Ships India Pvt. V. Group's Indian Entity, 
                  <strong className="text-aemet-navy"> V. Ships India Pvt. Ltd.</strong>, has signed an MoU with AMET in 
                  <strong className="text-aemet-navy"> July 2021</strong>, wherein AMET and V. Group agreed to collaborate 
                  in the areas of Maritime Education & Training and Placement of cadets, wherein V. Ships India Pvt. Ltd. 
                  agreed to recruit Deck and Engine Cadets from AMET at the time of Admission.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PlacementLayout>
  );
};

export default AdmissionRecruitment;
