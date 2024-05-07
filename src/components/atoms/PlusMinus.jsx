import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus } from 'react-icons/fi';
import { FiMinus } from 'react-icons/fi';
import { useState } from 'react';

export default function PlusMinus() {
  const [isOpen, setIsOpen] = useState(false);

  return (
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
  );
}
