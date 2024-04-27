import { useState } from 'react';
import InputField from '../atoms/InputField';
import Dropdown from '../atoms/Dropdown';
import PropTypes from 'prop-types';
import RadioButton from '../atoms/RadioButton';
import Button from '../atoms/Button';
import { FiPlus } from 'react-icons/fi';

export default function ContactForm({ variant }) {
  const [selectedRadioOption, setSelectedRadioOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedRadioOption(event.target.value);
  };

  const [, setSelectedDropdownOption] = useState(null);
  const handleDropdownSelect = (option) => {
    setSelectedDropdownOption(option);
  };

  return (
    <form className='bg-white w-fill p-5 md:p-7 lg:p-10 rounded-2xl min-w-80 max-w-md'>
      <div className='space-y-3'>
        <h4 className='font-h4 text-orange-600'>Kontakt os</h4>
        <h2 className='font-h2'>Hvordan kan vi hjælpe dig?</h2>
      </div>
      <div className='space-y-6 pt-10 border-b-1 border-gray-300 pb-6'>
        <p className='font-body-md'>
          Uanset hvad du mangler svar på, sidder vores team af dygtige
          medarbejdere klar til at hjælpe dig. Udfyld kontaktformularen, så
          kontakter vi dig snarest muligt.
        </p>
      </div>
      {variant === 'privat' && (
        <div className='pt-6'>
          <h6 className='font-h6'>Baggrund</h6>
          <p>Hvad drejer henvendelsen sig om?</p>
          <div className='space-x-5'>
            <RadioButton
              type='radio'
              value='kontrolafgift'
              label='Kontrolafgift'
              checked={selectedRadioOption === 'kontrolafgift'}
              onChange={handleOptionChange}
            />
            <RadioButton
              type='radio'
              value='abonnement'
              label='Abonnement'
              checked={selectedRadioOption === 'abonnement'}
              onChange={handleOptionChange}
            />
          </div>
        </div>
      )}
      <div className='border-b-1 border-gray-300 pb-2 mb-6 pt-4'>
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
      {variant === 'erhverv' && (
        <div>
          <Dropdown
            label='Afdeling'
            placeholder='Vælg den afdeling du ønsker at kontakte'
            dropdownOptions={[
              'Juridisk afdeling',
              'Salgsafdeling',
              'Kundeservice',
              'Andet',
            ]}
            onSelect={handleDropdownSelect}
          />
          <div className='flex w-full space-x-5 items-center'>
            <div>
              <InputField
                label='Løbenummer / Registreringsnummer'
                id='regNumber'
                type='text'
                placeholder='F.eks 1234567'
                className=''
              />
            </div>
            <RadioButton
              value='regNumbCheckbox'
              label='Ej tildelt'
              type='checkbox'
            />
          </div>
        </div>
      )}
      {selectedRadioOption === 'kontrolafgift' && variant === 'privat' && (
        <div>
          <div className='border-b-1 border-gray-300 pb-2'>
            <InputField
              label='Løbenummer'
              id='serialNumber'
              description='Du finder det 7-cifrede løbenummeret på din afgift eller betalingspåmindelse.'
              type='text'
              placeholder='F.eks 1234567'
              className=''
            />
            <InputField
              label='Nummerplade'
              id='licensePlate'
              type='text'
              placeholder='F.eks AA 12 345'
              className=''
            />
            <Dropdown
              label='Hændelse'
              placeholder='Vælg den mulighed som bedst beskriver din situation'
              dropdownOptions={[
                'Modtaget rykker trods betaling',
                'Afdragsordning',
                'Modtaget afgift men ejer ikke bilen',
                'Gyldig p-tilladelse eller p-billet',
                'Hospitalet',
                'Betalingsapp',
                'Kameraparkering',
                'Elektronisk eller manuel P-skive',
                'ParkCare',
                'Parkering uden for bås',
                'Andet',
              ]}
              onSelect={handleDropdownSelect}
            />
          </div>
          <div className='py-6'>
            <h6 className='font-h6 pb-1.5'>Vedhæftninger</h6>
            <div className='relative cursor-pointer'>
              <input
                name='files[]'
                type='file'
                accept='.pdf, .jpg, .jpeg, .png, .doc, .docx, .xml'
                className='block w-full py-2 font-league text-sm capsize text-slate-500 file:border-dotted file:border-marine-800
              file:mr-4 file:py-2 file:pt-2.5 file:px-4 file:pl-8 file:rounded-full
              file:font-league file:text-sm file:leading-none file:capsize
              file:bg-transparent file:text-marine-800
              hover:file:border-solid file:cursor-pointer'
                multiple='multiple'
              />
              <FiPlus className='text-marine-800 h-3.5 w-auto absolute top-3.5 left-4' />
            </div>
          </div>
        </div>
      )}

      {selectedRadioOption === 'abonnement' && variant === 'privat' && (
        <div className=''>
          <InputField
            id='customerNumber'
            type='text'
            label='Kundenummer'
            placeholder='F.eks. 1234567'
            description='Du finder dit kundenummer i din kontrakt eller i en tidligere mail fra os.'
          />
        </div>
      )}

      <div className='pb-4 border-b-1 border-gray-300'>
        <h6 className='font-h6 pb-1.5'>Besked</h6>
        <textarea
          name='message'
          id='message'
          placeholder='Har du nogle bemærkninger kan de skrives her'
          className=' bg-gray-100 resize-none rounded-sm font-body-xs text-xs p-3 w-full h-32 text-gray-400 outline-none focus:outline-sky-200 focus:outline-2 focus:-outline-offset-2'></textarea>
      </div>
      <div className='space-y-6'>
        <div className='pt-6'>
          <RadioButton
            value='datapolicy'
            type='checkbox'
            label='Jeg accepterer ParkZones persondatapolitik. Du kan læse om hvordan vi behandler dine personoplysninger'
            style='small'
          />
        </div>
        <Button type='submit' size='md' variant='primary'>
          Send
        </Button>
      </div>
    </form>
  );
}

ContactForm.propTypes = {
  variant: PropTypes.oneOf(['privat', 'erhverv']).isRequired,
};
