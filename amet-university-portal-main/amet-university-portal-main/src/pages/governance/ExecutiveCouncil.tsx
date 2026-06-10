import React from "react";
import GovernanceLayout from "@/components/governance/GovernanceLayout";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const ExecutiveCouncil = () => {
  const councilMembers = [
    { sno: 1, position: "Chair Person", members: ["Prof. Dr. V. Rajendran, Vice Chancellor"] },
    { sno: 2, position: "Two Members from Dean", members: ["Capt. Gopal Srinivas, Principal DGS Courses", "Dr. N.R. Ramkumar, Dean Student Welfare"] },
    { sno: 3, position: "UGC nominee", members: ["Dr. S. Ramachandra Setty, Department of Pharmacology, Govt College of Pharmacy, Bengaluru"] },
    { sno: 4, position: "One Associate Professor", members: ["Dr. K. Gayathri, Associate Professor, Physics"] },
    { sno: 5, position: "One Professor not a Dean", members: ["Dr. J. Rengamani, Professor and Director - CDOE"] },
    { sno: 6, position: "One Assistant Professor", members: ["Sub. Lt. A. Prem Anandh, Assistant Professor, NA&OE, Associate NCC Officer"] },
    { sno: 7, position: "Four Nominee from sponsoring body", members: ["Col. Dr. G. Thiruvasagam", "Capt. G. Ramasamy", "Dr. T. Balasubramanian", "Dr. R. Venkatesan"] },
    { sno: 8, position: "Ex-officio Secretary", members: ["Dr. V. Sangeetha Albin, Registrar"] },
  ];

  return (
    <GovernanceLayout title="Executive Council">
      <div className="py-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-aemet-navy mb-4">Executive Council</h1>
          <p className="max-w-2xl mx-auto text-gray-600">
            The Executive Council is the principal executive body of AMET University responsible for administrative
            affairs and the implementation of statutory provisions.
          </p>
          <Separator className="max-w-md mx-auto my-6 bg-aemet-blue/30" />
        </div>

        <div className="max-w-5xl mx-auto mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-aemet-navy mb-6 text-center">
              Executive Council Members for the Academic Year 2024-25
            </h2>

            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-slate-50">
                    <TableHead className="w-16 text-center">S.No</TableHead>
                    <TableHead className="w-64">Position</TableHead>
                    <TableHead>Member(s)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {councilMembers.map((item) => (
                    <TableRow key={item.sno} className="border-b">
                      <TableCell className="font-medium text-center">{item.sno}</TableCell>
                      <TableCell className="font-medium">{item.position}</TableCell>
                      <TableCell>
                        {item.members.map((member, idx) => (
                          <React.Fragment key={idx}>
                            {member}
                            {idx < item.members.length - 1 && <br />}
                          </React.Fragment>
                        ))}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-aemet-navy mb-4">About the Executive Council</h3>
            <p className="text-gray-700 mb-4">
              The Executive Council is a key statutory body constituted as per the UGC guidelines and university norms.
              It oversees the university's management, formulates policies, and ensures the implementation of strategic
              decisions.
            </p>
            <p className="text-gray-700">
              Members represent various stakeholders including university leadership, faculty representatives, and
              distinguished nominees from sponsoring organizations and regulatory bodies like UGC.
            </p>
          </div>
        </div>
      </div>
    </GovernanceLayout>
  );
};

export default ExecutiveCouncil;
