
import React from 'react';
import { Star, Bookmark, Monitor } from 'lucide-react';

const digitizationItems = [
  "32 DTH Channels through SWAYAMPRABHA",
  "Talking book Library with Audio Books CDs",
  "Educational videos related to maritime studies",
  "Equipped with reading halls in two floors with reference section",
  "Library has sensitized its stakeholder by conducting more than 25 awareness events",
  "More than 40000 videos of NPTEL are available in Hard Disc",
  "Multimedia Supplements of Text Books and Reference Books in CD format",
  "Organization of Book Exhibitions/Display of new books",
  "Organization of Book Review / Book Talk Sessions",
  'PhD Theses are digitized and uploaded in Shodhganga',
  "Proper system of obtaining, analysis and action pertaining to feedback from the Users of library services",
  "Dissertation's and Project Reports are digitized Question bank, Model question papers and study materials are uploaded in Dspace",
  "Scanning and preservation of rare books for reference purposes",
  "Separate Audio-Visual Section",
  "URKUND Plagiarism detection software",
  "Users can also submit their suggestions / grievances through general interaction, making an application, and through e-mail to vbsrajanlibrary@ametuniv.ac.in",
  "Well protected with fire alarms and CCTV security systems",
  "E-Reference services",
];

const equipmentItems = [
  "Reprographic facility (2 machines)",
  "Scanners (3)",
  "Printers (3)",
  "Computers - 50 computers including 40 in Digital Knowledge Centre",
  "Barcode scanner - 5",
  "RFID Antenna, Gate, Workstation - 2",
  "Plasma TV - 1",
  "LCD Projector - 1",
  "Audio Visual Room with audio video facilities",
];

const UniquenessSection = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-10">
      <h2 className="text-2xl font-semibold text-aemet-navy mb-6 flex items-center">
        <Star className="h-6 w-6 mr-2 text-aemet-orange" />
        Digitization Facilities at Library
      </h2>

      <p className="text-gray-700 mb-4">
        Digitization facilities are inevitable in this IT era in University environment. AMET has established and using the following digitization facilities:
      </p>
      
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {digitizationItems.map((item, index) => (
          <li key={index} className="flex items-start bg-slate-50 p-4 rounded-lg">
            <Bookmark className="h-5 w-5 text-aemet-blue mt-1 mr-2 flex-shrink-0" />
            <p className="text-gray-700">
              {index === 9 ? (
                <>PhD Theses are digitized and uploaded in Shodhganga (<a href="https://shodhganga.inflibnet.ac.in/handle/10603/190485" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://shodhganga.inflibnet.ac.in/handle/10603/190485</a>)</>
              ) : item}
            </p>
          </li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold text-aemet-navy mb-4 flex items-center">
        <Monitor className="h-5 w-5 mr-2 text-aemet-blue" />
        Digital Equipment Facilities
      </h3>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {equipmentItems.map((item, index) => (
          <li key={index} className="flex items-start bg-slate-50 p-3 rounded-lg">
            <Bookmark className="h-4 w-4 text-aemet-blue mt-1 mr-2 flex-shrink-0" />
            <p className="text-gray-700 text-sm">{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UniquenessSection;
