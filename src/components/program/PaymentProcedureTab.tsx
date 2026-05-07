import React from 'react';
import { CreditCard, Download } from 'lucide-react';

interface PaymentProcedureTabProps {
  program: {
    paymentProcedureContent?: string;
    [key: string]: any;
  };
}

const PaymentProcedureTab: React.FC<PaymentProcedureTabProps> = ({ program }) => {
  if (!program.paymentProcedureContent) {
    return (
      <div className="text-gray-500 italic">
        Procedure for Online Payment information will be added soon.
      </div>
    );
  }

  const isPDF = program.paymentProcedureContent.endsWith('.pdf');

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-aemet-navy mb-6 flex items-center gap-2">
        <CreditCard className="h-6 w-6 text-aemet-blue" />
        Procedure for Online Payment
      </h2>
      
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
        {isPDF ? (
          <a
            href={program.paymentProcedureContent}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-aemet-blue hover:text-aemet-navy font-medium"
          >
            <Download className="h-5 w-5" />
            Download Procedure for Online Payment (PDF)
          </a>
        ) : (
          <div className="prose max-w-none text-gray-700 whitespace-pre-line">
            {program.paymentProcedureContent}
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentProcedureTab;
