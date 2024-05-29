import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import OptionsView from "./OptionsView";
import CalendarView from "./CalendarView";
import SubscriptionView from "./SubscriptionView";
import UserInfoView from "./UserInfoView";
import PaymentView from "./PaymentView";
import ThankYouView from "./ThankYouView";
import { subscriptions } from "../../../../staticData";

// Komponenten for det samlede betalingsflow
const PaymentFlow = ({ map, address, city, hourPrice }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [previousOptions, setPreviousOptions] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedSubscription, setSelectedSubscription] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [validity, setValidity] = useState(false);

  // Henter ankomst tid og dato fra localStorage
  const storedArrivalDateAndTime = localStorage.getItem(
    "arrivalDateAndTime_arrivalCalendar",
  );

  // Henter afgang tid og dato fra localStorage
  const storedDepartureDateAndTime = localStorage.getItem(
    "departureDateAndTime_departureCalendar",
  );

  //Formattering af ankomstsdatoen hentet fra localeStorage
  const formattedArrivalDateAndTime = storedArrivalDateAndTime
    ? new Date(storedArrivalDateAndTime).toLocaleDateString("da-DK", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      })
    : null;

  //Formattering af afgangsdatoen hentet fra localeStorage
  const formattedDepartureDateAndTime = storedDepartureDateAndTime
    ? new Date(storedDepartureDateAndTime).toLocaleDateString("da-DK", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      })
    : null;

  // Beregner forskellen i tid mellem ankomst og afgang
  const arrivalDate = new Date(storedArrivalDateAndTime);
  const departureDate = new Date(storedDepartureDateAndTime);
  const timeDifference = Math.abs(departureDate - arrivalDate);
  const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
  const minutesDifference = Math.floor((timeDifference / (1000 * 60)) % 60);
  const totalTimeInHours = hoursDifference + minutesDifference / 60;

  // Formatterer tidsforskellen i timer og minutter
  const formattedHours = String(hoursDifference).padStart(2, "0");
  const formattedMinutes = String(minutesDifference).padStart(2, "0");
  const formattedDifference = `${formattedHours}:${formattedMinutes}`;

  // Beregner parkeringsprisen ud fra parkeringstiden og prisen for det pågældende område
  let parkingPrice = Math.abs(totalTimeInHours * hourPrice);
  parkingPrice = parkingPrice.toFixed(2);

  // Beregner start- og slutdato for abonnementet
  const currentDate = new Date();
  const subscriptionStart = new Date(currentDate);
  subscriptionStart.setDate(currentDate.getDate() + 1);
  const subscriptionEnd = new Date(currentDate);
  subscriptionEnd.setMonth(currentDate.getMonth() + 1);

  // Formatterer start- og slutdato for abonnementet
  const formattedSubscriptionStart = subscriptionStart.toLocaleDateString(
    "da-DK",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    },
  );
  const formattedSubscriptionEnd = subscriptionEnd.toLocaleDateString("da-DK", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Opdaterer det nuværende trin baseret på det forrige
  useEffect(() => {
    setCurrentStep(previousOptions.length + 1);
  }, [previousOptions]);

  // Funktion til at håndtere nuværende og forrige trin
  const handleOptionSelect = (option) => {
    setPreviousOptions([...previousOptions, selectedOption]);
    setSelectedOption(option);
  };

  // Funktion til at gå tilbage til forrige trin
  const handleBack = () => {
    const prevOption = previousOptions.pop();
    setPreviousOptions([...previousOptions]);
    setSelectedOption(prevOption);
    setCurrentStep(currentStep - 1);
  };

  // Funktion til at håndtere valg af parkeringsperiode
  const handlePeriodeSelect = (option) => {
    setPreviousOptions([...previousOptions, selectedOption]);
    setSelectedOption(option);
    setSelectedSubscription(null);
  };

  // Funktion til at håndtere valg af abonnement
  const handleSubscriptionSelect = (subscription, option) => {
    setPreviousOptions([...previousOptions, selectedOption]);
    setSelectedSubscription(subscription);
    setSelectedOption(option);
  };

  // Funktion til at håndtere ændringer i radioknap
  const handleRadioButtonChange = (event) => {
    setIsChecked(event.target.checked);
  };

  // Funktion til at opdatere gyldigheden af et specifikt input
  const handleValidityChange = (id, isValid) => {
    setValidity((prevValidity) => ({
      ...prevValidity,
      [id]: isValid,
    }));
  };

  // Funktion til at håndtere form submit når brugeren klikker videre fra UserInfo til betaling, og igen fra betaling til slut
  function handleSubmit(event, option) {
    event.preventDefault(); // Forhindrer standard opførsel af form så siden ikke genindlæses ved submit

    // allValid kontrollerer at alle værdier i validity-objektet er sande
    const allValid = Object.values(validity).every((isValid) => isValid);

    if (!isChecked || !allValid) {
      // Error-besked kommer frem hvis ikke brugeren accepterer vilkår og betingelser
      setAlertVisible(true);
      setTimeout(() => setAlertVisible(false), 3000);
    } else {
      setAlertVisible(false);
      setSelectedOption(option);
    }
  }

  // Funktion til at lukke alert
  function handleCloseAlert() {
    setAlertVisible(false);
  }

  return (
    <div
      id="paymentFlow"
      className="relative my-28 bg-marine-50 px-5 py-10 sm:px-10 md:rounded-xl md:py-16 lg:px-20"
    >
      {selectedOption === null && (
        <OptionsView
          handleOptionSelect={handleOptionSelect}
          handlePeriodeSelect={handlePeriodeSelect}
        />
      )}
      {selectedOption === "timeperiod" && (
        <CalendarView
          handleBack={handleBack}
          handleOptionSelect={handleOptionSelect}
        />
      )}

      {/* Viser SubscriptionView hvis subscription er valgt */}
      {selectedOption === "subscription" && (
        <SubscriptionView
          handleBack={handleBack}
          handleSubscriptionSelect={handleSubscriptionSelect}
          subscriptions={subscriptions}
        />
      )}
      {/* Viser UserInfoView hvis userInfo er valgt */}
      {selectedOption === "userInfo" && (
        <UserInfoView
          handleBack={handleBack}
          handleSubmit={handleSubmit}
          handleRadioButtonChange={handleRadioButtonChange}
          handleValidityChange={handleValidityChange}
          handleCloseAlert={handleCloseAlert}
          isChecked={isChecked}
          alertVisible={alertVisible}
          map={map}
          address={address}
          city={city}
          hourPrice={hourPrice}
          selectedSubscription={selectedSubscription}
          formattedSubscriptionStart={formattedSubscriptionStart}
          formattedSubscriptionEnd={formattedSubscriptionEnd}
          formattedArrivalDateAndTime={formattedArrivalDateAndTime}
          formattedDepartureDateAndTime={formattedDepartureDateAndTime}
          formattedDifference={formattedDifference}
          parkingPrice={parkingPrice}
        />
      )}
      {/* Viser PaymentView hvis payment er valgt */}
      {selectedOption === "payment" && (
        <PaymentView
          handleBack={handleBack}
          handleSubmit={handleSubmit}
          handleValidityChange={handleValidityChange}
          parkingPrice={parkingPrice}
          selectedSubscription={selectedSubscription}
          alertVisible={alertVisible}
          handleCloseAlert={handleCloseAlert}
        />
      )}
      {/* Viser ThankYouView hvis thankYou er valgt */}
      {selectedOption === "thankYou" && <ThankYouView />}
    </div>
  );
};

PaymentFlow.propTypes = {
  map: PropTypes.string,
  address: PropTypes.string,
  city: PropTypes.string,
  hourPrice: PropTypes.string,
};

export default PaymentFlow;
