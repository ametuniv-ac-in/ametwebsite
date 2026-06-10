
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

const FacultyChairpersons = () => {
  // Faculty Chairpersons data
  const chairpersons = [
    {
      sno: "1",
      name: "C/E. Bhoopathy Bhaskaran",
      email: "",
      faculty: "Faculty of Marine Studies",
      departments: "Dept. of Marine Engineering\nDept. of Nautical Science"
    },
    {
      sno: "2",
      name: "Dr.V.Sridevi",
      email: "sridevi_v@ametuniv.ac.in",
      faculty: "Faculty of Electrical and Electronics Engineering",
      departments: "Dept. of Electrical and Electronics Engineering\nDept. of Computer Science"
    },
    {
      sno: "3",
      name: "Dr. S.Bharathi Raja",
      email: "drsbharathiraja@ametuniv.ac.in",
      faculty: "Faculty of Engineering and Technology",
      departments: "Dept. of Mechanical Engineering\nDept. of Mining Engineering"
    },
    {
      sno: "4",
      name: "Dr. J. Rengamani",
      email: "rengamani.j@ametuniv.ac.in",
      faculty: "Faculty of Management Studies",
      departments: "AMET Business School\nDept. of Commerce"
    },
    {
      sno: "5",
      name: "Dr. Anita.R.Warrier",
      email: "anitawarrier@ametuniv.ac.in",
      faculty: "Faculty of Science and Humanities",
      departments: "Dept. of Mathematics\nDept. of Physics\nDept. of Chemistry\nDept. of English\nDept. of Physical Education"
    },
    {
      sno: "6",
      name: "Dr.R.Muthezhilan",
      email: "muthezhilanr@ametuniv.ac.in",
      faculty: "Faculty of Biotechnology",
      departments: "Dept. of Food Processing Technology\nDept. of Marine Biotechnology"
    },
    {
      sno: "7",
      name: "Dr. I. Paulraj Jayasimman",
      email: "",
      faculty: "Faculty of Aviation Studies",
      departments: "Department of Aviation"
    },
    {
      sno: "8",
      name: "Dr. S. Subramanian",
      email: "hodcom@ametuniv.ac.in",
      faculty: "Faculty of Commerce",
      departments: "Department of Commerce"
    },
    {
      sno: "9",
      name: "",
      email: "hodacs@ametuniv.ac.in",
      faculty: "Faculty of Advanced Computing Sciences",
      departments: "Department of Information Technology"
    }
  ];

  return (
    <GovernanceLayout title="Faculty Chairpersons">
      <div className="py-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-aemet-navy mb-4">Faculty Chairpersons</h1>
          <p className="max-w-2xl mx-auto text-gray-600">
            List of Faculty Chairpersons at AMET University
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
                    <TableHead>Faculty Chairperson</TableHead>
                    <TableHead>Name of the Faculty</TableHead>
                    <TableHead className="w-56">Department</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {chairpersons.map((chairperson, index) => (
                    <TableRow key={index} className="border-b">
                      <TableCell className="font-medium text-center">{chairperson.sno}</TableCell>
                      <TableCell className="font-medium">
                        {chairperson.name}
                        {chairperson.email && (
                          <div className="text-sm text-gray-500 mt-1">{chairperson.email}</div>
                        )}
                      </TableCell>
                      <TableCell>{chairperson.faculty}</TableCell>
                      <TableCell className="text-sm whitespace-pre-line">{chairperson.departments}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-12">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-aemet-navy mb-4">About Faculty Chairpersons</h3>
            <p className="text-gray-700 mb-4">
              Faculty Chairpersons at AMET University lead academic divisions, providing strategic direction
              and academic leadership to multiple departments within their faculties.
            </p>
            <p className="text-gray-700">
              They work closely with Department Heads, Deans, and the University administration to ensure 
              academic excellence, research advancement, and student success across their respective faculties.
            </p>
          </div>
        </div>
      </div>
    </GovernanceLayout>
  );
};

export default FacultyChairpersons;
