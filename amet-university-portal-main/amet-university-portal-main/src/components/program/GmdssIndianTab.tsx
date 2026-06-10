import React from 'react';
import { Flag, Phone, Mail, Printer, Building2, IndianRupee, AlertCircle } from 'lucide-react';

interface GmdssIndianTabProps {
  program: {
    gmdssIndianContent?: string;
    [key: string]: any;
  };
}

const GmdssIndianTab: React.FC<GmdssIndianTabProps> = ({ program }) => {
  if (!program.gmdssIndianContent) {
    return (
      <div className="text-gray-500 italic">
        GMDSS - Indian information will be added soon.
      </div>
    );
  }

  const content = program.gmdssIndianContent;
  
  // Extract address/location line
  const addressLine = content.split('\n')[0];
  
  // Check if there's a City College schedule
  const cityCollegeStart = content.indexOf('---CITY-COLLEGE-SCHEDULE---');
  const additionalStart = content.indexOf('---ADDITIONAL---');
  
  // Extract main AMET University schedule section
  const mainScheduleEnd = cityCollegeStart !== -1 ? cityCollegeStart : additionalStart;
  const mainSchedulePart = mainScheduleEnd !== -1 
    ? content.substring(0, mainScheduleEnd) 
    : content.split('---')[0];
  
  // Extract table section for AMET University
  const mainLines = mainSchedulePart.split('\n');
  const scheduleTitleIdx = mainLines.findIndex(l => l.includes('GMDSS INDIAN SCHEDULE'));
  const titleLine = scheduleTitleIdx !== -1 ? mainLines[scheduleTitleIdx] : mainLines[0];
  const tableLines = mainLines.filter(line => line.includes('|'));
  const headers = tableLines[0]?.split('|').map(h => h.trim()) || [];
  const rows = tableLines.slice(1).map(line => line.split('|').map(cell => cell.trim()));
  
  // Extract contact section for AMET University
  const contactStartIdx = mainLines.findIndex(l => l.includes('For Enquiry'));
  const contactEndIdx = mainLines.findIndex(l => l.includes('gmdss.amet@gmail.com'));
  const contactLines = contactStartIdx !== -1 && contactEndIdx !== -1 
    ? mainLines.slice(contactStartIdx, contactEndIdx + 1).filter(l => l.trim())
    : [];

  // Extract City College schedule section
  let cityCollegeContent = '';
  let cityCollegeTitle = '';
  let cityCollegeHeaders: string[] = [];
  let cityCollegeRows: string[][] = [];
  let cityCollegeContactLines: string[] = [];
  
  if (cityCollegeStart !== -1 && additionalStart !== -1) {
    cityCollegeContent = content.substring(cityCollegeStart + 27, additionalStart).trim();
    const cityLines = cityCollegeContent.split('\n');
    const cityScheduleTitleIdx = cityLines.findIndex(l => l.includes('GMDSS INDIAN SCHEDULE'));
    cityCollegeTitle = cityScheduleTitleIdx !== -1 ? cityLines[cityScheduleTitleIdx] : '';
    const cityTableLines = cityLines.filter(line => line.includes('|'));
    cityCollegeHeaders = cityTableLines[0]?.split('|').map(h => h.trim()) || [];
    cityCollegeRows = cityTableLines.slice(1).map(line => line.split('|').map(cell => cell.trim()));
    
    const cityContactStartIdx = cityLines.findIndex(l => l.includes('For Enquiry'));
    const cityContactEndIdx = cityLines.length;
    cityCollegeContactLines = cityContactStartIdx !== -1 
      ? cityLines.slice(cityContactStartIdx).filter(l => l.trim())
      : [];
  }

  // Extract additional info section
  const feesStart = content.indexOf('---FEES---');
  const additionalContent = additionalStart !== -1 && feesStart !== -1
    ? content.substring(additionalStart + 16, feesStart).trim()
    : '';
  
  // Extract fees section
  const courseDetailsStart = content.indexOf('---COURSE-DETAILS---');
  const feesContent = feesStart !== -1 && courseDetailsStart !== -1
    ? content.substring(feesStart + 12, courseDetailsStart).trim()
    : feesStart !== -1
    ? content.substring(feesStart + 12).trim()
    : '';
  
  // Extract course details section
  const paymentProcedureStart = content.indexOf('---PAYMENT-PROCEDURE---');
  const courseDetailsContent = courseDetailsStart !== -1 && paymentProcedureStart !== -1
    ? content.substring(courseDetailsStart + 20, paymentProcedureStart).trim()
    : courseDetailsStart !== -1
    ? content.substring(courseDetailsStart + 20).trim()
    : '';
  
  // Extract payment procedure section
  const paymentProcedureContent = paymentProcedureStart !== -1
    ? content.substring(paymentProcedureStart + 23).trim()
    : '';

  return (
    <div className="animate-fade-in space-y-6">
      <h2 className="text-2xl font-bold text-aemet-navy flex items-center gap-2">
        <Flag className="h-6 w-6 text-aemet-blue" />
        GMDSS - Indian
      </h2>

      {/* Address */}
      {addressLine && (
        <div className="bg-aemet-lightGray border-l-4 border-aemet-navy p-4 rounded-r-lg">
          <p className="text-sm font-semibold text-aemet-navy">{addressLine}</p>
        </div>
      )}
      
      {/* AMET University Schedule Table */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-aemet-navy mb-4">AMET University - {titleLine}</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-aemet-navy text-white">
                {headers.map((header, idx) => (
                  <th key={idx} className="px-3 py-2 text-left text-sm font-semibold border border-gray-300">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIdx) => (
                <tr key={rowIdx} className={rowIdx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  {row.map((cell, cellIdx) => (
                    <td key={cellIdx} className="px-3 py-2 text-sm text-gray-700 border border-gray-300">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* AMET University Contact Information */}
      <div className="bg-aemet-lightGray border-l-4 border-aemet-blue p-6 rounded-r-lg">
        <h4 className="text-lg font-semibold text-aemet-navy mb-4">Contact Information - AMET University</h4>
        <div className="space-y-2">
          {contactLines.map((line, idx) => {
            const icon = line.toLowerCase().includes('call') || line.toLowerCase().includes('landline')
              ? <Phone className="h-4 w-4 text-aemet-blue flex-shrink-0" />
              : line.toLowerCase().includes('fax')
              ? <Printer className="h-4 w-4 text-aemet-blue flex-shrink-0" />
              : line.toLowerCase().includes('email')
              ? <Mail className="h-4 w-4 text-aemet-blue flex-shrink-0" />
              : null;
            
            return (
              <div key={idx} className="flex items-start gap-2">
                {icon}
                <p className="text-sm text-gray-700">{line}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* AMET City College Schedule Table */}
      {cityCollegeRows.length > 0 && (
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-aemet-navy mb-4">AMET City College - {cityCollegeTitle}</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-aemet-navy text-white">
                  {cityCollegeHeaders.map((header, idx) => (
                    <th key={idx} className="px-3 py-2 text-left text-sm font-semibold border border-gray-300">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {cityCollegeRows.map((row, rowIdx) => (
                  <tr key={rowIdx} className={rowIdx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    {row.map((cell, cellIdx) => (
                      <td key={cellIdx} className="px-3 py-2 text-sm text-gray-700 border border-gray-300">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* AMET City College Contact Information */}
      {cityCollegeContactLines.length > 0 && (
        <div className="bg-aemet-lightGray border-l-4 border-green-500 p-6 rounded-r-lg">
          <h4 className="text-lg font-semibold text-aemet-navy mb-4">Contact Information - AMET City College</h4>
          <div className="space-y-2">
            {cityCollegeContactLines.map((line, idx) => {
              const icon = line.toLowerCase().includes('call') || line.toLowerCase().includes('director')
                ? <Phone className="h-4 w-4 text-green-600 flex-shrink-0" />
                : line.toLowerCase().includes('email')
                ? <Mail className="h-4 w-4 text-green-600 flex-shrink-0" />
                : null;
              
              return (
                <div key={idx} className="flex items-start gap-2">
                  {icon}
                  <p className="text-sm text-gray-700">{line}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Additional Information */}
      {additionalContent && (
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h4 className="text-lg font-semibold text-aemet-navy mb-4 flex items-center gap-2">
            <Building2 className="h-5 w-5 text-aemet-blue" />
            Additional Information
          </h4>
          <div className="space-y-4">
            {additionalContent.split('\n\n').map((para, idx) => {
              const isAlert = para.includes('Emergencies') || para.includes('Will appreciate');
              return (
                <div 
                  key={idx} 
                  className={isAlert ? 'bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r' : ''}
                >
                  <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">{para}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Fee Structure */}
      {feesContent && (
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h4 className="text-lg font-semibold text-aemet-navy mb-4 flex items-center gap-2">
            <IndianRupee className="h-5 w-5 text-aemet-blue" />
            Fee Structure
          </h4>
          <div className="space-y-3">
            {feesContent.split('\n').filter(l => l.trim()).map((line, idx) => {
              const isHeading = line.includes('Advance Booking Fees:') || 
                               line.includes('Course Fees:') ||
                               line.includes('RESIT FEE');
              const isSubHeading = line.includes('With Hostel') || line.includes('Without Hostel');
              const isNote = line.toLowerCase().includes('note:') || 
                            line.includes('Non-Refundable') ||
                            line.includes('No Hostel Facility') ||
                            line.includes('No other Hidden Fees');
              
              return (
                <div 
                  key={idx}
                  className={`
                    ${isHeading ? 'font-bold text-aemet-navy text-base mt-3' : ''}
                    ${isSubHeading ? 'font-semibold text-aemet-navy ml-4' : ''}
                    ${isNote ? 'bg-blue-50 border-l-4 border-blue-500 p-3 rounded-r font-medium' : ''}
                    ${!isHeading && !isSubHeading && !isNote ? 'text-gray-700 ml-4' : ''}
                  `}
                >
                  <p className="text-sm leading-relaxed">{line}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Course Details & Requirements */}
      {courseDetailsContent && (
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h4 className="text-lg font-semibold text-aemet-navy mb-4 flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-aemet-blue" />
            Course Information & Requirements
          </h4>
          <div className="space-y-4">
            {courseDetailsContent.split('\n\n').map((section, idx) => {
              const lines = section.split('\n').filter(l => l.trim());
              if (lines.length === 0) return null;
              
              const firstLine = lines[0];
              const isSectionHeading = firstLine.includes('Introduction:') || 
                                   firstLine.includes('Duration of the Course:') || 
                                   firstLine.includes('Eligibility:') ||
                                   firstLine.includes('Following Documents') ||
                                   firstLine.includes('Dress Code:');
              
              return (
                <div key={idx} className="space-y-2">
                  {lines.map((line, lineIdx) => {
                    const trimmedLine = line.trim();
                    const isHeading = trimmedLine.includes(':') && lineIdx === 0 && isSectionHeading;
                    const isBullet = !isHeading && lineIdx > 0 && !trimmedLine.includes('*');
                    const isWarning = trimmedLine.includes('*') || trimmedLine.includes('Decision') || trimmedLine.includes('forfeited');
                    const isDiscount = trimmedLine.includes('Discount') || trimmedLine.includes('Aluminis');
                    
                    return (
                      <div 
                        key={lineIdx}
                        className={`
                          ${isHeading ? 'font-bold text-aemet-navy text-base mt-3' : ''}
                          ${isBullet ? 'ml-4 flex items-start gap-2' : ''}
                          ${isWarning ? 'bg-red-50 border-l-4 border-red-500 p-3 rounded-r italic' : ''}
                          ${isDiscount ? 'bg-green-50 border-l-4 border-green-500 p-3 rounded-r' : ''}
                          ${!isHeading && !isBullet && !isWarning && !isDiscount ? 'text-gray-700' : ''}
                        `}
                      >
                        {isBullet && <span className="text-aemet-blue mt-1 flex-shrink-0">•</span>}
                        <p className="text-sm leading-relaxed">{trimmedLine}</p>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Payment Procedure */}
      {paymentProcedureContent && (
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h4 className="text-lg font-semibold text-aemet-navy mb-4 flex items-center gap-2">
            <IndianRupee className="h-5 w-5 text-aemet-blue" />
            Payment Procedure & Guidelines
          </h4>
          <div className="space-y-4">
            {paymentProcedureContent.split('\n\n').map((section, idx) => {
              const lines = section.split('\n').filter(l => l.trim());
              if (lines.length === 0) return null;
              
              const firstLine = lines[0];
              const isBankDetails = firstLine.includes('Following are AMET');
              const isImportantNote = firstLine.includes('Important Note:');
              const isHostelNote = firstLine.includes('NOTE:');
              
              return (
                <div 
                  key={idx} 
                  className={`
                    ${isBankDetails ? 'bg-blue-50 border border-blue-200 rounded-lg p-4' : ''}
                    ${isImportantNote || isHostelNote ? 'bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r' : ''}
                  `}
                >
                  {lines.map((line, lineIdx) => {
                    const trimmedLine = line.trim();
                    const isMainHeading = trimmedLine.includes('Online Payment:') || 
                                         trimmedLine.includes('Following are AMET') ||
                                         trimmedLine.includes('Important Note:');
                    const isBankField = trimmedLine.includes('Payee Name:') || 
                                       trimmedLine.includes('Banker\'s Name:') ||
                                       trimmedLine.includes('Address:') ||
                                       trimmedLine.includes('Bank A/C Number:') ||
                                       trimmedLine.includes('Type of Account:') ||
                                       trimmedLine.includes('Branch Code Number:') ||
                                       trimmedLine.includes('ECS / IFSC');
                    const isWarning = trimmedLine.includes('not responsible') ||
                                     trimmedLine.includes('not permitted') ||
                                     trimmedLine.includes('must be present') ||
                                     trimmedLine.includes('only one time');
                    
                    return (
                      <div 
                        key={lineIdx}
                        className={`
                          ${isMainHeading ? 'font-bold text-aemet-navy text-base mb-2' : ''}
                          ${isBankField ? 'font-semibold text-gray-800' : ''}
                          ${isWarning ? 'text-red-700 font-medium' : ''}
                          ${!isMainHeading && !isBankField && !isWarning ? 'text-gray-700' : ''}
                          ${lineIdx > 0 ? 'mt-1' : ''}
                        `}
                      >
                        <p className="text-sm leading-relaxed">{trimmedLine}</p>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default GmdssIndianTab;
