
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Department } from '@/components/program/ProgramTypeDefinitions';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

interface DepartmentCardsProps {
  departments: Department[];
  facultyId: string;
}

const DepartmentCards: React.FC<DepartmentCardsProps> = ({ departments, facultyId }) => {
  if (!departments || departments.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No departments found for this faculty.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      {departments.map((dept) => {
        const DeptIcon = dept.icon;
        // Default image if not provided
        const deptImage = dept.image || 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500&q=80';
        
        return (
          <div 
            key={dept.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
          >
            <div className="relative h-40 overflow-hidden">
              <img 
                src={deptImage} 
                alt={dept.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <div className="flex items-center mb-2">
                    {DeptIcon && <DeptIcon className="h-5 w-5 mr-2" />}
                    <h3 className="font-bold text-lg">{dept.name}</h3>
                  </div>
                  <p className="text-sm text-white/80 line-clamp-2">{dept.description}</p>
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-gray-100">
              <div className="flex items-center justify-between text-sm">
                <div className="text-gray-600">
                  <span className="font-medium">{dept.courses?.length || 0}</span> Programs
                </div>
                <Link 
                  to={`/faculty/${facultyId}/department/${dept.id}`}
                  className="text-aemet-blue font-medium flex items-center"
                >
                  View Details <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DepartmentCards;
