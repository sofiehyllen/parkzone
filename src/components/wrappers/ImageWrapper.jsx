import PropTypes from "prop-types";
import clsx from "clsx";
import Doodle8 from "../svg/Doodle8";

export default function ImageWrapper({
  image,
  alt,
  className,
  color,
  mirror,
  size,
}) {
  return (
    <div
      className={clsx(
        "relative h-fit w-fit overflow-hidden",
        className,
        size === "sm"
          ? "rounded-xl"
          : size === "md"
            ? "rounded-2xl"
            : size === "lg"
              ? "rounded-xl md:rounded-2xl lg:rounded-3xl"
              : "",
      )}
    >
      <img
        className="h-full w-full object-cover object-center"
        src={image}
        alt={alt}
      />

      {color && (
        <div
          className={clsx(
            "absolute -bottom-5 -left-40 scale-75 sm:-left-20 sm:bottom-5 sm:scale-100 md:bottom-8 md:left-0 md:scale-125 lg:bottom-14 lg:left-36 lg:scale-150 xl:bottom-20 xl:left-72 xl:scale-180 2xl:bottom-24",
            mirror ? "scale-x-[-1]" : "",
          )}
        >
          <Doodle8 color={color} />
        </div>
      )}
    </div>
  );
}

ImageWrapper.propTypes = {
  image: PropTypes.node.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
  mirror: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};
