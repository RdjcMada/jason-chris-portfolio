import { Experience, AcademicProject, Project, Translations } from './types';

export const GITHUB_USERNAME = 'RdjcMada';

export const PERSONAL_INFO = {
  fullName: 'RANDRIAMAHERY JASON CHRIS',
  title: {
    fr: 'DÉVELOPPEUR FULL-STACK JAVA / DJANGO – JUNIOR',
    en: 'JUNIOR JAVA / DJANGO FULL-STACK DEVELOPER'
  },
  phone: '+ 261 38 53 989 18',
  email: 'rd.jasonchris@gmail.com',
  address: 'Cité Canada M42 Parcelle 23/12',
  github: `https://github.com/${GITHUB_USERNAME}`,
  linkedin: 'https://www.linkedin.com/in/jason-randriamahery-419663261/',
};

// --- EXPÉRIENCES ---
export const EXPERIENCES: Record<'fr' | 'en', Experience[]> = {
  fr: [
    {
      title: 'Stage – Hôtel Blue',
      company: 'Hôtel Blue',
      period: '2025 - Aujourd\'hui',
      details: [
        'Technologies utilisées : Django REST Framework, React, TypeScript, PostgreSQL, Tailwind CSS.',
        'Système de planification interactif en temps réel, un moteur de réservation sans conflit, une facturation PDF automatisée et des tableaux de bord statistiques.',
        'Amélioration de la sécurité des revenus et réduction du temps de traitement à la réception.'
      ]
    }
  ],
  en: [
    {
      title: 'Internship – Hotel Blue',
      company: 'Hotel Blue',
      period: '2025 - Today',
      details: [
        'Technologies used: Django REST Framework, React, TypeScript, PostgreSQL, Tailwind CSS.',
        'Real-time interactive scheduling system, conflict-free booking engine, automated PDF invoicing and statistical dashboards.',
        'Revenue security improvement and reception processing time reduction.'
      ]
    }
  ]
};

// --- ANCIENNE LISTE (Utilisée dans la section "À Propos" si besoin) ---
export const ACADEMIC_PROJECTS: Record<'fr' | 'en', AcademicProject[]> = {
  fr: [
    {
      title: 'Application de Streaming (Sockets)',
      description: 'Application de diffusion vidéo/audio en temps réel utilisant des sockets réseau.'
    },
    {
      title: 'Gestion du module RH – Extension ERPNext',
      description: 'Extension du module RH existant dans ERPNext afin d’améliorer les fonctionnalités de gestion des ressources humaines.'
    },
    {
      title: 'Cryptomonnaie en ligne',
      description: 'Application mobile avec React Native et une application web avec Spring Boot, toutes deux connectées à Firebase pour les données en temps réel.'
    }
  ],
  en: [
    {
      title: 'Streaming App (Sockets)',
      description: 'Real-time video/audio broadcasting application using network sockets.'
    },
    {
      title: 'HR Module Management – ERPNext Extension',
      description: 'Extension of the existing HR module in ERPNext to improve human resource management functionalities.'
    },
    {
      title: 'Online Cryptocurrency',
      description: 'Mobile application with React Native and a web application with Spring Boot, both connected to Firebase for real-time data.'
    }
  ]
};

// --- NOUVELLE LISTE DÉTAILLÉE (Utilisée dans AllProjectsPage) ---
export const REALIZED_PROJECTS: Record<'fr' | 'en', Project[]> = {
  fr: [
    {
      title: 'Hôtel Blue Management',
      description: 'Système complet de gestion hôtelière.',
      fullDescription: 'Développement d\'une plateforme interactive complète pour la gestion hôtelière. Le système inclut un planning dynamique en temps réel pour les réceptions, un moteur de réservation intelligent qui empêche les conflits, une facturation PDF automatique et des tableaux de bord financiers détaillés.',
      technologies: ['Django REST', 'React', 'TypeScript', 'PostgreSQL', 'Tailwind'],
      category: 'professional',
      imageUrl: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=1000',
      // githubUrl: '...' (Projet privé probablement)
    },
    {
      title: 'Cryptomonnaie Dashboard',
      description: 'Plateforme d\'échange et de suivi de cryptos.',
      fullDescription: 'Une solution complète comprenant une application mobile pour les utilisateurs (achat/vente) et un tableau de bord web pour les administrateurs. Utilisation de Firebase pour la synchronisation des données en temps réel entre les plateformes.',
      technologies: ['Spring Boot', 'React Native', 'Firebase', 'Java'],
      category: 'academic',
      githubUrl: `https://github.com/${GITHUB_USERNAME}`,
      imageUrl: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=1000',
    },
    {
      title: 'Gestion RH (ERPNext)',
      description: 'Module personnalisé pour l\'ERP open-source ERPNext.',
      fullDescription: 'Création d\'une application personnalisée au sein de l\'écosystème Frappe/ERPNext. Extension des DocTypes standards pour gérer les congés spécifiques, les évaluations de performance et l\'automatisation de la paie selon les normes locales.',
      technologies: ['Python', 'Frappe', 'MariaDB', 'ERPNext'],
      category: 'academic',
      imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000',
    },
    {
      title: 'Streaming App',
      description: 'Diffusion vidéo/audio en temps réel via sockets.',
      fullDescription: 'Projet de recherche sur la transmission de données à faible latence. Implémentation de sockets TCP pour le contrôle et UDP pour le flux média. Gestion du multithreading pour assurer une lecture fluide sans blocage de l\'interface.',
      technologies: ['Java', 'Sockets', 'Multithreading', 'Swing'],
      category: 'personal',
      imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000',
    }
  ],
  en: [
    {
      title: 'Hotel Blue Management',
      description: 'Complete hotel management system.',
      fullDescription: 'Development of a comprehensive interactive platform for hotel management. The system includes a real-time dynamic schedule for receptions, a smart booking engine preventing conflicts, automated PDF invoicing, and detailed financial dashboards.',
      technologies: ['Django REST', 'React', 'TypeScript', 'PostgreSQL', 'Tailwind'],
      category: 'professional',
      imageUrl: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=1000',
    },
    {
      title: 'Cryptocurrency Dashboard',
      description: 'Real-time crypto exchange platform.',
      fullDescription: 'A complete solution featuring a mobile app for users (buy/sell) and a web dashboard for administrators. Uses Firebase for real-time data synchronization across platforms.',
      technologies: ['Spring Boot', 'React Native', 'Firebase', 'Java'],
      category: 'academic',
      githubUrl: `https://github.com/${GITHUB_USERNAME}`,
      imageUrl: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=1000',
    },
    {
      title: 'HR Management (ERPNext)',
      description: 'Custom module for ERPNext.',
      fullDescription: 'Creation of a custom application within the Frappe/ERPNext ecosystem. Extension of standard DocTypes to handle specific leaves, performance evaluations, and payroll automation according to local standards.',
      technologies: ['Python', 'Frappe', 'MariaDB', 'ERPNext'],
      category: 'academic',
      imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000',
    },
    {
      title: 'Streaming App',
      description: 'Video/audio broadcasting via sockets.',
      fullDescription: 'Research project on low-latency data transmission. Implementation of TCP sockets for control and UDP for media streams. Multithreading management to ensure smooth playback without UI blocking.',
      technologies: ['Java', 'Sockets', 'Multithreading', 'Swing'],
      category: 'personal',
      imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000',
    }
  ]
};

// --- EDUCATION ---
export const EDUCATION: Record<'fr' | 'en', any[]> = {
  fr: [
    {
      degree: 'Licence en informatique (en cours)',
      school: 'IT University',
      details: ''
    },
    {
      degree: 'Diplôme d’études secondaires',
      school: '2022',
      details: 'Mention “Assez Bien”'
    }
  ],
  en: [
    {
      degree: 'Bachelor in Computer Science (Ongoing)',
      school: 'IT University',
      details: ''
    },
    {
      degree: 'High School Diploma',
      school: '2022',
      details: 'Mention "Fairly Well"'
    }
  ]
};

// --- SKILLS ---
export const SKILLS = {
  backend: [
    { name: 'Java (Spring Boot)', level: 85 },
    { name: 'Python (Django)', level: 80 }
  ],
  frontend: [
    { name: 'React', level: 85 },
    { name: 'JavaScript', level: 90 }
  ],
  databases: [
    { name: 'PostgreSQL', level: 75 },
    { name: 'MySQL', level: 70 }
  ],
  languages: [
    { name: { fr: 'Français', en: 'French' }, level: 95 },
    { name: { fr: 'Anglais', en: 'English' }, level: 75 }
  ]
};

// --- HOBBIES ---
export const HOBBIES: Record<'fr' | 'en', string[]> = {
  fr: ['Guitare, chant, dessin, lecture', 'Cyclisme, volley-ball', 'Programmation, photographie'],
  en: ['Guitar, singing, drawing, reading', 'Cycling, volleyball', 'Programming, photography']
};

// --- TRANSLATIONS ---
export const TRANSLATIONS: Record<'fr' | 'en', Translations> = {
  fr: {
    nav: { home: 'Accueil', about: 'À Propos', skills: 'Compétences', projects: 'Projets', contact: 'Contact', activite: 'Activité GitHub' },
    hero: { viewProjects: 'Voir mes Projets', contactMe: 'Me contacter' },
    sections: {
      experience: 'Expérience professionnelle',
      academicProjects: 'Projets',
      education: 'Diplômes',
      skills: 'Compétences',
      githubProjects: 'Projets GitHub',
      hobbies: 'Loisirs',
      contact: 'Contact'
    },
    contact: {
      ready: 'Prêt à collaborer ?',
      sub: "Je suis actuellement à la recherche d'opportunités en tant que développeur Junior. N'hésitez pas à me contacter !",
      socials: 'Réseaux Sociaux',
      cvText: "Besoin d'un CV format PDF ?",
      downloadBtn: 'Télécharger mon CV'
    }
  },
  en: {
    nav: { home: 'Home', about: 'About', skills: 'Skills', projects: 'Projects', contact: 'Contact', activite: 'GitHub Activity' },
    hero: { viewProjects: 'View Projects', contactMe: 'Contact Me' },
    sections: {
      experience: 'Professional Experience',
      academicProjects: 'Projects',
      education: 'Diplomas',
      skills: 'Skills',
      githubProjects: 'GitHub Projects',
      hobbies: 'Hobbies',
      contact: 'Contact'
    },
    contact: {
      ready: 'Ready to collaborate?',
      sub: "I am currently looking for opportunities as a Junior Developer. Feel free to contact me!",
      socials: 'Social Networks',
      cvText: "Need a PDF resume?",
      downloadBtn: 'Download Resume'
    }
  }
};