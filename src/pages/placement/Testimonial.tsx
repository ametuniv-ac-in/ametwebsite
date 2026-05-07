
import React from 'react';
import PlacementLayout from '@/components/placement/PlacementLayout';
import TestimonialCards from '@/components/placement/testimonial/TestimonialCards';

const Testimonial = () => {
  return (
    <PlacementLayout title="Alumni Testimonials">
      <div className="container mx-auto py-4">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h1 className="text-2xl md:text-3xl font-bold text-aemet-navy mb-6 text-center">
            What Our Alumni Say About Us
          </h1>
          <p className="text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            At AMET University, we take pride in our graduates' accomplishments. Hear directly from our alumni about 
            how their education at AMET University has prepared them for successful careers in the maritime and related industries.
          </p>
          <div className="mb-10 text-center">
            <div className="inline-block h-1 w-20 bg-aemet-blue rounded"></div>
          </div>
          <TestimonialCards />
        </div>
      </div>
    </PlacementLayout>
  );
};

export default Testimonial;
