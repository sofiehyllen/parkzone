import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import PropTypes from "prop-types";
import clsx from "clsx";

// Komponenten for Accordion
const Accordion = ({ title, body, color }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={clsx(
        " mb-4 w-full max-w-2xl cursor-pointer rounded-sm p-5",
        color,
      )}
      onClick={() => setIsOpen((prev) => !prev)} // Inverterer isOpen til det modsatte af dens aktuelle state
    >
      <div className="flex items-start justify-between">
        <h5 className="font-h5 font-normal text-marine-800">{title}</h5>
        <AnimatePresence initial={false} mode="wait">
          {/* Animation minus og plus med framer motion */}
          <motion.div
            key={isOpen ? "minus" : "plus"}
            initial={{
              rotate: isOpen ? -90 : 90,
            }}
            animate={{
              zIndex: 1,
              rotate: 0,
              transition: {
                type: "tween",
                duration: 0.15,
                ease: "circOut",
              },
            }}
            exit={{
              zIndex: 0,
              rotate: isOpen ? -90 : 90,
              transition: {
                type: "tween",
                duration: 0.15,
                ease: "circIn",
              },
            }}
          >
            {isOpen ? ( // Viser - eller + alt efter om accordion er åben eller lukket
              <FiMinus className="ml-2 text-gray-500" />
            ) : (
              <FiPlus className="ml-2 text-gray-500" />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {/* Animation af åbning og lukning med framer motion */}
        {isOpen && (
          <div>
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: "auto",
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              key={title}
              className="relative"
            >
              <p
                className={clsx(
                  "font-body-md relative z-40 whitespace-pre-line pb-3 pr-2 pt-6",
                  color === "bg-sky-50" ? "text-gray-900" : "text-gray-700",
                )}
              >
                {body}
              </p>
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
  altText: PropTypes.string,
  color: PropTypes.string,
};

export default Accordion;
