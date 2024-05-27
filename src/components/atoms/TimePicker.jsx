import PropTypes from "prop-types";

// Komponenten for tidsvælger til kalender i betalingsflowet på siden for parkeringsområde
function TimePicker({ id, value, onChange }) {
  // Formaterer en given tid til 'HH:MM' format
  const formatTime = (time) => {
    const hours = String(time.getHours()).padStart(2, "0"); // Tilføjer foranstillede nuller til timer
    const minutes = String(time.getMinutes()).padStart(2, "0"); // Tilføjer foranstillede nuller til minutter
    return `${hours}:${minutes}`;
  };

  // Håndterer ændringer for tiden
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <form className="flex w-full items-center justify-between">
      <label htmlFor={id} className="font-h5 text-gray-800">
        Tidspunkt:
      </label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 end-0 top-0 flex items-center pe-3.5">
          {/* SVG ikon for ur */}
          <svg
            className="h-4 w-4 text-gray-500 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <input
          id={id}
          aria-label="Time"
          type="time"
          className="rounded-md bg-gray-100 p-3 px-3 text-gray-600 outline-none font-league text-sm capsize focus:outline-2 focus:-outline-offset-2 focus:outline-sky-200"
          value={formatTime(value)}
          onChange={handleChange}
          required
        />
      </div>
    </form>
  );
}

TimePicker.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
};

export default TimePicker;
