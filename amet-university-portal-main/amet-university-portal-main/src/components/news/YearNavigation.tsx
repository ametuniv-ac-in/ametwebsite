
import React from 'react';
import { YearlyNewsEvents } from '@/data/newsEventsByYear';

interface YearNavigationProps {
  newsEventsByYear: YearlyNewsEvents[];
  scrollToYear: (year: string) => void;
}

const YearNavigation: React.FC<YearNavigationProps> = ({
  newsEventsByYear, 
  scrollToYear
}) => {
  return (
    <div className="mb-8 px-4 py-3 bg-white rounded-lg shadow-sm border border-gray-100">
      <h2 className="text-lg font-semibold text-aemet-navy mb-3">Browse by Academic Year</h2>
      <div className="flex flex-wrap gap-2 justify-center">
        {newsEventsByYear.map(yearData => (
          <button
            key={yearData.year}
            onClick={() => scrollToYear(yearData.year)}
            className="px-4 py-2 bg-gray-100 hover:bg-aemet-blue hover:text-white rounded-md text-sm font-medium transition-colors"
          >
            {yearData.year}
          </button>
        ))}
      </div>
    </div>
  );
};

export default YearNavigation;
