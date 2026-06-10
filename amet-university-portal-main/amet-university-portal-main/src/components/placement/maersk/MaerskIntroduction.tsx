
import React from 'react';
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const MaerskIntroduction = () => {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold text-aemet-navy mb-4">A.P Moller - Maersk Centre of Excellence, Chennai</h2>
      
      <div className="space-y-4 text-gray-700">
        <p>
          A.P. Moller – Maersk is an integrated container logistics company that is connecting and simplifying 
          trade to help its customers grow and thrive. With a dedicated team of over 76,000, operating in 130 
          countries; Maersk goes all the way to enable global trade for a growing world.
        </p>
        
        <p>
          Regardless of the industry, the commodity, or the key markets, Maersk has solutions that offer both 
          small and large businesses the opportunity to grow. Maersk serves its customers with frequent 
          departures on all major trade lanes and inland services for a true end-to-end experience.
        </p>
        
        <p>
          As the world's largest container shipping company, Maersk moves 12 million containers every year 
          delivers to every corner of the globe. Maersk offers strong, global inland services via truck, barge 
          or rail to take the cargo from factory door to the store door.
        </p>
        
        <p>
          Maersk is focussing on solving supply chain needs from end to end, taking the complexity out of 
          container shipping for the customer. Lastly, Maersk is also offering range of freight forwarding 
          solutions too.
        </p>
        
        <Separator className="my-6" />
        
        <h3 className="text-lg font-semibold text-aemet-blue mb-3">AMET & Maersk Partnership</h3>
        
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
  );
};

export default MaerskIntroduction;
