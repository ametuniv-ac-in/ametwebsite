
import React from 'react';
import CountUp from 'react-countup';
import { 
  GraduationCap, 
  Users, 
  FileText, 
  BookOpen, 
  Award, 
  UserCheck, 
  Coins, 
  Network 
} from 'lucide-react';

interface ImpactStatProps {
  icon: React.ReactNode;
  number: string;
  label: string;
  hasPlusSign?: boolean;
  animationDelay: number;
}

const ImpactStat = ({ icon, number, label, hasPlusSign = false, animationDelay }: ImpactStatProps) => {
  const isNumerical = !isNaN(parseInt(number));
  const numValue = isNumerical ? parseInt(number) : 0;
  
  return (
    <div 
      className="flex flex-col items-center text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg transition-all duration-500 hover:bg-white/15 hover:scale-105 border border-white/10 hover:border-white/20"
      style={{ 
        animationDelay: `${animationDelay}ms`,
        animationFillMode: 'both'
      }}
    >
      <div className="w-14 h-14 bg-gradient-to-br from-aemet-blue to-aemet-navy rounded-full flex items-center justify-center mb-3 shadow-lg">
        {icon}
      </div>
      
      <div className="text-2xl md:text-3xl font-bold text-white flex items-center">
        {isNumerical ? (
          <>
            <CountUp end={numValue} duration={2.5} separator="," />
            {hasPlusSign && <span>+</span>}
          </>
        ) : (
          <span>{number}</span>
        )}
      </div>
      
      <div className="text-sm md:text-base text-white/80 mt-1">
        {label}
      </div>
    </div>
  );
};

const ImpactNumbers = () => {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-aemet-navy to-aemet-navy/90">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aemet-blue/50 to-transparent"></div>
          <div className="absolute inset-0 blur-3xl bg-[radial-gradient(ellipse_at_center,_#59ACC8_0%,transparent_70%)]"></div>
          <div className="absolute inset-0 blur-2xl bg-[radial-gradient(ellipse_at_30%_30%,_#59ACC8_0%,transparent_50%)]"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-10 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Impact</h2>
          <p className="text-white/80 text-lg">AMET University's excellence reflected in numbers</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 animate-slide-up">
          <ImpactStat 
            icon={<GraduationCap className="h-7 w-7 text-white" />} 
            number="16000" 
            label="Graduates" 
            hasPlusSign={true}
            animationDelay={100}
          />
          
          <ImpactStat 
            icon={<Users className="h-7 w-7 text-white" />} 
            number="1382" 
            label="Intl. Students" 
            hasPlusSign={true}
            animationDelay={200}
          />
          
          <ImpactStat 
            icon={<FileText className="h-7 w-7 text-white" />} 
            number="192" 
            label="MoU's"
            animationDelay={300}
          />
          
          <ImpactStat 
            icon={<BookOpen className="h-7 w-7 text-white" />} 
            number="3167" 
            label="Publications"
            animationDelay={400}
          />
          
          <ImpactStat 
            icon={<Award className="h-7 w-7 text-white" />} 
            number="96" 
            label="Patents"
            animationDelay={500}
          />
          
          <ImpactStat 
            icon={<UserCheck className="h-7 w-7 text-white" />} 
            number="12800" 
            label="Placement"
            animationDelay={600}
          />
          
          <ImpactStat 
            icon={<Coins className="h-7 w-7 text-white" />} 
            number="80 Lakh Worth" 
            label="Scholarships Every Year"
            animationDelay={700}
          />
          
          <ImpactStat 
            icon={<Network className="h-7 w-7 text-white" />} 
            number="960" 
            label="Collaboration"
            animationDelay={800}
          />
        </div>
      </div>
    </section>
  );
};

export default ImpactNumbers;
