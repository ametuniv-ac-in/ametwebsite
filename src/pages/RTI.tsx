import React from 'react';
import Layout from '@/components/Layout';
import { FileText } from 'lucide-react';

const RTI = () => {
  return (
    <Layout title="Right to Information | AMET University">
      <div className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary)/0.85)] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-2">
            <FileText className="w-8 h-8" />
            <h1 className="text-3xl md:text-4xl font-bold">Right to Information</h1>
          </div>
          <p className="text-white/80 text-lg">RTI Act 2005</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10 max-w-4xl">
        <div className="space-y-8">
          {/* Introduction */}
          <section>
            <p className="text-muted-foreground leading-relaxed">
              The Right to Information Act 2005 has been implemented with the assent of the President of India.
            </p>
          </section>

          {/* Objectives */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4 border-b pb-2">Objectives</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Academy of Maritime Education and Training (AMET) is a Maritime University established by Sec 3 of the UGC Act of 1956. This University is approved by the Director General of Shipping (DGS) and the University Grants Commission. In addition to its prime function of teaching and research, it is also providing post-sea Programmes to sea farers.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>To disseminate and advance maritime knowledge by providing instructional and research facilities.</li>
              <li>To take appropriate measures for promoting inter-disciplinary studies and research.</li>
            </ul>
          </section>

          {/* Jurisdiction */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4 border-b pb-2">Jurisdiction</h2>
            <p className="text-muted-foreground leading-relaxed">
              The jurisdiction of the University spreads over India.
            </p>
          </section>

          {/* Establishment */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4 border-b pb-2">Establishment</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The University has 4 schools and 9 departments. The University is offering Ph.D., P.G. Programmes, U.G Programmes and HND programmes.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong>Working hours:</strong> 9.00 a.m. to 4.30 p.m from Monday to Friday except on national and other notified holidays.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              <strong>Officer In-charge:</strong> Mr. T. Ramanan, Public Relations Officer.
            </p>
          </section>

          {/* Appeals */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4 border-b pb-2">Appeals</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Appeals, if any, may please be addressed to the Registrar at the following address:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="border border-slate-300 px-4 py-3 text-left font-semibold text-foreground">Name & Designation</th>
                    <th className="border border-slate-300 px-4 py-3 text-left font-semibold text-foreground">Phone No</th>
                    <th className="border border-slate-300 px-4 py-3 text-left font-semibold text-foreground">E-Mail</th>
                    <th className="border border-slate-300 px-4 py-3 text-left font-semibold text-foreground">Officer's Address</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-4 py-3 text-muted-foreground">Registrar</td>
                    <td className="border border-slate-300 px-4 py-3 text-muted-foreground">044 - 2747 2155</td>
                    <td className="border border-slate-300 px-4 py-3">
                      <a href="mailto:registrar@ametuniv.ac.in" className="text-blue-600 hover:underline">registrar@ametuniv.ac.in</a>
                    </td>
                    <td className="border border-slate-300 px-4 py-3 text-muted-foreground">
                      Academy of Maritime Education and Training (AMET),<br />
                      135, East Coast Road, Kanathur,<br />
                      Chennai - 603112
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default RTI;
