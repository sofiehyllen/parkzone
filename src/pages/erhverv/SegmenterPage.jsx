import Button from '../../components/buttons/Button';
import Doodle1 from '../../components/svg/Doodle1';
import ImageWrapper from '../../components/wrappers/ImageWrapper';
import PageWrapper from '../../components/wrappers/PageWrapper';
import tilbud from '../../assets/tilbud.jpg';
import Accordion from '../../components/atoms/Accordion';
import { segmenter1, segmenter2 } from '../../staticData';

export default function SegmenterPage() {
  return (
    <PageWrapper breadcrumb={true}>
      <div className='mx-5 pb-36 md:mx-10 relative md:pb-0 xl:mx-20 3xl:mx-40'>
        <div className='w-full bg-sky-100 pt-12 rounded-2xl overflow-hidden h-fit sm:pb-10 lg:pr-0 lg:pb-10 xl:py-20'>
          <div className='flex flex-col lg:flex-row relative'>
            <div className='flex flex-col justify-center relative z-40 px-5 pb-10 sm:px-10 lg:pb-0 lg:w-full xl:ml-14 4xl:py-16 4xl:pr-28 4xl:pl-20'>
              <h2 className='font-h1 pb-8 text-center lg:text-left lg:font-h2 2xl:font-h1 2xl:pb-12'>
                Skræddersyede løsninger til alle erhverv
              </h2>
              <p className='font-body-l  pb-8 text-center lg:text-left'>
                Med en daglig administration af ca. 150.000 p-pladser fordelt
                over hele landet er vi et af de førende parkeringsselskaber i
                Danmark. Vi har stor erfaring med at levere løsninger og
                administrere parkering af alt lige fra beboelse og hoteller, til
                shoppingcentre og lufthavne.
              </p>
              <div className='flex flex-col items-center justify-center space-y-5 sm:flex-row sm:space-y-0 sm:space-x-5 lg:justify-start 2xl:pt-8'>
                <Button size={'lg'} variant={'primary'} to='/erhverv/kontakt'>
                  Kontakt os
                </Button>
                <Button size={'lg'} variant={'tertiary'} to='/erhverv/kontakt'>
                  Se produkter
                </Button>
              </div>
            </div>
            <div className='absolute top-0 -right-10 rotate-12 sm:w-3/4 md:-top-28 md:-left-28 md:-right-0 md:-rotate-45 lg:w-1/2 lg:-top-40 xl:-top-64 xl:-left-32'>
              <Doodle1 color='#EDF6FD' />
            </div>
            <div className='absolute -bottom-full -left-20 -rotate-45 scale-125 sm:w-3/4 md:scale-105 md:rotate-30 md:-right-32 md:left-auto lg:w-1/2 xl:top-32 xl:-right-5'>
              <Doodle1 color='#EDF6FD' />
            </div>
            <ImageWrapper
              image={tilbud}
              size='md'
              alt='Oplæg om parkingsløsning'
              className='relative rounded-r-none ml-5 self-end sm:ml-10 md:rounded-r-none lg:rounded-r-none lg:place-self-center lg:h-80 lg:w-9/12 xl:w-full 2xl:h-full'
            />
          </div>
          <div className='relative z-40 px-5 pt-10 w-full sm:px-16 sm:pt-14 md:px-24 lg:flex lg:px-20 lg:space-x-5 lg:pt-20 xl:pt-28 xl:px-24 2xl:px-36 4xl:px-60'>
            <div className='grid grid-cols-1 h-min w-full'>
              {segmenter1.map((segmenter, index) => (
                <div key={index} className='w-full flex justify-center'>
                  <Accordion
                    title={segmenter.title}
                    body={segmenter.body}
                    color='bg-white'
                  />
                </div>
              ))}
            </div> 
            <div className='grid grid-cols-1 h-min w-full'>
              {segmenter2.map((segmenter, index) => (
                <div key={index} className='w-full flex justify-center'>
                  <Accordion
                    title={segmenter.title}
                    body={segmenter.body}
                    image={segmenter.image}
                    color='bg-white'
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
