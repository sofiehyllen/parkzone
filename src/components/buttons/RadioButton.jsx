import PropTypes from 'prop-types';
import { FaCheck } from 'react-icons/fa6';
import Button from './Button';

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
      className='inline-flex items-start relative cursor-pointer'>
      <FaCheck className='text-white h-2 w-auto absolute left-0.5 top-0.5' />

      <input
        type={type}
        name='radio-button'
        id={value}
        value={value}
        checked={checked}
        onChange={onChange}
        className='appearance-none h-3 w-3 flex-shrink-0 rounded-full border-1 border-marine-800 checked:bg-marine-800'
      />
      {style === 'small' ? (
        <div className='ml-2 font-body-xs cursor-pointer'>
          {label}
          <span className='pl-1 w-fit'>
            <Button variant='link' size='sm'>
              her
            </Button>
            .
          </span>
        </div>
      ) : (
        <span className='ml-2 font-h6 cursor-pointer pt-0.5'>{label}</span>
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
