
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

const Coordinators = () => {
  // Coordinators data
  const coordinators = [
    { sno: "1", name: "Dr. M. Jayaprakashvel", cell: "Coordinator, IQAC" },
    { sno: "2", name: "Mr. K. Stalin", cell: "Coordinator, SC/ST Cell" },
    { sno: "3", name: "Dr. A. Shameem", cell: "Coordinator, Minority Cell" },
    { sno: "4", name: "Dr. R. Srinivasan", cell: "Coordinator, OBC Cell" },
    { sno: "5", name: "Mr. T. Johnson", cell: "Coordinator, Centre for IELTS" },
    { sno: "6", name: "Dr.S.Ramalingam", cell: "Coordinator, Mess Committee and Health Centre" },
    { sno: "7", name: "Mr.S.Ramaraju", cell: "Coordinator, Students Council / EBSB" },
    { sno: "8", name: "Dr. S. Priya", cell: "Coordinator, Student Induction Programme" },
    { sno: "9", name: "Dr.S.Poongavanam", cell: "Coordinator, Earn while learn" },
    { sno: "10", name: "Mrs.R. Elavarasi", cell: "Coordinator, Gender Sensitization Cell and Day Care Centre" },
    { sno: "11", name: "Mr. J. Balasubramanian", cell: "Coordinator, Networking" },
    { sno: "12", name: "Dr. K. Sekar", cell: "Coordinator, Library Committee" },
    { sno: "13", name: "Mr. S. Ramaraju", cell: "Director, Centre for Outreach Programs" }
  ];

  // Overall Coordinators for Outreach Programs
  const overallCoordinators = [
    { sno: "1", club: "Director – Outreach Programs", name: "Mr. S. Ramaraju" },
    { sno: "2", club: "Technical Clubs", name: "Mr. Neela Prasad, Asst. Prof., Department of Marine Engineering" },
    { sno: "3", club: "Social Connect Clubs", name: "Dr. Haroon Basha, Asso. Prof., Department of Physics" },
    { sno: "4", club: "Arts and Cultural Clubs", name: "Mrs.Maria Surendran, Softs Skill Trainer, CCPD" },
    { sno: "5", club: "Health and Wellness Clubs", name: "Dr. A. Thanikasalam, Associate Professor, Department of Marine Engineering" },
    { sno: "6", club: "Literary Clubs", name: "Dr.S.Krishna, Associate Professor, Department of English" }
  ];

  // Faculty Coordinators for Clubs/Cells/Centres
  const facultyCoordinators = [
    { category: "Technical Clubs", coordinator: "Mr. Neela Prasad, Asst. Prof., Department of Marine Engineering", clubs: [
      { name: "Media & Digital Creators Club", faculty: "Dr. A. Dhanasekaran, Asso. Professor, Department of Mechanical Engineering" },
      { name: "Toast Masters Club", faculty: "Mr. T. Johnson, Director - CCPD" }
    ]},
    { category: "Social Connect Clubs", coordinator: "Dr. Haroon Basha, Asso. Prof., Department of Physics", clubs: [
      { name: "National Service Scheme (NSS) U-1", faculty: "Mr. V. Sivakumar, Asst. Prof., Department of Marine Engineering" },
      { name: "National Service Scheme (NSS) U-2", faculty: "Mr. Neela Prasad, Asst. Prof., Department of Marine Engineering" },
      { name: "National Service Scheme (NSS) U-3", faculty: "Dr. Haroon Basha, Asso. Prof., Department of Physics" },
      { name: "National Cadet Corps (NCC) – Naval Unit", faculty: "Sub.Lt. A. Prem Anandh, Asst. Prof., Department of NA&OE" },
      { name: "National Cadet Corps (NCC) – Army Unit", faculty: "Dr.Anitha Rexalin Devaraj, Asso. Prof., Department of Physics" },
      { name: "Youth Red Cross (YRC)", faculty: "Dr.Santharaman.P, Asso. Professor, Department of Chemistry" },
      { name: "Leo Club", faculty: "Mr. S. Prithvi, Asst. Prof., ABS" },
      { name: "Eco Club", faculty: "Mrs.Manju.K, Asst. Prof., Department of NA&OE" },
      { name: "Peace Club", faculty: "Mrs. V. Ramabhai, Asst. Prof., Department of FPT" },
      { name: "Rotaract Club", faculty: "Dr.S.Krishna, Associate Professor, Department of English" },
      { name: "Women Empowerment Cell", faculty: "Dr. K. Meenatchi Somasundari, Asso. Professor, ABS" },
      { name: "AMET News Club", faculty: "Mr. S. Ramaraju, Asst. Prof., Department of English" },
      { name: "Heritage Club", faculty: "Dr.P.Jayakumar, Asst. Prof., Department of English" },
      { name: "Unnat Bharath Abhiyan", faculty: "Dr. R. Vijayaraj, Asst. Prof., Department of Marine Biotechnology" }
    ]},
    { category: "Arts and Cultural Clubs", coordinator: "Mrs.Maria Surendran, Softs Skill Trainer, CCPD", clubs: [
      { name: "Fine Arts Club", faculty: "Mrs. Maria Surendran, Softs Skill Trainer, CCPD" },
      { name: "Cultural Club", faculty: "Mrs. Maria Surendran, Softs Skill Trainer, CCPD" },
      { name: "Humour Club", faculty: "Dr. K.M.Mahaboob Sheriff, Asso.Prof, Department of Mechanical Engineering" },
      { name: "Pixel Club", faculty: "Dr. R. Karthick Manoj, Asst. Prof., Department of EEE" }
    ]},
    { category: "Health and Wellness Clubs", coordinator: "Dr. A. Thanikasalam, Asst. Professor, Department of Marine Engg.", clubs: [
      { name: "Centre for Yoga & Human Excellence", faculty: "Dr. A. Thanikasalam, Asst. Prof., Department of Marine Engineering" },
      { name: "Nutrition Club", faculty: "Ms. J. Shanmuga Priya, Asst. Professor, Department of FPT" },
      { name: "AMET Fitness Club", faculty: "Mr.N.Selvakumar, Asst. Prof., Department of NA&OE" },
      { name: "AMET Anti-Drugs Club", faculty: "Dr. C. Amirthakumar, Asst. Professor, Department of Physics" },
      { name: "AMET Wellness Club", faculty: "Ms. R. Padmaja, Student Counsellor" }
    ]},
    { category: "Literary Clubs", coordinator: "Dr.S.Krishna, Asso. Prof., Department of English", clubs: [
      { name: "English Literary Club", faculty: "Dr. S. Krishna, Asst. Prof., Department of English" },
      { name: "AMET Readers Club", faculty: "Mr. A. R. Sivaram, Asst. Prof., Department of NA&OE" },
      { name: "Tutorial Club", faculty: "Dr. V. T. Vimalananth, Asst. Prof., Department of Mechanical Engineering" }
    ]}
  ];

  return (
    <GovernanceLayout title="Co-ordinators">
      <div className="py-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-aemet-navy mb-4">Coordinators</h1>
          <p className="max-w-2xl mx-auto text-gray-600">
            Coordinators for various Cells, Centers, and Committees at AMET University
          </p>
          <Separator className="max-w-md mx-auto my-6 bg-aemet-blue/30" />
        </div>

        {/* Main Coordinators Table */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-slate-50">
                  <TableHead className="w-16 text-center">S.No</TableHead>
                  <TableHead className="w-1/3">Name</TableHead>
                  <TableHead>Cell / Centre / Committee</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {coordinators.map((coordinator, index) => (
                  <TableRow key={index} className="border-b">
                    <TableCell className="font-medium text-center">{coordinator.sno}</TableCell>
                    <TableCell className="font-medium">{coordinator.name}</TableCell>
                    <TableCell>{coordinator.cell}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Centre for Outreach Programs Section */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-aemet-navy mb-4">Centre for Outreach Programs</h2>
            <Separator className="max-w-md mx-auto my-4 bg-aemet-blue/30" />
          </div>

          {/* Overall Coordinators */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-aemet-navy mb-4 text-center">Overall Coordinators of Various Divisions</h3>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-slate-50">
                    <TableHead className="w-16 text-center">Sl.No</TableHead>
                    <TableHead className="w-1/3">Name of the Club</TableHead>
                    <TableHead>Name of the Overall Coordinator</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {overallCoordinators.map((item, index) => (
                    <TableRow key={index} className="border-b">
                      <TableCell className="font-medium text-center">{item.sno}</TableCell>
                      <TableCell className="font-medium">{item.club}</TableCell>
                      <TableCell>{item.name}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          {/* Faculty Coordinators by Category */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-aemet-navy mb-6 text-center">Faculty Coordinators of Various Clubs/Cells/Centres/Units</h3>
            
            {facultyCoordinators.map((category, catIndex) => (
              <div key={catIndex} className="mb-8">
                <div className="bg-gradient-to-r from-aemet-navy to-aemet-blue text-white p-4 rounded-t-lg">
                  <h4 className="font-semibold">Overall Coordinator for {category.category}: {category.coordinator}</h4>
                </div>
                <div className="overflow-x-auto border border-t-0 rounded-b-lg">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-slate-50">
                        <TableHead className="w-16 text-center">Sl.No</TableHead>
                        <TableHead className="w-1/3">Club Name</TableHead>
                        <TableHead>Faculty Coordinators</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {category.clubs.map((club, clubIndex) => (
                        <TableRow key={clubIndex} className="border-b">
                          <TableCell className="font-medium text-center">{clubIndex + 1}</TableCell>
                          <TableCell className="font-medium">{club.name}</TableCell>
                          <TableCell>{club.faculty}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-12">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-aemet-navy mb-4">About Coordinators</h3>
            <p className="text-gray-700 mb-4">
              The Coordinators at AMET University lead various cells, committees, and centers that enhance the educational experience 
              and promote holistic development of students. They oversee specific areas of student welfare, academic support, 
              extracurricular activities, and social initiatives.
            </p>
            <p className="text-gray-700">
              These coordinators work closely with faculty members, administrative staff, and students to organize events, 
              implement policies, and ensure the smooth functioning of their respective areas of responsibility.
            </p>
          </div>
        </div>
      </div>
    </GovernanceLayout>
  );
};

export default Coordinators;
