// src/data/cv/frenchCVData.ts

export const frenchCVData = {
  header: {
    title: "Curriculum Vitae (Français)",
    downloadLink: "/CV_Elyas_Assili.pdf", // Chemin vers le fichier en français
    description: "Ingénieur en Mathématiques Appliquées et Informatique, je suis actuellement en préparation d'un second diplôme en Finance, Mathématiques Quantitatives, et Risques. J'ai développé une expérience diversifiée en France et à l'international, auprès de grandes entreprises, de laboratoires de recherche et de PME. Futur diplômé en 2026, je suis à la recherche d'une opportunité professionnelle.",
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
          details: ["Spécialisation en Ingénierie des Mathématiques Financières"],
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
          heading: "HSBC - Apprentissage",
          date: "Sept 2025",
          subtitle: "",
          location: "Paris, FRANCE",
          details: [
            "Amélioration des outils d'analyse prospective (allocation d'actifs, planification stratégique, ORSA) en Python et VBA.",
            "Contribution au développement et perfectionnement des générateurs de scénarios économiques.",
            "Analyse statistique et économique des données d'entrée/sortie du modèle ALM.",
            "Participation aux études d'impact réglementaires (Solvabilité II et normes comptables).",
          ],
        },
        {
          heading: "Thales - Stage",
          date: "Jan 2024 -- Juillet 2024",
          subtitle: "",
          location: "Paris, FRANCE",
          details: [
            "Développement d'un outil de décodage et d'analyse de données pour le traitement d'informations en Lua et C.",
            "Conception d'un système de cartographie interactive pour la visualisation de données et le suivi d'anomalies en Python.",
          ],
        },
        {
          heading: "Université de Kyoto, Laboratoire de Mathématiques - Stage",
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
          heading: "Snap Inc. (Snapchat) - Projet Industriel",
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
          heading: "Nomadvantage - Stage",
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