
import React from 'react';
import LibraryLayout from '@/components/library/LibraryLayout';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ExternalLink, Book, List, Printer, Globe, Database, QrCode, GraduationCap, Users, Scan } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const LibraryAutomation = () => {
  const automationDetails = [
    { detail: 'Nature of automation', description: 'Fully' },
    { detail: 'Name of the ILMS', description: 'AUTOLIB Software System' },
    { detail: 'Version', description: 'Java V-8.2' },
    { detail: 'Year of automation', description: '2008 & Updated 2015' },
    { detail: 'Validity', description: 'Life Time' },
  ];

  const librarySections = [
    "AICTE Recommended book collections",
    "AMET study materials",
    "Back Volumes section",
    "Book Bank section",
    "Circulation counter",
    "Digital Library",
    "IMO publication book collections",
    "Newspaper display Rack",
    "Periodical section",
    "Question bank",
    "Rare books and archives section",
    "Reference section",
    "Reprography section",
    "Talking Book Library",
    "Theses/Dissertation section",
    "Technical Section",
    "Audio Visual section"
  ];

  const valueAddedServices = [
    "Article alert service",
    "CD's / DVD's Search",
    "Conference Alert service",
    "Current Awareness Service (CAS)",
    "Digital Repository",
    "Document Delivery Service",
    "Information Display",
    "Inter Library Loan Service",
    "Internet service",
    "Lending service",
    "Library Web Portal Service",
    "Literature Search",
    "Newspaper-clippings service",
    "Online Database",
    "Online Reservation Service",
    "QR Code service",
    "Reference Services and Referral Services",
    "Remote access service",
    "Reprography services",
    "Research support service",
    "Scanning & Printing",
    "Selective Dissemination of Information Service (SDI) service",
    "Theses / dissertations service",
    "User Educational and Orientation Service"
  ];

  const getIcon = (index: number) => {
    const icons = [Book, List, Printer, Globe, Database, QrCode, GraduationCap, Users, Scan];
    return icons[index % icons.length];
  };

  return (
    <LibraryLayout title="Automation and Services">
      <div>
        <h1 className="text-3xl font-bold text-aemet-navy mb-6">Library Automation & Services</h1>
        <p className="text-gray-700 mb-8">
          AMET University Library employs modern automation systems to provide efficient and user-friendly services to the academic community.
        </p>
        
        <div className="mt-8 space-y-10">
          <section>
            <h2 className="text-2xl font-semibold text-aemet-navy mb-4">Library Automation</h2>
            <p className="text-gray-700 mb-4">
              The library uses the popular "AUTOLIB" software on windows environment capable of handling of records. 
              It facilitates the students and Faculty with online Public Access Catalogue (OPAC) and also consists of 
              various modules such as Gate Entry, Acquisition, Cataloguing, Circulation, Serial Control and possibility 
              of generating various reports.
            </p>

            <Card className="mb-6 overflow-hidden max-w-lg mx-auto">
              <div className="p-4">
                <img 
                  src="/lovable-uploads/26382294-2503-4e76-b924-5f126dc9f22d.png" 
                  alt="AMET University Library AUTOLIB System Interface" 
                  className="w-full object-contain"
                />
                <div className="mt-2 text-center text-sm text-gray-600">
                  AUTOLIB Software System Interface
                </div>
              </div>
            </Card>

            <p className="text-gray-700 mb-6">
              Library services fully automated in the year of 2008 with AutoLib Integrated Library Management System 
              and Web OPAC (2015) and augmented with Barcode technology and RFID Technology in 2019.
            </p>

            <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm mb-8">
              <Table>
                <TableHeader>
                  <TableRow className="bg-slate-50">
                    <TableHead className="w-[80px] font-bold">Sl.No</TableHead>
                    <TableHead className="font-bold">Details of ILMS</TableHead>
                    <TableHead className="font-bold">Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {automationDetails.map((detail, index) => (
                    <TableRow key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell className="font-medium">{detail.detail}</TableCell>
                      <TableCell>{detail.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-aemet-navy mb-4">Web OPAC (Online Public Access Catalogue)</h2>
            <p className="text-gray-700 mb-4">
              In-house resource list can be accessed through website of AMET. Central Library has online access facility 
              to search the availability of the required resources for the user community. The search option is unique 
              and can be made through Author-wise, Title-wise, Subject-wise indexes using keywords and can be accessed 
              from on and off the campus. The advanced search provides more specific search for a title with Boolean operators.
            </p>
            
            <div className="flex justify-center my-6">
              <Button 
                variant="outline" 
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 border-blue-200 hover:border-blue-400"
              >
                Click Here to Search <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-aemet-navy mb-4">Library Sections</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {librarySections.map((section, index) => {
                const IconComponent = getIcon(index);
                return (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-md border border-slate-200 bg-white shadow-sm">
                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-aemet-blue/10">
                      <IconComponent className="h-5 w-5 text-aemet-blue" />
                    </div>
                    <span className="text-gray-700">{section}</span>
                  </div>
                );
              })}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-aemet-navy mb-4">Value Added Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {valueAddedServices.map((service, index) => {
                const IconComponent = getIcon(index + 5); // offset to get different icons
                return (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-md border border-slate-200 bg-white shadow-sm">
                    <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-aemet-blue/10">
                      <IconComponent className="h-4 w-4 text-aemet-blue" />
                    </div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="bg-slate-50 p-6 rounded-lg border border-slate-200">
            <h3 className="text-lg font-medium text-aemet-navy mb-3">Additional Digital Services</h3>
            <p className="text-gray-700">
              The library is continuously enhancing its digital services to meet the evolving needs of the academic community.
              For specific digital service inquiries, please contact the library staff.
            </p>
          </section>
        </div>
      </div>
    </LibraryLayout>
  );
};

export default LibraryAutomation;
