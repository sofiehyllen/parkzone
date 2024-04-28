import HeroCenter from '../../components/hero/HeroCenter';
import PageWrapper from '../../components/wrappers/PageWrapper';
import office from '../../assets/office.jpg';
import Button from '../../components/atoms/Button';

export default function OmOsPage() {
  return (
    <PageWrapper breadcrumb={true}>
      <HeroCenter
        title='Hvem er vi?'
        rubric='Hos ParkZone tilbyder vi brugervenlige løsninger, der forenkler parkering i din dagligdag. 
          Med vores innovative teknologi stræber vi efter at levere førsteklasses parkeringstjenester, 
          der gør parkering til en ubesværet oplevelse for alle.'
        image={office}
        alt={'Kontorfællesskab'}
      />
      <div className='px-5 pt-10 md:px-10 lg:px-32 md:pt-14 3xl:px-52'>
        <div className='flex flex-col items-center justify-center w-full max-w-screen-xl md:flex-row space-y-7 md:space-y-0 md:items-start mx-auto'>
          <div className='flex flex-col items-center px-5 sm:px-10 md:w-1/3 md:px-5'>
            <h4 className='font-h4 pb-4 text-center'>Søger du nyt job?</h4>
            <p className='font-body-s text-center'>
              Hos ParkZone er vi lige nu på jagt efter dygtige og engagerede
              kollegaer til vores team. Måske er det dig? Se vores ledige
              stillinger{' '}
              <span>
                <Button variant='link' size='md'>
                  her
                </Button>
                .
              </span>
            </p>
          </div>
          <div className='flex flex-col items-center px-5 sm:px-10 md:w-1/3 md:px-5'>
            <h4 className='font-h4 pb-4 text-center'>
              Vores persondatapolitik
            </h4>
            <p className='font-body-s text-center'>
              Din sikkerhed er vores topprioritet. Derfor passer vi på dine data
              med omhu. Læs vores{' '}
              <Button variant='link' size='md'>
                Persondatapolitik
              </Button>{' '}
              for at få mere at vide om, hvordan vi beskytter dine oplysninger.
            </p>
          </div>
          <div className='flex flex-col items-center px-5 sm:px-10 md:w-1/3 md:px-5'>
            <h4 className='font-h4 pb-4 text-center'>
              Har du nogle spørgsmål?
            </h4>
            <p className='font-body-s text-center'>
              Vi ved parkeringsregler kan være forvirrende. Derfor har vi svaret
              på nogle af de spørgsmål man som kunde ofte kan sidde med. <br />{' '}
              Læs dem{' '}
              <Button variant='link' size='md'>
                her
              </Button>
              .
            </p>
          </div>
        </div>
      </div>

      <div className='flex flex-col pt-20 px-5 sm:px-10 md:flex-row md:space-x-5 lg:space-x-20 lg:px-32 max-w-screen-xl mx-auto'>
        <div className='md:w-1/2'>
          <h3 className='font-h3 pb-6'>ParkZone som virksomhed</h3>
          <p className='font-body-md'>
            ParkZone er et danskejet parkeringsselskab med fokus på digitale
            parkeringsløsninger og med stærke kompetencer inden for
            parkeringsadministration, parkeringskontrol og rådgivning. ParkZone
            blev stiftet i 2003. Med en daglig administration af ca. 180.000
            p-pladser fordelt over hele landet er vi et af de førende
            parkeringsselskaber i Danmark.
          </p>
          <p className='font-body-md pt-6'>
            Vi tilbyder innovative og fleksible parkeringsløsninger, der tager
            udgangspunkt i vores kunders unikke behov. Parkering skal være nemt,
            og det ligger i forlængelse af vores vision om at skabe de bedste
            parkeringsoplevelser, der letter hverdagen for den enkelte.
          </p>
        </div>
        <div className='pt-10 md:pt-0 md:w-1/2'>
          <h3 className='font-h3 pb-6'>Vi skaber plads</h3>
          <p className='font-body-md'>
            Vores slogan, <span className='font-normal'>Vi skaber plads</span>,
            er kernen i vores arbejde. Vi skaber plads til, at de, der skal
            parkere, har mulighed for det. Vi skaber plads til, at vores
            samarbejdspartnere kan fokusere på andet end
            parkeringsadministration.
          </p>
          <p className='font-body-md pt-6'>
            Med de mest innovative og kundevenlige parkeringsløsninger på
            markedet sikrer vi en effektiv administration af jeres område. Det
            frigiver tid til, at vores samarbejdspartnere kan fokusere på deres
            kernekompetencer. Det sikrer, at brugerne af vores pladser nemt kan
            parkere.
          </p>
        </div>
      </div>
      <div className='pt-20 px-5 2xl:px-0 max-w-screen-2xl mx-auto'>
        <h2 className='font-h2 text-center pb-4'>Vores kerneværdier</h2>
        <p className='font-body-l text-center pb-8 sm:px-10 max-w-screen-md mx-auto'>
          Alle vores medarbejdere arbejder ud fra det samme værdisæt.
          Værdisættet udtrykker, hvad vi forventer af hinanden som kollegaer i
          ParkZone, og hvad vores omverden kan forvente af os.
        </p>
        <div className='grid grid-cols-1 gap-y-10 gap-x-10 px-5 sm:grid-cols-2 lg:grid-cols-6 2xl:grid-cols-10'>
          <div className='flex flex-col items-center lg:col-span-2 max-w-80 mx-auto'>
            <div className='h-16 w-16 bg-gray-400 rounded-md '></div>
            <h3 className='font-h3 py-3'>Passion</h3>
            <p className='font-body-md text-center'>
              Hos ParkZone er vi passionerede omkring vores arbejde, og vi
              brænder for at levere den bedste service og produkter til vores
              kunder.
            </p>
          </div>
          <div className='flex flex-col items-center lg:col-span-2 max-w-80 mx-auto'>
            <div className='h-16 w-16 bg-gray-400 rounded-md'></div>
            <h3 className='font-h3 py-3'>Servicemindet</h3>
            <p className='font-body-md text-center'>
              Kundeservice er en prioritet for os, og vi sørger altid for, at
              hver enkelt løsning er tilpasset hver enkelt kundes behov.
            </p>
          </div>
          <div className='flex flex-col items-center lg:col-span-2 max-w-80 mx-auto'>
            <div className='h-16 w-16 bg-gray-400 rounded-md'></div>
            <h3 className='font-h3 py-3'>Løsningsorienteret</h3>
            <p className='font-body-md text-center'>
              Vi fokuserer hver dag på at finde og implementerer de mest
              effektive løsninger, og vi tror på, at det gør en forskel for
              vores kunder.
            </p>
          </div>
          <div className='flex flex-col items-center lg:col-span-3 lg:w-2/3 lg:justify-self-end max-w-80 2xl:col-span-2 2xl:w-full'>
            <div className='h-16 w-16 bg-gray-400 rounded-md'></div>
            <h3 className='font-h3 py-3'>Ansvar</h3>
            <p className='font-body-md text-center'>
              Vi tager ansvar for vores handlinger og forpligter os til at
              handle med omhu og professionalisme.
            </p>
          </div>
          <div className='flex flex-col items-center sm:col-span-2 sm:w-1/2 sm:mx-auto lg:col-span-3 lg:w-2/3 lg:mx-0 max-w-80 2xl:col-span-2 2xl:w-full'>
            <div className='h-16 w-16 bg-gray-400 rounded-md'></div>
            <h3 className='font-h3 py-3'>Innovation</h3>
            <p className='font-body-md text-center'>
              Vi er dedikerede til konstant at innovere og introducere nye og
              forbedrede produkter og tjenester på markedet, så vi altid holder
              os opdaterede.
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
