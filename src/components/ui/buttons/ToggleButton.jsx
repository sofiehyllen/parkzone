import PropTypes from "prop-types";
import clsx from "clsx";

// Komponent for toggle-knappen til styring af skift mellem erhvervsiden og privatsiden
export default function ToggleButton({ isChecked, handleToggle }) {
  // Funktion til styring af toggle-knappens state
  const handleChange = () => {
    handleToggle();
  };

  return (
    <>
      <label
        htmlFor="ToggleButton"
        className={clsx(
          "relative inline-flex cursor-pointer items-center rounded-full p-1 transition-colors duration-300 md:p-0.5",
          isChecked ? "bg-marine-800" : "bg-sky-300",
        )}
        onChange={handleChange}
      >
        <input
          id="ToggleButton"
          type="checkbox"
          className="peer hidden"
          onChange={handleChange}
          checked={isChecked}
        />
        <span
          className={clsx(
            "absolute h-7 w-20 transform rounded-full bg-white transition duration-300 md:h-[19px] md:w-16",
            isChecked ? "translate-x-full" : "translate-x-0",
          )}
        ></span>
        <span
          className={clsx(
            "z-30 w-20 transform rounded-full pb-2 pt-1.5 text-center transition-colors duration-300 font-mundial text-base capsize md:w-16 md:pb-1.5 md:pt-1 md:text-xs",
            isChecked ? "text-gray-500" : " text-marine-800",
          )}
        >
          Privat
        </span>
        <span
          className={clsx(
            "z-30 w-20 transform rounded-full pb-2 pt-1.5 text-center transition-colors duration-300 font-mundial text-base capsize md:w-16 md:pb-1.5 md:pt-1 md:text-xs",
            isChecked ? " text-marine-800" : "text-sky-100",
          )}
        >
          Erhverv
        </span>
      </label>
    </>
  );
}

ToggleButton.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
};
