import React from 'react';
import Layout from '@/components/Layout';
import { FileText, Download, Mail } from 'lucide-react';

const ComplaintForm: React.FC = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-r from-aemet-navy to-aemet-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FileText className="h-8 w-8" />
            <h1 className="text-4xl md:text-5xl font-bold">SC / ST / OBC - Discrimination Complaint Form</h1>
          </div>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Submit your complaint regarding discrimination through the official form
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-aemet-navy mb-8 text-center">How to Submit Your Complaint</h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4 bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-aemet-blue text-white font-bold flex-shrink-0">1</div>
              <div>
                <h3 className="text-lg font-semibold text-aemet-navy mb-2">Download the Form</h3>
                <p className="text-gray-600 mb-3">Download the official complaint form using the link below.</p>
                <a
                  href="/documents/SC-ST-OBC-Complaint-Form.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-aemet-blue font-medium hover:underline"
                >
                  <Download className="h-4 w-4" />
                  Download Complaint Form (PDF)
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-aemet-blue text-white font-bold flex-shrink-0">2</div>
              <div>
                <h3 className="text-lg font-semibold text-aemet-navy mb-2">Fill the Form</h3>
                <p className="text-gray-600">Complete all the required fields in the downloaded form with accurate details.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-aemet-blue text-white font-bold flex-shrink-0">3</div>
              <div>
                <h3 className="text-lg font-semibold text-aemet-navy mb-2">Send a Soft Copy</h3>
                <p className="text-gray-600 mb-3">Email the filled form to the Registrar's office.</p>
                <a
                  href="mailto:registrar@ametuniv.ac.in"
                  className="inline-flex items-center gap-2 text-aemet-blue font-medium hover:underline"
                >
                  <Mail className="h-4 w-4" />
                  registrar@ametuniv.ac.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ComplaintForm;
