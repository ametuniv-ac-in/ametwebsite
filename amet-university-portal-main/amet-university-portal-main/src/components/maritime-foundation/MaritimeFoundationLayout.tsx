import React, { ReactNode } from 'react';
import Layout from '@/components/Layout';
import MaritimeFoundationSidebar from './MaritimeFoundationSidebar';

interface Props {
  title: string;
  children: ReactNode;
}

const MaritimeFoundationLayout: React.FC<Props> = ({ title, children }) => {
  return (
    <Layout title={`${title} | Dr. J. Ramachandran Maritime Foundation`}>
      <div className="bg-gradient-to-r from-aemet-navy to-aemet-blue text-white">
        <div className="container mx-auto px-4 py-16 md:py-20 flex items-center gap-8">
          <img
            src="/images/maritime-foundation-logo.png"
            alt="Dr. J. Ramachandran Maritime Foundation Logo"
            className="h-24 sm:h-32 md:h-40 w-auto max-w-[40vw] object-contain drop-shadow-xl flex-shrink-0"
          />
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Dr. J. Ramachandran Maritime Foundation</h1>
            <p className="text-base md:text-lg text-white/90 mt-2">
              Promoting Maritime Excellence, Leadership and Innovation
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <aside className="lg:col-span-4 xl:col-span-3">
            <div className="lg:sticky lg:top-24">
              <MaritimeFoundationSidebar />
            </div>
          </aside>
          <main className="lg:col-span-8 xl:col-span-9">
            <div className="bg-white rounded-lg shadow-sm border border-slate-100 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-aemet-navy mb-6 pb-3 border-b border-slate-200">
                {title}
              </h2>
              {children}
            </div>
          </main>
        </div>
      </div>
    </Layout>
  );
};

export default MaritimeFoundationLayout;