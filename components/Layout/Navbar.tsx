
import React, { useState } from 'react';
import { Menu, X, Sun, Moon, Languages } from 'lucide-react';
import { TRANSLATIONS } from '../../constants';
import { Language } from '../../types';

interface NavbarProps {
  language: 'fr' | 'en';
  setLanguage: (l: 'fr' | 'en') => void;
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ language, setLanguage, isDark, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = TRANSLATIONS[language];

  const navLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.skills, href: '#skills' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-white/90 dark:bg-[#12141d]/90 backdrop-blur-md border-b border-[#BDC3C7]/30 dark:border-white/10 shadow-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 sm:h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-[#2D3243] dark:text-white font-extrabold tracking-tighter text-xl sm:text-2xl">
              JASON<span className="text-[#52B2BF]">CHRIS</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <div className="flex space-x-5 xl:space-x-8 mr-4 xl:mr-6 border-r border-[#BDC3C7] pr-6 dark:border-white/10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[#2D3243] dark:text-gray-300 hover:text-[#52B2BF] dark:hover:text-[#52B2BF] font-semibold transition-colors text-sm xl:text-base"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="flex items-center space-x-3 xl:space-x-4">
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-[#2D3243] dark:text-white"
                title="Toggle Theme"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <button 
                onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
                className="flex items-center gap-2 px-3 py-1 rounded-full border border-[#2D3243] dark:border-white/30 text-xs xl:text-sm font-bold hover:bg-[#2D3243] hover:text-white dark:hover:bg-white dark:hover:text-[#2D3243] transition-all"
              >
                <Languages size={14} />
                {language.toUpperCase()}
              </button>
            </div>
          </div>

          {/* Mobile menu controls */}
          <div className="lg:hidden flex items-center space-x-2">
             <button onClick={toggleTheme} className="p-2 text-[#2D3243] dark:text-white rounded-full hover:bg-gray-100 dark:hover:bg-white/5">
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
             </button>
             <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#2D3243] dark:text-white hover:text-[#52B2BF] p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-white dark:bg-[#1a1d23] border-t border-[#BDC3C7] dark:border-white/10 transition-all duration-300 shadow-2xl ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
          <div className="px-4 py-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-4 text-[#2D3243] dark:text-gray-300 hover:bg-[#52B2BF] hover:text-white rounded-xl font-bold transition-all text-lg"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 flex justify-between items-center px-4">
               <button 
                  onClick={() => { setLanguage(language === 'fr' ? 'en' : 'fr'); setIsOpen(false); }}
                  className="flex items-center gap-2 px-6 py-2 rounded-full border border-[#2D3243] dark:border-white/30 text-sm font-bold dark:text-white"
                >
                  <Languages size={18} />
                  {language === 'fr' ? 'Switch to English' : 'Passer en Français'}
                </button>
            </div>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
