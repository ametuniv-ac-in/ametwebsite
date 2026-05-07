import React from 'react';
import Layout from '@/components/Layout';
import { Shield } from 'lucide-react';

const AntiRaggingCommittee: React.FC = () => {
  const members = [
    { sno: 1, name: "Prof. Dr. V. Rajendran", designation: "Vice-Chancellor", mobile: "9994137373", role: "Chairperson" },
    { sno: 2, name: "Dr. V. Sangeetha Albin", designation: "Registrar", mobile: "9962603081" },
    { sno: 3, name: "Dr. N.R. Ramkumar", designation: "Joint Registrar", mobile: "9381080111" },
    { sno: 4, name: "Capt. Gopal Srinivas", designation: "Principal DGS Courses", mobile: "9003071866" },
    { sno: 5, name: "Dr. T. Sasilatha", designation: "Principal General Courses", mobile: "9444752994" },
    { sno: 6, name: "C/E. Muthukumar", designation: "HOD – Marine Engineering", mobile: "9600591769" },
    { sno: 7, name: "Capt. P. Rajendran", designation: "HOD – Nautical Science", mobile: "9445263760" },
    { sno: 8, name: "Dr. A. Thanikasalam", designation: "Dean – Administration i/c", mobile: "9884947968" },
    { sno: 9, name: "Dr. S. Ramalingam", designation: "Dean Student Welfare - Convener", mobile: "9444660285" },
    { sno: 10, name: "Sub.Lt. A. Prem Anandh", designation: "Associate Dean – Administration & NCC Officer", mobile: "9003360606" },
    { sno: 11, name: "Dr. S. Meher Taj", designation: "Faculty Warden, Dept. of Mathematics", mobile: "9976507552" },
    { sno: 12, name: "Mrs. S. Maria Monalisa", designation: "Students Counselor", mobile: "8939372181" },
    { sno: 13, name: "Mrs. R. Padmaja", designation: "Students Counselor", mobile: "7904782631" },
    { sno: 14, name: "Mr. Varghese Mathew", designation: "Proctor", mobile: "9072469094" },
    { sno: 15, name: "Mr. Anto Cardoza", designation: "Duty Officer", mobile: "9176778079" },
    { sno: 16, name: "Mr. Mahesh Henry", designation: "Advocate", mobile: "9444319991" },
    { sno: 17, name: "Mrs. T. Magudeeswari", designation: "Inspector of Police", mobile: "9840499569" },
    { sno: 18, name: "Ms. Sandhya Rani Ramadass", designation: "Lady Member of NGO and Psychologist", mobile: "9840982160" },
    { sno: 19, name: "Mr. Dilli Ganesh", designation: "Local Media", mobile: "9003135791" },
    { sno: 20, name: "Cadet. Rizwan", designation: "B.Sc Nautical Science – III Year", mobile: "7018396750" },
    { sno: 21, name: "Cadet. Muhammaed Muhzin", designation: "B.E Marine Engineering – IV Year", mobile: "9037102526" },
    { sno: 22, name: "Cadet. Saneesha Manu", designation: "B.Sc Nautical Science – III Year", mobile: "8122078194" },
    { sno: 23, name: "Cadet. Riyaz Khan N", designation: "B.E Marine Engineering – III Year", mobile: "7012090592" },
    { sno: 24, name: "Cadet. Himanshu", designation: "B.Sc Nautical Science – II Year", mobile: "9026742547" },
    { sno: 25, name: "Mr. Abdul Sajith", designation: "B.Tech, Artificial Intelligence – III Year", mobile: "8754351144" },
    { sno: 26, name: "Mr. Vishnu Vardhan", designation: "MBA – II Year", mobile: "7094676869" },
    { sno: 27, name: "Ms. M. Roshini", designation: "B.Com – III Year", mobile: "9600224285" },
    { sno: 28, name: "Ms. M. Vijayalakshmi", designation: "B.Tech CSE(AI&ML) – I Year", mobile: "9342119814" },
    { sno: 29, name: "Mrs. Porselvi", designation: "Parent", mobile: "9150624532" },
  ];

  return (
    <Layout title="Anti-Ragging Committee | AMET University">
      <div className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary)/0.85)] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="h-8 w-8" />
            <h1 className="text-4xl md:text-5xl font-bold">Anti-Ragging Committee</h1>
          </div>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Committee members for anti-ragging prevention and support
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
                  <th className="px-4 py-3 text-left font-semibold">Mobile No</th>
                </tr>
              </thead>
              <tbody>
                {members.map((member, index) => (
                  <tr key={member.sno} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-4 py-4 text-gray-700 font-medium">{member.sno}</td>
                    <td className="px-4 py-4 text-gray-700 font-medium">{member.name}</td>
                    <td className="px-4 py-4 text-gray-700">{member.designation}</td>
                    <td className="px-4 py-4 text-gray-700">{member.mobile || '—'}</td>
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

export default AntiRaggingCommittee;
