
import React, { useEffect, useState } from 'react';
import { Bell, Info, ExternalLink, Megaphone, Ship, Calendar, Award } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

export interface AlertInfo {
  type: 'info' | 'event' | 'announcement';
  title: string;
  description?: string;
  link?: {
    text: string;
    url: string;
  };
}

interface AlertBannerProps {
  alerts: AlertInfo[];
  className?: string;
}

const AlertBanner = ({ alerts, className }: AlertBannerProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Slight delay for entrance animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  if (!alerts || alerts.length === 0) return null;

  const getIcon = (type: AlertInfo['type']) => {
    switch (type) {
      case 'info':
        return <Info className="h-5 w-5 text-white" />;
      case 'event':
        return <Calendar className="h-5 w-5 text-white" />;
      case 'announcement':
        return <Megaphone className="h-5 w-5 text-white" />;
    }
  };

  const getIconBackground = (type: AlertInfo['type']) => {
    switch (type) {
      case 'info':
        return "bg-gradient-to-br from-blue-500 to-blue-600";
      case 'event':
        return "bg-gradient-to-br from-green-500 to-emerald-600";
      case 'announcement':
        return "bg-gradient-to-br from-amber-500 to-orange-600";
    }
  };

  return (
    <div className={cn(
      "w-full py-3 relative overflow-hidden transition-all duration-500 ease-out group",
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
      className
    )}>
      {/* Ultra-smooth feathered wavy background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-aemet-navy/95 via-aemet-navy/90 to-aemet-navy/80 backdrop-blur-sm overflow-hidden">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
          <div className="absolute inset-0 animate-wave-slow">
            {/* Multiple overlapping feathered radial gradients with even more blur and softer transitions */}
            <div className="absolute inset-0 blur-3xl opacity-60 bg-[radial-gradient(ellipse_at_center,_#59ACC8_0%,transparent_70%)]"></div>
            <div className="absolute inset-0 blur-2xl opacity-70 bg-[radial-gradient(ellipse_at_30%_30%,_#59ACC8_0%,transparent_60%)]"></div>
            <div className="absolute inset-0 blur-xl opacity-80 bg-[radial-gradient(ellipse_at_70%_60%,_#3a87a0_0%,transparent_55%)]"></div>
            <div className="absolute inset-0 blur-lg opacity-60 bg-[radial-gradient(ellipse_at_20%_40%,_#59ACC8_0%,transparent_45%)]"></div>
            <div className="absolute inset-0 blur-md opacity-70 bg-[radial-gradient(ellipse_at_80%_50%,_#3a87a0_0%,transparent_50%)]"></div>
            <div className="absolute inset-0 blur-sm opacity-60 bg-[radial-gradient(ellipse_at_40%_70%,_#59ACC8_0%,transparent_40%)]"></div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center space-x-1 md:space-x-3">
          <Ship className="hidden md:block h-5 w-5 text-aemet-blue animate-pulse" />
          
          <div className="w-full overflow-x-auto pb-3 scrollbar-hide">
            <div className="flex gap-3 md:gap-5 items-center px-1 min-w-max">
              {alerts.map((alert, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 min-w-[280px] sm:min-w-[300px] max-w-sm rounded-lg bg-white/10 backdrop-blur-md overflow-hidden transition-all duration-300 hover:bg-white/15 hover:scale-[1.02] border border-white/20 hover:border-aemet-blue/40 shadow-lg"
                >
                  <div className="px-4 py-3 flex items-center gap-3">
                    <div className={cn(
                      "w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110",
                      getIconBackground(alert.type)
                    )}>
                      {getIcon(alert.type)}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-white truncate">{alert.title}</h3>
                      {alert.description && (
                        <p className="text-xs text-white line-clamp-1">{alert.description}</p>
                      )}
                      
                      {alert.link && (
                        <a 
                          href={alert.link.url} 
                          className="mt-1.5 inline-flex items-center text-xs font-medium bg-white/20 hover:bg-white/30 text-white rounded-full px-2.5 py-1 transition-all duration-300"
                        >
                          {alert.link.text}
                          <ExternalLink className="ml-1 h-3 w-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <Ship className="hidden md:block h-5 w-5 text-aemet-blue animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default AlertBanner;
