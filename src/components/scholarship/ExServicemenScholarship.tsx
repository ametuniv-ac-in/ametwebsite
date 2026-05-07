
import React from 'react';
import { BadgePercent } from 'lucide-react';
import ScholarshipCard from './ScholarshipCard';

const ExServicemenScholarship = () => {
  return (
    <ScholarshipCard
      title="Ex Servicemen Scholarship"
      icon={<BadgePercent />}
      color="blue"
    >
      <p className="mb-6 text-gray-700">
        The ward of Ex-servicemen, undergoing any courses in this University can apply for the Ex-servicemen Scholarship. The application for this scholarship must be accompanied with the relevant proof of document for Ex-servicemen issued by central government. Only authorized student can apply for this scholarship. Candidate family annual income should not exceed Rs.2.00 lakhs. 15% of the tuition is allowed to the eligible student at the time of admission.
      </p>
    </ScholarshipCard>
  );
};

export default ExServicemenScholarship;
