
import React from 'react';
import { BookOpen } from 'lucide-react';
import ScholarshipCard from './ScholarshipCard';

const FirstGraduateScholarship = () => {
  return (
    <ScholarshipCard
      title="First Graduate Fees Concession"
      icon={<BookOpen />}
      color="navy"
    >
      <p className="mb-6 text-gray-700">
        As per the Government order Ms:No:85/Higher Education (J2) Department dt:16.04.10, First graduate fees concession are offered to the eligible candidates at the time of admission. The candidate can submit the joint declaration of parents and candidate along with the "No graduate Certificate" issued by the Revenue authority to avail the fees concession in the first year. Candidate family annual income should not exceed Rs.2.00 lakhs. The University is offering 15% of Tuition fees as fees concession to the first graduate eligible candidate at the first year.
      </p>
    </ScholarshipCard>
  );
};

export default FirstGraduateScholarship;
