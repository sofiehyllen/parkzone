import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';
import clsx from 'clsx';
import { IoCloseOutline } from 'react-icons/io5';
import { IoAlert } from 'react-icons/io5';
import { IoCheckmark } from 'react-icons/io5';
import { useCallback } from 'react';

const Alert = ({ isVisible, type, text, title, onClose, children }) => {
  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0, opacity: 100 }}
          exit={{ x: '100%', opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={clsx(
            'bg-white drop-shadow-xl flex p-5 fixed top-5 right-5 ml-5 sm:top-10 sm:min-w-96 max-w-lg sm:right-10 z-50 rounded-lg border-l-3',
            type === 'success'
              ? 'border-success'
              : type === 'error'
              ? 'border-error'
              : type === 'default'
              ? 'border-marine-500'
              : ''
          )}>
          {type === 'success' ? (
            <div className='rounded-full h-9 w-9 flex items-center justify-center shrink-0 bg-[#F5FCEA]'>
              <IoCheckmark className='text-success text-xl' />
            </div>
          ) : type === 'error' ? (
            <div className='rounded-full h-9 w-9 flex items-center justify-center shrink-0 bg-red-50'>
              <IoAlert className='text-error text-xl' />
            </div>
          ) : type === 'default' ? (
            <div className='rounded-full h-9 w-9 flex items-center justify-center shrink-0 bg-sky-50'>
              <p className='text-marine-500 font-mundial capsize text-xl font-semibold pb-1 uppercase'>
                P
              </p>
            </div>
          ) : (
            ''
          )}

          <div className='px-5 pt-3 pb-2'>
            <p
              className={clsx(
                'font-h4 pb-4 ',
                type === 'success'
                  ? 'text-success'
                  : type === 'error'
                  ? 'text-error'
                  : type === 'default'
                  ? 'text-marine-500'
                  : ''
              )}>
              {title}
            </p>
            <p className='font-body-s pb-5'>{text}</p>
            {children}
          </div>

          <IoCloseOutline
            className='absolute top-3 right-3 text-gray-500 text-2xl cursor-pointer'
            onClick={handleClose}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

Alert.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  type: PropTypes.oneOf(['success', 'error', 'default', '']),
  title: PropTypes.string,
  text: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Alert;
