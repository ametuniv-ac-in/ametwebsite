import React from 'react';
import { FileText, ExternalLink } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const PlacementDocumentCTAs = () => {
  const documents = [
    {
      title: 'Placement Policy',
      description: 'View our comprehensive placement policy guidelines',
      href: '/pdfs/placement-policy.pdf'
    },
    {
      title: 'Placement Procedure',
      description: 'Learn about our placement process and procedures',
      href: '/pdfs/placement-procedure.pdf'
    }
  ];

  return (
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
                <div>
                  <h3 className="text-lg font-semibold">{doc.title}</h3>
                  <p className="text-primary-foreground/80 text-sm">{doc.description}</p>
                </div>
              </div>
              <ExternalLink className="h-5 w-5 text-primary-foreground/60" />
            </CardContent>
          </Card>
        </a>
      ))}
    </div>
  );
};

export default PlacementDocumentCTAs;
