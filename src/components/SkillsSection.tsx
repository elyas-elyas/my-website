// src/components/SkillsSection.tsx
import { technicalSkills, softSkills, languages } from '@/data/skills';
import { BookOpen, Globe } from 'lucide-react';

// Composant pour afficher un tag de compétence
const SkillTag = ({ skill }: { skill: string }) => (
  <span className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm px-3 py-1 rounded-full font-medium transition duration-300 hover:bg-indigo-500 hover:text-white">
    {skill}
  </span>
);

// Composant principal de la section Compétences
export default function SkillsSection() {
  return (
    <section id="skills" className="py-16">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-12 border-b-4 border-indigo-500 pb-2">
        Skills {/* TITRE */}
      </h2>

      {/* Technical Skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {technicalSkills.map((section, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
          >
            <div className="flex items-center mb-4">
              <section.icon className="w-6 h-6 text-indigo-500 mr-3" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{section.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {section.skills.map((skill, i) => (
                <SkillTag key={i} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Soft Skills and Languages (below technical) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {/* Soft Skills */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <div className="flex items-center mb-4">
            <BookOpen className="w-6 h-6 text-indigo-500 mr-3" />
            <h3 className="text-xl font-bold">Soft Skills</h3> {/* TITRE */}
          </div>
          <ul className="list-disc list-inside space-y-2">
            {softSkills.map((skill, index) => (
              <li key={index} className="text-gray-700 dark:text-gray-300">
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Languages */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <div className="flex items-center mb-4">
            <Globe className="w-6 h-6 text-indigo-500 mr-3" />
            <h3 className="text-xl font-bold">Languages</h3> {/* TITRE*/}
          </div>
          <ul className="space-y-2">
            {languages.map((lang, index) => (
              <li key={index} className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold text-gray-900 dark:text-gray-100">{lang.lang}:</span> {lang.level}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}