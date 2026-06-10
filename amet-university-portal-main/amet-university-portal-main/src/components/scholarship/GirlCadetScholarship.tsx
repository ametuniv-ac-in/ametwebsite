
import React from 'react';
import { Users2 } from 'lucide-react';
import ScholarshipCard from './ScholarshipCard';

const GirlCadetScholarship = () => {
  return (
    <ScholarshipCard
      title="Girl Cadet Scholarship"
      icon={<Users2 />}
      color="navy"
    >
      <p className="mb-6 text-gray-700">
        In Order to encourage the girl students to pursue Marine education, the University is offering Fees concession to the female cadets/students @ 15% of Tuition fees. Candidate family annual income should not exceed Rs.2.00 lakhs. This fee concession allowed at the time of admission based on the request of the parent and the economic status of the family and the educational performance of the students.
      </p>
    </ScholarshipCard>
  );
};

export default GirlCadetScholarship;
