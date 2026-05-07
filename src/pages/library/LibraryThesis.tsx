
import React from 'react';
import LibraryLayout from '@/components/library/LibraryLayout';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

type ThesisEntry = {
  author: string;
  regNo: string;
  title: string;
};

const thesisList: ThesisEntry[] = [
  {
    author: "Srimurugan.R",
    regNo: "2014395101",
    title: "Experimental Investigation and Analysis of Mechanical and Machining Characterstics of GFRP Based Composite Material"
  },
  {
    author: "V.S.Narayanan",
    regNo: "2015096113",
    title: "Production and Distribution of Educational Study Materials a Study with Reference to the Higher Educational Institution of Andhra Pradesh State"
  },
  {
    author: "Chithik Raja M",
    regNo: "2014393230",
    title: "Studies on Hybrid Machine Learning Algorithms for Intruder Detection"
  },
  {
    author: "Narasimha Murty Dusi",
    regNo: "2013398356",
    title: "Conventional Mysterious Problems On Fermat Pseudoprimes"
  },
  {
    author: "Swarnakala",
    regNo: "2015197192",
    title: "Purification and Characterization of 5-methylundecan-2-one from Padina Gymnospora and its Anticancer Activity against hct-116 Human Colorectal Cancer Cell Line"
  },
  {
    author: "Kirubakaramoorthi.R",
    regNo: "2014193207",
    title: "A Secured Cloud Data Transaction using Deduplication and Encryption Techniques"
  },
  {
    author: "S. Balaji",
    regNo: "2015096103",
    title: "Consumer Buying Behaviour Towards Sugar Free Sweeteners for Diabetic: An Empirical Analysis"
  },
  {
    author: "Krishna Prasad",
    regNo: "2008396103",
    title: "Modern Dhow Shipping and its Relevance to Coastal Shipping in India"
  },
  {
    author: "Syed Abdul Syed",
    regNo: "2014393215",
    title: "Enhanced Routing Protocol for Mobile Adhoc Networks"
  },
  {
    author: "Mohamed Haneefa M",
    regNo: "2013398246",
    title: "Synthesis Characterization and Antimicrobial Activity Studies of Bioactive Materials Functionalized Metal Oxide Nanoparticles- A Green Approach"
  },
  {
    author: "Arun Agarwal",
    regNo: "2013293218",
    title: "Enhanced PC-CC Channel Coding Techniques for 5G Physical Layer"
  },
  {
    author: "K. Manigandan",
    regNo: "2013299142",
    title: "Vocabulary Learning Strategies: To Develop the Limited English Proficiency Students Speaking Skills"
  },
  {
    author: "F.M. Sajid Marickar",
    regNo: "2013396150",
    title: "An Empirical Study on the Emerging Trends in Multichannel Retail Environment in Dubai"
  },
  {
    author: "R. Vijayaraj",
    regNo: "2016297501",
    title: "A Novel Antidiabetic Compound from Marine Macroalgae and its Hypoglycemic Potentials"
  },
  {
    author: "M. Venkatramani",
    regNo: "2012297105",
    title: "Purification and Characterization of Antifungal Secondary Metabolites from Marine Actinomycetes for the Control of Plant Pathogenic Fungi"
  },
  {
    author: "Prettysha. G",
    regNo: "2013398632",
    title: "Influence of Attitude Towards Corporate Social Responsibility and Organizational Culture on Internal Stakeholders"
  },
  {
    author: "Kalyan Sagar Kadali",
    regNo: "2014293148",
    title: "Cost-Effective Environmentally Sustainable Operation of Thermal Power System Using Grey Wolf Optimization Algorithm"
  },
  {
    author: "Madhumita Kothari",
    regNo: "2014398614",
    title: "Blue Economy and Ocean Governance"
  },
  {
    author: "Jenitha. G",
    regNo: "2013298360",
    title: "Energy Graph on Domination Parameters"
  },
  {
    author: "Subhash Reddy. B",
    regNo: "2014398520",
    title: "Pattern of Information Use by the Postgraduate Students in the Libraries of Engineering Colleges in Bangalore"
  },
  {
    author: "Cyril C. George",
    regNo: "215196123",
    title: "Congestion Problem in Container Terminals of Chennai Port in the Context of Ease of International Trade"
  },
  {
    author: "M.S. Meher Taj",
    regNo: "2013298358",
    title: "Studies on Novel Rule Based System Using Fuzzy Petri Nets"
  },
  {
    author: "Ramesh Palanisamy",
    regNo: "2013393252",
    title: "Enhanced Hybrid Routing Protocols for Mobile Adhoc Network"
  },
  {
    author: "M. Sudha",
    regNo: "2013398323",
    title: "Exploring Performance with The Rough Set Theory Based on Data Mining"
  },
  {
    author: "Senthilkumar Moorthy",
    regNo: "2013393237",
    title: "Enhanced Octagonal Multimedia Compression Algorithm Using Data Hiding Techniques for Secured Data Transmission"
  },
  {
    author: "S. Chitra",
    regNo: "2013298263",
    title: "Investigation on Corrosion Behaviour and Microbial Growth Inhibition Using Non-Toxic Antimicrobial Drugs in Aqueous Environment"
  },
  {
    author: "A. Sivasakthi",
    regNo: "20164941001",
    title: "Enhancing the Efficiency of Recovery of Heavy Oil by Thermal and Chemical Methods in Petroleum Reservoir"
  },
  {
    author: "Duggirala Rajasekhar",
    regNo: "2015191125",
    title: "Innovative Modeling of NOx/SOx Emissions from Ships and Engineering Solutions"
  },
  {
    author: "Ashutosh Kumar",
    regNo: "2013496104",
    title: "Strategies Adopted by Cement Industry to Penetrate into Marketing Labyrinth and Intricate Maze of Competitors in B2B Relationship and Management of Air Pollution Around Cement Factories Using Indigenous Flora"
  },
  {
    author: "Vijay Bhaskar Reddy Konala",
    regNo: "2013297115",
    title: "Structural, Molecular and Biochemical Analysis of Mesenchymal Stem Cells from Different Human Pre- and Post-Natal Tissues in order to understand the Therapeutic Potential"
  },
];

const LibraryThesis = () => {
  return (
    <LibraryLayout 
      title="New Arrivals" 
      subtitle="Browse our collection of recently submitted theses from AMET University scholars."
    >
      <div>
        <h1 className="text-3xl font-bold text-aemet-navy mb-6">New Arrivals</h1>
        <p className="text-gray-700 mb-4">
          Browse our collection of recently submitted theses from AMET University scholars.
        </p>
        
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-aemet-navy">Thesis New Arrivals</h2>
          <a href="https://shodhganga.inflibnet.ac.in/handle/10603/190485" target="_blank" rel="noopener noreferrer">
            <Button className="bg-aemet-blue hover:bg-aemet-navy text-white flex items-center gap-2">
              <span>Shodhganga New Arrival of Thesis</span>
              <ExternalLink className="h-4 w-4" />
            </Button>
          </a>
        </div>

        <div className="overflow-x-auto">
          <Table className="border-collapse w-full">
            <TableHeader className="bg-aemet-lightBlue">
              <TableRow>
                <TableHead className="w-16 border px-4 py-3 text-left font-medium">S.No</TableHead>
                <TableHead className="w-64 border px-4 py-3 text-left font-medium">Scholar & Registration No.</TableHead>
                <TableHead className="border px-4 py-3 text-left font-medium">Thesis Title</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {thesisList.map((thesis, index) => (
                <TableRow 
                  key={index}
                  className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                >
                  <TableCell className="border px-4 py-3 text-gray-800">{index + 1}</TableCell>
                  <TableCell className="border px-4 py-3">
                    <div className="font-medium text-aemet-navy">{thesis.author}</div>
                    <div className="text-sm text-gray-600">[Reg. No. {thesis.regNo}]</div>
                  </TableCell>
                  <TableCell className="border px-4 py-3 text-gray-800">"{thesis.title}"</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </LibraryLayout>
  );
};

export default LibraryThesis;
