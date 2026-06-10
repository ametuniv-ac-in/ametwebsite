import React, { useState } from 'react';
import { Book, ExternalLink, FileText, Award, BookOpen, FileDown, Lightbulb, Presentation, Download } from 'lucide-react';
interface PublicationsSectionProps {
  departmentId?: string;
}
const PublicationsSection: React.FC<PublicationsSectionProps> = ({
  departmentId
}) => {
  const [activeTab, setActiveTab] = useState<'patents' | 'research' | 'books'>('patents');

  // Commerce Department specific publications
  if (departmentId === 'commerce-department') {
    const publicationItems = [{
      title: 'Books / Chapters',
      description: 'Books and book chapters authored by faculty members in commerce and business',
      icon: BookOpen,
      file: '/documents/commerce/books-chapters.pdf',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-50 to-emerald-50',
      borderColor: 'border-green-200',
      buttonColor: 'bg-green-600 hover:bg-green-700'
    }, {
      title: 'Research Papers',
      description: 'Research papers published in national and international journals',
      icon: FileText,
      file: '/documents/commerce/research-papers.pdf',
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'from-blue-50 to-cyan-50',
      borderColor: 'border-blue-200',
      buttonColor: 'bg-blue-600 hover:bg-blue-700'
    }];
    return <div className="space-y-6">
        <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
          <Book className="h-5 w-5 mr-2 text-aemet-blue" />
          Faculty Publications
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {publicationItems.map((item, index) => {
          const IconComponent = item.icon;
          return <div key={index} className={`bg-gradient-to-br ${item.bgColor} rounded-lg p-6 border-2 ${item.borderColor} hover:shadow-xl transition-all duration-300`}>
                <div className="flex flex-col h-full">
                  <div className={`bg-gradient-to-r ${item.color} p-3 rounded-lg w-fit mb-4`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  
                  <h4 className="text-lg font-bold text-aemet-navy mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600 mb-4 flex-grow">{item.description}</p>
                  
                  <a href={item.file} download className={`inline-flex items-center justify-center gap-2 ${item.buttonColor} text-white font-medium px-4 py-3 rounded-lg transition-colors duration-200 text-sm w-full`}>
                    <Download className="h-4 w-4" />
                    Download PDF
                  </a>
                </div>
              </div>;
        })}
        </div>

        <div className="bg-gradient-to-r from-aemet-blue/5 to-aemet-navy/5 rounded-lg p-6 border border-aemet-blue/20 mt-6">
          <p className="text-sm text-gray-700">
            Our faculty members are actively engaged in research and publication activities, contributing to academic knowledge in commerce, finance, accounting, business management, economics, and related fields.
          </p>
        </div>
      </div>;
  }

  // AMET Business School specific publications
  if (departmentId === 'amet-business-school') {
    const publicationItems = [{
      title: 'Online Lectures',
      description: 'Faculty online lecture sessions and recordings',
      icon: Presentation,
      file: '/documents/abs/online_lectures.docx',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'from-blue-50 to-indigo-50',
      borderColor: 'border-blue-200',
      buttonColor: 'bg-blue-600 hover:bg-blue-700'
    }, {
      title: 'Books Published (2024-25)',
      description: 'Books authored and co-authored by faculty members',
      icon: BookOpen,
      file: '/documents/abs/books_24-25.xlsx',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-50 to-emerald-50',
      borderColor: 'border-green-200',
      buttonColor: 'bg-green-600 hover:bg-green-700'
    }, {
      title: 'Faculty Publications',
      description: 'Research articles published in national and international journals',
      icon: FileText,
      file: '/documents/abs/faculty_publications.xlsx',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'from-purple-50 to-pink-50',
      borderColor: 'border-purple-200',
      buttonColor: 'bg-purple-600 hover:bg-purple-700'
    }, {
      title: 'Faculty Publications Links',
      description: 'Links to faculty publications in online repositories',
      icon: ExternalLink,
      file: '/documents/abs/faculty_publications_links.docx',
      color: 'from-amber-500 to-orange-600',
      bgColor: 'from-amber-50 to-orange-50',
      borderColor: 'border-amber-200',
      buttonColor: 'bg-amber-600 hover:bg-amber-700'
    }];
    return <div className="space-y-6">
        <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
          <Book className="h-5 w-5 mr-2 text-aemet-blue" />
          Faculty Publications
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {publicationItems.map((item, index) => {
          const IconComponent = item.icon;
          return <div key={index} className={`bg-gradient-to-br ${item.bgColor} rounded-lg p-6 border ${item.borderColor} hover:shadow-lg transition-all duration-300`}>
                <div className="flex flex-col h-full">
                  <div className={`bg-gradient-to-r ${item.color} p-3 rounded-lg w-fit mb-4`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  
                  <h4 className="text-lg font-bold text-aemet-navy mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600 mb-4 flex-grow">{item.description}</p>
                  
                  <a href={item.file} download className={`inline-flex items-center justify-center gap-2 ${item.buttonColor} text-white font-medium px-4 py-2 rounded-lg transition-colors duration-200 text-sm w-full`}>
                    <Download className="h-4 w-4" />
                    Download
                  </a>
                </div>
              </div>;
        })}
        </div>

        <div className="bg-gradient-to-r from-aemet-blue/5 to-aemet-navy/5 rounded-lg p-6 border border-aemet-blue/20 mt-6">
          <p className="text-sm text-gray-700">
            Our faculty members are actively engaged in research and publication activities, contributing to academic knowledge in maritime business management, logistics, and related fields.
          </p>
        </div>
      </div>;
  }

  // Information Technology specific publications
  if (departmentId === 'information-technology') {
    const publicationItems = [{
      title: 'Research Papers',
      description: 'Research papers published in national and international journals',
      icon: FileText,
      file: '/publications/it/research-papers.pdf',
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'from-blue-50 to-cyan-50',
      borderColor: 'border-blue-200',
      buttonColor: 'bg-blue-600 hover:bg-blue-700'
    }, {
      title: 'Patent',
      description: 'Patents filed and granted by faculty members',
      icon: Lightbulb,
      file: '/publications/it/patent.pdf',
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'from-purple-50 to-indigo-50',
      borderColor: 'border-purple-200',
      buttonColor: 'bg-purple-600 hover:bg-purple-700'
    }, {
      title: 'Books / Chapters',
      description: 'Books and book chapters authored by faculty members',
      icon: BookOpen,
      file: '/publications/it/books-chapters.pdf',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-50 to-emerald-50',
      borderColor: 'border-green-200',
      buttonColor: 'bg-green-600 hover:bg-green-700'
    }];
    return <div className="space-y-6">
        <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
          <Book className="h-5 w-5 mr-2 text-aemet-blue" />
          Faculty Publications
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {publicationItems.map((item, index) => {
          const IconComponent = item.icon;
          return <div key={index} className={`bg-gradient-to-br ${item.bgColor} rounded-lg p-6 border-2 ${item.borderColor} hover:shadow-xl transition-all duration-300`}>
                <div className="flex flex-col items-center text-center h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mb-4`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  <h4 className="text-lg font-bold text-aemet-navy mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600 mb-6 flex-grow">{item.description}</p>
                  
                  <a href={item.file} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center justify-center gap-2 ${item.buttonColor} text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200 w-full`}>
                    <Download className="h-5 w-5" />
                    Download PDF
                  </a>
                </div>
              </div>;
        })}
        </div>

        <div className="bg-gradient-to-r from-aemet-blue/5 to-aemet-navy/5 rounded-lg p-6 border border-aemet-blue/20">
          <p className="text-sm text-gray-700">
            Our faculty members are actively engaged in research and publication activities, contributing to academic knowledge in Information Technology, Artificial Intelligence, Data Science, and related fields.
          </p>
        </div>
      </div>;
  }

  // Mathematics department specific publications
  if (departmentId === 'mathematics') {
    return (
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
          <Book className="h-5 w-5 mr-2 text-aemet-blue" />
          Faculty Publications
        </h3>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 border-2 border-blue-200">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                <FileText className="w-10 h-10 text-white" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h4 className="text-2xl font-bold text-aemet-navy mb-2">
                Faculty Publications
              </h4>
              <p className="text-gray-700">
                Comprehensive list of research publications, journal articles, and academic contributions by the Department of Mathematics faculty members.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a
                href="/documents/mathematics/Faculty_Publications.docx"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-sm"
              >
                <Download className="w-5 h-5" />
                Download Document
              </a>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-aemet-blue/5 to-aemet-navy/5 rounded-lg p-6 border border-aemet-blue/20">
          <p className="text-sm text-gray-700">
            Our faculty members are actively engaged in research and publication activities, contributing to academic knowledge in Graph Theory, Mathematical Modeling, Nonlinear Differential Equations, Fluid Mechanics, and related fields.
          </p>
        </div>
      </div>
    );
  }

  // Food Processing Technology specific publications
  if (departmentId === 'food-processing') {
    return (
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
          <Book className="h-5 w-5 mr-2 text-aemet-blue" />
          Faculty Publications
        </h3>

        <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg p-8 border-2 border-orange-200">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center">
                <FileText className="w-10 h-10 text-white" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h4 className="text-2xl font-bold text-aemet-navy mb-2">
                Faculty Publications
              </h4>
              <p className="text-gray-700">
                Comprehensive list of research publications, journal articles, and academic contributions by the Department of Food Processing Technology faculty members.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a
                href="/downloads/food-processing/FACULTY_PUBLICATIONS.docx"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-medium shadow-sm"
              >
                <Download className="w-5 h-5" />
                Download Document
              </a>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-100/50 to-amber-100/50 rounded-lg p-6 border border-orange-200">
          <p className="text-sm text-gray-700">
            Our faculty members are actively engaged in research and publication activities, contributing to academic knowledge in Food Processing, Food Microbiology, Food Chemistry, and related fields.
          </p>
        </div>
      </div>
    );
  }

  // Naval Architecture specific publications
  if (departmentId === 'naval-architecture') {
    const publicationItems = [{
      title: 'Patents',
      description: 'View patents filed and granted by our faculty members',
      icon: Lightbulb,
      file: '/documents/naval-architecture/Patents.pdf',
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'from-purple-50 to-indigo-50',
      borderColor: 'border-purple-200',
      buttonColor: 'bg-purple-600 hover:bg-purple-700'
    }, {
      title: 'Research Papers',
      description: 'Explore research papers published in prestigious journals',
      icon: FileText,
      file: '/documents/naval-architecture/Research-Papers.pdf',
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'from-blue-50 to-cyan-50',
      borderColor: 'border-blue-200',
      buttonColor: 'bg-blue-600 hover:bg-blue-700'
    }, {
      title: 'Books / Book Chapters Published',
      description: 'View books and book chapters authored by our faculty',
      icon: BookOpen,
      file: '/documents/naval-architecture/Books-Published.pdf',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-50 to-emerald-50',
      borderColor: 'border-green-200',
      buttonColor: 'bg-green-600 hover:bg-green-700'
    }, {
      title: 'Conference Publication',
      description: 'Access conference papers presented by faculty members',
      icon: Presentation,
      file: '/documents/naval-architecture/Conference-Publication.pdf',
      color: 'from-orange-500 to-amber-600',
      bgColor: 'from-orange-50 to-amber-50',
      borderColor: 'border-orange-200',
      buttonColor: 'bg-orange-600 hover:bg-orange-700'
    }];
    return <div>
        <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
          <Book className="h-5 w-5 mr-2 text-aemet-blue" />
          Faculty Publications
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {publicationItems.map((item, index) => {
          const IconComponent = item.icon;
          return <div key={index} className={`bg-gradient-to-br ${item.bgColor} p-8 rounded-lg border-2 ${item.borderColor} hover:shadow-xl transition-all duration-300`}>
                <div className="flex flex-col items-center text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mb-4`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-aemet-navy mb-3">{item.title}</h4>
                  <p className="text-gray-600 text-sm mb-6">
                    {item.description}
                  </p>
                  <a href={item.file} download className={`inline-flex items-center px-6 py-3 ${item.buttonColor} text-white rounded-lg transition-colors font-medium w-full justify-center`}>
                    <FileDown className="h-5 w-5 mr-2" />
                    Download PDF
                  </a>
                </div>
              </div>;
        })}
        </div>
      </div>;
  }

  // Marine Engineering specific publications with tabs
  if (departmentId === 'marine-engineering') {
    return <div>
        <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
          <Book className="h-5 w-5 mr-2 text-aemet-blue" />
          Faculty Publications
        </h3>
        
        {/* Simple Tab Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <button onClick={() => setActiveTab('patents')} className={`p-6 rounded-lg border-2 transition-all duration-200 text-left ${activeTab === 'patents' ? 'border-aemet-blue bg-aemet-blue/5' : 'border-gray-200 hover:border-aemet-blue/50 hover:bg-gray-50'}`}>
            <Award className={`h-6 w-6 mb-2 ${activeTab === 'patents' ? 'text-aemet-blue' : 'text-gray-600'}`} />
            <h4 className={`font-semibold ${activeTab === 'patents' ? 'text-aemet-blue' : 'text-aemet-navy'}`}>
              Patents
            </h4>
          </button>

          <button onClick={() => setActiveTab('research')} className={`p-6 rounded-lg border-2 transition-all duration-200 text-left ${activeTab === 'research' ? 'border-aemet-blue bg-aemet-blue/5' : 'border-gray-200 hover:border-aemet-blue/50 hover:bg-gray-50'}`}>
            <FileText className={`h-6 w-6 mb-2 ${activeTab === 'research' ? 'text-aemet-blue' : 'text-gray-600'}`} />
            <h4 className={`font-semibold ${activeTab === 'research' ? 'text-aemet-blue' : 'text-aemet-navy'}`}>
              Research Papers
            </h4>
          </button>

          <button onClick={() => setActiveTab('books')} className={`p-6 rounded-lg border-2 transition-all duration-200 text-left ${activeTab === 'books' ? 'border-aemet-blue bg-aemet-blue/5' : 'border-gray-200 hover:border-aemet-blue/50 hover:bg-gray-50'}`}>
            <BookOpen className={`h-6 w-6 mb-2 ${activeTab === 'books' ? 'text-aemet-blue' : 'text-gray-600'}`} />
            <h4 className={`font-semibold ${activeTab === 'books' ? 'text-aemet-blue' : 'text-aemet-navy'}`}>
              Book Chapters
            </h4>
          </button>
        </div>

        {/* Tab Content */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
          {activeTab === 'patents' && <div>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-aemet-navy mb-2">Department Patents</h4>
                <p className="text-gray-600 text-sm">8 patents filed by Marine Engineering faculty members</p>
              </div>
              
              <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-all duration-300">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <Award className="h-5 w-5 text-aemet-blue" />
                      <h5 className="font-semibold text-aemet-navy">Marine Engineering Patents (2015-2017)</h5>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      Complete list of patents filed by department faculty including Engine Room Oil Separator, 
                      Effluent Treatment Systems, Hydraulic Motors, Turbo Charger Systems, Underwater Vehicles, 
                      Pneumatic Motors, and more.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>📄 8 Patents</span>
                      <span>📅 2015-2017</span>
                    </div>
                  </div>
                  <a href="/documents/marine-engineering-patents.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-aemet-blue text-white rounded-lg hover:bg-aemet-navy transition-colors whitespace-nowrap">
                    <FileText className="h-4 w-4" />
                    View PDF
                  </a>
                </div>
              </div>
            </div>}

          {activeTab === 'research' && <div>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-aemet-navy mb-2">Research Publications (2019-2024)</h4>
                <p className="text-gray-600 text-sm">Consolidated list of faculty research publications across 5 academic years</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
                  <div className="text-2xl font-bold text-aemet-blue mb-1">112</div>
                  <div className="text-xs text-gray-600">AY 2019-20</div>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
                  <div className="text-2xl font-bold text-aemet-blue mb-1">111</div>
                  <div className="text-xs text-gray-600">AY 2020-21</div>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
                  <div className="text-2xl font-bold text-aemet-blue mb-1">88</div>
                  <div className="text-xs text-gray-600">AY 2021-22</div>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
                  <div className="text-2xl font-bold text-aemet-blue mb-1">36</div>
                  <div className="text-xs text-gray-600">AY 2022-23</div>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
                  <div className="text-2xl font-bold text-aemet-blue mb-1">13</div>
                  <div className="text-xs text-gray-600">AY 2023-24</div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-all duration-300">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <FileText className="h-5 w-5 text-aemet-blue" />
                      <h5 className="font-semibold text-aemet-navy">Complete Research Publications List</h5>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      Comprehensive list of research papers published by Marine Engineering faculty in SCI, SCOPUS, UGC, 
                      and International Conference journals including detailed information about authors, titles, journals, 
                      impact factors, and DOI links.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>📊 360+ Publications</span>
                      <span>📅 2019-2024</span>
                      <span>🏆 SCI, SCOPUS, UGC Indexed</span>
                    </div>
                  </div>
                  <a href="/documents/marine-engineering-research-papers.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-aemet-blue text-white rounded-lg hover:bg-aemet-navy transition-colors whitespace-nowrap">
                    <FileText className="h-4 w-4" />
                    View PDF
                  </a>
                </div>
              </div>
            </div>}

          {activeTab === 'books' && <div>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-aemet-navy mb-2">Books and Book Chapters (2020-2023)</h4>
                <p className="text-gray-600 text-sm">Published books and book chapters by Marine Engineering faculty members</p>
              </div>
              
              <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-all duration-300">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen className="h-5 w-5 text-aemet-blue" />
                      <h5 className="font-semibold text-aemet-navy">Complete Books & Chapters List</h5>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      Comprehensive list of books and book chapters published by faculty members covering topics including 
                      Smart Grid, Energy Systems, IoT, Nanotechnology, Materials Engineering, Electromagnetic Theory, 
                      Medical Image Processing, and various engineering fundamentals.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>📚 Multiple Publications</span>
                      <span>📅 2020-2023</span>
                      <span>🏢 Various Publishers</span>
                    </div>
                  </div>
                  <a href="/documents/marine-engineering-book-chapters.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-aemet-blue text-white rounded-lg hover:bg-aemet-navy transition-colors whitespace-nowrap">
                    <BookOpen className="h-4 w-4" />
                    View PDF
                  </a>
                </div>
              </div>
            </div>}
        </div>
      </div>;
  }

  // Mining Engineering specific publications content
  if (departmentId === 'mining-engineering') {
    const miningPublications = [{
      title: "Faculty Publications",
      description: "Complete list of publications by faculty members in referred journals",
      file: "/documents/mining-engineering/Faculty_Publications.pdf",
      icon: FileText,
      color: "bg-green-50 border-green-200"
    }, {
      title: "Research Papers",
      description: "Collection of research papers published by faculty members",
      file: "/documents/mining-research-papers.pdf",
      icon: FileText,
      color: "bg-blue-50 border-blue-200"
    }, {
      title: "Books & Chapters",
      description: "Book chapters contributed by department faculty",
      file: "/documents/mining-books-chapters.pdf",
      icon: BookOpen,
      color: "bg-purple-50 border-purple-200"
    }];
    return <div>
        <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
          <Book className="h-5 w-5 mr-2 text-aemet-blue" />
          Faculty Publications
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {miningPublications.map((publication, index) => {
          const IconComponent = publication.icon;
          return <div key={index} className={`${publication.color} border rounded-lg p-6 hover:shadow-lg transition-all duration-300`}>
                <div className="flex items-start justify-between mb-4">
                  <IconComponent className="h-8 w-8 text-aemet-blue" />
                </div>
                <h4 className="font-semibold text-aemet-navy text-lg mb-2">
                  {publication.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  {publication.description}
                </p>
                <a href={publication.file} download className="inline-flex items-center px-4 py-2 bg-aemet-blue text-white rounded-lg hover:bg-aemet-navy transition-colors duration-200">
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </a>
              </div>;
        })}
        </div>
      </div>;
  }

  // Nautical Sciences specific publications
  if (departmentId === 'nautical-sciences') {
    return <div>
        <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
          <Book className="h-5 w-5 mr-2 text-aemet-blue" />
          Faculty Publications
        </h3>
        
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg border-2 border-blue-200 hover:shadow-xl transition-all duration-300">
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mb-4">
              <FileText className="h-10 w-10 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-aemet-navy mb-3">List of Papers Published in Referred Journals</h4>
            <p className="text-gray-600 mb-6 max-w-2xl">
              Download the complete list of research papers published by our faculty in referred journals and academic publications.
            </p>
            <a 
              href="/documents/nautical/faculty-publications.docx" 
              download="List_of_Papers_Published_in_Referred_Journals.docx"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              <Download className="h-6 w-6 mr-3" />
              Download Publications
            </a>
          </div>
        </div>
      </div>;
  }

  // Petroleum Engineering specific publications
  if (departmentId === 'petroleum-engineering') {
    const researchPapers = [
      {
        authors: "Rajesh Kanna, Sivasankar P, Kalpana S",
        title: "Applications of Data Mining in Hydrocarbon Exploration, Constraints on Geology and Petroleum Reservoir",
        journal: "International Journal of Recent Technology and Engineering",
        volume: "Volume: 9, Issue No: 1",
        pages: "921 - 924",
        year: "2020"
      },
      {
        authors: "Rajesh Kanna, S Kalpana, Puspha Sharma",
        title: "Application of Data Mining in Hydrocarbon Transportation, Storage and Safety Handling",
        journal: "International Journal of Innovative Technology and Exploring Engineering",
        volume: "Volume: 9, Issue No: 8",
        pages: "121 - 123",
        year: "2020"
      },
      {
        authors: "Rajesh Kanna, Kumaraguru",
        title: "Estimating Recovery Rate of Oil Shale by In-Situ Combustion",
        journal: "Journal of Xidian",
        volume: "Volume no: 14, Issue No: 6",
        pages: "360 - 365",
        year: "2020"
      },
      {
        authors: "Rajesh Kanna, Sivasankar P and S Kalpana",
        title: "Application of Bio-surfactant Produced by Pseudomonas aeruginosa MTCC 16036 for Remediation of Petroleum Sludge",
        journal: "European Chemical Bulletin",
        volume: "Volume: 12, Issue No. 5",
        pages: "1883 – 1896",
        year: "2023"
      },
      {
        authors: "R. Kanna, D. Lakshmi, P. Muneeshwari, G. M. Valantina and R. Suguna",
        title: "Enhancing Enterprise Data Management with Secure and Scalable Cloud Storage Solutions",
        journal: "2024 Second International Conference on Advances in Information Technology (ICAIT)",
        volume: "Chikkamagaluru, Karnataka, India",
        pages: "pp. 1-6",
        year: "2024"
      },
      {
        authors: "R. Suguna, G. M. Valantina, R. Kanna, D. Lakshmi and P. Muneeshwari",
        title: "Exploring The Synergy of Convolutional Neural Network For Enhancement Image Classification",
        journal: "2024 International Conference on Trends in Quantum Computing and Emerging Business Technologies",
        volume: "Pune, India",
        pages: "pp. 1-5",
        year: "2024"
      }
    ];

    const books = [
      {
        authors: "Dr. P. Vanmathi, Dr. S. Ramalingam and Dr. A. Rajesh Kanna",
        title: "Mechatronics and IoT",
        isbn: "ISBN: 978-93-7130-859-5",
        publisher: "Charulatha Publications, India",
        year: "2025",
        pages: "pp. 1 – 113"
      }
    ];

    return (
      <div className="space-y-8">
        <h3 className="text-xl font-bold text-aemet-navy mb-6 flex items-center">
          <Book className="h-5 w-5 mr-2 text-aemet-blue" />
          Faculty Publications
        </h3>

        {/* Research Papers Section */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6 border border-blue-200">
          <h4 className="text-lg font-bold text-aemet-navy mb-4 flex items-center">
            <FileText className="h-5 w-5 mr-2 text-blue-600" />
            Research Papers
          </h4>
          <div className="space-y-4">
            {researchPapers.map((paper, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-blue-100">
                <p className="text-gray-700 text-sm">
                  <span className="font-medium text-aemet-navy">{paper.authors}</span>, 
                  <span className="italic"> "{paper.title}"</span>, 
                  {paper.journal}, {paper.volume}, {paper.pages}, {paper.year}.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Books Section */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
          <h4 className="text-lg font-bold text-aemet-navy mb-4 flex items-center">
            <BookOpen className="h-5 w-5 mr-2 text-green-600" />
            Book and Book Chapters
          </h4>
          <div className="space-y-4">
            {books.map((book, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-green-100">
                <p className="text-gray-700 text-sm">
                  <span className="font-medium text-aemet-navy">{book.title}</span>, 
                  {book.authors}, {book.isbn}, {book.publisher}, {book.year}, {book.pages}.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Default publications for other departments
  const publications = [{
    title: "Advanced Control Systems for Renewable Energy Integration",
    authors: "Dr. Smith J., Dr. Johnson S.",
    journal: "IEEE Transactions on Power Systems",
    year: "2024",
    type: "Journal"
  }, {
    title: "Machine Learning Applications in Power Grid Optimization",
    authors: "Dr. Brown M., Dr. Davis L.",
    journal: "International Conference on Smart Grids",
    year: "2023",
    type: "Conference"
  }, {
    title: "IoT-Based Monitoring Systems for Industrial Applications",
    authors: "Dr. Johnson S., Dr. Smith J.",
    journal: "Journal of Industrial IoT",
    year: "2023",
    type: "Journal"
  }, {
    title: "Sustainable Energy Solutions for Maritime Industry",
    authors: "Dr. Davis L., Dr. Brown M.",
    journal: "Maritime Technology Conference",
    year: "2023",
    type: "Conference"
  }];
  return <div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gradient-to-r from-aemet-navy to-aemet-blue text-white p-4 rounded-lg">
          <div className="text-lg font-semibold mb-1">Recent Publications</div>
          <div className="text-sm opacity-90">150+ papers published in last 3 years</div>
        </div>
        <div className="bg-gradient-to-r from-aemet-blue to-green-600 text-white p-4 rounded-lg">
          <div className="text-lg font-semibold mb-1">Research Impact</div>
          <div className="text-sm opacity-90">High citation index and h-factor</div>
        </div>
      </div>
    </div>;
};
export default PublicationsSection;