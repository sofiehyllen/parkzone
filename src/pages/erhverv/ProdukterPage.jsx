import Tabs from '../../components/sections/Tabs';
import PageWrapper from '../../components/wrappers/PageWrapper';
import talking from '../../assets/talking.jpg';
import Doodle1 from '../../components/svg/Doodle1';
import Doodle6 from '../../components/svg/Doodle6';
import { tabs } from '../../staticData';
import Button from '../../components/buttons/Button';

export default function ProdukterPage() {
  return (
    <PageWrapper breadcrumb={true}>
      <div className='w-full sm:pb-16 md:pt-10'>
        <div className='flex pb-16 px-5 sm:px-10 md:pb-20 md:px-20 3xl:pb-32'>
          <div className='mx-auto'>
            <div className='relative w-fit mx-auto'>
              <h1 className='font-h1 pb-16 text-center z-40 w-fit relative mx-auto max-w-screen-md md:px-14 '>
                Produkter og services tilpasset jeres behov
              </h1>
              <div className='absolute top-24 right-12 w-96 sm:top-16 md:top-16 md:right-20 lg:right-36 xl:right-50'>
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
        <div className='mx-5 pb-16 md:mx-10 relative md:pb-0 lg:mb-16 xl:mx-20 3xl:mx-40'>
          <div className='sm:px-10 md:px-0 md:mr-10 xl:mr-20 3xl:mr-40 '>
            <div className='w-full bg-marine-300 py-12 px-10 rounded-2xl overflow-hidden h-fit relative md:py-14 md:px-10 xl:px-20 xl:py-20'>
              <div className='md:w-1/2 relative z-40 md:pb-0'>
                <h2 className='font-h2 pb-6 text-white lg:pr-3'>
                  Klar til at modtage et uforpligtende tilbud?
                </h2>
                <p className='font-h5  pb-8 text-white pr-12  md:pr-5 lg:pr-10'>
                  Hvis du vil vide, hvordan vi kan hjælpe dig med at designe dit
                  parkeringsområde, så kontakt os i dag og få et uforpligtende
                  tilbud på en løsning til dig.
                </p>
                <Button size={'lg'} variant={'primary'} to='/erhverv/kontakt'>
                  Kontakt os
                </Button>
              </div>
              <div className='absolute top-40 -right-10 h-72 rotate-12 md:w-96 md:h-96 md:top-52 md:-left-28 md:-right-0 md:-rotate-45 xl:top-32 xl:-left-24'>
                <Doodle1 color='#B3CFF8' />
              </div>
            </div>
          </div>
          <div className='hidden md:block absolute right-0 top-14 w-1/2 h-96 lg:h-full '>
            <img
              src={talking}
              alt='Snak i parkeringskælder'
              className='h-full w-full object-cover object-center rounded-2xl '
            />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
