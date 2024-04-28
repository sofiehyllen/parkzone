import PropTypes from 'prop-types';

export default function FilterButton() {
  return (
    <div className='bg-gray-100 rounded-full p-1 flex w-fit'>
      <p className='font-h6 uppercase text-gray-500 px-3 py-2 rounded-full'>
        Alle
      </p>
      <p className='font-h6 uppercase text-gray-500 px-3 py-2 rounded-full'>
        Nyheder
      </p>
      <p className='font-h6 uppercase text-gray-500 px-3 py-2 rounded-full'>
        Finans
      </p>
      <p className='font-h6 uppercase text-gray-500 px-3 py-2 rounded-full'>
        Projekter
      </p>
    </div>
  );
}

FilterButton.propTypes = {
  heading: PropTypes.string,
};
