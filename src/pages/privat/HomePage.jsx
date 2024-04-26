import ContactForm from '../../components/sections/ContactForm';
import PageWrapper from '../../components/wrappers/PageWrapper';

export default function HomePagePrivat() {
  return (
    <PageWrapper>
      <h3 className='font-h3 pb-10'>Homepage - Privat</h3>
      <div className='px-10 bg-gray-100'>
        <ContactForm variant='privat' />
      </div>

    </PageWrapper>
  );
}
