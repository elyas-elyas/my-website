// src/components/AwardsSection.tsx
import { awardsData } from '@/data/awards';
import { Award, Zap, ExternalLink } from 'lucide-react'; // J'ajoute ExternalLink pour l'icône de lien

const AwardItem = ({ award }: { award: (typeof awardsData)[0] }) => (
  <div className="flex items-start p-4 bg-white dark:bg-gray-800 rounded-lg shadow transition duration-200 hover:shadow-md border-l-4 border-indigo-500">
    <div className="flex-shrink-0 mr-4 mt-1">
      <Award className="w-6 h-6 text-indigo-500" />
    </div>
    <div>
      {award.link ? (
        <a
          href={award.link}
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-lg font-bold text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300 flex items-center transition duration-150"
        >
          {award.title}
          <ExternalLink className="w-4 h-4 ml-2" /> 
        </a>
      ) : (
        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">{award.title}</h3>
      )}

      <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">{award.description}</p>
      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">{award.date}</span>
    </div>
  </div>
);

export default function AwardsSection() {
  return (
    <section id="awards" className="py-16">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-12 border-b-4 border-indigo-500 pb-2">
        Leadership & Awards
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {awardsData.map((award, index) => (
          <AwardItem key={index} award={award} />
        ))}
      </div>
    </section>
  );
}