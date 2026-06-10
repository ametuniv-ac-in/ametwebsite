
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Book, BookOpen, FileText, Video, Newspaper, Database } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

type ResourceItem = {
  resource: string;
  count: string;
  icon: LucideIcon;
};

interface ResourceCollectionTableProps {
  resources: ResourceItem[];
}

const ResourceCollectionTable: React.FC<ResourceCollectionTableProps> = ({ resources }) => {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
      <Table>
        <TableHeader>
          <TableRow className="bg-slate-50">
            <TableHead className="w-[50px]"></TableHead>
            <TableHead className="font-bold">Resources</TableHead>
            <TableHead className="text-right font-bold">Numbers</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {resources.map((item, index) => (
            <TableRow key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
              <TableCell>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-aemet-blue/10">
                  <item.icon className="h-4 w-4 text-aemet-blue" />
                </div>
              </TableCell>
              <TableCell className="font-medium">{item.resource}</TableCell>
              <TableCell className="text-right">{item.count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ResourceCollectionTable;
