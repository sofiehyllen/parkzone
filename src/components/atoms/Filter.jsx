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
    <div className='grid grid-cols-2 w-full gap-y-1 bg-white rounded-md p-1'>
      {alphabetIntervals.map((interval) => (
        <button
          key={interval.label}
          onClick={() => onFilterChange(interval.range)}
          className={clsx(
            'font-body-xs uppercase text-gray-500 px-2 py-1 rounded-full cursor-pointer hover:bg-sky-100',
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
