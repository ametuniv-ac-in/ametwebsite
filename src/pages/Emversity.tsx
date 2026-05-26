
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

const programs = [
  { name: "B.Sc. (Anaesthesia and Operation Theatre Technology)", seats: 60, link: "/faculty/allied-health-sciences/department/allied-health-dept/program/bsc-hons-aott" },
  { name: "B.Sc. (Cardio Vascular Technology)", seats: 60, link: "/faculty/allied-health-sciences/department/allied-health-dept/program/bsc-hons-cvt" },
  { name: "B.Sc. (Medical Lab Technology)", seats: 60, link: "/faculty/allied-health-sciences/department/allied-health-dept/program/bsc-hons-mlt" },
  { name: "B.Sc. (Hospital Management)", seats: 60, link: "/faculty/allied-health-sciences/department/allied-health-dept/program/bsc-hospital-management" },
  { name: "Bachelor of Physiotherapy", seats: 60, link: "/faculty/allied-health-sciences/department/allied-health-dept/program/bsc-hons-physiotherapy" },
  { name: "MBA. (Hospital Administration)", seats: 30, link: "/faculty/management/department/amet-business-school/program/mba-hospital-admin" },
];

const enquirySchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(100),
  contactNumber: z
    .string()
    .trim()
    .regex(/^[0-9+\-\s]{7,15}$/u, "Enter a valid contact number"),
  purpose: z.string().trim().min(5, "Please describe your purpose").max(500),
});

type EnquiryValues = z.infer<typeof enquirySchema>;

const Emversity = () => {
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryValues>({ resolver: zodResolver(enquirySchema) });

  const onSubmit = (values: EnquiryValues) => {
    const subject = `Emversity Enquiry – ${values.fullName}`;
    const body = `Full Name: ${values.fullName}\nContact Number: ${values.contactNumber}\nPurpose of reachout: ${values.purpose}`;
    const mailto = `mailto:ashok.kumar@emversity.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    toast.success("Opening your email app to send the enquiry");
    reset();
    setOpen(false);
  };

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
                        AMET University and{' '}
                        <a
                          href="https://emversity.com/university-partners/amet-university-chennai"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-aemet-blue underline hover:text-aemet-navy"
                        >
                          Emversity
                        </a>{' '}
                        have entered into a strategic Memorandum of Understanding (MOU) to jointly offer world-class Allied Health Science programs. This collaboration brings together AMET's strong academic framework and Emversity's expertise in industry-driven training and employability-focused education. By leveraging Emversity's cutting-edge learning methodologies and AMET's established reputation in higher education, students receive a unique blend of theoretical knowledge and hands-on clinical experience. This partnership ensures that graduates are not only academically proficient but also job-ready, meeting the evolving demands of the healthcare sector.
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
                          <p className="font-semibold">Contact Us:</p>
                          <p className="text-xl font-bold">
                            <a href="tel:+918123863749" className="hover:underline">8123863749</a>
                            {' / '}
                            <a href="tel:+918867955017" className="hover:underline">8867955017</a>
                          </p>
                        </div>
                      </div>
                      <Dialog open={open} onOpenChange={setOpen}>
                        <DialogTrigger asChild>
                          <Button className="bg-white text-aemet-navy hover:bg-gray-100 px-6" size="lg">
                            Enquire Now
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-md">
                          <DialogHeader>
                            <DialogTitle>Emversity Enquiry</DialogTitle>
                            <DialogDescription>
                              Fill in your details and we&apos;ll get back to you.
                            </DialogDescription>
                          </DialogHeader>
                          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div className="space-y-1.5">
                              <Label htmlFor="fullName">Full Name</Label>
                              <Input id="fullName" {...register("fullName")} />
                              {errors.fullName && (
                                <p className="text-sm text-destructive">{errors.fullName.message}</p>
                              )}
                            </div>
                            <div className="space-y-1.5">
                              <Label htmlFor="contactNumber">Contact Number</Label>
                              <Input id="contactNumber" inputMode="tel" {...register("contactNumber")} />
                              {errors.contactNumber && (
                                <p className="text-sm text-destructive">{errors.contactNumber.message}</p>
                              )}
                            </div>
                            <div className="space-y-1.5">
                              <Label htmlFor="purpose">Purpose of reachout</Label>
                              <Textarea id="purpose" rows={4} {...register("purpose")} />
                              {errors.purpose && (
                                <p className="text-sm text-destructive">{errors.purpose.message}</p>
                              )}
                            </div>
                            <DialogFooter>
                              <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-aemet-navy hover:bg-aemet-blue text-white"
                              >
                                Submit Enquiry
                              </Button>
                            </DialogFooter>
                          </form>
                        </DialogContent>
                      </Dialog>
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
