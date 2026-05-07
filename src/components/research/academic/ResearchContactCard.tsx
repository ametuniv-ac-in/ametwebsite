
import React from 'react';
import { Building, Phone, Mail, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

const ResearchContactCard = () => {
  return (
    <section className="mb-8 mt-12">
      <Card className="overflow-hidden border-t-4 border-t-amet-blue shadow-md hover:shadow-lg transition-shadow">
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row">
            <div className="bg-gradient-to-br from-amet-navy to-amet-blue p-6 text-white md:w-1/3">
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <User className="h-5 w-5" />
                Contact
              </h3>
              <p className="text-white/90 font-medium">
                The Dean (Research)
              </p>
              <p className="text-white/80 text-sm mt-4">
                Centre for Research
              </p>
            </div>
            
            <div className="p-6 space-y-4 md:w-2/3 bg-white">
              <div className="flex items-start">
                <Building className="h-5 w-5 text-amet-blue mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-800">Academy of Maritime Education and Training (AMET) deemed to be University</p>
                  <p className="text-gray-600">135, East Coast Road, Kanathur, Chennai-603112</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-amet-blue mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-700">Tel: 3257 7030 / 3257 7002; Extn: 109</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-amet-blue mr-3 mt-1 flex-shrink-0" />
                <div>
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <a href="mailto:phd@ametuniv.ac.in" className="text-amet-blue hover:underline font-medium">
                        phd@ametuniv.ac.in
                      </a>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-auto">
                      <p className="text-sm">Click to send an email to the Research Department</p>
                    </HoverCardContent>
                  </HoverCard>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default ResearchContactCard;
