import PropTypes from 'prop-types';
import { LuMail, LuPhone } from 'react-icons/lu';

export default function IconCard({ icon, title, subtitle, email, phone }) {
  return (
    <div className='w-full space-y-2.5 pb-7'>
      <div className='bg-gray-50 rounded-xl flex items-center p-3  space-x-5'>
        <div className='bg-sky-100 rounded-full p-3'>
          <div>{icon}</div>
        </div>
        <div className='space-y-3'>
          <h4 className='font-h4'>{title}</h4>
          <p className='font-body-md'>{subtitle}</p>
        </div>
      </div>
      <div className='flex flex-col space-y-2.5 sm:space-y-0 sm:flex-row sm:space-x-2.5 '>
        <div className='bg-gray-50 rounded-lg flex items-center pl-4 p-3 space-x-5 sm:pl-3 sm:space-x-2.5 w-full shri'>
          <div className='bg-sky-100 rounded-full p-3 sm:p-2'>
            <div>
              <LuMail strokeWidth={2} className='text-marine-400 h-5 sm:h-4 w-auto' />
            </div>
          </div>
          <div className='space-y-2'>
            <h4 className='font-h5'>Email</h4>
            <p className='font-body-s hyphens-manual'>{email}</p>
          </div>
        </div>
        <div className='bg-gray-50 rounded-lg flex items-center pl-4 p-3 space-x-5 sm:pl-3 sm:space-x-2.5 w-full'>
          <div className='bg-sky-100 rounded-full p-3 sm:p-2'>
            <div>
              <LuPhone strokeWidth={2} className='text-marine-400 h-5 sm:h-4 w-auto' />
            </div>
          </div>
          <div className='space-y-2'>
            <h4 className='font-h5'>Telefon</h4>
            <p className='font-body-s'>{phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

IconCard.propTypes = {
  icon: PropTypes.object,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
};
