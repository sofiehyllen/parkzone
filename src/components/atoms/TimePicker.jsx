import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const TimePicker = ({ type, id }) => {
  const [arrivalHour, setArrivalHour] = useState(0);
  const [arrivalMinute, setArrivalMinute] = useState(0);
  const [departureHour, setDepartureHour] = useState(0);
  const [departureMinute, setDepartureMinute] = useState(0);

  // Function to handle hour selection
  const handleHourChange = (event) => {
    if (type === 'arrival') {
      setArrivalHour(parseInt(event.target.value));
    } else if (type === 'departure') {
      setDepartureHour(parseInt(event.target.value));
    }
  };

  // Function to handle minute selection
  const handleMinuteChange = (event) => {
    if (type === 'arrival') {
      setArrivalMinute(parseInt(event.target.value));
    } else if (type === 'departure') {
      setDepartureMinute(parseInt(event.target.value));
    }
  };

  useEffect(() => {
    const localStorageKey = (key) => `${key}_${id}`;

    if (type === 'arrival') {
      localStorage.setItem(
        localStorageKey('arrivalHour'),
        JSON.stringify(arrivalHour)
      );
      localStorage.setItem(
        localStorageKey('arrivalMinute'),
        JSON.stringify(arrivalMinute)
      );
    } else if (type === 'departure') {
      localStorage.setItem(
        localStorageKey('departureHour'),
        JSON.stringify(departureHour)
      );
      localStorage.setItem(
        localStorageKey('departureMinute'),
        JSON.stringify(departureMinute)
      );
    }
  }, [arrivalHour, arrivalMinute, departureHour, departureMinute, id, type]);

  console.log(
    type === 'arrival'
      ? `Arrival time: ${arrivalHour} : ${arrivalMinute}`
      : type === 'departure'
      ? `Departure time: ${departureHour} : ${departureMinute}`
      : ''
  );

  return (
    <div className='flex items-center justify-between'>
      <p className='font-h6 text-gray-800'>Tidspunkt:</p>
      <div>
        <select
          value={
            type === 'arrival'
              ? arrivalHour
              : type === 'departure'
              ? departureHour
              : ''
          }
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
          value={
            type === 'arrival'
              ? arrivalMinute
              : type === 'departure'
              ? departureMinute
              : ''
          }
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

TimePicker.propTypes = {
  type: PropTypes.oneOf(['arrival', 'departure']).isRequired,
  id: PropTypes.string.isRequired,
};

export default TimePicker;
