import Accordion from '../../components/atoms/Accordion';
import Doodle7 from '../../components/svg/Doodle7';
import PageWrapper from '../../components/wrappers/PageWrapper';
import { FAQ1, FAQ2 } from '../../staticData';

export default function FAQPage() {
  return (
    <PageWrapper breadcrumb={true}>
      <div className='w-full bg-marine-800 relative overflow-hidden'>
        <h1 className='font-h1 text-white text-center py-20 px-10 relative z-50'>
          Hvordan kan vi hjælpe dig?
        </h1>
        <div className='absolute bottom-4 -left-32 w-[180%] sm:scale-150 sm:w-9/12 sm:left-20 md:bottom-0 xl:left-36 2xl:left-40'>
          <Doodle7 color='#0D6A9E' />
        </div>
      </div>
      <div className='bg-gray-100 px-5 py-10 w-full sm:px-16 md:px-24 lg:flex lg:px-20 lg:space-x-5 xl:px-32 2xl:px-40 3xl:px-72'>
        <div className='grid grid-cols-1 h-min w-full'>
          {FAQ1.map((FAQ1, index) => (
            <div key={index} className='w-full flex justify-center'>
              <Accordion title={FAQ1.title} body={FAQ1.body} />
            </div>
          ))}
        </div>
        <div className='grid grid-cols-1 h-min w-full'>
          {FAQ2.map((FAQ2, index) => (
            <div key={index} className='w-full flex justify-center'>
              <Accordion title={FAQ2.title} body={FAQ2.body} />
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
