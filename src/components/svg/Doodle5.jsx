import PropTypes from 'prop-types';

export default function Doodle5({ color }) {
  return (
    <svg
      id='Doodle_5'
      xmlns='http://www.w3.org/2000/svg'
      width='534'
      height='190'
      viewBox='0 0 534 190'>
      <path
        d='M11,79.57s65.91-19.55,122.5,14.93c19.83,12.08,44.91,25.34,72,29,37,5,79.33-8.49,87-53,10-58-51.32-84.41-72.76-37.5-19.21,42.02,26.12,98.23,121.62,137.04,95.5,38.81,180.93-48.25,180.93-48.25'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeMiterlimit='10'
        strokeWidth='13.4'
      />
    </svg>
  );
}

Doodle5.propTypes = {
  color: PropTypes.string,
};
