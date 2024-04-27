import Accordion from '../../components/atoms/Accordion';
import PageWrapper from '../../components/wrappers/PageWrapper';

export default function FAQPage() {
  return (
    <PageWrapper breadcrumb={true}>
      <div className='w-full bg-marine-800'>
        <h1 className='font-h1 text-white text-center py-20 px-10'>
          Hvordan kan vi hjælpe dig?
        </h1>
      </div>
      <div className='bg-gray-100 px-5 md:px-10 lg:px-32 md:space-x-10 py-10 flex flex-col md:flex-row justify-center'>
        <div className='mx-auto md:mx-0'>
          <Accordion />
          <Accordion />
          <Accordion />
          <Accordion />
          <Accordion />
        </div>
        <div className='mx-auto md:mx-0'>
          <Accordion />
          <Accordion />
          <Accordion />
          <Accordion />
          <Accordion />
        </div>
      </div>
    </PageWrapper>
  );
}
