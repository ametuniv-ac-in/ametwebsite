import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const magazines = [
  {
    period: 'March 2026',
    url: 'https://drive.google.com/file/d/1BJ1K7WNMfneQsUWD2_SD30XbPomSLOnQ/view',
  },
  {
    period: 'January 2026',
    url: 'https://drive.google.com/file/d/1_BwlHOmu84E7EQuODf5KUbRkN_NQ9wzN/view',
  },
  {
    period: 'November 2025',
    url: 'https://drive.google.com/file/d/17wcM5GxaHmuGMv5ibGs-3DOoYhijgC2k/view',
  },
];

const NeptuneMagazineSection = () => {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold text-aemet-navy mb-4">Neptune Magazine</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {magazines.map((mag, index) => (
            <a
              key={index}
              href={mag.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg border border-border bg-muted/50 hover:bg-muted hover:shadow-md transition-all duration-200 group"
            >
              <div className="bg-primary/10 p-2.5 rounded-lg flex-shrink-0">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {mag.period}
                </p>
                <p className="text-sm text-muted-foreground">Neptune Magazine</p>
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
            </a>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default NeptuneMagazineSection;
