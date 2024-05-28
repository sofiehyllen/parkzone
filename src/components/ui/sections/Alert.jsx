import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { IoCloseOutline } from "react-icons/io5";
import { IoAlert } from "react-icons/io5";
import { IoCheckmark } from "react-icons/io5";
import { useCallback } from "react";

// Komponent for alert besked
const Alert = ({ isVisible, type, text, title, onClose, children }) => {
  // Funktion til håndtering af lukning af alert
  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        // Animering af indgang og udgang med framer motion
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 100 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={clsx(
            "fixed bottom-5 right-5 z-50 ml-5 flex max-w-lg rounded-lg border-l-3 bg-white px-5 pt-5 drop-shadow-xl sm:bottom-10 sm:right-10 sm:min-w-96",
            type === "success" // Farveskift på baggrund af type
              ? "border-success-500"
              : type === "error"
                ? "border-error-500"
                : type === "default"
                  ? "border-marine-500"
                  : "",
          )}
        >
          {type === "success" ? ( // Ikon på baggrund af type
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-success-50">
              <IoCheckmark className="text-success-500 text-xl" />
            </div>
          ) : type === "error" ? (
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-error-50">
              <IoAlert className="text-error-500 text-xl" />
            </div>
          ) : type === "default" ? (
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-50">
              <p className="pb-1 font-semibold uppercase text-marine-500 font-mundial text-xl capsize">
                P
              </p>
            </div>
          ) : (
            ""
          )}

          <div className="px-5 pb-2 pt-3">
            <p
              className={clsx(
                // Titelfarve på baggrund af type
                "font-h4 pb-4 ",
                type === "success"
                  ? "text-success-500"
                  : type === "error"
                    ? "text-error-500"
                    : type === "default"
                      ? "text-marine-500"
                      : "",
              )}
            >
              {title}
            </p>
            <p className="font-body-s pb-5">{text}</p>
            <div className="pb-4">{children}</div>
          </div>

          <IoCloseOutline
            className="absolute right-3 top-3 cursor-pointer text-gray-500 text-2xl"
            onClick={handleClose}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

Alert.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  type: PropTypes.oneOf(["success", "error", "default", ""]),
  title: PropTypes.string,
  text: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Alert;
