import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Mail, Phone, CreditCard, FileText } from 'lucide-react';

const bankDetails = [
  { label: "Payee Name", value: "Academy of Maritime Education and Training" },
  { label: "Bank", value: "Indian Overseas Bank" },
  { label: "Address", value: "Thiruvanmiyur" },
  { label: "A/c. No", value: "041802000001508" },
  { label: "A/c Type", value: "CA" },
  { label: "IFSC Code", value: "IOBA0000418" },
];

const requiredDetails = [
  "A/c Holder Name",
  "Bank & Branch",
  "Transaction ID",
  "Application No",
  "Candidate Name",
  "Transferred Amount",
  "AMET Bank Name",
  "Transferred Date",
  "Reg No / Roll No",
];

const OnlinePaymentDetails: React.FC = () => {
  return (
    <Layout title="Online Payment Details - AMET University">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(210,60%,35%)] text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Online Payment Details</h1>
          <p className="text-lg opacity-90">Fee remittance information for Students / Cadets</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10 max-w-4xl">
        {/* Bank Details Card */}
        <Card className="mb-8 border-2 border-primary/20">
          <CardHeader className="bg-primary/5">
            <CardTitle className="flex items-center gap-2 text-primary">
              <Building2 className="w-5 h-5" />
              Bank Account Details
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid gap-4">
              {bankDetails.map((item, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 py-2 border-b border-border last:border-0">
                  <span className="font-semibold text-foreground min-w-[140px]">{item.label}</span>
                  <span className="text-muted-foreground font-mono">{item.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Instructions Card */}
        <Card className="mb-8">
          <CardHeader className="bg-accent/30">
            <CardTitle className="flex items-center gap-2 text-primary text-lg">
              <FileText className="w-5 h-5" />
              After Fee Remittance
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <p className="text-foreground leading-relaxed">
              After the fee remittance, the Students / Cadets should fill the below mentioned details and send mail to{' '}
              <a href="mailto:accounts@ametuniv.ac.in" className="text-primary font-medium underline hover:text-primary/80 transition-colors">
                accounts@ametuniv.ac.in
              </a>.
            </p>
            <p className="text-foreground flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              For more details contact{' '}
              <a href="tel:9176717622" className="text-primary font-medium underline hover:text-primary/80 transition-colors">
                91767 17622
              </a>
            </p>
          </CardContent>
        </Card>

        {/* Required Details Card */}
        <Card>
          <CardHeader className="bg-primary/5">
            <CardTitle className="flex items-center gap-2 text-primary text-lg">
              <Mail className="w-5 h-5" />
              Details to Include in Email
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <ol className="list-decimal list-inside space-y-3">
              {requiredDetails.map((detail, index) => (
                <li key={index} className="text-foreground py-2 px-3 rounded-md bg-muted/50 hover:bg-muted transition-colors">
                  {detail}
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      </section>
    </Layout>
  );
};

export default OnlinePaymentDetails;
