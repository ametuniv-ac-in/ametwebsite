
import React from 'react';
import { User } from 'lucide-react';
import ScholarshipCard from './ScholarshipCard';

const SingleParentScholarship = () => {
  return (
    <ScholarshipCard
      title="Single Parent Scholarship"
      icon={<User />}
      color="blue"
    >
      <p className="mb-6 text-gray-700">
        Single Parents Scholarship is entitled to the students who are deserted by parents either by death or divorce and they are economically poor to offer the course fees. The eligible Students can submit the application along with death certificate, Legal heir certificate or court proceedings of the parents which ever admissible. Candidate family annual income should not exceed Rs.2.00 lakhs. The applications are verified and sanctioned 15% of tuition fees as concession through this scholarship.
      </p>
    </ScholarshipCard>
  );
};

export default SingleParentScholarship;
