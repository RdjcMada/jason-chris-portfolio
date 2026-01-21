
import React from 'react';
import { PERSONAL_INFO, TRANSLATIONS } from '../../constants';
import { Language } from '../../types';

interface HeroSectionProps {
  language: Language;
}

const HeroSection: React.FC<HeroSectionProps> = ({ language }) => {
  const t = TRANSLATIONS[language];
  return (
    <section id="home" className="relative pt-24 sm:pt-36 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 sm:gap-12">
        {/* Photo Container */}
        <div className="relative group">
          <div className="absolute -inset-2 sm:-inset-4 bg-[#52B2BF] rounded-full opacity-20 -z-10 animate-pulse"></div>
          <div className="w-48 h-48 sm:w-60 h-60 md:w-72 md:h-72 rounded-full border-4 sm:border-8 border-[#2D3243] dark:border-[#52B2BF] overflow-hidden shadow-2xl relative z-10 transition-transform duration-500 group-hover:scale-105">
            <img 
              src="https://cdn.jsdelivr.net/gh/RdjcMada/jason-chris-portfolio@main/assets/pro_pircture.jpg" 
              alt={PERSONAL_INFO.fullName}
              className="w-full h-full object-cover grayscale-[10%]"
            />
          </div>
          {/* Accent Badge */}
          <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-10 h-10 sm:w-16 sm:h-16 bg-[#52B2BF] rounded-full border-4 border-white dark:border-[#12141d] z-20 flex items-center justify-center text-white font-black text-xl sm:text-2xl">
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left relative z-10 max-w-2xl">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-[#2D3243] dark:text-white leading-[1.1] mb-4 tracking-tighter">
            {PERSONAL_INFO.fullName}
          </h1>
          <div className="h-1.5 sm:h-2 w-20 sm:w-32 bg-[#52B2BF] mb-6 sm:mb-8 mx-auto md:mx-0 rounded-full"></div>
          <p className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-[#2D3243]/80 dark:text-gray-400 uppercase tracking-widest leading-snug">
            {PERSONAL_INFO.title[language]}
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
             <a href="#projects" className="bg-[#2D3243] dark:bg-[#52B2BF] text-white px-8 sm:px-10 py-3 sm:py-5 rounded-full font-black text-sm sm:text-base hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                {t.hero.viewProjects}
             </a>
             <a href="#contact" className="border-2 border-[#2D3243] dark:border-white text-[#2D3243] dark:text-white px-8 sm:px-10 py-3 sm:py-4 mt-1 rounded-full font-black text-sm sm:text-base hover:bg-[#2D3243] hover:text-white dark:hover:bg-white dark:hover:text-[#2D3243] transition-all transform hover:-translate-y-1 text-center">
                {t.hero.contactMe}
             </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
