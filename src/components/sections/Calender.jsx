import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import TimePicker from '../atoms/TimePicker';

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  // Funktion som finder antallet af dage i en måned
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Funktion som finder første dag i måneden
  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  // Funktion som styrer 'Forrige måned' knappen
  const handlePrevMonth = () => {
    setCurrentMonth((prevMonth) => {
      const prevMonthDate = new Date(prevMonth);
      prevMonthDate.setMonth(prevMonthDate.getMonth() - 1);
      return prevMonthDate;
    });
  };

  // Funktion som styrer 'Næste måned' knappen
  const handleNextMonth = () => {
    setCurrentMonth((prevMonth) => {
      const nextMonthDate = new Date(prevMonth);
      nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);
      return nextMonthDate;
    });
  };

  // Funktion som styrer hvad der sker når der klikkes på en dato
  const handleDateClick = (day) => {
    setSelectedDate(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
    );
  };

  useEffect(() => {
    console.log(selectedDate);
  }, [selectedDate]);

  // Funktion som renderer kalenderen
  const renderCalendar = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    let firstDayOfMonth = getFirstDayOfMonth(year, month);

    // Justering så månedens første dag er mandag
    if (firstDayOfMonth === 0) {
      firstDayOfMonth = 6; // Sunday
    } else {
      firstDayOfMonth -= 1;
    }

    const calendar = [];
    // Variabel til at holde styr på hver dag i måneden
    let dayCounter = 1;

    // Loop som renderer hver uge i kalenderen, med et maksimum på 6 uger i en måned
    for (let i = 0; i < 6; i++) {
      const week = [];
      // Loop som renderer hver dag i ugen, med et maksimum på 7 dage i en uge
      for (let j = 0; j < 7; j++) {
        let day = null;
        if ((i === 0 && j < firstDayOfMonth) || dayCounter > daysInMonth) {
          // Rendering af tomme celler før og efter månedens første og sidste dato
          week.push(<td key={`${i}-${j}`}></td>);
        } else {
          day = dayCounter;
          // Determine if the current button represents the current date
          const isCurrentDate = dayCounter === currentMonth.getDate();

          const isSelectedDate =
            selectedDate &&
            selectedDate.getDate() === dayCounter &&
            selectedDate.getMonth() === currentMonth.getMonth() &&
            selectedDate.getFullYear() === currentMonth.getFullYear();

          // Rendering af en button for hver dag i måneden
          week.push(
            <td key={`${i}-${j}`}>
              <button
                className={clsx(
                  'h-8 w-8 text-gray-900 hover:bg-gray-200 rounded-full font-league capsize text-sm',
                  isSelectedDate &&
                    'bg-marine-400 text-white hover:bg-marine-500',
                  isCurrentDate &&
                    !isSelectedDate &&
                    'bg-marine-50 text-marine-500 hover:text-gray-900'
                )}
                onClick={() => handleDateClick(day)}>
                {dayCounter}
              </button>
            </td>
          );

          dayCounter++;
        }
      }
      calendar.push(<tr key={i}>{week}</tr>);
    }

    return calendar;
  };

  return (
    <div>
      <div className='max-w-fit bg-white p-4 rounded-xl shadow-md'>
        <div className='flex justify-between items-center py-2 pb-4'>
          <button
            className='h-8 w-8 pr-0.5 rounded-full text-gray-400 border-1 border-gray-200 flex justify-center items-center hover:bg-gray-200 text-lg'
            onClick={handlePrevMonth}>
            <IoIosArrowBack />
          </button>
          <h2 className='font-mundial text-sm font-bold text-gray-600 capitalize'>{`${currentMonth.toLocaleString(
            'default',
            {
              month: 'long',
            }
          )} ${currentMonth.getFullYear()}`}</h2>
          <button
            className='h-8 w-8 pl-0.5 rounded-full text-gray-400 border-1 border-gray-200 flex justify-center items-center hover:bg-gray-200 text-lg'
            onClick={handleNextMonth}>
            <IoIosArrowForward />
          </button>
        </div>
        <table className='table-auto mb-3'>
          <thead>
            <tr className='font-mundial text-gray-500 text-sm'>
              <th className='size-8 font-light'>Ma</th>
              <th className='size-8 font-light'>Ti</th>
              <th className='size-8 font-light'>On</th>
              <th className='size-8 font-light'>To</th>
              <th className='size-8 font-light'>Fr</th>
              <th className='size-8 font-light'>Lø</th>
              <th className='size-8 font-light'>Sø</th>
            </tr>
          </thead>
          <tbody>{renderCalendar()}</tbody>
        </table>
        <TimePicker />
      </div>
    </div>
  );
};

export default Calendar;
