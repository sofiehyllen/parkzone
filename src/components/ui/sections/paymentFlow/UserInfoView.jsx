import PropTypes from "prop-types";
import ProgressBar from "../../atoms/ProgressBar";
import BackButton from "../../buttons/BackButton";
import InputField from "../../atoms/InputField";
import RadioButton from "../../buttons/RadioButton";
import Button from "../../buttons/Button";
import Alert from "../../sections/Alert";
import pin from "/assets/svg/pin.svg";

// Komponent for vinduet med "Dine oplysninger" i betalingsflowet
const UserInfoView = ({
  handleBack,
  handleSubmit,
  handleRadioButtonChange,
  handleValidityChange,
  isChecked,
  alertVisible,
  handleCloseAlert,
  map,
  address,
  city,
  hourPrice,
  selectedSubscription,
  formattedSubscriptionStart,
  formattedSubscriptionEnd,
  formattedArrivalDateAndTime,
  formattedDepartureDateAndTime,
  formattedDifference,
  parkingPrice,
}) => {
  return (
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
            onSubmit={(event) => handleSubmit(event, "payment")}
            className="rounded-xl bg-white p-7 pb-10 lg:p-10"
          >
            <div className="mb-6 border-b-1 border-gray-200 pb-4">
              <div className="flex space-x-3">
                <InputField
                  label="Fornavn"
                  id="firstName"
                  type="text"
                  placeholder="Fornavn"
                  onValidity={handleValidityChange}
                />
                <InputField
                  label="Efternavn"
                  id="lastName"
                  type="text"
                  placeholder="Efternavn"
                  onValidity={handleValidityChange}
                />
              </div>
              <InputField
                label="Adresse"
                id="adress"
                type="text"
                placeholder="Adresse"
                onValidity={handleValidityChange}
              />
              <div className="flex space-x-3">
                <InputField
                  label="Postnummer"
                  id="zipcode"
                  type="number"
                  placeholder="Postnummer"
                  onValidity={handleValidityChange}
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
                onValidity={handleValidityChange}
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
                onValidity={handleValidityChange}
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
              type="error"
              title="Manglende accept af persondatapolitik"
              text="Venligst acceptér vilkårene og betingelserne for at fortsætte."
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
};

UserInfoView.propTypes = {
  handleBack: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleRadioButtonChange: PropTypes.func.isRequired,
  handleValidityChange: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired,
  handleCloseAlert: PropTypes.func.isRequired,
  alertVisible: PropTypes.bool.isRequired,
  map: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  hourPrice: PropTypes.string.isRequired,
  selectedSubscription: PropTypes.object,
  formattedSubscriptionStart: PropTypes.any.isRequired,
  formattedSubscriptionEnd: PropTypes.any.isRequired,
  formattedArrivalDateAndTime: PropTypes.any.isRequired,
  formattedDepartureDateAndTime: PropTypes.any.isRequired,
  formattedDifference: PropTypes.any.isRequired,
  parkingPrice: PropTypes.string.isRequired,
};

export default UserInfoView;
