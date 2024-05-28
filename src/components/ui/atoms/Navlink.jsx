import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { tv } from "tailwind-variants";

// Komponent for navigationslink med to varianter
const customnavlink = tv({
  base: "font-mundial w-fit capsize",
  variants: {
    variant: {
      primary: "text-xl md:text-base px-2.5 pb-2 pt-1 rounded-sm text-gray-900",
      secondary: "text-base md:text-sm text-gray-700 hover:text-gray-900",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export default function CustomNavLink({ to, children, variant, onClick }) {
  const combinedClassName = customnavlink({ variant });

  return (
    <NavLink
      onClick={onClick}
      variant={variant}
      to={to}
      className={({ isActive }) =>
        clsx(combinedClassName, {
          "bg-sky-50 text-marine-800": isActive && variant === "primary",
          "underline underline-offset-2": isActive && variant === "secondary",
        })
      }
    >
      {children}
    </NavLink>
  );
}

CustomNavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary"]).isRequired,
  onClick: PropTypes.func,
};
