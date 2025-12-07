// src/components/ExperienceTimeline.tsx
import { professionalExperience } from '@/data/experience';
import { Briefcase, MapPin } from 'lucide-react';

// Composant pour afficher une seule carte d'expérience
const TimelineItem = ({ experience, isLast }: { experience: (typeof professionalExperience)[0], isLast: boolean }) => (
  <div className="flex relative pb-12">
    {/* Ligne verticale de la timeline (Connecteur) */}
    {!isLast && (
      <div className="h-full w-1 bg-indigo-200 dark:bg-indigo-700 absolute inset-0 left-2.5 top-5"></div>
    )}
    
    {/* Point du cercle (Marqueur) */}
    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10 mr-4">
      <Briefcase className="w-4 h-4" />
    </div>
    
    {/* Contenu de la carte d'expérience */}
    <div className="flex-grow pt-1 pb-8 px-4 rounded-lg bg-white dark:bg-gray-800 shadow-xl transition duration-300 hover:shadow-2xl">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">{experience.title}</h3>
      
      <p className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-2">{experience.company}</p>
      
      <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-3">
        <MapPin className="w-4 h-4 mr-1" />
        {experience.location} &bull; {experience.duration}
      </div>

      <ul className="list-disc ml-5 space-y-1 text-gray-700 dark:text-gray-300">
        {experience.description.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>

      {/* Tags de Technologies */}
      <div className="mt-4 flex flex-wrap gap-2">
        {experience.tech.map((tag, index) => (
          <span key={index} className="inline-block bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 text-xs font-medium px-2.5 py-0.5 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

// Composant principal de la section Expérience
export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-16">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-12 border-b-4 border-indigo-500 pb-2">
        Professional Experience
      </h2>
      
      <div className="max-w-4xl mx-auto">
        {professionalExperience.map((exp, index) => (
          <TimelineItem 
            key={index}
            experience={exp}
            isLast={index === professionalExperience.length - 1}
          />
        ))}
      </div>
    </section>
  );
}