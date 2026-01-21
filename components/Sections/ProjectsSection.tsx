
import React from 'react';
import { useGitHubData } from '../../hooks/useGitHubData';
import { GITHUB_USERNAME, TRANSLATIONS } from '../../constants';
import { Language } from '../../types';
import { Star, Github, ExternalLink, Calendar, Code } from 'lucide-react';
import { CapsuleDivider } from '../Shared/StyledForms';

interface ProjectsSectionProps {
  language: Language;
}

const ProjectCard: React.FC<{ repo: any; language: Language }> = ({ repo, language }) => (
  <div className="bg-[#2D3243] dark:bg-white/5 text-white p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] shadow-xl flex flex-col h-full transform transition-all hover:-translate-y-2 hover:shadow-[#52B2BF]/20">
    <div className="flex justify-between items-start mb-5 sm:mb-6">
      <div className="p-3 sm:p-4 bg-[#52B2BF] rounded-xl sm:rounded-2xl">
        <Code size={20} className="text-white sm:w-6 sm:h-6" />
      </div>
      <div className="flex items-center gap-2 text-[#BDC3C7] dark:text-[#52B2BF] font-black">
        <Star size={16} className="sm:w-[18px] sm:h-[18px]" />
        <span className="text-xs sm:text-sm">{repo.stargazers_count}</span>
      </div>
    </div>
    
    <h3 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4 truncate hover:text-[#52B2BF] transition-colors">
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
    </h3>
    
    <p className="text-[#BDC3C7] dark:text-gray-400 text-xs sm:text-sm mb-6 sm:mb-8 flex-grow line-clamp-3 leading-relaxed">
      {repo.description || (language === 'fr' ? "Aucune description fournie." : "No description provided.")}
    </p>

    <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-[10px] sm:text-xs font-black text-[#52B2BF] mb-5 sm:mb-6">
      {repo.language && (
        <span className="bg-[#52B2BF]/20 px-3 sm:px-4 py-1 rounded-full border border-[#52B2BF]/30 uppercase tracking-widest">
          {repo.language}
        </span>
      )}
      <span className="flex items-center gap-1 opacity-70">
        <Calendar size={12} className="sm:w-3.5 sm:h-3.5" />
        {new Date(repo.updated_at).toLocaleDateString()}
      </span>
    </div>

    <div className="flex gap-4 sm:gap-6 pt-5 sm:pt-6 border-t border-white/10 mt-auto">
      <a 
        href={repo.html_url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-[#52B2BF] transition-colors text-[11px] sm:text-sm font-black uppercase tracking-widest"
      >
        <Github size={18} /> Code
      </a>
      {repo.homepage && (
        <a 
          href={repo.homepage} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-[#52B2BF] transition-colors text-[11px] sm:text-sm font-black uppercase tracking-widest"
        >
          <ExternalLink size={18} /> Démo
        </a>
      )}
    </div>
  </div>
);

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ language }) => {
  const { repos, loading, error, user } = useGitHubData(GITHUB_USERNAME);
  const t = TRANSLATIONS[language];

  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 sm:mb-16 gap-6 sm:gap-8">
          <CapsuleDivider>{t.sections.githubProjects}</CapsuleDivider>
          
          {user && (
            <div className="bg-[#2D3243] dark:bg-[#52B2BF] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full flex gap-6 sm:gap-10 text-xs sm:text-sm font-black shadow-lg">
              <span className="flex gap-2"><strong>{user.public_repos}</strong> REPOS</span>
              <span className="flex gap-2"><strong>{user.followers}</strong> FOLLOWERS</span>
            </div>
          )}
        </div>

        {loading ? (
          <div className="flex justify-center py-20 sm:py-32">
            <div className="animate-spin rounded-full h-12 w-12 sm:h-16 sm:w-16 border-t-4 border-b-4 border-[#52B2BF]"></div>
          </div>
        ) : error ? (
          <div className="text-center py-20 sm:py-32 text-[#E74C3C] font-black text-lg sm:text-xl">
            {error}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
            {repos.map((repo) => (
              <ProjectCard key={repo.id} repo={repo} language={language} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
