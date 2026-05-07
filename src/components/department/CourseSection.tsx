
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, GraduationCap, BookOpen, Microscope, Award } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ProgramDetails } from '../program/ProgramTypeDefinitions';

interface CourseSectionProps {
  courses: ProgramDetails[];
  selectedCategory: string;
  facultyId: string;
  departmentId: string;
}

const CourseSection: React.FC<CourseSectionProps> = ({
  courses,
  selectedCategory: initialCategory,
  facultyId,
  departmentId,
}) => {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  const filteredCourses = (category: 'UG' | 'PG' | 'PG Diploma' | 'Research') =>
    courses.filter(course => course.category === category);

  const availableCategories = ['UG', 'PG', 'PG Diploma', 'Research'].filter(
    category => filteredCourses(category as 'UG' | 'PG' | 'PG Diploma' | 'Research').length > 0
  );

  // Sort courses by name to ensure consistent display order
  const sortedFilteredCourses = (category: 'UG' | 'PG' | 'PG Diploma' | 'Research') => {
    return filteredCourses(category).sort((a, b) => a.name.localeCompare(b.name));
  };

  // Helper function to create a brief excerpt from the full description
  const getBriefDescription = (description: string) => {
    if (!description) return "A comprehensive program designed to prepare students for successful careers.";
    
    // Remove "About the Programme:" or similar headers and get clean content
    let cleanDescription = description
      .replace(/^About the Programme:\s*\n+/i, '')
      .replace(/^Programme Overview:\s*\n+/i, '')
      .replace(/\*\*/g, '') // Remove markdown bold markers
      .trim();
    
    // Get first paragraph (split by double newline)
    const firstParagraph = cleanDescription.split('\n\n')[0];
    
    // Find the first complete sentence - avoid matching abbreviations like B.Sc., M.Tech., Ph.D., etc.
    // Look for period followed by space and uppercase letter (start of new sentence)
    const sentenceEndMatch = firstParagraph.match(/[.!?]\s+[A-Z]/);
    
    if (sentenceEndMatch && sentenceEndMatch.index !== undefined) {
      const firstSentence = firstParagraph.substring(0, sentenceEndMatch.index + 1).trim();
      
      // If first sentence is reasonable length (under 280 chars), use it
      if (firstSentence.length <= 280 && firstSentence.length >= 50) {
        return firstSentence;
      }
    }
    
    // Fallback: Return first 200 characters at word boundary
    if (firstParagraph.length > 200) {
      const truncated = firstParagraph.substring(0, 200);
      const lastSpace = truncated.lastIndexOf(' ');
      return firstParagraph.substring(0, lastSpace).trim() + '...';
    }
    
    return firstParagraph;
  };

  const CategorySection = ({ 
    category, 
    title, 
    icon: Icon, 
    gradientClass 
  }: { 
    category: 'UG' | 'PG' | 'PG Diploma' | 'Research';
    title: string;
    icon: any;
    gradientClass: string;
  }) => (
    <div>
      <h4 className="text-lg font-semibold text-aemet-navy mb-4 flex items-center">
        <div className="w-8 h-8 rounded-full bg-aemet-blue/10 flex items-center justify-center mr-3">
          <Icon className="h-4 w-4 text-aemet-blue" />
        </div>
        {title}
      </h4>
      <div className="space-y-4">
        {sortedFilteredCourses(category).map((course, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all">
            <div className={cn("p-4 text-white", gradientClass)}>
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold">{course.name}</h4>
                <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-medium">
                  {course.category}
                </span>
              </div>
            </div>
            <div className="p-5">
              <p className="text-gray-600 mb-4">
                {getBriefDescription(course.description)}
              </p>
              <div className="grid grid-cols-1 gap-4 mb-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                    <ChevronRight className="h-4 w-4 text-aemet-blue" />
                  </div>
                  <span className="text-gray-600">Duration: {course.duration}</span>
                </div>
              </div>
              <div className="mt-4">
                <Link 
                  to={`/faculty/${facultyId}/department/${departmentId}/program/${course.id}`}
                  className="inline-flex items-center px-4 py-2 bg-aemet-blue text-white rounded-md hover:bg-aemet-navy transition-colors text-sm font-medium"
                >
                  View Complete Details
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      <h3 className="text-xl font-bold text-aemet-navy mb-4 pb-2 border-b-2 border-aemet-blue inline-block">
        <div className="flex items-center">
          <GraduationCap className="h-5 w-5 mr-2 text-aemet-blue" />
          Academic Programs
        </div>
      </h3>
      
      {availableCategories.length > 1 && (
        <div className="mb-6 flex flex-wrap gap-2">
          <button 
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-colors", 
              selectedCategory === 'all' 
                ? "bg-aemet-navy text-white" 
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            )}
            onClick={() => setSelectedCategory('all')}
          >
            All Programs
          </button>
          {availableCategories.map((category) => (
            <button 
              key={category}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors", 
                selectedCategory === category 
                  ? "bg-aemet-navy text-white" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              )}
              onClick={() => setSelectedCategory(category)}
            >
              {category === 'UG' ? 'Undergraduate' :
               category === 'PG' ? 'Postgraduate' : 
               category === 'PG Diploma' ? 'PG Diploma' : 'Research'}
            </button>
          ))}
        </div>
      )}
      
      <div className="space-y-8">
        {(selectedCategory === 'all' || selectedCategory === 'UG') && 
         filteredCourses('UG').length > 0 && (
          <CategorySection 
            category="UG" 
            title="Undergraduate Programs" 
            icon={GraduationCap}
            gradientClass="bg-gradient-to-r from-aemet-navy to-aemet-blue"
          />
        )}
        
        {(selectedCategory === 'all' || selectedCategory === 'PG') && 
         filteredCourses('PG').length > 0 && (
          <CategorySection 
            category="PG" 
            title="Postgraduate Programs" 
            icon={BookOpen}
            gradientClass="bg-gradient-to-r from-aemet-blue to-aemet-lightBlue"
          />
        )}
        
        {(selectedCategory === 'all' || selectedCategory === 'PG Diploma') && 
         filteredCourses('PG Diploma').length > 0 && (
          <CategorySection 
            category="PG Diploma" 
            title="PG Diploma Programs" 
            icon={Award}
            gradientClass="bg-gradient-to-r from-aemet-blue to-green-600"
          />
        )}
        
        {(selectedCategory === 'all' || selectedCategory === 'Research') && 
         filteredCourses('Research').length > 0 && (
          <CategorySection 
            category="Research" 
            title="Research Programs" 
            icon={Microscope}
            gradientClass="bg-gradient-to-r from-aemet-navy/90 to-purple-700"
          />
        )}
      </div>
    </div>
  );
};

export default CourseSection;
