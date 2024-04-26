// Dropdown.js
import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaChevronDown } from 'react-icons/fa6';

const Dropdown = ({ dropdownOptions, onSelect, label, placeholder, className }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedDropdownOption, setSelectedDropdownOption] = useState(null);

  const handleDropdown = (option) => {
    setSelectedDropdownOption(option);
    onSelect(option);
    setIsDropdownOpen(false);
  };

  return (
    <div className='relative pb-4'>
      <p className='font-h6 pb-1.5'>{label}</p>

      <div className='relative'>
        <div
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className={`text-gray-400 bg-gray-100 font-body-xs text-xs p-3 py-4 rounded-sm cursor-pointer ${className}`}>
          {selectedDropdownOption || placeholder}
          <FaChevronDown className='absolute right-3 top-3' />
        </div>
      </div>
      {isDropdownOpen && (
        <div className='absolute z-10 top-16 left-0 w-full bg-white shadow-md rounded-md'>
          {dropdownOptions.map((option) => (
            <div
              key={option}
              onClick={() => handleDropdown(option)}
              className='cursor-pointer px-4 hover:bg-gray-100 font-body-s py-3'>
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
};

export default Dropdown;
