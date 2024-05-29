import ProgressBar from "../../atoms/ProgressBar";
import BackButton from "../../buttons/BackButton";
import SubscriptionCard from "../../cards/SubscriptionCard";
import PropTypes from "prop-types";

// Komponent for vinduet med abonnementsmuligheder i betalingsflowet
const SubscriptionView = ({
  handleBack,
  handleSubscriptionSelect,
  subscriptions,
}) => (
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
          buttonClick={() => handleSubscriptionSelect(subscription, "userInfo")}
        />
      ))}
    </div>
  </div>
);

SubscriptionView.propTypes = {
  handleBack: PropTypes.func.isRequired,
  handleSubscriptionSelect: PropTypes.func.isRequired,
  subscriptions: PropTypes.any,
};

export default SubscriptionView;
