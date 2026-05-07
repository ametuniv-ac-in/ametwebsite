
import React from 'react';
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Department } from "@/data/faculties/types";
import { Faculty } from "@/data/faculties";

interface ProgramsListProps {
  faculty: {
    id: string;
    name: string;
    color: string;
    icon: React.ElementType;
    programs: string[];
  };
  departments: Department[];
  category?: string;
}

const ProgramsList = ({ faculty, departments, category }: ProgramsListProps) => {
  // Filter departments for this faculty that have courses in this category
  const departmentsToShow = departments.filter(dept => 
    dept.courses.some(course => 
      faculty.programs.includes(course.name) && (!category || course.category === category)
    )
  );
  
  // If no departments to show, return null
  if (departmentsToShow.length === 0) return null;
  
  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
        <div className="flex items-center">
          <div 
            className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
            style={{ backgroundColor: faculty.color }}
          >
            <faculty.icon className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-xl md:text-2xl font-semibold text-aemet-navy">
            {faculty.name}
          </h2>
        </div>
        <Link 
          to={`/faculty/${faculty.id}`}
          className="text-sm text-aemet-blue hover:text-aemet-navy flex items-center gap-1 font-medium"
        >
          View Faculty Details
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
      
      <div className="grid grid-cols-1 gap-4 pl-0 md:pl-13">
        {departmentsToShow.map(dept => (
          <Card key={`${dept.id}-${category || 'all'}`} className="overflow-hidden hover:shadow-md transition-shadow">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 border-b">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-aemet-navy">{dept.name}</h3>
                <Link 
                  to={`/faculty/${faculty.id}/department/${dept.id}`}
                  className="text-xs text-aemet-blue hover:text-aemet-navy flex items-center gap-1"
                >
                  View Department
                  <ChevronRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
            <CardContent className="p-0">
              <ul className="divide-y">
                {dept.courses
                  .filter(course => 
                    faculty.programs.includes(course.name) && 
                    (!category || course.category === category)
                  )
                  .map(course => (
                    <li key={course.id} className="p-4 hover:bg-aemet-blue/5 transition-colors border-l-4 border-transparent hover:border-aemet-blue">
                      <Link 
                        to={`/faculty/${faculty.id}/department/${dept.id}/program/${course.id}`}
                        className="flex items-center justify-between group"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <span className="font-semibold text-aemet-navy group-hover:text-aemet-blue transition-colors">
                              {course.name}
                            </span>
                            {!category && (
                              <Badge className="bg-aemet-blue/10 text-aemet-blue hover:bg-aemet-blue/20 border-aemet-blue/20">
                                {course.category}
                              </Badge>
                            )}
                          </div>
                          <div className="text-sm text-gray-600">
                            {course.duration} • {course.admission} Admission
                          </div>
                        </div>
                        <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-aemet-blue group-hover:translate-x-1 transition-all flex-shrink-0 ml-2" />
                      </Link>
                    </li>
                  ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProgramsList;
