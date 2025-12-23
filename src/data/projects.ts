// src/data/projects.ts

export const projectsData = [
    {
    id: "quant-ai-bot",
    title: "Quant AI Bot (Retrieval-Augmented Generation Chatbot for Quantitative Finance)",
    company: "Personal Project",
    duration: "2025",
    link: "https://github.com/elyas-elyas/Quant_AI_Bot",
    description: [
      "Built an advanced Retrieval-Augmented Generation (RAG) chatbot tailored for quantitative finance research and analysis.",
      "Designed the system to ingest and vectorize academic course materials and research papers, enabling context-aware responses with precise source citations.",
      "Developed a local, privacy-focused interactive interface that allows users to query complex financial concepts and receive accurate explanations backed by original documents."
    ],
    "tools": ["Python", "Quantitative Finance", "Streamlit", "Local LLMs (Ollama/Llama-Index)", "RAG & Vector Embeddings"]
  },
  {
    id: 'portfolio-optimizer',
    title: 'Portfolio Optimizer & Interactive Dashboard (Quantitative Finance)',
    company: 'Personal Project',
    duration: '2025',
    link: 'https://github.com/elyas-elyas/Portfolio-Optimizer-Dashboard',
    description: [
      'Developed a full-stack application to optimize investment portfolios using Modern Portfolio Theory (MPT) and Markowitz optimization.',
      'Implemented a user-friendly dashboard for visualizing optimal asset allocation, risk-return trade-offs (efficient frontier), and performing dynamic backtesting.',
      'Showcases expertise in quantitative finance modeling and web-based data visualization.',
    ],
    tools: ['Python', 'Quantitative Finance', 'Streamlit', 'NumPy', 'Pandas', 'Data Visualization'],
  },
  {
    id: 'option-pricing-risk-engine',
    title: 'Quantitative Option Pricing and Risk Engine',
    company: 'Personal Project',
    duration: '2025',
    link: 'https://github.com/elyas-elyas/Quantitative-Option-Pricing-and-Risk-Engine',
    description: [
      'Built a sophisticated quantitative engine for option pricing (Black-Scholes, Monte Carlo) and risk management (Greeks calculation).',
      'Implemented models to calculate the sensitivity of option prices to underlying parameters (Delta, Gamma, Theta, Vega, Rho).',
      'Demonstrates advanced knowledge of derivatives valuation and stochastic calculus application.',
    ],
    tools: ['C++', 'Quantitative Finance', 'Option Pricing', 'Risk Management', 'Derivatives', 'Stochastic Calculus'],
  },
  {
    id: 'pair-trading-strategy',
    title: 'Algorithmic Pair Trading Strategy Implementation',
    company: 'Personal Project',
    duration: '2025',
    link: 'https://github.com/elyas-elyas/Pair-trading-strategy',
    description: [
      'Designed and backtested a fully automated algorithmic pair trading strategy based on cointegration analysis and statistical arbitrage.',
      'Used historical data to identify mean-reverting pairs, implemented robust entry/exit signals, and simulated performance metrics.',
      'Validates practical application of stochastic processes and time-series analysis in finance.',
    ],
    tools: ['Python', 'Statistical Arbitrage', 'Cointegration', 'Backtesting', 'Quantitative Analysis', 'Pandas'],
  },
  {
    id: 'receipt-extraction-dl',
    title: 'Receipt Total Extraction using Deep Learning (OCR/NLP)',
    company: 'Academic Project',
    duration: '2024',
    link: 'https://github.com/elyas-elyas/Receipt-Total-Extraction-using-a-Deep-Learning-approach',
    description: [
      'Developed a Deep Learning model to automatically extract the total price from scanned or image-based receipts.',
      'Utilized Computer Vision (e.g., object detection) for localization and NLP techniques to structure the extracted data.',
      'Demonstrates advanced skills in Computer Vision, NLP, and Deep Learning model deployment.',
    ],
    tools: ['Deep Learning', 'PyTorch/TensorFlow', 'Computer Vision', 'OCR', 'NLP', 'Python'],
  },
  {
    id: 'gestion-tarifs-vols',
    title: 'Flight Price Prediction and Dynamic Management System',
    company: 'Academic Project',
    duration: '2024',
    link: 'https://github.com/elyas-elyas/Gestion-de-Tarifs-des-vols',
    description: [
      'Built a system to collect, analyze, and predict flight price fluctuations using sophisticated machine learning regression models.',
      'Focused on data scraping, feature engineering (time of day, season, distance), and model evaluation.',
      'Resulted in a tool capable of providing dynamic pricing recommendations for optimization.',
    ],
    tools: ['Machine Learning', 'Regression Models', 'Data Scraping', 'Python', 'Predictive Analytics'],
  },
  {
    id: 'projet-n-corps',
    title: 'N-Body Problem Simulation (C++ Numerical Methods)',
    company: 'Academic Group Project (with Rudiio)',
    duration: '2022',
    link: 'https://github.com/Rudiio/Projet-N-corps',
    description: [
      'Implemented a numerical simulation of the N-Body problem in astrophysics, calculating gravitational interactions between multiple particles.',
      'Focused on optimizing computational performance and applying high-precision numerical integration methods (e.g., Verlet integration).',
      'Highlights strong background in C++ and high-performance scientific computing.',
    ],
    tools: ['C++', 'Numerical Methods', 'High-Performance Computing', 'Physics Simulation', 'Optimization'],
  },
];