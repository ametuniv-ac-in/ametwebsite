import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Award, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trackCTAClick } from '@/lib/gtm';

const MaritimeFoundationFloatingCard: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const handleClick = () => {
    trackCTAClick({
      ctaName: 'Maritime Foundation Awards 2026',
      ctaLocation: 'Home Floating Widget',
      ctaDestination: '/maritime-foundation',
    });
  };

  return (
    <div className="fixed bottom-6 left-4 z-20 animate-fade-in">
      <div className="relative w-72 rounded-2xl overflow-hidden shadow-2xl border border-red-900/40 bg-gradient-to-br from-[#8B0000] via-[#B71C1C] to-[#D32F2F] text-white">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 z-10 text-white/80 hover:text-white hover:bg-white/20 rounded-full p-1 transition-colors"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Decorative shimmer */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-8 w-36 h-36 bg-white/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative p-5">
          <div className="flex items-center gap-2 mb-3">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
              <Award className="h-5 w-5 text-white" />
            </div>
            <span className="inline-flex items-center gap-1 text-[11px] uppercase tracking-wider font-semibold bg-white/20 px-2 py-0.5 rounded-full">
              <Sparkles className="h-3 w-3" /> Now Open
            </span>
          </div>

          <h3 className="text-base font-bold leading-snug mb-1">
            Dr. J. Ramachandran Maritime Foundation
          </h3>
          <p className="text-sm font-semibold text-white/95 mb-2">
            AGMA Awards 2026
          </p>
          <p className="text-xs text-white/85 leading-relaxed mb-4">
            Nominations invited for Maritime Leadership & Institutional Excellence Awards. Last date: 30.05.2026.
          </p>

          <Link to="/maritime-foundation" onClick={handleClick}>
            <Button className="w-full bg-white text-[#8B0000] hover:bg-white/90 font-semibold shadow-md group">
              Apply & Details
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MaritimeFoundationFloatingCard;