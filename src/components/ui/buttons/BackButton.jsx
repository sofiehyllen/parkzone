import PropTypes from "prop-types";
import { IoChevronBackOutline } from "react-icons/io5";
import clsx from "clsx";

// Komponent for tilbage-knap
function BackButton({ className, onClick }) {
  return (
    <button className="flex items-center" onClick={onClick}>
      <IoChevronBackOutline
        className={clsx("mr-3", !className ? "" : className)}
      />
      <p
        className={clsx(
          !className
            ? "font-h4 flex cursor-pointer space-x-2 md:space-x-5"
            : className,
        )}
      >
        Tilbage
      </p>
    </button>
  );
}

BackButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default BackButton;
