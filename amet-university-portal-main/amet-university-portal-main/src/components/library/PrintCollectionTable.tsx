
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { PrintCollectionItem } from './ResourcesData';

interface PrintCollectionTableProps {
  collections: PrintCollectionItem[];
  title: string;
}

const PrintCollectionTable: React.FC<PrintCollectionTableProps> = ({ collections, title }) => {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
      <Table>
        <TableHeader>
          <TableRow className="bg-slate-50">
            <TableHead className="w-[80px] font-bold">Sr. No.</TableHead>
            <TableHead className="font-bold">Collection Type</TableHead>
            <TableHead className="text-right font-bold">Number of Items</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {collections.map((item, index) => (
            <TableRow key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
              <TableCell>{item.sno}</TableCell>
              <TableCell className="font-medium">{item.collectionType}</TableCell>
              <TableCell className="text-right">{item.numberOfItems}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PrintCollectionTable;
