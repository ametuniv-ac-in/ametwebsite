
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: string;
  volume: string;
  pages: string;
}

interface RecentPublicationsProps {
  publications: Publication[];
}

const RecentPublications: React.FC<RecentPublicationsProps> = ({ publications }) => {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50%]">Publication</TableHead>
            <TableHead>Journal</TableHead>
            <TableHead>Year</TableHead>
            <TableHead>Volume & Pages</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {publications.map((pub, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">
                <div>
                  <p className="text-aemet-navy">{pub.title}</p>
                  <p className="text-xs text-gray-500 mt-1">{pub.authors}</p>
                </div>
              </TableCell>
              <TableCell>{pub.journal}</TableCell>
              <TableCell>{pub.year}</TableCell>
              <TableCell>{pub.volume}, pp. {pub.pages}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default RecentPublications;
