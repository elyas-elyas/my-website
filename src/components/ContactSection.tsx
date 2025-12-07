// src/components/ContactSection.tsx
import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function ContactSection() {
    // Les URLs (vous devez les remplacer par vos vrais liens)
    const githubUrl = "https://github.com/elyas-elyas";
    const linkedinUrl = "https://www.linkedin.com/in/elyas-assili/";
    const email = "elyasassili@gmail.com";
    const phone = "+33 7 67 58 94 70";

    return (
        <section id="contact" className="py-16 mt-16 bg-indigo-50 dark:bg-gray-800 rounded-xl shadow-inner">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-4xl font-extrabold text-indigo-700 dark:text-indigo-400 mb-4">
                    Ready to Connect?
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
                    I am actively seeking new opportunities starting in 2026. Feel free to reach out via email or connect with me on social platforms.
                </p>

                <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
                    
                    {/* EMAIL */}
                    <a
                        href={`mailto:${email}`}
                        className="flex items-center text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-indigo-600 transition duration-200"
                    >
                        <Mail className="w-6 h-6 mr-2 text-indigo-500" />
                        {email}
                    </a>

                    {/* PHONE */}
                    <a
                        href={`tel:${phone}`}
                        className="flex items-center text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-indigo-600 transition duration-200"
                    >
                        <Phone className="w-6 h-6 mr-2 text-indigo-500" />
                        {phone}
                    </a>
                </div>
                
                {/* Liens Sociaux */}
                <div className="mt-8 pt-6 border-t border-indigo-200 dark:border-gray-700 flex justify-center space-x-8">
                    <Link href={githubUrl} target="_blank" aria-label="GitHub Profile">
                        <Github className="w-8 h-8 text-gray-600 dark:text-gray-400 hover:text-indigo-500 transition duration-200" />
                    </Link>
                    <Link href={linkedinUrl} target="_blank" aria-label="LinkedIn Profile">
                        <Linkedin className="w-8 h-8 text-gray-600 dark:text-gray-400 hover:text-indigo-500 transition duration-200" />
                    </Link>
                </div>

            </div>
        </section>
    );
}