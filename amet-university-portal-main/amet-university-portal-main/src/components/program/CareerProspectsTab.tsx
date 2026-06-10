import React from 'react';
import { Briefcase, Building2, TrendingUp, Users, GraduationCap, Brain, Database, BarChart3, Cpu, Code } from 'lucide-react';

interface CareerProspectsTabProps {
  program: {
    careerProspects?: string;
    [key: string]: any;
  };
}

const CareerProspectsTab: React.FC<CareerProspectsTabProps> = ({ program }) => {
  if (!program.careerProspects) {
    return (
      <div className="text-gray-500 italic">
        Career prospects information not available for this program.
      </div>
    );
  }

  // Parse the content to extract structured information
  const content = program.careerProspects;
  
  // Check if content contains NASSCOM survey data (for AI/ML programs)
  const hasNasscomData = content.includes('NASSCOM');
  
  // Extract career roles if they exist in bullet point format
  const careerRoles: string[] = [];
  const lines = content.split('\n');
  lines.forEach(line => {
    if (line.trim().startsWith('-')) {
      careerRoles.push(line.trim().substring(1).trim());
    }
  });
  
  // Career role icons mapping
  const roleIcons: { [key: string]: any } = {
    'AI Engineer': Brain,
    'Machine Learning Engineer': Cpu,
    'Robotics Scientist': Brain,
    'Big Data Engineering': Database,
    'AI Data Analyst': BarChart3,
    'Business Intelligence Developer': BarChart3,
    'Research Scientist': GraduationCap,
    'default': Code
  };
  
  const getRoleIcon = (role: string) => {
    for (const [key, icon] of Object.entries(roleIcons)) {
      if (role.includes(key)) return icon;
    }
    return roleIcons.default;
  };

  // If has NASSCOM data and career roles, show enhanced design
  if (hasNasscomData && careerRoles.length > 0) {
    return (
      <div className="animate-fade-in space-y-8">
        <h2 className="text-3xl font-bold text-aemet-navy flex items-center">
          <Briefcase className="text-aemet-blue mr-3 h-8 w-8" />
          Career Prospects
        </h2>
        
        {/* NASSCOM Survey Statistics */}
        <div className="bg-gradient-to-br from-aemet-blue to-blue-600 text-white rounded-xl p-8 shadow-lg">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <TrendingUp className="mr-2 h-6 w-6" />
            Industry Demand Analysis
          </h3>
          <div className="space-y-4">
            <p className="text-blue-50 leading-relaxed">
              NASSCOM in its survey on the Future Skills highlights the massive demand for AI & ML professionals:
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold mb-1">800,000</div>
                <div className="text-sm text-blue-100">Total Demand by 2021</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold mb-1">570,000</div>
                <div className="text-sm text-blue-100">Employable Talent</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold mb-1">230,000</div>
                <div className="text-sm text-blue-100">Talent Shortage</div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 mt-4">
              <p className="text-blue-50 text-sm">
                <strong>Reskilling & Upskilling:</strong> 1 million professionals need reskilling and 1 million potential employees and students need training in emerging technologies.
              </p>
            </div>
          </div>
        </div>

        {/* Career Roles */}
        <div>
          <h3 className="text-2xl font-semibold text-aemet-navy mb-4 flex items-center">
            <Users className="mr-2 h-6 w-6 text-aemet-blue" />
            Career Opportunities
          </h3>
          <p className="text-gray-600 mb-6">
            The career prospects of the graduates are excellent. Graduates could take roles such as:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {careerRoles.map((role, idx) => {
              const IconComponent = getRoleIcon(role);
              return (
                <div 
                  key={idx}
                  className="bg-white border-2 border-gray-200 rounded-lg p-5 hover:border-aemet-blue hover:shadow-md transition-all duration-200 group"
                >
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-50 group-hover:bg-aemet-blue rounded-lg p-2 transition-colors">
                      <IconComponent className="h-5 w-5 text-aemet-blue group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-aemet-navy group-hover:text-aemet-blue transition-colors">
                        {role}
                      </h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
  
  // Check if content mentions AI/Data Science career paths
  const hasAIDataScienceContent = content.includes('AI Engineers') || content.includes('Data Scientists') || content.includes('Machine Learning');
  
  if (hasAIDataScienceContent) {
    const careerRolesList = [
      { name: 'AI Engineers', icon: Brain, color: 'from-blue-500 to-indigo-600' },
      { name: 'Data Scientists', icon: Database, color: 'from-purple-500 to-pink-600' },
      { name: 'Machine Learning Developers', icon: Cpu, color: 'from-green-500 to-emerald-600' },
      { name: 'Full-Stack Professionals', icon: Code, color: 'from-orange-500 to-red-600' }
    ];
    
    return (
      <div className="animate-fade-in space-y-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-aemet-navy via-blue-800 to-indigo-900 text-white rounded-2xl p-8 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Career Prospects</h2>
            </div>
            <p className="text-blue-100 text-lg leading-relaxed max-w-3xl">
              {content}
            </p>
          </div>
        </div>

        {/* Career Roles Grid */}
        <div>
          <h3 className="text-2xl font-bold text-aemet-navy mb-6 flex items-center gap-2">
            <Users className="h-6 w-6 text-aemet-blue" />
            Career Pathways
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {careerRolesList.map((role, idx) => {
              const IconComponent = role.icon;
              return (
                <div 
                  key={idx}
                  className="group relative bg-white rounded-xl border-2 border-gray-100 p-6 hover:border-transparent hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${role.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <div className="relative z-10 flex items-center gap-4">
                    <div className={`bg-gradient-to-br ${role.color} rounded-xl p-3 text-white shadow-lg group-hover:bg-white/20 transition-colors`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-aemet-navy group-hover:text-white transition-colors">
                        {role.name}
                      </h4>
                      <p className="text-sm text-gray-500 group-hover:text-white/80 transition-colors">
                        High demand in tech industry
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Key Focus Areas */}
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
            <div className="bg-blue-500 text-white rounded-lg p-2 w-fit mb-4">
              <GraduationCap className="h-5 w-5" />
            </div>
            <h4 className="font-bold text-aemet-navy mb-2">Career Readiness</h4>
            <p className="text-gray-600 text-sm">Industry-aligned curriculum preparing students for immediate employment</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
            <div className="bg-green-500 text-white rounded-lg p-2 w-fit mb-4">
              <TrendingUp className="h-5 w-5" />
            </div>
            <h4 className="font-bold text-aemet-navy mb-2">Entrepreneurship</h4>
            <p className="text-gray-600 text-sm">Skills to launch innovative tech startups and ventures</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6">
            <div className="bg-purple-500 text-white rounded-lg p-2 w-fit mb-4">
              <Brain className="h-5 w-5" />
            </div>
            <h4 className="font-bold text-aemet-navy mb-2">Emerging Technologies</h4>
            <p className="text-gray-600 text-sm">Expertise in AI, ML, and digital transformation</p>
          </div>
        </div>

        {/* Industry Sectors */}
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-xl font-bold text-aemet-navy mb-4 flex items-center gap-2">
            <Building2 className="h-5 w-5 text-aemet-blue" />
            Employment Sectors
          </h3>
          <div className="flex flex-wrap gap-2">
            {['Technology Firms', 'Startups', 'Consulting', 'Finance & Banking', 'Healthcare', 'E-commerce', 'Research Labs', 'Government Tech'].map((sector, idx) => (
              <span 
                key={idx}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-aemet-navy hover:bg-aemet-blue hover:text-white hover:border-aemet-blue transition-colors cursor-default"
              >
                {sector}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  // Original structured content handling
  const sections: { [key: string]: string } = {};
  const contentLines = content.split('\n').filter(line => line.trim());
  let currentKey = '';
  
  contentLines.forEach(line => {
    const trimmed = line.trim();
    if (trimmed.includes('**') && trimmed.includes(':')) {
      const match = trimmed.match(/\*\*(.+?):\*\*/);
      if (match) {
        currentKey = match[1].trim();
        const contentAfter = trimmed.split(':**')[1];
        if (contentAfter) {
          sections[currentKey] = contentAfter.trim();
        }
      }
    } else if (currentKey && trimmed && !trimmed.startsWith('**Job Prospects')) {
      sections[currentKey] = trimmed;
    }
  });
  
  const hasStructuredContent = Object.keys(sections).length > 0;
  
  // Helper function to render text with bold markdown
  const renderTextWithBold = (text: string) => {
    const parts = text.split(/\*\*(.*?)\*\*/g);
    return parts.map((part, index) => {
      if (index % 2 === 1) {
        return <strong key={index} className="text-aemet-navy font-semibold">{part}</strong>;
      }
      return <span key={index}>{part}</span>;
    });
  };
  
  // Parse content into intro and bullet points
  const parseCareerContent = (text: string) => {
    const lines = text.split('\n').filter(line => line.trim());
    const intro: string[] = [];
    const bullets: string[] = [];
    
    lines.forEach(line => {
      const trimmed = line.trim();
      if (trimmed.startsWith('-')) {
        bullets.push(trimmed.substring(1).trim());
      } else if (!trimmed.startsWith('**Potential') && trimmed.length > 0) {
        intro.push(trimmed);
      }
    });
    
    return { intro, bullets };
  };
  
  const { intro, bullets } = parseCareerContent(content);
  
  // If we have bullets (like aviation program format)
  if (bullets.length > 0) {
    return (
      <div className="animate-fade-in space-y-6">
        <h2 className="text-2xl font-bold text-aemet-navy mb-6 flex items-center">
          <Briefcase className="text-aemet-blue mr-2 h-6 w-6" />
          Career Prospects
        </h2>
        
        {/* Introduction */}
        {intro.length > 0 && (
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
            {intro.map((line, idx) => (
              <p key={idx} className="text-gray-700 leading-relaxed mb-2 last:mb-0">
                {renderTextWithBold(line)}
              </p>
            ))}
          </div>
        )}
        
        {/* Career Roles */}
        <div>
          <h3 className="text-xl font-semibold text-aemet-navy mb-4 flex items-center gap-2">
            <Users className="h-5 w-5 text-aemet-blue" />
            Potential Roles
          </h3>
          <div className="grid md:grid-cols-2 gap-3">
            {bullets.map((role, idx) => (
              <div 
                key={idx}
                className="bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-aemet-blue hover:shadow-md transition-all duration-200 group flex items-center gap-3"
              >
                <div className="bg-blue-50 group-hover:bg-aemet-blue rounded-lg p-2 transition-colors">
                  <Briefcase className="h-4 w-4 text-aemet-blue group-hover:text-white transition-colors" />
                </div>
                <span className="font-medium text-gray-800 group-hover:text-aemet-navy transition-colors">
                  {role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  if (!hasStructuredContent) {
    return (
      <div className="animate-fade-in space-y-6">
        <h2 className="text-2xl font-bold text-aemet-navy mb-6 flex items-center">
          <Briefcase className="text-aemet-blue mr-2 h-6 w-6" />
          Career Prospects
        </h2>
        
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
          <p className="text-gray-700 leading-relaxed text-lg">
            {renderTextWithBold(content)}
          </p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="animate-fade-in space-y-6">
      <h2 className="text-2xl font-bold text-aemet-navy mb-6 flex items-center">
        <Briefcase className="text-aemet-blue mr-2 h-6 w-6" />
        Job Prospects
      </h2>

      {/* Employment Sectors */}
      <div className="grid md:grid-cols-3 gap-4">
        {sections['In Govt Sector'] && (
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-3">
              <Building2 className="h-5 w-5 text-aemet-blue" />
              <h3 className="font-semibold text-aemet-navy">Government Sector</h3>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              {sections['In Govt Sector']}
            </p>
          </div>
        )}

        {sections['In Pvt'] && (
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-3">
              <Building2 className="h-5 w-5 text-green-600" />
              <h3 className="font-semibold text-aemet-navy">Private Sector</h3>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              {sections['In Pvt']}
            </p>
          </div>
        )}

        {sections['Startups'] && (
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="h-5 w-5 text-purple-600" />
              <h3 className="font-semibold text-aemet-navy">Startups</h3>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              {sections['Startups']}
            </p>
          </div>
        )}
      </div>

      {/* Job Positions */}
      {sections['Position'] && (
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Users className="h-5 w-5 text-aemet-blue" />
            <h3 className="font-semibold text-aemet-navy text-lg">Job Positions</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {sections['Position'].split(',').map((position, idx) => (
              <span 
                key={idx}
                className="px-3 py-1.5 bg-blue-50 text-aemet-navy text-sm rounded-full border border-blue-200"
              >
                {position.trim()}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Training & Opportunities */}
      <div className="grid md:grid-cols-2 gap-4">
        {sections['Project'] && (
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-3">
              <GraduationCap className="h-5 w-5 text-orange-600" />
              <h3 className="font-semibold text-aemet-navy">Project Work</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {sections['Project']}
            </p>
          </div>
        )}

        {sections['Internship'] && (
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-200 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-3">
              <GraduationCap className="h-5 w-5 text-teal-600" />
              <h3 className="font-semibold text-aemet-navy">Internship Opportunities</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {sections['Internship']}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CareerProspectsTab;
