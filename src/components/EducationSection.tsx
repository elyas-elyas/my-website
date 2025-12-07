// src/components/EducationSection.tsx (Mis à jour)
import { educationData } from '@/data/education';
import { GraduationCap, MapPin, ExternalLink } from 'lucide-react'; // Ajout de ExternalLink
import Link from 'next/link';

// Composant pour une seule carte d'éducation
const EducationCard = ({ education }: { education: (typeof educationData)[0] }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-indigo-500 transition duration-300 hover:shadow-2xl">
    <div className="flex items-start justify-between">
      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 flex items-center">
        <GraduationCap className="w-5 h-5 text-indigo-500 mr-2" />
        {education.institution}
      </h3>
      <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 whitespace-nowrap">
        {education.duration}
      </span>
    </div>

    <p className="text-lg mt-2 text-gray-700 dark:text-gray-300 font-medium">{education.degree}</p>
    <p className="text-sm italic text-gray-500 dark:text-gray-400 mb-3">Major: {education.major}</p>

    <div className="text-sm flex items-center text-gray-600 dark:text-gray-400">
      <MapPin className="w-4 h-4 mr-1 text-gray-500" />
      {education.location}
    </div>

    {/* NOUVEAU : Affichage du lien si disponible */}
    {education.link && (
      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
        <Link
          href={education.link}
          target="_blank"
          className="inline-flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 transition duration-150"
        >
          View Program Details
          <ExternalLink className="w-4 h-4 ml-2" />
        </Link>
      </div>
    )}
  </div>
);

// Composant principal de la section Éducation
export default function EducationSection() {
  return (
    <section id="education" className="py-16">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-12 border-b-4 border-indigo-500 pb-2">
        Education
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {educationData.map((edu, index) => (
          <EducationCard key={index} education={edu} />
        ))}
      </div>
    </section>
  );
}