
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

const PlanningMonitoring = () => {
  // Planning and Monitoring Board Members
  const pmbMembers = [
    {
      sno: "1",
      category: "Vice-Chancellor – Chairperson",
      member: "Prof.Dr.V.Rajendran, Vice-Chancellor"
    },
    {
      sno: "2",
      category: "Trust Nominee",
      member: "Col.Dr.G.Thiruvasagam, Provost"
    },
    {
      sno: "3",
      category: "Internal Members",
      member: "Capt.Gopal Srinivas, Principal, DGS Courses\nDr.T.Sasilatha, Principal – General Programmes\nDr.M.Jayaprakashvel, Co-ordinator, IQAC\nDr.J.Rengamani, Director, Open and Distance Learning Programmes.\nDr.R.Muthezhilan, Dean - Research and Development\nDr.Anita R Warrier, Dean, Science and Humanities\nDr.R.Vettriselvan, Associate Professor, AMET Business School"
    },
    {
      sno: "4",
      category: "External Members",
      member: "Dr.Sushma Yadav, Member UGC, Former Vice-Chancellor, BPSMV, Haryana\nProf.S.P.Thiyagarajan, Distinguished Professor and Advisor to Chancellor, VIT, Chennai\nDr.Chitra Krishnan, Former Professor and Head, Dept. of French, University of Madras"
    },
    {
      sno: "5",
      category: "Registrar – Secretary\nEx-officio",
      member: "Dr. V. Sangeetha Albin, Registrar, i/c"
    }
  ];

  return (
    <GovernanceLayout title="Planning and Monitoring Board">
      <div className="py-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-aemet-navy mb-4">Planning and Monitoring Board</h1>
          <p className="max-w-2xl mx-auto text-gray-600">
            Members of the Planning and Monitoring Board at AMET University
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
                    <TableHead>Category as per UGC Regulation</TableHead>
                    <TableHead className="w-1/2">Member of the PMB</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pmbMembers.map((member, index) => (
                    <TableRow key={index} className="border-b">
                      <TableCell className="font-medium text-center">{member.sno}</TableCell>
                      <TableCell className="whitespace-pre-line">{member.category}</TableCell>
                      <TableCell className="text-sm whitespace-pre-line">{member.member}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-12">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-aemet-navy mb-4">About Planning and Monitoring Board</h3>
            <p className="text-gray-700 mb-4">
              The Planning and Monitoring Board is the principal planning body of AMET University, responsible for 
              monitoring the development programs and reviewing the implementation of UGC regulations.
            </p>
            <p className="text-gray-700">
              It is comprised of representatives from the institution, the Trust, and external experts, all working 
              together to ensure that AMET University adheres to the highest standards in education and infrastructure 
              development.
            </p>
          </div>
        </div>
      </div>
    </GovernanceLayout>
  );
};

export default PlanningMonitoring;
