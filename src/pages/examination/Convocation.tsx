
import React from 'react';
import ExaminationLayout from '@/components/examination/ExaminationLayout';
import ConvocationCard from '@/components/examination/convocation/ConvocationCard';
import ConvocationIntro from '@/components/examination/convocation/ConvocationIntro';
import ConvocationInfo from '@/components/examination/convocation/ConvocationInfo';
import { convocations } from '@/components/examination/convocation/convocationData';

const ConvocationPage = () => {
  return (
    <ExaminationLayout title="Convocation">
      <div>
        <h1 className="text-3xl font-bold text-aemet-navy mb-6">Convocation</h1>
        
        <ConvocationIntro />
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-aemet-navy mb-4">Past Convocations</h2>
          
          {convocations.map((convocation) => (
            <ConvocationCard key={convocation.id} convocation={convocation} />
          ))}
        </div>
        
        <ConvocationInfo />
      </div>
    </ExaminationLayout>
  );
};

export default ConvocationPage;
