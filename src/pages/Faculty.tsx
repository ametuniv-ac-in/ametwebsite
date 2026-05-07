
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { 
  faculties, 
  maritimeDepartments, 
  managementDepartments, 
  commerceDepartments, 
  lifeSciencesDepartments, 
  engineeringTechDepartments,
  scienceHumanitiesDepartments,
  aviationDepartments,
  computingSciencesDepartments,
  alliedHealthSciencesDepartments
} from '@/data/faculties';
import { Department } from '@/data/faculties';
import FacultyHeader from '@/components/faculty/FacultyHeader';
import FacultyAbout from '@/components/faculty/FacultyAbout';
import FacultyHighlights from '@/components/faculty/FacultyHighlights';
import DepartmentCards from '@/components/faculty/DepartmentCards';
import NotFoundMessage from '@/components/faculty/NotFoundMessage';
import FacultyCards from '@/components/faculty/FacultyCards';
import FloatingApplyButton from '@/components/admissions/FloatingApplyButton';
import { ArrowRight } from 'lucide-react';

const moduleCourses = [
  { name: "GMDSS", path: "/faculty/maritime/department/nautical-sciences/program/gmdss" },
  { name: "Electro Technical Officer", path: "/faculty/maritime/department/marine-engineering/program/eto" },
  { name: "Graduate Marine Engineering", path: "/faculty/maritime/department/marine-engineering/program/gme" },
  { name: "Basic Safety Training", path: "/faculty/maritime/department/nautical-sciences/program/basic-safety-training" },
];

const Faculty = () => {
  const { id } = useParams();
  
  // Find the current faculty based on the URL parameter
  const faculty = faculties.find(f => f.id === id);
  
  if (!faculty) {
    return (
      <Layout>
        <NotFoundMessage />
      </Layout>
    );
  }

  // Get the departments based on the faculty ID
  let departments: Department[] = [];
  
  if (id === 'maritime') {
    departments = maritimeDepartments as unknown as Department[];
  } else if (id === 'management') {
    departments = managementDepartments as unknown as Department[];
  } else if (id === 'commerce') {
    departments = commerceDepartments as unknown as Department[];
  } else if (id === 'life-sciences') {
    departments = lifeSciencesDepartments as unknown as Department[];
  } else if (id === 'engineering-tech') {
    departments = engineeringTechDepartments as unknown as Department[];
  } else if (id === 'science-humanities') {
    departments = scienceHumanitiesDepartments as unknown as Department[];
  } else if (id === 'aviation') {
    departments = aviationDepartments as unknown as Department[];
  } else if (id === 'computing-sciences') {
    departments = computingSciencesDepartments as unknown as Department[];
  } else if (id === 'allied-health-sciences') {
    departments = alliedHealthSciencesDepartments as unknown as Department[];
  }

  // Force re-render when faculty changes by using a key
  return (
    <Layout>
      <FacultyHeader name={faculty.name} description={faculty.description} />

      <div className="container mx-auto px-4 py-8">
        {/* About Faculty */}
        <div className="animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2">
              <FacultyAbout facultyName={faculty.name} facultyId={id || ''} />
            </div>
            <div className="lg:col-span-1">
              <FacultyHighlights facultyId={id || ''} />
            </div>
          </div>

          {/* Department cards */}
          <h2 className="text-2xl font-bold text-aemet-navy mb-6">Our Departments</h2>
          <DepartmentCards departments={departments} facultyId={id || ''} key={`dept-cards-${id}`} />
        </div>
      </div>
      
      {/* Areas of Study section */}
      <FacultyCards 
        title="Other Areas of Study" 
        subtitle="Explore More Faculties"
        description="Discover our other faculties offering a wide range of specialized programs designed to help you achieve your academic and career goals."
      />

      {/* Module Courses Section - Only show for maritime faculty */}
      {id === 'maritime' && (
        <section className="bg-muted/30 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-aemet-navy mb-6">Module Courses</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {moduleCourses.map((course) => (
                <Link
                  key={course.name}
                  to={course.path}
                  className="group bg-background border border-border rounded-lg p-5 hover:border-primary hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {course.name}
                    </span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      <FloatingApplyButton />
    </Layout>
  );
};

export default Faculty;
