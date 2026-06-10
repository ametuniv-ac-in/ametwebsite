import React from 'react';
import Layout from '@/components/Layout';
import { FileText, Download } from 'lucide-react';

const statements = [
  { title: "Audited Statement 2022-23", file: "/documents/Audited-2022-23.pdf" },
  { title: "Audited Statement 2021-22", file: "/documents/Audited-2021-22.pdf" },
  { title: "Audited Statement 2020-21", file: "/documents/Audited-2020-21.pdf" },
  { title: "Audited Statement 2019-20", file: "/documents/Audited-2019-20.pdf" },
];

const AnnualAccounts = () => {
  return (
    <Layout title="Annual Accounts | AMET University">
      <div className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary)/0.85)] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-2">
            <FileText className="w-8 h-8" />
            <h1 className="text-3xl md:text-4xl font-bold">Annual Accounts</h1>
          </div>
          <p className="text-white/80 text-lg">Balance Sheet, Income & Expenditure, Receipts & Payments, Audit Report</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10 max-w-4xl">
        <div className="space-y-4">
          {statements.map((item, index) => (
            <a
              key={index}
              href={item.file}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-muted-foreground" />
                <span className="text-foreground font-medium">{item.title}</span>
              </div>
              <Download className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default AnnualAccounts;
