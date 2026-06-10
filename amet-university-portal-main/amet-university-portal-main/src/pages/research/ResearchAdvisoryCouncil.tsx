
import React from 'react';
import ResearchLayout from '@/components/research/ResearchLayout';
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const ResearchAdvisoryCouncil = () => {
  const racMembers = [
    { id: 1, name: "Prof. Dr.V.Rajendran", role: "Vice-Chancellor, AMET University", designation: "Chairperson" },
    { id: 2, name: "Dr. Deepa Rajesh", role: "Vice President (Academics), AMET", designation: "Special Invitee" },
    { id: 3, name: "Dr.William Selvamurthy", role: "President, AMITY University, Former Chief Controller – R&D, DRDO", designation: "Member" },
    { id: 4, name: "Dr.T.Balasubramanian", role: "Former Vice Chancellor, CARE Deemed to be University (Chettinad) Chennai", designation: "Member" },
    { id: 5, name: "Dr.R.Venkatesan", role: "Scientist G National Institute of Ocean Technology (Rtd), Chennai", designation: "Member" },
    { id: 6, name: "Shri.S.Vasudevan", role: "Scientist G, Naval Physical Oceanographic Laboratory (DRDO), Kochi", designation: "Member" },
    { id: 7, name: "Dr.K.Kadirvelu", role: "Scientist F, DRDO-BU Centre for Life Sciences Coimbatore", designation: "Member" },
    { id: 8, name: "Capt.Gopal Srinivas", role: "Principal DGS Courses and Dean Nautical Science, AMET", designation: "Faculty Representative" },
    { id: 9, name: "Dr. T.Sasilatha", role: "Principal – General Program, AMET", designation: "Faculty Representative" },
    { id: 10, name: "C/E. Muthuvel Muthukumar", role: "Dean - Marine Engineering, AMET", designation: "Faculty Representative" },
    { id: 11, name: "Dr.Anita R Warrier", role: "Dean – Faculty of Science and Humanities, AMET", designation: "Faculty Representative" },
    { id: 12, name: "Dr.CM.Ramakritinan", role: "Professor and Head, Department of Marine Biotechnology, AMET", designation: "Faculty Representative" },
    { id: 13, name: "Dr. R. Muthezhilan", role: "Dean - Research and Development, AMET", designation: "Convener" },
    { id: 14, name: "Dr.S.Priya", role: "Dean-Academics, AMET", designation: "Special Invitee" },
    { id: 15, name: "Dr.M.Jayaprakashvel", role: "Special Officer - AMET", designation: "Special Invitee" },
    { id: 16, name: "Dr.V Sangeetha Albin", role: "Registrar (i/c), AMET", designation: "(Ex-Officio Member)" },
  ];

  return (
    <ResearchLayout title="Research Advisory Council (RAC)">
      <div className="py-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-aemet-navy mb-4">Research Advisory Council (RAC)</h1>
          <Separator className="max-w-md mx-auto my-6 bg-aemet-blue/30" />
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="overflow-auto">
            <Table className="border rounded-md">
              <TableHeader className="bg-slate-50">
                <TableRow>
                  <TableHead className="w-16 text-center">S.No.</TableHead>
                  <TableHead>Member of the Research Advisory Council</TableHead>
                  <TableHead>Designation</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {racMembers.map((member) => (
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

export default ResearchAdvisoryCouncil;
