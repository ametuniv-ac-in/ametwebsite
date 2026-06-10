import React from 'react';
import PlacementLayout from '@/components/placement/PlacementLayout';
import CenterIntroduction from '@/components/placement/center/CenterIntroduction';
import TrainingIntroduction from '@/components/placement/center/TrainingIntroduction';
import TrainingPrograms from '@/components/placement/center/TrainingPrograms';
import PlacementDocumentCTAs from '@/components/placement/center/PlacementDocumentCTAs';
import NeptuneMagazineSection from '@/components/placement/center/NeptuneMagazineSection';

const PlacementCenter = () => {
  return (
    <PlacementLayout title="Placements and Training">
      <div className="grid gap-6">
        <NeptuneMagazineSection />
        <CenterIntroduction />
        <TrainingIntroduction />
        <PlacementDocumentCTAs />
        <TrainingPrograms />
      </div>
    </PlacementLayout>
  );
};

export default PlacementCenter;
