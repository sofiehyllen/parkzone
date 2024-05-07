import PropTypes from 'prop-types';
import { useCallback, useMemo, useState } from 'react';
import useFirebase from '../../hooks/fetchFirebase';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import Filter from './Filter';
import { FaArrowRightLong } from 'react-icons/fa6';
import { FaArrowLeft } from 'react-icons/fa6';

export default function CitiesMap() {
  const [selectedCity, setSelectedCity] = useState();
  const [filterRange, setFilterRange] = useState([]);

  const handleDataFetch = useCallback((data) => {
    console.log(data);
  }, []);

  const data = useFirebase(handleDataFetch);

  const uniqueCities = useMemo(() => {
    if (!data) return [];
    // Create a Set to store unique city values
    const uniqueCitySet = new Set();
    // Iterate over the data and add each city to the Set
    data.forEach((parking) => {
      uniqueCitySet.add(parking.city);
    });
    // Convert the Set back to an array
    return Array.from(uniqueCitySet);
  }, [data]);

  const handleFilterChange = useCallback((range) => {
    setFilterRange(range);
  }, []);

  const filteredCities = useMemo(() => {
    if (filterRange.length === 0) return uniqueCities;
    return uniqueCities.filter((city) =>
      filterRange.some((letter) => city.startsWith(letter))
    );
  }, [filterRange, uniqueCities]);

  return (
    <div>
      {/*<div className=' rounded-xl flex w-full overflow-hidden shadow-sm'>
        <div className='space-y-5 bg-marine-100 px-4 py-5 w-full min-w-36'>
          <Filter onFilterChange={handleFilterChange} />
          {filteredCities &&
            filteredCities.map((city) => (
              <div
                key={city}
                onClick={() => handleCityClick(city)}
                className={clsx(
                  'flex flex-row items-center w-full border-b-1 border-marine-200 font-h6 hover:bg-marine-100 cursor-pointer',
                  {
                    'bg-marine-100': selectedCity === city,
                  }
                )}>
                <h4 className='pr-2'>{city}</h4>
                <FaArrowRightLong className='ml-auto' />
              </div>
            ))}
        </div>
        <Modal show={showModal} onClose={() => setShowModal(false)}>
          <div>
            {data &&
              data
                .filter((parking) => parking.city === selectedCity)
                .map((parking) => (
                  <Link
                    key={parking.id}
                    className='font-body-xs'
                    to={`/privat/findparkering/${parking.id}`}>
                    <div>{parking.address}</div>
                  </Link>
                ))}
          </div>
        </Modal>
              </div>*/}
      <div className='space-y-5 bg-marine-100 px-4 py-5 w-full rounded-xl'>
        <Filter onFilterChange={handleFilterChange} />
        {selectedCity && ( // Render back button if a city is selected
          <div
            onClick={() => setSelectedCity(null)} // Set selectedCity to null when back button is clicked
            className='flex flex-row items-center w-full border-b-1 border-marine-200 font-h6 hover:bg-marine-100 cursor-pointer'>
            <FaArrowLeft className='pr-2' />
            <h4>Back</h4>
          </div>
        )}
        {selectedCity // Render addresses if a city is selected
          ? data &&
            data
              .filter((parking) => parking.city === selectedCity)
              .map((parking) => (
                <Link
                  key={parking.id}
                  className='font-body-xs'
                  to={`/privat/findparkering/${parking.id}`}>
                  <div>{parking.address}</div>
                </Link>
              ))
          : // Render cities if no city is selected
            filteredCities &&
            filteredCities.map((city) => (
              <div
                key={city}
                onClick={() => setSelectedCity(city)}
                className={clsx(
                  'flex flex-row items-center w-full border-b-1 border-marine-200 font-h6 hover:bg-marine-100 cursor-pointer',
                  {
                    'bg-marine-100': selectedCity === city,
                  }
                )}>
                <h4 className='pr-2'>{city}</h4>
                <FaArrowRightLong className='ml-auto' />
              </div>
            ))}
      </div>
    </div>
  );
}
CitiesMap.propTypes = {
  onFetchData: PropTypes.any,
};
