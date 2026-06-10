
import React from 'react';
import { FileBox } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScholarshipCard from './ScholarshipCard';

const NGOScholarship = () => {
  return (
    <ScholarshipCard
      title="NGO Scholarship"
      icon={<FileBox />}
      color="navy"
    >
      <p className="mb-4 text-gray-700">
        New Era Association of Educated Self Employed Youth (NAESEY) provides scholarships to eligible students.
      </p>
      <Button variant="outline" className="text-aemet-navy border-aemet-navy hover:bg-aemet-navy/10">
        Click Here
      </Button>
    </ScholarshipCard>
  );
};

export default NGOScholarship;
