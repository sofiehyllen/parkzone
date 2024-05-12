import { tv } from 'tailwind-variants';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

const button = tv({
  base: 'rounded-full font-league text-base capsize w-fit ',
  variants: {
    variant: {
      primary: 'bg-marine-800 transition ease-in-out hover:text-gray-400',
      secondary: 'bg-sky-300 transition ease-in-out hover:bg-sky-400',
      tertiary:
        'inner-border-2 inner-border-marine-800 transition ease-in-out hover:inner-border-3',
      'tertiary-on-dark':
        'inner-border-2 inner-border-white transition ease-in-out hover:inner-border-3',
      link: 'underline decoration-1 underline-offset-2 transition ease-in-out font-normal hover:text-gray-700 hover:decoration-gray-700',
    },
    size: {
      sm: 'px-6 py-2.5 text-sm leading-none',
      md: 'px-7 py-3.5',
      lg: 'px-8 py-4 text-lg font-medium',
    },
    icon: {
      true: 'flex items-center',
    },
  },
  compoundVariants: [
    {
      variant: ['primary', 'secondary', 'tertiary-on-dark'],
      class: 'text-white',
    },
    {
      variant: ['tertiary', 'add'],
      class: 'text-marine-800',
    },
    {
      variant: 'link',
      class: 'px-0 py-0 w-fit',
    },
    {
      variant: 'link',
      size: 'sm',
      class: 'text-sm',
    },
    {
      variant: 'link',
      size: 'md',
      class: 'text-base',
    },
    {
      variant: 'link',
      size: 'lg',
      class: 'text-lg',
    },
    {
      icon: true,
      size: 'sm',
      class: 'pb-2 px-5',
    },
    {
      icon: true,
      size: 'md',
      class: 'px-6 pt-2 pb-1.5',
    },
    {
      icon: true,
      size: 'lg',
      class: 'px-7 pt-2.5 pb-1.5',
    },
  ],
  defaultVariants: {
    size: 'md',
    variant: 'primary',
  },
});

const Button = (props) => {
  const {
    size,
    variant,
    icon,
    to,
    href,
    onClick,
    children,
    className,
    ...rest
  } = props;
  const buttonClass = button({ size, variant, icon });
  const combinedClassName = `${buttonClass} ${className}`;

  if (to) {
    return (
      <Link to={to} {...rest}>
        <button onClick={onClick} className={combinedClassName}>
          {children}
        </button>
      </Link>
    );
  } else if (href) {
    return (
      <a href={href} {...rest}>
        <button onClick={onClick} className={combinedClassName}>
          {children}
        </button>
      </a>
    );
  }

  return (
    <button className={combinedClassName} onClick={onClick} {...rest}>
      {children}
      {icon ? (
        <div className='ml-2.5'>
          <BsArrowRight />
        </div>
      ) : null}
    </button>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',
    'tertiary-on-dark',
    'add',
    'link',
  ]),
  icon: PropTypes.bool,
  to: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Button;
