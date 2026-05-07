
import React, { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { toast } from "@/hooks/use-toast";
import { trackCookieConsent } from '@/lib/gtm';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem('cookiesAccepted');
    if (!hasAccepted) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowConsent(false);
    trackCookieConsent('accept');
    toast({
      title: "Cookies accepted",
      description: "Thank you for accepting cookies. Your preferences have been saved.",
      duration: 4000,
    });
  };

  const declineCookies = () => {
    localStorage.setItem('cookiesDeclined', 'true');
    localStorage.setItem('cookiesAccepted', 'false');
    setShowConsent(false);
    trackCookieConsent('decline');
    toast({
      title: "Cookies declined",
      description: "You've declined cookies. Only essential cookies will be used.",
      duration: 4000,
    });
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom duration-500">
      <Alert className="mx-auto max-w-4xl bg-white shadow-lg border border-gray-200 rounded-lg">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 py-2">
          <div className="flex items-center">
            <Cookie className="h-8 w-8 text-aemet-blue" />
          </div>
          <AlertDescription className="text-gray-700 flex-grow">
            <h3 className="text-lg font-semibold text-aemet-navy mb-1">Cookie Notice</h3>
            <p className="mb-0">
              We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
              By clicking "Accept All", you consent to our use of cookies.
            </p>
          </AlertDescription>
          <div className="flex flex-col sm:flex-row gap-2 mt-2 md:mt-0">
            <Button variant="outline" size="sm" onClick={declineCookies} className="border-gray-300">
              Decline
            </Button>
            <Button 
              size="sm" 
              onClick={acceptCookies}
              className="bg-aemet-blue hover:bg-aemet-blue/90"
            >
              Accept All
            </Button>
          </div>
          <Button 
            size="icon" 
            variant="ghost" 
            className="absolute top-4 right-4 h-6 w-6 rounded-full" 
            onClick={() => setShowConsent(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </Alert>
    </div>
  );
};

export default CookieConsent;
