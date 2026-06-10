import React from 'react';
import ResearchLayout from '@/components/research/ResearchLayout';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const PhDEvaluationProcedures = () => {
  const procedures = [
    "AMET is following the procedures provided in the UGC Ph.D. guidelines, 2022 for evaluation of Ph.D.",
    "The research progress of the Ph.D. scholars is periodically reviewed by Doctoral Committee which contains external subject experts along with internal members.",
    "AMET has stipulated milestones for year wise progress of the Ph.D. scholars through half-yearly progress reports, publications, conference participations and course works.",
    "Course work examinations are compulsory for all Ph.D. scholars. These examinations are centrally conducted and evaluated by the Doctoral Committee.",
    "Candidates who have complied with all year wise requirements and with satisfactory research progress, publications and course works are evaluated for their eligibility to submit the synopsis to the office of Controller of Examinations.",
    "University allows only 10% of reproduced content (plagiarism) and insists 90% of the original content in the manuscripts. All the research manuscripts, synopsis and thesis are checked for plagiarism using the software TURNITIN.",
    "Synopsis is evaluated by one Indian examiner (outside Tamilnadu) and one Foreign examiner nominated by the Vice Chancellor from the panel of examiners recommended by the Doctoral Committee.",
    "Based on the evaluations of external examiners and their satisfactory comments the supervisor is permitted to conduct a pre-Ph.D. presentation at University level along with DC members by allowing the candidate to present his/her entire research work and a draft thesis.",
    "AMET accepts manuscripts for Ph.D. programme such as synopsis and Thesis containing a maximum of 90% original content and allowing only 10% reproduced contents.",
    "The candidate who successfully defends the pre-Ph.D. presentation upon the recommendations of DC is eligible to submit his/her Thesis for the Ph.D. programme.",
    "The thesis thus submitted by the candidate who fulfills the eligibility conditions is evaluated by the previously appointed examiners (One Indian and One Foreigner).",
    "Based on the satisfactory Thesis adjudication reports from the examiners (one Indian, one Foreigner and supervisor), the Ph.D. scholar is permitted to defend his/her thesis in a public viva voce examination.",
    "Ph.D. scholars who successfully complete the public viva voce examination as certified by the panel of examiners (internal examiner-supervisor and external examiner) are then recommended by the Board of Management for the award of the Degree in the Convocation."
  ];

  return (
    <ResearchLayout title="PhD Evaluation Procedures">
      <div className="py-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-aemet-navy mb-6">
            Ph.D. Evaluation Procedures
          </h1>

          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {procedures.map((procedure, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-aemet-blue flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{procedure}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </ResearchLayout>
  );
};

export default PhDEvaluationProcedures;
