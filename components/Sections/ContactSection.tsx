
import React from 'react';
import { Phone, Mail, MapPin, Github, Linkedin, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO, TRANSLATIONS } from '../../constants';
import { Language } from '../../types';
import { CapsuleDivider } from '../Shared/StyledForms';

interface ContactSectionProps {
  language: Language;
}

const ContactItem: React.FC<{ icon: React.ReactNode; label: string; value: string; href?: string }> = ({ icon, label, value, href }) => (
  <div className="flex items-center gap-4 sm:gap-6 group">
    <div className="p-3 sm:p-4 bg-[#2D3243] dark:bg-[#52B2BF] text-white rounded-xl sm:rounded-2xl group-hover:scale-110 transition-all shadow-md">
      {/* Fix: Use ReactElement<any> to allow the size prop which is specific to Lucide icons during cloning */}
      {React.cloneElement(icon as React.ReactElement<any>, { size: 20 })}
    </div>
    <div className="min-w-0 flex-1">
      <p className="text-[10px] sm:text-xs font-black text-[#BDC3C7] dark:text-[#52B2BF] uppercase tracking-widest mb-0.5 sm:mb-1">{label}</p>
      {href ? (
        <a href={href} className="text-[#2D3243] dark:text-white text-sm sm:text-lg font-bold hover:text-[#52B2BF] dark:hover:text-[#52B2BF] transition-colors break-words">{value}</a>
      ) : (
        <p className="text-[#2D3243] dark:text-white text-sm sm:text-lg font-bold break-words">{value}</p>
      )}
    </div>
  </div>
);

const ContactSection: React.FC<ContactSectionProps> = ({ language }) => {
  const t = TRANSLATIONS[language];
  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#BDC3C7]/5 dark:bg-white/[0.01]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <CapsuleDivider className="mb-8 sm:mb-10 w-fit mx-auto sm:mx-0">{t.sections.contact}</CapsuleDivider>
            <h2 className="text-3xl sm:text-5xl font-black text-[#2D3243] dark:text-white mb-6 sm:mb-8 leading-tight text-center sm:text-left">{t.contact.ready}</h2>
            <p className="text-[#2D3243]/70 dark:text-gray-400 mb-8 sm:mb-12 text-lg sm:text-xl font-medium leading-relaxed text-center sm:text-left">
              {t.contact.sub}
            </p>
            
            <div className="space-y-6 sm:space-y-8 max-w-md mx-auto sm:mx-0">
              <ContactItem 
                icon={<Phone />} 
                label={language === 'fr' ? "Téléphone" : "Phone"} 
                value={PERSONAL_INFO.phone} 
                href={`tel:${PERSONAL_INFO.phone.replace(/\s/g, '')}`}
              />
              <ContactItem 
                icon={<Mail />} 
                label="Email" 
                value={PERSONAL_INFO.email} 
                href={`mailto:${PERSONAL_INFO.email}`}
              />
              <ContactItem 
                icon={<MapPin />} 
                label={language === 'fr' ? "Adresse" : "Address"} 
                value={PERSONAL_INFO.address} 
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 bg-[#2D3243] dark:bg-white/5 p-8 sm:p-12 rounded-[2rem] sm:rounded-[3rem] shadow-2xl relative overflow-hidden group border border-white/5">
            <div className="absolute -top-10 -right-10 w-32 sm:h-40 sm:w-40 h-32 bg-[#52B2BF] rounded-full opacity-20 transition-transform group-hover:scale-150 duration-1000"></div>
            
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-8 sm:mb-10 relative z-10 uppercase tracking-tighter text-center sm:text-left">{t.contact.socials}</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 relative z-10">
              <a 
                href={PERSONAL_INFO.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center sm:flex-col gap-4 p-5 sm:p-8 bg-white/5 rounded-2xl sm:rounded-3xl hover:bg-[#52B2BF] transition-all border border-white/10 group/item"
              >
                <Github size={32} className="text-[#52B2BF] group-hover/item:text-white transition-colors sm:w-10 sm:h-10" />
                <span className="text-white font-black text-xs sm:text-sm uppercase tracking-widest">GitHub</span>
              </a>
              <a 
                href={PERSONAL_INFO.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center sm:flex-col gap-4 p-5 sm:p-8 bg-white/5 rounded-2xl sm:rounded-3xl hover:bg-[#52B2BF] transition-all border border-white/10 group/item"
              >
                <Linkedin size={32} className="text-[#52B2BF] group-hover/item:text-white transition-colors sm:w-10 sm:h-10" />
                <span className="text-white font-black text-xs sm:text-sm uppercase tracking-widest">LinkedIn</span>
              </a>
            </div>

            <div className="mt-10 sm:mt-12 pt-8 sm:pt-10 border-t border-white/10 relative z-10">
              <p className="text-white/60 text-xs sm:text-sm font-bold mb-4 sm:mb-6 text-center">{t.contact.cvText}</p>
              <button className="w-full bg-[#E74C3C] text-white py-4 sm:py-5 rounded-xl sm:rounded-2xl font-black flex items-center justify-center gap-2 sm:gap-3 hover:bg-[#c0392b] hover:scale-[1.02] transition-all shadow-xl uppercase tracking-widest text-xs sm:text-base">
                {/* Fix: Access downloadBtn through t.contact instead of directly on t */}
                {t.contact.downloadBtn} <ArrowRight size={20} className="sm:w-[22px] sm:h-[22px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
