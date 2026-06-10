
import React from 'react';
import { HeartHandshake } from 'lucide-react';
import ScholarshipCard from './ScholarshipCard';

const JanakiramanScholarship = () => {
  return (
    <ScholarshipCard
      title="Shree Janakiraman Scholarship"
      icon={<HeartHandshake />}
      color="navy"
    >
      <p className="mb-4 text-gray-700">
        AMET University is offering fees concessions to the Students from economically backward family who are not affordable to pay the fees regularly. Whenever the request for concession received from the Student and the same, submitted to Vice Chancellor for consideration.
      </p>
      
      <p className="mb-4 text-gray-700">
        After a review of the application case by case, the application may place before the committee for approval and sanction the eligible amount. Candidate family annual income should not exceed Rs.2.00 lakhs. The Students who deserved to get financial help from the management may awarded this scholarship in the name of Shree Janakiraman.
      </p>
    </ScholarshipCard>
  );
};

export default JanakiramanScholarship;
