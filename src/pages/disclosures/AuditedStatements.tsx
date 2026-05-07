import React from 'react';
import Layout from '@/components/Layout';
import { FileText, Download } from 'lucide-react';

const statements = [
  { title: "Audit Statement 2024-25", file: "/assets/pdf/audited-statements/Audit_Statement_2024-25.pdf" },
  { title: "Audit Statement 2023-24", file: "/assets/pdf/audited-statements/Audit_Statement_2023-24.pdf" },
  { title: "Audit Statement 2022-23", file: "/assets/pdf/audited-statements/Audit_Statement_2022-23.pdf" },
  { title: "Audit Statement 2021-22", file: "/assets/pdf/audited-statements/Audit_Statement_2021-22.pdf" },
  { title: "Audit Statement 2020-21", file: "/assets/pdf/audited-statements/Audit_Statement_2020-21.pdf" },
];

const AuditedStatements = () => {
  return (
    <Layout title="Audited Statements | AMET University">
      <div className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary)/0.85)] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-2">
            <FileText className="w-8 h-8" />
            <h1 className="text-3xl md:text-4xl font-bold">Audited Statements of Account</h1>
          </div>
          <p className="text-white/80 text-lg">Last Five Years - Balance Sheet, Income & Expenditure, Receipts & Payments, Audit Report</p>
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

export default AuditedStatements;
