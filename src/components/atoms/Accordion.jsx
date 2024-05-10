import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus } from 'react-icons/fi';
import { FiMinus } from 'react-icons/fi';
import PropTypes from 'prop-types';

const Accordion = ({ title, body, image, altText }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className=' bg-white p-5 rounded-sm max-w-2xl w-full mb-4 cursor-pointer'
      onClick={() => setIsOpen((prev) => !prev)}>
      <div className='flex justify-between items-start'>
        <h5 className='font-h4 font-normal text-marine-800'>{title}</h5>
        <AnimatePresence initial={false} mode='wait'>
          <motion.div
            key={isOpen ? 'minus' : 'plus'}
            initial={{
              rotate: isOpen ? -90 : 90,
            }}
            animate={{
              zIndex: 1,
              rotate: 0,
              transition: {
                type: 'tween',
                duration: 0.15,
                ease: 'circOut',
              },
            }}
            exit={{
              zIndex: 0,
              rotate: isOpen ? -90 : 90,
              transition: {
                type: 'tween',
                duration: 0.15,
                ease: 'circIn',
              },
            }}>
            {isOpen ? (
              <FiMinus className='text-gray-500 ml-2' />
            ) : (
              <FiPlus className='text-gray-500 ml-2' />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {isOpen && (
          <div>
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: 'auto',
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              key={title}
              className='relative'>
              <p className='relative z-40 font-body-md pt-6 text-gray-700 whitespace-pre-line'>
                {body}
              </p>
              <div>
                {image ? (
                  <div className='absolute right-0 h-96 w-96'>
                    <img src={image} alt={altText} />
                  </div>
                ) : null}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  image: PropTypes.string,
  altText: PropTypes.string,
};

export default Accordion;
