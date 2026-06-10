import React from 'react';
import Layout from '@/components/Layout';
import { IndianRupee, AlertCircle, Mail } from 'lucide-react';

const RefundPolicy = () => {
  return (
    <Layout title="Admission Cancellation & Refund Policy | AMET University">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amet-blue via-amet-sky-blue to-amet-navy text-white py-24 mt-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Admission Cancellation & Refund Policy
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Refund schedule for the academic year 2026-27
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-300 to-white mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        {/* Intro */}
        <section className="max-w-5xl mx-auto mb-10">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border-l-4 border-amet-blue">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-amet-navy rounded-full flex-shrink-0">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-lg leading-relaxed text-gray-700">
                  Students who want to cancel their admission may do so by sending a cancellation request only to{' '}
                  <a href="mailto:admission@ametuniv.ac.in" className="text-amet-blue font-semibold hover:underline">
                    admission@ametuniv.ac.in
                  </a>
                  . Refunds will be processed within 30 days of receiving the cancellation email, based on the following schedule:
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Refund Schedule Table */}
        <section className="max-w-5xl mx-auto mb-10">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-amet-blue to-amet-navy rounded-full">
                <IndianRupee className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-amet-navy">Refund Schedule</h2>
            </div>

            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full text-left">
                <thead className="bg-amet-navy text-white">
                  <tr>
                    <th className="px-6 py-4 font-semibold">Cancellation Date</th>
                    <th className="px-6 py-4 font-semibold">Refund Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-blue-50/50 transition">
                    <td className="px-6 py-4 text-gray-800">On or before 3rd June 2026</td>
                    <td className="px-6 py-4 font-semibold text-amet-navy">₹7,500</td>
                  </tr>
                  <tr className="hover:bg-blue-50/50 transition bg-gray-50/50">
                    <td className="px-6 py-4 text-gray-800">4th June – 25th June 2026</td>
                    <td className="px-6 py-4 font-semibold text-amet-navy">₹15,000</td>
                  </tr>
                  <tr className="hover:bg-blue-50/50 transition">
                    <td className="px-6 py-4 text-gray-800">26th June – 15th July 2026</td>
                    <td className="px-6 py-4 font-semibold text-amet-navy">₹50,000</td>
                  </tr>
                  <tr className="hover:bg-blue-50/50 transition bg-gray-50/50">
                    <td className="px-6 py-4 text-gray-800">16th July 2026 or later</td>
                    <td className="px-6 py-4 font-semibold text-red-600">Full fees forfeited</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Please Note */}
        <section className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg p-8 md:p-10 border border-amet-blue/20">
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="h-7 w-7 text-amet-blue" />
              <h2 className="text-2xl md:text-3xl font-bold text-amet-navy">Please Note</h2>
            </div>

            <ul className="space-y-4">
              {[
                'Application fee is non-refundable under all circumstances.',
                'Policy applies to candidates whose enrolment is cancelled due to failure to clear IMUCET (B.Sc. Nautical Science, B.E. Marine Engineering, DNS) or mandatory medical examination.',
                'Refund money will be transferred to the bank account as per the cancelled cheque leaf submitted.',
                'Refunds are processed only through NEFT transfer.',
                "University's decision on refunds is final and binding.",
                'Policy may change at any time. Candidates should check this page for updates.',
              ].map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1 w-6 h-6 rounded-full bg-amet-blue text-white text-xs font-bold flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <span className="text-gray-700 leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default RefundPolicy;