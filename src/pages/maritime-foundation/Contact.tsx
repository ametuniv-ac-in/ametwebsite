import React from 'react';
import MaritimeFoundationLayout from '@/components/maritime-foundation/MaritimeFoundationLayout';
import { Mail, Phone, Smartphone, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <MaritimeFoundationLayout title="Contact Us">
      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>For any inquiries, please contact:</p>
        <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
          <h3 className="text-lg font-semibold text-aemet-navy">Col. Dr. G. Thiruvasagam</h3>
          <p className="text-sm text-gray-600">Provost, AMET University</p>
          <p className="text-sm text-gray-600 mt-1">&amp; Member Secretary</p>
          <p className="text-sm text-gray-600">Dr. J. Ramachandran Maritime Foundation</p>
          <p className="text-sm text-gray-600 mb-4">Chennai, India</p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-aemet-blue" />
              <a href="mailto:provost@ametuniv.ac.in" className="text-aemet-blue hover:text-aemet-navy underline">provost@ametuniv.ac.in</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-aemet-blue" />
              <span>+91 - 44 - 2744 4625 / 627 / 628</span>
            </li>
            <li className="flex items-center gap-2">
              <Smartphone className="h-4 w-4 text-aemet-blue" />
              <span>+91 9566112211 ; +91 9444752994</span>
            </li>
            <li className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-aemet-blue" />
              <a href="https://www.ametuniv.ac.in" target="_blank" rel="noopener noreferrer" className="text-aemet-blue hover:text-aemet-navy underline">www.ametuniv.ac.in</a>
            </li>
          </ul>
        </div>
      </div>
    </MaritimeFoundationLayout>
  );
};

export default Contact;