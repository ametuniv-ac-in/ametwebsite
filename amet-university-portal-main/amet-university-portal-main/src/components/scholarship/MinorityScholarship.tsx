
import React from 'react';
import { Award, FileText, Users } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import ScholarshipCard, { 
  ScholarshipList, 
  ScholarshipListItem,
  ScholarshipSubList,
  ScholarshipSubListItem
} from './ScholarshipCard';

const MinorityScholarship = () => {
  return (
    <ScholarshipCard
      title="Minority Community Scholarship"
      icon={<Award />}
      color="navy"
    >
      <h3 className="text-lg font-medium text-aemet-navy flex items-center mb-4">
        <Users className="h-5 w-5 mr-2 text-aemet-navy" />
        Eligibility Criteria
      </h3>
      
      <ScholarshipList>
        <ScholarshipListItem>
          Candidate belongs to Minority community
        </ScholarshipListItem>
        <ScholarshipListItem>
          Candidate's father's annual income should not exceed Rs.2.00 lakhs/Candidate's father's annual income should not exceed Rs.2.5 lakh for those who are working in the Government Departments.
        </ScholarshipListItem>
      </ScholarshipList>
      
      <h3 className="text-lg font-medium text-aemet-navy flex items-center mb-4">
        <FileText className="h-5 w-5 mr-2 text-aemet-navy" />
        How to Apply
      </h3>
      
      <p className="mb-4 text-gray-700">
        The candidates are informed to collect the application forms from the Administration Office and submit the filled in application form along with the following testimonials:
      </p>
      
      <ScholarshipSubList>
        <ScholarshipSubListItem>Community Certificate</ScholarshipSubListItem>
        <ScholarshipSubListItem>Income Certificate</ScholarshipSubListItem>
        <ScholarshipSubListItem>
          Candidates bank details: Account No., IFS code number, MICR code number
        </ScholarshipSubListItem>
      </ScholarshipSubList>
      
      <Alert className="bg-aemet-navy/5 border-aemet-navy/20 text-gray-700">
        <AlertDescription>
          After scrutiny of the filled application forms received from the candidates, the same will be submitted online to the Director of Minority, Government of Tamil Nadu. The Department will sanction the amount and credit into the candidate bank accounts.
        </AlertDescription>
      </Alert>
    </ScholarshipCard>
  );
};

export default MinorityScholarship;
