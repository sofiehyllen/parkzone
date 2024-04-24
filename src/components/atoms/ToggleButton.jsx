import PropTypes from 'prop-types';
import clsx from 'clsx';

export default function ToggleButton({ isChecked, handleToggle }) {
  const handleChange = () => {
    handleToggle();
  };

  return (
    <>
      <label
        htmlFor='ToggleButton'
        className={clsx(
          'inline-flex items-center p-0.5 cursor-pointer rounded-full relative transition-colors duration-300',
          isChecked ? 'bg-marine-800' : 'bg-sky-300'
        )}
        onChange={handleChange}>
        <input
          id='ToggleButton'
          type='checkbox'
          className='hidden peer'
          onChange={handleChange}
          checked={isChecked}
        />
        <span
          className={clsx(
            'w-16 h-5 bg-white rounded-full absolute transform transition duration-300',
            isChecked ? 'translate-x-full' : 'translate-x-0'
          )}></span>
        <span
          className={clsx(
            'z-30 pt-1 pb-1.5 rounded-full w-16 font-mundial capsize text-xs text-center transform transition-colors duration-300',
            isChecked ? 'text-gray-500' : ' text-marine-800'
          )}>
          Privat
        </span>
        <span
          className={clsx(
            'z-30 pt-1 pb-1.5 rounded-full w-16 font-mundial capsize text-xs text-center transform transition-colors duration-300',
            isChecked ? ' text-marine-800' : 'text-sky-200'
          )}>
          Erhverv
        </span>
      </label>
    </>
  );
}

ToggleButton.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
};
