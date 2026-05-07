
import React from 'react';
import { cn } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';
import { NewsEventItem } from '@/data/newsEventsByYear';
import NewsCategoryIcon from './NewsCategoryIcon';

interface NewsItemProps {
  item: NewsEventItem;
  category: string;
}

const NewsItem: React.FC<NewsItemProps> = ({ item, category }) => {
  return (
    <div 
      className={cn(
        "py-3 px-2 hover:bg-gray-50 transition-colors",
        item.isHighlighted && "bg-amber-50"
      )}
    >
      <div className="flex items-start gap-2">
        <NewsCategoryIcon category={category} />
        
        <div className="flex-1">
          <div className="font-medium text-gray-900">
            {item.title}
          </div>
          
          {item.date && (
            <div className="text-xs text-gray-500 mt-1">
              {item.date}
            </div>
          )}
          
          {item.link && (
            <a 
              href={item.link} 
              className="inline-flex items-center text-aemet-blue text-sm mt-1 hover:underline"
            >
              {item.linkText || 'Learn More'}
              <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
