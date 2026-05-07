
import React from 'react';
import ResearchLayout from '@/components/research/ResearchLayout';
import AcademicIntro from '@/components/research/academic/AcademicIntro';
import PhDProcessWorkflow from '@/components/research/academic/PhDProcessWorkflow';

const AcademicResearch = () => {
  return (
    <ResearchLayout title="Academic Research">
      <div className="py-6">
        <div className="max-w-4xl mx-auto">
          <AcademicIntro />
          <PhDProcessWorkflow />
        </div>
      </div>
    </ResearchLayout>
  );
};

export default AcademicResearch;
