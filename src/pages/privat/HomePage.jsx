import Accordion from '../../components/atoms/Accordion';
import PageWrapper from '../../components/wrappers/PageWrapper';

export default function HomePagePrivat() {
  return (
    <PageWrapper>
      <h3 className='font-h3 pb-10'>Homepage - Privat</h3>
      <div>
        <Accordion />
      </div>
    </PageWrapper>
  );
}
