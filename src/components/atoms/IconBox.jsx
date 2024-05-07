import PropTypes from 'prop-types';

function IconBox({ text, icon }) {
  return (
    <div className='px-6 py-10 bg-marine-300 rounded-xl w-full flex flex-col items-center space-y-7'>
      <div className='rounded-full p-3 bg-white w-fit'>{icon}</div>
      <p className='font-h4 text-center text-white'>{text}</p>
    </div>
  );
}

IconBox.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.any,
};

export default IconBox;
