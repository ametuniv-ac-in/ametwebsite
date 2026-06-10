
import React from 'react';
import { Anchor, Users2 } from 'lucide-react';
import ScholarshipCard, { ScholarshipSectionTitle } from './ScholarshipCard';

const DGShippingScholarship = () => {
  return (
    <ScholarshipCard
      title="Directorate General of Shipping (DG) Scholarship"
      icon={<Anchor />}
      color="blue"
    >
      <ScholarshipSectionTitle icon={<Users2 />}>
        Maritime Training Trust Scholarship for Female Cadets
      </ScholarshipSectionTitle>
      
      <p className="mb-6 text-gray-700">
        Maritime Training Trust (MTT) of Directorate General of Shipping, (Ministry of Shipping, Govt. of India) has announced the Financial support of Rs.1,00,000/- per annum scholarship to all Indian Woman Seafarers who are undergoing pre-sea courses in the DGS approved Maritime Training Institutes (MTIs).
      </p>
    </ScholarshipCard>
  );
};

export default DGShippingScholarship;
