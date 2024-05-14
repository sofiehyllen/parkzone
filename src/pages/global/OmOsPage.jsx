import PageWrapper from '../../components/wrappers/PageWrapper';
import office from '../../assets/office.jpg';
import Button from '../../components/buttons/Button';
import ImageWrapper from '../../components/wrappers/ImageWrapper';
import { FaRegHeart } from 'react-icons/fa6';
import { PiHandHeartBold } from 'react-icons/pi';
import { IoBulbOutline } from 'react-icons/io5';
import { FaRegHandshake } from 'react-icons/fa6';
import { PiGearSixBold } from 'react-icons/pi';
import Doodle1 from '../../components/svg/Doodle1';
import Doodle2 from '../../components/svg/Doodle2';

export default function OmOsPage() {
  return (
    <PageWrapper breadcrumb={true}>
      <div className='flex flex-col items-center w-fit mx-auto px-5 sm:px-10 lg:px-20'>
        <h1 className='font-h1'>Hvem er vi?</h1>
        <p className='font-body-l pt-6 pb-10 text-center max-w-screen-md sm:w-4/5 xl:pb-20'>
          Hos ParkZone tilbyder vi brugervenlige løsninger, der forenkler
          parkering i din dagligdag. Med vores innovative teknologi stræber vi
          efter at levere førsteklasses parkeringstjenester, der gør parkering
          til en ubesværet oplevelse for alle.
        </p>
        <ImageWrapper
          color='#7AA9EF'
          alt='Kontorfællesskab'
          image={office}
          size='lg'
        />
      </div>
      <div className='px-14 pt-10 max-w-screen-xl mx-auto sm:px-36 md:px-10 md:pt-5 lg:px-12'>
        <div className='flex flex-col items-center justify-center w-full max-w-screen-xl pt-5 md:flex-row space-y-7 md:space-y-0 md:items-start mx-auto'>
          <div className='flex flex-col items-center sm:px-10 md:w-full md:px-5 md:pl-0 xl:px-10'>
            <h4 className='font-h4 pb-4 text-center'>Søger du nyt job?</h4>
            <p className='font-body-md text-center hyphens-auto'>
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
          <div className='flex flex-col items-center py-4 sm:py-8 sm:px-10 md:py-0 md:w-full md:px-5 xl:px-10'>
            <h4 className='font-h4 pb-4 text-center'>
              Vores persondatapolitik
            </h4>
            <p className='font-body-md text-center hyphens-auto'>
              Din sikkerhed er vores topprioritet. Derfor passer vi på dine data
              med omhu. Læs vores{' '}
              <Button variant='link' size='md'>
                Persondatapolitik
              </Button>{' '}
              for at få mere at vide om, hvordan vi beskytter dine oplysninger.
            </p>
          </div>
          <div className='flex flex-col items-center sm:px-10 md:w-full md:px-5 md:pr-0 xl:px-10'>
            <h4 className='font-h4 pb-4 text-center'>
              Har du nogle spørgsmål?
            </h4>
            <p className='font-body-md text-center hyphens-auto'>
              Vi ved parkeringsregler kan være forvirrende. Derfor har vi svaret
              på nogle af de spørgsmål man som kunde ofte kan sidde med. Læs dem{' '}
              <Button variant='link' size='md'>
                her
              </Button>
              .
            </p>
          </div>
        </div>
      </div>

      <div className='flex flex-col mt-20 px-7 py-8 mx-5 bg-marine-50 rounded-xl relative overflow-hidden sm:px-12 sm:py-14 lg:flex-row lg:space-x-12 lg:px-16 lg:mx-10 xl:mx-20 xl:mt-28 max-w-screen-3xl 3xl:px-20 3xl:space-x-20 2xl:mx-auto'>
        <div className='w-full relative z-40'>
          <h3 className='font-h2 pb-6 lg:pb-10'>Vores virksomhed</h3>
          <p className='font-body-l text-justify hyphens-auto'>
            ParkZone er et danskejet parkeringsselskab med fokus på digitale
            parkeringsløsninger og med stærke kompetencer inden for
            parkeringsadministration, parkeringskontrol og rådgivning. ParkZone
            blev stiftet i 2003. Med en daglig administration af ca. 180.000
            p-pladser fordelt over hele landet er vi et af de førende
            parkeringsselskaber i Danmark.
          </p>
          <p className='font-body-l pt-6 text-justify hyphens-auto'>
            Vi tilbyder innovative og fleksible parkeringsløsninger, der tager
            udgangspunkt i vores kunders unikke behov. Parkering skal være nemt,
            og det ligger i forlængelse af vores vision om at skabe de bedste
            parkeringsoplevelser, der letter hverdagen for den enkelte.
          </p>
        </div>
        <div className='pt-14 lg:pt-0 md:w-full relative z-40'>
          <h3 className='font-h2 pb-6 lg:pb-10'>Vi skaber plads</h3>
          <p className='font-body-l text-justify hyphens-auto'>
            Vores slogan, <span className='font-normal'>Vi skaber plads</span>,
            er kernen i vores arbejde. Vi skaber plads til, at de, der skal
            parkere, har mulighed for det. Vi skaber plads til, at vores
            samarbejdspartnere kan fokusere på andet end
            parkeringsadministration.
          </p>
          <p className='font-body-l text-justify hyphens-auto pt-6'>
            Med de mest innovative og kundevenlige parkeringsløsninger på
            markedet sikrer vi en effektiv administration af jeres område. Det
            frigiver tid til, at vores samarbejdspartnere kan fokusere på deres
            kernekompetencer. Det sikrer, at brugerne af vores pladser nemt kan
            parkere.
          </p>
        </div>
        <div className='absolute top-20 -right-10 rotate-12 sm:scale-150 md: md: md:-right-0 md:-rotate-45 lg:w-1/2 lg:-top-40 xl:-top-40 xl:-left-20 2xl:scale-180 2xl:-left-0'>
          <Doodle1 color='#DBE9FD' />
        </div>
        <div className='absolute -bottom-28 -left-10 -rotate-12 sm:scale-150 md:-bottom-40 md:-rotate-120 md:left-0 lg:-left-40 lg: xl:-left-0 xl:right-52 xl:bottom-52 xl:scale-180 2xl:bottom-96'>
          <Doodle2 color='#DBE9FD' />
        </div>
      </div>
      <div className='pt-20 px-5 2xl:px-0 md:pt-32 max-w-screen-3xl mx-auto'>
        <h2 className='font-h2 text-center pb-4 '>Vores kerneværdier</h2>
        <p className='font-body-l text-center hyphens-auto sm:px-20 max-w-screen-md mx-auto'>
          Alle vores medarbejdere arbejder ud fra det samme værdisæt.
          Værdisættet udtrykker, hvad vi forventer af hinanden som kollegaer i
          ParkZone, og hvad vores omverden kan forvente af os.
        </p>
        <div className='grid grid-cols-1 gap-y-12 gap-x-10 px-8 py-10 pb-16 sm:grid-cols-2 lg:grid-cols-6 xl:pb-28 3xl:grid-cols-5 3xl:px-0'>
          <div className='flex flex-col items-center lg:col-span-2 max-w-96 mx-auto md:px-5 3xl:col-span-1'>
            <div className='p-4 rounded-full bg-sky-100 '>
              <FaRegHeart className='h-8 w-8 text-marine-400' />
            </div>
            <h3 className='font-h3 py-3'>Passion</h3>
            <p className='font-body-md text-center'>
              Hos ParkZone er vi passionerede omkring vores arbejde, og vi
              brænder for at levere den bedste service og produkter til vores
              kunder.
            </p>
          </div>
          <div className='flex flex-col items-center lg:col-span-2 max-w-96 mx-auto md:px-5 3xl:col-span-1'>
            <div className='p-4 rounded-full bg-sky-100 '>
              <PiHandHeartBold className='h-8 w-8 text-marine-400' />
            </div>
            <h3 className='font-h3 py-3'>Servicemindet</h3>
            <p className='font-body-md text-center'>
              Kundeservice er en prioritet for os, og vi sørger altid for, at
              hver enkelt løsning er tilpasset hver enkelt kundes behov.
            </p>
          </div>
          <div className='flex flex-col items-center lg:col-span-2 max-w-96 mx-auto md:px-5 3xl:col-span-1'>
            <div className='p-3 rounded-full bg-sky-100 '>
              <IoBulbOutline
                strokeWidth={1}
                className='h-10 w-10 text-marine-400'
              />
            </div>
            <h3 className='font-h3 py-3'>Løsningsorienteret</h3>
            <p className='font-body-md text-center'>
              Vi fokuserer hver dag på at finde og implementerer de mest
              effektive løsninger, og vi tror på, at det gør en forskel for
              vores kunder.
            </p>
          </div>
          <div className='flex flex-col items-center md:px-7 lg:col-span-3 lg:w-2/3 lg:justify-self-end max-w-96 3xl:col-span-1 3xl:w-full 3xl:pr-0 4xl:pl-16'>
            <div className='p-4 rounded-full bg-sky-100 '>
              <FaRegHandshake className='h-8 w-8 text-marine-400' />
            </div>
            <h3 className='font-h3 py-3'>Ansvar</h3>
            <p className='font-body-md text-center'>
              Vi tager ansvar for vores handlinger og forpligter os til at
              handle med omhu og professionalisme.
            </p>
          </div>
          <div className='flex flex-col items-center sm:col-span-2 sm:w-1/2 sm:mx-auto md:px-5 lg:col-span-3 lg:w-2/3 lg:mx-0 max-w-96 xl:px-4 3xl:col-span-1 3xl:w-full 3xl:px-0'>
            <div className='p-4 rounded-full bg-sky-100 '>
              <PiGearSixBold className='h-8 w-8 text-marine-400' />
            </div>
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
