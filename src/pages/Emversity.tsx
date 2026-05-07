
import React from 'react';
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Heart, GraduationCap, Phone, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const programs = [
  { name: "B.Sc. (Anaesthesia and Operation Theatre Technology)", seats: 60, link: "/faculty/allied-health-sciences/department/allied-health-dept/program/bsc-hons-aott" },
  { name: "B.Sc. (Cardio Vascular Technology)", seats: 60, link: "/faculty/allied-health-sciences/department/allied-health-dept/program/bsc-hons-cvt" },
  { name: "B.Sc. (Medical Lab Technology)", seats: 60, link: "/faculty/allied-health-sciences/department/allied-health-dept/program/bsc-hons-mlt" },
  { name: "B.Sc. (Hospital Management)", seats: 60, link: "/faculty/allied-health-sciences/department/allied-health-dept/program/bsc-hospital-management" },
  { name: "Bachelor of Physiotherapy", seats: 60, link: "/faculty/allied-health-sciences/department/allied-health-dept/program/bsc-hons-physiotherapy" },
  { name: "MBA. (Hospital Administration)", seats: 30, link: "/faculty/management/department/amet-business-school/program/mba-hospital-admin" },
];

const Emversity = () => {
  return (
    <Layout title="Emversity | AMET University">
      <div className="py-16 md:py-20 lg:py-24 bg-gray-50"> 
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-100 p-6 md:p-8 rounded-lg mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-aemet-navy mb-2">
                Association of AMET & Emversity
              </h1>
            </div>
            
            <Card className="p-6 md:p-8 shadow-md bg-white mb-8">
              <div className="prose max-w-none">
                <div className="flex items-start gap-4">
                  <Heart className="h-6 w-6 text-aemet-blue mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-semibold text-aemet-navy mb-4">
                      Strategic Partnership
                    </h2>
                    <div className="bg-aemet-lightGray rounded-lg p-4 mb-6 border-l-4 border-aemet-blue">
                      <p className="text-gray-700 leading-relaxed">
                        AMET University and Emversity have entered into a strategic Memorandum of Understanding (MOU) to jointly offer world-class Allied Health Science programs. This collaboration brings together AMET's strong academic framework and Emversity's expertise in industry-driven training and employability-focused education. By leveraging Emversity's cutting-edge learning methodologies and AMET's established reputation in higher education, students receive a unique blend of theoretical knowledge and hands-on clinical experience. This partnership ensures that graduates are not only academically proficient but also job-ready, meeting the evolving demands of the healthcare sector.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h2 className="text-2xl font-semibold text-aemet-navy mb-6 flex items-center">
                    <GraduationCap className="h-6 w-6 text-aemet-blue mr-3" />
                    Programs Offered
                  </h2>
                  
                  <div className="overflow-x-auto rounded-lg border border-gray-200">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-aemet-navy hover:bg-aemet-navy">
                          <TableHead className="text-white font-semibold text-base">Course</TableHead>
                          <TableHead className="text-white font-semibold text-base text-center">Sanctioned Strength</TableHead>
                          <TableHead className="text-white font-semibold text-base text-center">Details</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {programs.map((program, index) => (
                          <TableRow key={index} className="even:bg-gray-50">
                            <TableCell className="font-medium text-aemet-navy">{program.name}</TableCell>
                            <TableCell className="text-center text-gray-700">{program.seats} seats</TableCell>
                            <TableCell className="text-center">
                              <Link
                                to={program.link}
                                className="text-sm text-aemet-blue hover:text-aemet-navy inline-flex items-center gap-1"
                              >
                                View details <ChevronRight className="h-4 w-4" />
                              </Link>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
                
                <div className="mt-10">
                  <div className="bg-gradient-to-r from-aemet-navy to-aemet-blue rounded-lg shadow-lg p-6 md:p-8 text-white">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                      <div className="flex items-center mb-4 md:mb-0">
                        <Phone className="h-6 w-6 mr-3" />
                        <div>
                          <p className="font-semibold">For more details contact</p>
                          <p className="text-xl font-bold">Toll Free 1800 108 3030</p>
                        </div>
                      </div>
                      <Button 
                        className="bg-white text-aemet-navy hover:bg-gray-100 px-6"
                        size="lg"
                      >
                        Enquire Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Emversity;
