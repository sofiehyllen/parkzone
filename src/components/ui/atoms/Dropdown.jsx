// Dropdown.js
import { useState } from "react";
import PropTypes from "prop-types";
import { FaChevronDown } from "react-icons/fa6";
import clsx from "clsx";

// Komponent for dropdown
const Dropdown = ({
  dropdownOptions,
  onSelect,
  label,
  placeholder,
  className,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for at holde styr på om dropdown er åben
  const [selectedDropdownOption, setSelectedDropdownOption] = useState(null); // State for at holde styr på den valgte mulighed

  // Funktion der håndterer valg af en mulighed i dropdown
  const handleDropdown = (option) => {
    setSelectedDropdownOption(option); // Sætter den valgte mulighed
    onSelect(option); // Kalder onSelect
    setIsDropdownOpen(false); // Lukker dropdown
  };

  return (
    <div className="relative pb-4">
      <p className="font-h6 pb-1.5">{label}</p>
      <div className="relative">
        <div
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className={clsx(
            "font-body-s  cursor-pointer rounded-sm bg-gray-100 p-3 py-4 text-sm placeholder:text-sm focus:outline-2 focus:-outline-offset-2 focus:outline-sky-200",
            className,
            selectedDropdownOption ? "text-gray-800" : "text-gray-400",
          )}
        >
          {selectedDropdownOption || placeholder}
          <FaChevronDown className="absolute right-3 top-3 text-gray-500" />
        </div>
      </div>
      {isDropdownOpen && (
        <div className="absolute left-0 top-16 z-10 w-full rounded-md bg-white shadow-md">
          {/* Mapper alle angivne muligheder */}
          {dropdownOptions.map((option) => (
            <div
              key={option}
              onClick={() => handleDropdown(option)}
              className="font-body-s cursor-pointer px-4 py-3 text-gray-800 hover:bg-gray-100"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  dropdownOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  required: PropTypes.bool,
};

export default Dropdown;
