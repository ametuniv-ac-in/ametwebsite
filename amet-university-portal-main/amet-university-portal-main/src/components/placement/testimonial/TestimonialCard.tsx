
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Quote } from 'lucide-react';
import { Testimonial } from '@/data/testimonials/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  isExpanded?: boolean;
  toggleExpand?: (id: string) => void;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  testimonial, 
  isExpanded = false, 
  toggleExpand = () => {} 
}) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col border border-gray-200 hover:border-aemet-blue/30 transition-all duration-300 hover:shadow-md">
      <div className="bg-gradient-to-r from-aemet-navy to-aemet-blue p-4 text-white flex items-center space-x-4">
        <Avatar className="h-16 w-16 border-2 border-white">
          {testimonial.image ? (
            <AvatarImage src={testimonial.image} alt={testimonial.name} />
          ) : (
            <AvatarFallback className="bg-aemet-blue text-white">
              {testimonial.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          )}
        </Avatar>
        <div className="flex-1">
          <h3 className="font-semibold text-lg">{testimonial.name}</h3>
          <p className="text-sm text-white/80">{testimonial.program} ({testimonial.year})</p>
          <p className="text-sm font-medium">{testimonial.company}</p>
        </div>
      </div>
      
      <CardContent className="p-5 flex-grow flex flex-col">
        <div className="flex items-start mb-3">
          <Quote className="h-6 w-6 text-aemet-blue/60 mr-2 flex-shrink-0 mt-1" />
          <p className={`text-gray-700 ${isExpanded ? '' : 'line-clamp-6'}`}>
            {testimonial.quote}
          </p>
        </div>
        <div className="mt-auto pt-3">
          <Button 
            variant="outline" 
            className="w-full border-aemet-blue text-aemet-blue hover:bg-aemet-blue hover:text-white"
            onClick={() => toggleExpand(testimonial.id)}
          >
            {isExpanded ? 'Show Less' : 'Read More'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
