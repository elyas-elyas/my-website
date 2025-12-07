// src/components/CVContentRenderer.tsx

import React from 'react';
import { Download } from 'lucide-react';
import Link from 'next/link';

// Composant pour reproduire l'item de sous-section (Titre, Date, Sous-titre, Lieu)
const ResumeSubheading: React.FC<any> = ({ heading, date, subtitle, location, details }) => (
  <div className="mb-4">
    <div className="flex justify-between font-bold text-gray-900 dark:text-gray-100">
      <span className="text-lg">{heading}</span>
      <span className="text-base text-gray-700 dark:text-gray-300">{date}</span>
    </div>
    <div className="flex justify-between italic text-gray-600 dark:text-gray-400">
      <span className="text-sm">{subtitle}</span>
      <span className="text-sm">{location}</span>
    </div>
    <ul className="list-disc ml-5 mt-2 space-y-1 text-sm text-gray-700 dark:text-gray-300">
      {details.map((detail: string, i: number) => (
        <li key={i} dangerouslySetInnerHTML={{ __html: detail }} />
      ))}
    </ul>
  </div>
);

// Composant pour les tableaux (Compétences/Langues)
const TabularSection: React.FC<any> = ({ tables }) => (
  <div className="space-y-6 mt-4">
    {tables.map((table: any, index: number) => (
      <div key={index} className="grid grid-cols-2 gap-x-8 text-sm">
        <div className="border-b-2 border-indigo-500 pb-1 mb-2">
          <h4 className="font-bold uppercase text-gray-900 dark:text-gray-100">{table.col1Title}</h4>
        </div>
        <div className="border-b-2 border-indigo-500 pb-1 mb-2">
          <h4 className="font-bold uppercase text-gray-900 dark:text-gray-100">{table.col2Title}</h4>
        </div>
        
        {/* Contenu - Affichage des puces ou du texte simple */}
        <div className="text-gray-700 dark:text-gray-300 col-span-1">
          {Array.isArray(table.col1Content) ? (
            <ul className="list-disc ml-4 space-y-1">
              {table.col1Content.map((item: string, i: number) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          ) : (
            <p>{table.col1Content}</p>
          )}
        </div>
        <div className="text-gray-700 dark:text-gray-300 col-span-1">
          {Array.isArray(table.col2Content) ? (
             // Si le contenu est une liste (Langues/Awards), on l'affiche en liste
            <ul className="list-disc ml-4 space-y-1">
              {table.col2Content.map((item: string, i: number) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          ) : (
             // Si le contenu est du texte simple (Technical Skills/Soft Skills)
            <p>{table.col2Content}</p>
          )}
        </div>
      </div>
    ))}
  </div>
);


const CVContentRenderer: React.FC<any> = ({ cvData }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* En-tête du CV (Nom et Contact) */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100">Elyas Assili</h1>
        <p className="text-sm mt-1 text-gray-600 dark:text-gray-400">{cvData.header.contact}</p>
        <div className="mt-2 text-sm text-gray-700 dark:text-gray-300 text-justify" dangerouslySetInnerHTML={{ __html: cvData.header.description }}></div>
      </div>

      {cvData.sections.map((section: any, index: number) => (
        <React.Fragment key={index}>
          <h2 className="text-xl font-extrabold uppercase mt-6 mb-4 border-b-2 border-gray-900 dark:border-gray-100 pb-1">
            {section.title}
          </h2>
          
          {section.type === 'subheading_list' && (
            <div className="space-y-4">
              {section.items.map((item: any, itemIndex: number) => (
                <ResumeSubheading key={itemIndex} {...item} />
              ))}
            </div>
          )}

          {section.type === 'tabular' && (
            <TabularSection tables={section.tables} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default CVContentRenderer;