import PropTypes from "prop-types";
import { tv } from "tailwind-variants";

const category = tv({
  base: "font-h6 uppercase px-4 py-3 w-fit rounded-full",
  variants: {
    color: {
      orange: "text-pumpkin-500 bg-pumpkin-50",
      green: "text-green-500 bg-green-50",
      red: "text-red-500 bg-red-50",
      darkRed: "text-red-500 bg-red-100",
      darkBlue: "text-white bg-marine-400",
      lightBlue: "text-marine-400 bg-marine-50",
      skyBlue: "text-sky-500 bg-sky-50",
    },
  },
  defaultVariants: {
    color: "orange",
  },
});

const Category = ({ color, className, children }) => {
  const CategoryElement = category({ color });
  const combinedClassName = `${CategoryElement} ${className}`;
  const ping = color === "red";

  return (
    <div className="relative w-fit">
      <div>
        <h1 className={combinedClassName}>{children}</h1>
      </div>
      {ping && (
        <span className="absolute right-0 top-0">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-300 opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-red-400"></span>
          </span>
        </span>
      )}
    </div>
  );
};

Category.propTypes = {
  color: PropTypes.oneOf([
    "orange",
    "green",
    "red",
    "darkRed",
    "darkBlue",
    "lightBlue",
    "skyBlue",
  ]),
  className: PropTypes.string,
  children: PropTypes.node,
  ping: PropTypes.bool,
};

export default Category;
