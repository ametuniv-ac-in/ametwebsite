
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

type EJournalItem = {
  sno: number;
  database: string;
  journals: number;
};

interface EJournalsTableProps {
  journals: EJournalItem[];
}

const EJournalsTable: React.FC<EJournalsTableProps> = ({ journals }) => {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
      <Table>
        <TableHeader>
          <TableRow className="bg-slate-50">
            <TableHead className="w-[80px] font-bold">S.No</TableHead>
            <TableHead className="font-bold">Journal Database</TableHead>
            <TableHead className="text-right font-bold">No. of Journals</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {journals.map((item, index) => (
            <TableRow key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
              <TableCell>{item.sno}</TableCell>
              <TableCell className="font-medium">{item.database}</TableCell>
              <TableCell className="text-right">{item.journals.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default EJournalsTable;
