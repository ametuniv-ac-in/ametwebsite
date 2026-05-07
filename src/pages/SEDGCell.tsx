import React from 'react';
import Layout from '@/components/Layout';
import { Users } from 'lucide-react';

const SEDGCell = () => {
  return (
    <Layout title="SEDG Cell | AMET University">
      <div className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary)/0.85)] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-2">
            <Users className="w-8 h-8" />
            <h1 className="text-3xl md:text-4xl font-bold">SEDG Cell</h1>
          </div>
          <p className="text-white/80 text-lg">Socio-Economically Disadvantaged Groups Cell</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10 max-w-4xl">
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4 border-b pb-2">Committee Members</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-slate-300 dark:border-slate-600">
                <thead>
                  <tr className="bg-[hsl(var(--primary))] text-white">
                    <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left w-16">S.No</th>
                    <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left">Name & Designation</th>
                    <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left w-32">Role</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white dark:bg-slate-800">
                    <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">1</td>
                    <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Dr.Sampath Kumar, Head, Computer Science</td>
                    <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-semibold">Chairperson</td>
                  </tr>
                  <tr className="bg-slate-50 dark:bg-slate-700">
                    <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">2</td>
                    <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Dr.A.Shameem, Professor, AMET Business School & Internal Complaints Committee In-charge</td>
                    <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Member</td>
                  </tr>
                  <tr className="bg-white dark:bg-slate-800">
                    <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">3</td>
                    <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Dr.M.Jayaprakashvel, Co-ordinator IQAC</td>
                    <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Member</td>
                  </tr>
                  <tr className="bg-slate-50 dark:bg-slate-700">
                    <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">4</td>
                    <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Mr.K.Stalin, SC/ST Cell Co-ordinator</td>
                    <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Member</td>
                  </tr>
                  <tr className="bg-white dark:bg-slate-800">
                    <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">5</td>
                    <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Dr.R.Srinivasan, OBC Cell Co-ordinator</td>
                    <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Member</td>
                  </tr>
                  <tr className="bg-slate-50 dark:bg-slate-700">
                    <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">6</td>
                    <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Mr.Irfan, Student Council Chairperson</td>
                    <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Member</td>
                  </tr>
                  <tr className="bg-white dark:bg-slate-800">
                    <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">7</td>
                    <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Mrs.A.J.Glory, Assistant Registrar – Administration</td>
                    <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">Member</td>
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

export default SEDGCell;
