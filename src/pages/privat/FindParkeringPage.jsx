import CitiesMap from '../../components/atoms/CitiesMap';
import FilterButton from '../../components/atoms/FilterButton';
import PageWrapper from '../../components/wrappers/PageWrapper';

export default function FindParkeringPage() {
  return (
    <PageWrapper breadcrumb={true}>
      <div className='flex flex-col items-center sm:px-5 md:px-10'>
        <div className='bg-sky-50 px-5 pb-10 pt-8 w-full mb-20 sm:rounded-xl'>
          <h1 className='font-h1 text-center pb-7'>Find parkering nær dig</h1>
          <p className='font-body-l text-center max-w-screen-md sm:w-4/5 md:px-9 mx-auto'>
            ParkZone har p-pladser i hele Danmark – også en i nærheden af dig.
            Vi udbyder to parkeringsløsninger på tværs af vores
            parkeringsområder, periodeparkering og abonnementsparkering.{' '}
          </p>
        </div>
        <div className='flex'>
          <div>
            <FilterButton
              heading1={'A - E'}
              heading2={'F - J'}
              heading3={'K - O'}
              heading4={'P - Å'}
            />
            <div>
              <CitiesMap />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </PageWrapper>
  );
}
