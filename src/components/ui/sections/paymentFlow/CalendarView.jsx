import ProgressBar from "../../atoms/ProgressBar";
import Calendar from "../Calendar";
import Button from "../../buttons/Button";
import BackButton from "../../buttons/BackButton";
import PropTypes from "prop-types";

// Komponent for vinduet med periodeparkering i betalingsflowet
const CalendarView = ({ handleBack, handleOptionSelect }) => (
  <div className="flex flex-col items-center justify-center">
    <ProgressBar currentStep={2} />
    <div className="relative w-full">
      <div className="absolute left-0 top-0 sm:top-2">
        <BackButton onClick={handleBack} className="font-h5 text-gray-500" />
      </div>
      <div className="pt-10 md:pt-16">
        <p className="font-h3 text-center">Periodeparkering</p>
        <p className="font-body-md pt-5 text-center">
          Hvor længe skal du parkere?
        </p>
      </div>
    </div>
    <div className="mx-auto flex w-fit flex-col space-y-16 pb-10 pt-14 md:flex-row md:space-x-16 md:space-y-0">
      <Calendar type="arrival" id="arrivalCalendar" />
      <Calendar type="departure" id="departureCalendar" />
    </div>
    <Button
      variant="primary"
      size="lg"
      icon={true}
      className="sm:ml-auto"
      onClick={() => handleOptionSelect("userInfo")}
    >
      Næste
    </Button>
  </div>
);

CalendarView.propTypes = {
  handleOptionSelect: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired,
};

export default CalendarView;
