import PropTypes from "prop-types";
import Category from "../atoms/Category";
import clsx from "clsx";
import Button from "../buttons/Button";
import { FaCheck } from "react-icons/fa6";

// Komponent for kortet til abonnementstyper
function SubscriptionCard({
  category,
  vehicle,
  type,
  price,
  buttonSize,
  buttonClick,
}) {
  return (
    // Stylingen af abonnementskortene er betinget af kategorien
    <div
      className={clsx(
        "flex h-fit w-full flex-col rounded-xl px-7 py-8 md:px-4 md:py-6 lg:px-7 lg:py-8",
        category === "premium" ? "bg-marine-100" : "bg-white",
      )}
    >
      <div className="flex justify-end">
        <Category color={category === "premium" ? "darkBlue" : "lightBlue"}>
          {category}
        </Category>
      </div>
      <div className="space-y-1.5 pb-7 pt-4">
        <p className="font-h4">{vehicle}</p>
        <p className="font-body-s">{type}</p>
      </div>
      <div className="border-b-1 border-gray-300 pb-7">
        <p
          className={clsx(
            "font-h6",
            category === "premium" ? "text-marine-400" : "text-gray-400",
          )}
        >
          fra
        </p>
        <div className="flex items-end space-x-2.5">
          <p className="font-h3">{price} kr.</p>
          <p
            className={clsx(
              "font-h4",
              category === "premium" ? "text-marine-400" : "text-gray-400",
            )}
          >
            / md
          </p>
        </div>
      </div>
      <div className="space-y-3 py-7">
        <div className="flex space-x-2">
          <div className="flex size-3.5 flex-shrink-0 place-items-center rounded-full bg-marine-800 ">
            <FaCheck className="h-2 text-white" />
          </div>
          <p className="font-body-xs">Fri parkering alle ugens dage</p>
        </div>
        <div className="flex space-x-2">
          <div className="flex size-3.5 flex-shrink-0 place-items-center rounded-full bg-marine-800 ">
            <FaCheck className="h-2 text-white" />
          </div>
          <p className="font-body-xs">Fri parkering hele døgnet</p>
        </div>
        {category === "premium" ? (
          <div className="space-y-3">
            <div className="flex space-x-2">
              <div className="flex size-3.5 flex-shrink-0 place-items-center rounded-full bg-marine-800 ">
                <FaCheck className="h-2 text-white" />
              </div>
              <p className="font-body-xs">Privat parkeringsplads</p>
            </div>
            <div className="flex space-x-2">
              <div className="flex size-3.5 flex-shrink-0 place-items-center rounded-full bg-marine-800 ">
                <FaCheck className="h-2 text-white" />
              </div>
              <p className="font-body-xs">
                Personlig skilt med din nummerplade
              </p>
            </div>
          </div>
        ) : null}
      </div>
      <div className="flex w-full justify-center">
        <Button
          variant="primary"
          size={buttonSize}
          icon={true}
          onClick={buttonClick}
        >
          Vælg
        </Button>
      </div>
    </div>
  );
}

SubscriptionCard.propTypes = {
  category: PropTypes.string.isRequired,
  vehicle: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  buttonSize: PropTypes.string.isRequired,
  buttonClick: PropTypes.func.isRequired,
};

export default SubscriptionCard;
