
import React from 'react';
import GovernanceLayout from '@/components/governance/GovernanceLayout';
import { Separator } from "@/components/ui/separator";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";

const DeansDirectors = () => {
  const functionalDeans = [
    {
      position: "Executive Director, International Relations",
      name: "Dr.Deepa Rajesh",
      department: "",
      email: "deeparajesh@ametuniv.ac.in"
    },
    {
      position: "Dean Academics",
      name: "Dr.S.Priya",
      department: "Professor, Electrical and Electronics Engineering",
      email: "priya.s@ametuniv.ac.in"
    },
    {
      position: "Dean Research and Development",
      name: "Dr.R.Muthezhilan",
      department: "",
      email: "deanrnd@ametuniv.ac.in"
    },
    {
      position: "Dean Industry Integrated Programmes",
      name: "Dr. I. Paulraj Jayasimman",
      department: "",
      email: "deanind@ametuniv.ac.in"
    },
    {
      position: "Dean Student Welfare",
      name: "Dr.S.Ramalingam",
      department: "",
      email: "dsw@ametuniv.ac.in"
    },
    {
      position: "Dean – Administration i/c",
      name: "Dr.K.Thanikachalam",
      department: "",
      email: "deanadm@ametuniv.ac.in"
    },
    {
      position: "Dean Publications Research",
      name: "Dr V. Mohanavel",
      department: "",
      email: "mohanavel.deanpubs@ametuniv.ac.in"
    },
    {
      position: "Dean Staff Welfare",
      name: "Dr.D.Madhesh",
      department: "",
      email: "deanstfw@ametuniv.ac.in"
    }
  ];

  const academicDeans = [
    {
      position: "Dean, Faculty of Maritime Studies",
      name: "Capt.Gopal Srinivas",
      department: "Principal DGS Courses",
      email: "gopalsrinivas@ametuniv.ac.in"
    },
    {
      position: "Dean, Faculty of Engineering and Technology",
      name: "Dr.S.Bharathiraja",
      department: "Professor, Department of Mechanical Engineering",
      email: "drsbharathiraja@ametuniv.ac.in"
    },
    {
      position: "Dean, Faculty of Science and Humanities",
      name: "Dr.Anita R.Warrier",
      department: "Associate Professor and Head, Department of Physics",
      email: "anitawarrier@ametuniv.ac.in"
    }
  ];

  const directors = [
    {
      name: "Dr.Deepa Rajesh",
      position: "Director, Human Resource Development Centre",
      email: "deeparajesh@ametuniv.ac.in"
    },
    {
      name: "Capt.V.Chadrasekar",
      position: "Director, Centre for Placement and Training (Maritime Programs)",
      email: "director.placements@ametuniv.ac.in"
    },
    {
      name: "Dr.ANANTH J",
      position: "Director, Vice Chancellor Secretariate",
      email: "dir.vcsecretariat@ametuniv.ac.in"
    },
    {
      name: "Dr. M. Jayaprakashvel",
      position: "Director, IQAC",
      email: "iqac@ametuniv.ac.in"
    },
    {
      name: "Dr.D.Arivazhagan",
      position: "Director, Centre for E-Governance",
      email: "prof.arivazhagan@ametuniv.ac.in"
    },
    {
      name: "Dr.M.Rajavelan",
      position: "Deputy Director (i/c), Centre for E-Governance",
      email: "rajavelan.m@ametuniv.ac.in"
    },
    {
      name: "Dr.D.Lakshmi",
      position: "Director, Centre for Academic Research",
      email: "lakshmi.d@ametuniv.ac.in"
    },
    {
      name: "Dr.Anitha Rexalin Devaraj",
      position: "Director, Innovation, Incubation and Entrepreneurship",
      email: "anitha.rexalin@ametuniv.ac.in"
    },
    {
      name: "Mr.Ramanan",
      position: "Director, Public Relations Officer",
      email: "pro@ametuniv.ac.in"
    },
    {
      name: "Dr.V.Amirthavalli",
      position: "Director, Alumni Relations",
      email: "alumni@ametuniv.ac.in"
    },
    {
      name: "Dr A Thanikasalam",
      position: "Director, Student Support Systems and Scholarship",
      email: "thanikasalama@ametuniv.ac.in"
    },
    {
      name: "Dr.R.Sundar",
      position: "Director, Educational Material Resources Development Centre",
      email: "sundar.r@ametuniv.ac.in"
    },
    {
      name: "Dr.P.Arunkumar",
      position: "Director, Centre for ICT Enabled Education",
      email: "arunkumar.p@ametuniv.ac.in"
    },
    {
      name: "Dr. R. Vijayaraj",
      position: "Director, Centre for Sponsored Research",
      email: "vijayarajr@ametuniv.ac.in"
    },
    {
      name: "Dr.K.Gayathri",
      position: "Director, Publications",
      email: "gayathri.k@ametuniv.ac.in"
    },
    {
      name: "Mr.Nirmal Raj",
      position: "Director, AMET CHAMBER FOR ENTREPRENEURSHIP INNOVATION AND INCUBATION (ACEII CEO)",
      email: "ceo_aceii@ametuniv.ac.in"
    },
    {
      name: "Dr Rangamani",
      position: "Director, ODL/OL",
      email: ""
    },
    {
      name: "Mr. S. RAMARAJU",
      position: "Director, Outreach Programs",
      email: "ramarajuseng@ametuniv.ac.in"
    }
  ];

  return (
    <GovernanceLayout title="Deans & Directors">
      <div className="py-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-aemet-navy mb-4">Deans & Directors</h1>
          <p className="max-w-2xl mx-auto text-gray-600">
            Leadership team responsible for academic excellence, research initiatives, and institutional growth at AMET University.
          </p>
          <Separator className="max-w-md mx-auto my-6 bg-aemet-blue/30" />
        </div>

        {/* Functional Deans Section */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-aemet-navy mb-6 text-center">
              Functional Deans
            </h2>
            
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-slate-50">
                    <TableHead className="w-16 text-center">S.No</TableHead>
                    <TableHead className="w-48">Position</TableHead>
                    <TableHead>Name & Department</TableHead>
                    <TableHead className="w-48">Email</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {functionalDeans.map((dean, index) => (
                    <TableRow key={index} className="border-b">
                      <TableCell className="font-medium text-center">{index + 1}</TableCell>
                      <TableCell className="font-medium">{dean.position}</TableCell>
                      <TableCell>
                        <div className="font-medium">{dean.name}</div>
                        {dean.department && <div className="text-sm text-gray-600">{dean.department}</div>}
                      </TableCell>
                      <TableCell className="text-sm">{dean.email}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>

        {/* Academic Deans Section */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-aemet-navy mb-6 text-center">
              Academic Deans
            </h2>
            
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-slate-50">
                    <TableHead className="w-16 text-center">S.No</TableHead>
                    <TableHead className="w-48">Position</TableHead>
                    <TableHead>Name & Department</TableHead>
                    <TableHead className="w-48">Email</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {academicDeans.map((dean, index) => (
                    <TableRow key={index} className="border-b">
                      <TableCell className="font-medium text-center">{index + 1}</TableCell>
                      <TableCell className="font-medium">{dean.position}</TableCell>
                      <TableCell>
                        <div className="font-medium">{dean.name}</div>
                        {dean.department && <div className="text-sm text-gray-600">{dean.department}</div>}
                      </TableCell>
                      <TableCell className="text-sm">{dean.email}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>

        {/* Directors Section */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-aemet-navy mb-6 text-center">
              Directors
            </h2>
            
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-slate-50">
                    <TableHead className="w-16 text-center">S.No</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Designation</TableHead>
                    <TableHead className="w-48">Email</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {directors.map((director, index) => (
                    <TableRow key={index} className="border-b">
                      <TableCell className="font-medium text-center">{index + 1}</TableCell>
                      <TableCell className="font-medium">{director.name}</TableCell>
                      <TableCell>{director.position}</TableCell>
                      <TableCell className="text-sm">{director.email}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-aemet-navy mb-4">Leadership at AMET University</h3>
            <p className="text-gray-700 mb-4">
              The Deans and Directors at AMET University are entrusted with the responsibility of academic leadership, 
              fostering research initiatives, and ensuring institutional excellence across various domains.
            </p>
            <p className="text-gray-700">
              They serve as the driving force behind curriculum development, student welfare, international collaborations, 
              and maintaining the highest standards of education in their respective disciplines and functional areas.
            </p>
          </div>
        </div>
      </div>
    </GovernanceLayout>
  );
};

export default DeansDirectors;
