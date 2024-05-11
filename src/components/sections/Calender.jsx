import { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const handlePrevMonth = () => {
    setCurrentDate((prevDate) => {
      const prevMonthDate = new Date(prevDate);
      prevMonthDate.setMonth(prevMonthDate.getMonth() - 1);
      return prevMonthDate;
    });
  };

  const handleNextMonth = () => {
    setCurrentDate((prevDate) => {
      const nextMonthDate = new Date(prevDate);
      nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);
      return nextMonthDate;
    });
  };

  const renderCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    let firstDayOfMonth = getFirstDayOfMonth(year, month);

    // Adjusting firstDayOfMonth to start the week on Monday
    if (firstDayOfMonth === 0) {
      firstDayOfMonth = 6; // Sunday
    } else {
      firstDayOfMonth -= 1;
    }

    const calendar = [];

    let dayCounter = 1;

    for (let i = 0; i < 6; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < firstDayOfMonth) || dayCounter > daysInMonth) {
          week.push(<td key={`${i}-${j}`}></td>);
        } else {
          week.push(
            <td key={`${i}-${j}`} className=''>
              <button
                className='h-8 w-8 hover:bg-gray-200 rounded-full font-league capsize text-sm'
                onClick={() => handleDateClick(dayCounter)}>
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

  const handleDateClick = (day) => {
    console.log(
      `Selected date: ${day}/${
        currentDate.getMonth() + 1
      }/${currentDate.getFullYear()}`
    );
    // You can add your logic here to handle the selected date
  };

  return (
    <div className='max-w-fit bg-white p-4 rounded-xl'>
      <div className='flex justify-between items-center py-2 pb-4'>
        <button
          className='h-8 w-8 pr-0.5 rounded-full text-gray-400 border-1 border-gray-200 flex justify-center items-center hover:bg-gray-200 text-lg'
          onClick={handlePrevMonth}>
          <IoIosArrowBack />
        </button>
        <h2 className='font-mundial text-sm font-bold text-gray-700 capitalize'>{`${currentDate.toLocaleString(
          'default',
          {
            month: 'long',
          }
        )} ${currentDate.getFullYear()}`}</h2>
        <button
          className='h-8 w-8 pl-0.5 rounded-full text-gray-400 border-1 border-gray-200 flex justify-center items-center hover:bg-gray-200 text-lg'
          onClick={handleNextMonth}>
          <IoIosArrowForward />
        </button>
      </div>
      <table className='table-auto'>
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
    </div>
  );
};

export default Calendar;
