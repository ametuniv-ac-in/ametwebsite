
import React from 'react';
import ExaminationLayout from '@/components/examination/ExaminationLayout';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { FileText, Mail, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const NADCell = () => {
  const contactData = [
    {
      id: 1,
      name: "Dr.V.Sangeetha Albin",
      designation: "Registrar i/c",
      email: "registrar@ametuniv.ac.in",
      contact: "044-2744 4625 Extn. No. 107"
    },
    {
      id: 2,
      name: "Dr. A. Rajesh Kanna",
      designation: "Controller of Examinations i/c",
      email: "coe@ametuniv.ac.in",
      contact: "044-2744 4625 Extn. No. 132"
    },
    {
      id: 3,
      name: "Dr.M.Jayaprakashvel",
      designation: "Coordinator, IQAC",
      email: "iqac@ametuniv.ac.in",
      contact: "044-2744 4625 Extn. No. 159"
    },
    {
      id: 4,
      name: "Dr.D.Arivazhagan",
      designation: "Director-Centre for E-Governance",
      email: "diregov@ametuniv.ac.in",
      contact: "044-2744 4625 Extn. No. 408"
    },
    {
      id: 5,
      name: "Mr.P.Ramanathan",
      designation: "Additional Controller of Examinations",
      email: "addl.coe@ametuniv.ac.in",
      contact: "044-2744 4625 Extn. No. 132"
    },
    {
      id: 6,
      name: "Dr.R.Srinivasan",
      designation: "AMET Business School",
      email: "srinivasan.r@ametuniv.ac.in",
      contact: "044-2744 4625 Extn. No. 180"
    }
  ];

  return (
    <ExaminationLayout title="NAD Cell">
      <div>
        <h1 className="text-3xl font-bold text-aemet-navy mb-6">National Academic Depository (NAD) Cell</h1>
        
        <div className="prose max-w-none mb-8">
          <p className="text-gray-700 mb-4">
            National Academic Depository (NAD) is an initiative of the Government of India facilitated by MHRD. 
            NAD is a national database set up to hold academic awards issued by Academic Institutions/ Universities in an electronic form. 
            The NAD helps in validating the authenticity of these awards and ensuring their safe storage and easy retrieval.
          </p>
          
          <p className="text-gray-700 mb-4">
            Maintaining academic awards in a Digital Depository benefits educational institutions, Students and Employers by enabling online access 
            and retrieval, eliminating fraudulent practices such as faking/forging certificates and mark sheets and facilitating validation. 
            NAD is an online web-based system with 24x7 access to the Stakeholders.
          </p>
          
          <p className="text-gray-700 mb-4">
            For adopting the Digital India program, AMET has formed a NAD cell and registered in NAD Digi locker and also submitted the details 
            of degrees awarded to students from 2018 in the NAD Digi locker portal. The Controller of Examinations serving as Nodal Officer 
            and updating the information in the NAD Portal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card className="bg-blue-50 shadow-sm">
            <CardContent className="pt-6">
              <h2 className="text-xl font-bold text-aemet-navy mb-4">Benefits of NAD</h2>
              <ul className="space-y-2 list-disc pl-5">
                <li className="text-gray-700">24x7 online verification and access to academic awards</li>
                <li className="text-gray-700">Secure digital storage of academic records</li>
                <li className="text-gray-700">Eliminates fraudulent practices and certificate forgery</li>
                <li className="text-gray-700">Easy retrieval of academic documents</li>
                <li className="text-gray-700">Integration with Digital India initiatives</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-blue-50 shadow-sm">
            <CardContent className="pt-6">
              <h2 className="text-xl font-bold text-aemet-navy mb-4">Nodal Officer Contact</h2>
              <div className="space-y-3">
                <p className="font-semibold text-aemet-navy">Prof. Dr. D. Arivazhagan</p>
                <p className="text-gray-700">Controller of Examinations</p>
                <p className="text-gray-700">Nodal Officer - e-SANAD</p>
                <p className="text-gray-700">AMET University</p>
                <div className="flex items-center mt-3">
                  <Phone className="h-4 w-4 mr-2 text-gray-500" />
                  <span className="text-gray-700">044 - 2747 2155 / 157 Extn: 132</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-gray-500" />
                  <span className="text-gray-700">coe@ametuniv.ac.in</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold text-aemet-navy mb-4">Contact Persons</h2>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-blue-50">
                  <TableHead className="font-bold text-aemet-navy">S.No.</TableHead>
                  <TableHead className="font-bold text-aemet-navy">Contact Person</TableHead>
                  <TableHead className="font-bold text-aemet-navy">Designation</TableHead>
                  <TableHead className="font-bold text-aemet-navy">E-Mail ID</TableHead>
                  <TableHead className="font-bold text-aemet-navy">Contact No</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {contactData.map((contact) => (
                  <TableRow key={contact.id}>
                    <TableCell>{contact.id}</TableCell>
                    <TableCell className="font-medium">{contact.name}</TableCell>
                    <TableCell>{contact.designation}</TableCell>
                    <TableCell>{contact.email}</TableCell>
                    <TableCell>{contact.contact}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="flex items-start">
            <FileText className="text-blue-600 h-5 w-5 mt-1 mr-3" />
            <p className="text-gray-700">
              <span className="font-semibold text-aemet-navy">Note:</span> Students can access their digitized academic records through 
              the DigiLocker platform (digilocker.gov.in) using their Aadhaar number. For assistance with accessing records, please 
              contact the NAD Cell.
            </p>
          </div>
        </div>
      </div>
    </ExaminationLayout>
  );
};

export default NADCell;
