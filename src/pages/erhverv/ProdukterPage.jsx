import Button from '../../components/atoms/Button';
import Tabs from '../../components/sections/Tabs';
import PageWrapper from '../../components/wrappers/PageWrapper';
import familieplads from '../../assets/familieplads.jpg';
import talking from '../../assets/talking.jpg';
import ImageWrapper from '../../components/wrappers/ImageWrapper';
import Doodle1 from '../../components/svg/Doodle1';
import Doodle6 from '../../components/svg/Doodle6';

export default function ProdukterPage() {
  const tabs = [
    {
      title: 'ANPR',
      content: {
        title: 'ANPR',
        subtitle:
          'Med automatisk kameraparkering får I mulighed for at tilbyde en fremtidssikret parkering, der aldrig har været nemmere. Det giver et bedre flow ved ind- og udkørsel, der gør parkeringsrejsen enklere, og I kan tilbyde flere fleksible betalingsmuligheder. Løsningen fungerer via et ANPR-system (automatisk nummerpladeregistrering), der ved hjælp af kameraer kan bringe jeres parkeringsareal ind i den digitale tidsalder. Her kan I vinke farvel til bomme, fysiske p-billetter og parkeringskort som besværliggør parkeringsrejsen. Når jeres besøgende kører ind og ud af parkeringsanlægget, bliver deres køretøj automatisk registreret af et kamera. Jeres besøgende kommer derfor kun til at betale for præcis den tid, de har parkeret.',
      },
    },
    {
      title: 'Betalingsparkering',
      content: {
        title: 'Betalingsparkering',
        subtitle:
          'Med automatisk kameraparkering får I mulighed for at tilbyde en fremtidssikret parkering, der aldrig har været nemmere. Det giver et bedre flow ved ind- og udkørsel, der gør parkeringsrejsen enklere, og I kan tilbyde flere fleksible betalingsmuligheder. Løsningen fungerer via et ANPR-system (automatisk nummerpladeregistrering), der ved hjælp af kameraer kan bringe jeres parkeringsareal ind i den digitale tidsalder. Her kan I vinke farvel til bomme, fysiske p-billetter og parkeringskort som besværliggør parkeringsrejsen. Når jeres besøgende kører ind og ud af parkeringsanlægget, bliver deres køretøj automatisk registreret af et kamera. Jeres besøgende kommer derfor kun til at betale for præcis den tid, de har parkeret.',
      },
    },
    {
      title: 'Digitale tilladelser',
      content: {
        title: 'Digitale tilladelser',
        subtitle:
          'Vil I sikre, at der er ledige pladser til bestemte grupper af mennesker på jeres parkeringsområde? Så er udstedelse af digitale p-tilladelser måske løsningen. Med vores p-tilladelsessystem kan I få kontrol over, hvem der har ret til at parkere på parkeringsområdet. Vi har erstattet størstedelen af vores fysiske p-tilladelser med digitale p-tilladelser, da det gør parkeringen let og fleksibel. P-tilladelserne administreres gennem vores digitale p-tilladelsessystem ParkCare, som benyttes af over 100.000 brugere i hele Danmark.',
      },
    },
    {
      title: 'Ladestandere',
      content: {
        title: 'Ladestandere',
        subtitle:
          'Med automatisk kameraparkering får I mulighed for at tilbyde en fremtidssikret parkering, der aldrig har været nemmere. Det giver et bedre flow ved ind- og udkørsel, der gør parkeringsrejsen enklere, og I kan tilbyde flere fleksible betalingsmuligheder. Løsningen fungerer via et ANPR-system (automatisk nummerpladeregistrering), der ved hjælp af kameraer kan bringe jeres parkeringsareal ind i den digitale tidsalder. Her kan I vinke farvel til bomme, fysiske p-billetter og parkeringskort som besværliggør parkeringsrejsen. Når jeres besøgende kører ind og ud af parkeringsanlægget, bliver deres køretøj automatisk registreret af et kamera. Jeres besøgende kommer derfor kun til at betale for præcis den tid, de har parkeret.',
      },
    },
    {
      title: 'Opmærkning',
      content: {
        title: 'Opmærkning & optimering',
        subtitle:
          'En indbydende parkeringsplads skaber et godt førstehåndsindtryk og gør det nemt for jeres besøgende at parkere korrekt. Med udgangspunkt i jeres ønsker og behov analyserer vi jeres parkeringsareal samt jeres besøgende og deres besøgsadfærd. For at skabe plads til jeres forskellige besøgende kan vi inddele jeres område i zoner og tydeliggøre hvor der er reserverede pladser, handikapparkering samt ladepladser. Dermed kan du tilgodese udvalgte brugere og sikre, at der altid er plads til at dine medarbejdere eller kunder.',
        boxText1: 'Vi optegner både symboler, fartbumb, fodgængerfelt,  mm.',
        boxText2: 'Vi reparerer både huller og revner i asfalt',
        boxText3: 'Vi hjælper jer med en smart indretning af jeres område',
        image: familieplads,
        altText: 'Parkeringsplads',
        heading1: 'Professionel rådgivning og tilpassede løsninger',
        subheading1:
          'Vi optegner både p-pladser, kørebaner, streger og symboler mm. og kan afmærke i mange forskellige farver. Vi kan afmærke båse, gangarealer eller cykelstier for at skabe tryghed og for at sikre, at uvedkommende ikke parkerer på handikap- eller ladepladser ved en fejl.',
        smallTitle1: 'Høj standard',
        bodyText1:
          'Vi anvender både højtrykssprøjtemaling og termoplast og kan opmærke på næsten alle underlag. Vi tilpasser vores materialevalg ud fra den forventede trafik - kundeparkering sætter f.eks. andre krav til opmærkning end beboelse, da der ofte er et langt højere udskift af biler.',
        smallTitle2: 'Fremtidssikring af dit parkeringsareal',
        bodyText2:
          'Vores rådgivere hjælper jer med at afdække jeres nuværende behov samt jeres ønsker for fremtiden. Så hvis I ikke har parkeringsopsyn på jeres plads i dag, sørger vi for at jeres plads er klar til det. Ligeledes kan vi også hjælpe jer med at indføre betalingsparkering samt at udleje parkeringspladser.',
        heading2: 'Serviceaftale',
        subheading2:
          'Hvis du er interesseret i løbende at få vedligeholdt dit parkeringsområde, kan en serviceaftale være løsningen. Vi tilbyder en serviceaftale, hvor vi efterser og udbedrer små skader på parkeringsanlægget, inden de udvikler sig til store og dyre reparationer. Vi opmærker og reparerer også løbende, når dit anlæg trænger til det.',
      },
    },
    {
      title: 'Opsyn med pladser',
      content: {
        title: 'Opsyn med pladser',
        subtitle:
          'Med automatisk kameraparkering får I mulighed for at tilbyde en fremtidssikret parkering, der aldrig har været nemmere. Det giver et bedre flow ved ind- og udkørsel, der gør parkeringsrejsen enklere, og I kan tilbyde flere fleksible betalingsmuligheder. Løsningen fungerer via et ANPR-system (automatisk nummerpladeregistrering), der ved hjælp af kameraer kan bringe jeres parkeringsareal ind i den digitale tidsalder. Her kan I vinke farvel til bomme, fysiske p-billetter og parkeringskort som besværliggør parkeringsrejsen. Når jeres besøgende kører ind og ud af parkeringsanlægget, bliver deres køretøj automatisk registreret af et kamera. Jeres besøgende kommer derfor kun til at betale for præcis den tid, de har parkeret.',
      },
    },
    {
      title: 'Parkeringsadministration',
      content: {
        title: 'Parkeringsadministration',
        subtitle:
          'Med automatisk kameraparkering får I mulighed for at tilbyde en fremtidssikret parkering, der aldrig har været nemmere. Det giver et bedre flow ved ind- og udkørsel, der gør parkeringsrejsen enklere, og I kan tilbyde flere fleksible betalingsmuligheder. Løsningen fungerer via et ANPR-system (automatisk nummerpladeregistrering), der ved hjælp af kameraer kan bringe jeres parkeringsareal ind i den digitale tidsalder. Her kan I vinke farvel til bomme, fysiske p-billetter og parkeringskort som besværliggør parkeringsrejsen. Når jeres besøgende kører ind og ud af parkeringsanlægget, bliver deres køretøj automatisk registreret af et kamera. Jeres besøgende kommer derfor kun til at betale for præcis den tid, de har parkeret.',
      },
    },
    {
      title: 'Rådgivning',
      content: {
        title: 'Rådgivning',
        subtitle:
          'Med automatisk kameraparkering får I mulighed for at tilbyde en fremtidssikret parkering, der aldrig har været nemmere. Det giver et bedre flow ved ind- og udkørsel, der gør parkeringsrejsen enklere, og I kan tilbyde flere fleksible betalingsmuligheder. Løsningen fungerer via et ANPR-system (automatisk nummerpladeregistrering), der ved hjælp af kameraer kan bringe jeres parkeringsareal ind i den digitale tidsalder. Her kan I vinke farvel til bomme, fysiske p-billetter og parkeringskort som besværliggør parkeringsrejsen. Når jeres besøgende kører ind og ud af parkeringsanlægget, bliver deres køretøj automatisk registreret af et kamera. Jeres besøgende kommer derfor kun til at betale for præcis den tid, de har parkeret.',
      },
    },
    {
      title: 'Skiltning',
      content: {
        title: 'Skiltning',
        subtitle:
          'Med automatisk kameraparkering får I mulighed for at tilbyde en fremtidssikret parkering, der aldrig har været nemmere. Det giver et bedre flow ved ind- og udkørsel, der gør parkeringsrejsen enklere, og I kan tilbyde flere fleksible betalingsmuligheder. Løsningen fungerer via et ANPR-system (automatisk nummerpladeregistrering), der ved hjælp af kameraer kan bringe jeres parkeringsareal ind i den digitale tidsalder. Her kan I vinke farvel til bomme, fysiske p-billetter og parkeringskort som besværliggør parkeringsrejsen. Når jeres besøgende kører ind og ud af parkeringsanlægget, bliver deres køretøj automatisk registreret af et kamera. Jeres besøgende kommer derfor kun til at betale for præcis den tid, de har parkeret.',
      },
    },
    {
      title: 'Udlejning af pladser',
      content: {
        title: 'Udlejning af pladser',
        subtitle:
          'Med automatisk kameraparkering får I mulighed for at tilbyde en fremtidssikret parkering, der aldrig har været nemmere. Det giver et bedre flow ved ind- og udkørsel, der gør parkeringsrejsen enklere, og I kan tilbyde flere fleksible betalingsmuligheder. Løsningen fungerer via et ANPR-system (automatisk nummerpladeregistrering), der ved hjælp af kameraer kan bringe jeres parkeringsareal ind i den digitale tidsalder. Her kan I vinke farvel til bomme, fysiske p-billetter og parkeringskort som besværliggør parkeringsrejsen. Når jeres besøgende kører ind og ud af parkeringsanlægget, bliver deres køretøj automatisk registreret af et kamera. Jeres besøgende kommer derfor kun til at betale for præcis den tid, de har parkeret.',
      },
    },
  ];
  return (
    <PageWrapper breadcrumb={true}>
      <div className='w-full sm:pb-16 md:pt-10'>
        <div className='flex pb-16 px-5 sm:px-10 md:pb-20 md:px-20 3xl:pb-32'>
          <div className='mx-auto'>
            <div className='relative w-fit mx-auto'>
              <h1 className='font-h1 pb-16 text-center z-50 w-fit relative mx-auto max-w-screen-md md:px-14 '>
                Produkter og services tilpasset jeres behov
              </h1>
              <div className='absolute top-28 right-12 w-96 sm:top-16 md:top-16 md:right-20 lg:right-36 xl:right-50'>
                <Doodle6 color='#DBE9FD' />
              </div>
            </div>
            <p className='font-body-l pb-7 text-center max-w-screen-lg mx-auto xl:px-20'>
              Vores parkeringsløsninger er udviklet i et tæt samarbejde med
              vores kunder for at imødekomme deres unikke behov. Vores team
              hjælper jer med at afdække jeres behov og sammensætte den løsning,
              der skaber mest værdi for jer og jeres parkerende. Læs om alle
              produkter og services vi tilbyder herunder.
            </p>
            <p className='font-body-l text-center max-w-screen-lg mx-auto xl:px-20'>
              Vi har løbende udvidet vores produktportefølje for at skabe
              merværdi for vores kunder - senest med facility service,
              sikkerhedsvagter samt brandsikring, førstehjælp og hjertestartere.
              Læs om det, samt vores andre services herunder.
            </p>
          </div>
        </div>
        <Tabs tabs={tabs} />
        <div className='mx-5 pb-36 md:mx-10 relative md:pb-0 xl:mx-20 3xl:mx-40'>
          <div className='md:mr-10 xl:mr-20 3xl:mr-40'>
            <div className='w-full bg-marine-300 py-12 px-10 rounded-2xl overflow-hidden h-fit relative md:py-14 md:px-10 xl:px-20 xl:py-20'>
              <div className='md:w-1/2 relative z-50 pb-28 md:pb-0'>
                <h2 className='font-h2 pb-6 text-white lg:pr-3'>
                  Klar til at modtage et uforpligtende tilbud?
                </h2>
                <p className='font-h5  pb-8 text-white pr-12 md:font-h4 md:text-white md:pr-5 lg:pr-10'>
                  Hvis du vil vide, hvordan vi kan hjælpe dig med at designe dit
                  parkeringsområde, så kontakt os i dag og få et uforpligtende
                  tilbud på en løsning til dig.
                </p>
                <Button size={'lg'} variant={'primary'} to='/erhverv/kontakt'>
                  Kontakt os
                </Button>
              </div>
              <div className='absolute top-64 -right-10 h-72 rotate-12 md:w-96 md:h-96 md:top-52 md:-left-28 md:-right-0 md:-rotate-45 xl:top-32 xl:-left-24'>
                <Doodle1 color='#B3CFF8' />
              </div>
            </div>
          </div>
          <ImageWrapper className='absolute h-60 top-96 mx-10 sm:h-72 sm:top-80 sm:mx-20 md:mx-0 md:top-11 md:right-0 md:w-2/4 md:h-96 lg:h-80'>
            <img
              src={talking}
              alt='Snak i parkeringskælder'
              className='h-full w-full object-cover object-left'
            />
          </ImageWrapper>
        </div>
      </div>
    </PageWrapper>
  );
}
