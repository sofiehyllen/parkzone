import PropTypes from "prop-types";
import Checkmark from "../../svg/Checkmark";

// Komponent for checks på homepage for erhverv
function Check({ text }) {
  return (
    <div className="flex items-center space-x-5 ">
      <Checkmark />
      <p className="font-body-s sm:font-body-md 4xl:font-body-l">{text}</p>
    </div>
  );
}

Check.propTypes = {
  text: PropTypes.string,
};

export default Check;
