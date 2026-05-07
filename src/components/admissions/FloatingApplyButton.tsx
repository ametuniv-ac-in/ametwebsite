import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ExternalLink, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const applicationLinks = [
  { label: "UG Application", url: "https://admission.ametuniv.ac.in/application-form" },
  { label: "PG Application", url: "https://admission.ametuniv.ac.in/pg-application-form" },
  { label: "GP Rating Application", url: "https://admission.ametuniv.ac.in/pre-sea-gp-rating-application-form-2025-2026" },
  { label: "V.Ships Application", url: "https://admission.ametuniv.ac.in/vships-center-of-excellence-application-form" },
  { label: "Marine Welder Fitter", url: "https://admission.ametuniv.ac.in/certification-course-marine-welder-fitter-2025" },
];

const FloatingApplyButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed top-[60%] right-6 -translate-y-1/2 z-50">
        <Button 
          size="lg"
          onClick={() => setIsOpen(true)}
          className="bg-[#152043] hover:bg-[#1a2a5c] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          Apply Now <ExternalLink className="h-4 w-4 ml-2" />
        </Button>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-aemet-navy text-xl">Application Forms - Indian Students</DialogTitle>
          </DialogHeader>
          <div className="space-y-3 py-4">
            {applicationLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-aemet-lightBlue/30 transition-colors group"
              >
                <ExternalLink className="h-5 w-5 text-aemet-blue group-hover:text-aemet-navy" />
                <span className="text-aemet-navy font-medium group-hover:text-aemet-blue transition-colors">
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FloatingApplyButton;
