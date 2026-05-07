import React from 'react';
import { GraduationCap, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const PhDProgrammesOffered = () => {
  const phdPrograms = [
    { 
      id: 'business-school',
      name: 'AMET Business School',
      faculty: 'management',
      department: 'business-school'
    },
    { 
      id: 'eee-marine',
      name: 'EEE-Marine',
      faculty: 'engineering-tech',
      department: 'eee-marine'
    },
    { 
      id: 'marine-biotechnology',
      name: 'Marine Bio-Technology',
      faculty: 'life-sciences',
      department: 'marine-biotechnology'
    },
    { 
      id: 'mechanical-engineering',
      name: 'Mechanical Engineering',
      faculty: 'engineering-tech',
      department: 'mechanical-engineering'
    },
    { 
      id: 'petroleum-engineering',
      name: 'Petroleum Engineering',
      faculty: 'engineering-tech',
      department: 'petroleum-engineering'
    },
    { 
      id: 'physics',
      name: 'Physics',
      faculty: 'science-humanities',
      department: 'physics'
    },
    { 
      id: 'chemistry',
      name: 'Chemistry',
      faculty: 'science-humanities',
      department: 'chemistry'
    },
    { 
      id: 'english',
      name: 'English',
      faculty: 'science-humanities',
      department: 'english'
    },
    { 
      id: 'computer-science',
      name: 'Computer Science and Engineering',
      faculty: 'computing-sciences',
      department: 'computer-science'
    },
    { 
      id: 'marine-engineering',
      name: 'Marine Engineering',
      faculty: 'maritime',
      department: 'marine-engineering'
    },
    { 
      id: 'mathematics',
      name: 'Mathematics',
      faculty: 'science-humanities',
      department: 'mathematics'
    },
    { 
      id: 'nautical-science',
      name: 'Nautical Science',
      faculty: 'maritime',
      department: 'nautical-science'
    },
    { 
      id: 'naval-architecture',
      name: 'Naval Architecture and Offshore Engineering',
      faculty: 'engineering-tech',
      department: 'naval-architecture'
    },
    { 
      id: 'mining-engineering',
      name: 'Mining Engineering',
      faculty: 'engineering-tech',
      department: 'mining-engineering'
    },
    { 
      id: 'food-processing',
      name: 'Food Processing Technology',
      faculty: 'life-sciences',
      department: 'food-processing'
    }
  ];

  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold text-aemet-navy mb-4 flex items-center">
        <GraduationCap className="h-6 w-6 mr-2 text-aemet-blue" />
        PhD Programmes Offered
      </h2>
      <p className="text-gray-600 mb-6">
        AMET University offers doctoral programs across various disciplines. Explore our PhD programmes in the following areas:
      </p>
      
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {phdPrograms.map((program, index) => (
              <Link
                key={program.id}
                to={`/programs-offered#${program.id}`}
                className={`p-4 hover:bg-aemet-blue/5 transition-colors border-l-4 border-transparent hover:border-aemet-blue flex items-center justify-between group ${
                  index % 2 === 0 ? 'md:border-r' : ''
                } ${
                  index < phdPrograms.length - 2 ? 'border-b' : ''
                }`}
              >
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-aemet-blue/10 flex items-center justify-center mr-3">
                    <GraduationCap className="h-4 w-4 text-aemet-blue" />
                  </div>
                  <span className="font-medium text-aemet-navy group-hover:text-aemet-blue transition-colors">
                    Ph.D. {program.name}
                  </span>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-aemet-blue group-hover:translate-x-1 transition-all flex-shrink-0" />
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default PhDProgrammesOffered;
