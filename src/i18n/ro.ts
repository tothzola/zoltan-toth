import type { Dictionary } from './en';

export const ro: Dictionary = {
  langName: 'Română',
  name: 'Zoltán Tóth',
  meta: {
    title: 'Zoltán Tóth — Inginer de automatizare',
    description:
      'Pagina personală a lui Zoltán Tóth: automatizare cu UiPath, Microsoft, SAP și cod, și proiectele din spatele ei.',
  },
  nav: {
    sections: 'Secțiuni',
    about: 'Despre mine',
    roadmap: 'Parcurs',
    projects: 'Proiecte',
    technologies: 'Tehnologii',
    skip: 'Sari la conținut',
    language: 'Limbă',
    theme: 'Comută între tema deschisă și cea întunecată',
  },
  suggest: 'Această pagină este disponibilă și în română.',
  dismiss: 'Închide',
  hero: {
    eyebrow: 'Salut, sunt',
    role: 'Inginer de automatizare',
    nextRole: 'Arhitect de automatizare',
    nowLabel: 'Acum',
    nextLabel: 'Urmează',
    tagline:
      'Îi învăț pe roboții software să facă munca plictisitoare – iar mai nou, pe agenții AI să lucreze alături de ei.',
    ctaProjects: 'Vezi ce am construit',
    ctaContact: 'Scrie-mi',
  },
  about: {
    title: 'Despre mine',
    lead: 'Îmi place când calculatoarele fac partea monotonă, ca oamenii să se poată ocupa de cea interesantă.',
    paragraphs: [
      'Tehnologia mă fascinează de când mă știu. Am vrut mereu să aflu cum funcționează lucrurile – și apoi să le fac să funcționeze puțin mai bine.',
      'Primele linii de cod le-am scris prin 2016, în VBA și Java. A fost de ajuns un singur tabel care, dintr-odată, făcea într-o secundă munca de o oră: automatizarea m-a cucerit definitiv. De atunci construiesc roboți software și aplicații de business cu UiPath, Power Apps, SharePoint și TypeScript.',
      'Acasă sunt soț și tată a doi copii – ceea ce se dovedește a fi cel mai solicitant proiect dintre toate:',
    ],
    photoAlt: 'Portretul lui Zoltán Tóth',
    photoPlaceholder: 'Fotografia urmează',
    family: {
      title: 'Proiect: Familia',
      rows: [
        { label: 'Echipă', value: 'O soție, doi copii, un tată' },
        { label: 'Product owner', value: 'Soția mea. Backlogul este prioritizat, mulțumesc.' },
        { label: 'Părți interesate', value: 'Doi copii cu păreri ferme și drept de veto' },
        { label: 'Cerințe', value: 'Se schimbă zilnic, de obicei la micul dejun' },
        { label: 'Termene', value: 'Ora de culcare. Termen ferm, renegociat în fiecare seară' },
        { label: 'Buget', value: 'Depășit în fiecare an. Niciodată regretat' },
      ],
      statusLabel: 'Stare',
      status: 'Verde. Cel mai bun proiect la care am lucrat vreodată',
    },
  },
  roadmap: {
    title: 'Parcurs',
    intro: 'Cum a ajuns un copil curios să construiască roboți din meserie.',
    early: 'Începuturile',
    next: 'Urmează',
    items: {
      spark: {
        title: 'Mai întâi, curiozitatea',
        text: 'Cu mult înainte să pot programa, voiam să știu cum funcționează tehnologia. Curiozitatea aceea nu a dispărut niciodată; doar și-a găsit unelte mai bune.',
      },
      firstCode: {
        title: 'Primele linii de cod',
        text: 'VBA ca să îmblânzesc tabelele, Java ca să învăț cum se construiesc programele adevărate. În clipa în care un macro a terminat într-o secundă munca de o oră, am știut ce vreau să fac.',
      },
      intoAutomation: {
        title: 'De la macrouri la automatizare',
        text: 'Scripturile au devenit soluții: roboți software cu UiPath, aplicații de business cu Power Apps și SharePoint ca loc în care trăiesc datele.',
      },
      addIns: {
        title: 'Unelte pentru ceilalți',
        text: 'Add-in-uri Excel pentru automatizare și raportare: primele mele unelte construite ca să fie folosite zi de zi de colegi, nu doar de mine.',
      },
      finance: {
        title: 'Roboți pentru financiar',
        text: 'Un prim val de automatizări în zona de contabilitate și trezorerie: contabilitatea contractelor de leasing, reconcilieri, verificarea facturilor, cursuri valutare.',
      },
      beyondFinance: {
        title: 'Dincolo de financiar',
        text: 'Documente de export, rapoarte de conformitate și verificări de calitate, plus biblioteci comune, pentru ca fiecare robot nou să se sprijine pe componente testate.',
      },
      foundations: {
        title: 'Construirea fundației',
        text: 'Actualizări de platformă pentru toți roboții în funcțiune și propriile mele șabloane de framework, cu teste incluse.',
      },
      agents: {
        title: 'Roboții se întâlnesc cu agenții AI',
        text: 'Automatizare agentică, în care un agent AI decide, iar roboții execută. În paralel: coded workflows în C#, TypeScript și dezvoltarea asistată de AI ca unealtă de zi cu zi.',
      },
      architect: {
        title: 'Arhitect de automatizare',
        text: 'Încotro mă îndrept: de la construirea de roboți individuali la proiectarea modului în care se îmbină peisaje întregi de automatizare.',
      },
    },
  },
  projects: {
    title: 'Proiecte',
    intro: 'Ce am construit și de ce a contat. Numele și detaliile rămân la cei pentru care am construit.',
    purposeLabel: 'Ce face',
    valueLabel: 'De ce a contat',
    items: {
      openItems: {
        title: 'Roboți și un agent AI care fac ordine în contabilitate',
        purpose:
          'Marfa sosește fără factură, facturile sosesc fără marfă, iar pozițiile deschise se adună. Soluția le colectează, clasifică fiecare caz după reguli de business, contactează persoana potrivită și închide poziția, cu un agent AI care coordonează o echipă de roboți.',
        value:
          'Un restanțier de sfârșit de lună pe care nu-l iubește nimeni devine un flux constant, iar la oameni ajung doar cazurile care cer judecată.',
      },
      leaseAccounting: {
        title: 'Contabilitatea leasingului, automatizată',
        purpose:
          'Preia contractele noi de leasing pe măsură ce sosesc pe e-mail, avertizează înainte de expirarea contractelor și ține sincronizate sistemul contabil și cel de consolidare, validând datele pe parcurs.',
        value:
          'Un proces reglementat (IFRS 16) rulează la fel de fiecare dată și lasă o urmă pe care un auditor o poate urmări.',
      },
      netting: {
        title: 'Compensare și reconciliere intragrup',
        purpose:
          'Rulează ciclul săptămânal de compensare între companiile grupului: extrage creanțele și datoriile, reconciliază soldurile și livrează fișierele către platforma de trezorerie.',
        value: 'O sarcină săptămânală cu termene fixe nu mai depinde de cine este la birou.',
      },
      passwordReset: {
        title: 'Resetarea parolei în regim self-service',
        purpose:
          'Cei blocați în afara sistemului ERP cer singuri resetarea; un robot verifică cererea, deblochează contul și îi readuce la lucru.',
        value: 'Fără așteptare la helpdesk, iar helpdeskul își recapătă timpul pentru problemele reale.',
      },
      masterData: {
        title: 'Fișe de client dintr-o simplă listă de cereri',
        purpose:
          'O cerere introdusă într-o listă SharePoint devine o fișă de client completă și consecventă în sistemul ERP, creată sau actualizată de un robot.',
        value: 'Clienții noi pot fi serviți mai repede, iar fiecare fișă respectă aceleași reguli.',
      },
      invoices: {
        title: 'Verificarea și potrivirea facturilor',
        purpose:
          'Verifică dacă referințele de comandă, materialele, cantitățile și prețurile de pe facturi corespund comenzilor din spatele lor și potrivește facturile intragrup cu facturile către clienți.',
        value: 'Nepotrivirile sunt prinse înainte de înregistrare, nu după câteva săptămâni, la închidere.',
      },
      exchangeRates: {
        title: 'Cursuri valutare legale',
        purpose:
          'Colectează din sursele oficiale cursurile valutare cerute prin lege în mai multe țări, le introduce în sistemul ERP și păstrează o dovadă pentru fiecare valoare.',
        value: 'Procesarea comenzilor, închiderea și raportarea fiscală depind toate de cursuri corecte și disponibile la timp.',
      },
      exportPaperwork: {
        title: 'Documente de export',
        purpose:
          'Pregătește formularele de rezervare pe navă și declarațiile vamale pentru expedierile la export și întocmește lunar dovezile de export folosind portalurile de urmărire ale transportatorilor.',
        value: 'Expedierile pleacă mai repede, cu mai puține erori și cu mult mai puțin copiat între sisteme.',
      },
      reports: {
        title: 'Rapoarte care se trimit singure',
        purpose:
          'Rapoarte de vechime a creanțelor, distribuire programată de rapoarte și verificări zilnice de calitate: extrase, filtrate și livrate celor care au nevoie de ele.',
        value: 'Cifrele potrivite ajung la timp și nimeni nu-și petrece dimineața exportând tabele.',
      },
      toolbox: {
        title: 'Trusa mea de unelte pentru automatizare',
        purpose:
          'Propriile mele șabloane de framework pentru procese bazate pe cozi și procese liniare, o bibliotecă reutilizabilă pentru autentificarea în ERP, SharePoint și e-mail, cazuri de test incluse și un set de șabloane pentru documente de design.',
        value: 'Fiecare robot nou pornește de la componente verificate, nu de la o pagină goală.',
      },
      smallTools: {
        title: 'Unelte mici care economisesc mult timp',
        purpose:
          'Un generator care scrie documentația de design direct din codul workflow-urilor, un analizor care transformă capturile de ecran ale rulărilor eșuate într-un raport, add-in-uri Excel și un program de actualizare dintr-un clic pentru uneltele de dezvoltare.',
        value: 'Documentația ține pasul cu codul și se pierd mai puține dimineți cu instalări.',
      },
    },
  },
  technologies: {
    title: 'Tehnologii',
    intro: 'Alege un ecosistem ca să vezi ce conține și ce am construit cu el.',
    techHeading: 'Ce e în cutie',
    projectsHeading: 'Construit cu el',
    filterHint: 'Atinge o tehnologie pentru a restrânge proiectele.',
    empty: 'Încă nu există o poveste publică de proiect pentru aceasta. Întreabă-mă.',
    ecosystems: {
      uipath: {
        name: 'UiPath',
        blurb: 'Aici locuiesc roboții: de la primul workflow până la o echipă întreagă în producție.',
      },
      microsoft: {
        name: 'Microsoft',
        blurb: 'Biroul în care lucrează deja toată lumea, deci acolo trebuie să-i întâlnească automatizarea.',
      },
      sap: {
        name: 'SAP',
        blurb: 'Sistemul de referință. Roboții au o răbdare remarcabilă cu el.',
      },
      code: {
        name: 'Cod',
        blurb: 'Când drag-and-drop nu mai ajunge, îl scriu.',
      },
      ai: {
        name: 'AI',
        blurb: 'Cel mai nou coleg din echipă: decide, redactează și ajută.',
      },
    },
    tech: {
      libraries: 'Biblioteci reutilizabile',
      testing: 'Automatizarea testelor',
      codedWorkflows: 'Coded workflows',
      agentic: 'Automatizare agentică',
      webAutomation: 'Automatizare web',
      sapGui: 'Automatizare SAP GUI',
      sapReporting: 'Raportare SAP',
      sapMasterData: 'Date de bază SAP',
      aiDev: 'Dezvoltare asistată de AI',
    },
  },
  flow: {
    start: 'Start',
    end: 'Sfârșit',
  },
  footer: {
    title: 'Hai să vorbim',
    text: 'Ai un proces pe care nimeni nu vrea să-l facă manual? Mi-ar plăcea să aflu despre el.',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    email: 'E-mail',
    newTab: 'se deschide într-o filă nouă',
    placeholder: 'Linkul urmează',
    built: 'Construit cu Astro. Fără cookie-uri, fără urmărire.',
    updated: 'Ultima actualizare',
  },
};
