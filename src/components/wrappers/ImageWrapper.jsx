import PropTypes from 'prop-types';

export default function ImageWrapper({ children, className }) {
  return (
    <div className={`overflow-hidden w-fit h-fit rounded-xl md:rounded-2xl lg:rounded-3xl ${className}`}>{children}</div>
  );
}

ImageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
