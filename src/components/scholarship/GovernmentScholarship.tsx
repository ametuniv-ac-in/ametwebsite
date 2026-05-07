
import React from 'react';
import { Award, FileText, Users, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScholarshipCard, { 
  ScholarshipSectionTitle, 
  ScholarshipList, 
  ScholarshipListItem,
  ScholarshipSubList,
  ScholarshipSubListItem
} from './ScholarshipCard';

const GovernmentScholarship = () => {
  return (
    <ScholarshipCard
      title="Government Scholarships"
      icon={<Globe />}
      color="blue"
    >
      <div className="space-y-6">
        <div>
          <ScholarshipSectionTitle icon={<Award />}>
            Post Matric Scholarship for SC/ST/Converted Christians from SC
          </ScholarshipSectionTitle>
          
          <h4 className="text-md font-medium text-aemet-navy flex items-center mb-4">
            <Users className="h-5 w-5 mr-2 text-aemet-blue" />
            Eligibility Criteria
          </h4>
          
          <ScholarshipList>
            <ScholarshipListItem>
              Candidates belong to SC/ST/Converted Christians from SC
            </ScholarshipListItem>
            <ScholarshipListItem>
              Father's annual income should not exceed Rs.2.00 lakhs/Candidate's father's annual income should not exceed Rs.2.5 lakhs for those who are working in the Government Departments.
            </ScholarshipListItem>
          </ScholarshipList>
          
          <h4 className="text-md font-medium text-aemet-navy flex items-center mb-4">
            <FileText className="h-5 w-5 mr-2 text-aemet-blue" />
            How to Apply
          </h4>
          
          <p className="mb-4 text-gray-700">
            The candidates are informed to collect the application forms from the Administration office and submit the filled in application form along with the following testimonials:
          </p>
          
          <ScholarshipSubList>
            <ScholarshipSubListItem>Community Certificate</ScholarshipSubListItem>
            <ScholarshipSubListItem>Income Certificate</ScholarshipSubListItem>
            <ScholarshipSubListItem>
              Candidates bank details: Account No., IFS code number, MICR code number
            </ScholarshipSubListItem>
          </ScholarshipSubList>
        </div>
        
        <div>
          <ScholarshipSectionTitle icon={<Award />}>
            Post matric Scholarships by Central Government
          </ScholarshipSectionTitle>
          <p className="mb-4 text-gray-700">
            Post matric Scholarships for all students provided by Central Government.
          </p>
          <Button variant="outline" className="text-aemet-blue border-aemet-blue hover:bg-aemet-blue/10">
            Click here to apply
          </Button>
        </div>
      </div>
    </ScholarshipCard>
  );
};

export default GovernmentScholarship;
