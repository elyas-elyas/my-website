// src/components/Header.tsx (VERSION FINALE AVEC ALIGNEMENT VERTICAL CORRIGÉ)

import Link from 'next/link';
import { Home, Zap, Linkedin, ChevronDown } from 'lucide-react'; 

export default function Header({ isHome = true }: { isHome?: boolean }) {
  const navLinks = [
    { name: 'Experience', href: '/#experience' },
    { name: 'Education', href: '/#education' },
    { name: 'Skills', href: '/#skills' },
  ];
  
  const linkedinUrl = "https://linkedin.com/in/elyasassili-placeholder"; 

  return (
    <header className="sticky top-0 z-50 p-4 border-b border-gray-200 dark:border-gray-800 backdrop-blur-md bg-opacity-80 dark:bg-opacity-80 bg-gray-50 dark:bg-gray-900">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Nom & Lien LinkedIn */}
        <div className="flex items-center space-x-4">
            <Link href="/" className="text-2xl font-bold tracking-tight text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 transition duration-150">
              Elyas Assili
            </Link>
            <Link
                href={linkedinUrl}
                target="_blank"
                className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 transition duration-150 hidden sm:block"
                aria-label="LinkedIn Profile"
            >
                <Linkedin className="w-5 h-5" />
            </Link>
        </div>
        
        {/* Conteneur principal de navigation avec ALIGNEMENT CENTRÉ */}
        <div className="flex space-x-6 items-center">
          {isHome && navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              // AJOUT DE py-2 pour aligner la ligne de base
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition duration-150 hidden sm:inline-block py-2" 
            >
              {link.name}
            </a>
          ))}
          
          {/* Dropdown CV */}
          <div className="relative group hidden sm:block">
            <span className="flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition duration-150 cursor-pointer py-2">
                CV
                <ChevronDown className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180" />
            </span>
            {/* Menu Déroulant */}
            <div className="absolute right-0 top-full w-40 bg-white dark:bg-gray-700 rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-50 transform group-hover:translate-y-0"> 
                <Link 
                    href="/cv/english" 
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 whitespace-nowrap"
                >
                    CV (English)
                </Link>
                <Link 
                    href="/cv/french" 
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 whitespace-nowrap"
                >
                    CV (French)
                </Link>
            </div>
          </div>

          {/* Bouton Projects (qui contient déjà py-2) */}
          <Link 
            href="/projects" 
            className={`flex items-center px-4 py-2 text-sm font-medium ${!isHome ? 'text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600' : 'text-white bg-indigo-600 rounded-lg hover:bg-indigo-700'}`}
          >
            <Zap className="w-4 h-4 mr-2" />
            Projects
          </Link>

          {/* Bouton Home */}
          {!isHome && (
            <Link 
              href="/" 
              className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 rounded-lg border border-gray-300 dark:border-gray-600"
            >
              <Home className="w-4 h-4 mr-2" />
              Home
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}