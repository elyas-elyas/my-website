// src/data/cv/englishCVData.ts

export const englishCVData = {
  header: {
    title: "Curriculum Vitae (English)",
    downloadLink: "/Resume_Elyas_Assili.pdf", // Chemin vers le fichier en anglais
    description: "Applied Mathematics and Computer Science Engineer, pursuing a second degree in Quantitative Finance and Risk Management. I have gained diverse professional experiences in France and internationally, working with global leaders, research laboratories, and SMEs. I am seeking a permanent position in quantitative finance or capital market for 2026.",
    contact: "+33 7 67 58 94 70 | elyasassili@gmail.com | https://github.com/elyas-elyas | French"
  },
  sections: [
    {
      title: "EDUCATION",
      type: "subheading_list",
      items: [
        {
          heading: "Panthéon Sorbonne",
          date: "Sept 2025",
          subtitle: "Master’s degree in Risk Engineering: Finance and Insurance (M2)",
          location: "Paris, FRANCE",
          details: ["Major in Engineering of Financial Mathematics"],
        },
        {
          heading: "Polytech Sorbonne - École Polytechnique Universitaire de Sorbonne Université",
          date: "Sept 2021 -- Nov 2024",
          subtitle: "5-year-degree in Engineering School",
          location: "Paris, FRANCE",
          details: ["Major in Applied Mathematics and Computer Science"],
        },
        {
          heading: "École de Technologie Supérieure",
          date: "Sept 2023 -- Dec 2023",
          subtitle: "Study Abroad Program",
          location: "Montréal, CANADA",
          details: ["Major in Artificial Intelligence"],
        },
      ]
    },
    {
      title: "EXPERIENCE",
      type: "subheading_list",
      items: [
        {
          heading: "HSBC -  Asset-Liability Management Analyst",
          date: "Sept 2025",
          subtitle: "",
          location: "Paris, FRANCE",
          details: [
            "Engineered portfolio analysis workflows processing diverse financial inputs (model points, credit ratings, outputs from economic scenario generators).",
            "Conducted comprehensive ALM studies (AoC, duration, dilution, spread) to inform asset allocation decisions.",
            "Architected and deployed the migration of a complex ALM projection model from Excel into a scalable Python calculation engine.",
            "Manually rewrote advanced financial formulas to optimize the ORSA reporting pipeline via direct CSV ingestion, supporting Solvency II compliance.",
            "Developed a custom GUI for rapid visualization of ALM datasets stored as .pickle files.",
            "Built an advanced regex-based parser to recursively map cell dependencies across legacy Excel and VBA workbooks.",
          ],
        },
        {
          heading: "Thales - Data and Analytics Engineer ",
          date: "Jan 2024 -- July 2024",
          subtitle: "",
          location: "Paris, FRANCE",
          details: [
            "Developed a data decoding and analysis tool to process and interpret large-scale system information with Lua and C.",
            "Designed an interactive mapping system for data visualization and anomaly tracking with Python.",
          ],
        },
        {
          heading: "Kyoto University, Mathematics Laboratory - Quantitative Analyst / Quantitative Researcher",
          date: "June 2023 -- Aug 2023",
          subtitle: "",
          location: "Kyoto, JAPAN",
          details: [
            "Built mathematical and computational tools for stochastic modeling and numerical optimization.",
            "Applied quantitative finance methods (Monte Carlo simulations, stochastic processes, model calibration).",
            "Conducted advanced statistical analysis and automated complex simulations using C++, Python and MATLAB.",
            "Created an original system of mathematical equations for modeling and analysis.",
            "Delivered training sessions for multidisciplinary international experts.",
          ],
        },
        {
          heading: "Snap Inc. (Snapchat) -  Data Scientist - Industrial Project",
          date: "Sept 2022 -- May 2023",
          subtitle: "",
          location: "Remote",
          details: [
            "Designed and implemented advanced artificial intelligence and data science solutions to support strategic decision-making.",
            "Developed and optimized machine learning and deep learning models for predictive analytics and pattern detection.",
            "Built end-to-end data pipelines, including preprocessing, feature engineering, and model evaluation.",
            "Applied statistical and computational methods to extract insights from large and complex datasets.",
            "Utilized a wide range of AI and data science tools and frameworks within an international MLOps environment.",
          ],
        },
        {
          heading: "Nomadvantage -  Data and Analytics Engineer",
          date: "June 2022 -- Aug 2022",
          subtitle: "",
          location: "Paris, FRANCE",
          details: [
            "Managed and integrated complex client and product datasets, ensuring data consistency and reliability.",
            "Developed automated data pipelines for ETL processes, data cleaning, and transformation.",
            "Applied mathematical and statistical methods to analyze datasets, identify trends, and generate actionable insights.",
          ],
        },
      ]
    },
    {
        title: "Skills and Awards",
        type: "tabular",
        tables: [
            {
                col1Title: "Leadership and Awards",
                col2Title: "Languages",
                col1Content: [
                    "Engaged in student associations Enactus, Polytech Without Borders, and SOphIA.",
                    "Participated in a hackathon on Artificial Intelligence and Musical Improvisation and won the first prize.",
                    "Selected among 1,400 high school students to participate in the ERASMUS+ program in Poland.",
                ],
                col2Content: [
                    "French: Native",
                    "English: Fluent",
                    "Arabic: Conversational",
                    "Spanish: Conversational",
                    "Japanese: Notions",
                ],
                colSpan: true
            },
            {
                col1Title: "Technical Skills",
                col2Title: "Soft Skills",
                col1Content: "Python, R, C, C++, C#, MATLAB, Java, VBA, SQL, SAS, ERP, PostgreSQL, Power BI, Artificial Intelligence tools, LaTeX, Microsoft Office, Excel, PowerPoint, Git, Talend, Jira, Linux, Windows, macOS",
                col2Content: "Analytical Thinking, Results-driven, Ability to Work Under Pressure, Team-player, Ability to Simplify Complex Ideas, Commitment to Excellence",
                colSpan: false
            }
        ]
    }
  ]
};