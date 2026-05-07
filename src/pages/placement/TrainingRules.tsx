import React from 'react';
import PlacementLayout from '@/components/placement/PlacementLayout';
import { FileText, ExternalLink } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const TrainingRules = () => {
  const documents = [
    { title: 'Arithmetical Ability - I', href: '/pdfs/arithmetical-ability-1.pdf' },
    { title: 'Arithmetical Ability - II', href: '/pdfs/arithmetical-ability-2.pdf' },
    { title: 'Communication Skills Training', href: '/pdfs/communication-skills-training.pdf' },
    { title: 'Quantitative and Verbal Aptitude', href: '/pdfs/quantitative-verbal-aptitude.pdf' }
  ];

  return (
    <PlacementLayout title="Training Rules">
      <div className="container mx-auto py-4">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h1 className="text-2xl md:text-3xl font-bold text-primary mb-6">
            Training Rules
          </h1>
          <div className="grid md:grid-cols-2 gap-4">
            {documents.map((doc, index) => (
              <a 
                key={index}
                href={doc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 bg-primary text-primary-foreground cursor-pointer">
                  <CardContent className="p-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <FileText className="h-8 w-8 text-accent" />
                      <h3 className="text-lg font-semibold">{doc.title}</h3>
                    </div>
                    <ExternalLink className="h-5 w-5 text-primary-foreground/60" />
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </div>
    </PlacementLayout>
  );
};

export default TrainingRules;
