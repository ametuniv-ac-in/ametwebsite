
import React from 'react';
import { Fish, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScholarshipCard, { 
  ScholarshipSectionTitle,
  ScholarshipList, 
  ScholarshipListItem
} from './ScholarshipCard';

const FishermenScholarship = () => {
  return (
    <ScholarshipCard
      title="Fishermen Scholarship"
      icon={<Fish />}
      color="blue"
    >
      <div className="space-y-6">
        <div>
          <ScholarshipSectionTitle icon={<Users />}>
            AMET Fishermen Scholarship
          </ScholarshipSectionTitle>
          
          <ScholarshipList>
            <ScholarshipListItem>
              Candidate belongs to Fishermen community
            </ScholarshipListItem>
            <ScholarshipListItem>
              Candidate family annual income should not exceed Rs.2.00 lakhs
            </ScholarshipListItem>
            <ScholarshipListItem>
              15% of the tuition is allowed to the eligible student at the time of admission
            </ScholarshipListItem>
          </ScholarshipList>
        </div>
        
        <div>
          <ScholarshipSectionTitle icon={<Award />}>
            State Government Scholarship
          </ScholarshipSectionTitle>
          <p className="mb-4 text-gray-700">
            Fishermen Scholarship provided by State Government of Tamil Nadu.
          </p>
          <Button variant="outline" className="text-aemet-blue border-aemet-blue hover:bg-aemet-blue/10">
            Click Here
          </Button>
        </div>
      </div>
    </ScholarshipCard>
  );
};

export default FishermenScholarship;
