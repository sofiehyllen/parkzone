import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageWrapper from '../../components/wrappers/PageWrapper';
import Doodle1 from '../../components/svg/Doodle1';
import Doodle2 from '../../components/svg/Doodle2';
import { MdOutlineDirectionsCarFilled } from 'react-icons/md';
import { FiCamera } from 'react-icons/fi';
import { BiHandicap } from 'react-icons/bi';
import { TbElevator } from 'react-icons/tb';
import Button from '../../components/buttons/Button';
import PaymentFlow from '../../components/sections/PaymentFlow';
import Alert from '../../components/atoms/Alert';

export default function ParkingPage() {
  const [data, setData] = useState(null);
  const [alertVisible, setAlertVisible] = useState(false);

  const params = useParams();

  const url = `https://firestore.googleapis.com/v1/projects/parkzone-f0f37/databases/(default)/documents/parking/${params.id}`;

  useEffect(() => {
    async function getData() {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    }
    getData();

    getData();

    const timeoutId = setTimeout(() => {
      setAlertVisible(true);
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [url]);

  function handleCloseAlert() {
    setAlertVisible(false);
  }

  const scrollToPaymentFlow = () => {
    const paymentFlowSection = document.getElementById('paymentFlow');
    if (paymentFlowSection) {
      paymentFlowSection.scrollIntoView({ behavior: 'smooth' });
    }
    setAlertVisible(false);
  };

  return (
    <PageWrapper breadcrumb={true}>
      {data && (
        <>
          <div className=' md:px-10 max-w-screen-3xl mx-auto'>
            <div className=' bg-marine-200 sm:px-5 sm:rounded-xl px-5 md:px-10 pb-5 pt-20 relative overflow-hidden xl:pt-28'>
              <div className='relative z-50'>
                <p className='font-h4 text-marine-500 pb-2'>Parkering ved</p>
                <h1 className='font-h1 leading-8 pb-1 pr-10'>
                  {data.fields.address.stringValue}
                </h1>
                <h2 className='font-h3'>{data.fields.city.stringValue}</h2>
              </div>
              <div className='absolute -rotate-45 left-0 top-0  xl:scale-125 2xl:scale-150 3xl:left-20'>
                <Doodle2 color='#DBE9FD' />
              </div>
              <div className='absolute rotate-45 -right-40 -top-40 hidden sm:block xl:scale-125 2xl:-right-52 2xl:scale-150'>
                <Doodle2 color='#DBE9FD' />
              </div>
              <div className='absolute -rotate-90 right-72 -top-52 hidden lg:block xl:scale-125 xl:right-96 2xl: 2xl:scale-150'>
                <Doodle1 color='#DBE9FD' />
              </div>
            </div>
            <div className='grid grid-cols-1 divide-y divide-marine-200 w-fit py-10 mx-auto sm:grid-cols-3 sm:divide-y-0 sm:divide-x sm:w-full sm:px-10 lg:py-20 max-w-screen-xl xl:px-28'>
              <div className='flex flex-col sm:items-start py-9 sm:py-3 w-full'>
                <div className='flex flex-col items-center'>
                  <p className='font-h2 sm:font-h4 pb-3 lg:font-h3'>
                    {data.fields.spaces.integerValue} pladser
                  </p>
                  <p className='font-body-md text-center sm:font-body-s lg:font-body-md'>
                    fordelt på hele området
                  </p>
                </div>
              </div>
              <div className='flex flex-col items-center py-9 sm:py-3 w-full'>
                <p className='font-h2 sm:font-h4 pb-3 lg:font-h3'>
                  {data.fields.hourPrice.integerValue} kr.
                </p>
                <p className='font-body-md text-center sm:font-body-s lg:font-body-md'>
                  pr. påbegyndt time
                </p>
              </div>
              <div className='flex flex-col items-end py-9 sm:py-3 w-full'>
                <div className='flex flex-col items-center'>
                  <p className='font-h2 sm:font-h4 pb-3 lg:font-h3'>
                    {data.fields.openingHours.stringValue}
                  </p>
                  <p className='font-body-md text-center sm:font-body-s lg:font-body-md'>
                    er der åbent for parkering
                  </p>
                </div>
              </div>
            </div>
            <div className='mx-auto max-w-screen-xl lg:pb-20 xl:px-28'>
              <div className='grid grid-cols-1 lg:grid-cols-3 gap-x-10  sm:px-10 2xl:gap-x-12'>
                <div className='grid grid-cols-1 col-span-2 px-5'>
                  <div>
                    <h5 className='font-h4 pb-4'>Om området</h5>
                    <div className='space-y-7'>
                      <p className='font-body-md'>
                        {data.fields.text11.stringValue}
                      </p>
                      <p className='font-body-md'>
                        {data.fields.text12.stringValue}
                      </p>
                    </div>
                  </div>
                  <div className='px-7 py-10 bg-marine-100 rounded-xl my-14 relative overflow-hidden md:px-10'>
                    <div className='w-full relative z-50 flex flex-col items-center md:flex-row md:justify-center'>
                      <div className='md:pr-10'>
                        <h6 className='font-h4 text-center pb-4 md:text-left'>
                          Har du spørgsmål til dette område?
                        </h6>
                        <p className='font-body-md text-center md:text-left'>
                          Vores team sidder klar til at hjælpe dig, hvis du har
                          spørgsmål omkring vores forskellige områder.
                        </p>
                      </div>
                      <Button
                        variant={'tertiary'}
                        size={'md'}
                        className='mt-8 md:mt-0 w-full'
                        to='/privat/kontakt'>
                        Kontakt os
                      </Button>
                    </div>
                    <div className='absolute -rotate-45 left-0 top-0 scale-125  xl:scale-125 2xl:scale-150 3xl:left-20'>
                      <Doodle1 color='#EDF6FD' />
                    </div>
                  </div>
                  <div>
                    <h5 className='font-h4 pb-4'>Parkering</h5>
                    <div className='space-y-7'>
                      <p className='font-body-md'>
                        {data.fields.text21.stringValue}
                      </p>
                      {data.fields.text22 && (
                        <p className='font-body-md'>
                          {data.fields.text22.stringValue}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className='grid grid-cols-1 mt-16 border-t-1 border-gray-200 h-fit w-[114%] px-5 sm:w-[109%] lg:border-0 lg:mt-0 lg:w-full'>
                  <div className='flex flex-wrap justify-center gap-x-4 gap-y-2 py-10 px-4 sm:pt-16 lg:gap-x-8 lg:px-0 lg:pt-10'>
                    <div className='flex flex-col items-center px-2 lg:px-0'>
                      <MdOutlineDirectionsCarFilled className='h-12 lg:h-10 w-auto text-marine-800' />
                      <p className='font-body-xs text-center pt-1'>
                        Udendørs <br /> parkering
                      </p>
                    </div>
                    <div className='flex flex-col items-center px-2 lg:px-0'>
                      <MdOutlineDirectionsCarFilled className='h-12 lg:h-10 w-auto text-marine-800' />
                      <p className='font-body-xs text-center pt-1'>
                        Parkeringshus
                      </p>
                    </div>
                    <div className='flex flex-col items-center px-2 lg:px-0'>
                      <TbElevator className='h-12 lg:h-10 w-auto text-marine-800' />
                      <p className='font-body-xs text-center pt-1'>Elevator</p>
                    </div>
                    <div className='flex flex-col items-center px-2 lg:px-0'>
                      <FiCamera className='h-12 lg:h-10 pt-2 w-auto text-marine-800' />
                      <p className='font-body-xs text-center pt-1 '>
                        Sikkerhedskamera
                      </p>
                    </div>
                    <div className='flex flex-col items-center px-2 lg:px-0'>
                      <BiHandicap className='h-12 lg:h-10 w-auto text-marine-800' />
                      <p className='font-body-xs text-center pt-1'>
                        Handicap <br /> parkering
                      </p>
                    </div>
                  </div>
                  <div className='bg-marine-50 px-8 py-7 rounded-xl xl:pb-7'>
                    <h5 className='font-h4 pb-6'>Takster</h5>
                    <div className='border-b-1 border-marine-200 pb-2 flex justify-between'>
                      <p className='font-body-s'>Pr. påbegyndt time:</p>
                      <p className='font-h5'>
                        {data.fields.hourPrice.integerValue} kr.
                      </p>
                    </div>
                    {data.fields.otherPrice && data.fields.otherPriceText && (
                      <div className='border-b-1 border-marine-200 pb-2 pt-4 flex justify-between'>
                        <p className='font-body-s'>
                          {data.fields.otherPriceText.stringValue}:
                        </p>
                        <p className='font-h5'>
                          {data.fields.otherPrice.integerValue} kr.
                        </p>
                      </div>
                    )}
                  </div>
                  <div className='py-5 pt-10 sm:pb-14 lg:order-first lg:pt-0 lg:pb-0 lg:py-0'>
                    <iframe
                      src={data.fields.maps.stringValue}
                      loading='lazy'
                      referrerPolicy='no-referrer-when-downgrade'
                      className='rounded-2xl w-full h-60'></iframe>
                  </div>
                </div>
              </div>
              <PaymentFlow
                map={data.fields.maps.stringValue}
                address={data.fields.address.stringValue}
                city={data.fields.city.stringValue}
                hourPrice={data.fields.hourPrice.integerValue}
              />
            </div>
          </div>
          <Alert
            type='default'
            title='Skal du parkere her?'
            text='Book din parkering på forhånd og spar tid på billetkøb og
                parkeringsregler når du er fremme.'
            onClose={handleCloseAlert}
            isVisible={alertVisible}>
            <Button size='sm' variant='primary' onClick={scrollToPaymentFlow}>
              Book
            </Button>
          </Alert>
        </>
      )}
    </PageWrapper>
  );
}
