import { useState } from 'react';
import Button from '../buttons/Button';
import Alert from './Alert';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertType, setAlertType] = useState('');
  const [alertTitle, setAlertTitle] = useState('');
  const [alertText, setAlertText] = useState('');

  function handleInput(event) {
    setEmail(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (email === '' || !/\S+@\S+\.\S+/.test(email)) {
      setAlertVisible(true);
      setAlertType('error');
      setAlertTitle('Ugyldig email');
      setAlertText('Indtast venligt en gyldig email');
      setTimeout(() => setAlertVisible(false), 3000);
    } else {
      setEmail('');
      setAlertVisible(true);
      setAlertType('success');
      setAlertTitle('Tak for din tilmelding');
      setAlertText('Du er nu tilmeldt vores nyhedsbrev');
      setTimeout(() => setAlertVisible(false), 3000);
    }
  }

  function handleCloseAlert() {
    setAlertVisible(false);
  }

  return (
    <>
      <div className='w-fit relative'>
        <form onSubmit={handleSubmit} className='w-fit'>
          <input
            type='email'
            placeholder='Skriv din mail her'
            value={email}
            onChange={handleInput}
            className='font-body-xs bg-transparent rounded-full py-2.5 pl-4 justify-between border-1 capsize inner-border-gray-200 w-80 placeholder-gray-500 focus:outline-0 focus:ring-1 focus:ring-sky-300'
          />
          <Button
            size='sm'
            variant='primary'
            type='submit'
            className='absolute right-1 top-1'>
            Tilmeld
          </Button>
          <Alert
            isVisible={alertVisible}
            type={alertType}
            title={alertTitle}
            text={alertText}
            onClose={handleCloseAlert}
          />
        </form>
      </div>
    </>
  );
}
