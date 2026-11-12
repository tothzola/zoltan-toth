import type { Dictionary } from './en';

export const hu: Dictionary = {
  langName: 'Magyar',
  name: 'Tóth Zoltán',
  meta: {
    title: 'Tóth Zoltán — Automatizálási fejlesztő',
    description:
      'Tóth Zoltán személyes oldala: automatizálás UiPath, Microsoft, SAP és kód segítségével – és a mögötte álló projektek.',
  },
  nav: {
    sections: 'Szakaszok',
    about: 'Rólam',
    roadmap: 'Utam',
    projects: 'Projektek',
    technologies: 'Technológiák',
    skip: 'Ugrás a tartalomhoz',
    language: 'Nyelv',
    theme: 'Váltás világos és sötét téma között',
  },
  suggest: 'Ez az oldal magyarul is elérhető.',
  dismiss: 'Bezárás',
  hero: {
    eyebrow: 'Üdv, a nevem',
    role: 'Automatizálási fejlesztő',
    nextRole: 'Automatizálási architekt',
    nowLabel: 'Most',
    nextLabel: 'Következő',
    tagline:
      'Szoftverrobotokat tanítok meg az unalmas munkára – újabban pedig MI-ügynököket arra, hogy mellettük dolgozzanak.',
    ctaProjects: 'Nézd meg, mit építettem',
    ctaContact: 'Írj nekem',
  },
  about: {
    title: 'Rólam',
    lead: 'Szeretem, ha az egyhangú részt a számítógép végzi, hogy az embereknek az érdekes maradjon.',
    paragraphs: [
      'A technológia amióta az eszemet tudom, lenyűgöz. Mindig tudni akartam, hogyan működnek a dolgok – aztán elérni, hogy egy kicsit jobban működjenek.',
      'Az első kódsoraimat 2016 körül írtam, VBA-ban és Javában. Elég volt egyetlen táblázat, amely hirtelen egy másodperc alatt végzett el egyórányi munkát, és végleg rabul ejtett az automatizálás. Azóta szoftverrobotokat és üzleti alkalmazásokat építek UiPath, Power Apps, SharePoint és TypeScript segítségével.',
      'Otthon férj vagyok és kétgyermekes apa – mint kiderült, ez a legnagyobb kihívást jelentő projekt mind közül:',
    ],
    photoAlt: 'Tóth Zoltán portréja',
    photoPlaceholder: 'A fotó hamarosan érkezik',
    family: {
      title: 'Projekt: Család',
      rows: [
        { label: 'Csapat', value: 'Egy feleség, két gyerek, egy apa' },
        { label: 'Terméktulajdonos', value: 'A feleségem. A backlog priorizálva van, köszönöm.' },
        { label: 'Érintettek', value: 'Két gyerek határozott véleménnyel és vétójoggal' },
        { label: 'Követelmények', value: 'Naponta változnak, általában reggelinél' },
        { label: 'Határidők', value: 'Lefekvés. Szigorú határidő, amelyet minden este újratárgyalunk' },
        { label: 'Költségvetés', value: 'Minden évben túllépjük. Soha nem bántuk meg' },
      ],
      statusLabel: 'Állapot',
      status: 'Zöld. A legjobb projekt, amelyben valaha részt vettem',
    },
  },
  roadmap: {
    title: 'Utam',
    intro: 'Hogyan lett egy kíváncsi gyerekből olyan valaki, aki robotépítésből él.',
    early: 'A kezdetek',
    next: 'Következő',
    items: {
      spark: {
        title: 'Először a kíváncsiság',
        text: 'Jóval azelőtt, hogy programozni tudtam volna, már érdekelt, hogyan működik a technológia. Ez a kíváncsiság azóta sem múlt el; csak jobb eszközöket talált.',
      },
      firstCode: {
        title: 'Az első kódsorok',
        text: 'VBA, hogy megszelídítsem a táblázatokat, Java, hogy megtanuljam, hogyan épülnek az igazi programok. Amikor egy makró egy másodperc alatt végzett egyórányi munkával, tudtam, mivel akarok foglalkozni.',
      },
      intoAutomation: {
        title: 'A makróktól az automatizálásig',
        text: 'A szkriptekből megoldások lettek: szoftverrobotok UiPath-szal, üzleti alkalmazások Power Appsszel, a SharePoint pedig az a hely, ahol az adatok élnek.',
      },
      addIns: {
        title: 'Eszközök másoknak',
        text: 'Excel-bővítmények automatizáláshoz és raportoláshoz: az első eszközeim, amelyeket nem csak én, hanem a kollégáim is nap mint nap használtak.',
      },
      finance: {
        title: 'Robotok a pénzügynek',
        text: 'Az automatizálások első hulláma a könyvelés és a treasury területén: lízingelszámolás, egyeztetések, számlaellenőrzés, árfolyamok.',
      },
      beyondFinance: {
        title: 'A pénzügyön túl',
        text: 'Exportdokumentumok, megfelelőségi raportok és minőségellenőrzések, valamint közös könyvtárak, hogy minden új robot tesztelt elemekre épüljön.',
      },
      foundations: {
        title: 'Az alapok megépítése',
        text: 'Platformfrissítések az összes futó roboton, és saját keretrendszer-sablonok beépített tesztekkel.',
      },
      agents: {
        title: 'A robotok találkoznak az MI-ügynökökkel',
        text: 'Ágensalapú automatizálás, ahol egy MI-ügynök dönt, a robotok pedig végrehajtanak. Mellette: kódolt munkafolyamatok C#-ban, TypeScript, és az MI-vel támogatott fejlesztés mint mindennapi eszköz.',
      },
      architect: {
        title: 'Automatizálási architekt',
        text: 'Amerre tartok: az egyes robotok építésétől annak megtervezéséig, hogyan illeszkednek egymáshoz egész automatizálási környezetek.',
      },
    },
  },
  projects: {
    title: 'Projektek',
    intro: 'Mit építettem, és miért számított. A nevek és a részletek azoknál maradnak, akiknek építettem.',
    purposeLabel: 'Mit csinál',
    valueLabel: 'Miért számított',
    items: {
      openItems: {
        title: 'Robotok és egy MI-ügynök rendet tesz a könyvelésben',
        purpose:
          'Áru érkezik számla nélkül, számla érkezik áru nélkül, a nyitott tételek pedig halmozódnak. Ez a megoldás összegyűjti őket, üzleti szabályok alapján besorol minden esetet, megkeresi a megfelelő embert, és kiegyenlíti a tételt – miközben egy MI-ügynök hangol össze egy csapat robotot.',
        value:
          'A hó végi hátralékból, amelyet senki sem szeret, egyenletes folyamat lesz, az emberekhez pedig csak a mérlegelést igénylő esetek jutnak el.',
      },
      leaseAccounting: {
        title: 'Lízingelszámolás, automatizálva',
        purpose:
          'Átveszi az e-mailben érkező új lízingszerződéseket, figyelmeztet a lejáró szerződésekre, és szinkronban tartja a könyvelési és a konszolidációs rendszert, közben ellenőrizve az adatokat.',
        value:
          'Egy szabályozott folyamat (IFRS 16) minden alkalommal ugyanúgy fut le, és olyan nyomot hagy, amelyet egy könyvvizsgáló követni tud.',
      },
      netting: {
        title: 'Csoporton belüli nettósítás és egyeztetés',
        purpose:
          'Lefuttatja a csoport vállalatai közötti heti nettósítási ciklust: kigyűjti a követeléseket és a kötelezettségeket, egyezteti az egyenlegeket, és átadja a fájlokat a treasury platformnak.',
        value: 'Egy kötött határidős heti feladat többé nem azon múlik, ki van éppen bent az irodában.',
      },
      passwordReset: {
        title: 'Önkiszolgáló jelszó-visszaállítás',
        purpose:
          'Akit kizárt a vállalatirányítási rendszer, maga kéri a visszaállítást; egy robot ellenőrzi a kérést, feloldja a fiókot, és az illető dolgozhat tovább.',
        value: 'Nem kell az ügyfélszolgálatra várni, az ügyfélszolgálatnak pedig marad ideje a valódi problémákra.',
      },
      masterData: {
        title: 'Vevőtörzsadatok egy egyszerű igénylistából',
        purpose:
          'Egy SharePoint-listába felvett igényből teljes, egységes vevőtörzsrekord lesz a vállalatirányítási rendszerben – robot hozza létre vagy frissíti.',
        value: 'Az új vevőket hamarabb ki lehet szolgálni, és minden rekord ugyanazokat a szabályokat követi.',
      },
      invoices: {
        title: 'Számlaellenőrzés és -párosítás',
        purpose:
          'Ellenőrzi, hogy a számlákon szereplő rendelési hivatkozások, anyagok, mennyiségek és árak egyeznek-e a mögöttük álló rendelésekkel, és párosítja a csoporton belüli számlákat a vevői számlákkal.',
        value: 'Az eltérések még könyvelés előtt kiderülnek, nem hetekkel később, a zárásnál.',
      },
      exchangeRates: {
        title: 'Jogszabály szerinti árfolyamok',
        purpose:
          'Hivatalos forrásokból összegyűjti a több országban jogszabály által előírt árfolyamokat, rögzíti őket a vállalatirányítási rendszerben, és minden értékhez bizonyítékot őriz meg.',
        value: 'A rendelésfeldolgozás, a zárás és az adóbevallás egyaránt azon múlik, hogy ezek az árfolyamok helyesek legyenek, és időben megérkezzenek.',
      },
      exportPaperwork: {
        title: 'Exportdokumentumok',
        purpose:
          'Előkészíti a hajófoglalási űrlapokat és a vámáru-nyilatkozatokat a kimenő szállítmányokhoz, és a fuvarozók nyomkövető portáljai alapján havonta összeállítja a kiviteli igazolásokat.',
        value: 'A szállítmányok gyorsabban indulnak, kevesebb hibával és jóval kevesebb rendszerek közötti másolgatással.',
      },
      reports: {
        title: 'Raportok, amelyek maguktól mennek ki',
        purpose:
          'Korosított vevőkövetelés-raportok, ütemezett raportküldés és napi minőségellenőrzések: kigyűjtve, szűrve és eljuttatva azokhoz, akiknek szükségük van rájuk.',
        value: 'A megfelelő számok időben megérkeznek, és senki sem tölti a délelőttöt táblázatok exportálásával.',
      },
      toolbox: {
        title: 'Az automatizálási szerszámosládám',
        purpose:
          'Saját keretrendszer-sablonok sorkezelő és lineáris folyamatokhoz, újrahasznosítható könyvtár a vállalatirányítási rendszerbe való belépéshez, a SharePointhoz és az e-mailhez, beépített tesztesetek, valamint tervezési dokumentumsablonok készlete.',
        value: 'Minden új robot bevált építőelemekből indul, nem üres lapról.',
      },
      smallTools: {
        title: 'Apró eszközök, amelyek sok időt spórolnak',
        purpose:
          'Generátor, amely közvetlenül a munkafolyamatok kódjából írja meg a tervezési dokumentációt, elemző, amely a sikertelen futások képernyőképeiből raportot készít, Excel-bővítmények és egy egykattintásos frissítő a fejlesztői eszközökhöz.',
        value: 'A dokumentáció lépést tart a kóddal, és kevesebb délelőtt megy el beállítással.',
      },
    },
  },
  technologies: {
    title: 'Technológiák',
    intro: 'Válassz egy ökoszisztémát, és nézd meg, mi van benne, és mit építettem vele.',
    techHeading: 'Mi van a dobozban',
    projectsHeading: 'Ezzel készült',
    filterHint: 'Koppints egy technológiára a projektek szűkítéséhez.',
    empty: 'Ehhez még nincs nyilvános projekttörténet. Kérdezz róla bátran.',
    ecosystems: {
      uipath: {
        name: 'UiPath',
        blurb: 'Itt laknak a robotok: az első munkafolyamattól az élesben futó teljes csapatig.',
      },
      microsoft: {
        name: 'Microsoft',
        blurb: 'Az iroda, ahol amúgy is mindenki dolgozik – az automatizálásnak tehát itt kell találkoznia velük.',
      },
      sap: {
        name: 'SAP',
        blurb: 'A központi nyilvántartó rendszer. A robotok meglepően türelmesek vele.',
      },
      code: {
        name: 'Kód',
        blurb: 'Amikor a fogd és vidd már kevés, megírom.',
      },
      ai: {
        name: 'MI',
        blurb: 'A csapat legújabb kollégája: dönt, fogalmaz és segít.',
      },
    },
    tech: {
      libraries: 'Újrahasznosítható könyvtárak',
      testing: 'Tesztautomatizálás',
      codedWorkflows: 'Kódolt munkafolyamatok',
      agentic: 'Ágensalapú automatizálás',
      webAutomation: 'Webes automatizálás',
      sapGui: 'SAP GUI automatizálás',
      sapReporting: 'SAP-raportolás',
      sapMasterData: 'SAP-törzsadatok',
      aiDev: 'MI-vel támogatott fejlesztés',
    },
  },
  flow: {
    start: 'Start',
    end: 'Vége',
  },
  footer: {
    title: 'Beszélgessünk',
    text: 'Van egy folyamat, amelyet senki sem szeretne kézzel csinálni? Szívesen hallanék róla.',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    email: 'E-mail',
    newTab: 'új lapon nyílik meg',
    placeholder: 'A link hamarosan érkezik',
    built: 'Astróval készült. Sütik és követés nélkül.',
    updated: 'Utoljára frissítve',
  },
};
