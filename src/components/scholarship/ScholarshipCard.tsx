
import React, { ReactNode } from 'react';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface ScholarshipCardProps {
  title: string;
  icon: ReactNode;
  color: 'blue' | 'navy';
  children: ReactNode;
}

const ScholarshipCard: React.FC<ScholarshipCardProps> = ({ 
  title, 
  icon, 
  color, 
  children 
}) => {
  const borderColor = color === 'blue' ? 'border-l-amet-blue' : 'border-l-amet-navy';
  const bgGradient = color === 'blue' 
    ? 'bg-gradient-to-r from-amet-blue/10 to-transparent' 
    : 'bg-gradient-to-r from-amet-navy/10 to-transparent';
  const iconColor = color === 'blue' ? 'text-amet-blue' : 'text-amet-navy';

  return (
    <Card className={`border-l-4 ${borderColor} shadow-md overflow-hidden`}>
      <CardHeader className={`${bgGradient} pb-4`}>
        <div className="flex items-center gap-3">
          <div className={`h-6 w-6 ${iconColor}`}>{icon}</div>
          <CardTitle className="text-2xl font-semibold text-amet-navy">
            {title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-5">
        {children}
      </CardContent>
    </Card>
  );
};

// Utility components to maintain consistent styling across scholarship cards
export const ScholarshipSectionTitle: React.FC<{
  icon: ReactNode;
  children: ReactNode;
}> = ({ icon, children }) => (
  <h3 className="text-lg font-medium text-amet-navy flex items-center mb-4">
    <div className="h-5 w-5 mr-2 text-amet-blue">{icon}</div>
    {children}
  </h3>
);

export const ScholarshipListItem: React.FC<{ children: ReactNode }> = ({ children }) => (
  <li className="flex items-start">
    <CheckCircle className="h-5 w-5 text-amet-blue mr-2 mt-0.5 flex-shrink-0" />
    <span>{children}</span>
  </li>
);

export const ScholarshipList: React.FC<{ children: ReactNode }> = ({ children }) => (
  <ul className="list-none space-y-3 mb-6">{children}</ul>
);

export const ScholarshipSubListItem: React.FC<{ children: ReactNode }> = ({ children }) => (
  <li className="flex items-start">
    <CheckCircle className="h-4 w-4 text-amet-blue mr-2 mt-0.5 flex-shrink-0" />
    <span>{children}</span>
  </li>
);

export const ScholarshipSubList: React.FC<{ children: ReactNode }> = ({ children }) => (
  <ul className="list-none space-y-3 mb-2 pl-7">{children}</ul>
);

export default ScholarshipCard;
