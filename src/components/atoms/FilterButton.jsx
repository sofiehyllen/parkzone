import PropTypes from 'prop-types';

export default function FilterButton({
  heading1,
  heading2,
  heading3,
  heading4,
}) {
  return (
    <div className='bg-gray-100 rounded-full p-1 flex w-fit'>
      <p className='font-h6 uppercase text-gray-500 px-3 py-2 rounded-full'>
        {heading1}
      </p>
      <p className='font-h6 uppercase text-gray-500 px-3 py-2 rounded-full'>
        {heading2}
      </p>
      <p className='font-h6 uppercase text-gray-500 px-3 py-2 rounded-full'>
        {heading3}
      </p>
      <p className='font-h6 uppercase text-gray-500 px-3 py-2 rounded-full'>
        {heading4}
      </p>
    </div>
  );
}

FilterButton.propTypes = {
  heading1: PropTypes.string,
  heading2: PropTypes.string,
  heading3: PropTypes.string,
  heading4: PropTypes.string,
};
