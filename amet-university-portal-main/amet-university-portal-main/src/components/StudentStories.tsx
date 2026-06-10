
import React, { useRef, useState, useEffect } from 'react';
import { studentStories } from '@/data/studentStories';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const StudentStories = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const visibleCards = 3;
  const maxIndex = Math.max(0, studentStories.length - visibleCards);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-sm font-medium uppercase tracking-wider text-aemet-blue mb-2">Placements</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-aemet-navy mb-4">Celebrating Our Student Success Stories</h3>
          <p className="text-gray-600">
            Our students are making their mark in leading companies across the maritime and engineering industries.
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={cn(
              "absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg border border-gray-200 transition-all",
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-aemet-navy hover:text-white"
            )}
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className={cn(
              "absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg border border-gray-200 transition-all",
              currentIndex >= maxIndex ? "opacity-50 cursor-not-allowed" : "hover:bg-aemet-navy hover:text-white"
            )}
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden mx-10">
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
            >
              {studentStories.map((story, index) => (
                <div
                  key={story.id}
                  className={cn(
                    "flex-shrink-0 w-full md:w-[calc(33.333%-16px)] transition-all duration-700",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  )}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="bg-aemet-blue rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    {/* Congratulations Header */}
                    <div className="text-center pt-4 pb-2">
                      <h4 className="text-2xl font-script text-white font-bold italic">Congratulations</h4>
                    </div>
                    
                    {/* Student Image */}
                    <div className="flex justify-center px-4">
                      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
                        <img 
                          src={story.imageUrl} 
                          alt={story.name}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    </div>
                    
                    {/* Student Details */}
                    <div className="text-center p-4 space-y-2">
                      <h5 className="text-xl font-bold text-white">{story.name}</h5>
                      <p className="text-sm font-semibold text-aemet-blue bg-white inline-block px-3 py-1 rounded-full">
                        {story.degree}
                      </p>
                      <p className="text-sm text-white font-medium">
                        Placed in <span className="font-bold">{story.company}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  currentIndex === index ? "bg-aemet-navy w-6" : "bg-gray-300"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentStories;
