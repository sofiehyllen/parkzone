import ContactForm from '../../components/sections/ContactForm';
import ContactInfo from '../../components/sections/ContactInfo';
import PageWrapper from '../../components/wrappers/PageWrapper';
import driver from '../../assets/driver.jpg';
import Doodle7 from '../../components/svg/Doodle7';

export default function KontaktPagePrivat() {
  return (
    <PageWrapper breadcrumb={true}>
      <div className='bg-gray-100 w-full'>
        <div className='grid grid-cols-1 md:grid-cols-2 py-16 px-5 md:px-16 lg:px-32 xl:px-40 w-fit gap-5 mx-auto'>
          <div className='row-span-3'>
            <ContactForm variant='privat' />
          </div>
          <div className='max-w-md rounded-2xl overflow-hidden relative'>
            <div className='absolute bottom-0 -left-16 w-96 sm:w-[120%] sm:bottom-4'>
              <Doodle7 color='#7CC9ED' />
            </div>
            <img src={driver} alt='' />
          </div>
          <ContactInfo variant='privat' />
        </div>
      </div>
    </PageWrapper>
  );
}
