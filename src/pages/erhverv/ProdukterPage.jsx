import Tabs from '../../components/sections/Tabs';
import PageWrapper from '../../components/wrappers/PageWrapper';

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
        title: 'Opmærkning',
        subtitle:
          'Med automatisk kameraparkering får I mulighed for at tilbyde en fremtidssikret parkering, der aldrig har været nemmere. Det giver et bedre flow ved ind- og udkørsel, der gør parkeringsrejsen enklere, og I kan tilbyde flere fleksible betalingsmuligheder. Løsningen fungerer via et ANPR-system (automatisk nummerpladeregistrering), der ved hjælp af kameraer kan bringe jeres parkeringsareal ind i den digitale tidsalder. Her kan I vinke farvel til bomme, fysiske p-billetter og parkeringskort som besværliggør parkeringsrejsen. Når jeres besøgende kører ind og ud af parkeringsanlægget, bliver deres køretøj automatisk registreret af et kamera. Jeres besøgende kommer derfor kun til at betale for præcis den tid, de har parkeret.',
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
      <div className='max-w-screen-3xl mx-auto'>
        <div className='flex pb-20 px-20'>
          <div className='w-1/2'>
            <h4 className='font-h4 text-pumpkin-500 pb-1 pl-1'>
              Produkter & services
            </h4>
            <h1 className='font-h1 pb-7'>
              Produkter og services tilpasset dine behov
            </h1>
            <p className='font-body-l pb-6'>
              Vores parkeringsløsninger er udviklet i et tæt samarbejde med vores
              kunder for at imødekomme deres unikke behov. Vi har løbende udvidet
              vores produktportefølje for at skabe merværdi for vores kunder -
              senest med facility service, sikkerhedsvagter samt brandsikring,
              førstehjælp og hjertestartere.
            </p>
            <p className='font-body-l'>
              Vores team hjælper jer med at afdække jeres behov og sammensætte den
              løsning, der skaber mest værdi for jer og jeres parkerende. Læs om
              alle produkter og services vi tilbyder herunder.
            </p>
          </div>
        </div>
        <Tabs tabs={tabs} />
      </div>
    </PageWrapper>
  );
}
