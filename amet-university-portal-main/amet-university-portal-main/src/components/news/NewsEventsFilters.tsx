
import React from 'react';
import { cn } from '@/lib/utils';

interface NewsEventsFiltersProps {
  selectedCategory: 'all' | 'announcement' | 'event' | 'academic';
  setSelectedCategory: (category: 'all' | 'announcement' | 'event' | 'academic') => void;
}

const NewsEventsFilters: React.FC<NewsEventsFiltersProps> = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div className="mb-8 flex justify-center">
      <div className="inline-flex bg-white rounded-full p-1 shadow-sm border border-gray-100">
        <button
          onClick={() => setSelectedCategory('all')}
          className={cn(
            "px-5 py-2 rounded-full text-sm font-medium transition-all",
            selectedCategory === 'all' 
              ? "bg-aemet-navy text-white" 
              : "text-gray-600 hover:text-aemet-navy"
          )}
        >
          All
        </button>
        <button
          onClick={() => setSelectedCategory('announcement')}
          className={cn(
            "px-5 py-2 rounded-full text-sm font-medium transition-all",
            selectedCategory === 'announcement' 
              ? "bg-aemet-navy text-white" 
              : "text-gray-600 hover:text-aemet-navy"
          )}
        >
          Announcements
        </button>
        <button
          onClick={() => setSelectedCategory('event')}
          className={cn(
            "px-5 py-2 rounded-full text-sm font-medium transition-all",
            selectedCategory === 'event' 
              ? "bg-aemet-navy text-white" 
              : "text-gray-600 hover:text-aemet-navy"
          )}
        >
          Events
        </button>
        <button
          onClick={() => setSelectedCategory('academic')}
          className={cn(
            "px-5 py-2 rounded-full text-sm font-medium transition-all",
            selectedCategory === 'academic' 
              ? "bg-aemet-navy text-white" 
              : "text-gray-600 hover:text-aemet-navy"
          )}
        >
          Academic
        </button>
      </div>
    </div>
  );
};

export default NewsEventsFilters;
