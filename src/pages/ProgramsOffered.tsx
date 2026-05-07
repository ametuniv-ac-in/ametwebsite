import React from 'react';
import AdmissionsLayout from '@/components/admissions/AdmissionsLayout';
import { Card } from "@/components/ui/card";
import { ArrowDown, ExternalLink } from "lucide-react";
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ProgramsOffered = () => {
  const maritimeProgrammes = {
    ug: [
      { name: "B.E. Marine Engineering", link: "/faculty/maritime/department/marine-engineering/program/be-marine-eng" },
      { name: "B.Sc. Nautical Science", link: "/faculty/maritime/department/nautical-sciences/program/bsc-nautical-science" },
    ],
    pg: [
      { name: "M.E. Marine Engineering", link: "/faculty/maritime/department/marine-engineering/program/me-marine-eng" },
    ],
    certificate: [
    { name: "Electro Technical Officers", link: "/faculty/maritime/department/marine-engineering/program/eto" },
    { name: "Graduate Marine Engineering (GME)", link: "/faculty/maritime/department/marine-engineering/program/gme" },
    { name: "General Operator's Certificate for GMDSS", link: "/faculty/maritime/department/nautical-sciences/program/gmdss" },
      { name: "Basic Safety Training (Pre Sea Modular Programmes)", link: "/faculty/maritime/department/nautical-sciences/program/basic-safety-training" },
      { name: "Advanced Diploma in Nautical Science (Formerly HND-NS)", link: "/faculty/maritime/department/nautical-sciences/program/advanced-diploma-nautical-science" },
      { name: "Training for General Purpose Ratings (GP Rating - 6 months Course)", link: "/faculty/maritime/department/nautical-sciences/program/gp-rating" },
    ],
    phd: [
      
      { name: "Ph.D. in Marine Engineering", link: "/faculty/maritime/department/marine-engineering/program/phd-marine-eng" },
    ],
  };

  const generalProgrammes = {
    ug: [
      { name: "B.Tech. Computer Science and Engineering (Cyber Security)", link: "/faculty/engineering-tech/department/computer-science/program/btech-cse-cyber" },
      { name: "B.Tech. Computer Science and Engineering (Artificial Intelligence and Machine Learning)", link: "/faculty/engineering-tech/department/computer-science/program/btech-cse-ai-ml" },
      { name: "B.Tech. Computer Science and Engineering", link: "/faculty/engineering-tech/department/computer-science/program/btech-cse" },
      { name: "B.Tech. Artificial Intelligence and Data Science", link: "/faculty/engineering-tech/department/computer-science/program/btech-ai-ds" },
      { name: "B.Tech. Computer Science and Engineering (Software Engineering)", link: "/faculty/engineering-tech/department/computer-science/program/btech-cse-se" },
      { name: "B.E. Naval Architecture and Offshore Engineering", link: "/faculty/engineering-tech/department/naval-architecture/program/be-naval" },
      { name: "B.E. Mechanical Engineering", link: "/faculty/engineering-tech/department/mechanical-engineering/program/be-mechanical" },
      { name: "B.E. Electrical and Electronics Engineering", link: "/faculty/engineering-tech/department/electrical-engineering/program/be-electrical-computer" },
      { name: "B.E Mining Engineering", link: "/faculty/engineering-tech/department/mining-engineering/program/be-mining" },
      { name: "BBA (Shipping)", link: "/faculty/management/department/management-studies/program/bba-shipping" },
      { name: "B.B.A (e Commerce and Digital Business)", link: "/faculty/management/department/management-studies/program/bba-ecommerce-digital" },
      { name: "B.Sc. Data Science", link: "/faculty/computing-sciences/department/information-technology/program/bsc-data-science" },
      { name: "B.Sc. Artificial Intelligence and Machine Learning", link: "/faculty/computing-sciences/department/information-technology/program/bsc-ai-ml" },
      { name: "B.Sc. Robotics and Artificial Intelligence", link: "/faculty/computing-sciences/department/information-technology/program/bsc-hons-robotics-ai" },
      { name: "B.Sc. Artificial Intelligence and Data Science", link: "/faculty/computing-sciences/department/information-technology/program/bsc-ai-data-science" },
      { name: "B.Com. (General)", link: "/faculty/commerce/department/commerce-department/program/bcom-general" },
      { name: "B.Com. Financial Technology (FinTech) and Artificial Intelligence (AI)", link: "/faculty/commerce/department/commerce-department/program/bcom-fintech-ai" },
      { name: "B.Sc. Aviation", link: "/faculty/aviation/department/aviation-dept/program/bsc-aviation" },
      { name: "B.A. Airlines and Airport Management", link: "/faculty/aviation/department/aviation-dept/program/ba-airline-airport-management" },
      { name: "BBA (Airline and Airport Management)", link: "/faculty/aviation/department/aviation-dept/program/bba-airline-airport-management" },
      { name: "B.Sc. Food Processing Technology and Management", link: "/faculty/life-sciences/department/food-processing/program/bsc-food-tech" },
      { name: "B.Sc. Anesthesia & Operation Theatre Technology", link: "/faculty/allied-health-sciences/department/allied-health-dept/program/bsc-hons-aott" },
      { name: "B.Sc. in Cardiovascular Technology", link: "/faculty/allied-health-sciences/department/allied-health-dept/program/bsc-hons-cvt" },
      { name: "B.Sc. Medical Lab Technology", link: "/faculty/allied-health-sciences/department/allied-health-dept/program/bsc-hons-mlt" },
      { name: "B.Sc. Hospital Management", link: "/faculty/allied-health-sciences/department/allied-health-dept/program/bsc-hospital-management" },
      { name: "Bachelor of Physiotherapy", link: "/faculty/allied-health-sciences/department/allied-health-dept/program/bsc-hons-physiotherapy" },
    ],
    pg: [
      { name: "M.E. Naval Architecture and Offshore Engineering", link: "/faculty/engineering-tech/department/naval-architecture/program/me-naval" },
      { name: "M.E. Petroleum Engineering", link: "/faculty/engineering-tech/department/petroleum-engineering/program/me-petroleum" },
      { name: "M.E. Power Systems", link: "/faculty/engineering-tech/department/electrical-engineering/program/me-power-systems" },
      { name: "MBA (Shipping and Logistics Management)", link: "/faculty/management/department/amet-business-school" },
      { name: "MBA (Hospital Administration)", link: "/faculty/management/department/amet-business-school/program/mba-hospital-admin" },
    ],
    phd: [
      { name: "Ph.D. in Computer Science and Engineering", link: "/faculty/engineering-tech/department/computer-science/program/phd-cse" },
      { name: "Ph.D. in Naval Architecture and Offshore Engineering", link: "/faculty/engineering-tech/department/naval-architecture/program/phd-naval" },
      { name: "Ph.D. in Petroleum Engineering", link: "/faculty/engineering-tech/department/petroleum-engineering/program/phd-petroleum" },
      { name: "Ph.D. in Mechanical Engineering", link: "/faculty/engineering-tech/department/mechanical-engineering/program/phd-mechanical" },
      { name: "Ph.D. in Electrical and Electronics Engineering", link: "/faculty/engineering-tech/department/electrical-engineering/program/phd-electrical" },
      { name: "Ph.D. in Mining Engineering", link: "/faculty/engineering-tech/department/mining-engineering/program/phd-mining" },
      { name: "Ph.D. in Management Studies", link: "/faculty/management/department/amet-business-school" },
      { name: "Ph.D in Computer Science", link: "/faculty/engineering-tech/department/computer-science/program/phd-cse" },
      { name: "Ph.D. in Commerce", link: "/faculty/commerce/department/commerce-department/program/phd-commerce" },
      { name: "Ph.D. in Food Processing Technology", link: "/faculty/life-sciences/department/food-processing/program/phd-food-tech" },
      { name: "Ph.D. in Marine Biotechnology", link: "/faculty/life-sciences/department/marine-biotechnology/program/phd-marine-biotech" },
      { name: "Ph.D. in Mathematics", link: "/faculty/science-humanities/department/mathematics/program/phd-mathematics" },
      { name: "Ph.D. in Physics", link: "/faculty/science-humanities/department/physics/program/phd-physics" },
      { name: "Ph.D. in Chemistry", link: "/faculty/science-humanities/department/chemistry/program/phd-chemistry" },
      { name: "Ph.D. in English", link: "/faculty/science-humanities/department/english/program/phd-english" },
      { name: "Ph.D. in Physical Education", link: "/faculty/science-humanities/department/physical-education/program/phd-physical-education" },
    ],
  };

  const ProgramLink = ({ name, link }: { name: string; link: string }) => {
    if (!link) {
      return <span className="text-muted-foreground">{name}</span>;
    }
    return (
      <Link 
        to={link} 
        className="text-foreground hover:text-primary hover:underline flex items-center gap-1 group"
      >
        {name}
        <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
      </Link>
    );
  };

  const ProgramList = ({ programs }: { programs: { name: string; link: string }[] }) => (
    <ul className="space-y-2 mt-3">
      {programs.map((program, index) => (
        <li key={index} className="text-sm pl-2 border-l-2 border-primary/30 hover:border-primary transition-colors">
          <ProgramLink name={program.name} link={program.link} />
        </li>
      ))}
    </ul>
  );

  return (
    <AdmissionsLayout title="Programmes Offered">
      <div>
        <div className="bg-gray-100 p-6 md:p-8 rounded-lg mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-aemet-navy mb-2">
            Programmes Offered
          </h1>
        </div>
        
        {/* Programme Structure with Integrated Lists */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Maritime Programmes */}
          <div className="flex flex-col">
            <Card className="p-6 bg-[#a8b8d0] text-aemet-navy w-full text-center mb-4">
              <h3 className="font-semibold text-lg">Maritime Programmes</h3>
              <p className="text-sm mt-1">approved by DGS</p>
            </Card>
            <ArrowDown className="h-6 w-6 text-[#7a8fb0] mx-auto mb-4" />
            <Card className="flex-1 p-4">
              <Accordion type="multiple" className="w-full">
                <AccordionItem value="maritime-ug" className="border-b-0">
                  <AccordionTrigger className="bg-[#a8b8d0] text-aemet-navy px-4 py-3 rounded-lg hover:no-underline hover:bg-[#98a8c0]">
                    <span className="font-medium">Undergraduate</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-2 pt-2">
                    <ProgramList programs={maritimeProgrammes.ug} />
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="maritime-pg" className="border-b-0 mt-3">
                  <AccordionTrigger className="bg-[#a8b8d0] text-aemet-navy px-4 py-3 rounded-lg hover:no-underline hover:bg-[#98a8c0]">
                    <span className="font-medium">Post Graduate</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-2 pt-2">
                    <ProgramList programs={maritimeProgrammes.pg} />
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="maritime-cert" className="border-b-0 mt-3">
                  <AccordionTrigger className="bg-[#a8b8d0] text-aemet-navy px-4 py-3 rounded-lg hover:no-underline hover:bg-[#98a8c0]">
                    <span className="font-medium">Certificate Courses</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-2 pt-2">
                    <ProgramList programs={maritimeProgrammes.certificate} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>
          </div>

          {/* General Programmes */}
          <div className="flex flex-col">
            <Card className="p-6 bg-[#a8b8d0] text-aemet-navy w-full text-center mb-4">
              <h3 className="font-semibold text-lg">General Programmes</h3>
              <p className="text-sm mt-1">approved by AICTE & UGC</p>
            </Card>
            <ArrowDown className="h-6 w-6 text-[#7a8fb0] mx-auto mb-4" />
            <Card className="flex-1 p-4">
              <Accordion type="multiple" className="w-full">
                <AccordionItem value="general-ug" className="border-b-0">
                  <AccordionTrigger className="bg-[#a8b8d0] text-aemet-navy px-4 py-3 rounded-lg hover:no-underline hover:bg-[#98a8c0]">
                    <span className="font-medium">Undergraduate</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-2 pt-2">
                    <ProgramList programs={generalProgrammes.ug} />
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="general-pg" className="border-b-0 mt-3">
                  <AccordionTrigger className="bg-[#a8b8d0] text-aemet-navy px-4 py-3 rounded-lg hover:no-underline hover:bg-[#98a8c0]">
                    <span className="font-medium">PG / Certificate Courses</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-2 pt-2">
                    <ProgramList programs={generalProgrammes.pg} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>
          </div>

          {/* PhD Programmes */}
          <div className="flex flex-col">
            <Card className="p-6 bg-[#a8b8d0] text-aemet-navy w-full text-center mb-4">
              <h3 className="font-semibold text-lg">PhD Programmes</h3>
            </Card>
            <ArrowDown className="h-6 w-6 text-[#7a8fb0] mx-auto mb-4" />
            <Card className="flex-1 p-4">
              <Accordion type="multiple" className="w-full">
                <AccordionItem value="maritime-phd" className="border-b-0">
                  <AccordionTrigger className="bg-[#a8b8d0] text-aemet-navy px-4 py-3 rounded-lg hover:no-underline hover:bg-[#98a8c0]">
                    <span className="font-medium">Maritime PhD</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-2 pt-2">
                    <ProgramList programs={maritimeProgrammes.phd} />
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="general-phd" className="border-b-0 mt-3">
                  <AccordionTrigger className="bg-[#a8b8d0] text-aemet-navy px-4 py-3 rounded-lg hover:no-underline hover:bg-[#98a8c0]">
                    <span className="font-medium">General PhD</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-2 pt-2">
                    <ProgramList programs={generalProgrammes.phd} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>
          </div>
        </div>
      </div>
    </AdmissionsLayout>
  );
};

export default ProgramsOffered;
