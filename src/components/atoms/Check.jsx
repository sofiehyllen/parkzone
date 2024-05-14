import PropTypes from 'prop-types';
import Checkmark from '../svg/Checkmark.jsx';

function Check({ text }) {
  return (
    <div className='flex space-x-5 items-center '>
      <Checkmark />
      <p className='font-body-s sm:font-body-md 4xl:font-body-l'>{text}</p>
    </div>
  );
}

Check.propTypes = {
  text: PropTypes.string,
};

export default Check;
