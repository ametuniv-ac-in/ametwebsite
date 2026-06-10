
import React from 'react';
import { Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { YearlyNewsEvents, NewsEventItem } from '@/data/newsEventsByYear';
import NewsItem from './NewsItem';

interface YearContentProps {
  yearData: YearlyNewsEvents;
  isExpanded: boolean;
  toggleYear: (year: string) => void;
  filteredItems: NewsEventItem[];
  categorizeItem: (title: string) => 'announcement' | 'event' | 'academic';
  registerYearRef: (year: string, ref: HTMLDivElement | null) => void;
}

const YearContent: React.FC<YearContentProps> = ({
  yearData,
  isExpanded,
  toggleYear,
  filteredItems,
  categorizeItem,
  registerYearRef
}) => {
  return (
    <div 
      ref={el => registerYearRef(yearData.year, el)}
      className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200"
    >
      <button
        onClick={() => toggleYear(yearData.year)}
        className="w-full flex justify-between items-center p-4 bg-gradient-to-r from-aemet-navy to-aemet-blue text-white"
      >
        <div className="flex items-center">
          <Calendar className="h-5 w-5 mr-2" />
          <h2 className="text-xl font-bold">{yearData.year}</h2>
        </div>
        {isExpanded ? (
          <ChevronUp className="h-5 w-5" />
        ) : (
          <ChevronDown className="h-5 w-5" />
        )}
      </button>
      
      {isExpanded && (
        <div className="p-4">
          {filteredItems.length > 0 ? (
            <div className="divide-y divide-gray-100">
              {filteredItems.map((item, index) => {
                const category = categorizeItem(item.title);
                return (
                  <NewsItem 
                    key={index} 
                    item={item} 
                    category={category} 
                  />
                );
              })}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              No items match the selected filter for this academic year.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default YearContent;
