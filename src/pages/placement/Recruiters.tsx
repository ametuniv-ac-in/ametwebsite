import React from 'react';
import PlacementLayout from '@/components/placement/PlacementLayout';
import recruiters1 from '@/assets/recruiters/recruiters-1.jpg';
import recruiters2 from '@/assets/recruiters/recruiters-2.jpg';
import recruiters3 from '@/assets/recruiters/recruiters-3.jpg';

const Recruiters = () => {
  return (
    <PlacementLayout title="Our Recruiters">
      <div className="container mx-auto py-4">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-aemet-navy mb-4">
              Top Maritime Companies Recruiting from AMET
            </h1>
            <p className="text-gray-700 max-w-3xl mx-auto">
              AMET University has established strong relationships with leading shipping companies and maritime 
              organizations worldwide. Our graduates are highly sought after by prestigious employers in the maritime industry.
            </p>
          </div>
          
          <div className="space-y-6 flex flex-col items-center">
            <img src={recruiters1} alt="Recruiting companies" className="max-w-4xl w-full rounded-lg" />
            <img src={recruiters2} alt="Recruiting companies" className="max-w-4xl w-full rounded-lg" />
            <img src={recruiters3} alt="Recruiting companies" className="max-w-4xl w-full rounded-lg" />
          </div>
        </div>
      </div>
    </PlacementLayout>
  );
};

export default Recruiters;
