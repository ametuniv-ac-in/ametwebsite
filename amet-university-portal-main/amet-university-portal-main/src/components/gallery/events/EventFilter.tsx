
import React from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface EventFilterProps {
  currentMonth: string | null;
  currentYear: string | null;
  onSelectMonth: (month: string | null) => void;
  onSelectYear: (year: string | null) => void;
  months: string[];
  years: string[];
}

const EventFilter: React.FC<EventFilterProps> = ({
  currentMonth,
  currentYear,
  onSelectMonth,
  onSelectYear,
  months,
  years
}) => {
  const clearFilters = () => {
    onSelectMonth(null);
    onSelectYear(null);
  };
  
  const hasActiveFilters = currentMonth || currentYear;
  
  return (
    <div className="mb-6 space-y-4">
      <div className="flex flex-wrap gap-4 items-center">
        <span className="text-gray-700 font-medium">Filter by:</span>
        
        <Select 
          value={currentMonth || "all"} 
          onValueChange={(val) => onSelectMonth(val === "all" ? null : val)}
        >
          <SelectTrigger className="w-[160px]">
            <SelectValue placeholder="All Months" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Months</SelectItem>
            {months.map((month) => (
              <SelectItem key={month} value={month}>{month}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        <Select 
          value={currentYear || "all"} 
          onValueChange={(val) => onSelectYear(val === "all" ? null : val)}
        >
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="All Years" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Years</SelectItem>
            {years.map((year) => (
              <SelectItem key={year} value={year}>{year}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        {hasActiveFilters && (
          <Button 
            variant="outline" 
            size="sm" 
            onClick={clearFilters}
            className="flex items-center gap-1"
          >
            <X className="h-3.5 w-3.5" />
            Clear filters
          </Button>
        )}
      </div>
    </div>
  );
};

export default EventFilter;
