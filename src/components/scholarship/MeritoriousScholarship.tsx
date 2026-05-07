
import React from 'react';
import { GraduationCap } from 'lucide-react';
import ScholarshipCard from './ScholarshipCard';

const MeritoriousScholarship = () => {
  return (
    <ScholarshipCard
      title="Meritorious Student Scholarship"
      icon={<GraduationCap />}
      color="blue"
    >
      <p className="mb-6 text-gray-700">
        The University is awarding Meritorious Student Scholarship to the outstanding students who have secured more than 90% of marks in their Higher Secondary Examination. The eligible students will get 15% of Tuition fees as fees concession of course. The same may verified and submitted to Vice Chancellor. Candidate family annual income should not exceed Rs.2.00 lakhs. All applications may placed before the committee for recommendation and sanction.
      </p>
    </ScholarshipCard>
  );
};

export default MeritoriousScholarship;
