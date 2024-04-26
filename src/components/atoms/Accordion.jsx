import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus } from 'react-icons/fi';
import { FiMinus } from 'react-icons/fi';

const Accordion = (answer) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className=' bg-white p-5 rounded-sm max-w-lg mb-4 cursor-pointer'
      onClick={() => setIsOpen((prev) => !prev)}>
      <div className='flex justify-between items-start'>
        <h5 className='font-h5 text-marine-800'>
          Kan jeg stille spørgsmål angående en kontrolafgift, selvom jeg ikke
          har et løbenummer?
        </h5>
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
              <FiMinus className='text-gray-500' />
            ) : (
              <FiPlus className='text-gray-500' />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {isOpen && (
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
            key={answer}>
            <p className='font-body-s pt-5 text-gray-700'>
              Ja, du kan sagtens stille spørgsmål angående en kontrolafgift,
              selvom du ikke har et løbenummer. Husk at sætte hak ved feltet Ej
              tildelt. Husk også at dobbelttjekke om dine kontaktoplysninger er
              indtastet korrekt, da vi bruger dem til at kontakte dig.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
