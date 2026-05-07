import React from 'react';
import ExaminationLayout from '@/components/examination/ExaminationLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Download, Eye } from 'lucide-react';

const announcements = [
  {
    title: 'Time Tables of End Semester (Arrear) Examinations – May 2026',
    href: '/documents/ESE_ARREAR_TIME_TABLE_MAY_2026_OVERALL.pdf',
  },
  {
    title: 'Notification for Pre-PhD Thesis Presentation of Mr. Nazeebur Rehman Syed',
    href: '/documents/pre-phd-thesis-presentation-nazeebur-rehman-syed.pdf',
  },
  {
    title: 'Notification for Ph.D Viva Voce Examination of Mr. John Jayaraj',
    href: '/documents/phd-viva-voce-examination-john-jayaraj.pdf',
  },
  {
    title: 'Notification for Ph.D Viva Voce Examination of Mr. P. N. Vijayakumar',
    href: '/documents/phd-viva-voce-examination-p-n-vijayakumar.pdf',
  },
  {
    title: 'Notification for Pre-PhD Thesis Presentation of Mr. Bora Suri Venkata Reddy',
    href: '/documents/pre-phd-thesis-presentation-bora-suri-venkata-reddy.pdf',
  },
  {
    title: 'Notification for Pre-PhD Thesis Presentation of Mr. Mohanbabu Senthil',
    href: '/documents/pre-phd-thesis-presentation-mohanbabu-senthil.pdf',
  },
  {
    title: 'Notification for Pre-PhD Thesis Presentation of Ms. J. Suganthi',
    href: '/documents/pre-phd-thesis-presentation-j-suganthi.pdf',
  },
  {
    title: 'Notification for Pre-PhD Thesis Presentation of Mr. John Jayaraj',
    href: '/documents/pre-phd-thesis-presentation-john-jayaraj.pdf',
  },
  {
    title: 'Time Tables for the Model Examinations – Dec 2025 for First Year Students',
    href: '/documents/MODEL_EXAMINATIONS_DEC_2025_FIRST_YEAR_TIME_TABLE.pdf',
  },
  {
    title: 'Time Tables for the End Semester Examinations – Dec 2025 for First Year Students',
    href: '/documents/END_SEMESTER_EXAMINATIONS_DEC_2025_FIRST_YEAR_TIME_TABLE.pdf',
  },
];

const Announcement = () => {
  const handleView = (href: string) => {
    window.open(href, '_blank');
  };

  const handleDownload = (href: string, title: string) => {
    const link = document.createElement('a');
    link.href = href;
    link.download = href.split('/').pop() || 'document.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <ExaminationLayout title="Announcements">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-aemet-navy mb-6">Examination Announcements</h1>
        
        {announcements.map((item, index) => (
          <Card key={index} className="border-l-4 border-l-blue-600 shadow-md">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-full">
                  <FileText className="h-8 w-8 text-blue-600" />
                </div>
                <div className="space-y-4 flex-1">
                  <h3 className="font-bold text-xl text-aemet-navy">
                    {item.title}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="outline" className="gap-2" onClick={() => handleView(item.href)}>
                      <Eye className="h-4 w-4" />
                      View PDF
                    </Button>
                    <Button variant="outline" className="gap-2" onClick={() => handleDownload(item.href, item.title)}>
                      <Download className="h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </ExaminationLayout>
  );
};

export default Announcement;
