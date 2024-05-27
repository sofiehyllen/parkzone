import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import ProgressBar from "../atoms/ProgressBar";
import SubscriptionCard from "../cards/SubscriptionCard";
import TypeCard from "../cards/TypeCard";
import Calendar from "./Calendar";
import Button from "../buttons/Button";
import InputField from "../atoms/InputField";
import RadioButton from "../buttons/RadioButton";
import pin from "../../assets/pin.svg";
import BackButton from "../buttons/BackButton";
import { subscriptions } from "../../staticData";
import { FaRegHeart } from "react-icons/fa6";
import Alert from "../atoms/Alert";
import mastercard from "/ma_symbol.svg";
import visa from "/visa-logo.svg";
import dankort from "/DK_Logo_CMYK_Konturstreg.png";

const PaymentFlow = ({ map, address, city, hourPrice }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [previousOptions, setPreviousOptions] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedSubscription, setSelectedSubscription] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertType, setAlertType] = useState("");
  const [alertTitle, setAlertTitle] = useState("");
  const [alertText, setAlertText] = useState("");
  const [inputValidity, setInputValidity] = useState({
    cardNumber: true,
    expire: true,
    expire2: true,
    cvv: true,
  });

  const handleValidityChange = (id, isValid) => {
    setInputValidity((prevValidity) => ({
      ...prevValidity,
      [id]: isValid,
    }));
  };
  const handlePayment = (event) => {
    event.preventDefault();
    const allValid = Object.values(inputValidity).every(Boolean);
    if (allValid) {
      handleOptionSelect("thankYou");
    }
  };

  // Fetch arrival date and time from localStorage
  const storedArrivalDateAndTime = localStorage.getItem(
    "arrivalDateAndTime_arrivalCalendar",
  );

  // Fetch departure date and time from localStorage
  const storedDepartureDateAndTime = localStorage.getItem(
    "departureDateAndTime_departureCalendar",
  );

  const currentDate = new Date();

  //Formattering af datoen hentet fra localeStorage
  const formattedArrivalDateAndTime = storedArrivalDateAndTime
    ? new Date(storedArrivalDateAndTime).toLocaleDateString("da-DK", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      })
    : null;

  const formattedDepartureDateAndTime = storedDepartureDateAndTime
    ? new Date(storedDepartureDateAndTime).toLocaleDateString("da-DK", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      })
    : null;

  const arrivalDate = new Date(storedArrivalDateAndTime);
  const departureDate = new Date(storedDepartureDateAndTime);

  const timeDifference = Math.abs(departureDate - arrivalDate);

  const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
  const minutesDifference = Math.floor((timeDifference / (1000 * 60)) % 60);
  const totalTimeInHours = hoursDifference + minutesDifference / 60;

  const formattedHours = String(hoursDifference).padStart(2, "0");
  const formattedMinutes = String(minutesDifference).padStart(2, "0");
  const formattedDifference = `${formattedHours}:${formattedMinutes}`;

  let parkingPrice = Math.abs(totalTimeInHours * hourPrice);
  parkingPrice = parkingPrice.toFixed(2);

  useEffect(() => {
    setCurrentStep(previousOptions.length + 1);
  }, [previousOptions]);

  const handleOptionSelect = (option) => {
    setPreviousOptions([...previousOptions, selectedOption]);
    setSelectedOption(option);
  };

  const handleBack = () => {
    const prevOption = previousOptions.pop();
    setPreviousOptions([...previousOptions]);
    setSelectedOption(prevOption);
    setCurrentStep(currentStep - 1);
  };

  const handlePeriodeSelect = (option) => {
    setPreviousOptions([...previousOptions, selectedOption]);
    setSelectedOption(option);
    setSelectedSubscription(null);
  };

  const handleSubscriptionSelect = (subscription) => {
    setPreviousOptions([...previousOptions, selectedOption]);
    setSelectedSubscription(subscription);
    setSelectedOption("userInfo");
  };

  const handleRadioButtonChange = (event) => {
    setIsChecked(event.target.checked);
  };

  function handleSubmit(event) {
    event.preventDefault();

    if (!isChecked) {
      setAlertVisible(true);
      setAlertType("error");
      setAlertTitle("Manglende accept af persondatapolitik");
      setAlertText(
        "Venligst acceptér vilkårene og betingelserne for at fortsætte.",
      );
      setTimeout(() => setAlertVisible(false), 3000);
    } else {
      setAlertVisible(false);
      setSelectedOption("payment");
    }
  }

  function handleCloseAlert() {
    setAlertVisible(false);
  }

  const subscriptionStart = new Date(currentDate);
  subscriptionStart.setDate(currentDate.getDate() + 1);

  const subscriptionEnd = new Date(currentDate);
  subscriptionEnd.setMonth(currentDate.getMonth() + 1);

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

  // 1. step i betalingsflow - Periodeparkering eller abonnement
  const renderOptionsView = () => (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full pt-5">
        <p className="font-h2 px-5 pb-14 text-center">
          Hvilken type parkering søger du?
        </p>
        <div className="mx-auto flex w-fit flex-col space-y-10 sm:flex-row sm:space-x-5 sm:space-y-0 lg:space-x-16">
          <TypeCard
            number="01"
            title="Periodeparkering"
            body="Med periodeparkering kan du parkere din bil på en af vores p-pladser indenfor en bestemt tidsperiode. Hvor længe perioden skal vare er helt op til dig. Det kan være tre kvarter, en enkelt dag eller flere uger."
            onClick={() => handlePeriodeSelect("timeperiod")}
          />
          <TypeCard
            number="02"
            title="Abonnement"
            body="Hvis du ofte parkerer på samme parkeringsplads, kan det være en god ide at købe et parkeringsabonnement til området. Så har du fri afbenyttelse af parkeringsområdet, og du skal ikke længere bekymrer dig om at få købt parkeringsbillet."
            onClick={() => handleOptionSelect("subscription")}
          />
        </div>
      </div>
    </div>
  );

  // 2. step i betalingsflow - Periodeparkering
  const renderTimeperiodView = () => (
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

  // 2. step i betalingsflow - Abonnement
  const renderSubscriptionView = () => (
    <div className="flex flex-col items-center justify-center">
      <ProgressBar currentStep={2} />
      <div className="relative w-full">
        <div className="absolute left-0 top-0 sm:top-2">
          <BackButton onClick={handleBack} className="font-h5 text-gray-500" />
        </div>
        <div className="pt-10 md:pt-16">
          <p className="font-h3 text-center">Abonnement</p>
          <p className="font-body-md pt-5 text-center">
            Hvilken type abonnement har du brug for?
          </p>
        </div>
      </div>
      <div className="flex flex-col space-y-8 pt-14 md:flex-row md:space-x-4 md:space-y-0 lg:space-x-8">
        {subscriptions.map((subscription, index) => (
          <SubscriptionCard
            key={index}
            category={subscription.category}
            vehicle={subscription.vehicle}
            type={subscription.type}
            price={subscription.price}
            buttonSize={subscription.buttonSize}
            buttonClick={() => handleSubscriptionSelect(subscription)}
          />
        ))}
      </div>
    </div>
  );

  // 3. step i betalingsflow - Personlige oplysninger
  const renderUserInfo = () => (
    <div className="flex flex-col items-center justify-center">
      <ProgressBar currentStep={3} />
      <div className="relative w-full">
        <div className="absolute bottom-36 left-0 sm:top-2">
          <BackButton onClick={handleBack} className="font-h5 text-gray-500" />
        </div>
        <p className="font-h3 text-center">Dine oplysninger</p>
        <p className="font-body-md pb-14 pt-5 text-center">
          Indtast dine oplysninger
        </p>
      </div>
      <div className="flex w-full flex-col space-y-14 sm:px-20 md:flex-row md:space-x-5 md:space-y-0 md:px-0 ">
        <div className="w-full lg:w-7/12">
          <p className="font-h4 pb-4">Dine oplysninger</p>
          <form
            onSubmit={(event) => handleSubmit(event)}
            className="rounded-xl bg-white p-7 pb-10 lg:p-10"
          >
            <div className="mb-6 border-b-1 border-gray-200 pb-4">
              <div className="flex space-x-3">
                <InputField
                  label="Fornavn"
                  id="firstName"
                  type="text"
                  placeholder="Fornavn"
                />
                <InputField
                  label="Efternavn"
                  id="lastName"
                  type="text"
                  placeholder="Efternavn"
                />
              </div>
              <InputField
                label="Adresse"
                id="adress"
                type="text"
                placeholder="Adresse"
              />
              <div className="flex space-x-3">
                <InputField
                  label="Postnummer"
                  id="zipcode"
                  type="number"
                  placeholder="Postnummer"
                />
                <div className="w-full"></div>
              </div>
            </div>
            <div className="mb-6 border-b-1 border-gray-200 pb-4 pt-2 ">
              <InputField
                label="E-mail"
                id="email"
                type="email"
                placeholder="Mailadresse"
              />
              <div className="flex space-x-3">
                <InputField
                  label="Mobil"
                  id="mobil"
                  type="number"
                  placeholder="Mobilnummer"
                  onValidity={handleValidityChange}
                />
                <div className="w-full"></div>
              </div>
            </div>
            <div className="mb-6 border-b-1 border-gray-200 pb-4 pt-2 ">
              <InputField
                label="Nummerplade"
                id="licensePlate"
                type="text"
                placeholder="F.eks AA 12 345"
              />
            </div>
            <RadioButton
              value="datapolicy"
              type="checkbox"
              label="Jeg accepterer ParkZones persondatapolitik. Du kan læse om hvordan vi behandler dine personoplysninger"
              style="small"
              checked={isChecked}
              onChange={handleRadioButtonChange}
            />
            <Button
              variant="primary"
              size="lg"
              icon={true}
              type="submit"
              className="mt-16"
            >
              Til betaling
            </Button>
            <Alert
              isVisible={alertVisible}
              type={alertType}
              title={alertTitle}
              text={alertText}
              onClose={handleCloseAlert}
            />
          </form>
        </div>
        <div className="md:w-11/12 lg:w-5/12 lg:px-3.5">
          <p className="font-h4 pb-4">Ordreroversigt</p>
          <div className="relative overflow-hidden rounded-xl bg-white ">
            <img src={pin} alt="Knappenål" className="absolute left-0 top-52" />
            <iframe
              src={map}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-60 w-full"
            />
            <div className="p-7">
              <p className="font-h3 relative z-20 text-right leading-7">
                {address},
              </p>
              <p className="font-h3 pt-2 text-right">{city}</p>

              {selectedSubscription ? (
                <div>
                  <div className="border-b-1 border-gray-200 pb-7 pt-12">
                    <div className="flex items-end">
                      <p className="font-h5">Abonnement -</p>
                      <p className="font-h6 pl-1 uppercase text-marine-500">
                        {selectedSubscription.category}
                      </p>
                    </div>
                    <div className="space-y-3 pt-4 ">
                      <div className="flex w-full items-start">
                        <div className="flex items-center">
                          <p className="font-body-s pr-1">1</p>
                          <p className="pr-2 font-light font-league text-base capsize">
                            x
                          </p>
                        </div>
                        <div className="w-full">
                          <p className="font-body-s pb-3">
                            {selectedSubscription.type}
                          </p>
                          <div className="flex items-end justify-between">
                            <p className="font-body-s">
                              {selectedSubscription.vehicle}
                            </p>
                            <p className="font-body-md">
                              DKK {selectedSubscription.price},00
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start pt-3">
                        <div className="flex items-center">
                          <p className="font-body-s pr-1">1</p>
                          <p className="pr-2 font-light font-league text-base capsize">
                            x
                          </p>
                        </div>
                        <p className="font-body-s pb-3">Startgebyr</p>
                        <p className="font-body-md ml-auto">DKK 250,00</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4 border-b-1 border-gray-200 py-7">
                    <p className="font-h5 pb-2">Første periode</p>
                    <div className="flex justify-between">
                      <p className="font-body-s">Fra</p>
                      <p className="font-h5">{formattedSubscriptionStart}</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="font-body-s">Til</p>
                      <p className="font-h5">{formattedSubscriptionEnd}</p>
                    </div>
                  </div>
                  <div className="flex justify-between pt-7">
                    <div>
                      <p className="font-h4 text-2xl">Total</p>
                      <p className="font-body-md pt-2">Inkl. moms</p>
                    </div>
                    <p className="font-h4 text-2xl">
                      DKK {selectedSubscription.price + 250},00
                    </p>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="space-y-4 border-b-1 border-gray-200 pb-7 pt-12">
                    <div className="flex justify-between">
                      <p className="font-body-s">Fra</p>
                      <p className="font-h5">{formattedArrivalDateAndTime}</p>
                    </div>
                    <div className="flex justify-between ">
                      <p className="font-body-s">Til</p>
                      <p className="font-h5">{formattedDepartureDateAndTime}</p>
                    </div>
                  </div>
                  <div className="space-y-2.5 border-b-1 border-gray-200 py-7">
                    <div className="flex justify-between">
                      <p className="font-h5">Antal timer</p>
                      <p className="font-h5">{formattedDifference}</p>
                    </div>
                    <div className="flex justify-between pl-5">
                      <div className="flex items-center">
                        <p className="pr-2 font-light font-league text-base capsize">
                          x
                        </p>
                        <p className="font-body-md">Timetakst</p>
                      </div>
                      <p className="font-body-md">DKK {hourPrice},00</p>
                    </div>
                  </div>
                  <div className="flex justify-between pt-7">
                    <div>
                      <p className="font-h4 text-2xl">Total</p>
                      <p className="font-body-md pt-2">Inkl. moms</p>
                    </div>
                    <p className="font-h4 text-2xl">DKK {parkingPrice}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPaymentView = () => {
    return (
      <div className="flex flex-col  items-center justify-center ">
        <ProgressBar currentStep={4} />
        <div className="relative w-full">
          <div className="absolute left-0 top-0 sm:top-2">
            <BackButton
              onClick={handleBack}
              className="font-h5 text-gray-500"
            />
          </div>
          <div className="pt-10 md:pt-16">
            <p className="font-h3 text-center">Betaling</p>
            <p className="font-body-md pt-5 text-center">
              Indtast dine kortoplysninger
            </p>
          </div>
        </div>
        <form
          onSubmit={handlePayment}
          className="m-10 mx-auto w-full max-w-screen-xs rounded-lg bg-white px-8 py-8"
        >
          <InputField
            label="Kortnummer"
            id="cardNumber"
            placeholder="Kortnummer"
            type="number"
            onValidity={handleValidityChange}
          />
          <div className="flex">
            <div className="relative flex pr-24">
              <div className="w-14">
                <InputField
                  label="Udløbsdato"
                  id="expire"
                  placeholder="MM"
                  type="number"
                  onValidity={handleValidityChange}
                />
              </div>
              <div className="absolute bottom-0 left-16 w-14">
                <InputField
                  label=""
                  id="expire2"
                  placeholder="YY"
                  type="number"
                  onValidity={handleValidityChange}
                />
              </div>
            </div>
            <div className="w-14">
              <InputField
                label="CVV/CVD"
                id="cvv"
                placeholder="CVV"
                type="number"
                onValidity={handleValidityChange}
              />
            </div>
          </div>
          <div className="flex items-center pb-8">
            <img src={mastercard} alt="Mastercard logo" className="h-10" />
            <img src={visa} alt="Visa logo" className="h-10 p-2.5" />
            <img src={dankort} alt="Dankort logo" className="h-10 p-1.5" />
          </div>
          <div className="mx-auto w-fit">
            <Button type="submit" variant="primary" size="md">
              Betal{" "}
              {selectedSubscription
                ? selectedSubscription.price + 250
                : parkingPrice}{" "}
              kr.
            </Button>
          </div>
        </form>
      </div>
    );
  };

  const renderThankYouView = () => {
    return (
      <div className="mx-auto flex w-7/12 flex-col items-center justify-center py-20">
        <div className="rounded-2xl bg-white px-16 py-16">
          <p className="font-h1 pb-10 text-center">Tak for din booking!</p>
          <p className="font-body-l pb-10 text-center">
            Din booking er registreret og du vil inden for kort tid modtage en
            kvittering på din mail.
          </p>
          <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-sky-100">
            <FaRegHeart className="size-5 text-marine-400" />
          </div>
          <p className="font-body-xs pt-20 text-center">
            Skal du parkere andre steder? Gå tilbage til{" "}
            <Button size="sm" variant="link" to="/privat/findparkering">
              Find parkering
            </Button>
          </p>
        </div>
      </div>
    );
  };

  return (
    <div
      id="paymentFlow"
      className="relative my-28 bg-marine-50 px-5 py-10 sm:px-10 md:rounded-xl md:py-16 lg:px-20"
    >
      {selectedOption === null && renderOptionsView()}
      {selectedOption === "timeperiod" && renderTimeperiodView()}
      {selectedOption === "subscription" && renderSubscriptionView()}
      {selectedOption === "userInfo" && renderUserInfo()}
      {selectedOption === "payment" && renderPaymentView()}
      {selectedOption === "thankYou" && renderThankYouView()}
    </div>
  );
};

PaymentFlow.propTypes = {
  map: PropTypes.string,
  address: PropTypes.string,
  city: PropTypes.string,
  hourPrice: PropTypes.any,
};

export default PaymentFlow;
