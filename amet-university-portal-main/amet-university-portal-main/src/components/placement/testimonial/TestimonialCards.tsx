
import React, { useState } from 'react';
import { flattenedTestimonials, allTestimonials } from '@/data/testimonials';
import TestimonialCard from './TestimonialCard';
import TestimonialPagination from './TestimonialPagination';
import { 
  Select, 
  SelectContent, 
  SelectGroup, 
  SelectItem, 
  SelectLabel, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Testimonial } from '@/data/testimonials/types';

const TestimonialCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  
  // Filter testimonials by category if one is selected
  const filteredTestimonials = activeCategory 
    ? allTestimonials[activeCategory] || []
    : flattenedTestimonials;
    
  // Pagination config
  const testimonialsPerPage = 6;
  const indexOfLastTestimonial = currentPage * testimonialsPerPage;
  const indexOfFirstTestimonial = indexOfLastTestimonial - testimonialsPerPage;
  const currentTestimonials = filteredTestimonials.slice(indexOfFirstTestimonial, indexOfLastTestimonial);
  const totalPages = Math.ceil(filteredTestimonials.length / testimonialsPerPage);
  
  // Pagination handler
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to top of testimonial section
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Toggle expanded testimonial
  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };
  
  // Categories for filter
  const categories = [
    { value: null, label: 'All Categories' },
    { value: 'nautical', label: 'Nautical Studies' },
    { value: 'marine', label: 'Marine Engineering' },
    { value: 'naval', label: 'Naval Architecture' },
    { value: 'electrical', label: 'Electrical & Electronics' },
    { value: 'mechanical', label: 'Mechanical Engineering' },
    { value: 'management', label: 'Management Studies' }
  ];
  
  // Handle category change
  const handleCategoryChange = (value: string) => {
    setActiveCategory(value === 'all' ? null : value);
    setCurrentPage(1); // Reset to first page when category changes
    setExpandedId(null); // Collapse expanded testimonials
  };

  return (
    <div>
      {/* Category filter */}
      <div className="mb-6">
        <Select onValueChange={handleCategoryChange} defaultValue={activeCategory || 'all'}>
          <SelectTrigger className="w-full sm:w-[300px] mx-auto border-aemet-blue/30">
            <SelectValue placeholder="Filter by Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Categories</SelectLabel>
              {categories.map((category) => (
                <SelectItem 
                  key={category.value || 'all'} 
                  value={category.value || 'all'}
                >
                  {category.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      
      {/* Testimonial cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {currentTestimonials.map((testimonial: Testimonial) => (
          <TestimonialCard 
            key={testimonial.id} 
            testimonial={testimonial} 
            isExpanded={expandedId === testimonial.id}
            toggleExpand={toggleExpand}
          />
        ))}
      </div>
      
      {/* Empty state */}
      {filteredTestimonials.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No testimonials found for this category.</p>
        </div>
      )}
      
      {/* Pagination */}
      {totalPages > 1 && (
        <TestimonialPagination
          currentPage={currentPage}
          totalPages={totalPages}
          paginate={handlePageChange}
        />
      )}
    </div>
  );
};

export default TestimonialCards;
