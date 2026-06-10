
import React from 'react';
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const MaerskNewsEvents = () => {
  return (
    <Card className="overflow-hidden">
      <div className="bg-aemet-navy text-white p-4">
        <h2 className="text-xl font-semibold">Partnership News & Highlights</h2>
      </div>
      
      <div className="p-4">
        <Accordion type="single" collapsible className="w-full">
          {/* News Item 1 */}
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-aemet-navy hover:text-aemet-blue font-medium">
              Signing of MoU between AMET and A.P. Moller - Maersk
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col md:flex-row gap-4 items-start">
                <div className="md:w-1/3">
                  <img 
                    src="/lovable-uploads/8aee4294-4bac-4492-8ea1-371b5c7994c5.png" 
                    alt="Signing the MoU" 
                    className="rounded-lg border border-gray-200 w-full"
                  />
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-700">
                    Dr. J. Ramachandran, Chancellor of AMET and Mr. Niels H. Bruus, Head of Marine Human Resources, 
                    A P Moller – Maersk signing the Memorandum of Understanding (MoU) to establish the Centre of Excellence.
                    This strategic partnership aims to provide world-class maritime training and ensure placement 
                    opportunities for AMET graduates.
                  </p>
                  <p className="text-gray-700 mt-2 font-semibold">Date: June 29, 2023</p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* News Item 2 */}
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-aemet-navy hover:text-aemet-blue font-medium">
              Presenting the MoU between AMET and Maersk
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col md:flex-row gap-4 items-start">
                <div className="md:w-1/3">
                  <img 
                    src="/lovable-uploads/06add03b-418f-49ef-8eb2-7fa3aae91229.png" 
                    alt="Presenting the MoU" 
                    className="rounded-lg border border-gray-200 w-full"
                  />
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-700">
                    Dr. J. Ramachandran, Chancellor of AMET and Mr. Niels H. Bruus, Head of Marine Human Resources, 
                    A P Moller – Maersk presenting the signed MoU to officials and attendees. This formal presentation 
                    marks the beginning of a new chapter in maritime education and industry collaboration in India.
                  </p>
                  <p className="text-gray-700 mt-2 font-semibold">Date: June 29, 2023</p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* News Item 3 */}
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-aemet-navy hover:text-aemet-blue font-medium">
              Planning Meeting for the Centre of Excellence
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col md:flex-row gap-4 items-start">
                <div className="md:w-1/3">
                  <img 
                    src="/lovable-uploads/83faae75-090c-4d8e-85d2-6c06d1a0f253.png" 
                    alt="Briefing about Centre of Excellence" 
                    className="rounded-lg border border-gray-200 w-full"
                  />
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-700">
                    AMET officials briefing about the Centre of Excellence plan to AP Moller - Maersk representatives.
                    The meeting involved detailed discussions about curriculum development, infrastructure requirements, 
                    training methodologies, and how to align education with industry needs.
                  </p>
                  <p className="text-gray-700 mt-2 font-semibold">Date: June 2023</p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Card>
  );
};

export default MaerskNewsEvents;
