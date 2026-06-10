
import React from 'react';

interface SectionHeaderProps {
  subtitle: string;
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ subtitle, title }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-sm font-medium uppercase tracking-wider text-amet-blue mb-2">{subtitle}</h2>
      <h3 className="text-3xl md:text-4xl font-bold text-amet-navy">{title}</h3>
    </div>
  );
};

export default SectionHeader;
