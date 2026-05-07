import React, { useState, useEffect, useCallback } from 'react';
import { GalleryEvent } from '@/data/galleryEvents';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';

interface EventDetailProps {
  event: GalleryEvent | null;
  isOpen: boolean;
  onClose: () => void;
}

const EventDetail: React.FC<EventDetailProps> = ({ event, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const isVideo = event?.videoUrl;
  
  // Get all images (combine imageUrl with images array if exists)
  const getAllImages = useCallback(() => {
    if (!event) return [];
    if (event.images && event.images.length > 0) {
      return event.images;
    }
    return [event.imageUrl];
  }, [event]);
  
  const images = getAllImages();
  const hasMultipleImages = images.length > 1;
  
  // Reset to first image when modal opens or event changes
  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0);
    }
  }, [isOpen, event]);
  
  // Keyboard navigation
  useEffect(() => {
    if (!isOpen || !hasMultipleImages || isVideo) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      } else if (e.key === 'ArrowRight') {
        setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, hasMultipleImages, images.length, isVideo]);
  
  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  
  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  
  if (!event) return null;
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-lg font-medium text-aemet-navy pr-8">{event.title}</DialogTitle>
          <DialogDescription className="sr-only">
            {isVideo ? 'Video player for event' : 'Image gallery for event'}
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-4">
          {isVideo ? (
            <div className="relative w-full aspect-video overflow-hidden rounded-lg bg-black">
              <iframe
                src={`${event.videoUrl}?autoplay=1`}
                title={event.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <>
              <div className="relative w-full h-80 overflow-hidden rounded-lg bg-muted">
                {/* Navigation Arrows */}
                {hasMultipleImages && (
                  <>
                    <button
                      onClick={goToPrevious}
                      className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      onClick={goToNext}
                      className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </>
                )}
                
                {/* Main Image */}
                <img
                  src={images[currentImageIndex]}
                  alt={`${event.title} - Image ${currentImageIndex + 1}`}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder.svg';
                  }}
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Image Counter */}
              {hasMultipleImages && (
                <div className="text-center mt-3 text-sm text-muted-foreground">
                  {currentImageIndex + 1} / {images.length}
                </div>
              )}
            </>
          )}
        </div>
        
        <DialogFooter className="mt-6">
          <Button variant="outline" onClick={onClose}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EventDetail;
