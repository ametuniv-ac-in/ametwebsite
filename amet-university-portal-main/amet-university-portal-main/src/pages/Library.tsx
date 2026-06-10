
import React from 'react';
import LibraryLayout from '@/components/library/LibraryLayout';
import LibraryHeader from '@/components/library/LibraryHeader';
import VisionMissionSection from '@/components/library/VisionMissionSection';
import WorkingHoursSection from '@/components/library/WorkingHoursSection';
import UniquenessSection from '@/components/library/UniquenessSection';
import FloorPlanSection from '@/components/library/FloorPlanSection';
import LibraryFeaturesSection from '@/components/library/LibraryFeaturesSection';
import LibraryAtGlanceSection from '@/components/library/LibraryAtGlanceSection';
import LibraryGallerySection from '@/components/library/LibraryGallerySection';
import LibraryContactSection from '@/components/library/LibraryContactSection';
import ObjectivesSection from '@/components/library/ObjectivesSection';

const Library = () => {
  return (
    <LibraryLayout title="Library">
      <div>
        {/* Header with introduction */}
        <LibraryHeader />
        
        {/* Library at a Glance - Stats Section */}
        <div className="mt-12 mb-16">
          <LibraryAtGlanceSection />
        </div>
        
        {/* Section for Vision/Mission and Working Hours with new layout */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <VisionMissionSection />
            </div>
            <div className="lg:col-span-1">
              <WorkingHoursSection />
            </div>
          </div>
        </div>

        {/* Objectives Section - Full width */}
        <div className="mb-16">
          <ObjectivesSection />
        </div>
        
        {/* Features and Uniqueness in alternating sections */}
        <div className="space-y-16 mb-16">
          <LibraryFeaturesSection />
          <UniquenessSection />
        </div>
        
        {/* Floor Plan Section - Full width */}
        <div className="mb-16">
          <FloorPlanSection />
        </div>
        
        {/* Two-column section for Contact and Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <LibraryContactSection />
          <LibraryGallerySection />
        </div>
      </div>
    </LibraryLayout>
  );
};

export default Library;
