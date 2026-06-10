import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { faculties } from '@/data/faculties';

const FacultyProgramsOverview = () => {
  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-sm font-medium uppercase tracking-wider text-aemet-blue mb-2">
          Academic Excellence
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-aemet-navy mb-4">
          Programs by Faculty
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Browse programs organized by faculty to find the perfect fit for your academic goals
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {faculties.map((faculty) => (
          <Card 
            key={faculty.id} 
            className="hover:shadow-lg transition-all duration-300 border-2 hover:border-aemet-blue/30"
          >
            <CardContent className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: faculty.color }}
                >
                  <faculty.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-aemet-navy mb-2 leading-tight">
                    {faculty.name}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {faculty.description}
                  </p>
                </div>
              </div>
              <Button 
                asChild 
                variant="outline" 
                className="w-full group hover:bg-aemet-blue hover:text-white hover:border-aemet-blue"
              >
                <Link to={`/faculty/${faculty.id}`}>
                  View Programs
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FacultyProgramsOverview;