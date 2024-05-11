import { useEffect, useState } from 'react';
import ProgressBar from '../atoms/ProgressBar';
import SubscriptionCard from '../cards/SubscriptionCard';
import { BsArrowLeft } from 'react-icons/bs';
import TypeCard from '../cards/TypeCard';
import Calender from './Calender';
import Button from '../atoms/Button';

const PaymentFlow = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [previousOptions, setPreviousOptions] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);

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
          <Calender type='arrival' />
          <Calender type='departure' />
        </div>
        <Button variant='primary' size='lg' icon={true} className='ml-auto'>
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
    buttonClick: () => handleOptionSelect('abonnement1'),
  };
  const subscriptionCard2 = {
    category: 'basis',
    categoryColor: 'lightBlue',
    vehicle: 'Motorcykel',
    type: 'Døgnparkering',
    price: 529,
    buttonSize: 'md',
    buttonClick: () => handleOptionSelect('abonnement2'),
  };
  const subscriptionCard3 = {
    category: 'premium',
    categoryColor: 'darkBlue',
    vehicle: 'Personbil',
    type: 'VIP - Døgnparkering',
    price: 2599,
    buttonSize: 'lg',
    buttonClick: () => handleOptionSelect('abonnement2'),
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
        <p className='font-body-md text-center pt-5'>
          Indtast dine oplysninger
        </p>
      </div>
    </div>
  );

  return (
    <div className='bg-marine-50 rounded-xl mt-28 py-20 px-20 relative'>
      {selectedOption === null && renderOptionsView()}
      {selectedOption === 'timeperiod' && renderTimeperiodView()}
      {selectedOption === 'subscription' && renderSubscriptionView()}
      {selectedOption === 'abonnement1' && renderUserInfo()}
      {selectedOption === 'abonnement2' && renderUserInfo()}
      {selectedOption === 'abonnement3' && renderUserInfo()}
    </div>
  );
};

export default PaymentFlow;
