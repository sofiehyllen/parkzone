import ContactForm from '../../components/sections/ContactForm';
import ContactInfo from '../../components/sections/ContactInfo';
import PageWrapper from '../../components/wrappers/PageWrapper';

export default function KontaktPageErhverv() {
  return (
    <PageWrapper>
      <div className='bg-gray-100 w-full'>
        <div className='grid grid-cols-1 md:grid-cols-2 py-16 px-5 md:px-16 lg:px-32 xl:px-40 w-fit gap-5 mx-auto'>
          <div className='row-span-3'>
            <ContactForm variant='erhverv' />
          </div>
          <div className='max-w-md w-full h-60 bg-white rounded-2xl'></div>
          <ContactInfo variant='erhverv' />
        </div>
      </div>
    </PageWrapper>
  );
}
