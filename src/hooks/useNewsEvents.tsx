
import { useState, useRef } from 'react';
import { YearlyNewsEvents, NewsEventItem } from '@/data/newsEventsByYear';

export const useNewsEvents = (newsEventsByYear: YearlyNewsEvents[]) => {
  const [expandedYears, setExpandedYears] = useState<string[]>([newsEventsByYear[0].year]);
  const yearRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'announcement' | 'event' | 'academic'>('all');

  const toggleYear = (year: string) => {
    setExpandedYears(prev => 
      prev.includes(year) 
        ? prev.filter(y => y !== year) 
        : [...prev, year]
    );
  };

  const scrollToYear = (year: string) => {
    if (yearRefs.current[year]) {
      yearRefs.current[year]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
      // Ensure it's expanded
      if (!expandedYears.includes(year)) {
        setExpandedYears(prev => [...prev, year]);
      }
    }
  };

  const registerYearRef = (year: string, ref: HTMLDivElement | null) => {
    yearRefs.current[year] = ref;
  };

  // Simple categorization of items based on title keywords
  const categorizeItem = (title: string) => {
    const lowerTitle = title.toLowerCase();
    
    if (lowerTitle.includes('notification') || lowerTitle.includes('admission') || lowerTitle.includes('application')) {
      return 'announcement';
    } else if (lowerTitle.includes('conference') || lowerTitle.includes('workshop') || lowerTitle.includes('lecture') || lowerTitle.includes('meeting')) {
      return 'event';
    } else if (lowerTitle.includes('academic') || lowerTitle.includes('examination') || lowerTitle.includes('semester') || lowerTitle.includes('time table')) {
      return 'academic';
    }
    return 'announcement'; // Default category
  };

  // Filter items based on selected category
  const filterItems = (items: NewsEventItem[]) => {
    if (selectedCategory === 'all') return items;
    
    return items.filter(item => categorizeItem(item.title) === selectedCategory);
  };

  return {
    expandedYears,
    selectedCategory,
    setSelectedCategory,
    toggleYear,
    scrollToYear,
    registerYearRef,
    categorizeItem,
    filterItems
  };
};
