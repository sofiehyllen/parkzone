// Dokument til statisk tekstindhold
import familieplads from "./assets/familieplads.jpg";
import betalingsparkering from "./assets/betalingsparkering.jpg";
import anpr from "./assets/anpr.jpg";
import digital from "./assets/digital.jpg";
import ladestander from "./assets/ladestander.jpg";
import opsyn from "./assets/opsyn.jpg";
import administration from "./assets/administration.jpg";
import radgivning from "./assets/radgivning.jpg";
import skiltning from "./assets/skiltning.jpg";
import udlejning from "./assets/udlejning.jpg";
import security from "./assets/security.jpg";

export const FAQ1 = [
  {
    title: "Hvorfor har jeg ikke fået svar på min henvendelse?",
    body: "Vi modtager dagligt mange henvendelser, og vi gør alt for at besvare dem så hurtigt som muligt. Dog kan der i perioder være længere svartider, men vi håber, at du kan bære over med os. Hvis din sag drejer sig om en kontrolafgift, vil en af vores sagsbehandlere gennemgå og vurdere din sag og vende tilbage til dig hurtigst muligt. \n \n Husk altid at oplyse din sags løbenummer, når du skriver til os om en kontrolafgift. Hvis du har oplyst dit løbenummer og e-mailadresse korrekt, bliver din sag automatisk sat i bero, indtil du har modtaget en henvendelse fra os. \n \n Du modtager en bekræftelse fra os om, at vi har modtaget din indsigelse. Vi kan sikre den bedst mulige og hurtigste sagsbehandling, hvis du sender en indsigelse skriftligt, og hvis du kun sender én indsigelse per sag. Vi skal nok vende tilbage til dig så hurtigt som muligt.",
  },
  {
    title:
      "Kan jeg stille spørgsmål angående en kontrolafgift, selvom jeg ikke har et løbenummer?",
    body: "Ja, du kan sagtens stille spørgsmål angående en kontrolafgift, selvom du ikke har et løbenummer. Husk at sætte kryds ved feltet 'ej tildelt'. Husk også at dobbelttjekke om dine kontaktoplysninger er indtastet korrekt, da vi bruger dem til at kontakte dig.",
  },
  {
    title:
      "Hvem fastsætter parkeringsreglerne på pladser, der er administreret af ParkZone?",
    body: "Hos ParkZone administrerer vi private parkeringsområder, hvor aftaleloven og reglerne om privat ejendomsret gælder. Parkeringsreglerne på parkeringsområderne kan variere fra parkeringsområde til parkeringsområde, men de fastsættes altid i fællesskab med dem, der har råderet over parkeringområdet. Det kan f.eks. være grundejerne. ",
  },
  {
    title:
      "Kan jeg få rabat på kontrolafgiften som studerende eller pensionist?",
    body: "Vi tilbyder desværre ikke rabat til studerende eller pensionister. Vi vil gerne sikre en ensformig sagsbehandling, hvor der ikke forskelsbehandles. Beløbet på kontrolafgiften er derfor ens for alle.",
  },
  {
    title: "Kan jeg afdrage på en kontrolafgift?",
    body: "Ja, det kan du sagtens. Vi tilbyder en afdragsordning, hvor du kan afdrage beløbet over 3 måneder. Betalingen opdeles i lige store rater. Afdragsordningen er rentefri, så længe ordningen overholdes. Vi tilmelder betalingerne til betalingsservice for dig. Hvis du er interesseret i en afdragsordning, kan du kontakte os via kontaktformularen.",
  },
];

export const FAQ2 = [
  {
    title: "Kan jeg få udskudt min betalingsfrist?",
    body: "Ja, vi udskyder gerne din betalingsfrist. Hvis du skal have den udskudt, er det vigtigt, at du kontakter os hurtigst muligt for at undgå et rykkergebyr. Du kan kontakte os via kontaktformularen. En af vores sagsbehandlere vil herefter tilbyde dig en ny betalingsfrist.",
  },
  {
    title: "Hvordan vurderer ParkZone min klage?",
    body: "Vi vurderer din klage objektivt ud fra de respektive parkeringsregler på parkeringsområdet. De regelsæt, der er på parkeringsområdet, har vi aftalt i samråd med ejerne af parkeringsområdet. \n \n Hvis reglerne ikke er overholdt, fastholder vi kontrolafgiften. Vi annullerer kun kontrolafgiften, hvis den er givet på et fejlagtigt grundlag. Det vil altid være parkeringsreglerne på parkeringsområdet, som vil være afgørende i alle vurderinger. Vi vil for god ordens skyld gerne nævne, at subjektive omstændigheder ikke har en betydning for vores afgørelse af din klage. Det skyldes, at vi ikke ønsker at forskelsbehandle, og at vi bestræber os på at have en sagsbehandling, som er ens for alle.",
  },
  {
    title: "Kan jeg klage til andre end ParkZone over min kontrolafgift?",
    body: "Ja. Gives der ikke medhold i klagen, kan sagen, mod betaling af et klagegebyr, indbringes for Parkeringsklagenævnet. Klageformular samt information findes på Parkeringklagenævnets hjemmeside",
  },
  {
    title: "Hvordan betaler jeg min kontrolafgift?",
    body: "Du har mulighed for at betale på flere måder. Du kan vælge at anvende det tilsendte girokort. Du kan også vælge at betale via en bankoverførsel. Beløbet skal overføres til følgende konto: \n \n Reg. nr. 4845 \n Kontonr. 4779316564 \n \n Husk at henvise til dit løbenummer, når du betaler. Vi bruger nummeret til at identificere, hvem der har betalt. ",
  },
  {
    title:
      "Hvorfor har jeg modtaget en kontrolafgift, selvom jeg har betalt for min parkering?",
    body: "Betaling er ikke den eneste forudsætning for en lovlig parkering på vores parkeringsområder. Alle andre relevante parkeringsområder på pladsen skal overholdes. Du kan eksempelvis modtage en kontrolafgift, hvis du overtræder følgende regler: \n \n - Hvis parkering er uden for p-plads \n - Hvis tiden på p-skiven er overskredet \n - Hvis gyldig p-billet mangler \n \n Vi gør for god ordens skyld opmærksom på, at en p-billet fra en anden parkeringsudbyder ikke er gældende på parkeringsområder administreret af os.",
  },
];

export const tabs = [
  {
    title: "ANPR",
    content: {
      title: "Automatisk kameraparkering",
      subtitle:
        "Med automatisk kameraparkering får I mulighed for at tilbyde en fremtidssikret parkering, der aldrig har været nemmere. Det giver et bedre flow ved ind- og udkørsel, der gør parkeringsrejsen enklere, og I kan tilbyde flere fleksible betalingsmuligheder. Løsningen fungerer via et ANPR-system (automatisk nummerpladeregistrering), der ved hjælp af kameraer kan bringe jeres parkeringsareal ind i den digitale tidsalder. \n\n Her kan I vinke farvel til bomme, fysiske p-billetter og parkeringskort som besværliggør parkeringsrejsen. Når jeres besøgende kører ind og ud af parkeringsanlægget, bliver deres køretøj automatisk registreret af et kamera. Jeres besøgende kommer derfor kun til at betale for præcis den tid, de har parkeret.",
      boxText1: "Effektiv og digital administration",
      boxText2: "Optimer din virksomhed med dataindsigt",
      boxText3: "24/7 parkeringskontrol",
      image: anpr,
      altText: "Bil kører ved kameraparkering",
      illustration: "/assets/svg/kamera.svg",
      heading1: "Brugervenlig parkeringsløsning",
      subheading1:
        "Ved hjælp af kameraerne kan jeres besøgende nemt og gnidningsfrit parkere. Når jeres besøgende kører ind på parkeringsområdet, tjekker systemet om den parkerende er registreret på forhånd. Det vil sige, at jeres faste besøgende – f.eks. abonnenter og medarbejdere – kun skal fokusere på at finde en ledig plads. Jeres andre besøgende kan også nemt registrere deres parkering. De har mulighed for let at betale med betalingsapps, -automater eller online op til 48 timer efter endt besøg.",
      smallTitle1: "Kontrol og tryghed - for jer og jeres parkerende",
      bodyText1:
        "Med kameraparkering har det aldrig været lettere at sikre orden på ens parkeringsområde. Med den automatiske parkeringskontrol sikrer I, at jeres parkeringsområde bliver anvendt præcis, som I gerne vil have det. I kan kontrollere, hvem der må parkere på hvilke pladser. I kan f.eks. opdele parkeringsarealet i zoner, hvor vores system tjekker, om køretøjet har en gyldig tilladelse til netop dette område. På den måde kan I forhindre uønsket brug af jeres p-pladser og sikre plads til jeres faste parkerende.",
      smallTitle2: "Rådgivning og vejledning",
      bodyText2:
        "Det behøver ikke at være kompliceret for jer at få en højteknologisk løsning på jeres parkeringsområde. Vi tager os af hele processen: fra rådgivning om jeres parkeringsbehov til installation og løbende vedligeholdelse af jeres kameraer, så I kan give jeres besøgende en let parkeringsoplevelse. I får samtidig en fast kontaktperson, der er specialiseret i at hjælpe jer med at løbende optimere jeres parkeringsløsning.",
      heading2: "Dataindsigt",
      subheading2:
        "Kunne I tænke jer at lære jeres besøgende at kende allerede fra p-pladsen? Med automatisk kameraparkering får I en intelligent parkeringsløsning, der giver jer mulighed for at få detaljeret indsigt i parkeringsadfærden på jeres område. \n\n ANPR-løsningen giver bl.a. adgang til information om besøgsfrekvens , belægningsgrad og varighed af kundebesøg . På den måde kan I opbygge viden om jeres besøgende ud fra, hvornår de kommer, hvor længe de er der, og hvor mange biler der kommer. Det er også muligt at få data om, hvor jeres besøgende kommer fra, hvilket I kan bruge til at målrette jeres markedsføring.",
    },
  },
  {
    title: "Betalingsparkering",
    content: {
      title: "Betalingsparkering",
      subtitle:
        "For både bymidterne og shoppingcentre er parkering i stigende grad en knap ressource. Samtidig forventer parkerende, at det skal være nemt og bekvemt at parkere, når de skal noget. Mange parkerende, som har et ærinde i byen eller som skal shoppe, er villige til at betale for, at parkering er lettilgængelig, og derfor kan betalingsparkering være en god løsning. Betalingsparkering giver større udskiftning af biler og sikrer derfor, at der ofte kommer ledige p-pladser. I bestemmer selv, om I ønsker betalingsautomater, betaling med betalingsapp eller en kombination af begge løsninger.",
      boxText1: "Direkte indtægt på parkeringsområdet",
      boxText2: "Langtidsparkering undgås",
      boxText3: "Større udskiftning af biler og dermed større kundestrøm",
      image: betalingsparkering,
      altText: "Kvinder står ved betalingsparkering",
      illustration: "/assets/svg/betaling.svg",
      heading1: "Pay & Display",
      subheading1:
        "Pay & Display er navnet på vores betalingsautomater. Disse kan implementeres, hvis I har betalingsparkering eller ønsker betalingsparkering på parkeringsområdet.  Vi kommer selv og opsætter betalingsautomaterne, og derfor vil omstillingsprocessen være gnidningsfri for jer.",
      smallTitle1: "Skræddersyede Betalingsløsninger",
      bodyText1:
        "Med betalingsparkering kan du tilpasse parkeringspriser og -muligheder efter dine besøgendes behov og adfærd. Skab incitamenter for kortere parkeringer og belønninger for længere ophold, alt sammen for at optimere din parkeringsplads og skabe ekstra værdi.",
      smallTitle2: "Integrerede solceller",
      bodyText2:
        "Hos ParkZone foretrækker vi bæredygtige og miljøvenlige løsninger. Derfor har størstedelen af vores betalingsautomater integrerede solceller. Det gør dem samtidig nemme at opstille, da der ikke skal trækkes strøm gennem jorden. I tilfælde af, at parkeringsområdet er i en kælder eller i et parkeringshus, anvender vi almindelig strømforsyning.",
      heading2: "Optimering",
      subheading2:
        "Udnyt potentialet i din parkeringsplads ved at implementere en dynamisk prisstruktur, der tilpasser sig efter efterspørgsel og særlige begivenheder. Med fleksible priser kan du maksimere indtægterne og sikre en optimal udnyttelse af dine parkeringsressourcer.",
    },
  },
  {
    title: "Digitale tilladelser",
    content: {
      title: "Digitale parkeringstilladelser",
      subtitle:
        "Vil I sikre, at der er ledige pladser til bestemte grupper af mennesker på jeres parkeringsområde? Så er udstedelse af digitale p-tilladelser måske løsningen. Med vores p-tilladelsessystem kan I få kontrol over, hvem der har ret til at parkere på parkeringsområdet. Vi har erstattet størstedelen af vores fysiske p-tilladelser med digitale p-tilladelser, da det gør parkeringen let og fleksibel. P-tilladelserne administreres gennem vores digitale p-tilladelsessystem ParkCare, som benyttes af over 100.000 brugere i hele Danmark.",
      boxText1: "Spar tid og omkostninger på administration",
      boxText2: "Forskellige typer af tilladelser efter behov",
      boxText3: "Online selvbetjeningsløsning til registrering",
      image: digital,
      altText: "Kvinde køber digital parkeringstilladelse",
      illustration: "/assets/svg/tilladelse.svg",
      heading1: "Fleksible løsninger",
      subheading1:
        "Vi udsteder flere forskellige digitale p-tilladelser, såsom permanente, tidsbestemte og områdebestemte. Vores digitale p-tilladelser kan kombineres på mange forskellige måder. Vi sammensætter og skræddersyr en løsning, der passer bedst til parkeringsområdet. Løsningen afhænger blandt andet af, hvad I ønsker parkeringsområdet skal anvendes til. Vi rådgiver jer i, hvad der er mest optimalt ud fra en grundig vurdering af jeres område.",
      smallTitle1: "ParkCare Stand alone",
      bodyText1:
        "ParkCare Stand alone er en selvbetjningsløsning, der blandt andet kan bruges hos virksomheder, hoteller og offentlige instanser til, at brugere af et parkeringsområde selv kan registrere sin parkering ved at indtaste registeringsnummeret deres køretøj på en tablet ved ankomst. Løsningen er særligt ideel til gæste- og kundeparkering.",
      smallTitle2: "ParkCare Reception",
      bodyText2:
        "ParkCare Reception er en god løsning til virksomheder, hoteller og andre, som ønsker at have fuld kontrol over, hvem der parkerer på parkeringsområdet. Løsningen anvendes særligt til gæsteparkering og fungerer ved, at receptionen selv udsteder p-tilladelserne ved at registrere gæsternes køretøjer via et brugervenligt digitalt system.",
      heading2: "ParkCare Permanent",
      subheading2:
        'Det er muligt at udstede "permanente" p-tilladelser til beboere, medarbejdere, studerende eller andre, som skal parkere over en længere periode. I bestemmer selv, hvor meget I selv vil være inde over parkeringsadministrationen. Hvis I vælger en brugerstyret løsning, kan I give brugere af parkeringsområdet ansvaret for selv at administrere p-tilladelser (tilføje og ændre registreringsnumre på deres køretøjer) og oprette gæstetilladelser via browser eller vores app. \n\n Med vores app og browser-adgang kan brugerne af parkeringsområdet let og enkelt selv administrere p-tilladelser og eventuelle gæsteparkeringer. Alternativt kan I vælge en administratoradgang, hvor p-tilladelser administreres centralt af en eller få personer.',
    },
  },
  {
    title: "Ladestandere",
    content: {
      title: "Ladestandere",
      subtitle:
        "Dine medarbejdere, kunder og gæster vil gerne lade, mens de parkerer - og snart er det lovpligtigt at tilbyde ladepladser ved offentlige og private bygninger. Hos ParkZone forhandler vi ladestandere som et naturligt produkt i den grønne omstilling. Udlejer du erhvervsejendomme kan du oven i købet øge din lejepris, hvis du installerer flere end de lovpligtige ladestandere. Udbredelsen af elbiler kræver flere lademuligheder på parkeringspladser. \n\n Et nyt EU-lovkrav pålægger offentlige og private bygningsejere at etablere ladestandere ved parkeringspladser ved ejendommen — senest 1. januar 2025. Der skal ladestanderne fysisk være på plads. Den nye Ladestanderbekendtgørelse, som er en tilføjelse til EU-Byggeloven, kræver at el- og hybridbiler kan oplade, mens de parkerer.",
      boxText1: "Universel og stilren ladeboks til el- og hybridbiler",
      boxText2: "Vi leverer og hjælper med tilslutning",
      boxText3: "Adgang via app og nøglebrik",
      image: ladestander,
      altText: "Ladestander på parkeringsplads",
      illustration: "/assets/svg/lade.svg",
      heading1: "Lad os hjælpe dig",
      subheading1:
        "Som parkeringsadministrator med mere end 180.000 p-pladser i administation, er vi hos ParkZone godt klædt på til at fortsætte udrulningen af ladepladser på både offentlige og private arealer. Vi installerede vores første ladestandere i 2020 og har hjulpet flere af vores kunder med at gøre ladepladser til en del af deres parkeringstilbud - og en del af forretningen.",
      smallTitle1: "Vi leverer og hjælper med installation",
      bodyText1:
        "Når du bestiller dine ladestandere hos os, leverer vi de fysiske standere, som skal installeres af en autoriseret elinstallatør. Vi henviser gerne til vores samarbejdspartnere, så I kan få hjælp til installation og tilslutning til elnettet.",
      smallTitle2: "Forbered din grund til el",
      bodyText2:
        "Husk at du kan starte i det små og udvide antallet af ladestandere og -pladser hen ad vejen. Det vigtigste er at parkeringsområdet er forberedt til ladestanderne, hvilket er en del af overvejelserne, som alle grund- og bygningsejere i disse måneder gør sig. Gør du også?",
      heading2: "Gør dit område attraktivt",
      subheading2:
        "Mange arbejder hjemmefra, men der er stadig en stor del af arbejdsstyrken, der pendler i bil til og fra arbejdet. Ligesom vi kører ud for at handle, til sport, i biografen eller på golfbanen. \n\n Hvis du installerer ladebokse på dit parkeringsområde, giver du dermed flere muligheden for at lade, mens de parkerer. Uanset om de er beboere, medarbejdere eller besøgende.",
    },
  },
  {
    title: "Opmærkning",
    content: {
      title: "Opmærkning & optimering",
      subtitle:
        "En indbydende parkeringsplads skaber et godt førstehåndsindtryk og gør det nemt for jeres besøgende at parkere korrekt. Med udgangspunkt i jeres ønsker og behov analyserer vi jeres parkeringsareal samt jeres besøgende og deres besøgsadfærd. For at skabe plads til jeres forskellige besøgende kan vi inddele jeres område i zoner og tydeliggøre hvor der er reserverede pladser, handikapparkering samt ladepladser. Dermed kan du tilgodese udvalgte brugere og sikre, at der altid er plads til at dine medarbejdere eller kunder.",
      boxText1: "Optegning af fartbumb, felter, symboler mm.",
      boxText2: "Vi reparerer både huller og revner i asfalt",
      boxText3: "Hjælp til en smart indretning af jeres område",
      image: familieplads,
      altText: "Parkeringsplads",
      illustration: "/assets/svg/opmark.svg",
      heading1: "Professionel rådgivning og tilpassede løsninger",
      subheading1:
        "Vi optegner både p-pladser, kørebaner, streger og symboler mm. og kan afmærke i mange forskellige farver. Vi kan afmærke båse, gangarealer eller cykelstier for at skabe tryghed og for at sikre, at uvedkommende ikke parkerer på handikap- eller ladepladser ved en fejl.",
      smallTitle1: "Høj standard",
      bodyText1:
        "Vi anvender både højtrykssprøjtemaling og termoplast og kan opmærke på næsten alle underlag. Vi tilpasser vores materialevalg ud fra den forventede trafik - kundeparkering sætter f.eks. andre krav til opmærkning end beboelse, da der ofte er et langt højere udskift af biler.",
      smallTitle2: "Fremtidssikring af dit parkeringsareal",
      bodyText2:
        "Vores rådgivere hjælper jer med at afdække jeres nuværende behov samt jeres ønsker for fremtiden. Så hvis I ikke har parkeringsopsyn på jeres plads i dag, sørger vi for at jeres plads er klar til det. Ligeledes kan vi også hjælpe jer med at indføre betalingsparkering samt at udleje parkeringspladser.",
      heading2: "Serviceaftale",
      subheading2:
        "Hvis du er interesseret i løbende at få vedligeholdt dit parkeringsområde, kan en serviceaftale være løsningen. Vi tilbyder en serviceaftale, hvor vi efterser og udbedrer små skader på parkeringsanlægget, inden de udvikler sig til store og dyre reparationer. Vi opmærker og reparerer også løbende, når dit anlæg trænger til det.",
    },
  },
  {
    title: "Opsyn med pladser",
    content: {
      title: "Opsyn på parkeringsområder",
      subtitle:
        "Vi fører opsyn på private områder for at hjælpe dig med at skabe plads. Parkeringsopsyn er en del af den samlede løsning, som vi tilbyder for at skabe ordnede og trygge forhold for jeres parkerende. Med parkeringskontrol kan I sikre, at der er plads til jeres medarbejdere, kunder og gæster. Vores vagter går i tydelige, gule veste, så de er nemme at få øje på. De er altid klar på at besvare spørgsmål om alt fra parkering til vejvisning.",
      boxText1: "Troværdige og veluddannede vagter",
      boxText2: "Skaber plads og holder orden",
      boxText3: "Parkering i et trygt og sikkert miljø",
      image: opsyn,
      altText: "Parkeringsvagt holder opsyn med parkeringsplads",
      illustration: "/assets/svg/pladser.svg",
      heading1: "Vores parkeringsvagter",
      subheading1:
        "Vores vagter er blandt de dygtigste og mest veluddannede i branchen. Da ParkZone er et vagtautoriseret selskab, bliver alle vores vagter godkendt ved Politiet inden ansættelse. Vi sørger løbende for at videreuddanne vores vagtpersonale for at styrke og udvikle deres kompetencer – til gavn for dig og dine parkerende. Inden for de seneste år har vores vagter bl.a. deltaget i kurser om udvidet førstehjælp, brandbekæmpelse samt glatbane.",
      smallTitle1: "Tæt dialog med dig og dine kunder",
      bodyText1:
        "Vi lægger vægt på et tæt samarbejde med vores kunder de områder, hvor vi opererer. Ved at lytte til vores kunders behov og indgå i dialog med deres brugere, tilpasser vi vores parkeringsløsninger efter de specifikke udfordringer og muligheder, der findes på hvert enkelt sted.",
      smallTitle2: "Vi proriterer dine kunders tilfredshed",
      bodyText2:
        "Vi vægter kundetilfredshed højt og stræber altid efter forbedring af vores parkeringsopsyn. Gennem regelmæssig feedback og evaluering af vores tjenester arbejder vi målrettet på at imødekomme vores kunders behov og forventninger. Vi tilpasser løbende vores tilgang og implementerer nye løsninger for at sikre en problemfri parkeringsoplevelse for brugerne af pladserne.",
      heading2: "Sikkerhed og service",
      subheading2:
        "En stor del af vores vagtpersonale har det grønne vagtkort, hvilket betyder, at de må løse opgaver som sikkerhedsvagter. Det grønne vagtkort er beviset på, at man har gennemført den lovpligtige vagtuddannelse, hvor bl.a. brandbekæmpelse, førstehjælp, jura samt konflikthåndtering er på skemaet.",
    },
  },
  {
    title: "Parkeringsadministration",
    content: {
      title: "Parkeringsadministration",
      subtitle:
        "Vi administrerer dagligt over 180.000 p-pladser fordelt på over 1.900 parkeringsområder i hele Danmark. Det gør os til en af de største aktører i branchen. Parkeringsadministration er vores kerneydelse, og i løbet af det sidste årti, har vi opnået stor ekspertise indenfor området. Med de mest innovative og brugervenlige parkeringsløsninger på markedet kan vi sikre en effektiv administration af jeres parkeringsområde og sikre en god parkeringsoplevelse. Den gode parkeringsoplevelse opstår, når parkering er nemt, fleksibelt og ikke fylder.",
      boxText1: "Vi håndterer alle henvendelser fra jeres kunder",
      boxText2: "Hjælp til udlejning af pladser",
      boxText3: "Selvbetjening af p-tilladelser på vores platform ParkCare",
      image: administration,
      altText: "Kvinde køber parkering",
      illustration: "/assets/svg/admin",
      heading1: "Få kontrol over jeres område",
      subheading1:
        "I en travl hverdag, hvor det i stigende grad er blevet sværere at finde en p-plads, hjælper vi med at skabe plads. Vi kan hjælpe jer med at få kontrol over, hvem der parkerer på jeres parkeringsområde, hvis det er en prioritet eller med at sikre, at de regler på området, som vi sammen fastsætter, håndhæves. Det kan vi gøre ved løbende at holde opsyn med området eller ved at implementere en ANPR-løsning (automatisk nummerpladeregistrering), som vha. kameraer registrerer og genkender køretøjer, når de kører ind og ud af et parkeringsområde.",
      smallTitle1: "Vi skaber værdi for jer",
      bodyText1:
        "Vores tilgang til parkeringsadministration er baseret på åbenhed, gennemsigtighed og en forpligtelse til at levere førsteklasses service til vores kunder. Vi er dedikerede til at etablere langvarige partnerskaber og skabe værdi for vores kunder gennem vores parkeringsløsninger.",
      smallTitle2: "Håndtering af digitale p-tilladelser",
      bodyText2:
        "ParkCare er vores digitale p-tilladelsessystem. Systemet benyttes af over 100.000 brugere i hele Danmark og har gennem tiden udstedt over 3 millioner digitale p-tilladelser. I ParkCare kan der udstedes flere forskellige former for digitale p-tilladelser, såsom permanente, tidsbestemte eller områdebestemte. \n\n ParkCare er fleksibelt, og I bestemmer selv, hvor meget I selv vil være inde over administrationen. Hvis I vælger en brugerstyret løsning, kan I give brugere af parkeringsområdet ansvaret for selv at administrere p-tilladelser og oprette gæstetilladelser.",
      heading2: "Hvad tilbyder vi?",
      subheading2:
        "Vi kan tage os af hele administrationen og driften af et område lige fra etablering af parkeringsområdet til service over for brugere. Når I overlader administrationen til os, håndterer vores kundeserviceafdeling alle henvendelser fra parkerende, mens vores sagsbehandlingsafdeling tager sig af indsigelser i forbindelse med udstedelse af kontrolafgifter. Vi håndterer p-tilladelser, og vi kan også hjælpe med udlejning af p-pladser, hvis I har brug for det.",
    },
  },
  {
    title: "Rådgivning",
    content: {
      title: "Rådgivning",
      subtitle:
        "Ingen parkeringsområder er ens. Derfor tilbyder vi personlig rådgivning, så vi sammen kan finde den bedste løsning for jer. På den måde sørger vi for, at I får mest muligt ud af jeres parkeringsområde. Vi kan hjælpe med at sikre den bedste udnyttelse af jeres område, så I kan maksimere jeres indtjening. Når vi sammensætter en løsning til jer, analyserer og kortlægger vi bl.a. parkeringsområdet, efterspørgslen, udnyttelsen af p-pladser, ærindefordelingen, opholdstider samt parkeringsforholdene i jeres lokalområde. Det giver os det bedste beslutningsgrundlag for at vælge en optimal løsning.",
      boxText1: "Personlig løsning ud fra jeres behov",
      boxText2: "Rådgivning om optimering af jeres område",
      boxText3: "Løbende rådgivning for øget indtjening",
      image: radgivning,
      altText: "Mand og kvinde taler om parkeringsrådgivning",
      illustration: "/assets/svg/radgiv.svg",
      heading1: "Optimal udnyttelse af parkeringsområdet",
      subheading1:
        "Vi tilbyder rådgivning om, hvordan I kan optimere jeres parkeringsområde. Vi har fokus på, hvordan vi kan udnytte pladsen bedst muligt gennem en smart indretning og opdeling af området, og ved at sikre et bedre parkeringsflow. Det er også muligt at optimere området ved at opmærke p-pladser og optegne andre adfærdsregulerende elementer, som samtidig sikrer en brugervenlig parkeringsoplevelse.",
      smallTitle1: "Øget indtjening",
      bodyText1:
        "Vi kan også rådgive jer i, hvordan I kan øge jeres indtjening på parkering. Vi rådgiver om omkostnings- og prisstruktur. Hvis I har behov for at øge belægningsgraden på jeres parkeringsområde, og I udlejer eller gerne vil udleje p-pladser, kan vi hjælpe jer med det.",
      smallTitle2: "Løbende rådgivning",
      bodyText2:
        "I et samarbejde med os får I fuld transparens. I får mulighed for at få indsigt i parkeringsadfærden på jeres parkeringsområde. Med et godt datagrundlag kan vi løbende rådgive jer i, hvordan vi maksimerer jeres parkeringsforretning ved at optimere brugen af parkeringsarealet og påvirke bilismen.",
      heading2: "Råd og vejledning",
      subheading2:
        "Vores parkeringsrådgivning er tilpasset til hvert enkelt parkeringsområde. Vi ser på, hvordan vi kan få mest ud af pladsen, så parkering bliver nemt og bekvemt for alle. Gennem løbende samtaler og analyse af parkeringsvaner hjælper vi med at finde måder at tjene mere på parkeringen, f.eks. ved at justere priser og gøre det nemmere at finde en ledig plads. Vi arbejder tæt sammen med jer og sørger for, at I hele tiden har den bedste løsning til jeres parkeringsbehov.",
    },
  },
  {
    title: "Skiltning",
    content: {
      title: "Skiltning",
      subtitle:
        "Gode parkeringsskilte er skilte, der altid er opdaterede iht. gældende lovgivning, og som samtidig er nemme for parkerende at forstå. Vores lovpligtige bestemmelsesskilte er ikke kun udarbejdet med fokus på gældende lovgivning, men også med fokus på, at skiltene skal være letforståelige for parkerende. Ved at parkerende bliver mødt af en læsbar og informativ skiltning, sikrer vi, at de får en smidig og effektiv parkeringsoplevelse.",
      boxText1: "Tilpassede skilte i jeres eget design",
      boxText2: "Vi opfylder alle standarder for sikkerhed",
      boxText3: "Personlig marketing efter jeres behov",
      image: skiltning,
      altText: "ParkZone parkeringsskilt",
      illustration: "/assets/svg/skilt.svg",
      heading1: "Hurtig opsætning af skilte",
      subheading1:
        "Vores administrationssystem, ParkWeb, tillader, at vi hurtigt kan generere trygklare bestemmelsesskilte, som vores leverandører kan producere. Når vi opretter skiltebestillinger i systemet, sendes de automatisk direkte til leverandøren, som hurtigt kan producere dem. Vi har igennem mange år udviklet og forfinet tilgangen til bestilling af bestemmelsesskilte. En strømlinet proces betyder hurtig implementering.",
      smallTitle1: "Kvalitetssikring af skilte",
      bodyText1:
        "Vi overholder gældende standarder for skiltningsdesign og kvalitetssikring for at sikre, at vores skilte opfylder alle branche- og sikkerhedsstandarder. Vi anvender holdbare materialer og avanceret trykteknologi for at sikre, at vores skilte forbliver letlæselige og visuelt tiltalende under alle vejrforhold.",
      smallTitle2: "Klar og tydelig kommunikation",
      bodyText2:
        "Vores tilgang til skiltning er at skabe en sammenhængende og intuitiv oplevelse for alle, der bruger vores parkeringsområder. Vi analyserer trafikmønstre og brugeradfærd for at placere skilte strategisk og minimere forvirring. ",
      heading2: "Målrettet marketing",
      subheading2:
        "Vores marketingafdeling har kompetencer inden for grafisk design og kommunikation, som sikrer, at skiltene ser pæne ud og samtidig er relevante og nemme at afkode for parkerende. \n\n Vi tilbyder også at designe informationsskilte, henvisningsskilte, informationsflyers mm., som har til formål at sikre en god parkeringsoplevelse.",
    },
  },
  {
    title: "Security",
    content: {
      title: "Security",
      subtitle:
        "Vi lever og ånder for parkering, der er kernen i vores forretning. For at skabe merværdi for vores kunder har vi igennem årene udvidet vores produktsortiment, der i dag tæller bl.a. facility service, sikkerhedsvagter samt brandsikring og hjertestartere. \n \n Men hvorfor sikkerhedsløsninger? Fordi det skaber værdi for dig som kunde. Når vi er på jeres matrikel for at føre opsyn med parkering, kan vi med fordel hjælpe jer med bl.a. rundering og lukkevagt. Det sparer jer for tid og omkostninger, da det er mere effektivt at få besøg af en virksomhed frem for to på daglig basis. Samtidigt får I én kontaktflade og en samlet samarbejdspartner, der hjælper med at udvikle jeres forretning.",
      boxText1: "Professionelle og uddannede sikkerhedsvagter",
      boxText2: "Daglige rapporter og indsigter",
      boxText3: "Tryghed for jeres virksomhed",
      image: security,
      altText: "Parkzone servicevagt",
      illustration: "/assets/svg/security.svg",
      heading1: "Tryghed for jer",
      subheading1:
        "En sikkerhedsvagt hjælper med at skabe tryghed og forebygge hærværk, tyveri og andre ubehagelige hændelser. Selvom jeres virksomhed er udstyret med videoovervågning, er der ting, som kameraet ikke fanger og ikke kan agere på – såsom vandskader. Derudover kan kameraer ikke slukke jeres kaffemaskine, lukke et vindue eller betjene en brandslukker. Vagten aflægger daglig rapport, så I kan følge med og optimere jeres interne processer.",
      smallTitle1: "Autorisering og godkendelse",
      bodyText1:
        "Alle vores sikkerhedsvagter har gennemført den lovpligtige vagtuddannelse. Uddannelsen varer i seks uger, og der er bl.a. brandbekæmpelse, førstehjælp, jura samt konflikthåndtering på skemaet.ParkZone har som vagtfirma en overenskomstaftale med VSL (Vagt- og Sikkerhedsfunktionærernes Fagforening), hvilket betyder, at vi må udføre store som små vagtopgaver. Vi er ligeledes et vagtautoriseret vagtselskab og er godkendt af Politiet. \n \n Sikkerhedsvagt er en overordnet betegnelse, hvor vi i ParkZones sikkerhedsafdeling primært har fokus på nedenstående services – men vi er altid åbne for at tilpasse en løsning efter jeres behov: \n \n - Servicevagt \n - Runderings- og tilsynsvagt \n - Midlertidig vagt",
      smallTitle2: "Vores vagter",
      bodyText2:
        "Servicevagter kaldes også stationære vagter eller fastvagter, da de holder opsyn med et afgrænset område i faste perioder. Servicevagter hjælper gæster og kunder ved at besvare spørgsmål, vise vej og hvis uheldet er ude, er de uddannede i at give førstehjælp. Vagterne hjælper også med at skabe tryghed for jeres personale ved at håndtere personer, der ikke kender forskel på mit og dit. Samtidigt kan de hjælpe med at løse serviceopgaver i jeres reception såsom at modtage gæster, håndtere pakker og besvare opkald. \n \n En runderingsvagt fører tilsyn med jeres område og ejendom. Vagten kan hjælpe jer på faste tidspunkter med at åbne og lukke din virksomhed eller butik, så alt foregår efter bogen. Derudover kan vagten slukke kaffemaskinen, hejse flaget og gøre klar til at dine første medarbejdere møder ind. Vi tilbyder også ad hoc tilsyn, hvor vagten møder op på tilfældige tidspunkter (typisk aften og nat). Vagten tjekker området udvendigt, kigger efter smadrede vinduer, mistænkelige køretøjer samt uvedkommende personer på området. Hvis vagten ser tegn på indbrud, vandskade eller brand, sørger vi for at kontakte jer og/eller politiet.\n \n Vores midlertidige vagter er til jer som har behov for vagter i en begrænset periode. Vores midlertidige vagter har samme kvalifikationer og kompetencer, som vores andre vagter. De kan f.eks. føre tilsyn med byggepladser, agere servicevagt ved kulturelle begivenheder samt passe din reception ved sygdom og i ferier.",
      heading2: "Hvis uheldet er ude",
      subheading2:
        "Vi har sammensat vores produktportefølje med ambitionen om at skabe synergieffekter og merværdi for vores kunder. Derfor tilbyder vi brandsikring, førstehjælp og hjertestartere i topkvalitet med service og eftersyn, så I er sikre på, at det virker, hvis I en dag for brug for det. Vi tilbyder også overfalds- eller assistancetryk.",
    },
  },
  {
    title: "Udlejning af pladser",
    content: {
      title: "Udlejning af parkeringspladser",
      subtitle:
        "Hvis I har udlejningspladser eller overvejer at få det, kan vi hjælpe med vores ekspertise inden for området. Vi kan hjælpe med at sikre den bedste udnyttelse af jeres parkeringsområde og maksimere indtjening på udlejning af p-pladser. Det kan vi blandt andet gøre ved at synliggøre jeres parkeringsområde og ved at markedsføre parkeringsabonnementer for jer.",
      boxText1: "Hjælp til maksimering af indtjening",
      boxText2: "Markedføring af jeres pladser og område",
      boxText3: "Online booking af jeres pladser på ParkZone.dk",
      image: udlejning,
      altText: "Parkeringsplads",
      illustration: "/assets/svg/udlej.svg",
      heading1: "Markedsføring af jeres pladser",
      subheading1:
        "Udover, at vi kan varetage administrationen i forbindelse med udlejning af jeres p-pladser, kan vores marketingafdeling hjælpe med forskellige tiltag, der kan øge salget af abonnementer. Vi udarbejder en plan ud fra jeres behov og en analyse af de målgrupper, der er relevante for netop jeres parkeringsområde. Det er ofte en god start at tilføje jeres plads til Google og andre korttjenester.",
      smallTitle1: "Annoncering på SoMe",
      bodyText1:
        "Vi hjælper jer med at udarbejde online annoncering på sociale medier og Google for at øge synligheden af jeres plads og dermed salget. Vi sørger vi også for offline marketing i form af skilte, bannere og flyers. Kontakt os for at høre mere om, hvad vi kan gøre for jeres parkeringsareal.  ",
      smallTitle2: "Maksimer udnyttelsen af jeres pladser",
      bodyText2:
        "Vi er eksperter i at hjælpe jer med at få mest muligt ud af jeres parkeringsområde gennem udlejning af p-pladser. Vores mål er at få jeres pladserne fyldt, og samtidig sikre, at I får den bedste indtjening ved at tilbyde parkeringsabonnementer.",
      heading2: "Online booking af jeres område",
      subheading2:
        "I kan få adgang til vores online bestillingsside - Find parkering - på parkzone.dk, hvor parkerende kan bestille abonnements- og periodeparkering. Vores bestillingsmodul gør det nemt for parkerende at bestille parkeringsabonnementer online. De skal hverken rette henvendelse eller vente på svar - de kan nemt bestille et abonnement fra den dato, de ønsker. \n\n Fordelen er også, at I samtidig får promoveret jeres parkeringsmuligheder online. I får også en landingsside til jeres parkeringsområde, hvor brugere kan læse om parkeringsløsningerne og parkeringsfaciliteterne.",
    },
  },
];
export const segmenter1 = [
  {
    title: "Beboelse",
    body: "Når vi sammensætter en løsning til jer, kortlægger vi bl.a., hvordan pladsen på parkeringsområdet udnyttes, og vi ser på belægningsgraden sammenholdt med antallet af beboere. Med vores digitale parkeringsløsninger sparer I tid på tung parkeringsadministration og frigiver ressourcer. Parkering skal ikke fylde, hverken for jer eller jeres beboere. \n \n Vi tilbyder parkeringsopsyn, som kan hjælpe med at sikre, at pladserne bruges af beboere, og at reglerne på parkeringsområdet overholdes. Med vores digitale p-tilladelsessystem ParkCare får I også et fuldt overblik over, hvem der har tilladelse til at parkere på jeres parkeringsområde. Samtidig kan I give tilladelse til, at beboere selv får adgang til at oprette og ændre p-tilladelser i ParkCare. Det giver beboere større fleksibilitet, og det er tidsbesparende for jer. Vi kan håndtere mange former for digitale p-tilladelser. Det er blandt andet permanente, tidsbestemte og områdebestemte, som kan kombineres på mange forskellige måder.",
  },
  {
    title: "Entertainment",
    body: "Parkering er det første og sidste jeres kunder møder i den samlede oplevelse. Det gør det kun vigtigere, at de ikke har en dårlig parkeringsoplevelse. Vi har erfaring med at indtænke parkering som en del af den samlede oplevelse. Det er vigtigt, at parkering er gnidningsfrit og nemt for besøgende. Det sikrer vi ved, at p-pladser er lettilgængelige, at det er nemt at forstå parkeringsmulighederne, og ved at betalingsmulighederne er fleksible. Vi kan hjælpe jer med at skabe plads til dem, I ønsker, der skal være plads til. \n \n Vi hjælper jer med at finde den optimale parkeringsløsning og varetage parkeringsadministrationen. Det frigiver tid til, at I kan fokusere på jeres besøgende. Når vi sammensætter en løsning til jer, kortlægger vi bl.a. parkeringsområdet, efterspørgslen på p-pladser, hvordan de etablerede p-pladser udnyttes, ærindefordelingen og opholdstid. Det giver os det bedste beslutningsgrundlag for at finde en optimal parkeringsløsning til jer. Med udgangspunkt i behovet på parkeringsområdet og jeres ønsker, bestemmes tids- og takststrukturen samt de parkeringsregler, som skal gælde for parkeringsområdet.",
  },
  {
    title: "Hospital",
    body: "På hospitaler er der et stort antal af brugere samt en stor udskiftning af biler. Det kræver en god infrastruktur og en smart indretning af parkeringsområderne. Tydeligere zoneinddeling, god skiltning og kommunikation samt digitale parkeringsløsninger er med til at sikre, at det er nemt og overskueligt at parkere. \n \n Med en særlig forståelse for miljøet på hospitaler har vi med succes implementeret bæredygtige parkeringsløsninger på Region Hovedstadens 11 parkeringsanlæg. Med en administration af over 12.000 p-pladser på Region Hovedstadens parkeringsområder, har vi stor erfaring med at håndtere en stor volumen af biler inden for hospitalssegmentet. Gennem vores samarbejde med Region Hovedstaden har vi erfaret, at patienterne føler sig mere velkomne og hjulpne på parkeringsområderne. \n Vi har i samarbejde skabt en løsning, der sikrer øget effektivitet samt bedre trafikafvikling, brugerkommunikation og patienthåndtering. Det gør, at den gode patientoplevelse på hospitalet allerede starter, når patienterne skal parkere.",
  },
  {
    title: "Hotel",
    body: "Den gode hoteloplevelse starter med parkering. En digital parkeringsløsning skruer ned for den administrative byrde, så I kan have fuldt blus på den gode service. \n Optages jeres parkeringspladser af uvedkommende? Er jeres gæster i tvivl om, hvor de må parkere? Fylder parkering for meget i jeres reception? Eller ønsker I at tjene penge på jeres parkeringsfaciliteter? Uanset hvilke udfordringer og ønsker, I har for jeres parkeringsareal, kan vi hjælpe jer. \n \n Vores digitale platform, ParkCare, udgør fundamentet for alle vores digitale løsninger. Med ParkCare kan I skabe plads til jeres gæster, da I får kontrol over, hvem der har ret til at parkere hos jer. Afhængigt af jeres behov, kan vi skabe forskellige tilladelser og opdele jeres parkeringsareal, så der både er plads til gæste- og personaleparkering.",
  },
];

export const segmenter2 = [
  {
    title: "Kontor",
    body: "Skal det være nemt for ansatte, kunder og gæster at parkere, og vil I kun bruge minimal tid på parkeringsadministration? Vi tilbyder smarte og nemme parkeringsløsninger, og vi kan sikre udvalgte pladser til medarbejdere, kunder og gæster. Med en løsning hos os får i bl.a.: \n \n - Mindre parkeringsadministration \n - Øget medarbejdertilfredshed \n - Større overblik over hvem, der parkerer på parkeringsområdet \n - Optimal fordeling og prioritering af p-pladserne blandt medarbejdere, kunder og gæster \n - Nem digital registrering af ansatte og besøgende",
    image: "",
    altText: "",
  },
  {
    title: "Lufthavn",
    body: "Kunderejsen gennem et besøg til lufthavnen begynder og slutter for mange med en parkeringsoplevelse. Parkering skal være nemt, hurtigt og smidigt; lige fra booking og betaling til navigering i parkeringsfaciliteterne og til at finde en ledig p-plads. Med vores parkeringsløsninger sikrer I en optimal udnyttelse af jeres parkeringsfaciliteter og en god oplevelse for rejsende. Vores løsninger kan håndtere mange forskellige brugertyper, lige fra rejsende til taxer. \n \n Uanset om rejsende vælger en p-plads tæt på terminalen eller lidt længere væk, skal parkering være så nemt, bekvemmeligt og trygt som muligt. Vores software og hardware giver jer mulighed for at implementere komplekse takststrukturer for rejsende på alt lige fra dags- til flermånedsturer. Med vores digitale parkeringsløsninger får rejsende flere muligheder for at betale for parkering uden at skulle bekymre sig om at miste en fysisk p-billet og stresse over parkering. Rejsende har desuden mulighed for at betale for parkering online, så de ikke skal forholde sig til parkering lige inden afrejse. Det frigiver tid, som de f.eks. kan bruge på shopping i lufthavnen.",
  },
  {
    title: "Shopping",
    body: "Som shoppingcenter lever I af at skabe gode oplevelser for jeres kunder. Parkeringsfaciliteterne ved shoppingcentre efterlader det første og sidste indtryk hos kunder i den samlede oplevelse. Derfor er det vigtigt for forretningen, at jeres kunder har en positiv parkeringsoplevelse. \n \n Vi tilbyder mange forskellige løsninger, men til shoppingcentre anvender vi i langt de fleste tilfælde nummerpladegenkendelsesteknologier kombineret med intelligent software til automatisk at registrere jeres kunder ved indkørsel. \n \n ANPR (automatisk nummerpladeregistrering) er en højteknologisk parkeringsløsning, der fjerner behovet for bomme, fysiske billetter og parkeringskort, som besværliggør parkeringsrejsen for brugere af parkeringsanlæg. Når kunder kører ind og ud af parkeringsanlægget, registreres deres køretøjers registreringsnumre automatisk. Det sker ved hjælp af kameraer ved ind- og udkørsel, som scanner registreringsnumrene.",
  },
  {
    title: "Uddannelse",
    body: 'Vores brugervenlige og tidsbesparende parkeringsløsninger gør det nemt og bekvemt for studerende, ansatte og besøgende på uddannelsesinstitutioner at parkere. Vi sikrer overblikket og styringen af den store volumen af køretøjer og sørger for, at de, der skal parkere, nemt har mulighed for det. Vi tilbyder smarte og fleksible parkeringsløsninger, som blandt andet giver mulighed for, at studerende og andre besøgende kan modtage digitale p-tilladelser allerede inden de starter på studiet eller kommer på besøg. \n \n Med vores digitale p-tilladelsessystem, ParkCare, kan vi nemt håndtere p-tilladelser til dem, I ønsker, skal kunne anvende jeres parkeringsområde. Med ParkCare er det muligt at udstede og håndtere "permanente" p-tilladelser til studerende og ansatte, som skal parkere fast på parkeringsområdet. \n \n Derudover kan ParkCare håndtere integrationer op mod jeres systemer. Dette gør det bl.a. muligt for studerende og ansatte at registrere deres parkering via jeres intranet, Lectio eller andre systemer.',
  },
];

export const subscriptions = [
  {
    category: "basis",
    vehicle: "Personbil",
    type: "Døgnparkering",
    price: 1299,
    buttonSize: "md",
  },
  {
    category: "basis",
    vehicle: "Motorcykel",
    type: "Døgnparkering",
    price: 529,
    buttonSize: "md",
  },
  {
    category: "premium",
    vehicle: "Personbil",
    type: "VIP - Døgnparkering",
    price: 2599,
    buttonSize: "lg",
  },
];
