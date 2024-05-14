import PropTypes from 'prop-types';
import clsx from 'clsx';

const Alert = ({ type, text, title }) => {
  return (
    <div
      className={clsx(
        'bg-white shadow-xl p-5 absolute z-50 rounded-lg border-l-1',
        type === 'succes'
          ? 'border-succes'
          : type === 'error'
          ? 'border-error'
          : ''
      )}>
      <p className='font-h5'>{title}</p>
      <p className='font-body-s'>{text}</p>
    </div>
  );
};

Alert.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};

export default Alert;
