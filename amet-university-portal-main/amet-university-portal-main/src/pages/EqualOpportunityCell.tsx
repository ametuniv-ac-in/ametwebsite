import React from 'react';
import Layout from '@/components/Layout';
import { Users } from 'lucide-react';

const EqualOpportunityCell: React.FC = () => {
  const members = [
    { sno: 1, name: "Dr. S. Ramalingam", designation: "Dean – Student Welfare", role: "Chairperson", email: "hodmech@ametuniv.ac.in", mobile: "9444660285" },
    { sno: 2, name: "Dr. S. Ponmani", designation: "Assistant Professor, Dept. of Mining Engineering", role: "Member", email: "ponmani@ametuniv.ac.in", mobile: "8939416548" },
    { sno: 3, name: "Dr. Mohamed Haroon Basha A", designation: "Professor – Dept. of Physics", role: "Member", email: "harunbasha09@ametuniv.ac.in", mobile: "8248453242" },
    { sno: 4, name: "Dr. S. Saravanan", designation: "Assistant Professor, Dept. of Marine Engineering", role: "Member", email: "saravanans@ametuniv.ac.in", mobile: "9976352206" },
    { sno: 5, name: "Ms. Sandhya Rani Ramadass", designation: "NGO and Psychologist", role: "Member", email: "", mobile: "9840982160" },
    { sno: 6, name: "Mr. Mahesh Henry", designation: "Advocate", role: "Member", email: "", mobile: "9444319991" },
    { sno: 7, name: "Dr. G. Jenitha", designation: "Associate Professor, Dept. of Mathematics", role: "Coordinator", email: "jenitha.g@ametuniv.ac.in", mobile: "9842307816" },
    { sno: 8, name: "Dr. A. R. Sivaram", designation: "Assistant Professor, Dept. of Mechanical Engg.", role: "Member", email: "sivaramar@ametuniv.ac.in", mobile: "9677969537" },
    { sno: 9, name: "Tharun Karthick P J B", designation: "", role: "Member", email: "ame22013@ametuniv.ac.in", mobile: "" },
    { sno: 10, name: "A. B. Sebastian", designation: "", role: "Member", email: "absebastan@gmail.com", mobile: "7904784731" },
  ];

  return (
    <Layout>
      <div className="bg-gradient-to-r from-aemet-navy to-aemet-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Users className="h-8 w-8" />
            <h1 className="text-4xl md:text-5xl font-bold">Equal Opportunity Cell</h1>
          </div>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Ensuring equal opportunities for all members of the university community
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-aemet-navy text-white">
                  <th className="px-4 py-3 text-left font-semibold">S.No</th>
                  <th className="px-4 py-3 text-left font-semibold">Name and Designation</th>
                  <th className="px-4 py-3 text-left font-semibold">Role</th>
                  <th className="px-4 py-3 text-left font-semibold">E-mail Address and Mobile Number</th>
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
                    <td className="px-4 py-4 text-gray-700">
                      {member.email && <div>{member.email}</div>}
                      {member.mobile && <div>{member.mobile}</div>}
                    </td>
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

export default EqualOpportunityCell;
