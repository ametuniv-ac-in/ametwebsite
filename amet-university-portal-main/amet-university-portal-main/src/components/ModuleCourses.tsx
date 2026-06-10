
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { ChevronRight, Anchor, Wrench, Ship, ShieldCheck } from 'lucide-react';

const cardColors = [
  'bg-blue-600',
  'bg-emerald-600',
  'bg-purple-600',
  'bg-orange-600',
];

const moduleCourses = [
  { 
    id: 'gmdss',
    name: "GMDSS", 
    description: "General Operator's Certificate for Global Maritime Distress and Safety System - essential training for maritime communications.",
    path: "/faculty/maritime/department/nautical-sciences/program/gmdss",
    icon: Anchor,
  },
  { 
    id: 'eto',
    name: "Electro Technical Officer", 
    description: "Comprehensive training program for officers responsible for electrical, electronic, and control equipment on ships.",
    path: "/faculty/maritime/department/marine-engineering/program/eto",
    icon: Wrench,
  },
  { 
    id: 'gme',
    name: "Graduate Marine Engineering", 
    description: "Advanced engineering program covering marine propulsion systems, ship machinery, and maintenance protocols.",
    path: "/faculty/maritime/department/marine-engineering/program/gme",
    icon: Ship,
  },
  { 
    id: 'bst',
    name: "Basic Safety Training", 
    description: "Fundamental safety training covering personal survival, firefighting, first aid, and personal safety responsibilities.",
    path: "/faculty/maritime/department/nautical-sciences/program/basic-safety-training",
    icon: ShieldCheck,
  },
];

const ModuleCourses = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-sm font-medium uppercase tracking-wider text-amet-blue mb-2">Professional Development</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-amet-navy mb-4">Module Courses</h3>
          <p className="text-gray-600">
            Specialized short-term courses designed to enhance your maritime skills and certifications for career advancement.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {moduleCourses.map((course, index) => {
            const animationDelay = `${index * 100}ms`;
            const IconComponent = course.icon;
            
              const bgColor = cardColors[index % cardColors.length];
            
            return (
              <div 
                key={course.id}
                className="animate-fade-in opacity-0"
                style={{ animationDelay, animationFillMode: 'forwards' }}
              >
                <Card 
                  className={`h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-0 overflow-hidden ${bgColor}`}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col h-full">
                      <div className="mb-4">
                        <IconComponent className="h-8 w-8 text-white/90" />
                      </div>
                      <h4 className="font-semibold text-white mb-3">{course.name}</h4>
                      <p className="text-sm text-white/80 mb-4 line-clamp-3">
                        {course.description}
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Link to={course.path}>
                      <Button variant="ghost" size="sm" className="text-white hover:text-white hover:bg-white/20">
                        View Course
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

export default ModuleCourses;
