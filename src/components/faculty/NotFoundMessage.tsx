
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface NotFoundMessageProps {
  type?: 'faculty' | 'department' | 'program' | 'profile';
  facultyId?: string;
  departmentId?: string;
  title?: string;
  message?: string;
  buttonText?: string;
  navigatePath?: string;
  isLoading?: boolean;
}

const NotFoundMessage: React.FC<NotFoundMessageProps> = ({ 
  type = 'faculty', 
  facultyId, 
  departmentId,
  title,
  message,
  buttonText,
  navigatePath: customNavigatePath,
  isLoading = false
}) => {
  const navigate = useNavigate();
  
  let defaultTitle = 'Faculty not found';
  let defaultMessage = 'The faculty you\'re looking for does not exist.';
  let defaultButtonText = 'Return to Home';
  let defaultNavigatePath = '/';
  
  if (type === 'department') {
    defaultTitle = 'Department not found';
    defaultMessage = 'The department you\'re looking for does not exist.';
    defaultButtonText = 'Return to Faculty';
    defaultNavigatePath = `/faculty/${facultyId}`;
  } else if (type === 'program') {
    defaultTitle = 'Program not found';
    defaultMessage = 'The program you\'re looking for does not exist.';
    defaultButtonText = 'Return to Department';
    defaultNavigatePath = `/faculty/${facultyId}/department/${departmentId}`;
  } else if (type === 'profile') {
    defaultTitle = 'Profile not found';
    defaultMessage = 'The profile you\'re looking for does not exist or has been moved.';
    defaultButtonText = 'Return to Governance';
    defaultNavigatePath = '/governance';
  }
  
  // Use custom values if provided, otherwise use defaults
  const finalTitle = title || defaultTitle;
  const finalMessage = message || defaultMessage;
  const finalButtonText = buttonText || defaultButtonText;
  const finalNavigatePath = customNavigatePath || defaultNavigatePath;
  
  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-20 mt-20 min-h-[50vh] flex flex-col items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-aemet-blue border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-gray-600">Loading content...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-20 mt-20 min-h-[50vh] flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-aemet-navy">{finalTitle}</h1>
      <p className="mt-4 text-gray-600">{finalMessage}</p>
      <button 
        onClick={() => navigate(finalNavigatePath)} 
        className="mt-8 px-6 py-2 bg-aemet-blue text-white rounded-md hover:bg-aemet-navy transition-colors"
      >
        {finalButtonText}
      </button>
    </div>
  );
};

export default NotFoundMessage;
