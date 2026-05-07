
import React, { useEffect, useState, useRef } from 'react';
import { placementRecords } from '@/data/placementRecords';
import { BriefcaseIcon, GraduationCap, Award, TrendingUp, Trophy, Handshake } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const PlacementRecords = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section 
      ref={sectionRef} 
      className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 mb-4 rounded-full bg-aemet-navy/10 text-aemet-navy text-sm font-medium">
            <Trophy className="h-4 w-4" />
            <span>Excellence in Placements</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-aemet-navy mb-6 leading-tight">
            Celebrating Our Student <span className="text-aemet-blue">Success Stories</span>
          </h2>
          
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Our graduates are making waves in prestigious companies worldwide, achieving remarkable career milestones with competitive packages
          </p>
        </div>
        
        <div className="mb-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {placementRecords.map((record, index) => (
                <CarouselItem key={record.id} className="pl-4 md:basis-1/3 lg:basis-1/6">
                  <Card 
                    className={cn(
                      "bg-white border border-gray-200 hover:border-aemet-blue/50 overflow-hidden transition-all duration-500 shadow-sm hover:shadow-md group",
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                    )}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="relative overflow-hidden bg-gradient-to-br from-aemet-navy/5 to-aemet-blue/10">
                      <AspectRatio ratio={3/4}>
                        <img 
                          src={record.imageUrl} 
                          alt={record.name} 
                          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-aemet-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                          <span className="text-white font-medium">{record.name}</span>
                        </div>
                      </AspectRatio>
                    </div>
                    
                    <CardContent className="p-5">
                      <h3 className="font-bold text-aemet-navy text-lg truncate">{record.name}</h3>
                      
                      <div className="mt-3 space-y-2 text-sm">
                        <div className="flex items-start gap-2 text-gray-700">
                          <GraduationCap className="h-4 w-4 flex-shrink-0 text-aemet-blue mt-1" />
                          <span className="line-clamp-2">{record.course}</span>
                        </div>
                        
                        <div className="flex items-start gap-2 text-gray-700">
                          <BriefcaseIcon className="h-4 w-4 flex-shrink-0 text-aemet-blue mt-1" />
                          <span className="line-clamp-2">Placed at {record.company}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 text-gray-700">
                          <TrendingUp className="h-4 w-4 flex-shrink-0 text-aemet-blue" />
                          <span className="font-semibold text-aemet-navy">{record.salary}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-center gap-2 mt-8">
              <CarouselPrevious className="relative static left-0 right-auto h-10 w-10 translate-y-0 rounded-full border-aemet-navy text-aemet-navy hover:bg-aemet-navy hover:text-white" />
              <CarouselNext className="relative static left-auto right-0 h-10 w-10 translate-y-0 rounded-full border-aemet-navy text-aemet-navy hover:bg-aemet-navy hover:text-white" />
            </div>
          </Carousel>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center justify-center p-4 mb-6 rounded-full bg-gray-100">
            <Handshake className="h-6 w-6 text-aemet-blue" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-aemet-navy mb-4">
            Partner with Industry Leaders
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Our students receive offers from over 200+ top companies each year, with competitive packages and international opportunities
          </p>
          <Button className="bg-aemet-navy hover:bg-aemet-navy/90 text-white">
            <Award className="mr-2 h-4 w-4" />
            View All Placements
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PlacementRecords;
