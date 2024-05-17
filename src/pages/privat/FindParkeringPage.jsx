import CitiesMap from '../../components/sections/CitiesMap';
import Doodle6 from '../../components/svg/Doodle6';
import Doodle1 from '../../components/svg/Doodle1';
import Doodle2 from '../../components/svg/Doodle2';

import PageWrapper from '../../components/wrappers/PageWrapper';

export default function FindParkeringPage() {
  return (
    <PageWrapper breadcrumb={true}>
      <div className='flex flex-col items-center px-5 w-full md:px-10 relative'>
        <div className='bg-sky-100 px-6 py-10 pb-44 w-full overflow-hidden rounded-xl sm:pt-20 max-w-screen-3xl'>
          <div className='relative w-fit mx-auto'>
            <h1 className='font-h1 text-center pb-10 relative z-40  sm:px-10'>
              Find parkering nær dig
            </h1>
            <div>
              <Doodle6
                color='#BBE2F7'
                className='absolute top-14 right-9 w-48 sm:top-8 sm:right-0 md:w-52 md:h-auto 3xl:w-72 3xl:top-6 3xl:-right-5'
              />
            </div>
            <div className='absolute rotate-45 -right-10 lg:-right-40 lg:scale-125 xl:-right-72 2xl:scale-150 3xl:-right-96'>
              <Doodle1 color='#BBE2F7' />
            </div>
            <div className='absolute -rotate-45 -left-40 hidden sm:block lg:-left-60 xl:-left-80 xl:scale-125 2xl:-left-96 2xl:scale-150'>
              <Doodle2 color='#BBE2F7' />
            </div>
          </div>
          <p className='font-body-h5 text-center max-w-screen-md  mx-auto relative z-40 sm:w-4/5 md:px-9'>
            ParkZone har p-pladser i hele Danmark – også en i nærheden af dig.
            På siden for de enkelte områder kan du bl.a. få information omkring
            priser, se områdets faciliteter, samt booke din næste parkering.
          </p>
        </div>
        <div className='absolute z-40 top-72 pt-5 sm:top-60 md:w-full md:px-20 lg:px-40 xl:px-52'>
          <CitiesMap />
        </div>
      </div>
    </PageWrapper>
  );
}
