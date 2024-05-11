import { useState } from 'react';

const TimePicker = () => {
  const [selectedHour, setSelectedHour] = useState(0);
  const [selectedMinute, setSelectedMinute] = useState(0);

  // Function to handle hour selection
  const handleHourChange = (event) => {
    setSelectedHour(parseInt(event.target.value));
  };

  // Function to handle minute selection
  const handleMinuteChange = (event) => {
    setSelectedMinute(parseInt(event.target.value));
  };

  console.log(selectedHour, selectedMinute);

  return (
    <div className='flex items-center justify-between'>
      <p className='font-h6 text-gray-800'>Tidspunkt:</p>
      <div>
        <select
          value={selectedHour}
          onChange={handleHourChange}
          className='bg-gray-100 font-league text-xs text-gray-600 pb-1.5 pt-2 pr-2.5 px-1.5 rounded-sm outline-none cursor-pointer hover:bg-gray-200  border-transparent border-r-8  placeholder:text-red-500'>
          {[...Array(24).keys()].map((hour) => (
            <option key={hour} value={hour}>
              {hour < 10 ? `0${hour}` : hour}
            </option>
          ))}
        </select>
        <span className='font-league text-xs text-gray-600 px-1'> : </span>
        <select
          value={selectedMinute}
          onChange={handleMinuteChange}
          className='bg-gray-100 font-league text-xs text-gray-600 pb-1.5 pt-2 pr-2.5 px-1.5 rounded-sm  outline-none cursor-pointer hover:bg-gray-200  border-transparent border-r-8'>
          {[...Array(60).keys()]
            .filter((minute) => minute % 5 === 0)
            .map((minute) => (
              <option key={minute} value={minute}>
                {minute < 10 ? `0${minute}` : minute}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default TimePicker;
