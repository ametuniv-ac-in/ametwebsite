import React from 'react';
import { Calendar, UserPlus, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface CTAProps {
  type: 'apply' | 'visit';
}

const CallToAction: React.FC<CTAProps> = ({ type }) => {
  const isApply = type === 'apply';
  
  return (
    <section 
      id={isApply ? 'apply' : 'visit'} 
      className={`py-16 md:py-24 ${isApply ? 'bg-aemet-blue text-white' : 'bg-white'}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 animate-fade-in">
              <h2 className={`text-sm font-medium uppercase tracking-wider mb-2 ${isApply ? 'text-white' : 'text-aemet-blue'}`}>
                {isApply ? 'Begin Your Journey' : 'Experience Our Campus'}
              </h2>
              <h3 className={`text-3xl md:text-4xl font-bold mb-6 ${isApply ? 'text-white' : 'text-aemet-navy'}`}>
                {isApply ? 'Apply for Admission' : 'Schedule a Campus Visit'}
              </h3>
              
              <p className={`mb-8 ${isApply ? 'text-white' : 'text-gray-600'}`}>
                {isApply 
                  ? 'Take the first step toward a transformative educational experience at AMET University. Our admissions team is ready to guide you through the application process.'
                  : 'Experience the vibrant atmosphere of AMET University firsthand. Join a guided tour led by current students and see what makes our campus special.'}
              </p>
              
              <div className="space-y-4">
                {isApply ? (
                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                      <Link 
                        to="/application-forms" 
                        className="bg-white text-aemet-blue hover:bg-aemet-navy hover:text-white transition-all duration-300 py-3 px-6 rounded-md font-medium inline-flex items-center justify-center shadow-md hover:shadow-lg transform hover:-translate-y-1"
                      >
                        Apply
                      </Link>
                      <Link 
                        to="/application-forms" 
                        className="bg-transparent border border-white text-white hover:bg-white/20 hover:border-white/80 transition-all duration-300 py-3 px-6 rounded-md font-medium inline-flex items-center justify-center shadow-sm hover:shadow-md transform hover:-translate-y-1"
                      >
                        Request Information
                    </Link>
                  </div>
                ) : (
                  <>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-aemet-blue/20 rounded-full p-2">
                        <Calendar className="h-5 w-5 text-aemet-blue" />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-aemet-navy font-medium">Campus Tours</h4>
                        <p className="text-gray-600">Monday - Friday: 10:00 AM & 2:00 PM</p>
                      </div>
                    </div>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                      <Button 
                        variant="outline" 
                        className="border-aemet-blue text-aemet-blue bg-transparent hover:bg-aemet-blue hover:text-white transition-all duration-300 py-3 px-6 rounded-md font-medium inline-flex items-center justify-center shadow-sm hover:shadow-md transform hover:-translate-y-1"
                      >
                        <MapPin className="mr-2 h-4 w-4" />
                        Campus Location
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </div>
            
            <div className="order-1 md:order-2 animate-fade-in">
              <div className="relative">
                <div className={`absolute inset-0 ${isApply ? 'bg-aemet-blue/30' : 'bg-aemet-navy/10'} rounded-xl`}></div>
                <img 
                  src={isApply 
                    ? "/images/admissions/amet-students.jpg" 
                    : "/images/campus/amet-navigation-students.jpg"
                  } 
                  alt={isApply ? "Students on campus" : "AMET University campus"}
                  className="rounded-xl shadow-xl w-full h-[300px] md:h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
