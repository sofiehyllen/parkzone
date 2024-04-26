import { LuMail, LuPhone } from 'react-icons/lu';
import PropTypes from 'prop-types';

export default function ContactInfo({ variant }) {
  return (
    <div className='bg-white rounded-2xl p-5 max-w-md space-y-2.5 h-fit'>
      <div className='bg-gray-50 rounded-xl flex items-center p-3 sm:p-5 space-x-5'>
        <div className='bg-sky-100 rounded-full p-3 w-fit'>
          <LuMail strokeWidth={2.5} className='text-marine-500 h-5 w-auto' />
        </div>
        <div className='space-y-3'>
          <h4 className='font-h4'>Email</h4>
          <p className='font-body-md'>info@parkzone.dk</p>
        </div>
      </div>

      <div className='bg-gray-50 rounded-xl p-3 sm:p-5 space-x-5 flex'>
        <div className='bg-sky-100 rounded-full p-3 w-fit h-fit'>
          <LuPhone strokeWidth={2.5} className='text-marine-500 h-5 w-auto' />
        </div>
        <div className='pt-1.5 space-y-6 w-full'>
          <div className='space-y-3'>
            <h4 className='font-h4'>Telefon</h4>
            <p className='font-body-md'>+45 70 25 26 96</p>
          </div>

          {variant === 'privat' && (
            <div className='space-y-4'>
              <div className='space-y-3'>
                <h5 className='font-h5'>Kundeservice</h5>
                <div className='grid grid-cols-1 space-y-2'>
                  <div className='flex flex-wrap justify-between pr-10'>
                    <p className='font-body-md pb-2 w-24'>Man - tors:</p>
                    <p className='font-body-md w-28'>08:30 - 16:00</p>
                  </div>
                  <div className='flex flex-wrap justify-between pr-10'>
                    <p className='font-body-md w-24 pb-2'>Fre:</p>
                    <p className='font-body-md w-28'>08:30 - 15:00</p>
                  </div>
                </div>
              </div>
              <div className='space-y-3'>
                <h5 className='font-h5'>Sagsbehandling</h5>
                <div className='grid grid-cols-1 space-y-2'>
                  <div className='flex flex-wrap justify-between pr-10'>
                    <p className='font-body-md w-24 pb-2'>Man - tors:</p>
                    <p className='font-body-md w-28'>10:00 - 14:00</p>
                  </div>
                  <div className='flex flex-wrap justify-between pr-10'>
                    <p className='font-body-md w-24 pb-2'>Fre:</p>
                    <p className='font-body-md w-28'>Lukket</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {variant === 'erhverv' && (
            <div className='grid grid-cols-1 space-y-2'>
              <div className='flex flex-wrap justify-between pr-10'>
                <p className='font-body-md pb-2 w-24'>Man - tors:</p>
                <p className='font-body-md w-28'>08:30 - 16:00</p>
              </div>
              <div className='flex flex-wrap justify-between pr-10'>
                <p className='font-body-md w-24 pb-2'>Fre:</p>
                <p className='font-body-md w-28'>08:30 - 15:00</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

ContactInfo.propTypes = {
  variant: PropTypes.oneOf(['privat', 'erhverv']).isRequired,
};
