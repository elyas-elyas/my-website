export const projectsData = [
  {
    id: 'optimal-execution-nonlinear-impact',
    title: 'Optimal Execution under Non-Linear Impact (Quantitative Research)',
    company: 'Quantitative Research Paper',
    duration: '2026',
    link: '/Quantitative_Research_Optimal_Execution under_Non_Linear_Impact.pdf', 
    description: [
      'Derivation of an optimal liquidation strategy for large institutional orders by solving a non-linear Hamilton-Jacobi-Bellman (HJB) equation under CARA utility.',
      'Implementation of a robust Finite Difference scheme (Upwind/Explicit Euler) to handle the "Square-Root Law" ($\\phi=0.5$) of market impact, addressing the singularity of the impact gradient.',
      'Empirical validation demonstrating a 20.7% cost reduction compared to TWAP and a 15.2% gain over the linear Almgren-Chriss model for SPY ETF meta-orders.',
      'Quantification of model risk and the risk-cost trade-off using Monte Carlo simulations (10,000 paths), proving strategy robustness (inefficiency < 1.5%) under misspecification.'
    ],
    tools: ['Stochastic Control', 'HJB Equations', 'Numerical Methods (PDE)', 'Market Microstructure', 'Python/MATLAB', 'Monte Carlo Simulation'],
    buttonLabel: 'View the PDF',
    isGithub: false
  },
  {
    id: 'market-risk-engine-evt',
    title: 'Market Risk Engine & EVT Dashboard (Quantitative Risk Management)',
    company: 'Personal Project',
    duration: '2026',
    link: 'https://github.com/elyas-elyas/Market-Risk-Engine-Extreme-Value-Theory-EVT-Dashboard/tree/main',
    description: [
      'Built a professional-grade Risk Management System in R using Extreme Value Theory (EVT) and GARCH models to capture "Fat Tail" risks often missed by standard Normal distribution models.',
      'Calculates regulatory-grade metrics including Value at Risk (VaR) and Expected Shortfall (ES) at high confidence levels (99.9%) using the Peaks Over Threshold (POT) method.',
      'Developed an interactive Shiny dashboard for real-time backtesting against historical market crashes (e.g., COVID-19), visualizing risk underestimation by traditional Gaussian models.',
    ],
    tools: ['R', 'Shiny', 'Quantitative Finance', 'Extreme Value Theory', 'GARCH', 'Risk Management'],
    buttonLabel: 'View on GitHub',
    isGithub: true
  },
  {
    id: 'high-performance-matching-engine',
    title: 'High-Performance Matching Engine & Real-Time Dashboard',
    company: 'Personal Project',
    duration: '2026',
    link: 'https://github.com/elyas-elyas/Matching-Engine',
    description: [
      'Engineered a multi-threaded Limit Order Book (LOB) and matching engine in C# .NET 10, handling order execution with Price/Time priority and low-latency TCP connectivity.',
      'Developed a full-stack ecosystem including an autonomous Market Making bot and a real-time Blazor Interactive Server dashboard to visualize market data (Ticker Tape, Price Charts) via SignalR.',
      'Demonstrates mastery of Event-Driven Architecture, concurrent programming, and building high-performance financial infrastructure from scratch.',
    ],
    tools: ['C# .NET 10', 'Blazor Server', 'TCP/IP Sockets', 'SignalR', 'Multithreading', 'Event-Driven Architecture'],
    buttonLabel: 'View on GitHub',
    isGithub: true
  },
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
    tools: ["Python", "Quantitative Finance", "Streamlit", "Local LLMs (Ollama/Llama-Index)", "RAG & Vector Embeddings"],
    buttonLabel: 'View on GitHub',
    isGithub: true
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
    buttonLabel: 'View on GitHub',
    isGithub: true
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
    buttonLabel: 'View on GitHub',
    isGithub: true
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
    buttonLabel: 'View on GitHub',
    isGithub: true
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
    buttonLabel: 'View on GitHub',
    isGithub: true
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
    buttonLabel: 'View on GitHub',
    isGithub: true
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
    buttonLabel: 'View on GitHub',
    isGithub: true
  }
];