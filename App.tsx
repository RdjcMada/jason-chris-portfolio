
import React, { useState, useEffect } from 'react';
import Navbar from './components/Layout/Navbar';
import HeroSection from './components/Sections/HeroSection';
import AboutSection from './components/Sections/AboutSection';
import SkillsSection from './components/Sections/SkillsSection';
import ProjectsSection from './components/Sections/ProjectsSection';
import ContactSection from './components/Sections/ContactSection';
import HobbiesSection from './components/Sections/HobbiesSection';
import { BlobTopRight, BlobBottomLeft } from './components/Shared/StyledForms';
// Import Language type from types.ts instead of constants.ts
import { Language } from './types';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('fr');
  const [isDark, setIsDark] = useState(false);

  // Apply dark mode class to html element
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="min-h-screen relative overflow-x-hidden selection:bg-[#52B2BF]/30 selection:text-[#2D3243] transition-colors duration-300">
      {/* Background Shapes */}
      <BlobTopRight />
      <BlobBottomLeft />

      <Navbar 
        language={language} 
        setLanguage={setLanguage} 
        isDark={isDark} 
        toggleTheme={toggleTheme} 
      />

      <main className="container mx-auto max-w-7xl">
        <HeroSection language={language} />
        
        <div className="space-y-0">
             <AboutSection language={language} />
             <SkillsSection language={language} />
             <ProjectsSection language={language} />
             <HobbiesSection language={language} />
             <ContactSection language={language} />
        </div>
      </main>

      <footer className="bg-[#2D3243] dark:bg-black text-[#BDC3C7] py-20 text-center transition-colors">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-black text-white text-3xl mb-4 tracking-tighter">RANDRIAMAHERY JASON CHRIS</p>
          <p className="text-sm mb-10 uppercase tracking-[0.3em] font-bold text-[#52B2BF]">
            {language === 'fr' ? 'DÉVELOPPEUR FULL-STACK JAVA / DJANGO' : 'FULL-STACK JAVA / DJANGO DEVELOPER'}
          </p>
          <div className="h-px bg-white/10 w-full mb-10"></div>
          <p className="text-xs font-bold uppercase tracking-widest opacity-50">
            © {new Date().getFullYear()} - {language === 'fr' ? 'Construit avec React & Tailwind CSS. Design moderne bilingue.' : 'Built with React & Tailwind CSS. Modern bilingual design.'}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;