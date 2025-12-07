// src/app/projects/page.tsx

import Link from 'next/link';
import { Github, Zap } from 'lucide-react';
import { projectsData } from '@/data/projects';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Composant pour une seule carte de projet
const ProjectCard = ({ project }: { project: (typeof projectsData)[0] }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition duration-300 hover:shadow-2xl hover:border-indigo-500 border-2 border-transparent flex flex-col h-full">
    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">{project.title}</h3>
    
    <p className="text-md font-semibold text-indigo-600 dark:text-indigo-400 mb-2">{project.company}</p>
    
    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-4">
      {project.duration}
    </div>

    {/* Description */}
    <ul className="list-disc ml-5 space-y-1 text-gray-700 dark:text-gray-300 flex-grow">
      {project.description.slice(0, 3).map((point, index) => (
        <li key={index}>{point}</li>
      ))}
      {project.description.length > 3 && <li>...</li>}
    </ul>
    
    {/* Tools/Tags */}
    <div className="mt-6">
      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Key Technologies:</h4>
      <div className="flex flex-wrap gap-2">
        {project.tools.map((tag, index) => (
          <span key={index} className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium px-2.5 py-0.5 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </div>
    
    {/* Lien GitHub (bouton WOW) */}
    <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
      <Link 
        href={project.link} 
        target="_blank" 
        className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition duration-150 shadow-md"
      >
        <Github className="w-5 h-5 mr-2" />
        View on GitHub
      </Link>
    </div>
  </div>
);

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      
      {/* 1. Navigation Header (isHome=false pour afficher le bouton Home) */}
      <Header isHome={false} />

      {/* 2. Main Content Wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-12 border-b-4 border-indigo-500 pb-2">
          Featured Projects 🚀
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>

      {/* 3. Footer */}
      <Footer />
    </main>
  );
}