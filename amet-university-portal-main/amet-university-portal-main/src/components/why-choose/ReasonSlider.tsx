
import React, { useRef } from 'react';
import { Reason } from './whyChooseData';
import ReasonSlide from './ReasonSlide';

interface ReasonSliderProps {
  currentSlide: number;
  direction: 'right' | 'left';
  isVisible: boolean;
  reasons: Reason[];
}

const ReasonSlider: React.FC<ReasonSliderProps> = ({ 
  currentSlide, 
  direction, 
  isVisible,
  reasons
}) => {
  const slideRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative overflow-hidden">
      <div
        ref={slideRef}
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {reasons.map((reason) => (
          <ReasonSlide 
            key={reason.id} 
            reason={reason} 
            direction={direction} 
            isVisible={isVisible} 
          />
        ))}
      </div>
    </div>
  );
};

export default ReasonSlider;
