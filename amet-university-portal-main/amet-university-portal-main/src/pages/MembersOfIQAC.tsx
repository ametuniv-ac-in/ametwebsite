
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { 
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, List, Grid, Mail, Phone, MapPin, Building, User } from 'lucide-react';

// IQAC Members data
const iqacMembers = [
  {
    id: 1,
    name: "Prof.Dr.V.Rajendran",
    designation: "Vice-Chancellor, Chairman",
    email: "vc@ametuniv.ac.in"
  },
  {
    id: 2,
    name: "Col.Dr.G.Thiruvasagam",
    designation: "Provost",
    email: "pca@ametuniv.ac.in"
  },
  {
    id: 3,
    name: "Mr.S.Karikalan",
    designation: "Senior Vice President-AMET, Member (Management)",
    email: "skametuniv30556@gmail.com"
  },
  {
    id: 4,
    name: "Dr.V.Ramachandran",
    designation: "Former Vice Chancellor, Anna University, Trichy",
    email: "rama5864@gmail.com"
  },
  {
    id: 5,
    name: "Dr.Abudhahir.A",
    designation: "Director (IQAC) B.S. Abdur Rahman Crescent Institute of Science & Technology Vandalur, Chennai",
    email: "abudhahir@crescent.education"
  },
  {
    id: 6,
    name: "Dr.Sanjib Kumar Patanaik",
    designation: "Professor, Director, Centre for Academic Courses, Department of Electrical and Electronics Engineering, College of Engineering Guindy, Anna University, Chennai",
    email: "skpatnaik1111@gmail.com"
  },
  {
    id: 7,
    name: "Dr.S.Balakrishnan",
    designation: "IQAC Coordinator Professor Dept. of Earth Sciences, Pondicherry University",
    email: "sbala_2002@yahoo.com"
  },
  {
    id: 8,
    name: "Prof.Dr.Sasilatha",
    designation: "Dean - International Relations, Member",
    email: "deanir@ametuniv.ac.in"
  },
  {
    id: 9,
    name: "Dr.S.Prabhakaran",
    designation: "Professor, Marine Engineering",
    email: "prabhakaran.s@ametuniv.ac.in"
  },
  {
    id: 10,
    name: "Capt.Gopal Srinivas",
    designation: "Principal - DGS Courses",
    email: "principal@ametuniv.ac.in"
  },
  {
    id: 11,
    name: "Dr.R.Sundar",
    designation: "Assistant Professor, Dept. EEE",
    email: "sundar.r@ametuniv.ac.in"
  },
  {
    id: 12,
    name: "Mr.Vishnu Panicker",
    designation: "Chairperson of the Student Council AMET (Student - Member)",
    email: "vishnupanicker1@gmail.com"
  },
  {
    id: 13,
    name: "Mr.B.Dinesh",
    designation: "Crew Operator, Mearsk, Chennai (Employer - Member)",
    email: "dinesh.b@maersk.com"
  },
  {
    id: 14,
    name: "Mr.Arumugam",
    designation: "President, Fishermen Association, Kanathur (Local Society - Member)",
    email: "-"
  },
  {
    id: 15,
    name: "Mr.Muralitharan K",
    designation: "Manager, NRR Finance, Trichy (Parent-Member)",
    email: ""
  },
  {
    id: 16,
    name: "Dr.R.Karthik",
    designation: "Regional Business Manager, Provet Pharma Private Limited, Chennai (Alumni - Member)",
    email: "karthik1990vlr@gmail.com"
  },
  {
    id: 17,
    name: "Dr.M.Jayaprakashvel",
    designation: "Coordinator, Internal Quality Assurance Cell (IQAC)",
    email: "iqac@ametuniv.ac.in"
  },
  {
    id: 18,
    name: "Dr. V. Sangeetha Albin",
    designation: "Registrar i/c, Member",
    email: "registrar@ametuniv.ac.in"
  }
];

const MembersOfIQAC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <Layout>
      <div className="bg-gray-50 py-3 border-b">
        <div className="container mx-auto px-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">About Us</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Members of IQAC</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      
      <div className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <Users className="h-8 w-8 text-aemet-navy mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold text-aemet-navy text-center">
              Members of IQAC
            </h1>
          </div>
          
          <div className="mb-8 max-w-3xl mx-auto">
            <p className="text-center text-gray-600">
              The Internal Quality Assurance Cell (IQAC) at AMET University is dedicated to maintaining 
              and enhancing academic standards. Below is the list of newly nominated IQAC members who 
              will guide our institution's quality initiatives.
            </p>
          </div>
          
          <div className="flex justify-center mb-8">
            <Tabs defaultValue="grid" className="w-full max-w-md" onValueChange={(value) => setViewMode(value as 'grid' | 'list')}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="grid">
                  <Grid className="h-4 w-4 mr-2" />
                  Grid View
                </TabsTrigger>
                <TabsTrigger value="list">
                  <List className="h-4 w-4 mr-2" />
                  List View
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {iqacMembers.map((member) => (
                <Card key={member.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="bg-aemet-navy text-white p-4">
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-5">
                    <p className="text-gray-700 mb-3 font-medium">{member.designation}</p>
                    {member.email ? (
                      <div className="flex items-center text-aemet-blue">
                        <Mail className="h-4 w-4 mr-2" />
                        <a href={`mailto:${member.email}`} className="hover:underline text-sm">
                          {member.email}
                        </a>
                      </div>
                    ) : (
                      <div className="text-gray-500 text-sm italic">No email provided</div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {iqacMembers.map((member) => (
                <div 
                  key={member.id} 
                  className="flex flex-col md:flex-row bg-white p-4 rounded-lg border hover:shadow-md transition-shadow duration-300"
                >
                  <div className="md:w-1/6 flex items-center justify-center md:justify-start mb-3 md:mb-0">
                    <div className="h-10 w-10 flex items-center justify-center bg-aemet-navy text-white rounded-full font-semibold">
                      {member.id}
                    </div>
                  </div>
                  <div className="md:w-3/6">
                    <h3 className="font-semibold text-aemet-navy">{member.name}</h3>
                    <p className="text-gray-600 text-sm mt-1">{member.designation}</p>
                  </div>
                  <div className="md:w-2/6 flex items-center mt-3 md:mt-0">
                    {member.email ? (
                      <a 
                        href={`mailto:${member.email}`} 
                        className="flex items-center text-aemet-blue hover:underline text-sm"
                      >
                        <Mail className="h-4 w-4 mr-2" />
                        {member.email}
                      </a>
                    ) : (
                      <span className="text-gray-500 italic text-sm">No email provided</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Contact Details Section */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <Mail className="h-7 w-7 text-aemet-navy mr-3" />
              <h2 className="text-2xl md:text-3xl font-bold text-aemet-navy text-center">
                Contact Details for IQAC
              </h2>
            </div>
            
            <Card className="border-2 border-aemet-navy/20 overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="bg-aemet-navy/10 p-6">
                <CardTitle className="text-xl text-aemet-navy flex items-center">
                  <User className="h-5 w-5 mr-3" />
                  Dr. M.Jayaprakashvel
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start">
                  <Building className="h-5 w-5 text-aemet-blue mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Co-ordinator, Internal Quality Assurance Cell (IQAC)</p>
                    <p className="text-gray-600">Professor of Marine Biotechnology</p>
                    <p className="text-gray-600">AMET Deemed to be University</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-aemet-blue mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-600">135, East Coast Road,</p>
                    <p className="text-gray-600">Kanathur, Chennai - 603112</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-aemet-blue mr-3" />
                  <a href="mailto:iqac@ametuniv.ac.in" className="text-aemet-blue hover:underline">
                    iqac@ametuniv.ac.in
                  </a>
                </div>
                
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-aemet-blue mr-3" />
                  <div>
                    <p className="text-gray-600">Mobile: 98405 29274</p>
                    <p className="text-gray-600">Landline: 044 2747 2155 / 157 Extn.: 408</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MembersOfIQAC;
