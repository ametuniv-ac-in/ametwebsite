
import React, { useState } from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useIsMobile } from '@/hooks/use-mobile';
import { UserPlus, MessageCircle, MapPin, ArrowRight } from 'lucide-react';

interface HeroSlide {
  id: number;
  videoType: 'local' | 'youtube';
  videoUrl: string;
  title: string;
  subtitle: string;
}

const slides: HeroSlide[] = [
  {
    id: 1,
    videoType: 'youtube',
    videoUrl: "https://www.youtube.com/embed/zPgZAgsOJQs?si=8mVqhYprmCAaYcxY&autoplay=1&mute=1&controls=0&start=20&modestbranding=1&showinfo=0",
    title: "Welcome to AMET University",
    subtitle: "Where Global Leaders Are Made"
  }
];

const HeroSlider = () => {
  const [currentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const isMobile = useIsMobile();

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };

  return (
    <div className="relative w-full overflow-hidden" style={{ height: "75vh" }}>
      {/* Video Slide - Visible only on desktop */}
      <div
        key={slides[0].id}
        className="absolute inset-0 z-10 opacity-100"
        onTransitionEnd={handleTransitionEnd}
      >
        {/* Mobile Background - Gradient effect instead of solid color */}
        {isMobile && (
          <div className="absolute inset-0 bg-gradient-to-br from-aemet-navy via-aemet-navy/90 to-aemet-blue/70 z-20"></div>
        )}
        
        {/* Desktop Video Background - Hidden on mobile */}
        {!isMobile && (
          <>
            <div className="absolute inset-0 bg-hero-pattern z-20"></div>
            <div className="absolute inset-0 w-full h-full overflow-hidden">
            <iframe 
                src={slides[0].videoUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute w-[150%] h-[150%] object-cover"
                style={{ 
                  border: 'none',
                  position: 'absolute',
                  top: '-25%',
                  left: '-25%',
                  width: '150%',
                  height: '150%',
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              ></iframe>
            </div>
          </>
        )}
        
        {/* Content - Always visible */}
        <div className="absolute inset-0 flex items-center z-30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl translate-y-0 opacity-100 transition-all duration-1000">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                {slides[0].title}
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8">
                {slides[0].subtitle}
              </p>
              
              {/* Mobile Menu Items */}
              {isMobile ? (
                <div className="flex flex-col gap-4">
                  <a 
                    href="#faculties" 
                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-medium py-3 px-6 rounded-md transition-colors inline-flex items-center justify-center"
                  >
                    Explore Programs
                  </a>
                  
                  <div className="grid grid-cols-3 gap-3 mt-2">
                    <a 
                      href="/application-forms" 
                      className="bg-white/15 backdrop-blur-sm hover:bg-white/25 text-white py-3 px-4 rounded-md transition-colors flex flex-col items-center text-center"
                    >
                      <UserPlus className="h-5 w-5 mb-1" />
                      <span className="text-sm">Apply for Admissions</span>
                    </a>
                    
                    <a 
                      href="#chat" 
                      className="bg-white/15 backdrop-blur-sm hover:bg-white/25 text-white py-3 px-4 rounded-md transition-colors flex flex-col items-center text-center"
                    >
                      <MessageCircle className="h-5 w-5 mb-1" />
                      <span className="text-sm">Chat with Us</span>
                    </a>
                    
                    <a 
                      href="#visit" 
                      className="bg-white/15 backdrop-blur-sm hover:bg-white/25 text-white py-3 px-4 rounded-md transition-colors flex flex-col items-center text-center"
                    >
                      <MapPin className="h-5 w-5 mb-1" />
                      <span className="text-sm">Visit Our Campus</span>
                    </a>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="#faculties" 
                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-medium py-3 px-6 rounded-md transition-colors inline-flex items-center justify-center"
                  >
                    Explore Programs
                  </a>
                  <a 
                    href="/application-forms" 
                    className="bg-aemet-blue text-white hover:bg-white hover:text-aemet-blue transition-colors duration-300 py-3 px-6 rounded-md font-medium inline-flex items-center justify-center shadow-sm hover:shadow transform hover:-translate-y-1"
                  >
                    Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
