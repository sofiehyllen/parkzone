import PropTypes from "prop-types";
import { FaCheck } from "react-icons/fa6";
import Button from "./Button";

// Komponent for radio-knapper
export default function RadioButton({
  value,
  label,
  type,
  checked,
  onChange,
  style,
}) {
  return (
    <label
      htmlFor={value}
      className="relative inline-flex cursor-pointer items-start"
    >
      <FaCheck className="absolute left-0.5 top-0.5 h-2 w-auto text-white" />

      <input
        type={type}
        name="radio-button"
        id={value}
        value={value}
        checked={checked}
        onChange={onChange}
        className="h-3 w-3 flex-shrink-0 appearance-none rounded-full border-1 border-marine-800 checked:bg-marine-800"
      />
      {style === "small" ? (
        <div className="font-body-xs ml-2 cursor-pointer">
          {label}
          <span className="w-fit pl-1">
            <Button variant="link" size="sm" to="/persondata">
              her
            </Button>
            .
          </span>
        </div>
      ) : (
        <span className="font-h6 ml-2 cursor-pointer pt-0.5">{label}</span>
      )}
    </label>
  );
}

RadioButton.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  style: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};
