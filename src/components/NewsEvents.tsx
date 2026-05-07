
import React, { useRef, useEffect, useState } from 'react';
import { newsEvents } from '@/data/newsEvents';
import { Calendar, Newspaper, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const NewsEvents = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'news' | 'events'>('all');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const filteredItems = newsEvents.filter(item => {
    if (activeTab === 'all') return true;
    return item.type === activeTab;
  });

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-sm font-medium uppercase tracking-wider text-aemet-blue mb-2">Stay Informed</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-aemet-navy mb-4">News & Events</h3>
          <p className="text-gray-600">
            Discover the latest happenings at AMET University, from groundbreaking research to upcoming events and campus activities.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white rounded-full p-1 shadow-sm border border-gray-100">
            <button
              onClick={() => setActiveTab('all')}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all",
                activeTab === 'all' 
                  ? "bg-aemet-navy text-white" 
                  : "text-gray-600 hover:text-aemet-navy"
              )}
            >
              All
            </button>
            <button
              onClick={() => setActiveTab('news')}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all",
                activeTab === 'news' 
                  ? "bg-aemet-navy text-white" 
                  : "text-gray-600 hover:text-aemet-navy"
              )}
            >
              News
            </button>
            <button
              onClick={() => setActiveTab('events')}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all",
                activeTab === 'events' 
                  ? "bg-aemet-navy text-white" 
                  : "text-gray-600 hover:text-aemet-navy"
              )}
            >
              Events
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id}
              className={cn(
                "bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-700 card-hover",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col md:flex-row h-full">
                <div className="md:w-2/5 relative">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title}
                    className="w-full h-48 md:h-full object-cover"
                  />
                  <div className={cn(
                    "absolute top-4 left-4 text-xs font-medium py-1 px-3 rounded-full flex items-center",
                    item.type === 'news' 
                      ? "bg-aemet-navy text-white" 
                      : "bg-aemet-blue text-white"
                  )}>
                    {item.type === 'news' ? (
                      <>
                        <Newspaper className="h-3.5 w-3.5 mr-1.5" />
                        News
                      </>
                    ) : (
                      <>
                        <Calendar className="h-3.5 w-3.5 mr-1.5" />
                        Event
                      </>
                    )}
                  </div>
                </div>
                <div className="md:w-3/5 p-6 flex flex-col">
                  <div className="mb-2">
                    <span className="text-sm text-gray-500">{item.date}</span>
                    {item.time && (
                      <span className="text-sm text-gray-500 ml-2">• {item.time}</span>
                    )}
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-aemet-navy">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 mb-4 flex-grow">
                    {item.description}
                  </p>
                  
                  {item.location && (
                    <div className="mb-4 text-sm text-gray-600">
                      <strong>Location:</strong> {item.location}
                    </div>
                  )}
                  
                  <a 
                    href="#" 
                    className="inline-flex items-center text-aemet-blue font-medium text-sm mt-auto hover:translate-x-1 transition-transform"
                  >
                    {item.type === 'news' ? 'Read More' : 'Learn More'}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700 delay-500`}>
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 bg-aemet-navy text-white hover:bg-aemet-navy/90 transition-colors rounded-md font-medium"
          >
            View All News & Events
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;
