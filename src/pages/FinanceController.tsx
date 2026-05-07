import React from 'react';
import Layout from '@/components/Layout';
import { IndianRupee } from 'lucide-react';
import bharathiImg from '@/assets/finance-controller/bharathi.png';

const FinanceController = () => {
  return (
    <Layout title="Financial Controller | AMET University">
      <div className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary)/0.85)] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-2">
            <IndianRupee className="w-8 h-8" />
            <h1 className="text-3xl md:text-4xl font-bold">Financial Controller</h1>
          </div>
          <p className="text-white/80 text-lg">AMET University Financial Controller</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10 max-w-5xl">
        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4 border-b pb-2">Contact Details</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-slate-300">
                <thead>
                  <tr className="bg-[hsl(var(--primary))] text-white">
                    <th className="border border-slate-300 px-4 py-3 text-left">Name</th>
                    <th className="border border-slate-300 px-4 py-3 text-left">Designation</th>
                    <th className="border border-slate-300 px-4 py-3 text-left">Phone</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="border border-slate-300 px-4 py-3 font-medium">Mrs. K. Bharathi</td>
                    <td className="border border-slate-300 px-4 py-3">Financial Controller</td>
                    <td className="border border-slate-300 px-4 py-3">91 - 44 - 2744 4625 / 627 / 628</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6 border-b pb-2">Profile</h2>
            <div className="float-left mr-6 mb-4">
              <img
                src={bharathiImg}
                alt="Mrs. K. Bharathi"
                className="w-48 h-auto rounded-lg shadow-md"
              />
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Mrs. K.Bharathi is a highly skilled Finance Controller with over 16 years of experience in managing financial operations and strategic financial planning. Known for her strong analytical abilities, she has a proven track record in driving financial performance, improving internal controls, and ensuring compliance with financial regulations. With expertise in budgeting, forecasting, and financial reporting, Mrs. K.Bharathi is adept at optimizing operational efficiencies, streamlining financial processes, and guiding senior management in making data-driven financial decisions.
              </p>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default FinanceController;
