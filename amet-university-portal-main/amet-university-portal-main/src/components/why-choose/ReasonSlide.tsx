
import React from 'react';
import { cn } from '@/lib/utils';
import { Reason } from './whyChooseData';
import ReasonPointList from './ReasonPointList';

interface ReasonSlideProps {
  reason: Reason;
  direction: 'right' | 'left';
  isVisible: boolean;
}

const ReasonSlide: React.FC<ReasonSlideProps> = ({ reason, direction, isVisible }) => {
  return (
    <div className="w-full flex-shrink-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className={cn(
          "transition-all duration-700 delay-100",
          isVisible ? "opacity-100" : "opacity-0 translate-y-10",
          direction === 'right' ? "lg:order-1" : "lg:order-2"
        )}>
          <div className="relative overflow-hidden rounded-xl">
            <img
              src={reason.imageUrl}
              alt={reason.title}
              className="w-full h-[300px] md:h-[400px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
        <div className={cn(
          "transition-all duration-700 delay-300",
          isVisible ? "opacity-100" : "opacity-0 translate-y-10",
          direction === 'right' ? "lg:order-2" : "lg:order-1"
        )}>
          <h4 className="text-2xl md:text-3xl font-bold text-amet-navy mb-4">
            {reason.title}
          </h4>
          <p className="text-gray-600 mb-6 text-lg">
            {reason.description}
          </p>
          <ReasonPointList points={reason.points} />
        </div>
      </div>
    </div>
  );
};

export default ReasonSlide;
