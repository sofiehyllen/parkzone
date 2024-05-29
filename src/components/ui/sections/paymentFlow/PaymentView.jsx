import PropTypes from "prop-types";
import ProgressBar from "../../atoms/ProgressBar";
import BackButton from "../../buttons/BackButton";
import InputField from "../../atoms/InputField";
import Button from "../../buttons/Button";
import mastercard from "/ma_symbol.svg";
import visa from "/visa-logo.svg";
import dankort from "/DK_Logo_CMYK_Konturstreg.png";
import Alert from "../Alert";

// Komponent for vinduet med betaling i betalingsflowet
const PaymentView = ({
  handleBack,
  handleSubmit,
  handleValidityChange,
  selectedSubscription,
  parkingPrice,
  alertVisible,
  handleCloseAlert,
}) => {
  return (
    <div className="flex flex-col  items-center justify-center ">
      <ProgressBar currentStep={4} />
      <div className="relative w-full">
        <div className="absolute left-0 top-0 sm:top-2">
          <BackButton onClick={handleBack} className="font-h5 text-gray-500" />
        </div>
        <div className="pt-10 md:pt-16">
          <p className="font-h3 text-center">Betaling</p>
          <p className="font-body-md pt-5 text-center">
            Indtast dine kortoplysninger
          </p>
        </div>
      </div>
      <form
        onSubmit={(event) => handleSubmit(event, "thankYou")}
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
        <Alert
          isVisible={alertVisible}
          type="error"
          title="Manglende kortoplysninger"
          text="Venligst udfyld de manglende kortoplysninger for at gennemføre betalingen."
          onClose={handleCloseAlert}
        />
      </form>
    </div>
  );
};

PaymentView.propTypes = {
  handleBack: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleValidityChange: PropTypes.func.isRequired,
  selectedSubscription: PropTypes.object,
  parkingPrice: PropTypes.string.isRequired,
  handleCloseAlert: PropTypes.func.isRequired,
  alertVisible: PropTypes.bool.isRequired,
};

export default PaymentView;
