import React from 'react';
import Layout from '@/components/Layout';
import { Users } from 'lucide-react';

const StaffWelfareCommittee: React.FC = () => {
  const members = [
    { sno: 1, name: "Prof. Dr. V. Rajendran", designation: "Vice-Chancellor", role: "Chairperson" },
    { sno: 2, name: "Dr. Deepa Rajesh", designation: "Vice President (Academics)", role: "Member" },
    { sno: 3, name: "Dr. V. Sangeetha Albin", designation: "Registrar i/c", role: "Member" },
    { sno: 4, name: "Dr. D. Madhesh", designation: "Dean – Staff Welfare", role: "Member" },
    { sno: 5, name: "Mr. M. Sudhakar", designation: "Assistant Registrar Maintenance", role: "Member" },
    { sno: 6, name: "Dr. Praveen Kumar", designation: "Medical Officer", role: "Member" },
    { sno: 7, name: "Mr. J. Govindan", designation: "Store In-Charge (Non-Teaching Staff Representatives)", role: "Member" },
    { sno: 8, name: "Mrs. Hemalatha", designation: "Secretary (Non-Teaching Staff Representatives)", role: "Member" },
    { sno: 9, name: "Mrs. Lara", designation: "Secretary (Non-Teaching Staff Representatives)", role: "Member" },
    { sno: 10, name: "Dr. S. Meenakshi", designation: "Associate Professor", role: "Member" },
  ];

  return (
    <Layout title="Staff Welfare Committee | AMET University">
      <div className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary)/0.85)] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Users className="h-8 w-8" />
            <h1 className="text-4xl md:text-5xl font-bold">Staff Welfare Committee</h1>
          </div>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Committee members for staff welfare and support
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[hsl(var(--primary))] text-white">
                  <th className="px-4 py-3 text-left font-semibold">S.No</th>
                  <th className="px-4 py-3 text-left font-semibold">Name</th>
                  <th className="px-4 py-3 text-left font-semibold">Designation & Department</th>
                  <th className="px-4 py-3 text-left font-semibold">Role of the Committee</th>
                </tr>
              </thead>
              <tbody>
                {members.map((member, index) => (
                  <tr key={member.sno} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-4 py-4 text-gray-700 font-medium">{member.sno}</td>
                    <td className="px-4 py-4 text-gray-700 font-medium">{member.name}</td>
                    <td className="px-4 py-4 text-gray-700">{member.designation}</td>
                    <td className="px-4 py-4 text-gray-700">{member.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StaffWelfareCommittee;
