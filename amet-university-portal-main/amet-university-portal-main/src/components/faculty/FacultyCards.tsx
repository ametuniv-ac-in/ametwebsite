
import React from 'react';
import { faculties } from '@/data/faculties';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

interface FacultyCardsProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

const FacultyCards: React.FC<FacultyCardsProps> = ({
  title = "Areas of Study",
  subtitle = "Academic Excellence",
  description = "Discover our diverse academic offerings across prestigious faculties, each offering specialized programs designed to prepare you for global success."
}) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-sm font-medium uppercase tracking-wider text-amet-blue mb-2">{subtitle}</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-amet-navy mb-4">{title}</h3>
          <p className="text-gray-600">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
          {faculties.map((faculty, index) => {
            const animationDelay = `${index * 100}ms`;
            const Icon = faculty.icon;
            
            return (
              <div 
                key={faculty.id}
                className="animate-fade-in opacity-0"
                style={{ animationDelay, animationFillMode: 'forwards' }}
              >
                <Card 
                  className="h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-t-4 overflow-hidden"
                  style={{ borderTopColor: faculty.color, backgroundColor: faculty.color + '15' }}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <Icon className="h-6 w-6 flex-shrink-0" style={{ color: faculty.color }} />
                        <h4 className="font-semibold text-foreground">{faculty.name}</h4>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                        {faculty.description}
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Link to={`/faculty/${faculty.id}`}>
                      <Button variant="ghost" size="sm" className="hover:bg-transparent" style={{ color: faculty.color }}>
                        View Faculty
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
};

export default FacultyCards;
