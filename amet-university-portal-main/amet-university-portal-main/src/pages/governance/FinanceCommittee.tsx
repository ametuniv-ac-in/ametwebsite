
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

const FinanceCommittee = () => {
  // Finance Committee Members
  const fcMembers = [
    {
      sno: "1",
      member: "Prof. Dr. V.Rajendran\nVice-Chancellor",
      designation: "Chairperson"
    },
    {
      sno: "2",
      member: "Dr.Rajesh Ramachandran\nPresident, AMET University",
      designation: "Trust Nominee"
    },
    {
      sno: "3",
      member: "Col. Dr. G. Thiruvasagam\nProvost",
      designation: "Executive Council Nominee"
    },
    {
      sno: "4",
      member: "Dr.Deepa Rajesh\nVice President Academics",
      designation: "Executive Council Nominee"
    },
    {
      sno: "5",
      member: "Dr.Sangeetha Albin\nRegistrar",
      designation: "Executive Council Nominee"
    },
    {
      sno: "6",
      member: "Prof.Akhilesh Mishra\nShambu Dayal Post Graduate College Ghantaghar, Naya Ganj, Uttar Pradesh is the Nominee of UGC",
      designation: "UGC Nominee"
    },
    {
      sno: "7",
      member: "Mr.R.Thiagarajan\nAuditor",
      designation: "Chancellor Nominee"
    },
    {
      sno: "8",
      member: "Mr.Varadharajan\nGM, SIMS",
      designation: "Chancellor Nominee"
    },
    {
      sno: "9",
      member: "Dr.M.Jayaprakashvel\nCoordinater IQAC",
      designation: "Chancellor Nominee"
    },
    {
      sno: "10",
      member: "Mr.Balaji\nDeputy Registrar Finance",
      designation: "Chancellor Nominee"
    },
    {
      sno: "11",
      member: "Mrs.K.Jayabharathi\nFinancial Controller",
      designation: "Secretary"
    }
  ];

  return (
    <GovernanceLayout title="Finance Committee">
      <div className="py-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-aemet-navy mb-4">Finance Committee</h1>
          <p className="max-w-2xl mx-auto text-gray-600">
            Members of the Finance Committee at AMET University
          </p>
          <Separator className="max-w-md mx-auto my-6 bg-aemet-blue/30" />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-slate-50">
                    <TableHead className="w-16 text-center">S.No</TableHead>
                    <TableHead className="w-1/2">Member of the Finance Committee</TableHead>
                    <TableHead>Designation</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {fcMembers.map((member, index) => (
                    <TableRow key={index} className="border-b">
                      <TableCell className="font-medium text-center">{member.sno}</TableCell>
                      <TableCell className="whitespace-pre-line">{member.member}</TableCell>
                      <TableCell>{member.designation}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-12">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-aemet-navy mb-4">About Finance Committee</h3>
            <p className="text-gray-700 mb-4">
              The Finance Committee is responsible for reviewing the financial requirements and budget allocations of AMET University.
              It plays a crucial role in overseeing the financial management and ensuring fiscal responsibility.
            </p>
            <p className="text-gray-700">
              The committee makes recommendations on financial matters to the Executive Council and helps
              in maintaining financial stability and sustainable growth of the university.
            </p>
          </div>
        </div>
      </div>
    </GovernanceLayout>
  );
};

export default FinanceCommittee;
