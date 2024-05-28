import PropTypes from "prop-types";

// Komponent til ikon-kort til tabs-indholdet på siden for Produkter & Services
function IconBox({ text, icon }) {
  return (
    <div className="flex h-64 w-60 flex-col items-center space-y-7 rounded-xl bg-marine-300 px-6 py-10">
      <div className="w-fit rounded-full bg-white p-3">{icon}</div>
      <p className="font-h4 md:font-h5 text-center text-white md:text-white lg:text-2xl">
        {text}
      </p>
    </div>
  );
}

IconBox.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.any,
};

export default IconBox;
