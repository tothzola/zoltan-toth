import type { Dictionary } from './en';

export const fr: Dictionary = {
  langName: 'Français',
  name: 'Zoltán Tóth',
  meta: {
    title: 'Zoltán Tóth — Ingénieur en automatisation',
    description:
      "Page personnelle de Zoltán Tóth : l'automatisation avec UiPath, Microsoft, SAP et du code, et les projets qui vont avec.",
  },
  nav: {
    sections: 'Sections',
    about: 'À propos',
    roadmap: 'Parcours',
    projects: 'Projets',
    technologies: 'Technologies',
    skip: 'Aller au contenu',
    language: 'Langue',
    theme: 'Basculer entre le thème clair et le thème sombre',
  },
  suggest: 'Cette page existe aussi en français.',
  dismiss: 'Fermer',
  hero: {
    eyebrow: 'Bonjour, je suis',
    role: 'Ingénieur en automatisation',
    nextRole: 'Architecte en automatisation',
    nowLabel: "Aujourd'hui",
    nextLabel: 'Prochaine étape',
    tagline:
      "J'apprends aux robots logiciels à faire le travail ennuyeux – et, depuis peu, aux agents IA à travailler à leurs côtés.",
    ctaProjects: 'Voir mes réalisations',
    ctaContact: 'Me contacter',
  },
  about: {
    title: 'À propos de moi',
    lead: "J'aime quand les ordinateurs se chargent des tâches monotones, pour que les gens puissent s'occuper des plus intéressantes.",
    paragraphs: [
      "La technologie me fascine depuis toujours. J'ai toujours voulu savoir comment les choses fonctionnent – puis les faire fonctionner un peu mieux.",
      "J'ai écrit mes premières lignes de code vers 2016, en VBA et en Java. Il a suffi d'une feuille de calcul qui abattait soudain une heure de travail en une seconde : j'étais conquis par l'automatisation. Depuis, je construis des robots logiciels et des applications métier avec UiPath, Power Apps, SharePoint et TypeScript.",
      "À la maison, je suis mari et père de deux enfants – ce qui s'avère être le projet le plus exigeant de tous :",
    ],
    photoAlt: 'Portrait de Zoltán Tóth',
    photoPlaceholder: 'Photo à venir',
    family: {
      title: 'Projet : Famille',
      rows: [
        { label: 'Équipe', value: 'Une épouse, deux enfants, un papa' },
        { label: 'Product owner', value: 'Ma femme. Le backlog est priorisé, merci.' },
        { label: 'Parties prenantes', value: 'Deux enfants aux avis tranchés, avec droit de veto' },
        { label: 'Exigences', value: 'Changent tous les jours, en général au petit-déjeuner' },
        { label: 'Échéances', value: "L'heure du coucher. Échéance ferme, renégociée chaque soir" },
        { label: 'Budget', value: 'Dépassé chaque année. Jamais regretté' },
      ],
      statusLabel: 'Statut',
      status: "Vert. Le meilleur projet auquel j'aie jamais participé",
    },
  },
  roadmap: {
    title: 'Parcours',
    intro: "Comment un enfant curieux a fini par construire des robots pour gagner sa vie.",
    early: 'Les débuts',
    next: 'À venir',
    items: {
      spark: {
        title: "D'abord, la curiosité",
        text: "Bien avant de savoir programmer, je voulais comprendre comment fonctionne la technologie. Cette curiosité ne m'a jamais quitté ; elle a simplement trouvé de meilleurs outils.",
      },
      firstCode: {
        title: 'Premières lignes de code',
        text: "VBA pour dompter les feuilles de calcul, Java pour apprendre comment se construisent les vrais programmes. Le jour où une macro a terminé une heure de travail en une seconde, j'ai su ce que je voulais faire.",
      },
      intoAutomation: {
        title: "Des macros à l'automatisation",
        text: 'Les scripts sont devenus des solutions : des robots logiciels avec UiPath, des applications métier avec Power Apps, et SharePoint comme lieu où vivent les données.',
      },
      addIns: {
        title: 'Des outils pour les autres',
        text: "Des compléments Excel pour l'automatisation et le reporting : mes premiers outils conçus pour que des collègues s'en servent tous les jours, et pas seulement moi.",
      },
      finance: {
        title: 'Des robots pour la finance',
        text: "Une première vague d'automatisations autour de la comptabilité et de la trésorerie : contrats de location, rapprochements, contrôle des factures, taux de change.",
      },
      beyondFinance: {
        title: 'Au-delà de la finance',
        text: "Documents d'exportation, rapports de conformité et contrôles qualité, plus des bibliothèques partagées pour que chaque nouveau robot s'appuie sur des éléments testés.",
      },
      foundations: {
        title: 'Poser les fondations',
        text: 'Montées de version de la plateforme pour tous les robots en service, et mes propres modèles de framework avec tests intégrés.',
      },
      agents: {
        title: 'Les robots rencontrent les agents IA',
        text: "L'automatisation agentique, où un agent IA décide et les robots exécutent. En parallèle : des coded workflows en C#, TypeScript, et le développement assisté par IA comme outil du quotidien.",
      },
      architect: {
        title: 'Architecte en automatisation',
        text: "Là où je vais : passer de la construction de robots un par un à la conception de la façon dont des paysages d'automatisation entiers s'articulent.",
      },
    },
  },
  projects: {
    title: 'Projets',
    intro: "Ce que j'ai construit et pourquoi c'était important. Les noms et les détails restent chez ceux pour qui je l'ai construit.",
    purposeLabel: 'Ce que ça fait',
    valueLabel: "Pourquoi c'était important",
    items: {
      openItems: {
        title: 'Des robots et un agent IA pour apurer les comptes',
        purpose:
          "Des marchandises arrivent sans facture, des factures arrivent sans marchandises, et les postes non soldés s'accumulent. Cette solution les collecte, classe chaque cas selon des règles métier, contacte la bonne personne et solde le poste, avec un agent IA qui coordonne une équipe de robots.",
        value:
          "Un arriéré de fin de mois que personne n'aime devient un flux régulier, et les équipes ne voient plus que les cas qui demandent du jugement.",
      },
      leaseAccounting: {
        title: 'La comptabilité des contrats de location, automatisée',
        purpose:
          "Prend en charge les nouveaux contrats de location dès leur arrivée par e-mail, alerte avant l'échéance des contrats et maintient les systèmes de comptabilité et de consolidation synchronisés, en validant les données au passage.",
        value:
          "Un processus réglementé (IFRS 16) se déroule de la même façon à chaque fois et laisse une trace qu'un auditeur peut suivre.",
      },
      netting: {
        title: 'Compensation et rapprochement intragroupe',
        purpose:
          'Exécute le cycle hebdomadaire de compensation entre sociétés du groupe : extrait les créances et les dettes, rapproche les soldes et transmet les fichiers à la plateforme de trésorerie.',
        value: 'Une tâche hebdomadaire aux délais fixes ne dépend plus de qui est présent au bureau.',
      },
      passwordReset: {
        title: 'Réinitialisation de mot de passe en libre-service',
        purpose:
          "Les personnes bloquées hors de l'ERP demandent elles-mêmes la réinitialisation ; un robot vérifie la demande, déverrouille le compte et les remet au travail.",
        value: "Plus d'attente au support – et le support retrouve du temps pour les vrais problèmes.",
      },
      masterData: {
        title: "Des fiches clients à partir d'une simple liste de demandes",
        purpose:
          "Une demande saisie dans une liste SharePoint devient une fiche client complète et cohérente dans l'ERP, créée ou mise à jour par un robot.",
        value: 'Les nouveaux clients sont servis plus vite, et chaque fiche suit les mêmes règles.',
      },
      invoices: {
        title: 'Contrôle et rapprochement des factures',
        purpose:
          'Vérifie que les références de commande, les articles, les quantités et les prix des factures correspondent aux commandes, et rapproche les factures intragroupe des factures clients.',
        value: 'Les écarts sont repérés avant la comptabilisation, et non des semaines plus tard à la clôture.',
      },
      exchangeRates: {
        title: 'Taux de change réglementaires',
        purpose:
          "Collecte auprès des sources officielles les taux de change exigés par la loi dans plusieurs pays, les saisit dans l'ERP et conserve une preuve pour chaque valeur.",
        value: "Le traitement des commandes, la clôture et les déclarations fiscales dépendent tous de taux justes et disponibles à temps.",
      },
      exportPaperwork: {
        title: "Documents d'exportation",
        purpose:
          "Prépare les formulaires de réservation maritime et les déclarations en douane pour les expéditions sortantes, et constitue chaque mois les justificatifs d'exportation à partir des portails de suivi des transporteurs.",
        value: "Les expéditions partent plus vite, avec moins d'erreurs et beaucoup moins de recopie entre systèmes.",
      },
      reports: {
        title: "Des rapports qui s'envoient tout seuls",
        purpose:
          "Balances âgées des créances, diffusion planifiée de rapports et contrôles qualité quotidiens : extraits, filtrés et remis à ceux qui en ont besoin.",
        value: 'Les bons chiffres arrivent à temps, et personne ne passe sa matinée à exporter des tableaux.',
      },
      toolbox: {
        title: "Ma boîte à outils d'automatisation",
        purpose:
          "Mes propres modèles de framework pour les processus à file d'attente et les processus linéaires, une bibliothèque réutilisable pour la connexion à l'ERP, SharePoint et l'e-mail, des cas de test intégrés et un kit de modèles de documents de conception.",
        value: "Chaque nouveau robot démarre avec des briques éprouvées plutôt que d'une page blanche.",
      },
      smallTools: {
        title: 'De petits outils qui font gagner beaucoup de temps',
        purpose:
          "Un générateur qui rédige la documentation de conception directement à partir du code des workflows, un analyseur qui transforme les captures d'écran d'exécutions en échec en rapport, des compléments Excel et un outil de mise à jour en un clic pour l'environnement de développement.",
        value: "La documentation reste en phase avec le code, et moins de matinées se perdent en installation.",
      },
    },
  },
  technologies: {
    title: 'Technologies',
    intro: "Choisissez un écosystème pour voir ce qu'il contient et ce que j'ai construit avec.",
    techHeading: 'Dans la boîte',
    projectsHeading: 'Construit avec',
    filterHint: 'Touchez une technologie pour filtrer les projets.',
    empty: "Pas encore d'histoire de projet publique pour celle-ci. Posez-moi la question.",
    ecosystems: {
      uipath: {
        name: 'UiPath',
        blurb: "Là où vivent les robots : du premier workflow à toute une équipe en production.",
      },
      microsoft: {
        name: 'Microsoft',
        blurb: "Le bureau où tout le monde travaille déjà ; c'est donc là que l'automatisation doit aller les chercher.",
      },
      sap: {
        name: 'SAP',
        blurb: "Le système de référence. Les robots font preuve d'une patience remarquable avec lui.",
      },
      code: {
        name: 'Code',
        blurb: "Quand le glisser-déposer ne suffit plus, je l'écris.",
      },
      ai: {
        name: 'IA',
        blurb: "Le dernier arrivé dans l'équipe : il décide, rédige et assiste.",
      },
    },
    tech: {
      libraries: 'Bibliothèques réutilisables',
      testing: 'Automatisation des tests',
      codedWorkflows: 'Coded workflows',
      agentic: 'Automatisation agentique',
      webAutomation: 'Automatisation web',
      sapGui: 'Automatisation SAP GUI',
      sapReporting: 'Reporting SAP',
      sapMasterData: 'Données de base SAP',
      aiDev: 'Développement assisté par IA',
    },
  },
  flow: {
    start: 'Début',
    end: 'Fin',
  },
  footer: {
    title: 'Parlons-en',
    text: "Un processus que personne ne veut faire à la main ? J'aimerais en entendre parler.",
    linkedin: 'LinkedIn',
    github: 'GitHub',
    email: 'E-mail',
    newTab: 's’ouvre dans un nouvel onglet',
    placeholder: 'Lien à venir',
    built: 'Construit avec Astro. Sans cookies, sans traceurs.',
    updated: 'Dernière mise à jour',
  },
};
