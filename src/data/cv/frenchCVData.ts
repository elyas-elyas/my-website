// src/data/cv/frenchCVData.ts

export const frenchCVData = {
  header: {
    title: "Curriculum Vitae (Français)",
    downloadLink: "/CV_Elyas_Assili.pdf", // Chemin vers le fichier en français
    description: "Ingénieur en Mathématiques Appliquées et Informatique, je poursuis actuellement un second diplôme en Finance Quantitative et Gestion des Risques. J'ai acquis des expériences professionnelles variées en France et à l'international, en travaillant au sein de leaders mondiaux, de laboratoires de recherche et de PME. Je vise un poste quantitatif ou en finance de marché en CDI pour 2026.",
    contact: "+33 7 67 58 94 70 | elyasassili@gmail.com | https://github.com/elyas-elyas | Français"
  },
  sections: [
    {
      title: "FORMATION",
      type: "subheading_list",
      items: [
        {
          heading: "Panthéon Sorbonne",
          date: "Sept 2025",
          subtitle: "Master en Ingénierie des Risques : Finance et Assurance (M2)",
          location: "Paris, FRANCE",
          details: ["Spécialisation en Mathématiques Financières"],
        },
        {
          heading: "Polytech Sorbonne - École Polytechnique Universitaire de Sorbonne Université",
          date: "Sept 2021 -- Nov 2024",
          subtitle: "Diplôme d'ingénieur en 5 ans",
          location: "Paris, FRANCE",
          details: ["Spécialisation en Mathématiques Appliquées et Informatique"],
        },
        {
          heading: "École de Technologie Supérieure",
          date: "Sept 2023 -- Déc 2023",
          subtitle: "Programme d'études à l'étranger",
          location: "Montréal, CANADA",
          details: ["Spécialisation en Intelligence Artificielle"],
        },
      ]
    },
    {
      title: "EXPÉRIENCE",
      type: "subheading_list",
      items: [
        {
          heading: "HSBC - Analyste en Gestion Actif/Passif ALM",
          date: "Sept 2025",
          subtitle: "",
          location: "Paris, FRANCE",
          details: [
            "Conception de workflows d'analyse de portefeuille traitant des données financières variées (points de modèle, notations de crédit, sorties de générateurs de scénarios économiques).",
            "Réalisation d'études ALM complètes (AoC, duration, dilution, spread) pour orienter les décisions d'allocation d'actifs.",
            "Architecture et déploiement de la migration d'un modèle de projection ALM complexe d'Excel vers un moteur de calcul Python scalable.",
            "Réimplémentation manuel de formules financières avancées pour optimiser le pipeline de reporting ORSA via l'ingestion directe de fichiers CSV, garantissant la conformité Solvabilité II.",
            "Développement d'une interface graphique (GUI) personnalisée pour la visualisation rapide de jeux de données ALM stockés au format .pickle.",
            "Conception d'un parseur avancé basé sur des expressions régulières (Regex) pour cartographier récursivement les dépendances de cellules au sein de classeurs Excel et VBA hérités (legacy).",
          ],
        },
        {
          heading: "Thales - Ingénieur en Données et Analyste",
          date: "Jan 2024 -- Juillet 2024",
          subtitle: "",
          location: "Paris, FRANCE",
          details: [
            "Développement d'un outil de décodage et d'analyse de données pour le traitement d'informations en Lua et C.",
            "Conception d'un système de cartographie interactive pour la visualisation de données et le suivi d'anomalies en Python.",
          ],
        },
        {
          heading: "Université de Kyoto, Laboratoire de Mathématiques - Analyste Quantitatif / Quantitative Researcher",
          date: "Juin 2023 -- Août 2023",
          subtitle: "",
          location: "Kyoto, JAPON",
          details: [
            "Développement d'outils mathématiques et informatiques pour la modélisation stochastique et l'optimisation numérique.",
            "Application de méthodes de finance quantitative (simulations Monte Carlo, processus stochastiques, calibration de modèles).",
            "Analyses statistiques avancées et automatisation de simulations complexes en C++, Python et MATLAB.",
            "Création d'un système original d'équations mathématiques pour la modélisation et l'analyse.",
            "Animation de sessions de formation destinées à des experts internationaux multidisciplinaires.",
          ],
        },
        {
          heading: "Snap Inc. (Snapchat) -  Data Scientist - Projet Industriel",
          date: "Sept 2022 -- Mai 2023",
          subtitle: "",
          location: "Remote",
          details: [
            "Conception et mise en œuvre de solutions avancées d'intelligence artificielle et de science des données.",
            "Développement et optimisation de modèles de machine learning et deep learning pour l'analyse prédictive et la détection de motifs.",
            "Construction de pipelines de données de bout en bout, incluant prétraitement, feature engineering et évaluation de modèles.",
            "Application de méthodes statistiques et computationnelles pour extraire des insights de jeux de données volumineux et complexes.",
            "Utilisation d'un large éventail d'outils et frameworks d'IA et de science des données dans un environnement MLOps international.",
          ],
        },
        {
          heading: "Nomadvantage - Ingénieur en Données et Analyste",
          date: "Juin 2022 -- Août 2022",
          subtitle: "",
          location: "Paris, FRANCE",
          details: [
            "Gestion et intégration de jeux de données clients et produits complexes, assurant cohérence et fiabilité des données.",
            "Développement de pipelines de données automatisés pour les processus ETL, nettoyage et transformation de données.",
            "Application de méthodes mathématiques et statistiques pour analyser les données, identifier des tendances et générer des insights.",
          ],
        },
      ]
    },
    {
        title: "Compétences / Distinctions",
        type: "tabular",
        tables: [
            {
                col1Title: "Leadership et Distinctions",
                col2Title: "Langues",
                col1Content: [
                    "Engagement dans les associations étudiantes Enactus, Polytech Sans Frontières et SOphIA.",
                    "Participation à un hackathon sur l'Intelligence Artificielle et l'Improvisation Musicale et remporté le premier prix.",
                    "Sélectionné parmi 1 400 lycéens pour participer au programme ERASMUS+ en Pologne.",
                ],
                col2Content: [
                    "Français : Langue maternelle",
                    "Anglais : Courant",
                    "Arabe : Compétences avancées",
                    "Espagnol : Compétences avancées",
                    "Japonais : Notions",
                ],
                colSpan: true
            },
            {
                col1Title: "Compétences Techniques",
                col2Title: "Soft Skills",
                col1Content: "Python, R, C, C++, C#, MATLAB, Java, VBA, SQL, SAS, ERP, PostgreSQL, Power BI, Outils d'Intelligence Aérielle, LaTeX, Microsoft Office, Excel, PowerPoint, Git, Talend, Jira, Linux, Windows, macOS",
                col2Content: "Pensée Analytique, Orienté Résultats, Capacité à Travailler Sous Pression, Esprit d'Équipe, Capacité à Simplifier des Idées Complexes, Engagement pour l'Excellence",
                colSpan: false
            }
        ]
    }
  ]
};