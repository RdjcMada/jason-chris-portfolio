
import React from 'react';
import { EXPERIENCES, ACADEMIC_PROJECTS, EDUCATION, TRANSLATIONS } from '../../constants';
import { Language } from '../../types';
import { CapsuleDivider } from '../Shared/StyledForms';

interface AboutSectionProps {
  language: Language;
}

const AboutSection: React.FC<AboutSectionProps> = ({ language }) => {
  const t = TRANSLATIONS[language];
  return (
    <section id="about" className="py-12 sm:py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto space-y-16 sm:space-y-24">
        {/* Professional Experiences */}
        <div className="scroll-mt-24">
          <CapsuleDivider className="mb-8 sm:mb-8 w-fit mx-auto sm:mx-0">{t.sections.experience}</CapsuleDivider>
          {EXPERIENCES[language].map((exp, idx) => (
            <div key={idx} className="mb-8 border-l-4 sm:border-l-8 border-[#52B2BF] pl-5 sm:pl-8 relative">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-3">
                <h3 className="text-xl sm:text-2xl font-black text-[#2D3243] dark:text-white">{exp.title}</h3>
                <span className="bg-[#BDC3C7]/20 dark:bg-white/10 px-3 py-1 rounded-full text-[#52B2BF] font-bold text-xs sm:text-sm w-fit">{exp.period}</span>
              </div>
              <p className="text-base sm:text-lg font-bold text-[#2D3243]/70 dark:text-gray-400 mb-4">{exp.company}</p>
              <ul className="space-y-3 mt-4 text-sm sm:text-base">
                {exp.details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex gap-3 text-[#2D3243]/80 dark:text-gray-300">
                    <span className="w-1.5 h-1.5 bg-[#52B2BF] rounded-full shrink-0 mt-2"></span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Academic Projects */}
        <div className="scroll-mt-24">
          <CapsuleDivider className="mb-8 sm:mb-8 w-fit mx-auto sm:mx-0">{t.sections.academicProjects}</CapsuleDivider>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {ACADEMIC_PROJECTS[language].map((project, idx) => (
              <div key={idx} className="bg-white dark:bg-white/5 p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm border border-[#BDC3C7]/20 dark:border-white/10 hover:shadow-xl transition-all group">
                <h3 className="text-lg sm:text-xl font-black text-[#2D3243] dark:text-white mb-3 group-hover:text-[#52B2BF] transition-colors">{project.title}</h3>
                <div className="h-1 w-10 bg-[#52B2BF] mb-4"></div>
                <p className="text-sm sm:text-base text-[#2D3243]/70 dark:text-gray-400 leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="scroll-mt-24">
          <CapsuleDivider className="mb-8 sm:mb-8 w-fit mx-auto sm:mx-0">{t.sections.education}</CapsuleDivider>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            {EDUCATION[language].map((edu, idx) => (
              <div key={idx} className="relative pl-6 sm:pl-10">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#2D3243] dark:bg-[#52B2BF] rounded-full"></div>
                <h3 className="text-lg sm:text-xl font-black text-[#2D3243] dark:text-white mb-2">{edu.degree}</h3>
                <p className="text-[#52B2BF] font-extrabold uppercase tracking-widest text-xs sm:text-sm mb-2">{edu.school}</p>
                {edu.details && <p className="text-xs sm:text-sm italic text-[#2D3243]/50 dark:text-gray-500 font-medium">{edu.details}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
