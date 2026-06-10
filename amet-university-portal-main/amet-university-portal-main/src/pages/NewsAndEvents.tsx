
import React from 'react';
import Layout from '@/components/Layout';
import { newsEventsByYear } from '@/data/newsEventsByYear';
import { useNewsEvents } from '@/hooks/useNewsEvents';
import NewsEventsFilters from '@/components/news/NewsEventsFilters';
import YearNavigation from '@/components/news/YearNavigation';
import YearContent from '@/components/news/YearContent';

const NewsAndEvents = () => {
  const { 
    expandedYears,
    selectedCategory,
    setSelectedCategory,
    toggleYear,
    scrollToYear,
    registerYearRef,
    categorizeItem,
    filterItems
  } = useNewsEvents(newsEventsByYear);

  return (
    <Layout>
      <div className="pt-32 pb-16 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10 text-center">
              <h1 className="text-4xl font-bold text-aemet-navy mb-4">News and Events</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Stay updated with the latest happenings, announcements, and events at AMET University. 
                Explore our comprehensive archive organized by academic years.
              </p>
            </div>
            
            {/* Category Filter */}
            <NewsEventsFilters 
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
            
            {/* Year Navigation */}
            <YearNavigation 
              newsEventsByYear={newsEventsByYear}
              scrollToYear={scrollToYear}
            />
            
            {/* Year-wise content */}
            <div className="space-y-8">
              {newsEventsByYear.map(yearData => {
                const filteredItems = filterItems(yearData.items);
                return (
                  <YearContent
                    key={yearData.year}
                    yearData={yearData}
                    isExpanded={expandedYears.includes(yearData.year)}
                    toggleYear={toggleYear}
                    filteredItems={filteredItems}
                    categorizeItem={categorizeItem}
                    registerYearRef={registerYearRef}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NewsAndEvents;
