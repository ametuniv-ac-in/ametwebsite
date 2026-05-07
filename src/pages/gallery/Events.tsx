
import React from 'react';
import GalleryLayout from '@/components/gallery/GalleryLayout';
import { galleryEvents } from '@/data/events';
import EventsList from '@/components/gallery/events/EventsList';

const Events = () => {
  return (
    <GalleryLayout
      title="University Events Gallery"
      description="Browse through our extensive collection of university events, seminars, workshops, and celebrations. Use the filters to find specific events or search by keywords."
    >
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <EventsList events={galleryEvents} />
        </div>
      </div>
    </GalleryLayout>
  );
};

export default Events;
