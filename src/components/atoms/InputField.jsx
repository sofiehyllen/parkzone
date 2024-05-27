import clsx from "clsx";
import PropTypes from "prop-types";
import { useState } from "react";

// Komponent for inputfield
const InputField = ({
  label,
  id,
  placeholder,
  type,
  description,
  className,
  value,
  onValidity,
}) => {
  // State til at holde styr på om inputtet er valid
  const [isValid, setIsValid] = useState(true);

  // Funktion der håndterer ændringer i inputfeltet
  const handleInputChange = (event) => {
    const inputValue = event.target.value; // Henter værdien fra inputfeltet
    let isValidInput = true;

    // Håndterer input baseret på typen
    if (type === "number") {
      // Tjekker om inputtet er et gyldigt tal
      isValidInput = !isNaN(inputValue) && inputValue.trim().length > 0;
    }
    setIsValid(isValidInput); // Opdaterer state for gyldigheden af inputtet
    onValidity(id, isValidInput); // Kalder onValidity callback med input id og gyldighed
  };

  return (
    <div className="flex w-full flex-col pb-4">
      <label htmlFor={id} className="font-h6 appearance-none pb-1.5">
        {label}
      </label>
      {description && <p className="font-body-xs pb-1.5">{description}</p>}
      <input
        value={value}
        type={type}
        id={id}
        placeholder={placeholder}
        className={clsx(
          "font-body-s w-full appearance-none rounded-sm border-none bg-gray-100 p-2 px-3 text-gray-800  outline-none placeholder:translate-y-0.5 placeholder:font-light placeholder:text-gray-400 placeholder:text-sm focus:outline-2 focus:-outline-offset-2 focus:outline-sky-200",
          className,
          !isValid && "outline-2 -outline-offset-2 outline-error-500", // Gør outline rød hvis ikke inputtet er valid
        )}
        onChange={handleInputChange}
        required
      />
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  description: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.any,
  onValidity: PropTypes.func,
};

export default InputField;
