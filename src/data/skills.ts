// src/data/skills.ts
import { Zap, Code, Database, TrendingUp, Cpu } from 'lucide-react';

export const technicalSkills = [
  {
    category: 'Programming Languages',
    icon: Code,
    skills: ['Python', 'C', 'C++', 'C#', 'MATLAB', 'R', 'Java', 'VBA'],
  },
  {
    category: 'Quantitative Finance',
    icon: TrendingUp, 
    skills: [
      'Derivatives Pricing',
      'Stochastic Processes',
      'Model Calibration',
      'Risk Management',
      'Financial Modeling',
      'Time Series Analysis',
      'Quantitative Trading Strategies'
    ],
  },
  
  {
    category: 'Data & Databases',
    icon: Database, 
    skills: [
      'SQL', 'PostgreSQL', 'SAS', 'ETL/ELT Processes', 'Power BI', 'Tableau', 'GCP'
    ],
  },
  {
    category: 'Artificial Intelligence & MLOps',
    icon: Cpu,
    skills: ['Deep Learning Models', 'Machine Learning', 'Data Science Tools', 'MLOps Environment', 'Predictive Analytics'],
  },
  {
    category: 'Tools & Systems',
    icon: Zap,
    skills: ['LaTeX','Git', 'Jira', 'Linux', 'Windows', 'macOS', 'ERP', 'Talend', 'Microsoft Office (Excel, PowerPoint)'],
  },
];

export const softSkills = [
  'Analytical Thinking',
  'Results-driven',
  'Ability to Work Under Pressure',
  'Team-player',
  'Ability to Simplify Complex Ideas',
  'Commitment to Excellence',
];

export const languages = [
  { lang: 'French', level: 'Native' },
  { lang: 'English', level: 'Fluent ' },
  { lang: 'Arabic', level: 'Conversational' },
  { lang: 'Spanish', level: 'Conversational' },
  { lang: 'Japanese', level: 'Notions' },
];