
import React from 'react';
import ResearchLayout from '@/components/research/ResearchLayout';
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const ResearchEcosystem = () => {
  // Research Development Cell data
  const researchDevelopmentCellData = [
    { 
      id: 1, 
      position: "Dean - Research and Development", 
      name: "Dr. R. Muthezhilan", 
      designation: "Dean – R&D and Professor, Department of Marine Biotechnology" 
    },
    { 
      id: 2, 
      position: "Director - Academic Research", 
      name: "Dr.D.Lakshmi", 
      designation: "Professor, Department of Electrical and Electronics Engineering" 
    },
    { 
      id: 3, 
      position: "Director-Publications", 
      name: "Dr. K. Gayathri", 
      designation: "Associate Professor, Department of Physics" 
    },
    { 
      id: 4, 
      position: "Director - Sponsored Research and Special Schemes", 
      name: "Dr. R. Vijayaraj", 
      designation: "Assistant Professor, Department of Marine Biotechnology" 
    },
    { 
      id: 5, 
      position: "Director - Patents and Technology Transfer (IPR Cell, KAPILA)", 
      name: "Dr. R. K. Padmashini", 
      designation: "Assistant Professor, Department of Electrical and Electronics Engineering" 
    },
  ];

  return (
    <ResearchLayout title="Research Ecosystem">
      <div className="py-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-aemet-navy mb-4">Research Ecosystem</h1>
          <p className="max-w-3xl mx-auto text-gray-600">
            A comprehensive framework designed to support and enhance research activities at AMET University
          </p>
          <Separator className="max-w-md mx-auto my-6 bg-aemet-blue/30" />
        </div>

        <div className="max-w-4xl mx-auto">
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-aemet-navy mb-4">Prelude</h2>
            <p className="text-gray-700 mb-4">
              The National Education Policy 2020 aimed to bring about transformational changes in the Indian education system and catered to various aspects including research and higher education. The NEP Concentrate on major criteria such as; Multidisciplinary Approach, Research Funding, Research Fellowships and Scholarships, Research Quality and Impact, Research in Regional Languages, International Collaboration and Research in Education.
            </p>
            <p className="text-gray-700 mb-4">
              In order to enrich the Research Ecosystem and facilitate Research activities under one roof, the Research and Development Cell has been devolved into various Centers/ Cells. The info gram of the Research Ecosystem is shown below
            </p>
            
            <div className="my-8 flex justify-center">
              <img 
                src="/lovable-uploads/9a3a50c7-ea34-43bd-9934-1156ad5d4006.png" 
                alt="AMET University Research Ecosystem" 
                className="max-w-full md:max-w-lg rounded-full shadow-lg border-4 border-gray-100"
              />
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-aemet-navy mb-4">Research Development Cell</h2>
            
            <div className="overflow-auto mb-8">
              <Table className="border rounded-md">
                <TableHeader className="bg-slate-50">
                  <TableRow>
                    <TableHead className="w-16 text-center">S.No</TableHead>
                    <TableHead>Name of the Centre/Cell under RDC</TableHead>
                    <TableHead>Dean/Director</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {researchDevelopmentCellData.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="text-center font-medium">{item.id}</TableCell>
                      <TableCell className="font-medium">{item.position}</TableCell>
                      <TableCell>
                        <div>
                          <span className="font-medium">{item.name}</span>
                          <br />
                          <span className="text-gray-600 text-sm">{item.designation}</span>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </section>
        </div>
      </div>
    </ResearchLayout>
  );
};

export default ResearchEcosystem;
