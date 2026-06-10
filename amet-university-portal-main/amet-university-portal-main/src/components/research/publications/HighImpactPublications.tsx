
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export interface HighImpactPublication {
  title: string;
  journal: string;
  impactFactor: number;
}

interface HighImpactPublicationsProps {
  publications: HighImpactPublication[];
}

const HighImpactPublications: React.FC<HighImpactPublicationsProps> = ({ publications }) => {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200">
      <h3 className="text-xl font-semibold text-aemet-navy mb-4">Selected Articles in High Impact Factor Journals (IF {">"} 6)</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[60%]">Publication Title</TableHead>
            <TableHead>Journal</TableHead>
            <TableHead>Impact Factor</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {publications.map((pub, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium text-aemet-navy">{pub.title}</TableCell>
              <TableCell>{pub.journal}</TableCell>
              <TableCell>{pub.impactFactor}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default HighImpactPublications;
