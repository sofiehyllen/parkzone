import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import ProgressBar from '../atoms/ProgressBar';
import SubscriptionCard from '../cards/SubscriptionCard';
import { BsArrowLeft } from 'react-icons/bs';
import TypeCard from '../cards/TypeCard';
import Calendar from './Calendar';
import Button from '../atoms/Button';
import InputField from '../atoms/InputField';
import RadioButton from '../atoms/RadioButton';
import pin from '../../assets/pin.svg';

const PaymentFlow = ({ map, address, city, hourPrice }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [previousOptions, setPreviousOptions] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);
  //const [isDatesSelected, setIsDatesSelected] = useState(false);
  //const [arrivalDate, setArrivalDate] = useState(null);
  //const [departureDate, setDepartureDate] = useState(null);

  useEffect(() => {
    setCurrentStep(previousOptions.length + 1);
  }, [previousOptions]);

  const handleOptionSelect = (option) => {
    setPreviousOptions([...previousOptions, selectedOption]);
    setSelectedOption(option);
  };

  const handleBack = () => {
    const prevOption = previousOptions.pop();
    setPreviousOptions([...previousOptions]);
    setSelectedOption(prevOption);
    setCurrentStep(currentStep - 1);
  };

  /*  // Update isDatesSelected whenever arrivalDate or departureDate changes
  useEffect(() => {
    setIsDatesSelected(arrivalDate !== null && departureDate !== null);
  }, [arrivalDate, departureDate]);
  console.log(
    `Are the dates selected: ${isDatesSelected} = ${arrivalDate} & ${departureDate}`
  );

  // Function to handle the "next" button click
  const handleNextClick = (option) => {
    if (isDatesSelected) {
      handleOptionSelect(option);
    } else {
      // Display an error message or prevent navigation
      alert('Please select arrival and departure dates before proceeding.');
    }
  };*/

  const renderOptionsView = () => (
    <div className='flex flex-col items-center justify-center px-16'>
      <div className='w-full'>
        <p className='font-h3 text-center pb-14'>
          Hvilken type parkering søger du?
        </p>
        <div className='flex space-x-16'>
          <TypeCard
            number='01'
            title='Periodeparkering'
            body='Med periodeparkering kan du parkere din bil på en af vores p-pladser indenfor en bestemt tidsperiode. Hvor længe perioden skal vare er helt op til dig. Det kan være tre kvarter, en enkelt dag eller flere uger.'
            onClick={() => handleOptionSelect('timeperiod')}
          />
          <TypeCard
            number='02'
            title='Abonnement'
            body='Hvis du ofte parkerer på samme parkeringsplads, kan det være en god ide at købe et parkeringsabonnement til området. Så har du fri afbenyttelse af parkeringsområdet, og du skal ikke længere bekymrer dig om at få købt parkeringsbillet.'
            onClick={() => handleOptionSelect('subscription')}
          />
        </div>
      </div>
    </div>
  );

  const renderTimeperiodView = () => (
    <div className='flex flex-col items-center justify-center'>
      <ProgressBar currentStep={1} />
      <div className='w-full relative'>
        <button
          className='flex items-center absolute top-0 left-0'
          onClick={handleBack}>
          <BsArrowLeft
            strokeWidth={1}
            size={12}
            className='mr-1 text-gray-400'
          />
          <p className='font-h6 text-gray-400 uppercase'>Tilbage</p>
        </button>
        <p className='font-h3 text-center'>Periodeparkering</p>
        <p className='font-body-md text-center pt-5'>
          Hvor længe skal du parkere?
        </p>
        <div className='flex space-x-16 pt-14 pb-10 w-fit mx-auto'>
          <Calendar
            type='arrival'
            id='arrivalCalendar'
            //setArrivalDate={setArrivalDate}
          />
          <Calendar
            type='departure'
            id='departureCalendar'
            //setDepartureDate={setDepartureDate}
          />
        </div>
        <Button
          variant='primary'
          size='lg'
          icon={true}
          className='ml-auto'
          onClick={() => handleOptionSelect('userInfo')}>
          Næste
        </Button>
      </div>
    </div>
  );

  const subscriptionCard1 = {
    category: 'basis',
    categoryColor: 'lightBlue',
    vehicle: 'Personbil',
    type: 'Døgnparkering',
    price: 1299,
    buttonSize: 'md',
    buttonClick: () => handleOptionSelect('userInfo'),
  };
  const subscriptionCard2 = {
    category: 'basis',
    categoryColor: 'lightBlue',
    vehicle: 'Motorcykel',
    type: 'Døgnparkering',
    price: 529,
    buttonSize: 'md',
    buttonClick: () => handleOptionSelect('userInfo'),
  };
  const subscriptionCard3 = {
    category: 'premium',
    categoryColor: 'darkBlue',
    vehicle: 'Personbil',
    type: 'VIP - Døgnparkering',
    price: 2599,
    buttonSize: 'lg',
    buttonClick: () => handleOptionSelect('userInfo'),
  };

  const renderSubscriptionView = () => (
    <div className='flex flex-col items-center justify-center'>
      <ProgressBar currentStep={1} />
      <div className='w-full relative'>
        <button
          className='flex items-center absolute top-0 left-0'
          onClick={handleBack}>
          <BsArrowLeft
            strokeWidth={1}
            size={12}
            className='mr-1 text-gray-400'
          />
          <p className='font-h6 text-gray-400 uppercase'>Tilbage</p>
        </button>
        <p className='font-h3 text-center'>Abonnement</p>
        <p className='font-body-md text-center pt-5'>
          Hvilken type abonnement har du brug for?
        </p>
      </div>
      <div className='flex space-x-9 pt-14'>
        <SubscriptionCard content={subscriptionCard1} />
        <SubscriptionCard content={subscriptionCard2} />
        <SubscriptionCard content={subscriptionCard3} />
      </div>
    </div>
  );

  const renderUserInfo = () => (
    <div className='flex flex-col items-center justify-center'>
      <ProgressBar currentStep={2} />
      <div className='w-full relative'>
        <button
          className='flex items-center absolute top-0 left-0'
          onClick={handleBack}>
          <BsArrowLeft
            strokeWidth={1}
            size={12}
            className='mr-1 text-gray-400'
          />
          <p className='font-h6 text-gray-400 uppercase'>Tilbage</p>
        </button>
        <p className='font-h3 text-center'>Dine oplysninger</p>
        <p className='font-body-md text-center pt-5 pb-14'>
          Indtast dine oplysninger
        </p>
        <div className='flex space-x-20 pb-10'>
          <div className='w-7/12'>
            <p className='font-h4 pb-4'>Dine oplysninger</p>
            <div className='bg-white rounded-xl px-10 py-10'>
              <div className='border-b-1 border-gray-200 pb-2 mb-6'>
                <div className='flex space-x-3'>
                  <InputField
                    label='Fornavn'
                    id='firstName'
                    type='text'
                    placeholder='Fornavn'
                  />
                  <InputField
                    label='Efternavn'
                    id='lastName'
                    type='text'
                    placeholder='Efternavn'
                  />
                </div>
                <InputField
                  label='Adresse'
                  id='adress'
                  type='text'
                  placeholder='Adresse'
                />
                <div className='flex space-x-3'>
                  <InputField
                    label='Postnummer'
                    id='zipcode'
                    type='text'
                    placeholder='Postnummer'
                  />
                  <div className='w-full'></div>
                </div>
              </div>
              <div className='border-b-1 border-gray-200 pb-2 mb-6 '>
                <InputField
                  label='E-mail'
                  id='email'
                  type='email'
                  placeholder='Mailadresse'
                />
                <div className='flex space-x-3'>
                  <InputField
                    label='Mobil'
                    id='mobil'
                    type='tel'
                    placeholder='Mobilnummer'
                  />
                  <div className='w-full'></div>
                </div>
              </div>
              <div className='border-b-1 border-gray-200 pb-2 mb-6 '>
                <InputField
                  label='Nummerplade'
                  id='licensePlate'
                  type='text'
                  placeholder='F.eks AA 12 345'
                />
              </div>
              <RadioButton
                value='datapolicy'
                type='checkbox'
                label='Jeg accepterer ParkZones persondatapolitik. Du kan læse om hvordan vi behandler dine personoplysninger'
                style='small'
              />
            </div>
          </div>
          <div className='w-5/12 px-3.5'>
            <p className='font-h4 pb-4'>Ordreroversigt</p>
            <div className='bg-white rounded-xl overflow-hidden relative'>
              <img
                src={pin}
                alt='Knappenål'
                className='absolute top-52 left-0'
              />
              <iframe
                src={map}
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                className='w-full h-60'
              />
              <div className='p-7'>
                <p className='font-h3 text-right leading-7 z-20 relative'>
                  {address},
                </p>
                <p className='font-h3 text-right pt-2'>{city}</p>
                <div className='pt-12 space-y-4 pb-7 border-b-1 border-gray-200'>
                  <div className='flex justify-between'>
                    <p className='font-body-s'>Fra</p>
                    <p className='font-h5'>11. maj 2024 - kl. 08:30</p>
                  </div>
                  <div className='flex justify-between '>
                    <p className='font-body-s'>Til</p>
                    <p className='font-h5'>12. maj 2024 - kl. 10:00</p>
                  </div>
                </div>
                <div className='py-7 border-b-1 border-gray-200'>
                  <div className='flex justify-between'>
                    <p className='font-body-s'>Timetakst</p>
                    <p className='font-body-s'>{hourPrice},00 kr.</p>
                  </div>
                </div>
                <div className='pt-7 flex justify-between'>
                  <div>
                    <p className='font-h4 text-2xl'>Total</p>
                    <p className='font-body-md pt-2'>Inkl. moms</p>
                  </div>
                  <p className='font-h4 text-2xl'>DKK 490,00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Button
          variant='primary'
          size='lg'
          icon={true}
          className='ml-auto'
          onClick={() => handleOptionSelect('userInfo')}>
          Til betaling
        </Button>
      </div>
    </div>
  );

  return (
    <div className='bg-marine-50 rounded-xl mt-28 py-20 px-20 relative'>
      {selectedOption === null && renderOptionsView()}
      {selectedOption === 'timeperiod' && renderTimeperiodView()}
      {selectedOption === 'subscription' && renderSubscriptionView()}
      {selectedOption === 'userInfo' && renderUserInfo()}
    </div>
  );
};

PaymentFlow.propTypes = {
  map: PropTypes.string,
  address: PropTypes.string,
  city: PropTypes.string,
  hourPrice: PropTypes.number,
};

export default PaymentFlow;
