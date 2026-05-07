import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ProgramDetails } from './ProgramTypeDefinitions';

interface FacultyListTabProps {
  program: ProgramDetails;
}

const FacultyListTab: React.FC<FacultyListTabProps> = ({ program }) => {
  if (!program.facultyList || program.facultyList.length === 0) {
    return <p className="text-muted-foreground">No faculty information available.</p>;
  }

  return (
    <div>
      <h3 className="text-xl font-bold text-foreground mb-4">Faculty</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-16">S.No</TableHead>
            <TableHead>Faculty Name</TableHead>
            <TableHead>Designation</TableHead>
            <TableHead>Highest Degree</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {program.facultyList.map((faculty, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell className="font-medium">{faculty.name}</TableCell>
              <TableCell>{faculty.designation}</TableCell>
              <TableCell>{faculty.qualification}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default FacultyListTab;
