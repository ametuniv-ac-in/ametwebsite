
import React from 'react';
import LibraryLayout from '@/components/library/LibraryLayout';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

type CommitteeMember = {
  slNo: number;
  name: string;
  designation: string;
  department: string;
  position: string;
};

type StaffMember = {
  slNo: number;
  name: string;
  designation: string;
};

const committeeMembers: CommitteeMember[] = [
  { slNo: 1, name: 'Dr. V. Rajendran', designation: 'Vice-Chancellor', department: 'AMET', position: 'Chairperson' },
  { slNo: 2, name: 'Dr. V. Sangeetha Albin', designation: 'Registrar', department: 'AMET', position: 'Member' },
  { slNo: 3, name: 'Dr. N.R. Ramkumar', designation: 'Joint Registrar', department: 'AMET', position: 'Member' },
  { slNo: 4, name: 'Capt. Gopal Srinivas', designation: 'Principal', department: 'DGS Courses', position: 'Member' },
  { slNo: 5, name: 'Dr. T. Sasilatha', designation: 'Principal', department: 'General Programmes', position: 'Member' },
  { slNo: 6, name: 'Dr. M. Jayaprakashvel', designation: 'Coordinator', department: 'IQAC', position: 'Member' },
  { slNo: 7, name: 'Dr. S. Priya', designation: 'Dean', department: 'Academics', position: 'Member' },
  { slNo: 8, name: 'C/E Muthu Kumar', designation: 'HoD', department: 'Marine Engineering', position: 'Member' },
  { slNo: 9, name: 'Dr. R. Srinivasan', designation: 'HoD', department: 'AMET Business School', position: 'Member' },
  { slNo: 10, name: 'Dr. V. Sridevi', designation: 'HoD', department: 'Electrical and Electronics Engineering', position: 'Member' },
  { slNo: 11, name: 'Dr. C.M. Ramakritinan', designation: 'HoD', department: 'Marine Biotechnology', position: 'Member' },
  { slNo: 12, name: 'Dr. S. Ramalingam', designation: 'HoD', department: 'Mechanical Engineering', position: 'Member' },
  { slNo: 13, name: 'Dr. P. Sivabalan', designation: 'HoD', department: 'Naval Architecture and Offshore Engineering', position: 'Member' },
  { slNo: 14, name: 'Capt. Rajendran', designation: 'HoD', department: 'Nautical Science', position: 'Member' },
  { slNo: 15, name: 'Dr. S. Subramanian', designation: 'HoD', department: 'Commerce', position: 'Member' },
  { slNo: 16, name: 'Dr. D. Siva Kumar', designation: 'HoD', department: 'Computer Science and Engineering', position: 'Member' },
  { slNo: 17, name: 'Dr. C. Vairavan', designation: 'HoD', department: 'Department of English', position: 'Member' },
  { slNo: 18, name: 'Dr. K. Anandan', designation: 'HoD', department: 'Department of Physics', position: 'Member' },
  { slNo: 19, name: 'Dr. V. Kanchana', designation: 'HoD', department: 'Chemistry', position: 'Member' },
  { slNo: 20, name: 'Dr. Prakash I.N', designation: 'Librarian', department: 'Alliance University, Bangaluru, Karnataka-India', position: 'External Expert Member' },
  { slNo: 21, name: 'Dr. P. Pannerselvam', designation: 'Librarian', department: 'B.S Abdur Rahman Crescent Institute of Science and Technology, Vandalur', position: 'External Expert Member' },
  { slNo: 22, name: 'Dr. P. Balaganesan', designation: 'HoD', department: 'Mathematics', position: 'Member' },
  { slNo: 23, name: 'Dr. R. Sundar', designation: 'Associate Professor', department: 'Department of Marine Engineering', position: 'Member' },
  { slNo: 24, name: 'Dr. K. Sekar', designation: 'Librarian', department: 'Library', position: 'Ex-Officio Member and Secretary' },
];

const staffMembers: StaffMember[] = [
  { slNo: 1, name: 'Dr. K. Sekar, M.Com., M.L.I.S., M.Phil., Ph.D.', designation: 'Librarian' },
  { slNo: 2, name: 'Dr. A.V. Selvavinayagam, M.A, M.L.I.Sc., M.Phil., Ph.D.', designation: 'Assistant Librarian' },
  { slNo: 3, name: 'Ms. K. Madhavi, M.A., M.L.I.S., B.Ed.', designation: 'Assistant Librarian' },
  { slNo: 4, name: 'K. Kumar B.Sc., M.L.I.S.', designation: 'Library Assistant' },
  { slNo: 5, name: 'S. Venkatesan B.Sc.', designation: 'Library Assistant' },
  { slNo: 6, name: 'C. Michael Jackson B.C.A', designation: 'Technical Assistant' },
  { slNo: 7, name: 'Mr. R. Dinesh', designation: 'Office Assistant' },
];

const LibraryCommittee = () => {
  return (
    <LibraryLayout title="Committee & Staff">
      <div>
        <h1 className="text-3xl font-bold text-aemet-navy mb-6">AMET Library - Committee & Staff</h1>
        
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-aemet-navy mb-4">Library Committee</h2>
          <p className="text-gray-700 mb-4">
            The Library Committee consists of the following members:
          </p>
          
          <div className="overflow-x-auto">
            <Table className="border-collapse w-full">
              <TableHeader className="bg-aemet-lightBlue">
                <TableRow>
                  <TableHead className="w-16 border px-4 py-3 text-left font-medium">Sl.No</TableHead>
                  <TableHead className="border px-4 py-3 text-left font-medium">Library Committee Members</TableHead>
                  <TableHead className="border px-4 py-3 text-left font-medium">Designation</TableHead>
                  <TableHead className="border px-4 py-3 text-left font-medium">Name of the Department</TableHead>
                  <TableHead className="border px-4 py-3 text-left font-medium">Position</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {committeeMembers.map((member) => (
                  <TableRow 
                    key={member.slNo}
                    className={member.slNo % 2 === 0 ? "bg-white" : "bg-slate-50"}
                  >
                    <TableCell className="border px-4 py-3 text-gray-800">{member.slNo}</TableCell>
                    <TableCell className="border px-4 py-3 font-medium text-aemet-navy">{member.name}</TableCell>
                    <TableCell className="border px-4 py-3 text-gray-800">{member.designation}</TableCell>
                    <TableCell className="border px-4 py-3 text-gray-800">{member.department}</TableCell>
                    <TableCell className="border px-4 py-3 text-gray-800">{member.position}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
        
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-aemet-navy mb-4">Library Staff Details</h2>
          
          <div className="overflow-x-auto">
            <Table className="border-collapse w-full">
              <TableHeader className="bg-aemet-lightBlue">
                <TableRow>
                  <TableHead className="w-16 border px-4 py-3 text-left font-medium">Sl.No</TableHead>
                  <TableHead className="border px-4 py-3 text-left font-medium">Name</TableHead>
                  <TableHead className="border px-4 py-3 text-left font-medium">Designation</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {staffMembers.map((member) => (
                  <TableRow 
                    key={member.slNo}
                    className={member.slNo % 2 === 0 ? "bg-white" : "bg-slate-50"}
                  >
                    <TableCell className="border px-4 py-3 text-gray-800">{member.slNo}</TableCell>
                    <TableCell className="border px-4 py-3 font-medium text-aemet-navy">{member.name}</TableCell>
                    <TableCell className="border px-4 py-3 text-gray-800">{member.designation}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </LibraryLayout>
  );
};

export default LibraryCommittee;
