
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

type EBookItem = {
  database: string;
  resources: number;
  isTotal?: boolean;
};

interface EBooksTableProps {
  books: EBookItem[];
}

const EBooksTable: React.FC<EBooksTableProps> = ({ books }) => {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
      <Table>
        <TableHeader>
          <TableRow className="bg-slate-50">
            <TableHead className="font-bold">Name of databases</TableHead>
            <TableHead className="text-right font-bold">No of e-resources with full text access</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {books.map((item, index) => (
            <TableRow key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
              <TableCell className={item.isTotal ? "font-bold" : "font-medium"}>{item.database}</TableCell>
              <TableCell className={`text-right ${item.isTotal ? "font-bold" : ""}`}>{item.resources.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default EBooksTable;
