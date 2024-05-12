import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import ProgressBar from '../atoms/ProgressBar';
import SubscriptionCard from '../cards/SubscriptionCard';
import TypeCard from '../cards/TypeCard';
import Calendar from './Calendar';
import Button from '../buttons/Button';
import InputField from '../atoms/InputField';
import RadioButton from '../buttons/RadioButton';
import pin from '../../assets/pin.svg';
import BackButton from '../buttons/BackButton';

const PaymentFlow = ({ map, address, city, hourPrice }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [previousOptions, setPreviousOptions] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);
  //const [error, setError] = useState(null);

  // Fetch arrival date and time from localStorage
  const storedArrivalDateAndTime = localStorage.getItem(
    'arrivalDateAndTime_arrivalCalendar'
  );

  // Fetch departure date and time from localStorage
  const storedDepartureDateAndTime = localStorage.getItem(
    'departureDateAndTime_departureCalendar'
  );

  //Formattering af datoen hentet fra localeStorage
  const formattedArrivalDateAndTime = storedArrivalDateAndTime
    ? new Date(storedArrivalDateAndTime).toLocaleDateString('da-DK', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      })
    : null;

  const formattedDepartureDateAndTime = storedDepartureDateAndTime
    ? new Date(storedDepartureDateAndTime).toLocaleDateString('da-DK', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      })
    : null;

  const arrivalDate = new Date(storedArrivalDateAndTime);
  const departureDate = new Date(storedDepartureDateAndTime);

  const timeDifference = Math.abs(departureDate - arrivalDate);
  console.log('Time diff:', timeDifference);

  const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
  const minutesDifference = Math.floor((timeDifference / (1000 * 60)) % 60);
  const totalTimeInHours = hoursDifference + minutesDifference / 60;
  console.log('Time in hours:', hoursDifference);

  const formattedHours = String(hoursDifference).padStart(2, '0');
  const formattedMinutes = String(minutesDifference).padStart(2, '0');
  const formattedDifference = `${formattedHours}:${formattedMinutes}`;
  console.log('Formatted difference:', formattedDifference);

  let parkingPrice = Math.abs(totalTimeInHours * hourPrice);
  parkingPrice = parkingPrice.toFixed(2);
  console.log('Parking price:', parkingPrice);

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

  /* const handleNextClick = () => {
    if (storedDepartureDateAndTime < storedArrivalDateAndTime) {
      setError('Departure date cannot be before arrival date');
      setTimeout(() => {
        setError(null);
      }, 5000);
    } else {
      setError(null);
      // Move to the next step
      handleOptionSelect('userInfo');
    }
  };*/

  // 1. step i betalingsflow - Periodeparkering eller abonnement
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

  // 2. step i betalingsflow - Periodeparkering
  const renderTimeperiodView = () => (
    <div className='flex flex-col items-center justify-center'>
      <ProgressBar currentStep={1} />
      <div className='w-full relative'>
        <div className='absolute top-2 left-0'>
          <BackButton onClick={handleBack} className='font-h5 text-gray-500' />
        </div>
        <p className='font-h3 text-center'>Periodeparkering</p>
        <p className='font-body-md text-center pt-5'>
          Hvor længe skal du parkere?
        </p>
        <div className='flex space-x-16 pt-14 pb-10 w-fit mx-auto'>
          <Calendar type='arrival' id='arrivalCalendar' />
          <Calendar type='departure' id='departureCalendar' />
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
      {/*{error && <div>{error}</div>}*/}
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

  // 2. step i betalingsflow - Abonnement
  const renderSubscriptionView = () => (
    <div className='flex flex-col items-center justify-center'>
      <ProgressBar currentStep={1} />
      <div className='w-full relative'>
        <div className='absolute top-2 left-0'>
          <BackButton onClick={handleBack} className='font-h5 text-gray-500' />
        </div>
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

  // 3. step i betalingsflow - Personlige oplysninger
  const renderUserInfo = () => (
    <div className='flex flex-col items-center justify-center'>
      <ProgressBar currentStep={2} />
      <div className='w-full relative'>
        <div className='absolute top-2 left-0'>
          <BackButton onClick={handleBack} className='font-h5 text-gray-500' />
        </div>
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
                    <p className='font-h5'>{formattedArrivalDateAndTime}</p>
                  </div>
                  <div className='flex justify-between '>
                    <p className='font-body-s'>Til</p>
                    <p className='font-h5'>{formattedDepartureDateAndTime}</p>
                  </div>
                </div>
                <div className='py-7 space-y-2.5 border-b-1 border-gray-200'>
                  <div className='flex justify-between'>
                    <p className='font-h5'>Antal timer</p>
                    <p className='font-h5'>{formattedDifference}</p>
                  </div>
                  <div className='flex justify-between pl-5'>
                    <div className='flex items-center'>
                      <p className='font-league text-base font-light capsize pr-2'>
                        x
                      </p>
                      <p className='font-body-md'>Timetakst</p>
                    </div>
                    <p className='font-body-md'>DKK {hourPrice},00</p>
                  </div>
                </div>
                <div className='pt-7 flex justify-between'>
                  <div>
                    <p className='font-h4 text-2xl'>Total</p>
                    <p className='font-body-md pt-2'>Inkl. moms</p>
                  </div>
                  <p className='font-h4 text-2xl'>DKK {parkingPrice}</p>
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
  hourPrice: PropTypes.any,
};

export default PaymentFlow;
