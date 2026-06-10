import React from 'react';
import Layout from '@/components/Layout';
import { Users } from 'lucide-react';

const SCSTCommittee: React.FC = () => {
  const members = [
    { sno: 1, name: "Dr. S. Ramalingam", designation: "Dean – Student Welfare", role: "Chairperson" },
    { sno: 2, name: "Dr. A. Rajesh Kanna", designation: "Controller of Examinations, AMET", role: "Convener" },
    { sno: 3, name: "Dr. S. Ponmani", designation: "Assistant Professor, Dept. of Mining Engineering", role: "Member" },
    { sno: 4, name: "Mr. Stalin Kesavan", designation: "Assistant Professor, Dept. of Marine Engineering", role: "Coordinator" },
    { sno: 5, name: "Dr. N. Sivakumar", designation: "Associate Professor, Dept. of Chemistry", role: "Member" },
    { sno: 6, name: "Mr. Ansari Raja", designation: "Gym Trainer", role: "Member" },
    { sno: 7, name: "Mr. Bhuvanesh (AME23013)", designation: "", role: "Student Member" },
    { sno: 8, name: "Veeragavan S (AME23163L)", designation: "", role: "Student Member" },
  ];

  const title = "SC / ST Cell";

  return (
    <Layout>
      <div className="bg-gradient-to-r from-aemet-navy to-aemet-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Users className="h-8 w-8" />
            <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
          </div>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Committee members for SC / ST welfare and support
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-aemet-navy text-white">
                  <th className="px-4 py-3 text-left font-semibold">S.No</th>
                  <th className="px-4 py-3 text-left font-semibold">Name and Designation</th>
                  <th className="px-4 py-3 text-left font-semibold">Role</th>
                </tr>
              </thead>
              <tbody>
                {members.map((member, index) => (
                  <tr key={member.sno} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-4 py-4 text-gray-700 font-medium">{member.sno}</td>
                    <td className="px-4 py-4 text-gray-700">
                      <span className="font-medium">{member.name}</span>
                      {member.designation && <span>, {member.designation}</span>}
                    </td>
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

export default SCSTCommittee;
