// src/components/CVPage.tsx (Mise à jour)
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CVContentRenderer from './CVContentRenderer'; // 👈 Import du Renderer
import { Download } from 'lucide-react';
import Link from 'next/link';

interface CVPageProps {
  cvData: any; // Utilisation de l'objet de données structurées
}

export default function CVPage({ cvData }: CVPageProps) {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      
      <Header isHome={false} /> 
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="flex justify-between items-center mb-10 border-b-4 border-indigo-500 pb-4 max-w-4xl mx-auto">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100">{cvData.header.title}</h1>
            
            <Link
                href={cvData.header.downloadLink}
                target="_blank"
                download 
                className="inline-flex items-center px-6 py-3 text-lg font-bold text-white bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300"
            >
                <Download className="w-5 h-5 mr-2" />
                Télécharger le CV
            </Link>
        </div>

        {/* Rendu du Contenu Structuré */}
        <CVContentRenderer cvData={cvData} />
      </div>

      <Footer />
    </main>
  );
}