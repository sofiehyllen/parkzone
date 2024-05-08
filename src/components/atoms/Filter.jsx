import clsx from 'clsx';
import PropTypes from 'prop-types';

function Filter({ onFilterChange }) {
  const alphabetIntervals = [
    { label: 'A - E', range: ['A', 'B', 'C', 'D', 'E'] },
    { label: 'F - J', range: ['F', 'G', 'H', 'I', 'J'] },
    { label: 'K - O', range: ['K', 'L', 'M', 'N', 'O'] },
    {
      label: 'P - Å',
      range: [
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
        'Æ',
        'Ø',
        'Å',
      ],
    },
  ];

  return (
    <div className='flex rounded-full w-fit gap-y-1 bg-white p-1 min-w-44'>
      {alphabetIntervals.map((interval) => (
        <button
          key={interval.label}
          onClick={() => onFilterChange(interval.range)}
          className={clsx(
            'font-body-s uppercase text-gray-500 px-3.5 py-1.5 rounded-full cursor-pointer hover:bg-sky-100 md:font-body-xs md:px-2.5 md:py-1 xl:px-3',
            { 'bg-marine-100': onFilterChange === interval }
          )}>
          {interval.label}
        </button>
      ))}
    </div>
  );
}

Filter.propTypes = {
  onFilterChange: PropTypes.func,
};

export default Filter;
