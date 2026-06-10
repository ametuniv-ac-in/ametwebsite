
import React from 'react';
import GalleryLayout from '@/components/gallery/GalleryLayout';
import { Separator } from '@/components/ui/separator';
import LaboratoryGallery from '@/components/gallery/laboratories/LaboratoryGallery';
import LaboratoryAccordion from '@/components/gallery/laboratories/LaboratoryAccordion';
import LaboratoryFacilities from '@/components/gallery/laboratories/LaboratoryFacilities';

const Laboratories = () => {
  return (
    <GalleryLayout 
      title="Laboratories Gallery" 
      description="Explore AMET University's state-of-the-art laboratories where students gain hands-on experience with industry-standard equipment and technology."
    >
      <LaboratoryGallery />
      
      <Separator className="my-10" />
      
      <LaboratoryAccordion />
      
      <LaboratoryFacilities />
    </GalleryLayout>
  );
};

export default Laboratories;
