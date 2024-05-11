import clsx from 'clsx';
import PropTypes from 'prop-types';

const ProgressBar = ({ currentStep }) => {
  return (
    <div className='mb-20 w-fit'>
      <ol className='flex items-center w-full font-h6 uppercase text-gray-300'>
        <li
          className={clsx(
            "flex w-36 relative text-marine-400 after:content-[''] after:w-40 after:h-0.5  after:inline-block after:absolute lg:after:top-8 after:top-3 after:left-9",
            currentStep === 2 ? 'after:bg-marine-400' : 'after:bg-gray-300'
          )}>
          <div className='block z-10 '>
            Produkt
            <span className='size-4 border-2 rounded-full flex justify-center items-center mx-auto mt-1 border-marine-400 bg-marine-50'>
              <div className='rounded-full size-2 bg-marine-400'></div>
            </span>
          </div>
        </li>
        <li
          className={clsx(
            "flex w-44 relative  after:content-[''] after:w-40 after:h-0.5  after:inline-block after:absolute lg:after:top-8 after:top-3 after:left-16",
            currentStep === 2
              ? 'text-marine-400 after:bg-gray-300'
              : currentStep === 3
              ? 'after:bg-marine-400'
              : 'after:bg-gray-300'
          )}>
          <div className='block z-10'>
            Dine oplysninger
            <span
              className={clsx(
                'size-4 border-2 rounded-full flex justify-center items-center mx-auto mt-1 bg-marine-50',
                currentStep === 2 ? 'border-marine-400' : 'border-gray-300'
              )}>
              <div
                className={clsx(
                  'rounded-full size-2 bg-marine-400',
                  currentStep === 2 ? 'bg-marine-400' : 'bg-transparent'
                )}></div>
            </span>
          </div>
        </li>
        <li
          className={clsx(
            "flex w-48 relative  after:content-[''] after:w-40 after:h-0.5  after:inline-block after:absolute lg:after:top-8 after:top-3 after:left-14",
            currentStep === 3
              ? 'text-marine-400 after:bg-gray-300'
              : currentStep === 4
              ? 'after:bg-marine-400'
              : 'after:bg-gray-300'
          )}>
          <div className='block z-10'>
            Ordreroversigt
            <span
              className={clsx(
                'size-4 border-2 rounded-full flex justify-center items-center mx-auto mt-1 bg-marine-50',
                currentStep === 3 ? 'border-marine-400' : 'border-gray-300'
              )}>
              <div
                className={clsx(
                  'rounded-full size-2 bg-marine-400',
                  currentStep === 3 ? 'bg-marine-400' : 'bg-transparent'
                )}></div>
            </span>
          </div>
        </li>
        <li
          className={clsx(
            'flex',
            currentStep === 3
              ? 'text-marine-400 after:bg-marine-400'
              : 'text-gray-300 after:bg-gray-300'
          )}>
          <div className='block z-10'>
            Betaling
            <span
              className={clsx(
                'size-4 border-2 rounded-full flex justify-center items-center mx-auto mt-1 bg-marine-50',
                currentStep === 3 ? 'border-marine-400' : 'border-gray-300'
              )}>
              <div
                className={clsx(
                  'rounded-full size-2 bg-marine-400',
                  currentStep === 3 ? 'bg-marine-400' : 'bg-transparent'
                )}></div>
            </span>
          </div>
        </li>
      </ol>
    </div>
  );
};

ProgressBar.propTypes = {
  currentStep: PropTypes.number.isRequired,
};

export default ProgressBar;
