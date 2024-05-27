import clsx from "clsx";
import PropTypes from "prop-types";

// Komponent til filtrerering på startbogstav på Fin parkering siden
export default function Filter({ onFilterChange, activeRange }) {
  // Definerer alfabetinterval for filterknapper
  const alphabetIntervals = [
    { label: "A - E", range: ["A", "B", "C", "D", "E"] },
    { label: "F - J", range: ["F", "G", "H", "I", "J"] },
    { label: "K - O", range: ["K", "L", "M", "N", "O"] },
    {
      label: "P - Å",
      range: [
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        "Æ",
        "Ø",
        "Å",
      ],
    },
  ];

  return (
    <div className="w-fill flex min-w-44 gap-y-1 space-x-0.5 rounded-full bg-white p-1">
      {/* Mapper hvert alfabetinterval og opretter en knap for hver */}
      {alphabetIntervals.map((interval) => (
        <button
          key={interval.label}
          onClick={() => onFilterChange(interval.range)} // Kald funktion når knappen trykkes
          className={clsx(
            "font-body-s md:font-body-xs cursor-pointer rounded-full px-3.5 py-1.5 uppercase text-gray-500 transition-colors duration-300 ease-in-out hover:bg-sky-100 hover:text-marine-600 md:px-2.5 md:py-1 xl:px-3",
            {
              "bg-sky-100 text-marine-600":
                activeRange.toString() === interval.range.toString(),
            },
          )}
        >
          {interval.label}
        </button>
      ))}
    </div>
  );
}

Filter.propTypes = {
  onFilterChange: PropTypes.func,
  activeRange: PropTypes.any,
};
