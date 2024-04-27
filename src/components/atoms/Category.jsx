import PropTypes from 'prop-types';
import { tv } from 'tailwind-variants';

const category = tv({
  base: 'font-h6 uppercase px-4 py-3 w-fit rounded-full',
  variants: {
    color: {
      orange: 'text-pumpkin-500 bg-pumpkin-50',
    },
  },
  defaultVariants: {
    color: 'orange',
  },
});

const Category = ({ color, className, children }) => {
  const CategoryElement = category({ color });
  const combinedClassName = `${CategoryElement} ${className}`;

  return <h1 className={combinedClassName}>{children}</h1>;
};

Category.propTypes = {
  color: PropTypes.oneOf(['orange']),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Category;
