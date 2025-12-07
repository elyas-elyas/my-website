// src/app/cv/english/page.tsx
import CVPage from '@/components/CVPage';
import { englishCVData } from '@/data/cv/englishCVData'; // 👈 Import des nouvelles données

export default function EnglishCVRoute() {
  return (
    <CVPage 
      cvData={englishCVData}
    />
  );
}