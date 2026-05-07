
import React from 'react';
import { Table as TableIcon } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const FloorPlanSection = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-10">
      <h2 className="text-2xl font-semibold text-aemet-navy mb-6 flex items-center">
        <TableIcon className="h-6 w-6 mr-2 text-aemet-blue" />
        Library Floor Plan and Seating Capacity
      </h2>
      
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">Floor</TableHead>
              <TableHead className="font-bold">Description</TableHead>
              <TableHead className="font-bold text-right">Seating Capacity</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">First Floor</TableCell>
              <TableCell className="text-sm">
                Talking Book Library, Circulation counter, RFID Gate, RFID work station, automation server room, 
                E-Gate entry point, Plasma TV, New Arrival display rack, Reprography section, Question bank section 
                Web OPAC terminal, DSpace Institutional repository, Librarian cabin, Rare books Collections and archives section, 
                Newspaper display Rack, AICTE Recommended book collections, IMO publication book collections, AMET study materials.
                <p className="mt-3">
                  <strong>Stack Area – I:</strong> Marine Engineering, Nautical Science, Marine Biotechnology, Naval Architecture, 
                  Petroleum Engineering, Electrical and Electronics Engineering, Mechanical Engineering, Food Processing & Technology, 
                  Mining Engineering, Mathematics, Physics, Chemistry, Career Information & Guidance and General area of studies. Reading Hall.
                </p>
              </TableCell>
              <TableCell className="text-right">300</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Second Floor</TableCell>
              <TableCell className="text-sm">
                Circulation counter, E-Gate Entry point, Wi-fi Connecting point, Assistant Librarian Cabin, Reference Section, 
                Periodical Section, Book Bank section, Theses/Dissertation section, Back Volumes Section, Store Room.
                <p className="mt-3">
                  <strong>Stack Area – II:</strong> Management Studies, Computer Science, Information Technology, 
                  English literature, Reading Hall
                </p>
              </TableCell>
              <TableCell className="text-right">310</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Digital Library</TableCell>
              <TableCell className="text-sm">
                Separate section for Digital Library, which consists of 50 computer systems student can be access for 
                E-Resource at the free of cost.
              </TableCell>
              <TableCell className="text-right">50</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Audio-visual Section</TableCell>
              <TableCell className="text-sm">
                Audio-visual section of the Central Library is equipped with a computer system well supported by multimedia accessories 
                for effective and efficient utilization of National Programme on Technology Enhanced Learning (NPTEL) courses with the 
                available technical videos, CD ROMS etc and E-Books CDs Section and Research corner.
              </TableCell>
              <TableCell className="text-right">40</TableCell>
            </TableRow>
            <TableRow className="font-bold bg-gray-50">
              <TableCell>Total</TableCell>
              <TableCell></TableCell>
              <TableCell className="text-right">700</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default FloorPlanSection;
