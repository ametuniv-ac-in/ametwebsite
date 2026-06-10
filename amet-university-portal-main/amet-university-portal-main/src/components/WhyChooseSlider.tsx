
import React, { useState, useEffect, useRef } from 'react';
import { reasons } from './why-choose/whyChooseData';
import ReasonSlide from './why-choose/ReasonSlide';
import SliderNavigation from './why-choose/SliderNavigation';
import SectionHeader from './why-choose/SectionHeader';
import ReasonSlider from './why-choose/ReasonSlider';

const WhyChooseSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<'right' | 'left'>('right');
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setDirection('right');
    setCurrentSlide((prev) => (prev === reasons.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection('left');
    setCurrentSlide((prev) => (prev === 0 ? reasons.length - 1 : prev - 1));
  };

  const selectSlide = (index: number) => {
    setDirection(index > currentSlide ? 'right' : 'left');
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentSlide]);

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
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section ref={containerRef} className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader 
          subtitle="Excellence in Education" 
          title="Why Choose AMET University" 
        />

        <ReasonSlider 
          currentSlide={currentSlide}
          direction={direction}
          isVisible={isVisible}
          reasons={reasons}
        />

        <SliderNavigation 
          totalSlides={reasons.length}
          currentSlide={currentSlide}
          onPrevSlide={prevSlide}
          onNextSlide={nextSlide}
          onSelectSlide={selectSlide}
        />
      </div>
    </section>
  );
};

export default WhyChooseSlider;
