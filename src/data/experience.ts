// src/data/experience.ts
import { technicalSkills } from './skills';

// Fonction utilitaire pour trouver les technologies principales pour chaque poste
const getTechTags = (techs: string[]) => {
  return technicalSkills
    .flatMap(cat => cat.skills)
    .filter(skill => techs.includes(skill));
};

export const professionalExperience = [
  {
    title: 'Apprenticeship - Risk Management',
    company: 'HSBC',
    location: 'Paris, FRANCE',
    duration: 'Sept 2025 - Present', // Adapté de Sept 2025
    description: [
      'Enhanced forward-looking analysis tools (asset allocation, strategic planning, ORSA) using Python and VBA.',
      'Contributed to the development and improvement of economic scenario generators.',
      'Performed statistical and economic analysis of input/output data from the ALM model.',
      'Participated in impact assessments under Solvency II and accounting standards.',
    ],
    tech: ['Python', 'VBA', 'ALM Modeling', 'Financial Modeling', 'Statistical Analysis', 'Actuarial Science','Quantitative Finance', 'Solvency II', 'ORSA'],
  },
  {
    title: 'Intern - Software & Data Analysis',
    company: 'Thales',
    location: 'Paris, FRANCE',
    duration: 'Jan 2024 - July 2024',
    description: [
      'Developed a data decoding and analysis tool to process and interpret large-scale system information with Lua and C.',
      'Designed an interactive mapping system for data visualization and anomaly tracking with Python.',
    ],
    tech: ['C', 'Lua', 'Python', 'Data Visualization', 'Data Decoding', 'Tool Development' ,'Network Development'],
  },
  {
    title: 'Intern - Quantitative Finance & Modeling',
    company: 'Kyoto University, Mathematics Laboratory',
    location: 'Kyoto, JAPAN ',
    duration: 'June 2023  - Aug 2023 ',
    description: [
      'Built mathematical and computational tools for stochastic modeling and numerical optimization.',
      'Applied quantitative finance methods (Monte Carlo simulations, stochastic processes, model calibration).',
      'Conducted advanced statistical analysis and automated complex simulations using C++, Python and MATLAB.',
      'Created an original system of mathematical equations for modeling and analysis.',
    ],
    tech: ['C++', 'Python', 'MATLAB', 'Quantitative Finance', 'Quantitative Research', 'Monte Carlo Simulations', 'Stochastic Modeling', 'Numerical Modeling', 'Statistical Analysis'],
  },
  {
    title: 'Industrial Project - AI & Data Science',
    company: 'Snap Inc. (Snapchat)',
    location: 'Remote ',
    duration: 'Sept 2022 - May 2023',
    description: [
      'Designed and implemented advanced artificial intelligence and data science solutions to support strategic decision-making.',
      'Developed and optimized machine learning and deep learning models for predictive analytics and pattern detection.',
      'Built end-to-end data pipelines, including preprocessing, feature engineering, and model evaluation.',
      'Utilized a wide range of AI and data science tools and frameworks within an international MLOps environment.',
    ],
    tech: ['Artificial Intelligence', 'Data Science', 'Deep Learning', 'Machine Learning', 'Data Pipelines', 'MLOps Environment'],
  },
  {
    title: 'Intern',
    company: 'Nomadvantage',
    location: 'Paris, FRANCE',
    duration: 'June 2022 – Aug 2022',
    description: [
      'Managed and integrated complex client and product datasets, ensuring data consistency and reliability.',
      'Developed automated data pipelines for ETL processes, data cleaning, and transformation.',
      'Applied mathematical and statistical methods to analyze datasets, identify trends, and generate actionable insights.',
    ],
    tech: ['Data Integration', 'ETL', 'Automated Data Pipelines', 'Data Cleansing', 'Data Transformation', 'Statistical Analysis', 'Mathematical Methods'],
  },
];