import React from 'react';
import Layout from '@/components/Layout';
import { Shield } from 'lucide-react';
import asokanImg from '@/assets/cvo/asokan.png';

const ChiefVigilanceOfficer = () => {
  return (
    <Layout title="Chief Vigilance Officer | AMET University">
      <div className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary)/0.85)] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-2">
            <Shield className="w-8 h-8" />
            <h1 className="text-3xl md:text-4xl font-bold">Chief Vigilance Officer</h1>
          </div>
          <p className="text-white/80 text-lg">AMET University Chief Vigilance Officer Details</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10 max-w-5xl">
        <div className="space-y-10">
          {/* Contact Table */}
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
                    <td className="border border-slate-300 px-4 py-3 font-medium">Mr. S. Asokan</td>
                    <td className="border border-slate-300 px-4 py-3">Retired Assistant Commissioner of Police, Chennai City</td>
                    <td className="border border-slate-300 px-4 py-3">91 - 44 - 2744 4625 / 627 / 628</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Profile Section */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6 border-b pb-2">Profile</h2>
            <div className="float-left mr-6 mb-4">
              <img
                src={asokanImg}
                alt="Mr. S. Asokan"
                className="w-48 h-auto rounded-lg shadow-md"
              />
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Mr. S. Asokan, retired as an Assistant Commissioner of Police, Chennai City, and served in various capacities in the police department, including SB CID, Security Branch, Law and Order, and Vigilance and Anti-Corruption.
              </p>
              <p>
                During his tenure, he successfully completed specialized training programs such as Bomb Squad Training and CBI Training. He has also performed high-profile duties, including assignments for the President, Prime Minister, and other international VVIPs in the years 2001 and 2005.
              </p>
              <p>
                In recognition of his exemplary service, he was honored with the Chief Minister's Medal on Independence Day in 2008, the President of India's Medal, and a total of 108 Meritorious and Good Service Medals. His entire service record is free from any punishments.
              </p>
            </div>
          </section>

        </div>
      </div>
    </Layout>
  );
};

export default ChiefVigilanceOfficer;
