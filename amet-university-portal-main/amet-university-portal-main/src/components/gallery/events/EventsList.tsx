
import React, { useState, useEffect } from 'react';
import { GalleryEvent } from '@/data/galleryEvents';
import EventCard from './EventCard';
import EventDetail from './EventDetail';
import EventFilter from './EventFilter';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { format, parseISO } from 'date-fns';

interface EventsListProps {
  events: GalleryEvent[];
}

const EventsList: React.FC<EventsListProps> = ({ events }) => {
  const [selectedEvent, setSelectedEvent] = useState<GalleryEvent | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [visibleEvents, setVisibleEvents] = useState(12);
  
  // Extract unique months and years from event dates (ISO format: YYYY-MM-DD)
  const months = [...new Set(events.map(event => {
    return format(parseISO(event.date), 'MMMM');
  }))];
  
  const years = [...new Set(events.map(event => {
    return format(parseISO(event.date), 'yyyy');
  }))].sort((a, b) => parseInt(b) - parseInt(a));
  
  // Filter events based on search query, selected month, and selected year
  const filteredEvents = events.filter(event => {
    const eventMonth = format(parseISO(event.date), 'MMMM');
    const eventYear = format(parseISO(event.date), 'yyyy');
    
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         (event.organizer && event.organizer.toLowerCase().includes(searchQuery.toLowerCase())) ||
                         (event.description && event.description.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesMonth = selectedMonth === null || eventMonth === selectedMonth;
    const matchesYear = selectedYear === null || eventYear === selectedYear;
    
    return matchesSearch && matchesMonth && matchesYear;
  });
  
  const displayedEvents = filteredEvents.slice(0, visibleEvents);
  const hasMoreEvents = filteredEvents.length > visibleEvents;
  
  const handleEventClick = (event: GalleryEvent) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };
  
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  
  const handleLoadMore = () => {
    setVisibleEvents(prev => prev + 12);
  };
  
  // Reset visible events when filters change
  useEffect(() => {
    setVisibleEvents(12);
  }, [searchQuery, selectedMonth, selectedYear]);
  
  return (
    <div>
      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search events..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 border rounded-md w-full"
          />
        </div>
      </div>
      
      <EventFilter
        currentMonth={selectedMonth}
        currentYear={selectedYear}
        onSelectMonth={setSelectedMonth}
        onSelectYear={setSelectedYear}
        months={months}
        years={years}
      />
      
      {displayedEvents.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow-sm">
          <p className="text-gray-500">No events found matching your criteria.</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayedEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onClick={() => handleEventClick(event)}
              />
            ))}
          </div>
          
          {hasMoreEvents && (
            <div className="mt-8 text-center">
              <Button onClick={handleLoadMore}>
                Load More Events
              </Button>
            </div>
          )}
        </>
      )}
      
      <EventDetail
        event={selectedEvent}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default EventsList;
