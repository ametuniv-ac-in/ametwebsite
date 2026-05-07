import React from 'react';
import { Card } from "@/components/ui/card";

const maritimeAnnouncements = [
  "1st December 2026 Applications available",
  "AMETCET 2026\nPhase I- April\nPhase II – May\nDates will be informed shortly",
  "AMETCET result dates will be informed shortly",
];

const generalAnnouncements = [
  "1st December 2026 Applications available",
  "AMETCET 2026\nPhase I- April\nPhase II – May\nDates will be informed shortly",
  "AMETCET result dates will be informed shortly",
];

const ImportantAnnouncements = () => {
  return (
    <Card className="p-6 md:p-8 shadow-md bg-white mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-amet-navy mb-8 text-center">
        Important Announcements
      </h2>
      
      {/* Maritime Programmes */}
      <div className="mb-8">
        <h3 className="text-lg md:text-xl font-semibold text-amet-navy mb-4 text-center">
          For Maritime Programmes BE Marine and B.Sc Nautical Science
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {maritimeAnnouncements.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-[#152043] rounded-lg min-h-[100px] text-center"
            >
              <p className="text-sm text-white whitespace-pre-line leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* General UG and PG Programmes */}
      <div>
        <h3 className="text-lg md:text-xl font-semibold text-amet-navy mb-4 text-center">
          For General UG and PG Programmes
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {generalAnnouncements.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-[#152043] rounded-lg min-h-[100px] text-center"
            >
              <p className="text-sm text-white whitespace-pre-line leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ImportantAnnouncements;
