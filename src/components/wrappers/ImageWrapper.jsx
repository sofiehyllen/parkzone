import PropTypes from 'prop-types';
import Doodle7 from '../svg/Doodle7';
import clsx from 'clsx';

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
        'overflow-hidden relative w-fit h-fit',
        className,
        size === 'sm'
          ? 'rounded-xl'
          : size === 'md'
          ? 'rounded-2xl'
          : size === 'lg'
          ? 'rounded-3xl'
          : ''
      )}>
      <img
        className='h-full w-full object-cover object-center'
        src={image}
        alt={alt}
      />

      {color && (
        <div
          className={clsx(
            'absolute bottom-2 -left-10 w-[120%] sm:bottom-4 sm:-left-24 md:-left-10 md:scale-125 lg:scale-110',
            mirror ? 'scale-x-[-1px]' : ''
          )}>
          <Doodle7 color={color} />
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
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};
