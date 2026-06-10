
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ExternalLink } from 'lucide-react';

type LinkItem = {
  label: string;
  url: string;
};

type EDatabaseItem = {
  sno: number;
  database: string;
  url?: string;
  note?: string;
  multipleLinks?: LinkItem[];
};

interface EDatabasesTableProps {
  databases: EDatabaseItem[];
}

const EDatabasesTable: React.FC<EDatabasesTableProps> = ({ databases }) => {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
      <Table>
        <TableHeader>
          <TableRow className="bg-slate-50">
            <TableHead className="w-[80px] font-bold">Sl.No</TableHead>
            <TableHead className="font-bold">Database</TableHead>
            <TableHead className="text-right font-bold">URL Links</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {databases.map((item, index) => (
            <TableRow key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
              <TableCell>{item.sno}</TableCell>
              <TableCell className="font-medium">
                {item.database}
                {item.note && <div className="text-sm text-gray-500 mt-1">{item.note}</div>}
              </TableCell>
              <TableCell className="text-right">
                {item.url && (
                  <a 
                    href={item.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-800"
                  >
                    Click Here <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                )}
                {item.multipleLinks && (
                  <div className="flex flex-col items-end gap-2">
                    {item.multipleLinks.map((link, i) => (
                      <a 
                        key={i}
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center text-blue-600 hover:text-blue-800"
                      >
                        {link.label}: Click Here <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    ))}
                  </div>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default EDatabasesTable;
