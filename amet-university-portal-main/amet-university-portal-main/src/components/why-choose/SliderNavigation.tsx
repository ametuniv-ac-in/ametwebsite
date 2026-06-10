
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SliderNavigationProps {
  totalSlides: number;
  currentSlide: number;
  onPrevSlide: () => void;
  onNextSlide: () => void;
  onSelectSlide: (index: number) => void;
}

const SliderNavigation: React.FC<SliderNavigationProps> = ({
  totalSlides,
  currentSlide,
  onPrevSlide,
  onNextSlide,
  onSelectSlide
}) => {
  return (
    <div className="flex justify-center mt-12 space-x-2">
      <button
        onClick={onPrevSlide}
        className="p-2 rounded-full border border-amet-navy text-amet-navy hover:bg-amet-navy hover:text-white transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          onClick={() => onSelectSlide(index)}
          className={`w-3 h-3 rounded-full mx-1 transition-all ${
            currentSlide === index
              ? 'bg-amet-navy w-8'
              : 'bg-gray-300'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
      <button
        onClick={onNextSlide}
        className="p-2 rounded-full border border-amet-navy text-amet-navy hover:bg-amet-navy hover:text-white transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
};

export default SliderNavigation;
