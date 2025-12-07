// src/app/page.tsx

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SkillsSection from '@/components/SkillsSection';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import EducationSection from '@/components/EducationSection';
import AwardsSection from '@/components/AwardsSection';
import ContactSection from '@/components/ContactSection'; // 👈 NOUVEAU

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      
      {/* 1. Navigation Header */}
      <Header isHome={true} />
      
      {/* 2. Main Content Wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* 3. Hero Section (About) */}
        <section id="hero" className="mb-20">
          <h2 className="text-4xl font-extrabold mb-4 text-gray-900 dark:text-gray-100"> 
            Applied Mathematics and Computer Science Engineer <br /> Pursuing a second degree in Quantitative, Risk and Financial Mathematics.
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mb-8">
           Applied Mathematics and Computer Science Engineer, pursuing a second degree in Quantitative, Risk and Financial Mathematics. I have gained diverse professional experiences in France and internationally, working with global leaders, research laboratories, and SMEs. As a future graduate in 2026, I am seeking an opportunity         </p>

          {/* Bouton Contact Me très visible */}
          <a
            href="mailto:elyasassili@gmail.com" 
            className="inline-flex items-center justify-center px-6 py-3 text-lg font-bold text-white bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
          >
            Contact Me ✉️
          </a>
        </section>

        {/* 4. Professional Experience Timeline */}
        <ExperienceTimeline />

        {/* 5. Education Section */}
        <EducationSection /> 

        {/* 6. Skills Section */}
        <SkillsSection />
        
        {/* 7. Leadership & Awards Section */}
        <AwardsSection />

        {/* 8. NOUVELLE SECTION CONTACT DÉDIÉE */}
        <ContactSection /> 

      </div>

      {/* 9. Footer */}
      <Footer />
    </main>
  );
}