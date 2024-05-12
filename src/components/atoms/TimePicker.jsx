import PropTypes from 'prop-types';

function TimePicker({ id, value, onChange }) {
  return (
    <form className='flex items-center justify-between w-full'>
      <label htmlFor={id} className='font-h5 text-gray-800'>
        Tidspunkt:
      </label>
      <div className='relative'>
        <div className='absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none'>
          <svg
            className='w-4 h-4 text-gray-500 '
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 24 24'>
            <path
              fillRule='evenodd'
              d='M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z'
              clipRule='evenodd'
            />
          </svg>
        </div>
        <input
          id={id}
          aria-label='Time'
          type='time'
          className='bg-gray-100 font-league text-sm capsize text-gray-600 px-3 p-3 rounded-md outline-none focus:outline-sky-200 focus:outline-2 focus:-outline-offset-2'
          value={value}
          onChange={onChange}
          required
        />
      </div>
    </form>
  );
}

TimePicker.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TimePicker;
