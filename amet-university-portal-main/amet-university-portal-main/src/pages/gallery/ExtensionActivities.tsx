
import React from 'react';
import GalleryLayout from '@/components/gallery/GalleryLayout';
import { Card, CardContent } from '@/components/ui/card';
import { FileDown } from 'lucide-react';

const extensionActivityPDFs = [
  { year: "2023-2024", file: "/documents/Extension-Activities-2023-2024.pdf" },
  { year: "2022-2023", file: "/documents/Extension-Activities-2022-2023.pdf" },
  { year: "2019-2020", file: "/documents/Extension-Activities-2019-2020.pdf" },
  { year: "2018-2019", file: "/documents/Extension-Activities-2018-2019.pdf" },
  { year: "2017-2018", file: "/documents/Extension-Activities-2017-2018.pdf" },
  { year: "2016-2017", file: "/documents/Extension-Activities-2016-2017.pdf" },
  { year: "2015-2016", file: "/documents/Extension-Activities-2015-2016.pdf" },
];

const ExtensionActivities = () => {
  return (
    <GalleryLayout 
      title="Extension Activities Gallery" 
      description="Download reports of our community outreach programs, social initiatives, and extension activities."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {extensionActivityPDFs.map((pdf, index) => (
          <a 
            key={index} 
            href={pdf.file} 
            download
            className="block"
          >
            <Card className="hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-aemet-gold">
              <CardContent className="p-6 flex items-center gap-4">
                <FileDown className="h-10 w-10 text-aemet-navy" />
                <div>
                  <h3 className="font-semibold text-aemet-navy">Extension Activities</h3>
                  <p className="text-gray-600">{pdf.year}</p>
                </div>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </GalleryLayout>
  );
};

export default ExtensionActivities;
