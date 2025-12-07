// src/app/cv/french/page.tsx 

import CVPage from '@/components/CVPage';
import { frenchCVData } from '@/data/cv/frenchCVData';

export default function FrenchCVRoute() {
  return (
    <CVPage 
      cvData={frenchCVData}
    />
  );
}