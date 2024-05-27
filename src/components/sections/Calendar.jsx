import clsx from "clsx";
import { useEffect, useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import PropTypes from "prop-types";
import TimePicker from "../atoms/TimePicker";

// Komponent for kalenderen i PaymentFlow
const Calendar = ({ type, id }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [arrivalDateAndTime, setArrivalDateAndTime] = useState(new Date());
  const [departureDateAndTime, setDepartureDateAndTime] = useState(new Date());

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

  // Funktion som styrer hvad der sker når der klikkes på en dato for både ankomst og afgang
  const handleDateClick = (day) => {
    // Opretter et nyt Date-objekt med den valgte dag i den aktuelle måned og år
    const selectedDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day,
    );
    // Tjekker om typen er 'arrival'
    if (type === "arrival") {
      // Opdaterer ankomstdato og tid
      setArrivalDateAndTime((prevValue) => {
        const newDateAndTime = new Date(prevValue);
        // Sætter år, måned og dag til den valgte dato
        newDateAndTime.setFullYear(selectedDate.getFullYear());
        newDateAndTime.setMonth(selectedDate.getMonth());
        newDateAndTime.setDate(selectedDate.getDate());
        return newDateAndTime;
      });

      // Tjekker om typen er 'departure' (afgang)
    } else if (type === "departure") {
      // Opdaterer afrejsedato og tid
      setDepartureDateAndTime((prevValue) => {
        const newDateAndTime = new Date(prevValue);
        // Sætter år, måned og dag til den valgte dato
        newDateAndTime.setFullYear(selectedDate.getFullYear());
        newDateAndTime.setMonth(selectedDate.getMonth());
        newDateAndTime.setDate(selectedDate.getDate());
        return newDateAndTime;
      });
    }
  };
  // Funktion som håndterer tidsændring for både ankomst og afgang
  const handleTimeChange = (timeString, type) => {
    // Finder timer og minutter
    const [hours, minutes] = timeString.split(":").map(Number);
    // Tjekker om typen er 'arrival' (ankomst)
    if (type === "arrival") {
      // Opdaterer ankomsttid
      setArrivalDateAndTime((prevValue) => {
        const newDateTime = new Date(prevValue);
        // Sætter timer og minutter til den valgte tid
        newDateTime.setHours(hours);
        newDateTime.setMinutes(minutes);
        return newDateTime;
      });

      // Tjekker om typen er 'departure' (afgang)
    } else if (type === "departure") {
      // Opdaterer afgangstid
      setDepartureDateAndTime((prevValue) => {
        const newDateTime = new Date(prevValue);
        // Sætter timer og minutter til den valgte tid
        newDateTime.setHours(hours);
        newDateTime.setMinutes(minutes);
        return newDateTime;
      });
    }
  };

  // useEffect hook som gemmer ankomst- og afgangsdato og tid i localStorage
  useEffect(() => {
    // Funktion til at oprette en lokalStorage nøgle baseret på nøgle og id
    const localStorageKey = (key) => `${key}_${id}`;

    // Hvis typen er "arrival" gemmes værdien som arrivalDateAndTime
    if (type === "arrival") {
      localStorage.setItem(
        localStorageKey("arrivalDateAndTime"),
        arrivalDateAndTime,
      );

      // Hvis typen er "departure" gemmes værdien som departureDateAndTime
    } else if (type === "departure") {
      localStorage.setItem(
        localStorageKey("departureDateAndTime"),
        departureDateAndTime,
      );
    }
  }, [arrivalDateAndTime, departureDateAndTime, id, type]);

  // Funktion som renderer kalenderen
  const renderCalendar = () => {
    // Finder aktuelle år, måned, dag, samt første ugedag i måneden
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    let firstDayOfMonth = getFirstDayOfMonth(year, month);

    // Justering så månedens første dag er mandag
    if (firstDayOfMonth === 0) {
      firstDayOfMonth = 6;
    } else {
      firstDayOfMonth -= 1;
    }

    const calendar = []; // Starter med tomt array til kalenderen

    let dayCounter = 1; // Variabel til at holde styr på hver dag i måneden

    // Loop som renderer hver uge i kalenderen, med et maksimum på 6 uger i en måned
    for (let i = 0; i < 6; i++) {
      const week = []; // Starter med tomt array til ugen
      // Loop som renderer hver dag i ugen, med et maksimum på 7 dage i en uge
      for (let j = 0; j < 7; j++) {
        let day = null; // Variable til dagen
        if ((i === 0 && j < firstDayOfMonth) || dayCounter > daysInMonth) {
          // Rendering af tomme celler før og efter månedens første og sidste dato
          week.push(<td key={`${i}-${j}`}></td>); // Tilføjer en tom celle til ugen
        } else {
          day = dayCounter; // Sætter day til dayCounter

          const isCurrentDate = dayCounter === currentMonth.getDate(); // Tjekker om den aktuelle dag er i dag

          // Tjekker om den valgte dag er ankomst- eller afgangsdatoen
          const isSelectedDate =
            (type === "arrival" &&
              arrivalDateAndTime &&
              arrivalDateAndTime.getDate() === dayCounter &&
              arrivalDateAndTime.getMonth() === currentMonth.getMonth() &&
              arrivalDateAndTime.getFullYear() ===
                currentMonth.getFullYear()) ||
            (type === "departure" &&
              departureDateAndTime &&
              departureDateAndTime.getDate() === dayCounter &&
              departureDateAndTime.getMonth() === currentMonth.getMonth() &&
              departureDateAndTime.getFullYear() ===
                currentMonth.getFullYear());

          // Rendering af en button for hver dag i måneden
          week.push(
            <td key={`${i}-${j}`}>
              <button
                className={clsx(
                  "h-8 w-8 rounded-full text-gray-900 font-league text-sm capsize hover:bg-gray-200",
                  isSelectedDate &&
                    "bg-marine-400 text-white hover:bg-marine-500", // Styling for den valgte dato
                  isCurrentDate &&
                    !isSelectedDate &&
                    "bg-marine-50 text-marine-500 hover:text-gray-900", // Styling for den aktuelle dato
                )}
                onClick={() => handleDateClick(day)}
              >
                {/* Viser dagen i knappen */}
                {dayCounter}
              </button>
            </td>,
          );

          dayCounter++; // Øger dayCounter med 1 når en ny dag starter (datoen skifter til næste dato i måneden)
        }
      }
      calendar.push(<tr key={i}>{week}</tr>); // Tilføjer ugen til kalenderen
    }

    return calendar; // Returnerer kalenderen
  };

  return (
    <>
      <div>
        <p className="font-h4 md:font-h5 pb-5 text-center text-gray-800 sm:text-left">
          {type === "arrival"
            ? "Vælg ankomst"
            : type === "departure"
              ? "Vælg afgang"
              : null}
        </p>
        <div className="max-w-fit rounded-xl bg-white p-4 shadow-md">
          <div className="flex items-center justify-between py-2 pb-4">
            <button
              className="flex h-8 w-8 items-center justify-center rounded-full border-1 border-gray-200 pr-0.5 text-gray-400 text-lg hover:bg-gray-200"
              onClick={handlePrevMonth}
            >
              <IoIosArrowBack />
            </button>
            <h2 className="font-bold capitalize text-gray-600 font-mundial text-sm">{`${currentMonth.toLocaleString(
              "default",
              {
                month: "long",
              },
            )} ${currentMonth.getFullYear()}`}</h2>
            <button
              className="flex h-8 w-8 items-center justify-center rounded-full border-1 border-gray-200 pl-0.5 text-gray-400 text-lg hover:bg-gray-200"
              onClick={handleNextMonth}
            >
              <IoIosArrowForward />
            </button>
          </div>
          <table className="mb-3 table-auto">
            <thead>
              <tr className="text-gray-500 font-mundial text-sm">
                <th className="size-8 font-light">Ma</th>
                <th className="size-8 font-light">Ti</th>
                <th className="size-8 font-light">On</th>
                <th className="size-8 font-light">To</th>
                <th className="size-8 font-light">Fr</th>
                <th className="size-8 font-light">Lø</th>
                <th className="size-8 font-light">Sø</th>
              </tr>
            </thead>
            <tbody>{renderCalendar()}</tbody>
          </table>
          <div className="flex items-center justify-between">
            {type === "arrival" && (
              <TimePicker
                id="arrivalTime"
                value={arrivalDateAndTime}
                onChange={(time) => handleTimeChange(time, "arrival")}
              />
            )}
            {type === "departure" && (
              <TimePicker
                id="departureTime"
                value={departureDateAndTime}
                onChange={(time) => handleTimeChange(time, "departure")}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

Calendar.propTypes = {
  type: PropTypes.oneOf(["arrival", "departure"]),
  id: PropTypes.string.isRequired,
};

export default Calendar;
