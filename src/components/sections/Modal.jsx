import PropTypes from 'prop-types';

const Modal = ({ show, onClose, children }) => {
  // If show is false, return null to hide the modal
  if (!show) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none'>
      <div className='modal-overlay fixed inset-0 transition-opacity bg-gray-900 opacity-50'></div>
      <div className='modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto'>
        <div
          className='modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50'
          onClick={onClose}>
          <svg
            className='fill-current text-white'
            xmlns='http://www.w3.org/2000/svg'
            width='18'
            height='18'
            viewBox='0 0 18 18'>
            <path
              d='M5.83 5.88L9 9.05l3.17-3.17a1 1 0 011.41 1.41L10.41 10l3.17 3.17a1 1 0 11-1.41 1.41L9 11.41l-3.17 3.17a1 1 0 01-1.41-1.41L7.59 10 4.41 6.83a1 1 0 010-1.41 1 1 0 011.42 0z'
              fillRule='evenodd'
            />
          </svg>
          <span className='text-sm'>(Esc)</span>
        </div>
        <div className='modal-content py-4 text-left px-6'>{children}</div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
