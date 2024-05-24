import clsx from 'clsx';
import PropTypes from 'prop-types';

const ProgressBar = ({ currentStep }) => {
  return (
    <div className='mb-10 w-fit'>
      <ol className='flex items-center w-full font-h6 uppercase text-gray-300'>
        <li
          className={clsx(
            "flex relative text-marine-400 after:content-[''] after:h-0.5 after:inline-block after:absolute after:top-8 after:left-9 w-24 after:w-28 sm:w-36 sm:after:w-40",
            currentStep === 3 || currentStep === 4
              ? 'after:bg-marine-400'
              : 'after:bg-gray-300'
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
            "flex relative  after:content-[''] after:h-0.5  after:inline-block after:absolute after:top-8 after:left-16 after:w-28 w-36 sm:w-48 sm:after:w-40",
            currentStep === 3
              ? 'text-marine-400 after:bg-gray-300'
              : currentStep === 4
              ? 'after:bg-marine-400 text-marine-400'
              : 'after:bg-gray-300'
          )}>
          <div className='block z-10'>
            Dine oplysninger
            <span
              className={clsx(
                'size-4 border-2 rounded-full flex justify-center items-center mx-auto mt-1 bg-marine-50',
                currentStep === 3 || currentStep === 4
                  ? 'border-marine-400'
                  : 'border-gray-300'
              )}>
              <div
                className={clsx(
                  'rounded-full size-2 bg-marine-400',
                  currentStep === 3 || currentStep === 4
                    ? 'bg-marine-400'
                    : 'bg-transparent'
                )}></div>
            </span>
          </div>
        </li>
        <li
          className={clsx(
            'flex',
            currentStep === 4 ? 'text-marine-400 ' : 'text-gray-300 '
          )}>
          <div className='block z-10'>
            Betaling
            <span
              className={clsx(
                'size-4 border-2 rounded-full flex justify-center items-center mx-auto mt-1 bg-marine-50',
                currentStep === 4 ? 'border-marine-400' : 'border-gray-300'
              )}>
              <div
                className={clsx(
                  'rounded-full size-2 bg-marine-400',
                  currentStep === 4 ? 'bg-marine-400' : 'bg-transparent'
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
