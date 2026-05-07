
import React from 'react';
import AdmissionsLayout from './AdmissionsLayout';

interface AdmissionsContainerProps {
  children: React.ReactNode;
  title: string;
}

const AdmissionsContainer: React.FC<AdmissionsContainerProps> = ({ 
  children,
  title
}) => {
  return (
    <AdmissionsLayout title={title}>
      {children}
    </AdmissionsLayout>
  );
};

export default AdmissionsContainer;
