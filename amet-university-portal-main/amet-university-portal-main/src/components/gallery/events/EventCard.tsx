import React from 'react';
import { GalleryEvent } from '@/data/galleryEvents';
import { cn } from '@/lib/utils';
import { Play } from 'lucide-react';

interface EventCardProps {
  event: GalleryEvent;
  onClick: () => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, onClick }) => {
  const isVideo = !!event.videoUrl;
  
  return (
    <div 
      className={cn(
        "overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 bg-white cursor-pointer h-full flex flex-col"
      )}
      onClick={onClick}
    >
      <div className="relative h-48 overflow-hidden bg-muted">
        <img
          src={event.imageUrl}
          alt={event.title}
          loading="lazy"
          decoding="async"
          onError={(e) => {
            e.currentTarget.src = '/placeholder.svg';
          }}
          className="w-full h-full object-contain transition-transform duration-500 hover:scale-[1.02]"
        />
        {isVideo && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center shadow-lg">
              <Play className="h-7 w-7 text-white ml-1" fill="white" />
            </div>
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-sm font-medium text-aemet-navy">
          {event.title}
        </h3>
      </div>
    </div>
  );
};

export default EventCard;
