import React from 'react';
import Layout from '@/components/Layout';
import { Trophy, TrendingUp, Award, FileText, ExternalLink, Target } from 'lucide-react';
import nirf2021 from '@/assets/nirf-2021.jpg';
import nirf2020 from '@/assets/nirf-2020.jpg';

const NIRF = () => {
  const nirfLinks2026 = [
    { title: 'NIRF 2026 (Overall)', href: '/assets/pdf/nirf/nirf-2026-overall.pdf' },
    { title: 'NIRF 2026 (Engineering)', href: '/assets/pdf/nirf/nirf-2026-engineering.pdf' },
    { title: 'NIRF 2026 (Management)', href: '/assets/pdf/nirf/nirf-2026-management.pdf' },
    { title: 'NIRF 2026 (Innovation)', href: '/assets/pdf/nirf/nirf-2026-innovation.pdf' },
    { title: 'NIRF 2026 (SDC Institution)', href: '/assets/pdf/nirf/nirf-2026-sdg.pdf' },
  ];

  const nirfLinks2025 = [
    { title: 'NIRF 2025 (Overall)', href: '/assets/pdf/nirf/nirf-2025-overall.pdf' },
    { title: 'NIRF 2025 (Engineering)', href: '/assets/pdf/nirf/nirf-2025-engineering.pdf' },
    { title: 'NIRF 2025 (Management)', href: '/assets/pdf/nirf/nirf-2025-management.pdf' },
    { title: 'NIRF 2025 (Innovation)', href: '/assets/pdf/nirf/nirf-2025-innovation.pdf' },
    { title: 'NIRF 2025 (SDC Institution)', href: '/assets/pdf/nirf/nirf-2025-sdg.pdf' },
  ];

  const nirfLinks2024 = [
    { title: 'NIRF 2024 (Overall)', href: '/assets/pdf/nirf/nirf-2024-overall.pdf' },
    { title: 'NIRF 2024 (Engineering)', href: '/assets/pdf/nirf/nirf-2024-engineering.pdf' },
    { title: 'NIRF 2024 (Management)', href: '/assets/pdf/nirf/nirf-2024-management.pdf' },
    { title: 'NIRF 2024 (Innovation)', href: '/assets/pdf/nirf/nirf-2024-innovation.pdf' },
  ];

  const nirfLinks2023 = [
    { title: 'NIRF 2023 (Overall)', href: '/assets/pdf/nirf/nirf-2023-overall.pdf' },
    { title: 'NIRF 2023 (Engineering)', href: '/assets/pdf/nirf/nirf-2023-engineering.pdf' },
    { title: 'NIRF 2023 (Management)', href: '/assets/pdf/nirf/nirf-2023-management.pdf' },
  ];

  const nirfLinks2022 = [
    { title: 'NIRF 2022 (Overall)', href: '/assets/pdf/nirf/nirf-2022-overall.pdf' },
    { title: 'NIRF 2022 (Engineering)', href: '/assets/pdf/nirf/nirf-2022-engineering.pdf' },
    { title: 'NIRF 2022 (Management)', href: '/assets/pdf/nirf/nirf-2022-management.pdf' },
  ];

  const nirfLinks2021 = [
    { title: 'NIRF 2021 (Overall)', href: '/assets/pdf/nirf/nirf-2021-overall.pdf' },
    { title: 'NIRF 2021 (Engineering)', href: '/assets/pdf/nirf/nirf-2021-engineering.pdf' },
    { title: 'NIRF 2021 (Management)', href: '/assets/pdf/nirf/nirf-2021-management.pdf' },
  ];

  const nirfLinks2020 = [
    { title: 'NIRF 2020 (Overall)', href: '/assets/pdf/nirf/nirf-2020-overall.pdf' },
    { title: 'NIRF 2020 (Engineering)', href: '/assets/pdf/nirf/nirf-2020-engineering.pdf' },
    { title: 'NIRF 2020 (Management)', href: '/assets/pdf/nirf/nirf-2020-management.pdf' },
  ];

  return (
    <Layout title="NIRF Ranking | AMET University">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-aemet-blue via-purple-600 to-aemet-navy text-white py-24 mt-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              NIRF Ranking
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              National Institutional Ranking Framework
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-300 to-purple-300 mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        {/* NIRF Overview */}
        <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-aemet-blue to-purple-600 rounded-full">
                <Trophy className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-aemet-navy">NIRF - National Institutional Ranking Framework</h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="text-xl leading-relaxed font-medium text-aemet-navy">
                AMET has competed in the National Institutional Ranking Framework (NIRF) ranking 
                for four (4) consecutive years and secured ranking in the past years in Engineering category.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-aemet-blue">
                <div className="flex items-start gap-3">
                  <Target className="h-6 w-6 text-aemet-blue mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-aemet-navy mb-2">NIRF Mission</p>
                    <p className="text-gray-700">
                      The National Institutional Ranking Framework (NIRF) was launched by the Ministry 
                      of Education, Government of India, to rank institutions of higher education in India. 
                      AMET University consistently participates across multiple categories to showcase 
                      its commitment to excellence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NIRF Achievements */}
        <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-gradient-to-r from-aemet-blue to-purple-600 rounded-full">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-aemet-navy">NIRF Achievements</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <img 
                    src={nirf2021} 
                    alt="NIRF 2021 Ranking Certificate"
                    className="w-full max-w-md mx-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-aemet-navy mb-2">NIRF 2021</h3>
                <p className="text-gray-600">Ranked in Engineering Category</p>
                <p className="text-sm text-gray-500">National Recognition</p>
              </div>

              <div className="text-center">
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <img 
                    src={nirf2020} 
                    alt="NIRF 2020 Ranking Certificate"
                    className="w-full max-w-md mx-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-aemet-navy mb-2">NIRF 2020</h3>
                <p className="text-gray-600">Ranked in Engineering Category</p>
                <p className="text-sm text-gray-500">Consistent Performance</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="bg-gradient-to-r from-gold-50 to-yellow-50 border border-yellow-200 p-6 rounded-lg">
                <p className="text-aemet-navy font-semibold">
                  AMET University's consistent participation in NIRF rankings demonstrates our 
                  commitment to transparency, quality improvement, and national excellence standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* NIRF 2026 Links */}
        <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-full">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-aemet-navy">NIRF 2026 Submissions</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {nirfLinks2026.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-br from-teal-50 to-emerald-50 border border-teal-200 rounded-lg p-4 hover:shadow-lg hover:border-teal-400 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-aemet-navy group-hover:text-teal-600 transition-colors">
                      {link.title}
                    </h3>
                    <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-teal-600 transition-colors" />
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Latest submission for 2026 ranking</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* NIRF 2025 Links */}
        <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-gradient-to-r from-green-500 to-green-600 rounded-full">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-aemet-navy">NIRF 2025 Submissions</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {nirfLinks2025.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-br from-green-50 to-blue-50 border border-green-200 rounded-lg p-4 hover:shadow-lg hover:border-green-400 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-aemet-navy group-hover:text-green-600 transition-colors">
                      {link.title}
                    </h3>
                    <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-green-600 transition-colors" />
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Latest submission for 2025 ranking</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* NIRF 2024 Links */}
        <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-aemet-navy">NIRF 2024 Submissions</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {nirfLinks2024.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-4 hover:shadow-lg hover:border-blue-400 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-semibold text-aemet-navy group-hover:text-blue-600 transition-colors">
                      {link.title}
                    </h3>
                    <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <p className="text-sm text-gray-600 mt-2">2024 ranking submission</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* NIRF 2023 Links */}
        <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-aemet-navy">NIRF 2023 Submissions</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {nirfLinks2023.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-6 hover:shadow-lg hover:border-purple-400 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-aemet-navy group-hover:text-purple-600 transition-colors">
                      {link.title}
                    </h3>
                    <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
                  </div>
                  <p className="text-sm text-gray-600">2023 ranking submission</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* NIRF 2022 Links */}
        <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-gradient-to-r from-orange-500 to-amber-600 rounded-full">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-aemet-navy">NIRF 2022 Submissions</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {nirfLinks2022.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200 rounded-lg p-6 hover:shadow-lg hover:border-orange-400 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-aemet-navy group-hover:text-orange-600 transition-colors">
                      {link.title}
                    </h3>
                    <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-orange-600 transition-colors" />
                  </div>
                  <p className="text-sm text-gray-600">2022 ranking submission</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* NIRF 2021 Links */}
        <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-gradient-to-r from-rose-500 to-red-600 rounded-full">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-aemet-navy">NIRF 2021 Submissions</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {nirfLinks2021.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-br from-rose-50 to-red-50 border border-rose-200 rounded-lg p-6 hover:shadow-lg hover:border-rose-400 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-aemet-navy group-hover:text-rose-600 transition-colors">
                      {link.title}
                    </h3>
                    <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-rose-600 transition-colors" />
                  </div>
                  <p className="text-sm text-gray-600">2021 ranking submission</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* NIRF 2020 Links */}
        <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-gradient-to-r from-slate-500 to-gray-600 rounded-full">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-aemet-navy">NIRF 2020 Submissions</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {nirfLinks2020.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-br from-slate-50 to-gray-50 border border-slate-200 rounded-lg p-6 hover:shadow-lg hover:border-slate-400 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-aemet-navy group-hover:text-slate-600 transition-colors">
                      {link.title}
                    </h3>
                    <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-slate-600 transition-colors" />
                  </div>
                  <p className="text-sm text-gray-600">2020 ranking submission</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-aemet-blue/10 to-purple-600/10 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-aemet-navy mb-6 text-center">NIRF Performance Commitment</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-aemet-blue to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h4 className="text-lg font-semibold text-aemet-navy mb-2">Consecutive Years</h4>
                <p className="text-gray-700 text-sm">Consistent NIRF participation</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-aemet-navy mb-2">Engineering Ranking</h4>
                <p className="text-gray-700 text-sm">Recognized performance</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">5</span>
                </div>
                <h4 className="text-lg font-semibold text-aemet-navy mb-2">Categories (2025)</h4>
                <p className="text-gray-700 text-sm">Multiple category participation</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-aemet-navy mb-2">Quality Excellence</h4>
                <p className="text-gray-700 text-sm">Continuous improvement</p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-aemet-navy font-medium text-lg">
                AMET University's participation in NIRF reflects our commitment to national benchmarking, 
                quality enhancement, and transparency in higher education excellence.
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default NIRF;