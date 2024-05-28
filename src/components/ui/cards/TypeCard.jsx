import PropTypes from "prop-types";
import hashtag from "../../../assets/svg/hashtag.svg";
import Button from "../buttons/Button";

// Komponent for kortet til parkeringstyper i PaymentFlow
function TypeCard({ number, title, body, onClick }) {
  return (
    <div className="relative w-full max-w-96 overflow-hidden rounded-xl shadow-md">
      <img className="absolute left-0 top-0" src={hashtag} alt="hashtag" />
      <div className="flex h-full w-full flex-col items-center bg-white px-8 pb-9 pt-2 sm:pt-0 md:py-9">
        <p className="relative z-20 w-full font-semibold text-marine-300 font-mundial text-7xl">
          {number}
        </p>
        <div className="relative z-20 mb-auto space-y-4 pt-6 sm:pt-4 md:pt-12">
          <p className="font-h4">{title}</p>
          <p className="font-body-s md:font-body-md text-justify">{body}</p>
        </div>
        <Button
          variant="primary"
          size="lg"
          icon={true}
          onClick={onClick}
          className="mt-10 md:mt-14"
        >
          Vælg
        </Button>
      </div>
    </div>
  );
}

TypeCard.propTypes = {
  number: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TypeCard;
