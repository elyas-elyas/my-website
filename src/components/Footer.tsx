// src/components/Footer.tsx (Mise à jour)
import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  // Remplacez cette URL par votre lien LinkedIn réel
  const linkedinUrl = "https://linkedin.com/in/elyasassili-placeholder"; 

  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white mt-20 border-t border-indigo-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          
          {/* Copyright / Credit */}
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Elyas Assili. Built with Next.js & Tailwind CSS.
          </p>
          
          {/* Contact Links & Social Media */}
          <div className="flex space-x-6">
            
            {/* Email */}
            <a 
              href="mailto:elyasassili@gmail.com" 
              className="flex items-center text-gray-300 hover:text-indigo-400 transition duration-150"
            >
              <Mail className="w-5 h-5 mr-2" />
              elyasassili@gmail.com
            </a>
            
            {/* Phone (Visible sur les grands écrans) */}
            <a 
              href="tel:+33767589470" 
              className="hidden sm:flex items-center text-gray-300 hover:text-indigo-400 transition duration-150"
            >
              <Phone className="w-5 h-5 mr-2" />
              +33 7 67 58 94 70
            </a>
            
            {/* GitHub */}
            <Link 
              href="https://github.com/elyas-elyas" 
              target="_blank" 
              className="flex items-center text-gray-300 hover:text-indigo-400 transition duration-150"
              aria-label="GitHub Profile"
            >
              <Github className="w-6 h-6" />
            </Link>
            
            {/* LinkedIn */}
            <Link 
              href={"https://www.linkedin.com/in/elyas-assili/"} 
              target="_blank" 
              className="flex items-center text-gray-300 hover:text-indigo-400 transition duration-150"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}