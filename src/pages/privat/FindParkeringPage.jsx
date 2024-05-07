import CitiesMap from '../../components/atoms/CitiesMap';
import Doodle6 from '../../components/svg/Doodle6';
import PageWrapper from '../../components/wrappers/PageWrapper';

export default function FindParkeringPage() {
  return (
    <PageWrapper breadcrumb={true}>
      <div className='flex flex-col items-center px-5 w-full md:px-10 '>
        <div className='bg-marine-400 px-6 py-10 pb-44 w-full rounded-xl'>
          <div className='relative'>
            <h1 className='font-h1 text-center pb-10 relative z-50 text-white'>
              Find parkering nær dig
            </h1>
            <div>
              <Doodle6
                color='#B3CFF8'
                className='absolute top-14 right-8 w-52'
              />
            </div>
          </div>
          <p className='font-body-h5 text-center max-w-screen-md text-white mx-auto sm:w-4/5 md:px-9 '>
            ParkZone har p-pladser i hele Danmark – også en i nærheden af dig.
            Vi udbyder to parkeringsløsninger på tværs af vores
            parkeringsområder, periodeparkering og abonnementsparkering.
          </p>
        </div>

        <CitiesMap />
      </div>
    </PageWrapper>
  );
}
