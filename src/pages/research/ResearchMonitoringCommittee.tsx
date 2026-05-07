
import React from 'react';
import ResearchLayout from '@/components/research/ResearchLayout';
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const ResearchMonitoringCommittee = () => {
  const rmcMembers = [
    { id: 1, name: "Dr. R.Muthezhilan", role: "Dean Research and Development Cell", designation: "Convener" },
    { id: 2, name: "Dr. D. Lakshmi", role: "Director – Academic Research", designation: "Coordinator" },
    { id: 3, name: "Dr. R.Vijayaraj", role: "Director Sponsored Research and Special Schemes", designation: "Member" },
    { id: 4, name: "Dr. S.Priya", role: "Dean Academics", designation: "Member" },
    { id: 5, name: "Dr. A. Rajesh Kanna", role: "Controller of Examinations", designation: "Member" },
    { id: 6, name: "Dr. V.Sridevi", role: "Professor and Head, Dept. of EEE", designation: "Member" },
    { id: 7, name: "Dr. S.Ramalingam", role: "Head, Department of Mechanical Engineering", designation: "Member" },
    { id: 8, name: "Dr. D.Rajasekar", role: "Professor, AMET Business School", designation: "Member" },
    { id: 9, name: "Dr.P.Sivabalan", role: "Head, Department of NA & OE", designation: "Member" },
    { id: 10, name: "Dr. C.M.Ramakirtinan", role: "Head, Department of Marine Biotechnology", designation: "Member" },
    { id: 11, name: "C/E. M.Muthukumar", role: "Head, Department of Marine Engineering", designation: "Member" },
    { id: 12, name: "Capt. Dr. K. Rajesh", role: "Associate Professor, Department of Nautical Science", designation: "Member" },
    { id: 13, name: "Dr. P.Balaganesan", role: "Head, Department of Mathematics", designation: "Member" },
  ];

  return (
    <ResearchLayout title="Research Monitoring Committee (RMC)">
      <div className="py-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-aemet-navy mb-4">Research Monitoring Committee (RMC)</h1>
          <Separator className="max-w-md mx-auto my-6 bg-aemet-blue/30" />
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="overflow-auto">
            <Table className="border rounded-md">
              <TableHeader className="bg-slate-50">
                <TableRow>
                  <TableHead className="w-16 text-center">S.No.</TableHead>
                  <TableHead>Member of the Research Monitoring Committee</TableHead>
                  <TableHead>Designation</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rmcMembers.map((member) => (
                  <TableRow key={member.id}>
                    <TableCell className="text-center font-medium">{member.id}</TableCell>
                    <TableCell>
                      <div>
                        <span className="font-medium">{member.name}</span>
                        <span className="text-gray-600">, {member.role}</span>
                      </div>
                    </TableCell>
                    <TableCell>{member.designation}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </ResearchLayout>
  );
};

export default ResearchMonitoringCommittee;
