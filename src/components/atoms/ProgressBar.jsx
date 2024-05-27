import clsx from "clsx";
import PropTypes from "prop-types";

// Komponent for progress steps i betalingsflowet på siden for parkeringsområde
const ProgressBar = ({ currentStep }) => {
  return (
    <div className="mb-10 w-fit">
      <ol className="font-h6 flex w-full items-center uppercase text-gray-300">
        <li
          // Hvert trin er stylet til af være blå eller grå, betinget efter det aktuelle trin
          className={clsx(
            "relative flex w-24 text-marine-400 after:absolute after:left-9 after:top-8 after:inline-block after:h-0.5 after:w-28 after:content-[''] sm:w-36 sm:after:w-40",
            currentStep === 3 || currentStep === 4
              ? "after:bg-marine-400"
              : "after:bg-gray-300",
          )}
        >
          <div className="z-10 block ">
            Produkt
            <span className="mx-auto mt-1 flex size-4 items-center justify-center rounded-full border-2 border-marine-400 bg-marine-50">
              <div className="size-2 rounded-full bg-marine-400"></div>
            </span>
          </div>
        </li>
        <li
          className={clsx(
            "relative flex  w-36 after:absolute  after:left-16 after:top-8 after:inline-block after:h-0.5 after:w-28 after:content-[''] sm:w-48 sm:after:w-40",
            currentStep === 3
              ? "text-marine-400 after:bg-gray-300"
              : currentStep === 4
                ? "text-marine-400 after:bg-marine-400"
                : "after:bg-gray-300",
          )}
        >
          <div className="z-10 block">
            Dine oplysninger
            <span
              className={clsx(
                "mx-auto mt-1 flex size-4 items-center justify-center rounded-full border-2 bg-marine-50",
                currentStep === 3 || currentStep === 4
                  ? "border-marine-400"
                  : "border-gray-300",
              )}
            >
              <div
                className={clsx(
                  "size-2 rounded-full bg-marine-400",
                  currentStep === 3 || currentStep === 4
                    ? "bg-marine-400"
                    : "bg-transparent",
                )}
              ></div>
            </span>
          </div>
        </li>
        <li
          className={clsx(
            "flex",
            currentStep === 4 ? "text-marine-400 " : "text-gray-300 ",
          )}
        >
          <div className="z-10 block">
            Betaling
            <span
              className={clsx(
                "mx-auto mt-1 flex size-4 items-center justify-center rounded-full border-2 bg-marine-50",
                currentStep === 4 ? "border-marine-400" : "border-gray-300",
              )}
            >
              <div
                className={clsx(
                  "size-2 rounded-full bg-marine-400",
                  currentStep === 4 ? "bg-marine-400" : "bg-transparent",
                )}
              ></div>
            </span>
          </div>
        </li>
      </ol>
    </div>
  );
};

ProgressBar.propTypes = {
  currentStep: PropTypes.number.isRequired,
};

export default ProgressBar;
