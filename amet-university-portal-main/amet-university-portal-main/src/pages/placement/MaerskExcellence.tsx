
import React from 'react';
import PlacementLayout from '@/components/placement/PlacementLayout';
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const MaerskExcellence = () => {
  return (
    <PlacementLayout title="A.P Moller - Maersk Centre of Excellence">
      <div className="container mx-auto py-4">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          {/* Header with Logo */}
          <div className="flex flex-col md:flex-row gap-8 mb-8 items-center">
            <div className="md:w-1/4">
              <img 
                src="/lovable-uploads/44a632ba-ebcf-4df1-8cdc-2f9504f3b827.png" 
                alt="Maersk Logo" 
                className="w-full h-auto max-w-xs mx-auto"
              />
            </div>
            <div className="md:w-3/4">
              <h1 className="text-2xl md:text-3xl font-bold text-aemet-navy">
                A.P. Moller-Maersk Centre Of Excellence, Chennai
              </h1>
            </div>
          </div>

          <Card className="p-6">
            {/* About Maersk Section */}
            <div className="space-y-4 text-gray-700">
              <p>
                A.P. Moller – Maersk is an integrated container logistics company that is connecting and simplifying 
                trade to help its customers grow and thrive. With a dedicated team of over 76,000, operating in 130 
                countries; Maersk goes all the way to enable global trade for a growing world. Regardless of the 
                industry, the commodity, or the key markets, Maersk has solutions that offer both small and large 
                businesses the opportunity to grow. Maersk serves its customers with frequent departures on all major 
                trade lanes and inland services for a true end-to-end experience. As the world's largest container 
                shipping company, Maersk moves 12 million containers every year delivers to every corner of the globe. 
                Maersk offers strong, global inland services via truck, barge or rail to take the cargo from factory 
                door to the store door. Maersk is focussing on solving supply chain needs from end to end, taking the 
                complexity out of container shipping for the customer. Lastly, Maersk is also offering range of 
                freight forwarding solutions too.
              </p>
            </div>
            
            <Separator className="my-6" />
            
            {/* AMET & Maersk Partnership Section */}
            <h2 className="text-xl font-semibold text-aemet-blue mb-4">AMET & Maersk Partnership</h2>
            
            <div className="space-y-4 text-gray-700">
              <p>
                AMET has the proud privilege of having a close association with A.P. Moller – Maersk for the last 20 
                years and recruited more than 2500 cadets, and has a distinct avenue in employing the products of AMET 
                to its commercial establishment.
              </p>
              
              <p>
                In order to perpetuate the prevailing relationship of more than two decades between Maersk and AMET, 
                an exclusive Centre has been established in the name of "A.P. Moller – Maersk Centre of Excellence" 
                partnering with AMET, which would serve as an exclusive and only one in India of A.P. Moller – Maersk 
                to provide training to the admitted cadets and subsequent placements.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </PlacementLayout>
  );
};

export default MaerskExcellence;
