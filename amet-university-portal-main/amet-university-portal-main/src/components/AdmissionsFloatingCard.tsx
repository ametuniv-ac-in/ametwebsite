
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, MessageCircle, Phone, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { trackCTAClick } from '@/lib/gtm';

const AdmissionsFloatingCard = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Only load visibility state from localStorage once on component mount
  useEffect(() => {
    const savedState = localStorage.getItem('admissionsCardVisible');
    if (savedState !== null) {
      setIsVisible(savedState === 'true');
    }
  }, []);

  const hideCard = () => {
    setIsVisible(false);
    // Store visibility state without setting page refresh behavior
    localStorage.setItem('admissionsCardVisible', 'false');
    
    // Clear localStorage after 5 minutes so card reappears on refresh
    setTimeout(() => {
      localStorage.removeItem('admissionsCardVisible');
    }, 5 * 60 * 1000); // 5 minutes
  };

  // Reset visibility after 24 hours
  useEffect(() => {
    const resetTime = 24 * 60 * 60 * 1000; // 24 hours
    const timer = setTimeout(() => {
      localStorage.removeItem('admissionsCardVisible');
      setIsVisible(true);
    }, resetTime);

    return () => clearTimeout(timer);
  }, []);

  // Force the card to be visible
  useEffect(() => {
    setIsVisible(true);
    localStorage.removeItem('admissionsCardVisible');
  }, []);

  const handleApplyClick = () => {
    trackCTAClick({
      ctaName: 'Apply Now',
      ctaLocation: 'Floating Card',
      ctaDestination: '/application-forms',
    });
  };

  const handleChatClick = () => {
    trackCTAClick({
      ctaName: 'WhatsApp Chat',
      ctaLocation: 'Floating Card',
      ctaDestination: 'https://wa.me/919876543210',
    });
  };

  const handlePhoneClick = () => {
    trackCTAClick({
      ctaName: 'Toll Free Call',
      ctaLocation: 'Floating Card',
      ctaDestination: 'tel:18001083030',
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-36 md:bottom-28 right-4 z-10 animate-fade-in shadow-xl">
      <Card className="w-72 overflow-hidden border-2 border-aemet-blue/30 rounded-xl">
        <div className="bg-gradient-to-r from-aemet-navy to-aemet-blue p-3 relative">
          <button 
            onClick={hideCard}
            className="absolute top-2 right-2 text-white hover:bg-white/20 rounded-full p-1 transition-colors"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
          <h3 className="text-white font-semibold text-lg">Admissions Open 2026-27</h3>
        </div>
        
        <CardContent className="p-4 bg-gradient-to-b from-white to-aemet-lightBlue/20">
          <div className="space-y-3 mt-2">
            <p className="text-sm text-gray-700">Secure your future with AMET University. Apply now for the upcoming academic year!</p>
            
            <div className="grid grid-cols-2 gap-2 my-3">
              <Link to="/application-forms" className="flex-1" onClick={handleApplyClick}>
                <Button className="w-full bg-aemet-blue hover:bg-aemet-navy shadow-md transform transition-transform hover:-translate-y-0.5">
                  <ExternalLink className="mr-1 h-4 w-4" />
                  Apply Now
                </Button>
              </Link>
              
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex-1" onClick={handleChatClick}>
                <Button variant="outline" className="w-full border-aemet-blue text-aemet-navy hover:bg-aemet-lightBlue/30 shadow-sm">
                  <MessageCircle className="mr-1 h-4 w-4" />
                  Chat
                </Button>
              </a>
            </div>
          
<div className="flex items-center gap-4 mt-2 text-sm">
  <Link
    to="/admissions/announcement"
    className="text-aemet-blue hover:text-aemet-navy transition-colors"
  >
    Important dates
  </Link>

  <a
    href="https://imu.cbexams.com/CETRegisstrationx26/Home"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-1 text-aemet-blue hover:text-aemet-navy transition-colors"
  >
    IMUCET Apply
    <ExternalLink className="h-3 w-3" />
  </a>
</div>

            <div className="pt-2 border-t border-aemet-blue/20">
              <a href="tel:18001083030" className="flex items-center text-sm text-aemet-navy hover:text-aemet-blue transition-colors" onClick={handlePhoneClick}>
                <Phone className="h-4 w-4 mr-2" />
                Toll Free: 1800 108 3030
              </a>
            </div>

          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default AdmissionsFloatingCard;
