
import React from 'react';
import { laboratoryList } from './laboratoryData';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { LabData } from './types';
import { Badge } from '@/components/ui/badge';
import { groupLabsByCourse } from './laboratoryData';

const LaboratoryAccordion: React.FC = () => {
  const { groupedLabs, courses } = groupLabsByCourse();

  return (
    <div className="mt-10 mb-8">
      <h2 className="text-2xl font-bold text-aemet-navy mb-6">Laboratories by Department</h2>
      
      <Accordion type="multiple" className="w-full">
        {courses.map((course) => (
          <AccordionItem key={course} value={course}>
            <AccordionTrigger className="hover:bg-gray-50 px-4 rounded-md">
              <div className="flex items-center justify-between w-full pr-4">
                <span className="font-semibold text-aemet-navy">{course}</span>
                <Badge variant="outline" className="ml-2 bg-aemet-lightBlue/20">
                  {groupedLabs[course].length} Labs
                </Badge>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {groupedLabs[course].map((lab: LabData) => (
                  <div key={lab.id} className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                    <p className="font-semibold text-aemet-navy mb-1">{lab.name}</p>
                    <div className="flex items-center mt-2">
                      <Badge variant="secondary" className="text-xs">
                        Lab #{lab.id}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default LaboratoryAccordion;
