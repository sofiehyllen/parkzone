import PropTypes from 'prop-types';

const InputField = ({
  label,
  id,
  placeholder,
  type,
  description,
  className,
}) => {
  return (
    <div className='flex flex-col pb-4 w-full'>
      <label htmlFor={id} className='appearance-none font-h6 pb-1.5'>
        {label}
      </label>
      {description && <p className='font-body-xs pb-1.5'>{description}</p>}
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className={`appearance-none font-body-xs text-xs p-3 w-full rounded-sm placeholder:translate-y-0.5 text-gray-400 bg-gray-100 outline-none  focus:outline-sky-200 focus:outline-2 focus:-outline-offset-2 ${className}`}
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
};

export default InputField;
