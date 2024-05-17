import ContactForm from '../../components/sections/ContactForm';
import ContactInfo from '../../components/sections/ContactInfo';
import PageWrapper from '../../components/wrappers/PageWrapper';
import advice from '../../assets/advice.jpg';
import Doodle7 from '../../components/svg/Doodle7';

export default function KontaktPageErhverv() {
  return (
    <PageWrapper breadcrumb={true}>
      <div className='bg-marine-50 w-full'>
        <div className='grid grid-cols-1 md:grid-cols-2 py-16 px-5 md:px-16 lg:px-32 xl:px-40 w-fit gap-5 mx-auto'>
          <div className='row-span-3'>
            <ContactForm variant='erhverv' />
          </div>
          <div className='max-w-md rounded-2xl overflow-hidden relative'>
            <img src={advice} alt='' />
            <div className='absolute bottom-0 -left-16 w-96 sm:w-[120%] sm:bottom-4'>
              <Doodle7 color='#7AA9EF' />
            </div>
          </div>
          <ContactInfo variant='erhverv' />
        </div>
      </div>
    </PageWrapper>
  );
}
