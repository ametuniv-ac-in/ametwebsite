
import React from 'react';
import { useParams } from 'react-router-dom';
import Faculty from './Faculty';

const FacultyPage = () => {
  const { id } = useParams();
  
  return <Faculty />;
};

export default FacultyPage;
