import PropTypes from 'prop-types';
import { IoChevronBackOutline } from 'react-icons/io5';
import clsx from 'clsx';

function BackButton({ className, onClick }) {
  return (
    <button className='flex items-center' onClick={onClick}>
      <IoChevronBackOutline
        className={clsx('mr-3', !className ? '' : className)}
      />
      <p
        className={clsx(
          !className
            ? 'font-h4 flex space-x-2 md:space-x-5 cursor-pointer'
            : className
        )}>
        Tilbage
      </p>
    </button>
  );
}

BackButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default BackButton;
