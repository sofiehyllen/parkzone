import PropTypes from 'prop-types';

export default function Doodle8({ color }) {
  return (
    <svg
      id='Doodle_8'
      xmlns='http://www.w3.org/2000/svg'
      width='924'
      height='157'
      viewBox='0 0 924 157'>
      <path
        d='M10.5,84.5c58,2,75,36,130.26,40.08,37.23,2.75,84.52-24.67,92.74-69.08C243.5,1.5,187.5-2.5,167.5,35.5c-21.52,40.88,6.93,89.48,110,91,40.21.59,77.97-10.01,102.12-18.77,37.02-13.43,76.52-22.43,115.88-21.23,47.17,1.43,74,9,116,22,38.37,11.88,84,34,138,37,50.96,2.83,98,2,163-41'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeMiterlimit='10'
        strokeWidth='13.4'
      />
    </svg>
  );
}

Doodle8.propTypes = {
  color: PropTypes.string,
};
