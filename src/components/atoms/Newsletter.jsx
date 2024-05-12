import { useState } from 'react';
import Button from '../buttons/Button';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);

  function handleInput(event) {
    setEmail(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (email === '' || !/\S+@\S+\.\S+/.test(email)) {
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);
      alert(`Thank you for subscribing with ${email}`);
      setEmail('');
    }
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
        </form>
        {!isEmailValid ? (
          <p className='font-body-xs text-right pt-1'>
            Indtast venligst en gyldig e-mail adresse
          </p>
        ) : null}
      </div>
    </>
  );
}
