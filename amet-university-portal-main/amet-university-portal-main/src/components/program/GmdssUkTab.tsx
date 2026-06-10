import React from 'react';
import { Flag, Phone, Mail, IndianRupee, MapPin, FileText, Building2, CalendarDays, Users, ShieldAlert, Download } from 'lucide-react';

interface GmdssUkTabProps {
  program: {
    gmdssUkContent?: string;
    [key: string]: any;
  };
}

const scheduleData = [
  { sl: 1, from: '26.01.2026', to: '04.02.2026', exam: '05.02.2026 TO 06.02.2026', seats: 12, batch: 336 },
  { sl: 2, from: '16.02.2026', to: '25.02.2026', exam: '26.02.2026 TO 27.02.2026', seats: 12, batch: 337 },
  { sl: 3, from: '23.03.2026', to: '31.03.2026', exam: '31.03.2026', seats: 12, batch: 338 },
  { sl: 4, from: '20.04.2026', to: '28.04.2026', exam: '28.04.2026', seats: 12, batch: 339 },
  { sl: 5, from: '25.05.2026', to: '02.06.2026', exam: '02.06.2026', seats: 12, batch: 340 },
  { sl: 6, from: '15.06.2026', to: '23.06.2026', exam: '23.06.2026', seats: 12, batch: 341 },
  { sl: 7, from: '20.07.2026', to: '28.07.2026', exam: '28.07.2026', seats: 12, batch: 342 },
  { sl: 8, from: '17.08.2026', to: '25.08.2026', exam: '25.08.2026', seats: 12, batch: 343 },
  { sl: 9, from: '28.09.2026', to: '06.10.2026', exam: '06.10.2026', seats: 12, batch: 344 },
  { sl: 10, from: '26.10.2026', to: '03.11.2026', exam: '03.11.2026', seats: 12, batch: 345 },
  { sl: 11, from: '23.11.2026', to: '01.12.2026', exam: '01.12.2026', seats: 12, batch: 346 },
  { sl: 12, from: '14.12.2026', to: '22.12.2026', exam: '22.12.2026', seats: 12, batch: 347 },
];

const GmdssUkTab: React.FC<GmdssUkTabProps> = () => {
  return (
    <div className="animate-fade-in space-y-6">
      {/* Header */}
      <h2 className="text-2xl font-bold text-aemet-navy flex items-center gap-2">
        <Flag className="h-6 w-6 text-aemet-blue" />
        GMDSS - U.K.
      </h2>

      {/* Address */}
      <div className="flex items-start gap-3 bg-muted/50 border border-border rounded-lg p-4">
        <MapPin className="h-5 w-5 text-aemet-blue mt-0.5 flex-shrink-0" />
        <p className="text-sm text-foreground font-medium">
          NO.135, East Coast Road, Kanathur, Muttukadu Post, Chennai. Pin Code: 603112.
        </p>
      </div>

      {/* Schedule Table */}
      <div className="bg-card border border-border rounded-lg overflow-hidden shadow-sm">
        <div className="bg-aemet-navy px-6 py-4 flex items-center gap-3">
          <CalendarDays className="h-5 w-5 text-white" />
          <h3 className="text-lg font-semibold text-white">
            GMDSS U.K. Schedule — January 2026 to December 2026
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-aemet-navy/90 text-white">
                <th className="px-3 py-2.5 text-left text-sm font-semibold border border-aemet-navy/60">SL.NO.</th>
                <th className="px-3 py-2.5 text-left text-sm font-semibold border border-aemet-navy/60">FROM</th>
                <th className="px-3 py-2.5 text-left text-sm font-semibold border border-aemet-navy/60">TO</th>
                <th className="px-3 py-2.5 text-left text-sm font-semibold border border-aemet-navy/60">EXAMINATION DATE</th>
                <th className="px-3 py-2.5 text-center text-sm font-semibold border border-aemet-navy/60">NO OF SEATS</th>
                <th className="px-3 py-2.5 text-center text-sm font-semibold border border-aemet-navy/60">BATCH NO</th>
              </tr>
            </thead>
            <tbody>
              {scheduleData.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-muted/30' : 'bg-card'}>
                  <td className="px-3 py-2 text-sm border border-border text-foreground">{row.sl}</td>
                  <td className="px-3 py-2 text-sm border border-border text-foreground">{row.from}</td>
                  <td className="px-3 py-2 text-sm border border-border text-foreground">{row.to}</td>
                  <td className="px-3 py-2 text-sm border border-border text-foreground">{row.exam}</td>
                  <td className="px-3 py-2 text-sm border border-border text-foreground text-center">{row.seats}</td>
                  <td className="px-3 py-2 text-sm border border-border text-foreground text-center">{row.batch}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Contact for Enquiry */}
      <div className="bg-muted/50 border-l-4 border-aemet-blue p-6 rounded-r-lg space-y-3">
        <h4 className="text-lg font-semibold text-aemet-navy">For Enquiry and Booking GMDSS</h4>
        <div className="flex items-start gap-2">
          <Phone className="h-4 w-4 text-aemet-blue mt-0.5 flex-shrink-0" />
          <p className="text-sm text-foreground">Call Direct Line – <span className="font-semibold">9344007360</span> (0900 – 1600 HRS) on working days</p>
        </div>
        <div className="flex items-start gap-2">
          <Mail className="h-4 w-4 text-aemet-blue mt-0.5 flex-shrink-0" />
          <p className="text-sm text-foreground">GMDSS Admission Email: <a href="mailto:gmdss.amet@gmail.com" className="font-semibold text-aemet-blue hover:underline">gmdss.amet@gmail.com</a></p>
        </div>
      </div>

      {/* Eligibility */}
      <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
        <h4 className="text-lg font-semibold text-aemet-navy mb-3 flex items-center gap-2">
          <FileText className="h-5 w-5 text-aemet-blue" />
          Eligibility
        </h4>
        <p className="text-sm text-foreground">
          Fluency in English and World Geography with main sea routes. Minimum age should be <strong>18 years</strong> completed.
        </p>
      </div>

      {/* Documents Required */}
      <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
        <h4 className="text-lg font-semibold text-aemet-navy mb-3 flex items-center gap-2">
          <FileText className="h-5 w-5 text-aemet-blue" />
          Documents Required
        </h4>
        <ul className="space-y-2 text-sm text-foreground list-decimal list-inside">
          <li>Age proof (Passport)</li>
          <li>One number UK passport type photograph, in colour with a plain white background.</li>
        </ul>
      </div>

      {/* Fees Details */}
      <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
        <h4 className="text-lg font-semibold text-aemet-navy mb-4 flex items-center gap-2">
          <IndianRupee className="h-5 w-5 text-aemet-blue" />
          Course Fees Details
        </h4>
        <div className="space-y-3 text-sm text-foreground">
          <p><strong>Advance Booking Amount (Non-refundable):</strong> Rs.10,000/- adjustable at the time of balance fee payment with the course fee applicable on the first day of the course.</p>
          <p><strong>Resident Candidates:</strong> Rs. 29,500/- (Hostel, Food & Accommodation for 10 days) OR Rs. 26,500/- (Without Hostel but complimentary lunch during course days only)</p>
          
          <div className="mt-4 bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r">
            <p className="font-semibold text-amber-900 mb-2">In Case of Failed Examination:</p>
            <p className="text-amber-800">Can appear as a resit candidate at the discretion of the management, only one time basis, within 14 days from the date of examination conducted and try to clear the examination.</p>
          </div>

          <p><strong>Resit Fees:</strong> Rs.5,500/- to be remitted before appearing the resit examination for three days practice. Further Rs.1,600/- per day.</p>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded-r">
            <p className="font-semibold text-red-700">No Hostel Facility given for Resit Candidates.</p>
          </div>
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
        <h4 className="text-lg font-semibold text-aemet-navy mb-3 flex items-center gap-2">
          <Phone className="h-5 w-5 text-aemet-blue" />
          In Case of Any Difficulty
        </h4>
        <div className="space-y-2 text-sm text-foreground">
          <p>Call us during office hours (0900 hrs to 1600 hrs) <strong>9344007360</strong> on working days only.</p>
          <p className="font-semibold mt-3">After office hours (Only in case of Emergencies):</p>
          <ul className="list-disc list-inside ml-2">
            <li>Bibhas Mitra – <strong>6381206863</strong></li>
            <li>T.P.T Saravanan – <strong>9884511223</strong></li>
          </ul>
        </div>
      </div>

      {/* Important Notices */}
      <div className="bg-card border border-border rounded-lg p-6 shadow-sm space-y-3">
        <h4 className="text-lg font-semibold text-aemet-navy mb-3 flex items-center gap-2">
          <ShieldAlert className="h-5 w-5 text-aemet-blue" />
          Important Notices
        </h4>
        <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded-r text-sm text-red-800">
          *Unforeseen circumstances may lead to postponement or cancellation of a batch indicated in the table WITHOUT PRIOR NOTICE*
        </div>
        <div className="text-sm text-foreground space-y-2">
          <p><strong>Dress Code:</strong> Formals (No Jeans, T-Shirts and Chappals)</p>
          <p>The confirmed booking can be postponed to another month with minimum <strong>fifteen days notice</strong> subject to seat availability and this postponement can be done only once.</p>
          <p className="text-red-700 font-medium">The fees amount will be forfeited if enough notice is not given in writing or by E-Mail.</p>
          <p>Admission Email ID: <a href="mailto:gmdss.amet@gmail.com" className="font-semibold text-aemet-blue hover:underline">gmdss.amet@gmail.com</a></p>
        </div>
      </div>

      {/* Seat Booking Procedure */}
      <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
        <h4 className="text-lg font-semibold text-aemet-navy mb-4 flex items-center gap-2">
          <Users className="h-5 w-5 text-aemet-blue" />
          Seat Booking Procedure
        </h4>
        <div className="text-sm text-foreground space-y-2">
          <p>To confirm your seat booking, kindly transfer the payment <strong>ONLINE</strong> immediately.</p>
          <ol className="list-decimal list-inside space-y-2 ml-2 mt-3">
            <li>After transferring, e-mail to us the duly filled up "Application for Admission". All columns applicable should be filled.</li>
            <li>For group admission, separate transactions for each candidate.</li>
          </ol>
          <div className="mt-4">
            <a
              href="/pdfs/gmdss-uk-application.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-aemet-blue text-white font-semibold hover:bg-aemet-navy transition-colors shadow-sm"
            >
              <Download className="h-5 w-5" />
              Download Application Form (PDF)
            </a>
          </div>
        </div>
      </div>

      {/* Bank Account Details */}
      <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
        <h4 className="text-lg font-semibold text-aemet-navy mb-4 flex items-center gap-2">
          <Building2 className="h-5 w-5 text-aemet-blue" />
          AMET's Bank Account Details
        </h4>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Primary Account */}
          <div className="bg-muted/40 border border-border rounded-lg p-5">
            <h5 className="font-bold text-aemet-navy mb-3 text-sm uppercase tracking-wide">Primary Account</h5>
            <div className="space-y-1.5 text-sm text-foreground">
              <p><span className="font-semibold">Payee Name:</span> Academy of Maritime Education & Training</p>
              <p><span className="font-semibold">Banker's Name:</span> Indian Overseas Bank</p>
              <p><span className="font-semibold">Address:</span> 124, L.B. Road, Thiruvanmiyur, Chennai – 600 041</p>
              <p><span className="font-semibold">Bank A/C Number:</span> 041802000001508</p>
              <p><span className="font-semibold">Type of Account:</span> Current A/C</p>
              <p><span className="font-semibold">Branch Code Number:</span> 0418</p>
              <p><span className="font-semibold">ECS/IFSC/RTGS/NEFT:</span> IOBA0000418</p>
            </div>
          </div>
          {/* Secondary Account */}
          <div className="bg-muted/40 border border-border rounded-lg p-5">
            <h5 className="font-bold text-aemet-navy mb-3 text-sm uppercase tracking-wide">Secondary Account</h5>
            <div className="space-y-1.5 text-sm text-foreground">
              <p><span className="font-semibold">Payee Name:</span> Academy of Maritime Education & Training</p>
              <p><span className="font-semibold">Banker's Name:</span> Union Bank of India</p>
              <p><span className="font-semibold">Address:</span> Sholinganallur Branch, Kancheepuram – 600 119</p>
              <p><span className="font-semibold">Bank A/C Number:</span> 510101004153171</p>
              <p><span className="font-semibold">Type of Account:</span> Current A/C</p>
              <p><span className="font-semibold">ECS/IFSC/RTGS/NEFT:</span> UBIN0911356</p>
            </div>
          </div>
        </div>
        <div className="mt-4 bg-red-50 border-l-4 border-red-500 p-3 rounded-r text-sm text-red-700 font-medium">
          We do not accept any cash transaction. All transactions should be by using any UPI mode to the above mentioned account.
        </div>
        <p className="text-sm text-foreground mt-3">
          Seat will be confirmed only if you follow above, as this is required to confirm remittance and make receipts.
        </p>
        <p className="text-sm text-foreground mt-2">
          Will appreciate communication with us on our Email ID: <a href="mailto:gmdss.amet@gmail.com" className="font-semibold text-aemet-blue hover:underline">gmdss.amet@gmail.com</a> only.
        </p>
        <p className="text-sm text-foreground mt-2">
          Offer of seat is only if the candidate completes the advance booking procedure immediately. Otherwise please confirm availability of seat before remitting advance booking amount.
        </p>
      </div>

      {/* Hostel Notes */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 space-y-2">
        <p className="text-sm text-amber-800 font-semibold">Note: Candidate staying in the hostel should follow the rules and regulations as prescribed by the management.</p>
        <p className="text-sm text-amber-800"><strong>Hostel Check-In:</strong> After 1400 hrs day before commencement of course (Sundays)</p>
        <p className="text-sm text-amber-800"><strong>Check-Out:</strong> Before 1200 hrs on Saturdays (Day after declaration of Result)</p>
      </div>
    </div>
  );
};

export default GmdssUkTab;
